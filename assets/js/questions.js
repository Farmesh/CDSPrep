// ================================================
// TARGETCDS - QUIZ QUESTIONS DATABASE
// Real CDS Exam Level Questions Based on UPSC Patterns
// ================================================

const quizDatabase = {
    gk: [
        {
            id: 1,
            q: "Which Article of the Indian Constitution provides for the right to constitutional remedies?",
            options: ["Article 32", "Article 33", "Article 34", "Article 35"],
            correct: 0,
            exp: "Article 32 grants the right to move the Supreme Court directly for the enforcement of fundamental rights. It is also known as the 'right to constitutional remedies'."
        },
        {
            id: 2,
            q: "The Directive Principles of State Policy are enshrined in which Part of the Constitution?",
            options: ["Part II", "Part III", "Part IV", "Part V"],
            correct: 2,
            exp: "Part IV of the Indian Constitution (Articles 36-51) contains the Directive Principles of State Policy. They are non-justiciable and provide guidelines for state policy."
        },
        {
            id: 3,
            q: "Which of the following rivers is the longest in India?",
            options: ["Brahmaputra", "Ganges", "Godavari", "Yamuna"],
            correct: 1,
            exp: "The Ganges (or Ganga) is the longest river in India with a length of about 2,525 km. It originates in the Himalayas and flows through the Indo-Gangetic Plain."
        },
        {
            id: 4,
            q: "The Tropic of Cancer passes through how many Indian states?",
            options: ["6", "7", "8", "9"],
            correct: 2,
            exp: "The Tropic of Cancer passes through 8 states: Gujarat, Rajasthan, Madhya Pradesh, Chhattisgarh, Jharkhand, West Bengal, Tripura, and Mizoram."
        },
        {
            id: 5,
            q: "Who was the first Governor General of independent India?",
            options: ["Jawaharlal Nehru", "Lord Mountbatten", "C. Rajagopalachari", "Rajendra Prasad"],
            correct: 1,
            exp: "Lord Mountbatten was the first Governor General of independent India from 1947 to 1948. He was succeeded by C. Rajagopalachari."
        },
        {
            id: 6,
            q: "Which battle is considered the beginning of the modern period of Indian history?",
            options: ["Battle of Talikota", "Battle of Plassey", "Battle of Buxar", "Battle of Panipat"],
            correct: 1,
            exp: "The Battle of Plassey (1757) between Robert Clive and Siraj-ud-Daulah is considered the beginning of the modern period of Indian history."
        },
        {
            id: 7,
            q: "The Jallianwala Bagh massacre occurred in which year?",
            options: ["1917", "1918", "1919", "1920"],
            correct: 2,
            exp: "The Jallianwala Bagh massacre took place on April 13, 1919, when British troops fired on unarmed Indian civilians in Amritsar."
        },
        {
            id: 8,
            q: "Which element has the highest atomic number?",
            options: ["Uranium", "Thorium", "Plutonium", "Francium"],
            correct: 0,
            exp: "Uranium has atomic number 92. Among naturally occurring elements, it has the highest atomic number. Plutonium (94) is synthetic."
        },
        {
            id: 9,
            q: "The pH value of pure water at 25°C is:",
            options: ["6", "7", "8", "9"],
            correct: 1,
            exp: "The pH of pure water at 25°C is 7, which is neutral. This is because water ionizes equally into H+ and OH- ions."
        },
        {
            id: 10,
            q: "Which Indian Navy exercise is conducted with France?",
            options: ["Malabar", "Varuna", "Konkan", "Virat"],
            correct: 1,
            exp: "Varuna is a bilateral naval exercise conducted between the Indian Navy and the French Navy. It was first held in 1983."
        },
        {
            id: 11,
            q: "The QUAD group includes which of the following countries?",
            options: ["India, USA, Japan, Australia", "India, USA, China, Japan", "India, UK, Japan, Australia", "USA, UK, France, Australia"],
            correct: 0,
            exp: "The Quadrilateral Security Dialogue (QUAD) comprises India, the United States, Japan, and Australia. It was formed to ensure a free and open Indo-Pacific."
        },
        {
            id: 12,
            q: "Which state in India has the longest coastline?",
            options: ["Tamil Nadu", "Kerala", "Maharashtra", "Gujarat"],
            correct: 3,
            exp: "Gujarat has the longest coastline in India at approximately 1,214 km, followed by Maharashtra and Tamil Nadu."
        },
        {
            id: 13,
            q: "The Ayodhya verdict (2019) was given by which court?",
            options: ["Allahabad High Court", "Delhi High Court", "Supreme Court of India", "Lucknow District Court"],
            correct: 0,
            exp: "The Ayodhya verdict was given by a special bench of the Allahabad High Court on November 9, 2019, regarding the Ram Janmabhoomi-Babri Masjid dispute."
        },
        {
            id: 14,
            q: "Who is the author of the book 'The Discovery of India'?",
            options: ["Mahatma Gandhi", "Jawaharlal Nehru", "Sardar Vallabhbhai Patel", "Subhas Chandra Bose"],
            correct: 1,
            exp: "'The Discovery of India' was written by Jawaharlal Nehru while he was imprisoned in 1944-45. It is a comprehensive history of India."
        },
        {
            id: 15,
            q: "The Mahayana and Hinayana are two major branches of which religion?",
            options: ["Hinduism", "Buddhism", "Jainism", "Sikhism"],
            correct: 1,
            exp: "Mahayana and Hinayana are the two major branches of Buddhism. Mahayana is followed in East Asia, while Hinayana (Theravada) is prevalent in Southeast Asia."
        }
    ],
    eng: [
        {
            id: 1,
            q: "Spot the error: 'He is one of the best players (a) / who has ever played (b) / this game. (c) / No error (d)'",
            options: ["(a)", "(b)", "(c)", "(d)"],
            correct: 1,
            exp: "Error is in (b). When using 'one of the + plural noun + relative pronoun', the verb should be plural. Correct: 'who have ever played'."
        },
        {
            id: 2,
            q: "Select the Antonym for: OBSCURE",
            options: ["Clear", "Hidden", "Complex", "Distant"],
            correct: 0,
            exp: "Obscure means not discovered or known; unclear. The opposite is 'Clear' which means obvious and easy to understand."
        },
        {
            id: 3,
            q: "Which word best completes the sentence: 'The witness was ______ and refused to testify.'",
            options: ["eloquent", "reticent", "verbose", "articulate"],
            correct: 1,
            exp: "'Reticent' means unwilling to speak or express oneself. It perfectly describes someone refusing to testify. Eloquent, verbose, and articulate mean the opposite."
        },
        {
            id: 4,
            q: "Meaning of the idiom: 'To throw down the gauntlet'",
            options: ["To accept defeat", "To issue a challenge", "To run away", "To surrender"],
            correct: 1,
            exp: "To 'throw down the gauntlet' means to issue or declare a challenge to someone. It comes from medieval times when knights would throw their gloves as a sign of challenge."
        },
        {
            id: 5,
            q: "Select the Synonym for: ACRIMONIOUS",
            options: ["Sweet", "Bitter", "Pleasant", "Gentle"],
            correct: 1,
            exp: "'Acrimonious' means bitter and harsh in tone or manner. Its synonym is 'Bitter'. It describes sharp and ill-tempered speech or manner."
        },
        {
            id: 6,
            q: "Fill in the blank: 'The manager was completely ______ in his work.'",
            options: ["engrossed", "attached", "devoted", "subjected"],
            correct: 0,
            exp: "'Engrossed' means having all one's attention or interest absorbed. It perfectly fits the context of being completely absorbed in work."
        },
        {
            id: 7,
            q: "Which of the following is a correct usage of 'its' and 'it's'?",
            options: ["The dog wagged it's tail", "The dog wagged its tail", "Its a beautiful day", "It's properties are unknown"],
            correct: 1,
            exp: "'Its' is the possessive pronoun (the dog's tail), while 'it's' is the contraction of 'it is' (it is a beautiful day). Option 2 is correct."
        },
        {
            id: 8,
            q: "Ordering of Words: (P) the students / (Q) to complete / (R) the teacher asked / (S) their assignments",
            options: ["RPQS", "RPSQ", "PRQS", "QRSP"],
            correct: 1,
            exp: "The correct order is RPSQ: 'The teacher asked (R) the students (P) to complete (S) their assignments (Q)'."
        },
        {
            id: 9,
            q: "One word substitution: 'A person who speaks many languages'",
            options: ["Monopolist", "Polyglot", "Diplomat", "Linguist"],
            correct: 1,
            exp: "'Polyglot' specifically means a person who knows or uses many languages. While 'Linguist' is related, 'Polyglot' is the more precise term."
        },
        {
            id: 10,
            q: "Which sentence is grammatically correct?",
            options: ["He don't like playing cricket", "He doesn't like playing cricket", "He didn't liked cricket", "He don't likes cricket"],
            correct: 1,
            exp: "The correct sentence uses the present simple tense correctly: 'He doesn't like playing cricket.' The third-person singular requires 'doesn't' and base verb form."
        },
        {
            id: 11,
            q: "Cloze Test: 'Although she was ______, she decided to ______ forward with her plans.'",
            options: ["afraid, go", "afraid, went", "frighten, come", "brave, move"],
            correct: 0,
            exp: "The correct answer is 'afraid, go'. The sentence structure requires 'Although she was afraid, she decided to go forward', maintaining parallel structure and appropriate tenses."
        },
        {
            id: 12,
            q: "Spot the error: 'If I would have known about the party, I would have attended.'",
            options: ["would have", "known", "attended", "No error"],
            correct: 0,
            exp: "Error in structure. In conditional sentences, never use 'would have' with 'if'. Correct: 'If I had known...' or 'Had I known...'."
        },
        {
            id: 13,
            q: "Select the most appropriate word: 'The ______ weather made it impossible to go outside.'",
            options: ["rough", "severe", "harsh", "inclement"],
            correct: 3,
            exp: "'Inclement' specifically describes bad or stormy weather that is unsuitable for going outside. It's the most precise and formal choice here."
        },
        {
            id: 14,
            q: "Synonym for EPHEMERAL:",
            options: ["Permanent", "Temporary", "Lasting", "Durable"],
            correct: 1,
            exp: "'Ephemeral' means short-lived or temporary. It describes something that lasts only a short time. The opposite would be permanent or durable."
        },
        {
            id: 15,
            q: "Ordering of Sentences: (S1) Crime rates have been rising. (S2) The police force needs more funding. (S3) More officers are needed. (S4) This is a serious problem.",
            options: ["S1-S4-S2-S3", "S1-S3-S2-S4", "S4-S1-S2-S3", "S1-S4-S3-S2"],
            correct: 0,
            exp: "Correct order: S1-S4-S2-S3. First statement the fact, then acknowledges it's serious, then the solution (funding), then the specific need (more officers)."
        }
    ],
    math: [
        {
            id: 1,
            q: "If the radius of a circle is increased by 50%, its area will increase by:",
            options: ["50%", "100%", "125%", "150%"],
            correct: 2,
            exp: "Let initial radius = r. Area = πr². New radius = 1.5r. New Area = π(1.5r)² = 2.25πr². Increase = (2.25 - 1) × 100% = 125%."
        },
        {
            id: 2,
            q: "What is the value of: sin²25° + sin²65°?",
            options: ["0", "1", "0.5", "√2"],
            correct: 1,
            exp: "sin 65° = sin(90° - 25°) = cos 25°. Therefore, sin²25° + cos²25° = 1 (fundamental trigonometric identity)."
        },
        {
            id: 3,
            q: "The sides of a triangle are 10 cm, 24 cm, and 26 cm. What is its area?",
            options: ["120 cm²", "240 cm²", "130 cm²", "312 cm²"],
            correct: 0,
            exp: "This is a right triangle: 10² + 24² = 100 + 576 = 676 = 26². Area = (1/2) × base × height = (1/2) × 10 × 24 = 120 cm²."
        },
        {
            id: 4,
            q: "If x + 1/x = 3, then x² + 1/x² = ?",
            options: ["5", "7", "9", "11"],
            correct: 1,
            exp: "Squaring: (x + 1/x)² = 9 ⟹ x² + 2 + 1/x² = 9 ⟹ x² + 1/x² = 7."
        },
        {
            id: 5,
            q: "A train 100m long running at 30 km/hr. Time to pass a stationary man:",
            options: ["10 sec", "12 sec", "15 sec", "20 sec"],
            correct: 1,
            exp: "Speed in m/s = 30 × 5/18 = 25/3 m/s. Time = Distance/Speed = 100 ÷ (25/3) = 100 × 3/25 = 12 seconds."
        },
        {
            id: 6,
            q: "Simple Interest on Rs. 1000 at 5% per annum for 2 years:",
            options: ["Rs. 50", "Rs. 100", "Rs. 150", "Rs. 200"],
            correct: 1,
            exp: "SI = (P × R × T)/100 = (1000 × 5 × 2)/100 = 100. Simple Interest is Rs. 100."
        },
        {
            id: 7,
            q: "What is the HCF of 48 and 64?",
            options: ["8", "12", "16", "32"],
            correct: 2,
            exp: "48 = 2⁴ × 3, 64 = 2⁶. HCF = 2⁴ = 16. The highest common factor is 16."
        },
        {
            id: 8,
            q: "If 2x - 3 = 7, then x = ?",
            options: ["2", "3", "4", "5"],
            correct: 3,
            exp: "2x - 3 = 7 ⟹ 2x = 10 ⟹ x = 5. Solving the linear equation step by step."
        },
        {
            id: 9,
            q: "The average of 5, 10, 15, 20, 25 is:",
            options: ["12", "15", "18", "20"],
            correct: 1,
            exp: "Average = (5 + 10 + 15 + 20 + 25)/5 = 75/5 = 15."
        },
        {
            id: 10,
            q: "What is 25% of 80?",
            options: ["15", "20", "25", "30"],
            correct: 1,
            exp: "25% of 80 = 0.25 × 80 = 20."
        },
        {
            id: 11,
            q: "If A:B = 3:4 and B:C = 5:6, then A:B:C = ?",
            options: ["3:4:6", "15:20:24", "3:5:6", "4:5:6"],
            correct: 1,
            exp: "A:B = 3:4, B:C = 5:6. To make B equal, multiply first by 5 and second by 4: A:B:C = 15:20:24."
        },
        {
            id: 12,
            q: "The area of a rectangle with length 12m and width 8m is:",
            options: ["20 m²", "40 m²", "96 m²", "192 m²"],
            correct: 2,
            exp: "Area of rectangle = length × width = 12 × 8 = 96 m²."
        },
        {
            id: 13,
            q: "If tan θ = 3/4, then sin θ = ?",
            options: ["3/4", "3/5", "4/5", "1/2"],
            correct: 1,
            exp: "If tan θ = 3/4, then in a right triangle: opposite = 3, adjacent = 4, hypotenuse = 5. sin θ = opposite/hypotenuse = 3/5."
        },
        {
            id: 14,
            q: "What is the value of 2³ × 3² ÷ 4?",
            options: ["6", "12", "18", "24"],
            correct: 2,
            exp: "2³ × 3² ÷ 4 = 8 × 9 ÷ 4 = 72 ÷ 4 = 18."
        },
        {
            id: 15,
            q: "The perimeter of a square with side 5m is:",
            options: ["10 m", "15 m", "20 m", "25 m"],
            correct: 2,
            exp: "Perimeter of square = 4 × side = 4 × 5 = 20 m."
        }
    ]
};

// Syllabus Data - Comprehensive CDS Syllabus
const syllabusData = {
    gk: [
        {
            id: 'gk1',
            title: 'Indian Polity & Governance',
            topics: [
                'Making of the Constitution & Salient Features',
                'Fundamental Rights (Articles 12-35)',
                'Directive Principles of State Policy (Articles 36-51)',
                'Fundamental Duties (Article 51A)',
                'Union Executive (President, Prime Minister, Council of Ministers)',
                'Parliament (Lok Sabha, Rajya Sabha)',
                'State Executive & Legislatures',
                'Judiciary (Supreme Court & High Courts)',
                'Constitutional Amendments (Important: 42nd, 73rd, 74th)',
                'Constitutional & Non-Constitutional Bodies (Election Commission, UPSC)',
                'Panchayati Raj & Municipalities'
            ]
        },
        {
            id: 'gk2',
            title: 'Geography (Indian & World)',
            topics: [
                'Physical Geography (Geomorphology, Climatology)',
                'Indian Drainage System (Rivers: Ganges, Brahmaputra, Godavari)',
                'Western & Eastern Ghats',
                'Physiography of India (Himalayas, Peninsular Plateau, Coastal Plains)',
                'Agriculture & Soils',
                'Natural Vegetation & Forests',
                'Economic Geography (Minerals, Industries, Energy)',
                'World Geography (Continents, Important Countries)',
                'Straits & Water Bodies',
                'Time Zones & International Date Line',
                'Important Mountains & Peaks worldwide'
            ]
        },
        {
            id: 'gk3',
            title: 'History of India',
            topics: [
                'Ancient India: Indus Valley Civilization',
                'Vedic Period & Early Aryans',
                'Mauryan Empire (Ashoka & Chandragupta)',
                'Gupta Empire & Later Dynasties',
                'Buddhism & Jainism',
                'Medieval Period: Delhi Sultanate',
                'Mughal Empire (Akbar, Aurangzeb)',
                'Socio-Religious Reform Movements (19th Century)',
                'Indian National Movement (1857-1947)',
                'Important Freedom Fighters',
                'Governor Generals & Viceroys',
                'Post-Independence India'
            ]
        },
        {
            id: 'gk4',
            title: 'General Science',
            topics: [
                'Physics: Motion, Laws of Motion, Gravity',
                'Optics: Light, Refraction, Lenses',
                'Sound: Properties, Speed, Doppler Effect',
                'Electricity & Magnetism',
                'Heat & Thermodynamics',
                'Chemistry: Atomic Structure, Chemical Bonding',
                'Acids, Bases & Salts',
                'Metals & Non-metals',
                'Organic Chemistry: Hydrocarbons, Polymers',
                'Biology: Cell Structure & Division',
                'Human Anatomy & Physiology',
                'Genetics & Heredity',
                'Botany: Plant Structure & Functions',
                'Ecology & Environment'
            ]
        },
        {
            id: 'gk5',
            title: 'Economy & Current Affairs',
            topics: [
                'Macroeconomics: Inflation, GDP, GNP',
                'Banking System & RBI Functions',
                'Monetary & Fiscal Policy',
                'Five Year Plans & NITI Aayog',
                'Union Budget & Taxation',
                'Foreign Direct Investment (FDI)',
                'Defence Spending & Military Expenditure',
                'Major Defence Exercises (Malabar, Varuna, Konkan)',
                'Defence Procurement & Indigenization',
                'International Relations: QUAD, BRICS, SCO',
                'Nuclear Policy & Agreements',
                'Space Missions (Chandrayaan, Mangalyaan)',
                'Sports & International Events',
                'Awards & Honours',
                'Global Issues (Climate Change, Pandemics)'
            ]
        }
    ],
    eng: [
        {
            id: 'eng1',
            title: 'Grammar & Spotting Errors',
            topics: [
                'Subject-Verb Agreement',
                'Verb Tenses (Simple, Continuous, Perfect)',
                'Sequence of Tenses',
                'Prepositions & Their Uses',
                'Articles (A, An, The)',
                'Conditional Sentences (If-Then)',
                'Nouns, Pronouns & Their Agreement',
                'Adjectives & Adverbs',
                'Conjunctions & Connectors',
                'Active & Passive Voice',
                'Direct & Indirect Speech',
                'Modals (Can, Could, May, Might, Must, Should, Would)'
            ]
        },
        {
            id: 'eng2',
            title: 'Vocabulary',
            topics: [
                'Synonyms in Context',
                'Antonyms in Context',
                'Idioms & Phrases',
                'One Word Substitution',
                'Phrasal Verbs',
                'Words Often Confused (Its/It\'s, To/Too)',
                'Prefix & Suffix Usage',
                'Root Words & Etymology',
                'Nuances of Meaning',
                'Formal & Informal Vocabulary'
            ]
        },
        {
            id: 'eng3',
            title: 'Comprehension & Arrangement',
            topics: [
                'Reading Comprehension (Short & Long Passages)',
                'Main Idea & Supporting Details',
                'Inference Questions',
                'Vocabulary in Context',
                'Ordering of Words in Sentence (PQRS Type)',
                'Ordering of Sentences in Paragraph (S1-S6 Type)',
                'Fill in the Blanks (Cloze Test)',
                'Paragraph Completion',
                'Critical Reasoning',
                'Tone & Author\'s Intent'
            ]
        }
    ],
    math: [
        {
            id: 'mat1',
            title: 'Number System & Arithmetic',
            topics: [
                'Natural Numbers, Whole Numbers, Integers',
                'Rational & Irrational Numbers',
                'Prime Numbers & Divisibility Rules',
                'HCF & LCM',
                'Averages, Percentages & Ratios',
                'Time & Work',
                'Pipes & Cisterns',
                'Time, Distance & Speed (Trains, Boats, Streams)',
                'Simple & Compound Interest',
                'Profit & Loss',
                'Partnership Problems'
            ]
        },
        {
            id: 'mat2',
            title: 'Algebra',
            topics: [
                'Basic Algebraic Expressions',
                'Polynomials & Factorization',
                'Linear Equations in One Variable',
                'Linear Equations in Two Variables',
                'Quadratic Equations',
                'Inequalities',
                'Sequences & Series (AP, GP)',
                'Set Theory',
                'Laws of Indices & Surds',
                'Logarithms'
            ]
        },
        {
            id: 'mat3',
            title: 'Trigonometry',
            topics: [
                'Trigonometric Ratios (sin, cos, tan, cot, sec, cosec)',
                'Trigonometric Identities',
                'Complementary Angles',
                'Trigonometric Equations (Simple)',
                'Use of Trigonometric Tables',
                'Heights & Distances',
                'Trigonometric Functions & Graphs',
                'Domain & Range of Trigonometric Functions'
            ]
        },
        {
            id: 'mat4',
            title: 'Geometry & Mensuration',
            topics: [
                'Lines & Angles (Parallel lines, Transversals)',
                'Triangles (Properties, Congruence, Similarity)',
                'Circles (Chords, Tangents, Secants, Arcs)',
                'Quadrilaterals',
                'Polygons (Regular & Irregular)',
                'Area of Triangles, Squares, Rectangles, Circles',
                'Volume & Surface Area of Cubes, Cuboids, Cylinders, Cones, Spheres',
                'Co-ordinate Geometry (Distance formula, Section formula)',
                'Perimeter & Area Relationships'
            ]
        },
        {
            id: 'mat5',
            title: 'Statistics & Data Analysis',
            topics: [
                'Collection & Classification of Data',
                'Frequency Distribution',
                'Graphical Representation (Bar charts, Histograms, Pie charts)',
                'Measures of Central Tendency (Mean, Median, Mode)',
                'Measures of Dispersion (Range, SD, Variance)',
                'Probability (Basic)',
                'Combinatorics (Permutations & Combinations)',
                'Data Interpretation (Tables & Graphs)'
            ]
        }
    ]
};

// Resources/PYQ Database
const resourcesDatabase = [
    { id: 1, title: "CDS I 2026 Notification & Syllabus PDF", type: "pdf", year: "2026", subject: "all", size: "3.2 MB", downloadLink: "#" },
    { id: 2, title: "CDS II 2025 General Knowledge Question Paper", type: "pdf", year: "2025", subject: "gk", size: "2.4 MB", downloadLink: "#" },
    { id: 3, title: "CDS II 2025 English Question Paper", type: "pdf", year: "2025", subject: "eng", size: "1.8 MB", downloadLink: "#" },
    { id: 4, title: "CDS II 2025 Mathematics Question Paper", type: "pdf", year: "2025", subject: "math", size: "2.1 MB", downloadLink: "#" },
    { id: 5, title: "CDS I 2025 General Knowledge PYQ with Solutions", type: "pdf", year: "2025", subject: "gk", size: "2.5 MB", downloadLink: "#" },
    { id: 6, title: "CDS I 2025 English PYQ with Solutions", type: "pdf", year: "2025", subject: "eng", size: "1.9 MB", downloadLink: "#" },
    { id: 7, title: "CDS I 2025 Mathematics PYQ with Solutions", type: "pdf", year: "2025", subject: "math", size: "2.3 MB", downloadLink: "#" },
    { id: 8, title: "CDS II 2024 GK - Full Paper with Explanations", type: "pdf", year: "2024", subject: "gk", size: "2.2 MB", downloadLink: "#" },
    { id: 9, title: "CDS II 2024 English - Full Paper with Explanations", type: "pdf", year: "2024", subject: "eng", size: "1.7 MB", downloadLink: "#" },
    { id: 10, title: "CDS II 2024 Mathematics - Full Paper with Explanations", type: "pdf", year: "2024", subject: "math", size: "2.0 MB", downloadLink: "#" },
    { id: 11, title: "Indian Polity Quick Revision - Parts & Schedules", type: "cheatsheet", year: "all", subject: "gk", size: "1.1 MB", downloadLink: "#" },
    { id: 12, title: "100 Important Math Shortcuts & Tricks", type: "cheatsheet", year: "all", subject: "math", size: "1.5 MB", downloadLink: "#" },
    { id: 13, title: "English Idioms & Phrasal Verbs for CDS", type: "pdf", year: "all", subject: "eng", size: "0.9 MB", downloadLink: "#" },
    { id: 14, title: "World Geography Map Notes", type: "pdf", year: "all", subject: "gk", size: "2.8 MB", downloadLink: "#" },
    { id: 15, title: "CDS I 2024 General Knowledge Question Paper", type: "pdf", year: "2024", subject: "gk", size: "2.3 MB", downloadLink: "#" }
];
