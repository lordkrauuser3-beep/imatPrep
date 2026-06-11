/* ============================================================
   PAST PAPER — IMAT 2023 (Official MUR test, AY 2023/2024)
   Source: Ministero dell'Università e della Ricerca, official
   call for applications.

   NOTE: the source PDF for this year had a font-encoding issue
   that made most of the text (questions 9-60) unreadable garbage
   characters. Only questions 1-8 (Reading skills, Logical
   reasoning, and the start of Biology) were recoverable as clean
   text. Answers below were independently solved/verified, not
   copied from a corrupted answer key.

   Each question follows the standard shape used across the app:
   { id, subject, topic, question, options[5], correct, explanation, studyTip }
   Mixed into the simulation pool — never presented as a standalone
   "2023 test" block.
   ============================================================ */

export const PAST_PAPER_2023 = [
  /* ---------------- GENERAL / READING (Q1-4) ---------------- */
  {
    id: "pp23-1",
    subject: "general",
    topic: "Comprensione del testo - Scienze del clima",
    question:
      "Read this excerpt: 'Preliminary global average temperatures taken so far in June are nearly 1°C above levels previously recorded for the same month, going back to 1979. While the month is not yet complete and may not set a new June record, climate scientists say it follows a pattern of strengthening global heating that could see this year named the hottest ever recorded, topping 2016. The long-term warming conditions caused by the burning of fossil fuels will likely receive a further pulse of heat via El Niño...' According to the text, which of the following is true?",
    options: [
      "The June temperature this year is consistent with an observed trend.",
      "This year, June will be the hottest month on record since 1979.",
      "Temperatures in June are not related to the El Niño phenomenon.",
      "June 1979 was the hottest month to date.",
      "The El Niño phenomenon limits the effects of burning fossil fuels.",
    ],
    correct: 0,
    explanation:
      "The passage explicitly says this June 'follows a pattern of strengthening global heating' — i.e. it's consistent with an observed long-term trend. Option B overstates the text, which says the month 'may not set a new June record' (uncertain), not that it definitely will be the hottest. Option C is contradicted directly (El Niño is mentioned as related). Option D is the opposite of what's implied (1979 is the baseline for comparison, not the hottest). Option E reverses the relationship — El Niño ADDS to warming, doesn't limit it.",
    studyTip:
      "When a passage uses hedged language ('may', 'could', 'is not yet complete'), the correct answer usually matches that same level of uncertainty. An option that turns a hedged possibility into a certainty (option B: 'will be the hottest') is a common overreach trap.",
  },
  {
    id: "pp23-2",
    subject: "general",
    topic: "Cultura generale - Letteratura",
    question: "Which of the following pairs of character/book is wrong?",
    options: [
      "Elizabeth Bennet – Little Women",
      "Leopold Bloom – Ulysses",
      "Edmond Dantès – The Count of Monte Cristo",
      "Gregor Samsa – The Metamorphosis",
      "Florentino Ariza – Love in the Time of Cholera",
    ],
    correct: 0,
    explanation:
      "Elizabeth Bennet is the protagonist of Jane Austen's 'Pride and Prejudice', not 'Little Women' (whose protagonists are the March sisters, by Louisa May Alcott). All other pairs are correct: Leopold Bloom in Joyce's Ulysses, Edmond Dantès in Dumas's The Count of Monte Cristo, Gregor Samsa in Kafka's The Metamorphosis, and Florentino Ariza in García Márquez's Love in the Time of Cholera.",
    studyTip:
      "For 'odd one out' pairing questions, you don't need to know all five pairs perfectly — you need to find the ONE you're confident is wrong. If you recognise even one author/character mismatch clearly, that's enough; don't waste time second-guessing the pairs you're unsure about.",
  },
  {
    id: "pp23-3",
    subject: "general",
    topic: "Cultura generale - Storia/Letteratura classica",
    question: "The work known as De Bello Gallico is",
    options: [
      "Julius Caesar's account of the Gallic war.",
      "a painting by Eugène Delacroix.",
      "a sculpture by Auguste Rodin.",
      "an opera by Richard Wagner.",
      "a collection of poems on the Gallic war by Horace.",
    ],
    correct: 0,
    explanation:
      "'De Bello Gallico' ('On the Gallic War') is Julius Caesar's own first-person commentary on his military campaigns to conquer Gaul (modern France) — a foundational Latin prose text.",
    studyTip:
      "Latin titles starting with 'De' ('about/concerning') followed by a topic are typically classical Roman texts (e.g. De Bello Gallico = 'On the Gallic War', De Re Publica = 'On the Republic'). Recognising this pattern alone often points you to a Roman author, ruling out painters/sculptors/composers immediately.",
  },
  {
    id: "pp23-4",
    subject: "general",
    topic: "Cultura generale - Sistemi politici",
    question: "In a parliamentary system of government, the President of the Republic is",
    options: [
      "Head of State but not Head of Government.",
      "neither Head of State nor Head of Government.",
      "Head of Government and Head of the High Council of the Judiciary.",
      "Head of Government but not Head of State.",
      "Head of State and Head of the High Council of the Judiciary.",
    ],
    correct: 0,
    explanation:
      "In a parliamentary system (like Italy's), the roles of Head of State and Head of Government are SEPARATE: the President is Head of State (a largely ceremonial/representative role), while the Prime Minister (Head of Government) holds executive power and answers to Parliament.",
    studyTip:
      "The key distinguishing feature of PARLIAMENTARY systems (vs. PRESIDENTIAL systems like the US) is the SPLIT between Head of State and Head of Government into two different people/offices. In a presidential system, one person (the President) holds both roles — memorising this single contrast resolves most 'parliamentary vs presidential' questions.",
  },

  /* ---------------- LOGIC (Q5-7) ---------------- */
  {
    id: "pp23-5",
    subject: "logic",
    topic: "Problemi - Crescita di popolazioni",
    question:
      "You have 1 pair of new-born rabbits (one male, one female) that can breed when they reach maturity. You also have 3 pairs of mature rabbits that can start breeding immediately. Rules: each mature pair produces one new pair of offspring at the end of each month; each offspring pair takes one month to mature. How many rabbits do you have at the end of the 3rd month?",
    options: ["36", "14", "18", "28", "42"],
    correct: 0,
    explanation:
      "Track (mature pairs, immature pairs) month by month. Start: (3 mature, 1 immature) = 4 pairs = 8 rabbits. End of month 1: the 3 mature pairs each produce 1 offspring (+3 immature), and the 1 immature pair matures → (4 mature, 3 immature) = 7 pairs = 14 rabbits. End of month 2: 4 mature produce 4 offspring, 3 immature mature → (7 mature, 4 immature) = 11 pairs = 22 rabbits. End of month 3: 7 mature produce 7 offspring, 4 immature mature → (11 mature, 7 immature) = 18 pairs = 36 rabbits.",
    studyTip:
      "This is a Fibonacci-style growth problem in disguise. Set up a simple two-column table (mature pairs | immature pairs) and update it month by month using two rules: 'mature pairs each spawn one new immature pair' and 'all immature pairs become mature'. Multiply final pairs by 2 to get individual rabbits — forgetting this final ×2 is the most common error.",
  },
  {
    id: "pp23-6",
    subject: "logic",
    topic: "Problemi - Decadimento radioattivo",
    question:
      "A mineral contains two radioactive elements X and Y, with half-lives of 2 and 3 years respectively. If today the ratio X:Y (mass/mass) is 8:1, what will it be after 6 years?",
    options: ["4:1", "1:1", "2:1", "16:1", "32/1"],
    correct: 0,
    explanation:
      "6 years = 3 half-lives for X (half-life 2yr), so X reduces to (1/2)³ = 1/8 of its original mass: 8 × (1/8) = 1. 6 years = 2 half-lives for Y (half-life 3yr), so Y reduces to (1/2)² = 1/4: 1 × (1/4) = 0.25. New ratio X:Y = 1 : 0.25 = 4:1.",
    studyTip:
      "For each element separately, compute 'how many half-lives fit in the elapsed time' (elapsed time ÷ half-life), then multiply the original amount by (1/2)^(number of half-lives). Do this independently for each substance, THEN form the new ratio — don't try to combine the half-lives into a single calculation.",
  },
  {
    id: "pp23-7",
    subject: "logic",
    topic: "Problemi - Ottimizzazione con vincoli",
    question:
      "You want to buy a sandwich satisfying: protein ≥ 20g, fat < 10g, energy ≥ 1300 kJ. Given a table of 7 sandwich types with their energy/protein/fat/price values, what is the minimum you can spend?",
    options: ["€6.80", "€6.70", "€6.90", "€6.60", "€7.10"],
    correct: 0,
    explanation:
      "Checking each sandwich against all three constraints (protein ≥ 20, fat < 10, energy ≥ 1300): Tuna fails (protein 18 < 20). Beef passes (22, 9, 1320 — all OK), price €6.90. Chicken passes (23, 5, 1337 — all OK), price €6.80. Vegetables fails (protein 9). Salmon fails (fat 12 ≥ 10). Ham fails (protein 19). Turkey fails (energy 1210 < 1300). Of the two valid options (Beef €6.90, Chicken €6.80), Chicken is cheaper: €6.80.",
    studyTip:
      "For multi-constraint table problems, go row by row and check ALL constraints for each row before moving on — the moment one constraint fails, eliminate that row and move to the next. Only compare prices among rows that survive ALL filters; don't compare prices first.",
  },

  /* ---------------- BIOLOGY (Q8) ---------------- */
  {
    id: "pp23-8",
    subject: "biology",
    topic: "Metabolismo - Confronto resa ATP",
    question:
      "Glucose can feed into different biochemical pathways, each generating a net yield of ATP per molecule of glucose. Rank these by TOTAL ATP produced, from largest to smallest: (1) Ethyl alcohol fermentation of 4 glucose molecules; (2) Lactic acid fermentation of 6 glucose molecules; (3) The electron transport chain stage of cellular respiration following full metabolism (glycolysis + citric acid cycle) of 1 glucose molecule; (4) Glycolysis of 7 glucose molecules.",
    options: ["3-4-2-1", "4-2-1-3", "3-4-1-2", "4-2-3-1", "2-1-4-3"],
    correct: 0,
    explanation:
      "Both fermentation types yield only the 2 ATP from glycolysis itself (fermentation regenerates NAD⁺ but adds no extra ATP): (1) 4 glucose × 2 ATP = 8. (2) 6 glucose × 2 ATP = 12. (4) Glycolysis alone for 7 glucose = 7 × 2 = 14. (3) The ETC/oxidative phosphorylation stage for just 1 glucose (after full glycolysis + Krebs have generated NADH/FADH₂) yields roughly 26-28 ATP — by far the largest single contributor to total respiration's ~30-32 ATP/glucose. Ranking: 3 (~26-28) > 4 (14) > 2 (12) > 1 (8).",
    studyTip:
      "Anchor numbers to memorise: glycolysis alone nets 2 ATP/glucose (regardless of what happens after — fermentation or aerobic respiration). The ETC/oxidative phosphorylation stage is where the BULK of ATP (roughly 26-28 of the ~30-32 total) is generated — it's disproportionately large compared to glycolysis or the Krebs cycle's direct ATP/GTP yield (only 2).",
  },
];
