/* ============================================================
   PAST PAPER — IMAT 2025 (Official MUR test, AY 2025/2026)
   Source: Ministero dell'Università e della Ricerca, official
   call for applications. Correct answers as marked in the
   official document.
   Each question follows the standard shape used across the app:
   { id, subject, topic, question, options[5], correct, explanation, studyTip }
   Mixed into the simulation pool — never presented as a standalone
   "2025 test" block, so no simulation will replicate a past paper.
   ============================================================ */

export const PAST_PAPER_2025 = [
  /* ---------------- GENERAL / READING (Q1-4) ---------------- */
  {
    id: "pp25-1",
    subject: "general",
    topic: "Comprensione del testo - Farmacologia",
    question:
      "Read this excerpt from a medication leaflet: 'Other serious conditions (frequency cannot be determined): yellowing of the skin or eyes, fever, rash, kidney enlargement, possibly with painful urination and lower back pain (signs of severe kidney inflammation), which can progress to kidney failure.' Which statement is the correct interpretation?",
    options: [
      "Using this medication could lead to serious kidney problems.",
      "Using this medication always leads to yellowing of the skin.",
      "Using this medication could lead to pancreatic problems.",
      "Using this medication never leads to urinary tract problems.",
      "Those with kidney failure may benefit from using this medication.",
    ],
    correct: 0,
    explanation:
      "The passage describes kidney inflammation that 'can potentially progress to kidney failure' — a possible serious kidney problem. Option B is wrong because the leaflet says frequency 'cannot be determined' (not 'always'). Options C, D, and E introduce claims (pancreatic problems, never urinary issues, benefit for kidney failure patients) that the text never makes.",
    studyTip:
      "On leaflet/legal-style passages, words like 'can', 'may', 'possibly' are doing real work. An option that upgrades 'can' to 'always' (or downgrades it to 'never') is almost always the wrong answer, even if it sounds plausible.",
  },
  {
    id: "pp25-2",
    subject: "general",
    topic: "Comprensione del testo - Economia",
    question:
      "An article describes the Apulian ICT sector recovering after a 2.4% decline in 2020, with revenue growth of 5.4% for a major company, attributed partly to companies digitalising their processes during the pandemic. Which statement is NOT correct according to the article?",
    options: [
      "The pandemic ensured the growth of the Apulian digital sector because companies in the sector transformed into digital companies.",
      "The growth of the Apulian digital sector is due to, among other reasons, revisions in company processes.",
      "Despite shortages in the number of adequate professionals, the Apulian digital sector has recorded increased profitability over the past year.",
      "The pandemic was one of the factors that led to the digitalisation of company processes.",
      "The digitalisation of company processes is one of the principal causes for the economic growth of the sector.",
    ],
    correct: 0,
    explanation:
      "The article says the pandemic pushed companies (clients of the ICT sector) to digitalise their own processes — this drove demand for ICT companies, it did not mean ICT companies themselves 'transformed into digital companies' (they already were). Option A misattributes the transformation to the wrong actor. Options B, C, D, and E are all directly supported by the passage.",
    studyTip:
      "Watch for passages where two different groups are discussed (here: the ICT sector vs. its client companies). A wrong answer often swaps the subject of a true statement — the claim itself sounds right, but it's true about the *other* group.",
  },
  {
    id: "pp25-3",
    subject: "general",
    topic: "Comprensione del testo - Letteratura",
    question:
      "Read this excerpt: 'This animal catches a man and straightway kills him; after he is dead, it weeps for him with a lamentable voice and many tears. Then, having done lamenting, it cruelly devours him. It is thus with the hypocrite...' (The Notebooks of Leonardo da Vinci). Which animal is the author talking about?",
    options: ["Crocodile", "Lion", "Panther", "Tiger", "Boa"],
    correct: 0,
    explanation:
      "This is a classic reference to 'crocodile tears' — the legendary belief that crocodiles weep while devouring their prey, used as a metaphor for hypocrisy. The passage is the historical origin of that exact idiom.",
    studyTip:
      "When a passage describes an animal behaviour that maps onto a common English idiom ('crocodile tears', 'wolf in sheep's clothing'), the idiom is usually the answer — these passages are often testing recognition of the cultural reference, not biology.",
  },
  {
    id: "pp25-4",
    subject: "general",
    topic: "Comprensione del testo - Scienze",
    question:
      "A passage describes how kuru (a brain disease in New Guinea linked to a funeral practice of eating deceased relatives' brains) resembles Creutzfeldt-Jakob disease, which is sometimes confused with Alzheimer's, and both kuru and Creutzfeldt-Jakob are caused by an infectious protein (prion). Which statement is coherent with the excerpt?",
    options: [
      "Kuru, Creutzfeldt-Jakob Disease and Alzheimer's are diseases whose diagnoses can be confused with each other.",
      "Alzheimer's is recognizable as a development of Creutzfeldt-Jakob Disease.",
      "Vincent Zigas discovered a cure for the negative effects of prions.",
      "Creutzfeldt-Jakob Disease is widespread in New Guinea as a result of the practice of consuming the brains of deceased relatives.",
      "The prion is a bacterium which develops after death inside tissue proteins.",
    ],
    correct: 0,
    explanation:
      "The passage explicitly says Creutzfeldt-Jakob 'is sometimes confused with diseases like Alzheimer's' and 'resembles kuru'. Option B claims a causal/developmental link the text never states. Option C says Zigas found a cure — the text only says he discovered the cause. Option D attributes the New Guinea practice to Creutzfeldt-Jakob, but the text links it to kuru. Option E calls a prion a 'bacterium', but the text calls it 'an infectious protein'.",
    studyTip:
      "For 'which statement is coherent' questions with several similar diseases/names, build a tiny diagram in the margin: which condition does what, where, and discovered by whom. Wrong options typically swap an attribute between two of these similar-sounding entities.",
  },

  /* ---------------- LOGIC (Q5-9) ---------------- */
  {
    id: "pp25-5",
    subject: "logic",
    topic: "Logica formale - Quantificatori",
    question:
      "Consider this statement: 'The number two is a prime number.' Which of the following statements is deducible from the given statement?",
    options: [
      "At least one prime number exists.",
      "No prime numbers exist.",
      "At least one number is not a prime number.",
      "No number is a prime number.",
      "All numbers are prime numbers.",
    ],
    correct: 0,
    explanation:
      "If 'two is a prime number' is true, then by definition at least one prime number (namely two) exists. This is a direct existential generalisation — the simplest valid deduction from a single example.",
    studyTip:
      "When a question gives you ONE specific true example (e.g. 'two is prime'), the only things you can validly deduce are existence claims ('at least one X exists'). You cannot deduce universal claims ('all are' / 'none are') from a single instance — that's a classic overreach trap.",
  },
  {
    id: "pp25-6",
    subject: "logic",
    topic: "Logica formale - Modus tollens",
    question:
      "From the given statements: 'If today is Saturday, then I am a philosopher' and 'I am not a philosopher', which conclusion can be deduced?",
    options: [
      "Today is not Saturday.",
      "Today is Saturday.",
      "Today is Friday.",
      "I am a philosopher.",
      "None of the other choices is correct.",
    ],
    correct: 0,
    explanation:
      "This is modus tollens: from 'If P then Q' and 'not Q', we validly conclude 'not P'. Here P = 'today is Saturday', Q = 'I am a philosopher'. Since 'not Q' (not a philosopher) is given, 'not P' (today is not Saturday) follows.",
    studyTip:
      "Modus tollens ('If P then Q', 'not Q' ⊢ 'not P') and modus ponens ('If P then Q', 'P' ⊢ 'Q') are the two valid forms that show up constantly on the IMAT. Memorise both by name and shape — most logic questions are one of these two patterns wearing a costume.",
  },
  {
    id: "pp25-7",
    subject: "logic",
    topic: "Deduzione - Posizioni",
    question:
      "Alberto, Beatrice, Carlo, and Daniela are dining at the same square table, each seated on one side. Alberto is seated to the left of Beatrice but not to the right of Carlo. Which of the following statements can be deduced?",
    options: [
      "Daniela is seated to the right of Carlo.",
      "Carlo is seated across from Beatrice.",
      "Daniela is seated to the left of Beatrice.",
      "Alberto is seated to the left of Carlo.",
      "Beatrice is seated across from Alberto.",
    ],
    correct: 0,
    explanation:
      "On a square table, going clockwise, 'Alberto left of Beatrice' and 'Alberto not right of Carlo' (i.e. Carlo is not immediately counter-clockwise of Alberto) together force the only consistent clockwise order: Carlo, Alberto, Beatrice, Daniela. In this arrangement, Daniela sits to the right of Carlo (completing the clockwise loop back to Carlo).",
    studyTip:
      "For square-table seating puzzles, fix one person's position arbitrarily, then place the others clockwise one constraint at a time. Drawing a small square with four labeled positions takes 10 seconds and prevents almost all errors on this question type.",
  },
  {
    id: "pp25-8",
    subject: "logic",
    topic: "Deduzione - Assegnazione",
    question:
      "Three pills — blue, red, and green — are each placed inside three boxes of the same colours, such that no pill is inside the box of its own colour. Additionally, the blue pill is not in the green box. Which pill is in which box?",
    options: [
      "The green pill is in the blue box, the red pill is in the green box, the blue pill is in the red box.",
      "The green pill is in the blue box, the red pill is in the blue box, the blue pill is in the green box.",
      "The blue pill is in the green box, the green pill is in the red box, the red pill is in the blue box.",
      "The red pill is in the blue box, the green pill is in the green box, the blue pill is in the red box.",
      "The blue pill is in the blue box, the green pill is in the green box, the red pill is in the red box.",
    ],
    correct: 0,
    explanation:
      "No pill matches its box colour, and the blue pill is not in the green box — so the blue pill must be in the red box (the only colour left for it). The red pill cannot be in the red box (its own colour), so it must be in the green box. The green pill then takes the remaining box: blue.",
    studyTip:
      "For 'no item matches its own category, plus one extra constraint' puzzles, start with the item that has the most restrictions (here, blue: can't be in blue, can't be in green → must be red). Solving the most-constrained item first usually cascades the rest automatically.",
  },
  {
    id: "pp25-9",
    subject: "logic",
    topic: "Problemi - Orologi",
    question:
      "An analogue clock shows exactly 3:00 PM. After the minute hand has completed 1.75 full rotations from its current position, what time will the clock indicate?",
    options: ["4:45 PM", "1:25 PM", "3:35 PM", "4:30 PM", "5:00 PM"],
    correct: 0,
    explanation:
      "One full rotation of the minute hand = 60 minutes. 1.75 rotations = 1.75 × 60 = 105 minutes = 1 hour 45 minutes. Starting from 3:00 PM and adding 1h45m gives 4:45 PM.",
    studyTip:
      "Convert 'rotations' of a clock hand to minutes by multiplying by 60 (minute hand) or 12 hours (hour hand) — then it's just simple time addition. The 'fraction of a rotation' framing is designed to look harder than it is.",
  },

  /* ---------------- BIOLOGY (Q10-32) ---------------- */
  {
    id: "pp25-10",
    subject: "biology",
    topic: "Metabolismo - Fermentazione",
    question: "During lactic fermentation, pyruvic acid is:",
    options: ["Reduced", "Oxidised", "Decarboxylated", "Phosphorylated", "Dephosphorylated"],
    correct: 0,
    explanation:
      "In lactic acid fermentation, NADH donates its electrons (and a hydrogen) to pyruvate, converting it to lactate. Gaining electrons/hydrogen is, by definition, a reduction.",
    studyTip:
      "Remember the core difference between the two fermentation types: alcoholic fermentation REDUCES pyruvate after first decarboxylating it (CO₂ is released), while lactic fermentation REDUCES pyruvate directly to lactate with no CO₂ release.",
  },
  {
    id: "pp25-11",
    subject: "biology",
    topic: "Glicolisi",
    question: "Which of the following statements about glycolysis is correct?",
    options: [
      "When a molecule of glucose is converted to pyruvate in glycolysis, 2 NAD⁺ are reduced.",
      "Triose phosphate isomerase catalyses the conversion of dihydroxyacetone phosphate to 1,3-bisphosphoglycerate.",
      "Phosphofructokinase catalyses the conversion of fructose 1,6-bisphosphate to dihydroxyacetone phosphate.",
      "When a molecule of glucose is converted to pyruvate in glycolysis, CO₂ is produced.",
      "In the first part, FADH₂ is formed.",
    ],
    correct: 0,
    explanation:
      "Glycolysis converts 1 glucose → 2 pyruvate, generating 2 NADH (i.e. 2 NAD⁺ are reduced to NADH). Option B mixes up two different enzymes (triose phosphate isomerase converts DHAP to G3P, not to 1,3-BPG). Option C mixes up phosphofructokinase (which acts before this step) with aldolase. Option D is wrong — glycolysis produces NO CO₂ (that happens later, in pyruvate oxidation/Krebs). Option E is wrong — FADH₂ is not produced in glycolysis at all.",
    studyTip:
      "For 'which statement about [pathway] is correct' questions with 5 technical-sounding options, build a simple input→enzyme→output table for the pathway from memory first. Most wrong options are correct-sounding facts attached to the WRONG enzyme or WRONG step.",
  },
  {
    id: "pp25-12",
    subject: "biology",
    topic: "Ciclo di Krebs",
    question: "Each acetyl-CoA molecule that enters the Krebs cycle produces:",
    options: [
      "3 NADH, 1 FADH₂, 1 GTP and 2 molecules of CO₂",
      "1 NADH, 3 FADH₂, 1 GTP and 2 molecules of CO₂",
      "3 NADH, 1 FADH₂, 1 GTP and 3 molecules of CO₂",
      "3 NADH, 1 FADH₂, 2 GTP and 3 molecules of CO₂",
      "2 NADH, 2 FADH₂, 2 GTP and 2 molecules of CO₂",
    ],
    correct: 0,
    explanation:
      "Per turn of the Krebs cycle (i.e. per acetyl-CoA), the standard yield is 3 NADH, 1 FADH₂, 1 GTP (or ATP), and 2 CO₂.",
    studyTip:
      "Memorise the Krebs cycle yield as a single number string: '3-1-1-2' (NADH-FADH₂-GTP-CO₂) per acetyl-CoA. Then double everything if the question gives you a quantity of GLUCOSE instead of acetyl-CoA, since one glucose produces two acetyl-CoA.",
  },
  {
    id: "pp25-13",
    subject: "biology",
    topic: "Fosforilazione ossidativa",
    question: "Oxidative phosphorylation is a metabolic pathway:",
    options: [
      "through which the energy stored in reduced coenzymes is used for the synthesis of ATP",
      "through which the amino group resulting from the degradation of amino acids is eliminated",
      "through which fatty acids are broken down by removing two carbon atoms at a time",
      "which represents the final stage of the anabolism of amino acids, carbohydrates, and fatty acids",
      "through which fatty acid synthesis occurs",
    ],
    correct: 0,
    explanation:
      "Oxidative phosphorylation is the process where electrons from NADH and FADH₂ (reduced coenzymes) pass through the electron transport chain, and the resulting proton gradient drives ATP synthase to produce ATP.",
    studyTip:
      "Each wrong option here describes a DIFFERENT real biological process (urea cycle = B, beta-oxidation = C, anabolism in general = D, fatty acid synthesis = E). This is a 'process name matching' question — know the one-line definition of each major metabolic process by name.",
  },
  {
    id: "pp25-14",
    subject: "biology",
    topic: "Catena respiratoria",
    question: "Cytochromes are:",
    options: [
      "present in the respiratory chain",
      "transporters of hydrogen atoms in the respiratory chain",
      "enzymes that synthesize ATP",
      "inhibitors of oxidative phosphorylation",
      "cofactors of glycolysis",
    ],
    correct: 0,
    explanation:
      "Cytochromes are heme-containing proteins embedded in the inner mitochondrial membrane, forming part of the electron transport chain. Option B is subtly wrong: cytochromes transport ELECTRONS specifically (via the iron in their heme group), not hydrogen atoms — that distinction (H atoms vs. electrons) is what NADH/FADH₂ carry, not cytochromes.",
    studyTip:
      "Distinguish 'hydrogen atom carriers' (NADH, FADH₂, ubiquinone — carry both a proton and an electron) from 'electron carriers' (cytochromes — carry only electrons via Fe²⁺/Fe³⁺ transitions). This distinction is a favourite subtle-wrong-answer mechanism.",
  },
  {
    id: "pp25-15",
    subject: "biology",
    topic: "Tessuto connettivo - Proteine",
    question: "Collagen is a protein that is:",
    options: ["Extracellular", "Membranous", "Intracellular", "Abundant in the thick filament", "Nuclear"],
    correct: 0,
    explanation:
      "Collagen is the main structural protein of the extracellular matrix, secreted by cells (e.g. fibroblasts) into the space outside them, where it forms fibres that provide structural support to tissues.",
    studyTip:
      "When a question asks 'where is protein X located', first recall what the protein DOES. Collagen provides structural support to tissues as a whole — a job that requires it to be outside cells, in the matrix that holds tissue together.",
  },
  {
    id: "pp25-16",
    subject: "biology",
    topic: "Contrazione muscolare",
    question:
      "Muscle contraction is triggered by an increase in the concentration of calcium ions that bind to:",
    options: ["Troponin", "Myosin", "Tropomyosin", "Actin", "Vimentin"],
    correct: 0,
    explanation:
      "Calcium ions released from the sarcoplasmic reticulum bind to troponin, causing a conformational change that moves tropomyosin away from the myosin-binding sites on actin, allowing cross-bridge formation.",
    studyTip:
      "Sequence to memorise: Ca²⁺ binds TROPONIN → troponin shifts TROPOMYOSIN → tropomyosin uncovers the binding site on ACTIN → MYOSIN head binds. Calcium's direct target is troponin — the others are downstream effects, a common substitution trap.",
  },
  {
    id: "pp25-17",
    subject: "biology",
    topic: "Actina e miosina",
    question: "Which of the following statements about myosin and actin is CORRECT?",
    options: [
      "The binding of ATP to the actin-myosin complex promotes the dissociation of the complex.",
      "The binding of ATP to the actin-myosin complex promotes the formation of the complex.",
      "The binding of calcium to troponin is necessary for the dissociation of the actin-myosin complex.",
      "Actin has ATPase activity.",
      "Tropomyosin has ATPase activity.",
    ],
    correct: 0,
    explanation:
      "ATP binding to myosin (when myosin is attached to actin in the 'rigor' state) causes myosin to release actin — this is dissociation, not formation. Calcium binding actually promotes FORMATION of the complex (option C reverses this). ATPase activity belongs to MYOSIN, not actin or tropomyosin (options D and E).",
    studyTip:
      "Two opposite-sounding statements (A and B; here A is correct, B is its exact opposite) are a classic IMAT pairing — one of the pair is almost always correct and the other is the trap. When you see a perfect 'mirror pair' among the options, focus your attention there first.",
  },
  {
    id: "pp25-18",
    subject: "biology",
    topic: "Effetto Bohr",
    question:
      "The Bohr effect is observed in tissues that are oxidising large amounts of nutrients, generating hydrogen ions, and releasing CO₂ into the blood. This results in:",
    options: [
      "a decrease in oxygenated haemoglobin molecules",
      "an increase in oxygenated haemoglobin molecules",
      "an increase in the total number of red blood cells",
      "the denaturation of haemoglobin",
      "an increase in protein synthesis",
    ],
    correct: 0,
    explanation:
      "The Bohr effect describes how increased CO₂ and H⁺ (lower pH) decrease haemoglobin's affinity for oxygen, causing it to release more O₂ to the tissues. This means fewer haemoglobin molecules remain oxygenated (more O₂ is unloaded) — exactly where the body needs it most (active, oxygen-consuming tissue).",
    studyTip:
      "The Bohr effect is the body's 'deliver oxygen where it's needed' mechanism: active tissue → more CO₂/H⁺ → haemoglobin releases O₂ more readily → less oxygenated haemoglobin remains, more free O₂ available to that tissue. Frame it as a delivery mechanism, not just a chemistry shift.",
  },
  {
    id: "pp25-19",
    subject: "biology",
    topic: "Enzimi - Definizioni",
    question:
      "Which of the following compounds corresponds to the statement 'a substance that increases the speed of a reaction and is found unchanged at the end of it'?",
    options: ["Catalyst", "Effector", "Cofactor", "Modulator", "Cholesterol"],
    correct: 0,
    explanation:
      "This is the textbook definition of a catalyst (which includes enzymes): it speeds up a reaction without being consumed or permanently altered.",
    studyTip:
      "When a question gives you a textbook DEFINITION verbatim and asks which term it matches, the answer is usually the most basic/general term that fits — don't overthink it by reaching for a more specific or exotic-sounding option.",
  },
  {
    id: "pp25-20",
    subject: "biology",
    topic: "Inibizione enzimatica",
    question: "In competitive inhibition:",
    options: [
      "the inhibitor and the substrate compete for the active site of the enzyme",
      "the inhibitor binds to the substrate, preventing a reaction with the enzyme",
      "the inhibitor binds to the allosteric site and prevents the substrate from binding to the enzyme",
      "the inhibitor prevents the release of products from the active site",
      "the inhibitor binds to the enzyme-cholesterol complex",
    ],
    correct: 0,
    explanation:
      "By definition, competitive inhibition means the inhibitor structurally resembles the substrate and 'competes' with it for the same active site, blocking substrate binding.",
    studyTip:
      "'Competitive' = same site as substrate (active site), 'non-competitive/allosteric' = different site (allosteric site, option C describes this instead). The name of the inhibition type literally tells you the mechanism — match the word to the definition.",
  },
  {
    id: "pp25-21",
    subject: "biology",
    topic: "Digestione - Enzimi",
    question:
      "Which of the following classes of digestive enzymes is involved in the digestion of proteins?",
    options: ["Peptidase", "Amylase", "Lipase", "Isomerase", "Transaminase"],
    correct: 0,
    explanation:
      "Peptidases (including proteases) break peptide bonds in proteins. Amylase digests starch, lipase digests fats, and isomerase/transaminase are not primary digestive enzymes acting in the gut.",
    studyTip:
      "Match macronutrient to enzyme family by root word: 'amylase' (amylum = starch) → carbs, 'lipase' (lipid) → fats, 'peptidase/protease' (peptide bond) → proteins. The enzyme name often literally describes its substrate.",
  },
  {
    id: "pp25-22",
    subject: "biology",
    topic: "Fosforilazione ossidativa - Localizzazione",
    question: "Oxidative phosphorylation involves:",
    options: [
      "both membrane proteins and mobile molecules",
      "exclusively mitochondrial matrix proteins",
      "exclusively integral membrane proteins",
      "exclusively peripheral proteins",
      "only nuclear proteins",
    ],
    correct: 0,
    explanation:
      "The electron transport chain combines fixed integral membrane protein complexes (Complexes I-IV, ATP synthase) with mobile electron carriers (ubiquinone/CoQ moves within the membrane, cytochrome c moves along the membrane surface) — a mix of 'membrane proteins' and 'mobile molecules'.",
    studyTip:
      "Whenever an option says 'exclusively' or 'only', be suspicious on biology questions about the ETC — it's famous for being a coordinated SYSTEM of fixed complexes plus mobile shuttles, rarely a single category of component.",
  },
  {
    id: "pp25-23",
    subject: "biology",
    topic: "Coenzimi ridotti",
    question: "How are the reduced coenzymes that are formed during biological oxidation reoxidized?",
    options: [
      "Through the respiratory chain",
      "Through the process of beta oxidation",
      "By direct action of oxygen",
      "Through the passage of electrons in ATP synthase",
      "With the synthesis of hormones",
    ],
    correct: 0,
    explanation:
      "NADH and FADH₂ (reduced coenzymes) donate their electrons to the electron transport (respiratory) chain, becoming NAD⁺ and FAD again. Option D is a near-miss: ATP synthase uses the proton gradient (not electron passage) and is not where coenzymes are reoxidized — that happens at Complexes I and II.",
    studyTip:
      "Keep the ETC's job division straight: Complexes I & II reoxidize NADH/FADH₂ (accept their electrons); Complex IV passes electrons to oxygen (forming water); ATP synthase uses the H⁺ gradient to make ATP, but doesn't itself handle electrons from coenzymes.",
  },
  {
    id: "pp25-24",
    subject: "biology",
    topic: "Composti ad alta energia",
    question:
      "Which high-energy reserve compound contains phosphate groups and is present in muscles?",
    options: [
      "Creatine phosphate",
      "Carnitine phosphate",
      "Creatinine phosphate",
      "Glucose 1-phosphate",
      "Phosphofructokinase",
    ],
    correct: 0,
    explanation:
      "Creatine phosphate (phosphocreatine) is stored in muscle cells and rapidly donates its phosphate to ADP to regenerate ATP during short bursts of intense activity.",
    studyTip:
      "This question is mostly a vocabulary trap: 'creatine phosphate' (correct, real energy reserve) vs. 'creatinine phosphate' (creatinine is a waste product, not an energy store) vs. 'carnitine phosphate' (carnitine shuttles fatty acids, doesn't store this way) vs. phosphofructokinase (an ENZYME, not a reserve compound at all).",
  },
  {
    id: "pp25-25",
    subject: "biology",
    topic: "Metabolismo epatico",
    question: "Which of the following metabolic processes occurs mainly in the liver?",
    options: ["Urea cycle", "Glycolysis", "β-oxidation of fatty acids", "The Krebs Cycle", "Transamination"],
    correct: 0,
    explanation:
      "The urea cycle, which detoxifies ammonia (from amino acid breakdown) into urea for excretion, occurs almost exclusively in the liver. Glycolysis, Krebs cycle, β-oxidation, and transamination all occur in many cell types throughout the body, not predominantly the liver.",
    studyTip:
      "The urea cycle is the IMAT's favourite 'liver-specific' process — if you see 'urea' in an option for a 'which process is liver-specific' question, it's very likely the answer, since ammonia detoxification is one of the liver's signature unique jobs.",
  },
  {
    id: "pp25-26",
    subject: "biology",
    topic: "Riserve energetiche - Trigliceridi",
    question:
      "It is more advantageous for humans to store energy as triglycerides in adipose tissue rather than as proteins in muscles because triglycerides in adipose tissue contain:",
    options: [
      "more calories and less water",
      "fewer calories and less water",
      "fewer calories and more water",
      "more calories and more water",
      "more oxygen and less nitrogen",
    ],
    correct: 0,
    explanation:
      "Fat is calorically denser than protein (about 9 kcal/g vs ~4 kcal/g) and is stored largely anhydrous (without bound water), while protein/glycogen storage carries significant bound water — making fat a far more efficient long-term energy store per unit of weight.",
    studyTip:
      "The 'fat vs. glycogen/protein storage' comparison always comes down to two factors: calories per gram (fat wins) and water content (fat stores 'dry', glycogen/protein store 'wet'). Both factors point the same direction, which is why fat is the body's preferred long-term reserve.",
  },
  {
    id: "pp25-27",
    subject: "biology",
    topic: "Lisosomi",
    question: "Lysosomes are organelles:",
    options: [
      "that form by budding from the Golgi apparatus",
      "equipped with enzymes that function optimally at a pH above 7",
      "that form by budding from the smooth endoplasmic reticulum",
      "whose malfunction is currently not believed to be associated with diseases",
      "responsible for the synthesis of proteins destined for secretion",
    ],
    correct: 0,
    explanation:
      "Lysosomes bud off from the trans-Golgi network, packed with hydrolytic enzymes. These enzymes work optimally at acidic pH (~4.5-5, NOT above 7 — option B is reversed), and lysosomal storage diseases (e.g. Tay-Sachs) are well-documented (so option D is false). Protein synthesis for secretion is the job of the rough ER/Golgi pathway, not lysosomes (option E).",
    studyTip:
      "Lysosomes = 'the stomach of the cell': acidic interior (low pH), digestive enzymes, originate from the Golgi (the cell's packaging/shipping centre). Any option claiming a NEUTRAL/BASIC pH for lysosomes, or denying disease links, is reversing a known fact.",
  },
  {
    id: "pp25-28",
    subject: "biology",
    topic: "DNA negli organelli",
    question: "Which of the following statements is correct?",
    options: [
      "The nucleus, mitochondria and chloroplasts all contain DNA.",
      "Only the nucleus contains DNA while mitochondria and chloroplasts contain RNA.",
      "All cellular organelles possess a small amount of DNA.",
      "The rough endoplasmic reticulum contains the DNA necessary for protein synthesis.",
      "Prokaryotes have a well-defined nucleus containing DNA.",
    ],
    correct: 0,
    explanation:
      "Mitochondria and chloroplasts both have their own circular DNA (evidence for the endosymbiotic theory), in addition to the nuclear DNA. Option C overgeneralises to 'ALL organelles' (false — e.g. lysosomes, Golgi have no DNA). Option D is false (the RER has no DNA). Option E is false by definition — prokaryotes lack a defined nucleus.",
    studyTip:
      "'Mitochondria and chloroplasts have their own DNA' is the single most-tested fact connected to the endosymbiotic theory. Watch for options that take this true fact and over-extend it to 'all organelles' — that's the most common distortion.",
  },
  {
    id: "pp25-29",
    subject: "biology",
    topic: "Membrana plasmatica - Funzione",
    question: "What is the main function of the plasma membrane in cells?",
    options: [
      "Regulating exchanges between the inside and outside of the cell",
      "Providing energy to the cell",
      "Synthesizing proteins",
      "Containing the cell's genetic material",
      "Facilitating cell movement",
    ],
    correct: 0,
    explanation:
      "The plasma membrane's defining role is selective permeability — controlling what enters and exits the cell. The other options describe functions of mitochondria (energy), ribosomes (protein synthesis), the nucleus (genetic material), and the cytoskeleton/specialised structures (movement).",
    studyTip:
      "'Main function' questions about a structure are testing whether you know its PRIMARY, defining role versus a secondary or unrelated one. For the plasma membrane, that's always 'selective barrier/gatekeeper', regardless of how plausible the other options sound.",
  },
  {
    id: "pp25-30",
    subject: "biology",
    topic: "Bioenergetica - Reazioni esergoniche",
    question: "Which reactions are defined as exergonic?",
    options: [
      "Reactions that release energy and occur spontaneously",
      "Reactions that require heat to proceed",
      "Reactions that occur only in the presence of light",
      "Reactions that produce chemical energy without the consumption of reactants",
      "Reactions that always involve the synthesis of new compounds",
    ],
    correct: 0,
    explanation:
      "'Exergonic' literally means 'energy out' — these reactions have a negative ΔG, release free energy, and proceed spontaneously (without continuous energy input).",
    studyTip:
      "Break down the Greek roots: 'exergonic' = exo (out) + ergon (work/energy) → energy goes OUT, spontaneous. 'Endergonic' = endo (in) → energy goes IN, non-spontaneous, requires input. The prefix tells you the direction of energy flow directly.",
  },
  {
    id: "pp25-31",
    subject: "biology",
    topic: "Tessuto osseo - Osteoblasti",
    question: "What is the main role of osteoblasts?",
    options: [
      "Producing collagen and minerals for the bone matrix",
      "Resorbing minerals from the bone",
      "Regulating blood pH",
      "Breaking down damaged bone tissue",
      "Transporting nutrients in the bone marrow",
    ],
    correct: 0,
    explanation:
      "Osteoblasts ('bone builders' — '-blast' suffix indicates a cell that builds/forms) synthesise the collagen-rich organic matrix and facilitate mineral deposition, BUILDING bone. Resorbing/breaking down bone (options B and D) is the job of osteoclasts.",
    studyTip:
      "Suffix rule for bone cells: '-BLAST' = builds/forms (osteoBLAST = builds bone), '-CLAST' = breaks/destroys (osteoCLAST = breaks down bone, like 'iconoclast' breaks icons). This single rule resolves nearly every osteoblast-vs-osteoclast question.",
  },
  {
    id: "pp25-32",
    subject: "biology",
    topic: "Ormoni - Insulina",
    question: "Insulin:",
    options: [
      "stimulates glucose uptake in muscle",
      "stimulates the breakdown of glycogen",
      "is a steroid hormone",
      "inhibits fatty acid synthesis",
      "is secreted by the adrenal gland",
    ],
    correct: 0,
    explanation:
      "Insulin (secreted by pancreatic beta cells, NOT the adrenal gland — option E is wrong) promotes GLUCOSE UPTAKE into muscle and adipose tissue, and PROMOTES (not inhibits) glycogen and fatty acid synthesis (options B and D reverse insulin's actual effects). Insulin is a peptide hormone, not a steroid (option C).",
    studyTip:
      "Insulin = 'storage/uptake' hormone: lowers blood glucose by promoting uptake, glycogen synthesis, and fat synthesis. Glucagon does the OPPOSITE (breakdown/release). Any option describing insulin as promoting BREAKDOWN of anything is describing glucagon's job instead.",
  },

  /* ---------------- CHEMISTRY (Q33-47) ---------------- */
  {
    id: "pp25-33",
    subject: "chemistry",
    topic: "Struttura atomica - Notazione isotopica",
    question:
      "A simple ion of element A can be represented as: ₓ²ˣ⁺²A²⁺ (mass number = 2x+2, atomic number = x, charge = 2+). How many electrons are present in this ion?",
    options: ["x − 2", "x", "x + 2", "2x", "2x + 4"],
    correct: 0,
    explanation:
      "The atomic number (x) equals the number of protons. For a neutral atom, electrons = protons = x. For a 2+ ion, the atom has LOST 2 electrons, so electrons = x − 2.",
    studyTip:
      "For any ion: electrons = protons − charge (using the charge's sign). A 2+ charge means 2 electrons were removed (subtract); a 2− charge would mean 2 electrons were added (add). The mass number (2x+2, involving neutrons) is irrelevant to electron count — a common distractor.",
  },
  {
    id: "pp25-34",
    subject: "chemistry",
    topic: "Gas ideali - Legge di Gay-Lussac",
    question:
      "A sample of n moles of an ideal gas is in a closed system of fixed volume V at pressure P and temperature 27.0°C. If heated to 327.0°C, what will the pressure be? (Assume absolute zero is at −273.0°C)",
    options: ["2P", "P/2", "P", "(327/27)P", "(27/327)P"],
    correct: 0,
    explanation:
      "At constant volume, P/T is constant (Gay-Lussac's law) — but T must be in KELVIN. T₁ = 27 + 273 = 300 K. T₂ = 327 + 273 = 600 K. Since T doubled (300K → 600K), P doubles too: P₂ = 2P. Note that 327/27 ≈ 12, which is NOT the same as 600/300 = 2 — option D is the trap for students who forget to convert to Kelvin.",
    studyTip:
      "ALWAYS convert Celsius to Kelvin before using gas laws — this is the single most common arithmetic trap on IMAT gas-law questions. The numbers in Celsius rarely have the same ratio as in Kelvin (here 327/27 ≈ 12, but 600/300 = 2), and the wrong-but-tempting option is built using the Celsius numbers directly.",
  },
  {
    id: "pp25-35",
    subject: "chemistry",
    topic: "pH di soluzioni - Confronto",
    question:
      "A pH meter tests 0.1 mol/L solutions of: 1) CH₃COOH, 2) NaCl, 3) H₂SO₄, 4) Ba(OH)₂, 5) HNO₃. List these in order of INCREASING pH.",
    options: [
      "3, 5, 1, 2, 4",
      "3, 4, 1, 5, 2",
      "4, 2, 1, 5, 3",
      "2, 1, 4, 5, 3",
      "5, 3, 1, 2, 4",
    ],
    correct: 0,
    explanation:
      "Increasing pH = most acidic to most basic. H₂SO₄ (3) is a strong DIPROTIC acid → most acidic, lowest pH. HNO₃ (5) is a strong monoprotic acid → next lowest. CH₃COOH (1) is a weak acid → mildly acidic. NaCl (2) is a neutral salt → pH ≈ 7. Ba(OH)₂ (4) is a strong base with 2 OH⁻ per formula unit → highest pH. Order: 3, 5, 1, 2, 4.",
    studyTip:
      "Sort acids/bases in three steps: (1) acid vs. base vs. neutral salt, (2) strong vs. weak, (3) for strong acids/bases, how many H⁺/OH⁻ per molecule (diprotic H₂SO₄ and Ba(OH)₂ are 'stronger' than their monoprotic counterparts at equal concentration).",
  },
  {
    id: "pp25-36",
    subject: "chemistry",
    topic: "Stechiometria - Resa di reazione",
    question:
      "Given 4 FeS₂ + 11 O₂ → 2 Fe₂O₃ + 8 SO₂, which statement is correct?",
    options: [
      "From 2 mol of FeS₂ and 11 mol of O₂, 1 mol of Fe₂O₃ can be obtained.",
      "From 4 mol of O₂ and 11 mol of FeS₂, 8 mol of SO₂ can be obtained.",
      "To obtain 1 mol of Fe₂O₃, 2 mol of FeS₂ and 5 mol of O₂ are necessary.",
      "From 10 mol of O₂ and 1 mol of FeS₂, 3 mol of SO₂ can be obtained.",
      "To obtain 1 mol of Fe₂O₃ and 6 mol of SO₂, 2 mol of FeS₂ and 9 mol of O₂ are necessary.",
    ],
    correct: 0,
    explanation:
      "Halving the whole equation: 2 FeS₂ + 5.5 O₂ → 1 Fe₂O₃ + 4 SO₂. So 2 mol FeS₂ with (at least) 5.5 mol O₂ gives 1 mol Fe₂O₃. Option A says '2 mol FeS₂ and 11 mol O₂' — 11 mol O₂ is MORE than the 5.5 needed, so O₂ is in excess and FeS₂ is the limiting reagent; 1 mol Fe₂O₃ is still correctly obtained.",
    studyTip:
      "When checking stoichiometry options, first reduce the balanced equation to its simplest whole-number (or simplest ratio) form. Then for each option, identify the LIMITING reagent — having 'more than enough' of one reactant doesn't change the product amount determined by the other.",
  },
  {
    id: "pp25-37",
    subject: "chemistry",
    topic: "Diluizioni",
    question:
      "How many mL of water must be added to 15 mL of a 0.25 M solution of H₂SO₄ to obtain a 0.05 M solution?",
    options: ["60 mL", "30 mL", "120 mL", "75 mL", "50 mL"],
    correct: 0,
    explanation:
      "Using M₁V₁ = M₂V₂: 0.25 × 15 = 0.05 × V₂ → V₂ = 75 mL total final volume. Water added = final volume − initial volume = 75 − 15 = 60 mL.",
    studyTip:
      "Dilution questions often ask for water ADDED, not the final volume. Always compute the final volume first with M₁V₁=M₂V₂, then SUBTRACT the original volume to get the water added — forgetting this subtraction is the #1 error (here it would give the wrong answer 75 mL, option D).",
  },
  {
    id: "pp25-38",
    subject: "chemistry",
    topic: "Mole e ioni in soluzione",
    question: "How many Na⁺ ion moles can be found in 250 mL of a 1.2 M solution of Na₂SO₄?",
    options: ["0.6", "1.2", "1.8", "0.3", "0.4"],
    correct: 0,
    explanation:
      "Moles of Na₂SO₄ = M × V(L) = 1.2 × 0.250 = 0.3 mol. Each Na₂SO₄ formula unit contains 2 Na⁺ ions, so moles of Na⁺ = 0.3 × 2 = 0.6 mol.",
    studyTip:
      "Two-step pattern for 'ions in a salt solution' questions: (1) molarity × volume(L) = moles of the COMPOUND, (2) multiply by the subscript of the ion you want from the formula. Skipping step 2 is the most common mistake (would give 0.3, option D).",
  },
  {
    id: "pp25-39",
    subject: "chemistry",
    topic: "Equilibrio acido-base - pH acido debole",
    question:
      "The pH of an aqueous solution of a monoprotic weak acid with Ka = 1.0×10⁻⁵ and concentration 0.001 M is:",
    options: ["4", "3", "10⁻⁸", "8", "5.5"],
    correct: 0,
    explanation:
      "For a weak acid, [H⁺] ≈ √(Ka × C) = √(1.0×10⁻⁵ × 1.0×10⁻³) = √(1.0×10⁻⁸) = 1.0×10⁻⁴ M. pH = −log(1.0×10⁻⁴) = 4.",
    studyTip:
      "The shortcut formula [H⁺] = √(Ka × C) only works for WEAK acids/bases (where dissociation is small). When multiplying powers of 10 under a square root, halve the exponent: √(10⁻⁸) = 10⁻⁴. This avoids messy decimal arithmetic.",
  },
  {
    id: "pp25-40",
    subject: "chemistry",
    topic: "Sali neutri - pH",
    question: "What is the pH of a 0.7 M aqueous solution of KBr?",
    options: ["7", "0.7", "13.3", "10⁻⁷", "10⁻⁰·⁷"],
    correct: 0,
    explanation:
      "KBr is the salt of a strong acid (HBr) and a strong base (KOH) — it is a NEUTRAL salt. Neither K⁺ nor Br⁻ undergoes significant hydrolysis, so the solution remains neutral regardless of concentration: pH = 7.",
    studyTip:
      "For 'salt + water' pH questions, identify the parent acid and base: strong acid + strong base → neutral salt → pH 7 ALWAYS, REGARDLESS of concentration. The '0.7 M' in this question is a complete red herring designed to tempt you into a calculation that isn't needed.",
  },
  {
    id: "pp25-41",
    subject: "chemistry",
    topic: "Equilibrio chimico - Principio di Le Chatelier",
    question:
      "Given the equilibrium: Heat + 2FeCl₃(s) ⇌ 2FeCl₂(s) + Cl₂(g). Which option is correct?",
    options: [
      "To shift the equilibrium to the left, it is necessary to increase the concentration of Cl₂.",
      "To shift the equilibrium to the left, it is necessary to increase the concentration of FeCl₂(s).",
      "To shift the equilibrium to the left, it is necessary to remove FeCl₃(s).",
      "To shift the equilibrium to the right, it is necessary to cool the reaction.",
      "To shift the equilibrium to the right, it is necessary to increase the concentration of FeCl₃(s).",
    ],
    correct: 0,
    explanation:
      "The reaction is endothermic (Heat is a 'reactant'). Increasing Cl₂ (a product) shifts equilibrium LEFT (toward reactants) by Le Chatelier's principle, to consume the excess product. Note FeCl₃ and FeCl₂ are solids — changing the amount of a pure solid does NOT shift equilibrium (rules out options B, C, E). Cooling would shift an endothermic reaction LEFT, not right (rules out D).",
    studyTip:
      "Two key filters for equilibrium questions: (1) Heat written as a 'reactant' = endothermic forward reaction — adding heat shifts right, removing heat shifts left. (2) Pure solids and liquids don't appear in the equilibrium expression, so changing their amounts has NO effect on equilibrium position — eliminate any option that manipulates a solid/liquid.",
  },
  {
    id: "pp25-42",
    subject: "chemistry",
    topic: "Cinetica - Energia di attivazione",
    question: "The activation energy of a reaction represents:",
    options: [
      "the energy barrier that the reactants must overcome to transform into products",
      "the difference between the energy of the products and that of the reactants",
      "the difference between the kinetic energy and the potential energy of the reactants",
      "the energy released during the progress of a reaction",
      "the energy that is released only in the initial phase of any reaction in solution",
    ],
    correct: 0,
    explanation:
      "Activation energy (Ea) is the minimum energy 'hill' that must be climbed for reactants to reach the transition state and become products — regardless of whether the overall reaction is exothermic or endothermic.",
    studyTip:
      "Don't confuse activation energy (Ea — the 'barrier height', always positive) with ΔH (the overall energy difference between products and reactants, which can be positive or negative). Option B describes ΔH, not Ea — a very common mix-up.",
  },
  {
    id: "pp25-43",
    subject: "chemistry",
    topic: "Chimica organica - Ibridazione del benzene",
    question: "In benzene:",
    options: [
      "all the carbon atoms are sp² hybridized and the molecule has a planar structure",
      "all the carbon atoms are sp³ hybridized and the molecule has a planar structure",
      "all the carbon atoms are sp² hybridized and the molecule has a chair or boat structure",
      "all the carbon atoms are sp hybridized",
      "three carbon atoms are sp³ hybridized and three atoms are sp² hybridized",
    ],
    correct: 0,
    explanation:
      "Each carbon in benzene forms 3 sigma bonds (to 2 neighbouring carbons and 1 hydrogen) in a trigonal planar arrangement = sp² hybridization, with the remaining unhybridised p-orbital forming the delocalised π system. This sp² geometry forces the whole ring to be PLANAR (flat), not chair/boat (those are sp³ shapes, like cyclohexane).",
    studyTip:
      "sp³ → tetrahedral geometry → 'chair/boat' shapes (like cyclohexane). sp² → trigonal planar geometry → flat rings (like benzene). The hybridization directly determines whether a ring CAN be flat or must pucker — link these two facts together.",
  },
  {
    id: "pp25-44",
    subject: "chemistry",
    topic: "Carboidrati - Polisaccaridi",
    question: "Glycogen:",
    options: [
      "is a homopolysaccharide",
      "is a heteropolysaccharide",
      "is a disaccharide",
      "is a storage molecule present in both animal and plant cells",
      "is a polypeptide",
    ],
    correct: 0,
    explanation:
      "Glycogen is a polysaccharide made of repeating units of ONE monomer type (glucose) — making it a 'homo'-polysaccharide (homo = same). Glycogen is the animal storage carbohydrate; PLANTS store starch instead (option D is wrong on this distinction). It is not a disaccharide (option C — that's only 2 sugar units) or a polypeptide (option E — that's protein).",
    studyTip:
      "'Homo-' vs 'hetero-' polysaccharide refers to whether ONE or MULTIPLE types of monosaccharide make up the chain — glycogen and starch (both pure glucose chains) are homopolysaccharides. Also remember the animal/plant storage split: glycogen = animals, starch = plants.",
  },
  {
    id: "pp25-45",
    subject: "chemistry",
    topic: "Nomenclatura - Composti del ferro",
    question: "The compound FeCO₃ is:",
    options: [
      "ferrous carbonate",
      "ferric carbonate",
      "iron oxide",
      "iron pentacarbonyl",
      "none of the other answers is correct",
    ],
    correct: 0,
    explanation:
      "CO₃²⁻ (carbonate) has a 2− charge, so for the compound to be neutral, Fe must be 2+ (Fe²⁺). 'Ferrous' = Fe²⁺, 'ferric' = Fe³⁺ (which would pair with carbonate as Fe₂(CO₃)₃, a different formula). 'Iron oxide' is FeO/Fe₂O₃/Fe₃O₄ (no carbonate), and 'iron pentacarbonyl' is Fe(CO)₅ (a completely different, organometallic compound — note 'carbonyl' ≠ 'carbonate').",
    studyTip:
      "Determine the iron oxidation state from the anion's charge first: balance FeCO₃ as Fe^(2+) + CO₃^(2−) = neutral. Then map: ferrous = +2, ferric = +3 (an old naming convention still tested on the IMAT). Don't confuse 'carbonate' (CO₃²⁻) with 'carbonyl' (CO ligand) — similar spelling, very different chemistry.",
  },
  {
    id: "pp25-46",
    subject: "chemistry",
    topic: "Configurazione elettronica - Principio di Pauli",
    question: "How many electrons can occupy an orbital?",
    options: ["Two with antiparallel spins", "Two with parallel spins", "Three", "Just one", "Four"],
    correct: 0,
    explanation:
      "The Pauli exclusion principle states that an orbital can hold a maximum of 2 electrons, and they must have opposite ('antiparallel' or 'paired') spins.",
    studyTip:
      "Pauli exclusion principle = 'max 2 electrons per orbital, spins must be opposite (↑↓), never the same (↑↑)'. This single rule is the foundation for writing any electron configuration correctly.",
  },
  {
    id: "pp25-47",
    subject: "chemistry",
    topic: "Amminoacidi - Proprietà",
    question: "Which of the following statements about amino acids is true?",
    options: [
      "They contain an amine group and a carboxyl group",
      "They are normally poorly soluble in water",
      "They dissolve well in hexane",
      "They are one of the main constituents of carbohydrates",
      "They have no acid/base activity",
    ],
    correct: 0,
    explanation:
      "By definition, amino acids have an amino group (–NH₂) and a carboxyl group (–COOH) attached to a central carbon. This dual functional group structure makes them amphoteric (acid/base activity — option E is wrong) and generally water-soluble due to their charged/polar groups (options B and C reversed). Amino acids are the building blocks of PROTEINS, not carbohydrates (option D).",
    studyTip:
      "The defining feature of amino acids is right in the name: AMINO (–NH₂) + acid (–COOH). Their amphoteric (zwitterion) nature comes directly from having both an acidic and a basic group on the same molecule — this single fact explains their solubility, acid/base behaviour, and pH-dependent charge.",
  },

  /* ---------------- PHYSICS & MATHEMATICS (Q48-60) ---------------- */
  {
    id: "pp25-48",
    subject: "math",
    topic: "Disequazioni irrazionali",
    question: "What is the solution to the inequality √(2x) < 1 + x ?",
    options: ["∀x ≥ 0", "ℝ (all reals)", "∀x > 0", "∅ (empty set)", "∀x ≠ 0"],
    correct: 0,
    explanation:
      "First, the domain requires 2x ≥ 0, so x ≥ 0. For x ≥ 0, the right side (1+x) is always ≥ 1 > 0, so we can square both sides: 2x < (1+x)² = 1 + 2x + x² → 0 < 1 + x² → x² + 1 > 0, which is true for ALL real x (since x² ≥ 0, so x²+1 ≥ 1 > 0 always). Combined with the domain restriction x ≥ 0, the solution is all x ≥ 0.",
    studyTip:
      "For √(expr) < other_expr: first establish the DOMAIN (expr ≥ 0), then if the right side is guaranteed positive on that domain, you can square both sides safely. Always re-intersect your squared-inequality solution with the original domain restriction at the end.",
  },
  {
    id: "pp25-49",
    subject: "math",
    topic: "Disequazioni trigonometriche",
    question:
      "Which of the following inequalities is satisfied for every real value of x? sin²x + sinx − 2 ≤ 0",
    options: [
      "sin²x + sinx − 2 ≤ 0",
      "cos²x − cosx − 2 ≥ 0",
      "tan²x − 2tanx + 1 > 0",
      "2sin²x − sinx − 1 > 0",
      "2cos²x + cosx − 1 < 0",
    ],
    correct: 0,
    explanation:
      "Let s = sinx (range −1 to 1). Factor s² + s − 2 = (s+2)(s−1). Since s ranges in [−1,1], (s+2) is always positive (between 1 and 3), and (s−1) is always ≤ 0 (between −2 and 0). A positive times a non-positive is always ≤ 0 — so the inequality holds for ALL x.",
    studyTip:
      "For trig inequalities asking 'true for ALL x', substitute s = sinx or c = cosx (remembering the range is always [−1,1]), factor the resulting quadratic, and check the SIGN of each factor across the entire [−1,1] range. If the product's sign never flips, the inequality holds universally.",
  },
  {
    id: "pp25-50",
    subject: "math",
    topic: "Insiemi - Prodotto cartesiano",
    question: "What does the Cartesian product of a set A and a set B correspond to?",
    options: [
      "The set of all possible ordered pairs having as the first component an element of A and as the second component an element of B",
      "The representation of the intersection set of A and B",
      "The representation of the union set of A and B",
      "The set consisting of the products of corresponding numerical elements of A and B",
      "The representation of the difference set of A and B",
    ],
    correct: 0,
    explanation:
      "By definition, A × B = {(a,b) | a ∈ A, b ∈ B} — the set of ALL ordered pairs combining each element of A with each element of B.",
    studyTip:
      "This is a pure definition-recall question. 'Cartesian product' (×) ≠ intersection (∩) ≠ union (∪) ≠ difference (−/\\) — four completely different set operations. If you can name and define all four basic set operations, this question type is free points.",
  },
  {
    id: "pp25-51",
    subject: "math",
    topic: "Algebra - Quadrati di binomi",
    question: "The trinomial a² − 4ab + 4b² is equal to:",
    options: ["(a − 2b)²", "a² + b²", "a² − b²", "2(a + b)²", "a² + b²"],
    correct: 0,
    explanation:
      "(a − 2b)² = a² − 2·a·(2b) + (2b)² = a² − 4ab + 4b² ✓. This matches the 'square of a binomial' pattern (x − y)² = x² − 2xy + y² with x=a, y=2b.",
    studyTip:
      "Recognise the pattern (x ± y)² = x² ± 2xy + y² instantly. Here, the middle term −4ab = −2·a·(2b) and the last term 4b² = (2b)² immediately tell you y = 2b — factoring becomes pattern-matching rather than trial and error.",
  },
  {
    id: "pp25-52",
    subject: "math",
    topic: "Geometria - Rettangoli",
    question:
      "In a rectangle ABCD, the base AB is 5/4 of the height BC, and the perimeter is 72 cm. What are the dimensions?",
    options: [
      "AB = 20 cm; BC = 16 cm",
      "AB = 10 cm; BC = 8 cm",
      "AB = 12 cm; BC = 10 cm",
      "AB = 18 cm; BC = 16 cm",
      "AB = 20 cm; BC = 18 cm",
    ],
    correct: 0,
    explanation:
      "Perimeter = 2(AB+BC) = 72 → AB+BC = 36. Given AB = (5/4)BC, substitute: (5/4)BC + BC = 36 → (9/4)BC = 36 → BC = 16. Then AB = (5/4)(16) = 20.",
    studyTip:
      "When given a ratio like 'AB is 5/4 of BC', substitute directly: AB = (5/4)BC. Then the perimeter equation becomes a single-variable equation in BC. This avoids setting up two separate variables and a system of equations.",
  },
  {
    id: "pp25-53",
    subject: "math",
    topic: "Equazioni parametriche",
    question: "For which values of a is the equation 3x + a = 3 determined (has exactly one solution)?",
    options: ["For any value of a", "For no value of a", "For a ≠ −3", "For a ≠ 3", "For a ≠ 0"],
    correct: 0,
    explanation:
      "3x + a = 3 → x = (3−a)/3. Since the coefficient of x is 3 (never zero), this equation has EXACTLY ONE solution for x, regardless of what a is — there's no value of a that makes it indeterminate or impossible.",
    studyTip:
      "A linear equation Ax = B (in x) is 'determined' (one solution) whenever A ≠ 0, 'impossible' (no solution) when A=0 and B≠0, and 'indeterminate' (infinite solutions) when A=0 and B=0. Here the coefficient of x is always 3 (constant, never 0) — so it's ALWAYS determined, for any a.",
  },
  {
    id: "pp25-54",
    subject: "math",
    topic: "Equazioni parametriche - Casi impossibili",
    question: "Given the equation (a + 3)x = 5, which value of a makes the equation IMPOSSIBLE (no solution)?",
    options: ["a = −3", "a = 3", "a = 5", "a = −5", "a = 0"],
    correct: 0,
    explanation:
      "(a+3)x = 5 has no solution when the coefficient of x is 0 but the right side is not: a+3 = 0 → a = −3 gives 0·x = 5, which is impossible (0 can never equal 5).",
    studyTip:
      "For (coefficient)x = (constant), the equation is impossible exactly when coefficient = 0 AND constant ≠ 0. Set the coefficient expression equal to zero and solve for the parameter — that's your answer, as long as the constant side isn't also zero at that value.",
  },
  {
    id: "pp25-55",
    subject: "physics",
    topic: "Cinematica - Moto relativo",
    question:
      "Two cars A and B move at 120 km/h and 80 km/h respectively. If A is initially 500 m behind B, after one minute:",
    options: [
      "A has overtaken B",
      "A has not yet overtaken B",
      "A has exactly reached B",
      "A will never overtake B",
      "A will overtake B after a much longer time than one minute",
    ],
    correct: 0,
    explanation:
      "Relative speed of A with respect to B = 120−80 = 40 km/h = 40000m/3600s ≈ 11.11 m/s. In 1 minute (60s), A closes a gap of ≈ 11.11 × 60 ≈ 667 m. Since 667 m > 500 m (the initial gap), A has not just caught up but OVERTAKEN B within that minute.",
    studyTip:
      "For 'does A catch B' problems, work entirely in RELATIVE terms: relative speed = speed difference, and ask how long it takes to close the INITIAL GAP at that relative speed. Compare that time to the time given in the question — convert everything to the same units (here, km/h → m/s) before comparing.",
  },
  {
    id: "pp25-56",
    subject: "physics",
    topic: "Circuiti - Resistenze in serie e parallelo",
    question:
      "An electric circuit has 100 branches connected in parallel. Each branch has 10 resistors in series, each with value R. What is the equivalent resistance?",
    options: ["R/10", "10R", "100R", "R/100", "R"],
    correct: 0,
    explanation:
      "Each branch (10 resistors in series) has resistance = 10R. With 100 identical branches in PARALLEL, the equivalent resistance = (branch resistance)/(number of branches) = 10R/100 = R/10.",
    studyTip:
      "Two-step combination problems: solve the SERIES part first (resistances ADD: 10 × R = 10R), then apply the PARALLEL formula for IDENTICAL resistors (divide by the number of branches: 10R ÷ 100). Always resolve series groups into a single value before tackling the parallel combination.",
  },
  {
    id: "pp25-57",
    subject: "physics",
    topic: "Corrente elettrica - Portatori di carica",
    question:
      "Which particles move in a straight horizontal metal wire carrying a current from left to right?",
    options: [
      "Only the electrons moving from right to left",
      "Only the protons moving from right to left",
      "Only the electrons moving from left to right",
      "Only protons moving from left to right",
      "The electrons moving from left to right and the protons from right to left",
    ],
    correct: 0,
    explanation:
      "In a metal conductor, only electrons (the free charge carriers) move; protons are fixed in the metal lattice and don't move. Conventional current direction is DEFINED as the direction positive charge would flow — so 'current flows left to right' means electrons (negative charges) actually move RIGHT TO LEFT (opposite to conventional current).",
    studyTip:
      "Two facts combine here: (1) in metals, only ELECTRONS move (protons are fixed in the lattice — eliminate any option mentioning moving protons), and (2) electron flow is OPPOSITE to conventional current direction. 'Current left to right' = 'electrons right to left'.",
  },
  {
    id: "pp25-58",
    subject: "physics",
    topic: "Gravitazione - Variazione di g con l'altitudine",
    question:
      "An astronaut spacewalks at a distance from Earth's surface equal to three times Earth's radius. What fraction of g (surface gravity) does the astronaut experience?",
    options: ["1/16", "1/9", "1/3", "1/4", "1/6"],
    correct: 0,
    explanation:
      "Gravitational acceleration g' = g × (R/d)², where d is the distance from Earth's CENTER. The astronaut is at 3R from the SURFACE, so d = R + 3R = 4R from the center. g' = g × (R/4R)² = g × (1/4)² = g/16.",
    studyTip:
      "The classic trap: 'distance from the surface' is NOT the same as 'distance from the center' in gravitation formulas, which always use distance from the center of mass. Always add the planet's radius to a 'distance above the surface' before applying the inverse-square law.",
  },
  {
    id: "pp25-59",
    subject: "physics",
    topic: "Dinamica - Secondo principio e attrito",
    question:
      "A 2.0×10³ kg car travels at constant speed (15 m/s) on a flat road with constant friction force 2000 N. At t=0 it begins accelerating at 2.0 m/s² in the direction of motion. What are the engine forces F₁ (before t=0, constant speed) and F₂ (during acceleration)?",
    options: [
      "F₁ = 2000 N, F₂ = 6000 N",
      "F₁ = 0, F₂ = 4000 N",
      "F₁ = 0, F₂ = 6000 N",
      "F₁ = 30×10³ N, F₂ = 4000 N",
      "F₁ = F₂ = 2000 N",
    ],
    correct: 0,
    explanation:
      "At constant speed (segment 1), net force = 0, so the engine force exactly balances friction: F₁ = friction = 2000 N. During acceleration (segment 2), Newton's second law gives net force = ma = 2000 × 2.0 = 4000 N. The engine must provide enough force to both accelerate the car AND overcome friction: F₂ = ma + friction = 4000 + 2000 = 6000 N.",
    studyTip:
      "For 'engine force vs. friction' problems, always write F_engine − F_friction = ma (Newton's 2nd law along the direction of motion). At constant velocity, a=0, so F_engine = F_friction directly. When accelerating, F_engine = ma + F_friction — friction doesn't disappear just because the car speeds up.",
  },
  {
    id: "pp25-60",
    subject: "physics",
    topic: "Idrostatica - Pressione sulle pareti",
    question: "A stationary liquid exerts on the walls of the container that holds it:",
    options: [
      "forces always perpendicular to the walls at every point",
      "forces in any direction relative to the walls",
      "forces always parallel to the walls at every point",
      "no forces on the walls, only pressure",
      "forces equal to zero",
    ],
    correct: 0,
    explanation:
      "A defining property of fluid pressure at rest is that it acts PERPENDICULAR (normal) to any surface it contacts — if there were a force component parallel to the wall, the fluid would flow along the wall, contradicting the assumption that it's stationary.",
    studyTip:
      "'Pressure acts perpendicular to surfaces' is a foundational fluid statics fact — it's WHY hydraulic systems and dams work the way they do. Also note option D is a meaningless distinction: pressure IS the force per area; 'pressure but no force' is a contradiction in terms.",
  },
];

