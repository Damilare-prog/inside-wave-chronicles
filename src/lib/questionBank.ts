export interface Question {
  id: number;
  question: string;
  options: string[];
  correct: number;
}

export const questionBank: Question[] = [
  // AFROBEATS ARTISTS
  { id: 1, question: "Which Nigerian artist is known as the 'African Giant'?", options: ["Wizkid", "Burna Boy", "Davido", "Olamide"], correct: 1 },
  { id: 2, question: "What was Wizkid's breakout single in 2010?", options: ["Ojuelegba", "Holla at Your Boy", "Joro", "Essence"], correct: 1 },
  { id: 3, question: "Which artist released the album 'Made in Lagos'?", options: ["Burna Boy", "Davido", "Wizkid", "Rema"], correct: 2 },
  { id: 4, question: "Rema is signed to which record label?", options: ["Starboy", "DMW", "Mavin Records", "YBNL"], correct: 2 },
  { id: 5, question: "Which song made Tems internationally famous?", options: ["Damages", "Free Mind", "Essence", "Higher"], correct: 2 },
  { id: 6, question: "Davido's real name is?", options: ["Ayodeji Balogun", "Damini Ogulu", "David Adeleke", "Divine Ikubor"], correct: 2 },
  { id: 7, question: "Which artist is known for the 'Zanku' dance?", options: ["Naira Marley", "Zlatan", "Poco Lee", "Rahman Jago"], correct: 1 },
  { id: 8, question: "Burna Boy's Grammy-winning album is titled?", options: ["African Giant", "Twice as Tall", "Outside", "Love Damini"], correct: 1 },
  { id: 9, question: "Which female artist is called 'Mama Africa'?", options: ["Tiwa Savage", "Yemi Alade", "Simi", "Niniola"], correct: 1 },
  { id: 10, question: "What does 'Soco' mean in Wizkid's song?", options: ["Dance", "Money", "Sweet", "Gbedu"], correct: 2 },
  { id: 11, question: "Which artist featured Beyoncé on 'Brown Skin Girl'?", options: ["Burna Boy", "Wizkid", "Davido", "Tiwa Savage"], correct: 1 },
  { id: 12, question: "Omah Lay's first hit single was?", options: ["Godly", "Bad Influence", "You", "Damn"], correct: 1 },
  { id: 13, question: "Which artist is known as 'Portable' or 'Zazu'?", options: ["Naira Marley", "Asake", "Portable", "Bella Shmurda"], correct: 2 },
  { id: 14, question: "Fireboy DML graduated from which university?", options: ["University of Lagos", "Obafemi Awolowo University", "University of Ibadan", "Covenant University"], correct: 1 },
  { id: 15, question: "Which song won the first Afrobeats Grammy in 2023?", options: ["Last Last", "Rush", "Calm Down", "Wait For U"], correct: 0 },

  // MUSIC & CULTURE
  { id: 16, question: "What genre did Fela Kuti create?", options: ["Juju", "Highlife", "Afrobeat", "Apala"], correct: 2 },
  { id: 17, question: "Which instrument is central to Afrobeats production?", options: ["Talking Drum", "Shekere", "Talking Drum & Percussion", "Guitar"], correct: 2 },
  { id: 18, question: "What does 'Gbedu' mean?", options: ["Love", "Heavy Music/Vibes", "Money", "Dance"], correct: 1 },
  { id: 19, question: "Which Lagos neighborhood is famous for its music scene?", options: ["Ikoyi", "Victoria Island", "Ikeja", "Oshodi"], correct: 2 },
  { id: 20, question: "What is a 'Detty December'?", options: ["Cleaning month", "Party season in Lagos", "Religious period", "Farming season"], correct: 1 },
  { id: 21, question: "Which DJ is credited with popularizing 'Afrobeats' in the UK?", options: ["DJ Cuppy", "DJ Neptune", "DJ Abrantee", "DJ Spinall"], correct: 2 },
  { id: 22, question: "What does 'Japa' mean in Nigerian slang?", options: ["To party", "To leave/emigrate", "To dance", "To eat"], correct: 1 },
  { id: 23, question: "Which festival is the biggest Afrobeats event in Lagos?", options: ["Felabration", "Flytime Music Festival", "Lagos Jazz Festival", "Gidi Culture Festival"], correct: 1 },
  { id: 24, question: "What is 'Owambe'?", options: ["A type of food", "A lavish party", "A dance move", "A song"], correct: 1 },
  { id: 25, question: "Which social media platform made Afrobeats go global?", options: ["Facebook", "Twitter", "TikTok", "Instagram"], correct: 2 },

  // LIFESTYLE
  { id: 26, question: "What is 'Suya'?", options: ["A dance", "Spiced grilled meat", "A drink", "A fabric"], correct: 1 },
  { id: 27, question: "Which Nigerian city is called 'Eko'?", options: ["Abuja", "Lagos", "Port Harcourt", "Ibadan"], correct: 1 },
  { id: 28, question: "What does 'Shakara' mean?", options: ["To show off", "To cook", "To sleep", "To run"], correct: 0 },
  { id: 29, question: "Which car brand is a status symbol in Lagos?", options: ["Toyota", "Honda", "Mercedes-Benz G-Wagon", "Nissan"], correct: 2 },
  { id: 30, question: "What is 'Zobo'?", options: ["A shoe brand", "Hibiscus drink", "A phone", "A car"], correct: 1 },
  { id: 31, question: "Which Lagos island is known for luxury nightlife?", options: ["Lagos Island", "Victoria Island", "Ikorodu", "Festac"], correct: 1 },
  { id: 32, question: "What does 'Soft life' mean?", options: ["Hard work", "Luxury/easy living", "Sleeping", "Eating well"], correct: 1 },
  { id: 33, question: "Which Nigerian fashion item went global in 2020s?", options: ["Ankara", "Agbada", "Dashiki", "All of the above"], correct: 3 },
  { id: 34, question: "What is 'Jollof Rice'?", options: ["A type of bread", "A rice dish", "A soup", "A snack"], correct: 1 },
  { id: 35, question: "Which phone brand is most popular among Nigerian youth?", options: ["Samsung", "iPhone", "Tecno", "Infinix"], correct: 1 },
  { id: 36, question: "What does 'Wahala' mean?", options: ["Joy", "Trouble", "Money", "Food"], correct: 1 },
  { id: 37, question: "Which Lagos beach is famous for parties?", options: ["Elegushi", "Tarkwa Bay", "Bar Beach", "Eleko"], correct: 0 },
  { id: 38, question: "What is 'Bole'?", options: ["Roasted plantain", "Fried rice", "Beans", "Yam"], correct: 0 },
  { id: 39, question: "Which Nigerian slang means 'understand'?", options: ["Sabi", "Oya", "Shey", "Abeg"], correct: 0 },
  { id: 40, question: "What does 'Gbe body e' mean?", options: ["Sit down", "Move your body/dance", "Stand up", "Go home"], correct: 1 },
  { id: 41, question: "Which shoe brand is associated with Lagos street culture?", options: ["Nike Air Force 1", "Adidas", "Puma", "Converse"], correct: 0 },
  { id: 42, question: "What is 'Nkwobi'?", options: ["A soup", "Spicy cow foot", "A drink", "A dance"], correct: 1 },
  { id: 43, question: "Which Lagos market is famous for luxury fashion?", options: ["Yaba", "Idumota", "Balogun", "Oshodi"], correct: 2 },
  { id: 44, question: "What does 'Soro Soke' mean?", options: ["Speak up", "Sit down", "Go away", "Come here"], correct: 0 },
  { id: 45, question: "Which Nigerian artist is known for 'Afro-fusion'?", options: ["Wizkid", "Burna Boy", "Davido", "Rema"], correct: 1 },
  { id: 46, question: "What is 'Amala' made from?", options: ["Cassava", "Yam flour", "Plantain", "Rice"], correct: 1 },
  { id: 47, question: "Which club in Lagos is iconic for Afrobeats nights?", options: ["Quilox", "Club DNA", "Both", "None"], correct: 2 },
  { id: 48, question: "What does 'Kpele' mean?", options: ["Sorry", "Thank you", "Welcome", "Goodbye"], correct: 0 },
  { id: 49, question: "Which Nigerian comedian is also a musician?", options: ["Broda Shaggi", "Basketmouth", "AY", "Bovi"], correct: 0 },
  { id: 50, question: "What is 'Pounded Yam' called in Yoruba?", options: ["Eba", "Iyan", "Fufu", "Amala"], correct: 1 },
  { id: 51, question: "Which streaming platform boosted Afrobeats globally?", options: ["Apple Music", "Spotify", "YouTube", "All of the above"], correct: 3 },
  { id: 52, question: "What does 'Omo' mean in slang?", options: ["Child/Expression of surprise", "Money", "Food", "Car"], correct: 0 },
  { id: 53, question: "Which Nigerian city is the 'Centre of Excellence'?", options: ["Abuja", "Lagos", "Port Harcourt", "Kano"], correct: 1 },
  { id: 54, question: "What is 'Asun'?", options: ["Grilled goat meat", "Fish", "Chicken", "Beef"], correct: 0 },
  { id: 55, question: "Which artist is known for 'Afro-depression' vibes?", options: ["Fireboy", "Omah Lay", "Brymo", "Johnny Drille"], correct: 1 },
];
