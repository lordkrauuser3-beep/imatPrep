/* ============================================================
   EXTENDED QUESTION POOL — used by Simulazione (full mock test)
   Each question follows the same shape as QUESTION_BANK in App.jsx:
   { id, subject, topic, question, options[5], correct, explanation, studyTip }
   ============================================================ */

export const SIMULATION_POOL = [
  /* ---------------- MATH ---------------- */
  {
    id: "sm1",
    subject: "math",
    topic: "Percentuali",
    question:
      "A jacket originally costs €80. It is discounted by 25%, then the discounted price is increased by 10%. What is the final price?",
    options: ["€66", "€68", "€70", "€72", "€60"],
    correct: 0,
    explanation:
      "25% off €80 = €80 − €20 = €60. Then 10% increase on €60 = €60 + €6 = €66.",
    studyTip:
      "Apply percentage changes sequentially to the running total, never to the original value. A 25% decrease followed by a 10% increase does NOT equal a 15% decrease.",
  },
  {
    id: "sm2",
    subject: "math",
    topic: "Equazioni",
    question: "If 3x − 7 = 2x + 5, what is the value of x²?",
    options: ["100", "144", "121", "169", "81"],
    correct: 1,
    explanation:
      "3x − 7 = 2x + 5. Subtract 2x from both sides and add 7 to both sides: x = 12. So x² = 144.",
    studyTip:
      "Move all x terms to one side and constants to the other in a single clean step. Double-check by substituting back into the original equation.",
  },
  {
    id: "sm3",
    subject: "math",
    topic: "Geometria - Cerchi",
    question:
      "A circle has a circumference of 12π cm. What is its area?",
    options: ["36π cm²", "24π cm²", "144π cm²", "12π cm²", "6π cm²"],
    correct: 0,
    explanation:
      "Circumference = 2πr = 12π, so r = 6. Area = πr² = π(6)² = 36π cm².",
    studyTip:
      "Always extract the radius first from whatever is given (circumference, diameter, area), then plug it into the formula you actually need.",
  },
  {
    id: "sm4",
    subject: "math",
    topic: "Proporzioni",
    question:
      "If 5 workers can complete a task in 12 days, how many days would it take 3 workers to complete the same task, assuming the same work rate?",
    options: ["20 days", "18 days", "7.2 days", "15 days", "10 days"],
    correct: 0,
    explanation:
      "Total work = 5 × 12 = 60 worker-days. With 3 workers: 60 / 3 = 20 days.",
    studyTip:
      "For 'workers and days' problems, compute the constant total work (workers × days) first, then divide by the new number of workers. This is an inverse proportion, not a direct one.",
  },
  {
    id: "sm5",
    subject: "math",
    topic: "Statistica",
    question: "What is the median of the data set: 4, 8, 1, 9, 3, 7, 2?",
    options: ["3", "4", "7", "5", "8"],
    correct: 1,
    explanation:
      "Sort the data: 1, 2, 3, 4, 7, 8, 9. With 7 values, the median is the 4th value: 4.",
    studyTip:
      "Always sort the data before finding the median — the IMAT often lists numbers in random order specifically to catch students who skip this step.",
  },
  {
    id: "sm6",
    subject: "math",
    topic: "Esponenti",
    question: "Simplify: (2³ × 2⁴) / 2⁵",
    options: ["2", "4", "8", "16", "1"],
    correct: 1,
    explanation:
      "(2³ × 2⁴) / 2⁵ = 2^(3+4) / 2⁵ = 2⁷ / 2⁵ = 2² = 4.",
    studyTip:
      "When multiplying powers with the same base, add exponents. When dividing, subtract them. Combine both rules in one pass before evaluating.",
  },
  {
    id: "sm7",
    subject: "math",
    topic: "Trigonometria",
    question:
      "In a right triangle, one angle is 30° and the hypotenuse is 10 cm. What is the length of the side opposite the 30° angle?",
    options: ["5 cm", "5√3 cm", "10√3 cm", "10/√3 cm", "8.66 cm"],
    correct: 0,
    explanation:
      "sin(30°) = opposite / hypotenuse = 1/2. So opposite = hypotenuse × sin(30°) = 10 × 1/2 = 5 cm.",
    studyTip:
      "Memorise sin/cos/tan for 0°, 30°, 45°, 60°, 90°. These five angles cover the vast majority of IMAT trigonometry questions.",
  },
  {
    id: "sm8",
    subject: "math",
    topic: "Combinatoria",
    question:
      "In how many ways can 4 different books be arranged on a shelf?",
    options: ["4", "16", "12", "24", "8"],
    correct: 3,
    explanation: "This is a permutation of 4 distinct items: 4! = 4×3×2×1 = 24.",
    studyTip:
      "'Arrangements' = permutations = factorial. 'Selections regardless of order' = combinations. Identifying which keyword applies is the real skill here.",
  },
  {
    id: "sm9",
    subject: "math",
    topic: "Sistemi di equazioni",
    question: "Solve the system: x + y = 10, x − y = 4. What is x × y?",
    options: ["20", "21", "24", "18", "16"],
    correct: 1,
    explanation:
      "Adding both equations: 2x = 14, so x = 7. Then y = 10 − 7 = 3. x × y = 7 × 3 = 21.",
    studyTip:
      "When two equations share +y and −y (or similar), adding or subtracting them eliminates a variable instantly — faster than substitution.",
  },
  {
    id: "sm10",
    subject: "math",
    topic: "Geometria - Volumi",
    question:
      "A cube has a surface area of 96 cm². What is its volume?",
    options: ["48 cm³", "64 cm³", "16 cm³", "32 cm³", "24 cm³"],
    correct: 1,
    explanation:
      "Surface area = 6a² = 96, so a² = 16, a = 4. Volume = a³ = 4³ = 64 cm³.",
    studyTip:
      "For cubes, surface area gives you the side length two steps removed (square root, then you have 'a'). Don't try to find the volume directly from the surface area formula.",
  },

  /* ---------------- LOGIC ---------------- */
  {
    id: "sl1",
    subject: "logic",
    topic: "Sequenze numeriche",
    question: "What number completes the sequence: 3, 9, 27, 81, ?",
    options: ["162", "243", "324", "729", "108"],
    correct: 1,
    explanation:
      "Each term is multiplied by 3 (geometric sequence). 81 × 3 = 243.",
    studyTip:
      "If the ratio between consecutive terms is constant, it's geometric — multiply, don't add. Check the ratio of the first two terms before assuming it's arithmetic.",
  },
  {
    id: "sl2",
    subject: "logic",
    topic: "Deduzione",
    question:
      "Five friends — A, B, C, D, E — are sitting in a row. A is to the left of B. C is to the right of D. B is immediately to the left of C. D is at the far left. What is the order from left to right?",
    options: [
      "D, A, B, C, E",
      "A, D, B, C, E",
      "D, B, A, C, E",
      "A, B, D, C, E",
      "D, A, C, B, E",
    ],
    correct: 0,
    explanation:
      "D is at the far left (position 1). 'B immediately left of C' means B-C are consecutive. 'A left of B' and combining constraints: D, A, B, C, E satisfies all conditions — D first, A before B, B immediately before C, C right of D (trivially true), and E fills the last spot.",
    studyTip:
      "For seating/ordering puzzles, fix the most absolute clue first ('D is at the far left'), then place the relative clues ('B immediately left of C' as a fixed pair) around it.",
  },
  {
    id: "sl3",
    subject: "logic",
    topic: "Analogie",
    question: "Hammer is to Carpenter as Scalpel is to:",
    options: ["Knife", "Hospital", "Surgeon", "Cutting", "Patient"],
    correct: 2,
    explanation:
      "A hammer is a tool used by a carpenter (a professional). Similarly, a scalpel is a tool used by a surgeon (a professional). The relationship is tool-to-user.",
    studyTip:
      "For analogy questions, state the relationship between the first pair in a short sentence ('X is a tool used by Y'), then find the option that fits the same sentence template.",
  },
  {
    id: "sl4",
    subject: "logic",
    topic: "Ragionamento condizionale",
    question:
      "If it rains, the match is postponed. The match was not postponed. What can we conclude?",
    options: [
      "It rained",
      "It did not rain",
      "The match was cancelled",
      "It might have rained",
      "Nothing can be concluded",
    ],
    correct: 1,
    explanation:
      "This is the contrapositive: 'If rain → postponed' is logically equivalent to 'If not postponed → not rain'. Since the match was not postponed, it did not rain.",
    studyTip:
      "'If P then Q' guarantees 'If not Q then not P' (contrapositive) — always valid. It does NOT guarantee 'If not P then not Q' (inverse) — a classic trap.",
  },
  {
    id: "sl5",
    subject: "logic",
    topic: "Sequenze di lettere",
    question: "What comes next in the pattern: A, C, F, J, O, ?",
    options: ["S", "T", "U", "P", "R"],
    correct: 2,
    explanation:
      "The gaps between letters increase by 1 each time: A→C (+2), C→F (+3), F→J (+4), J→O (+5), so O→? is +6. O is the 15th letter, +6 = 21st letter = U.",
    studyTip:
      "For letter sequences, convert to numbers (A=1, B=2...) mentally and look for the same kind of numeric pattern you'd find in a number sequence.",
  },
  {
    id: "sl6",
    subject: "logic",
    topic: "Problemi di età",
    question:
      "Today, a father is 3 times as old as his son. In 12 years, he will be twice as old as his son. How old is the son today?",
    options: ["10", "12", "8", "14", "6"],
    correct: 1,
    explanation:
      "Let son = x, father = 3x. In 12 years: 3x+12 = 2(x+12) → 3x+12 = 2x+24 → x = 12.",
    studyTip:
      "Age problems always follow the template: set up expressions for 'now', then add the same number of years to both people for 'later', and write the new ratio as an equation.",
  },

  /* ---------------- CHEMISTRY ---------------- */
  {
    id: "sc1",
    subject: "chemistry",
    topic: "Tavola periodica",
    question:
      "An element is in Group 17 (halogens) and Period 3. What is its atomic number?",
    options: ["17", "18", "16", "35", "9"],
    correct: 0,
    explanation:
      "Period 3 elements have atomic numbers 11–18. The Group 17 element in Period 3 is chlorine, atomic number 17.",
    studyTip:
      "Know the first three periods of the periodic table by heart (atomic numbers 1–18). Group number for main-group elements often directly indicates the number of valence electrons.",
  },
  {
    id: "sc2",
    subject: "chemistry",
    topic: "Legami chimici",
    question:
      "Which type of bond is formed between a metal and a non-metal?",
    options: [
      "Covalent bond",
      "Ionic bond",
      "Metallic bond",
      "Hydrogen bond",
      "Van der Waals bond",
    ],
    correct: 1,
    explanation:
      "Metals tend to lose electrons and non-metals tend to gain them; the resulting electrostatic attraction between the oppositely charged ions is an ionic bond.",
    studyTip:
      "Quick rule: metal + non-metal → ionic. Non-metal + non-metal → covalent. Metal + metal → metallic. This covers most IMAT bonding questions.",
  },
  {
    id: "sc3",
    subject: "chemistry",
    topic: "pH e acidi/basi",
    question: "A solution has a pH of 3. What is its pOH?",
    options: ["3", "7", "11", "14", "10"],
    correct: 2,
    explanation: "pH + pOH = 14 (at 25°C). So pOH = 14 − 3 = 11.",
    studyTip:
      "The pH + pOH = 14 relationship is one of the most reliable single-formula questions on the IMAT — make sure you can use it instantly in either direction.",
  },
  {
    id: "sc4",
    subject: "chemistry",
    topic: "Reazioni - Bilanciamento",
    question:
      "Balance the equation: __ H₂ + __ O₂ → __ H₂O. What are the coefficients (in order)?",
    options: ["1, 1, 1", "2, 1, 2", "2, 2, 2", "1, 2, 2", "2, 1, 1"],
    correct: 1,
    explanation:
      "2H₂ + O₂ → 2H₂O. This gives 4 H atoms and 2 O atoms on each side, balancing the equation.",
    studyTip:
      "Balance one element at a time, usually starting with the element that appears in the fewest compounds. Oxygen and hydrogen are often balanced last because they appear in multiple molecules.",
  },
  {
    id: "sc5",
    subject: "chemistry",
    topic: "Configurazione elettronica",
    question:
      "What is the electron configuration of a neutral oxygen atom (atomic number 8)?",
    options: [
      "1s² 2s² 2p⁴",
      "1s² 2s² 2p⁶",
      "1s² 2s⁴ 2p²",
      "1s² 2p⁶",
      "1s² 2s² 2p²",
    ],
    correct: 0,
    explanation:
      "Oxygen has 8 electrons. Filling order: 1s (2) → 2s (2) → 2p (4) = 1s² 2s² 2p⁴, totalling 8.",
    studyTip:
      "Remember the filling order (1s, 2s, 2p, 3s, 3p...) and the maximum capacity of each subshell (s=2, p=6, d=10). Add electrons until you reach the atomic number.",
  },
  {
    id: "sc6",
    subject: "chemistry",
    topic: "Soluzioni - Concentrazione",
    question:
      "How many grams of NaOH (molar mass 40 g/mol) are needed to prepare 500 mL of a 0.5 M solution?",
    options: ["10 g", "20 g", "5 g", "40 g", "2.5 g"],
    correct: 0,
    explanation:
      "Moles needed = M × V(L) = 0.5 × 0.5 = 0.25 mol. Mass = moles × molar mass = 0.25 × 40 = 10 g.",
    studyTip:
      "Always convert volume to litres before using molarity. The chain is: molarity × volume(L) → moles → moles × molar mass → grams.",
  },

  /* ---------------- PHYSICS ---------------- */
  {
    id: "sp1",
    subject: "physics",
    topic: "Forze",
    question:
      "A force of 20 N is applied to an object with a mass of 4 kg. What is its acceleration?",
    options: ["80 m/s²", "5 m/s²", "0.2 m/s²", "16 m/s²", "24 m/s²"],
    correct: 1,
    explanation: "F = ma → a = F/m = 20/4 = 5 m/s².",
    studyTip:
      "Newton's second law (F=ma) is one of the most frequently tested formulas. Make sure you can rearrange it instantly for any of the three variables.",
  },
  {
    id: "sp2",
    subject: "physics",
    topic: "Energia",
    question:
      "An object of mass 2 kg is lifted to a height of 5 m. Taking g = 10 m/s², what is its gravitational potential energy?",
    options: ["10 J", "50 J", "100 J", "20 J", "25 J"],
    correct: 2,
    explanation: "PE = mgh = 2 × 10 × 5 = 100 J.",
    studyTip:
      "On the IMAT, g is usually given as 10 m/s² (not 9.8) to keep arithmetic clean. Always check which value the question specifies.",
  },
  {
    id: "sp3",
    subject: "physics",
    topic: "Pressione",
    question:
      "A force of 50 N is applied over an area of 0.5 m². What is the pressure?",
    options: ["25 Pa", "100 Pa", "10 Pa", "2.5 Pa", "50 Pa"],
    correct: 1,
    explanation: "Pressure = Force / Area = 50 / 0.5 = 100 Pa.",
    studyTip:
      "Dividing by a number less than 1 makes the result LARGER, not smaller — a common arithmetic slip under time pressure. 50 / 0.5 = 100, not 25.",
  },
  {
    id: "sp4",
    subject: "physics",
    topic: "Circuiti elettrici",
    question:
      "A circuit has a voltage of 12 V and a resistance of 4 Ω. What is the current?",
    options: ["48 A", "3 A", "0.33 A", "16 A", "8 A"],
    correct: 1,
    explanation: "Ohm's law: I = V/R = 12/4 = 3 A.",
    studyTip:
      "Ohm's law (V = IR) is the single most tested electricity formula on the IMAT. Practice rearranging it for I and R as well as V.",
  },
  {
    id: "sp5",
    subject: "physics",
    topic: "Onde",
    question:
      "A wave has a frequency of 5 Hz and a wavelength of 2 m. What is its speed?",
    options: ["2.5 m/s", "10 m/s", "7 m/s", "0.4 m/s", "20 m/s"],
    correct: 1,
    explanation: "Wave speed = frequency × wavelength = 5 × 2 = 10 m/s.",
    studyTip:
      "v = fλ is simple multiplication, but make sure you know which symbol stands for which quantity — questions sometimes give you v and f and ask for λ instead.",
  },
  {
    id: "sp6",
    subject: "physics",
    topic: "Moto circolare",
    question:
      "An object moves in a circle of radius 2 m, completing one full revolution every 4 seconds. What is its speed?",
    options: ["π m/s", "2π m/s", "4π m/s", "0.5π m/s", "8π m/s"],
    correct: 0,
    explanation:
      "Circumference = 2πr = 2π(2) = 4π m. Speed = distance/time = circumference/period = 4π/4 = π m/s.",
    studyTip:
      "For circular motion, speed = circumference / period = 2πr / T. Compute the circumference first as a clean expression, then divide by the period.",
  },

  /* ---------------- READING / GENERAL (lighter weight, fewer needed) ---------------- */
  {
    id: "sr1",
    subject: "logic",
    topic: "Comprensione del testo",
    question:
      "Passage: 'Although the new policy was designed to reduce traffic congestion, early data suggests it has had little measurable effect during peak hours, while modestly reducing congestion during off-peak times.' According to the passage, the policy:",
    options: [
      "Has completely failed",
      "Has been more effective outside peak hours than during them",
      "Has worsened traffic during peak hours",
      "Has not been studied yet",
      "Was designed for off-peak hours only",
    ],
    correct: 1,
    explanation:
      "The passage states the policy had little effect during peak hours but modestly reduced congestion during off-peak times — meaning it was more effective outside peak hours.",
    studyTip:
      "For reading comprehension, avoid options with extreme words ('completely', 'never', 'always') unless the passage uses equally extreme language. Moderate passages usually have moderate correct answers.",
  },
];
