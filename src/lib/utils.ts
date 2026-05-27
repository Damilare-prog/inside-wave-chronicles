export const generateToken = (email: string): string => {
  const timestamp = Date.now().toString(36).toUpperCase();
  const random = Math.random().toString(36).substring(2, 6).toUpperCase();
  const emailHash = btoa(email).substring(0, 4).toUpperCase();
  return `IWC-${emailHash}-${timestamp}-${random}`;
};

export const shuffleArray = <T>(array: T[]): T[] => {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
};

export interface ShuffledQuestion {
  id: number;
  question: string;
  options: { text: string; originalIndex: number }[];
  correct: number;
}

export const getRandomQuestions = (questionBank: { id: number; question: string; options: string[]; correct: number }[], count = 8): ShuffledQuestion[] => {
  const shuffled = shuffleArray(questionBank);
  return shuffled.slice(0, count).map((q) => ({
    ...q,
    options: shuffleArray(q.options.map((opt, idx) => ({ text: opt, originalIndex: idx }))),
  }));
};
