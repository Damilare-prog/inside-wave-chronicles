"use client";

import { useState, useEffect, useRef, useCallback } from 'react';
import GlitchText from '@/components/GlitchText';
import CyberButton from '@/components/CyberButton';
import { questionBank } from '@/lib/questionBank';
import { generateToken, getRandomQuestions, ShuffledQuestion } from '@/lib/utils';

type View = 'landing' | 'onboarding' | 'trivia' | 'success' | 'failed';

export default function Home() {
  const [view, setView] = useState<View>('landing');
  const [email, setEmail] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [questions, setQuestions] = useState<ShuffledQuestion[]>([]);
  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [timeLeft, setTimeLeft] = useState(45);
  const [sessionId] = useState(() => `IWC_${Math.random().toString(36).substr(2, 9).toUpperCase()}`);
  const [token, setToken] = useState('');
  const [score, setScore] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Anti-cheat session check
  useEffect(() => {
    if (view === 'trivia') {
      const session = sessionStorage.getItem('iwc_session');
      if (!session || session !== sessionId) {
        setView('landing');
      }
    }
  }, [view, sessionId]);

  // Timer
  useEffect(() => {
    if (view === 'trivia' && timeLeft > 0) {
      timerRef.current = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            handleSubmit();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [view, timeLeft]);

  const startTrivia = () => {
    if (!email || !email.includes('@')) {
      alert('ENTER VALID EMAIL PROTOCOL');
      return;
    }

    sessionStorage.setItem('iwc_session', sessionId);
    sessionStorage.setItem('iwc_email', email);

    const selectedQuestions = getRandomQuestions(questionBank, 8);
    setQuestions(selectedQuestions);
    setCurrentQ(0);
    setAnswers({});
    setTimeLeft(45);
    setScore(0);
    setView('trivia');
  };

  const handleAnswer = (questionIndex: number, optionIndex: number) => {
    setAnswers((prev) => ({ ...prev, [questionIndex]: optionIndex }));
  };

  const handleSubmit = useCallback(() => {
    if (isSubmitting) return;
    setIsSubmitting(true);
    if (timerRef.current) clearInterval(timerRef.current);

    let correctCount = 0;
    questions.forEach((q, idx) => {
      if (answers[idx] !== undefined) {
        const selectedOption = q.options[answers[idx]];
        if (selectedOption.originalIndex === q.correct) correctCount++;
      }
    });

    const percentage = (correctCount / questions.length) * 100;
    setScore(percentage);

    const stats = JSON.parse(localStorage.getItem('iwc_stats') || '{"attempts":0,"wins":0,"winners":[]}');
    stats.attempts++;

    if (percentage >= 75) {
      const newToken = generateToken(email);
      setToken(newToken);
      stats.wins++;
      stats.winners.push({ email, token: newToken, date: new Date().toISOString(), score: percentage });
      localStorage.setItem('iwc_stats', JSON.stringify(stats));
      setView('success');
    } else {
      localStorage.setItem('iwc_stats', JSON.stringify(stats));
      setView('failed');
    }
    setIsSubmitting(false);
  }, [isSubmitting, questions, answers, email]);

  const handleWhatsAppRedirect = () => {
    const message = `INSIDE WAVE CHRONICLES — ACCESS REQUEST\n\nToken: ${token}\nEmail: ${email}\nScore: ${score.toFixed(0)}%\n\nI passed the trivia. Ready to pay for my ticket.`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/2349133588720?text=${encodedMessage}`, '_blank');
  };

  // ==================== VIEWS ====================

  const renderLanding = () => (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 relative grid-bg">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 via-red-500 to-cyan-500" />

      <div className="text-center max-w-2xl mx-auto">
        <div className="mb-2 font-mono-tech text-cyan-400 text-xs tracking-[0.3em]">
          INSIDE WAVE CHRONICLES // ACCESS PROTOCOL v2.0
        </div>

        <h1 className="font-cyber text-5xl md:text-7xl font-black mb-4 tracking-tighter">
          <GlitchText text="PROVE" className="block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">
            YOUR WAVE
          </span>
        </h1>

        <p className="font-mono-tech text-gray-400 text-sm md:text-base mb-12 tracking-wide">
          [ SYSTEM LOCKED ] — AUTHENTICATION REQUIRED
          <br />
          8 QUESTIONS // 45 SECONDS // 75% PASS MARK
        </p>

        <CyberButton onClick={() => setView('onboarding')} variant="solid" className="text-lg pulse-neon">
          INITIATE SEQUENCE
        </CyberButton>

        <div className="mt-16 grid grid-cols-3 gap-8 text-center font-mono-tech text-xs">
          <div className="neon-border p-4">
            <div className="text-cyan-400 text-xl font-bold mb-1">55+</div>
            <div className="text-gray-500">QUESTIONS</div>
          </div>
          <div className="neon-border p-4">
            <div className="text-red-400 text-xl font-bold mb-1">45s</div>
            <div className="text-gray-500">TIMER</div>
          </div>
          <div className="neon-border p-4">
            <div className="text-cyan-400 text-xl font-bold mb-1">75%</div>
            <div className="text-gray-500">PASS MARK</div>
          </div>
        </div>

        <div className="mt-12 text-xs text-gray-600 font-mono-tech">
          SECURE CONNECTION // ANTI-CHEAT ENABLED // NO SCREENSHOT SHARING
        </div>
      </div>
    </div>
  );

  const renderOnboarding = () => (
    <div className="min-h-screen flex items-center justify-center p-6 grid-bg">
      <div className="w-full max-w-md">
        <div className="mb-8 text-center">
          <div className="font-mono-tech text-cyan-400 text-xs mb-2">STEP 01 // IDENTITY VERIFICATION</div>
          <h2 className="font-cyber text-3xl font-bold">ACCESS CREDENTIALS</h2>
        </div>

        <div className="neon-border bg-black/40 p-8 space-y-6">
          <div>
            <label className="font-mono-tech text-xs text-cyan-400 mb-2 block tracking-wider">
              EMAIL ADDRESS [REQUIRED]
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-black/50 border border-cyan-500/30 rounded-none px-4 py-3 font-mono-tech text-white focus:outline-none focus:border-cyan-400 focus:shadow-[0_0_15px_rgba(0,212,255,0.2)] transition"
              placeholder="user@domain.com"
            />
          </div>

          <div>
            <label className="font-mono-tech text-xs text-gray-400 mb-2 block tracking-wider">
              WHATSAPP [OPTIONAL]
            </label>
            <input
              type="tel"
              value={whatsapp}
              onChange={(e) => setWhatsapp(e.target.value)}
              className="w-full bg-black/50 border border-white/10 rounded-none px-4 py-3 font-mono-tech text-white focus:outline-none focus:border-cyan-400 transition"
              placeholder="+234..."
            />
          </div>

          <div className="neon-border-red bg-red-500/5 p-4 text-xs font-mono-tech text-red-300">
            <div className="flex items-start gap-2">
              <span className="text-red-500 text-lg">⚠</span>
              <div>
                WARNING: SESSION LOCKED TO THIS EMAIL.
                <br />
                REFRESHING WILL TERMINATE PROTOCOL.
                <br />
                TIMER STARTS ON INITIATION.
              </div>
            </div>
          </div>

          <CyberButton onClick={startTrivia} variant="solid" className="w-full">
            BEGIN TRIVIA PROTOCOL
          </CyberButton>

          <button
            onClick={() => setView('landing')}
            className="w-full text-gray-500 hover:text-cyan-400 font-mono-tech text-xs tracking-wider transition"
          >
            [ RETURN TO MAINFRAME ]
          </button>
        </div>
      </div>
    </div>
  );

  const renderTrivia = () => {
    const question = questions[currentQ];
    if (!question) return null;

    const progress = ((currentQ + 1) / questions.length) * 100;
    const timerColor = timeLeft < 10 ? 'text-red-400' : timeLeft < 20 ? 'text-yellow-400' : 'text-cyan-400';

    return (
      <div className="min-h-screen p-6 flex flex-col max-w-3xl mx-auto grid-bg">
        {/* Header */}
        <div className="mb-8">
          <div className="flex justify-between items-end mb-4 font-mono-tech">
            <div>
              <div className="text-xs text-gray-500 mb-1">
                QUESTION {currentQ + 1} / {questions.length}
              </div>
              <div className="text-cyan-400 text-sm tracking-wider">{sessionId}</div>
            </div>
            <div className="text-right">
              <div className="text-xs text-gray-500 mb-1">TIME REMAINING</div>
              <div className={`text-3xl font-bold ${timerColor}`}>{timeLeft}s</div>
            </div>
          </div>

          {/* Progress */}
          <div className="h-1 bg-white/10 relative overflow-hidden">
            <div className="h-full progress-cyber transition-all duration-500" style={{ width: `${progress}%` }} />
          </div>
          <div className="h-px bg-gradient-to-r from-cyan-500/50 to-red-500/50 mt-1" />
        </div>

        {/* Question */}
        <div className="flex-1">
          <h3 className="font-cyber text-xl md:text-2xl font-bold mb-8 leading-relaxed">{question.question}</h3>

          <div className="space-y-3">
            {question.options.map((opt, idx) => (
              <button
                key={idx}
                onClick={() => handleAnswer(currentQ, idx)}
                className={`option-cyber w-full text-left p-5 bg-black/30 font-mono-tech text-sm md:text-base flex items-center gap-4 ${
                  answers[currentQ] === idx ? 'selected' : 'border border-white/5'
                }`}
              >
                <div
                  className={`w-6 h-6 border flex items-center justify-center flex-shrink-0 font-cyber text-xs ${
                    answers[currentQ] === idx
                      ? 'border-cyan-400 bg-cyan-400/20 text-cyan-400'
                      : 'border-white/20 text-transparent'
                  }`}
                >
                  {answers[currentQ] === idx ? '◉' : '○'}
                </div>
                <span>{opt.text}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <div className="mt-8 flex justify-between items-center font-mono-tech">
          <button
            onClick={() => setCurrentQ(Math.max(0, currentQ - 1))}
            disabled={currentQ === 0}
            className="text-gray-500 hover:text-cyan-400 disabled:opacity-30 transition text-sm tracking-wider"
          >
            [ PREV ]
          </button>

          {currentQ === questions.length - 1 ? (
            <CyberButton onClick={handleSubmit} disabled={isSubmitting} variant="solid">
              {isSubmitting ? 'PROCESSING...' : 'SUBMIT PROTOCOL'}
            </CyberButton>
          ) : (
            <CyberButton onClick={() => setCurrentQ(currentQ + 1)} variant="blue">
              NEXT →
            </CyberButton>
          )}
        </div>
      </div>
    );
  };

  const renderSuccess = () => (
    <div className="min-h-screen flex items-center justify-center p-6 grid-bg">
      <div className="w-full max-w-lg text-center">
        <div className="mb-8">
          <div className="w-24 h-24 mx-auto mb-6 relative">
            <div className="absolute inset-0 border-2 border-cyan-400 rounded-full animate-ping opacity-20" />
            <div className="w-24 h-24 bg-cyan-400/10 rounded-full flex items-center justify-center check-pop neon-border">
              <svg className="w-12 h-12 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
            </div>
          </div>

          <div className="font-mono-tech text-cyan-400 text-xs tracking-[0.3em] mb-2">ACCESS GRANTED</div>
          <h2 className="font-cyber text-4xl font-bold mb-2">WAVE VERIFIED</h2>
          <div className="text-gray-400 font-mono-tech">
            SCORE: <span className="text-cyan-400">{score.toFixed(0)}%</span>
          </div>
        </div>

        <div className="neon-border bg-black/40 p-8 mb-8">
          <div className="font-mono-tech text-xs text-gray-500 mb-2 tracking-wider">UNIQUE ACCESS TOKEN</div>
          <div className="font-mono-tech text-2xl md:text-3xl text-cyan-400 font-bold tracking-wider mb-4 break-all">
            {token}
          </div>
          <div className="text-xs text-gray-600 font-mono-tech">LOCKED TO: {email}</div>

          <div className="mt-6 pt-6 border-t border-white/10">
            <div className="font-mono-tech text-xs text-red-400 mb-4">
              ⚠ THIS TOKEN IS SINGLE-USE AND NON-TRANSFERABLE
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <CyberButton onClick={handleWhatsAppRedirect} variant="solid" className="w-full text-lg">
            COMPLETE PAYMENT VIA WHATSAPP
          </CyberButton>

          <div className="font-mono-tech text-xs text-gray-500">
            You will be redirected to verify your token and complete payment.
            <br />
            Agent: <span className="text-cyan-400">+234 913 358 8720</span>
          </div>

          <button
            onClick={() => {
              navigator.clipboard.writeText(`${token} | ${email}`);
              alert('TOKEN COPIED TO CLIPBOARD');
            }}
            className="text-cyan-400 hover:text-cyan-300 font-mono-tech text-xs tracking-wider transition"
          >
            [ COPY TOKEN TO CLIPBOARD ]
          </button>
        </div>
      </div>
    </div>
  );

  const renderFailed = () => (
    <div className="min-h-screen flex items-center justify-center p-6 grid-bg">
      <div className="w-full max-w-md text-center">
        <div className="w-24 h-24 mx-auto mb-8 neon-border-red bg-red-500/5 flex items-center justify-center">
          <svg className="w-12 h-12 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </div>

        <div className="font-mono-tech text-red-400 text-xs tracking-[0.3em] mb-2">ACCESS DENIED</div>
        <h2 className="font-cyber text-3xl font-bold mb-4">INSUFFICIENT WAVE</h2>

        <div className="neon-border-red bg-red-500/5 p-6 mb-8">
          <div className="font-mono-tech text-sm text-gray-300 mb-2">
            YOUR SCORE: <span className="text-red-400 text-xl font-bold">{score.toFixed(0)}%</span>
          </div>
          <div className="text-xs text-gray-500">REQUIRED: 75%</div>
          <div className="mt-4 text-xs text-gray-400">
            Each session generates unique questions.
            <br />
            No two users receive identical protocols.
          </div>
        </div>

        <CyberButton
          onClick={() => {
            sessionStorage.clear();
            setView('landing');
          }}
          variant="red"
        >
          REINITIALIZE PROTOCOL
        </CyberButton>
      </div>
    </div>
  );

  // Route
  switch (view) {
    case 'onboarding':
      return renderOnboarding();
    case 'trivia':
      return renderTrivia();
    case 'success':
      return renderSuccess();
    case 'failed':
      return renderFailed();
    case 'landing':
    default:
      return renderLanding();
  }
}
