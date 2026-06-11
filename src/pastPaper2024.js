/* ============================================================
   PAST PAPER — IMAT 2024 (Official MUR test, AY 2024/2025)
   Source: Ministero dell'Università e della Ricerca, official
   call for applications.

   NOTE: this PDF did not include a marked answer key. Every
   question below was independently solved and verified before
   writing the explanation. The source document's closing note
   states "In all the presented questions the right answer is at
   letter A" — our independent solutions are consistent with this
   for every verified question.

   Each question follows the standard shape used across the app:
   { id, subject, topic, question, options[5], correct, explanation, studyTip }
   Mixed into the simulation pool — never presented as a standalone
   "2024 test" block.
   ============================================================ */

export const PAST_PAPER_2024 = [
  /* ---------------- GENERAL / READING (Q1-4) ---------------- */
  {
    id: "pp24-1",
    subject: "general",
    topic: "Cultura generale - Letteratura",
    question: "Who is the author of the famous novel 'To the Lighthouse'?",
    options: ["Virginia Woolf", "Mary Shelley", "Jane Austen", "Emily Dickinson", "Agatha Christie"],
    correct: 0,
    explanation:
      "'To the Lighthouse' (1927) is one of Virginia Woolf's most celebrated novels, a landmark of modernist stream-of-consciousness writing.",
    studyTip:
      "For 'who wrote X' questions about famous novels, build mental associations by literary MOVEMENT: Woolf → modernism/stream-of-consciousness, Austen → Regency-era social novels, Shelley → Gothic/early sci-fi (Frankenstein), Dickinson → poetry (not novels) — the genre/style of the title can help you eliminate authors who worked in different traditions.",
  },
  {
    id: "pp24-2",
    subject: "general",
    topic: "Comprensione del testo - Storia della matematica",
    question:
      "Read this excerpt: 'Many ancient societies devised symbols to represent numbers and solutions to mathematical problems. Although thinkers began to take the first steps towards mathematics early on, only with Greek civilisation did this discipline acquire the abstract and general characteristics that render it a unique science... Documents from pre-Greek civilisations indicate that solutions to mathematical problems were confined to specific, tangible cases... and were treated as useful information geared towards practical outcomes.' Which of the following CANNOT be inferred from the text?",
    options: [
      "Since antiquity, mathematics has been characterized by abstractness and generality.",
      "In antiquity, mathematical notions were not communicated in a methodical manner.",
      "Symbols representing numbers had already been adopted in antiquity.",
      "In antiquity, mathematical notions were geared towards practical outcomes.",
      "The evolution of mathematics has been an extremely slow process.",
    ],
    correct: 0,
    explanation:
      "The passage explicitly says mathematics acquired abstract/general characteristics ONLY with Greek civilisation — meaning BEFORE that (in antiquity, pre-Greek), it was NOT abstract/general but confined to 'specific, tangible cases'. Option A claims abstractness existed 'since antiquity' (i.e. from the very start), directly contradicting this. Options B, C, D, and E are all directly supported by the passage's statements.",
    studyTip:
      "'Cannot be inferred' questions often hide a TIMING contradiction: the passage may describe something as true 'only after X', while the wrong option claims it was true 'since the beginning' or 'always'. Pay close attention to words like 'only with', 'began to', 'early on' that establish a BEFORE/AFTER structure.",
  },
  {
    id: "pp24-3",
    subject: "general",
    topic: "Cultura generale - Storia",
    question: "The Hundred Years' War was principally a conflict between which of the following kingdoms?",
    options: [
      "The Kingdom of France and the Kingdom of England",
      "The Kingdom of Aragon and the Kingdom of France",
      "The Kingdom of Aragon and The Kingdom of Castile",
      "The Kingdom of Castile and the Kingdom of Portugal",
      "The Kingdom of England and the Kingdom of Portugal",
    ],
    correct: 0,
    explanation:
      "The Hundred Years' War (1337-1453) was a series of conflicts primarily fought between the Kingdom of France and the Kingdom of England over the French throne and English-held territories in France.",
    studyTip:
      "The name itself is the clue: 'Hundred Years' War' is one of the most famous conflicts in European history, almost always associated with England vs. France in any general knowledge context — the other kingdoms listed (Aragon, Castile, Portugal) belong to different, separate Iberian conflicts.",
  },
  {
    id: "pp24-4",
    subject: "general",
    topic: "Grammatica - Forma passiva",
    question: "In which of the following is the verb passive?",
    options: [
      "The deeds of Aeneas were sung by Virgil.",
      "Many students read Greek tragedies in high school.",
      "In the Gallic Wars, Julius Caesar described in detail his military campaign to conquer Gaul.",
      "In one of his works, Plato associates solid forms to the four elements: octahedron to air, tetrahedron to fire, cube to earth, and icosahedron to water.",
      "In the Iliad, Homer sings the deeds of the Pelide Achilles.",
    ],
    correct: 0,
    explanation:
      "'were sung by Virgil' is passive voice (subject 'deeds' receives the action; 'by Virgil' identifies the agent). All other options use ACTIVE voice: 'students read', 'Caesar described', 'Plato associates', 'Homer sings' — in each, the subject performs the action directly.",
    studyTip:
      "The passive voice formula is: [form of 'to be'] + [past participle], often followed by 'by [agent]'. Scan each option for 'was/were/is/are + verb-ed/verb-en' — if you find that pattern, it's passive. 'were sung BY Virgil' is the textbook passive construction.",
  },

  /* ---------------- LOGIC (Q5-9) ---------------- */
  {
    id: "pp24-5",
    subject: "logic",
    topic: "Statistica - Frequenze",
    question:
      "A test's results are shown in a frequency table: marks 0-10 with frequencies 1,4,4,6,2,1,1,2,2,1,0 respectively. To pass, a mark higher than 5 is needed. What percentage of candidates passed?",
    options: ["25%", "24%", "20%", "30%", "50%"],
    correct: 0,
    explanation:
      "Total candidates = sum of all frequencies = 1+4+4+6+2+1+1+2+2+1+0 = 24. Candidates with mark > 5 (i.e. marks 6,7,8,9,10) = 1+2+2+1+0 = 6. Percentage = 6/24 = 25%.",
    studyTip:
      "'Higher than 5' means marks 6 and above — mark 5 itself does NOT count (a common off-by-one trap). Always re-read whether the threshold is inclusive ('at least 5' includes 5) or exclusive ('higher than 5' excludes 5) before summing frequencies.",
  },
  {
    id: "pp24-6",
    subject: "logic",
    topic: "Probabilità - Proporzioni",
    question:
      "Shelly is one of 1500 participants in a Latin contest. 12% of participants will receive either a silver-plated or gold-plated pen as a prize. If the number of silver-plated pens is twice the number of gold-plated ones, what is the probability that Shelly will receive a gold-plated one?",
    options: ["4%", "33%", "8%", "67%", "6%"],
    correct: 0,
    explanation:
      "Total prize winners = 12% of 1500 = 180. If silver = 2 × gold, and silver + gold = 180, then 3 × gold = 180, so gold = 60. Probability Shelly gets a gold pen = 60/1500 = 4%.",
    studyTip:
      "When a quantity is split in a ratio (here silver:gold = 2:1), express both parts in terms of ONE variable (gold = g, silver = 2g), set their SUM equal to the known total, solve for the variable, then compute the probability as (favourable outcomes)/(total participants) — not (favourable)/(prize winners).",
  },
  {
    id: "pp24-7",
    subject: "logic",
    topic: "Percentuali - Sconti successivi",
    question: "Two consecutive discounts of 10% and 20% are equal to a single discount of:",
    options: ["28%", "25%", "30%", "18%", "15%"],
    correct: 0,
    explanation:
      "After a 10% discount, the price is 90% of original (×0.9). After a further 20% discount on that, it's 80% of THAT (×0.8). Combined: 0.9 × 0.8 = 0.72, meaning the final price is 72% of the original — a total discount of 100% − 72% = 28%.",
    studyTip:
      "Successive percentage discounts NEVER simply add up (10%+20% ≠ 30% — that's the trap, option C). Multiply the 'remaining fraction' after each discount (0.9 × 0.8), then subtract from 1 (or 100%) to get the equivalent single discount.",
  },
  {
    id: "pp24-8",
    subject: "logic",
    topic: "Geometria - Conteggio in 3D",
    question:
      "Stacie builds a cube using 343 blocks of wood. She paints the cube green. How many of the wooden blocks will have at least one side painted green?",
    options: ["218", "125", "245", "238", "105"],
    correct: 0,
    explanation:
      "343 = 7³, so the cube is 7×7×7 blocks. Only the INNERMOST blocks (those completely surrounded, with no face touching the outside) remain unpainted — these form a smaller (7−2)×(7−2)×(7−2) = 5×5×5 = 125 cube. Blocks with at least one painted face = total − unpainted inner = 343 − 125 = 218.",
    studyTip:
      "For 'painted cube' problems, the key insight is that ONLY the inner (n−2)³ sub-cube remains completely unpainted (it has no face on the cube's surface). Compute n³ − (n−2)³ to get blocks with at least one painted face — much faster than trying to count corner/edge/face blocks separately.",
  },
  {
    id: "pp24-9",
    subject: "logic",
    topic: "Logica formale - Inferenze valide",
    question:
      "'When he takes the train, Marco always arrives at work on time.' Which statement can be deduced from this proposition?",
    options: [
      "Marco arrived late; therefore he did not take the train.",
      "Marco arrived late; therefore he took the train.",
      "Marco arrived on time; therefore he missed the train.",
      "Marco did not take the train; therefore he arrived late.",
      "Marco took his car; therefore he arrived on time.",
    ],
    correct: 0,
    explanation:
      "The statement is 'If train, then on-time' (If P, then Q). By modus tollens, 'If P then Q' + 'not Q' (arrived late = not on time) validly gives 'not P' (did not take the train). Options B, D, and E commit the fallacy of affirming the consequent or denying the antecedent — they assume the train is the ONLY way to be on time, which the statement never claims (he might also be on time by other means).",
    studyTip:
      "This is modus tollens again: 'If P then Q' + 'not Q' ⊢ 'not P'. The original statement only tells you what happens WHEN he takes the train — it says NOTHING about what happens when he doesn't (he could still arrive on time some other way). Don't assume the converse or inverse hold.",
  },

  /* ---------------- BIOLOGY (Q10-32) ---------------- */
  {
    id: "pp24-10",
    subject: "biology",
    topic: "Respirazione cellulare - Localizzazione",
    question: "Which process occurs within mitochondria?",
    options: ["Cellular respiration", "Glycolysis", "Photosynthesis", "The methylation of sugars", "The formation of microbodies"],
    correct: 0,
    explanation:
      "The mitochondrion is the site of the Krebs cycle and oxidative phosphorylation — the core of aerobic cellular respiration. Glycolysis occurs in the cytoplasm (option B), photosynthesis in chloroplasts (option C, plants only), and the other options are not primary mitochondrial functions.",
    studyTip:
      "'Cellular respiration' as a broad term is often used (especially in simpler questions) to refer to the mitochondrial stages (Krebs cycle + ETC), even though glycolysis is technically the first step of overall respiration but happens in the cytoplasm. When a question pairs 'cellular respiration' with 'mitochondria' as a single option, it's testing this broad/common usage.",
  },
  {
    id: "pp24-11",
    subject: "biology",
    topic: "Legami chimici - Legame a idrogeno",
    question: "What is a hydrogen bond?",
    options: [
      "A bond between a hydrogen atom and another strongly electronegative atom (such as oxygen or nitrogen) which is present in another molecule.",
      "A covalent bond between hydrogen and oxygen.",
      "A strong bond which allows bonding between non-polar molecules.",
      "The bond which occurs between hydrogen and oxygen within a water molecule.",
      "The bond between hydrogen and ionised atoms (such as phosphorus).",
    ],
    correct: 0,
    explanation:
      "A hydrogen bond is a relatively WEAK INTERMOLECULAR attraction between a hydrogen atom (already covalently bonded to an electronegative atom like O or N) and another electronegative atom on a DIFFERENT (or different part of the same) molecule. Option B and D describe the COVALENT O-H bond WITHIN a water molecule — different from the intermolecular hydrogen bond BETWEEN water molecules.",
    studyTip:
      "Distinguish the covalent O-H bond INSIDE a water molecule from the hydrogen bond BETWEEN separate water molecules — these are two completely different bond types (one strong/intramolecular, one weak/intermolecular) that are easy to confuse because both involve 'H' and 'O'.",
  },
  {
    id: "pp24-12",
    subject: "biology",
    topic: "Ciclo di Krebs - Localizzazione",
    question: "In eukaryotic cells, Krebs cycle reactions occur:",
    options: [
      "In the mitochondrial matrix",
      "On the internal membrane of the mitochondria",
      "In the cytoplasm",
      "In the large ribosomal subunit",
      "Close to the plasma membrane",
    ],
    correct: 0,
    explanation:
      "The enzymes of the Krebs (citric acid) cycle are dissolved in the mitochondrial MATRIX (the innermost compartment, inside the inner membrane). The electron transport chain, by contrast, is embedded IN the inner membrane (option B) — a frequently confused distinction.",
    studyTip:
      "Mitochondrial geography: the MATRIX (innermost fluid space) hosts the Krebs cycle (soluble enzymes); the INNER MEMBRANE hosts the electron transport chain (embedded protein complexes). 'In the matrix' vs 'on/in the membrane' is a precise distinction the IMAT tests directly.",
  },
  {
    id: "pp24-13",
    subject: "biology",
    topic: "Carboidrati - Classificazione del glucosio",
    question: "What kind of monosaccharide is glucose?",
    options: ["Hexose", "Pentose", "Triose", "Tetrose", "Nonose"],
    correct: 0,
    explanation:
      "Glucose has 6 carbon atoms (C₆H₁₂O₆), making it a HEXOSE ('hex-' = six).",
    studyTip:
      "Greek number prefixes for sugar classification by carbon count: tri- (3), tetr- (4), pent- (5), hex- (6). Glucose, fructose, and galactose (the common dietary sugars) are all hexoses — ribose and deoxyribose (in RNA/DNA) are pentoses.",
  },
  {
    id: "pp24-14",
    subject: "biology",
    topic: "Acidi nucleici - Zuccheri dell'RNA",
    question: "Which pentose sugar is present in RNA nucleotides?",
    options: ["Ribose", "Glucose", "Fructose", "Glycerol", "Lactose"],
    correct: 0,
    explanation:
      "RNA nucleotides contain RIBOSE (a pentose, 5-carbon sugar) — DNA contains DEOXYRIBOSE (ribose missing one oxygen). Glucose and fructose are hexoses (6-carbon, common in metabolism), glycerol is a 3-carbon alcohol (in lipids), and lactose is a disaccharide (milk sugar) — none are nucleotide components.",
    studyTip:
      "RNA = Ribonucleic acid → RIBOSE (the name literally tells you the sugar). DNA = Deoxyribonucleic acid → DEOXYribose (ribose minus one oxygen at the 2' position). The names of the molecules directly encode their sugar components.",
  },
  {
    id: "pp24-15",
    subject: "biology",
    topic: "Membrana plasmatica - Proteine carrier",
    question: "What are carrier proteins?",
    options: [
      "They are the proteins that transfer molecules and ions across the plasma membrane.",
      "They are proteins that phosphorylate enzymes in the plasma membrane.",
      "They are proteins that break down phospholipids in the plasma membrane.",
      "They are proteins that transport mRNA in the nucleus.",
      "They are proteins that transport tRNA in the nucleolus.",
    ],
    correct: 0,
    explanation:
      "Carrier (transport) proteins are integral membrane proteins that bind specific molecules/ions and undergo conformational changes to shuttle them across the plasma membrane — a key mechanism of facilitated diffusion and active transport.",
    studyTip:
      "'Carrier proteins' is membrane-transport vocabulary specifically — don't let the word 'carrier' alone trigger associations with unrelated processes (phosphorylation, RNA transport). The defining context here is 'across the plasma membrane'.",
  },
  {
    id: "pp24-16",
    subject: "biology",
    topic: "Bioenergetica - ATP",
    question: "What is the cell's energy currency?",
    options: ["ATP", "FADH2", "NADH", "Creatine", "NADPH"],
    correct: 0,
    explanation:
      "ATP (adenosine triphosphate) is the universal 'energy currency' — its terminal phosphate bond is hydrolysed to release energy for cellular work. FADH₂ and NADH are electron carriers that ultimately help GENERATE ATP, but are not themselves the 'currency' used directly for most cellular work.",
    studyTip:
      "'Energy currency' is a specific, commonly-used metaphor that refers to ATP almost exclusively in biology — NADH/FADH₂ are better thought of as 'electron shuttles' that feed INTO ATP production, not as the currency itself.",
  },
  {
    id: "pp24-17",
    subject: "biology",
    topic: "Bioenergetica - Idrolisi dell'ATP",
    question: "Which kind of reaction is ATP hydrolysis?",
    options: ["Exergonic", "Endergonic", "Condensation", "Oxidation-reduction", "Lipolysis"],
    correct: 0,
    explanation:
      "ATP hydrolysis (ATP + H₂O → ADP + Pi) RELEASES energy — it is exergonic (energy 'out', spontaneous). Condensation (option C) is the OPPOSITE reaction type (joining molecules with water release, like ATP synthesis from ADP+Pi). It is not primarily classified as redox (option D) or lipolysis (option E, fat breakdown).",
    studyTip:
      "ATP HYDROLYSIS (breaking the bond, releasing energy) = exergonic. ATP SYNTHESIS (forming the bond, requiring energy input) = endergonic. These are a matched opposite pair — make sure you know which direction (synthesis vs hydrolysis) the question is asking about.",
  },
  {
    id: "pp24-18",
    subject: "biology",
    topic: "Citologia - Compartimentazione cellulare",
    question: "The presence of intercellular compartmentalisation is a characteristic of which organisms?",
    options: ["Of eukaryotes", "Of viruses", "Of bacteria", "Of prokaryotes", "Only of algae"],
    correct: 0,
    explanation:
      "Membrane-bound organelles (nucleus, mitochondria, ER, Golgi, etc.) — the defining feature of internal compartmentalisation — are characteristic of EUKARYOTIC cells. Prokaryotes (bacteria, option C and D) lack these membrane-bound compartments. Viruses (option B) aren't cells at all. 'Only algae' (option E) is far too narrow — all eukaryotes (animals, plants, fungi, protists) are compartmentalised.",
    studyTip:
      "'Compartmentalisation via membrane-bound organelles' is THE single defining structural difference between eukaryotes and prokaryotes. Whenever a question contrasts these two cell types on internal structure, this is almost always the key fact being tested.",
  },
  {
    id: "pp24-19",
    subject: "biology",
    topic: "Citoscheletro - Microtubuli",
    question: "Which intracellular structure is composed of microtubules?",
    options: ["The centriole", "The nucleus", "The Golgi apparatus", "The nucleolus", "The endoplasmic reticulum"],
    correct: 0,
    explanation:
      "Centrioles are cylindrical structures made of a characteristic '9+0' arrangement of microtubule triplets, central to organising the mitotic spindle and forming the base of cilia/flagella (basal bodies).",
    studyTip:
      "Microtubule-based structures to remember as a group: centrioles, the mitotic spindle, cilia, flagella, and the general cytoskeleton's 'tracks' for transport. The nucleus, Golgi, nucleolus, and ER are membrane-bound compartments, not microtubule assemblies.",
  },
  {
    id: "pp24-20",
    subject: "biology",
    topic: "Mitocondri - Struttura delle membrane",
    question: "Mitochondria have:",
    options: [
      "An outer membrane and a very selective inner membrane",
      "Only a very selective outer membrane",
      "An outer membrane, an intermediate membrane, and a very selective inner membrane",
      "An outer membrane consisting of a phospholipid monolayer",
      "A very selective membrane in which no proteins are present",
    ],
    correct: 0,
    explanation:
      "Mitochondria have a DOUBLE membrane: a relatively permeable OUTER membrane and a highly selective INNER membrane (folded into cristae, housing the ETC). There is no 'intermediate membrane' (option C — that's three membranes, incorrect). Both membranes are standard phospholipid BILAYERS (option D wrong — 'monolayer' is incorrect for any cell membrane). The inner membrane is PACKED with proteins (option E wrong).",
    studyTip:
      "'Double membrane organelles' (mitochondria, chloroplasts, nucleus) each have exactly TWO membranes — outer (more permeable) and inner (more selective/specialised). Watch for options that claim a third membrane, a monolayer instead of bilayer, or 'no proteins' — all common distortions of basic membrane biology.",
  },
  {
    id: "pp24-21",
    subject: "biology",
    topic: "Sintesi proteica - Anticodone",
    question: "What is an anticodon?",
    options: [
      "The sequence of three nucleotides found on the tRNA corresponding to a codon on the mRNA.",
      "A sequence of three nucleotides transcribed from the mRNA and translated by rRNA.",
      "A part of the DNA that codes for a specific amino acid.",
      "A terminal triplet of rRNA that binds a specific amino acid.",
      "The sequence of three mRNA nucleotides corresponding to a DNA codon.",
    ],
    correct: 0,
    explanation:
      "The anticodon is a 3-nucleotide sequence on tRNA that base-pairs (via complementary base pairing) with the corresponding 3-nucleotide CODON on mRNA during translation, ensuring the correct amino acid is added.",
    studyTip:
      "'Codon' = on mRNA. 'Anticodon' = on tRNA, complementary to a codon. The prefix 'anti-' signals 'the matching/complementary partner of' — keep the molecule (mRNA vs tRNA) straight when an option swaps which molecule carries which sequence.",
  },
  {
    id: "pp24-22",
    subject: "biology",
    topic: "Ribosomi - Composizione",
    question: "What are ribosomes made of?",
    options: ["RNA and proteins", "DNA and proteins", "DNA and lipids", "RNA and DNA", "RNA, DNA, and proteins"],
    correct: 0,
    explanation:
      "Ribosomes are ribonucleoprotein complexes — composed of ribosomal RNA (rRNA) and ribosomal proteins. They contain NO DNA.",
    studyTip:
      "'Ribosome' contains 'ribo-' (RNA) directly in its name — a strong hint toward its composition. Ribosomes are sites of TRANSLATION (mRNA → protein); DNA never directly participates in this process, which is why options including DNA are distractors.",
  },
  {
    id: "pp24-23",
    subject: "biology",
    topic: "Membrana plasmatica - Modello a mosaico fluido",
    question: "The cell membrane consists of:",
    options: [
      "a double phospholipid layer with hydrophobic tails facing inward and the presence of integral and peripheral proteins",
      "Cholesterol and phospholipid molecules enclosing a protein layer",
      "A double layer of triglycerides and cholesterol",
      "A glycoprotein layer containing phospholipids and cholesterol",
      "A layer of fatty acids and globular proteins containing phospholipids and cholesterol",
    ],
    correct: 0,
    explanation:
      "This is the standard 'fluid mosaic model': a phospholipid BILAYER with hydrophobic (non-polar) tails pointing INWARD (away from water on both sides) and hydrophilic heads facing outward, studded with integral (embedded) and peripheral (surface-attached) proteins.",
    studyTip:
      "The fluid mosaic model has specific vocabulary: 'phospholipid BILAYER' (not triglycerides, not a single layer), 'hydrophobic tails facing INWARD/each other', and a MIX of 'integral and peripheral proteins'. Options describing triglycerides, single layers, or only one protein type are describing different (wrong) structures entirely.",
  },
  {
    id: "pp24-24",
    subject: "biology",
    topic: "Sintesi proteica - Traduzione",
    question: "In protein synthesis, what is translation?",
    options: [
      "It is the process by which mRNA is read and converted into a specific sequence of amino acids.",
      "It is the process of transcribing the mRNA sequence into a corresponding DNA molecule.",
      "It is the process of specific recognition of rRNA by amino acids.",
      "It is the process in which DNA is read and the corresponding mRNA produced.",
      "It is the process of pairing between DNA codons and tRNA anticodons.",
    ],
    correct: 0,
    explanation:
      "Translation = mRNA → protein (reading mRNA codons to assemble a specific amino acid sequence). Option B describes reverse transcription (RNA→DNA, an unusual/viral process). Option D describes TRANSCRIPTION (DNA→mRNA, the OPPOSITE process from translation). Option E incorrectly involves DNA directly in the codon-anticodon pairing, which actually happens between mRNA and tRNA.",
    studyTip:
      "TRANSCRIPTION = DNA → RNA (in the nucleus). TRANSLATION = RNA → protein (at the ribosome). These two terms are commonly swapped as distractors for each other — always check which MOLECULES are the input and output to identify which process is being described.",
  },
  {
    id: "pp24-25",
    subject: "biology",
    topic: "Citoscheletro - Componenti principali",
    question: "What are the principal components of the cytoskeleton?",
    options: [
      "Microtubules, microfilaments, and intermediate filaments",
      "Microtubules, myosin, and filamin",
      "Microtubules, dynein, and myosin",
      "Actin, myosin and dynein",
      "Collagen fibres and reticular fibres",
    ],
    correct: 0,
    explanation:
      "The cytoskeleton is built from three classes of filaments: MICROTUBULES (largest, made of tubulin), MICROFILAMENTS (smallest, made of actin), and INTERMEDIATE FILAMENTS (middle size, varied composition). Myosin and dynein are MOTOR PROTEINS that move ALONG these filaments, not structural components themselves. Collagen/reticular fibres (option E) are EXTRACELLULAR matrix components, not cytoskeletal.",
    studyTip:
      "Three-tier cytoskeleton hierarchy by size: microfilaments (actin, smallest) < intermediate filaments (varied proteins, medium) < microtubules (tubulin, largest). Motor proteins (myosin walks on actin, dynein/kinesin walk on microtubules) are SEPARATE from this structural classification — don't conflate 'the track' with 'what walks on the track'.",
  },
  {
    id: "pp24-26",
    subject: "biology",
    topic: "Genetica - Definizione di allele",
    question: "The term 'allele' defines:",
    options: [
      "one of several alternative forms of a gene",
      "A coding DNA base for a specific amino acid",
      "A hereditary trait only found in haploid cells",
      "The phenotypic manifestation of a given gene",
      "A set of coding DNA triplets for a specific amino acid",
    ],
    correct: 0,
    explanation:
      "An allele is one of two or more alternative versions of a gene that can exist at the same locus (position) on a chromosome (e.g. the 'brown eye' allele vs the 'blue eye' allele of an eye-colour gene).",
    studyTip:
      "Keep the GENE vs ALLELE distinction crisp: a GENE is the general 'category' (e.g. 'eye colour gene'), while ALLELES are the specific VARIANTS of that gene (e.g. 'brown' vs 'blue' versions). 'Alternative forms of a gene' is the textbook one-line definition.",
  },
  {
    id: "pp24-27",
    subject: "biology",
    topic: "Genetica - Dominanza",
    question: "In a heterozygous condition, an allele can certainly express itself when:",
    options: ["dominant", "recessive", "mutated", "multiple", "associated"],
    correct: 0,
    explanation:
      "In a heterozygote (two different alleles, e.g. Aa), the DOMINANT allele's phenotype is expressed regardless of what the other allele is. A RECESSIVE allele only expresses itself when paired with another recessive allele (homozygous recessive, aa) — in a heterozygote, it is masked.",
    studyTip:
      "'Certainly express itself' in a heterozygote = dominant, by definition. Recessive alleles need TWO copies (homozygous) to show their phenotype — in Aa, only the dominant 'A' phenotype is visible, the recessive 'a' is silent/masked.",
  },
  {
    id: "pp24-28",
    subject: "biology",
    topic: "Genetica - Definizione di mutazione",
    question: "What are mutations?",
    options: [
      "Alterations in the genetic information of a cell",
      "Alteration in the energy metabolism of a cell",
      "Alterations in enzyme functionality during zygote formation",
      "Alterations in the active transport system of biological membranes",
      "Alterations in the mechanism of cell division.",
    ],
    correct: 0,
    explanation:
      "A mutation, by definition, is any change/alteration in an organism's genetic information (DNA sequence). The other options describe alterations in DIFFERENT cellular systems (metabolism, enzymes, transport, division) — these may sometimes RESULT FROM mutations, but are not what mutations ARE.",
    studyTip:
      "This is a definitional question — 'mutation' is fundamentally about DNA/genetic information changes. Don't be drawn to options describing downstream EFFECTS of mutations (altered enzymes, altered transport) when the question asks for the definition itself.",
  },
  {
    id: "pp24-29",
    subject: "biology",
    topic: "Sintesi proteica - Traduzione (caratteristiche)",
    question: "Translation is a process which:",
    options: [
      "leads to the synthesis of polypeptide chains from mRNA",
      "occurs in the nucleus of eukaryotic cells",
      "leads to the synthesis of RNA from DNA",
      "is very similar to transcription",
      "Is exclusively eukaryotic",
    ],
    correct: 0,
    explanation:
      "Translation produces polypeptide (protein) chains by reading mRNA at the ribosome. It occurs in the CYTOPLASM (at ribosomes), NOT the nucleus (option B describes where transcription occurs in eukaryotes). Option C describes transcription, not translation. Translation and transcription are quite DIFFERENT processes (option D wrong). Translation occurs in BOTH prokaryotes and eukaryotes (option E wrong — it's not exclusively eukaryotic).",
    studyTip:
      "Location matters: in eukaryotes, TRANSCRIPTION happens in the nucleus, TRANSLATION happens in the cytoplasm (at ribosomes, free or on rough ER). This spatial separation is unique to eukaryotes (in prokaryotes, both happen in the cytoplasm simultaneously) — but translation itself is universal to all life.",
  },
  {
    id: "pp24-30",
    subject: "biology",
    topic: "DNA - Filamento complementare",
    question:
      "If the sequence CCGTTATTGA is found on a strand of DNA helix, what sequence will be found on the complementary strand?",
    options: ["GGCAATAACT", "AGTTATTGCC", "GGACATCCCT", "CGCACCTCCT", "GGCAATTAAT"],
    correct: 0,
    explanation:
      "Apply complementary base-pairing (A↔T, C↔G) to each base in order: C→G, C→G, G→C, T→A, T→A, A→T, T→A, T→A, G→C, A→T. Reading these complements in the same left-to-right order as the original gives: GGCAATAACT.",
    studyTip:
      "Go base-by-base, writing the complement DIRECTLY underneath each original base (C↔G, A↔T) — this position-by-position substitution is far less error-prone than trying to do it 'in your head' or worrying about strand directionality unless the question specifically asks for 5'→3' notation.",
  },
  {
    id: "pp24-31",
    subject: "biology",
    topic: "DNA - Replicazione",
    question: "Replication is the process through which:",
    options: [
      "DNA is used as a template to synthesise new DNA molecules",
      "DNA is used as a template to synthesise new RNA molecules",
      "Daughter cells are formed from a mother cell",
      "RNA is used as a template to synthesise proteins",
      "RNA is used as a template to synthesise new RNA molecules",
    ],
    correct: 0,
    explanation:
      "DNA Replication = DNA → DNA (making an identical copy of the genome before cell division). Option B describes transcription (DNA→RNA). Option C describes cell division/mitosis as a whole (a much broader process that INCLUDES replication as one step). Option D describes translation (RNA→protein).",
    studyTip:
      "Think of the three core 'central dogma' processes by their input→output: REPLICATION (DNA→DNA), TRANSCRIPTION (DNA→RNA), TRANSLATION (RNA→protein). Each option in this question describes one of these (or a broader process like mitosis) — match the input/output molecules to identify which.",
  },
  {
    id: "pp24-32",
    subject: "biology",
    topic: "Genetica - Operone procariotico",
    question: "The prokaryotic operon is:",
    options: [
      "A functional unit composed of a group of adjacent genes, co-ordinately controlled, and of DNA sequences with regulatory functions.",
      "A group of adjacent genes independent from each other",
      "a protein complex that catalyses the process of protein synthesis",
      "An RNA complex that is involved in the replication of DNA",
      "A DNA sequence element without any type of regulatory function",
    ],
    correct: 0,
    explanation:
      "An operon (e.g. the lac operon) is a cluster of genes under the control of a SINGLE promoter/regulatory region, transcribed together as one mRNA and co-ordinately regulated — the genes are NOT independent (option B is the opposite), and the operon DOES include regulatory sequences (option E is the opposite).",
    studyTip:
      "The defining feature of an operon is CO-ORDINATE control: multiple genes, one switch (promoter/operator), turned on/off TOGETHER. Any option saying the genes are 'independent' or that there's 'no regulatory function' contradicts this core definition directly.",
  },

  /* ---------------- CHEMISTRY (Q33-47) ---------------- */
  {
    id: "pp24-33",
    subject: "chemistry",
    topic: "Gas - Pressione parziale",
    question:
      "A mixture of 0.3 mol N₂, 0.5 mol CO₂, and 0.4 mol O₂ exerts a pressure of 2.4 atm. What is the partial pressure exerted by nitrogen?",
    options: ["0.6 atm", "0.8 atm", "0.5 atm", "0.3 atm", "0.75 atm"],
    correct: 0,
    explanation:
      "By Dalton's law, partial pressure = (mole fraction) × (total pressure). Total moles = 0.3+0.5+0.4 = 1.2. Mole fraction of N₂ = 0.3/1.2 = 0.25. Partial pressure of N₂ = 0.25 × 2.4 = 0.6 atm.",
    studyTip:
      "Dalton's law in two steps: (1) mole fraction = (moles of gas X)/(total moles of all gases), (2) partial pressure of X = (mole fraction of X) × (total pressure). Always compute total moles FIRST — it's needed for every subsequent mole fraction.",
  },
  {
    id: "pp24-34",
    subject: "chemistry",
    topic: "Gas ideali - Legge di Gay-Lussac",
    question:
      "A gas confined in a rigid cylinder at −3°C exerts a pressure of 9 atm. What pressure would it exert if heated to 27°C?",
    options: ["10 atm", "−81 atm", "8.1 atm", "9.6 atm", "12.5 atm"],
    correct: 0,
    explanation:
      "Convert to Kelvin: T₁ = −3+273 = 270K, T₂ = 27+273 = 300K. At constant volume (rigid cylinder), P/T = constant: P₂ = P₁×(T₂/T₁) = 9×(300/270) = 9×(10/9) = 10 atm.",
    studyTip:
      "Same rule as always: convert to KELVIN first. Note that −3°C is a NEGATIVE Celsius value but becomes a perfectly normal POSITIVE Kelvin value (270K) — don't let the negative sign in Celsius make you think something unusual is happening with the gas law.",
  },
  {
    id: "pp24-35",
    subject: "chemistry",
    topic: "Reazioni con acqua - Ossidi",
    question: "Which of the following compounds forms a hydroxide when reacting with water?",
    options: ["BaO", "Cl₂O", "SO₃", "SiO₂", "N₂O₃"],
    correct: 0,
    explanation:
      "BaO (a basic METAL oxide) reacts with water to form Ba(OH)₂, a hydroxide (base): BaO + H₂O → Ba(OH)₂. The other options are all NON-METAL oxides, which react with water to form OXOACIDS (not hydroxides): Cl₂O→HClO, SO₃→H₂SO₄, N₂O₃→HNO₂. SiO₂ is largely unreactive with water under normal conditions.",
    studyTip:
      "METAL oxides + water → HYDROXIDES (bases). NON-METAL oxides + water → OXOACIDS (acids). Identify whether the central element (Ba vs Cl, S, Si, N) is a metal or non-metal — this single classification predicts whether the product is a hydroxide or an acid.",
  },
  {
    id: "pp24-36",
    subject: "chemistry",
    topic: "Stechiometria - Coefficienti bilanciati",
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
      "Halving the equation: 2 FeS₂ + 5.5 O₂ → 1 Fe₂O₃ + 4 SO₂. Option A gives 2 mol FeS₂ (exactly the amount needed for 1 mol Fe₂O₃) with 11 mol O₂ (more than the 5.5 required — O₂ is in excess, FeS₂ is limiting). With 2 mol FeS₂ as the limiting reagent, exactly 1 mol Fe₂O₃ is obtained, as stated.",
    studyTip:
      "Reduce the balanced equation to its simplest ratio FIRST (here: divide everything by 4 → 1 FeS₂ : 2.75 O₂ : 0.5 Fe₂O₃ : 2 SO₂, or by 2 → 2:5.5:1:4). Then for each option, check whether the GIVEN amounts are enough for the CLAIMED product — having 'more than enough' of one reagent doesn't invalidate the product amount determined by the limiting reagent.",
  },
  {
    id: "pp24-37",
    subject: "chemistry",
    topic: "Diluizioni",
    question:
      "How many mL of water must be added to 15 mL of a 0.25 M H₂SO₄ solution to obtain a 0.05 M solution?",
    options: ["60 mL", "30 mL", "120 mL", "75 mL", "50 mL"],
    correct: 0,
    explanation:
      "M₁V₁ = M₂V₂ → 0.25 × 15 = 0.05 × V₂ → V₂ = 75 mL (final volume). Water added = 75 − 15 = 60 mL.",
    studyTip:
      "Identical structure to the equivalent question on the 2025 paper — this exact dilution-with-water-added pattern (compute final volume, then SUBTRACT initial volume) recurs across multiple years. Recognising recurring question 'shapes' across past papers is one of the most efficient ways to study.",
  },
  {
    id: "pp24-38",
    subject: "chemistry",
    topic: "Mole e ioni in soluzione",
    question: "How many Na⁺ ion moles can be found in 250 mL of a 1.2 M solution of Na₂SO₄?",
    options: ["0.6", "1.2", "1.8", "0.3", "0.4"],
    correct: 0,
    explanation:
      "Moles Na₂SO₄ = M × V(L) = 1.2 × 0.250 = 0.3 mol. Each formula unit has 2 Na⁺ ions: moles Na⁺ = 0.3 × 2 = 0.6 mol.",
    studyTip:
      "Same two-step pattern as before: (1) molarity × volume(L) = moles of compound, (2) × subscript of the target ion in the formula. This exact question (same numbers!) appears verbatim on the 2025 paper too — a clear sign this calculation type is a core, repeatedly-tested skill.",
  },
  {
    id: "pp24-39",
    subject: "chemistry",
    topic: "Acidi e basi - Teoria di Lewis/Brønsted",
    question: "In the reaction NH₃ + BF₃ ⇌ NH₃BF₃, the ammonia behaves as a:",
    options: ["Lewis base", "Brönsted base", "Brönsted acid", "Lewis acid", "Arrhenius base"],
    correct: 0,
    explanation:
      "NH₃ has a lone pair of electrons on nitrogen which it DONATES to form a coordinate (dative) bond with the electron-deficient boron in BF₃. By the LEWIS definition (acid = electron-pair acceptor, base = electron-pair DONOR), NH₃ is a Lewis BASE. There's no H⁺ being transferred here, so Brønsted definitions (options B, C) don't apply to this specific reaction.",
    studyTip:
      "When a reaction involves a LONE PAIR forming a new bond (no H⁺ transfer visible), think LEWIS acid/base, not Brønsted. Lewis base = donates electron pair (has a lone pair to give, like NH₃'s nitrogen); Lewis acid = accepts electron pair (electron-deficient, like boron in BF₃ which only has 6 electrons around it).",
  },
  {
    id: "pp24-40",
    subject: "chemistry",
    topic: "Redox - Specie riducente",
    question:
      "Zinc nitrate, nitrogen dioxide, and water are obtained from the reaction of metallic zinc and nitric acid in aqueous solution. What is the reducing species?",
    options: ["Zn(s)", "Zn²⁺(aq)", "H⁺(aq)", "Zn(NO₃)₂(aq)", "HNO₃(aq)"],
    correct: 0,
    explanation:
      "Metallic zinc Zn(s) (oxidation state 0) is OXIDISED to Zn²⁺ (loses electrons, going from 0 to +2). A species that is oxidised (loses electrons) is the REDUCING AGENT — it 'reduces' the other species by giving it electrons. The nitrogen in HNO₃ is REDUCED (N goes from +5 in HNO₃ to +4 in NO₂), making HNO₃ the oxidising agent.",
    studyTip:
      "Memory aid: the species that GETS OXIDISED (loses electrons) IS the reducing agent (it causes reduction elsewhere). The species that GETS REDUCED (gains electrons) IS the oxidising agent. It feels backwards at first — the reducing agent doesn't 'get reduced', it CAUSES reduction by sacrificing its own electrons.",
  },
  {
    id: "pp24-41",
    subject: "chemistry",
    topic: "Chimica organica - Conteggio atomi di idrogeno",
    question: "Which of the following compounds contains the most hydrogen atoms?",
    options: ["2,3-Dimethylpentane", "Cyclohexane", "1,2-Dimethylcyclobutane", "2,3-Dimethyl-2-butene", "2-Hexanol"],
    correct: 0,
    explanation:
      "2,3-Dimethylpentane is C₇H₁₆ (a saturated, acyclic alkane: CₙH₂ₙ₊₂ = C₇H₁₆ = 16 H). Cyclohexane is C₆H₁₂ (12 H, ring loses 2H vs. the acyclic alkane). 1,2-Dimethylcyclobutane is C₆H₁₂ (12 H, also a ring). 2,3-Dimethyl-2-butene is C₆H₁₂ (12 H, double bond loses 2H). 2-Hexanol is C₆H₁₄O (14 H). 2,3-Dimethylpentane (16 H) has the most.",
    studyTip:
      "For 'most hydrogens' comparisons, remember: every RING or DOUBLE BOND reduces the H count by 2 compared to the equivalent fully-saturated, acyclic alkane (CₙH₂ₙ₊₂). A SATURATED, ACYCLIC alkane with the most carbons (and no rings/double bonds/substituents that remove H) will tend to win — here, the C₇ acyclic alkane beats all the C₆ ring/double-bond/alcohol options.",
  },
  {
    id: "pp24-42",
    subject: "chemistry",
    topic: "Chimica organica - Gruppi funzionali",
    question: "A carbon-oxygen double bond is NOT present in which of the following molecules?",
    options: ["Dimethyl ether", "Acetaldehyde", "Acetone", "Acetic acid", "Methyl acetate"],
    correct: 0,
    explanation:
      "Dimethyl ether (CH₃-O-CH₃) has only C-O SINGLE bonds (an ether linkage) — no C=O double bond. Acetaldehyde (aldehyde, C=O), acetone (ketone, C=O), acetic acid (carboxylic acid, contains C=O), and methyl acetate (ester, contains C=O) ALL contain at least one carbonyl (C=O) group.",
    studyTip:
      "Recognise the 'carbonyl family' (all contain C=O): aldehydes, ketones, carboxylic acids, esters, amides. ETHERS (R-O-R, only single bonds to oxygen) are the odd one out — structurally simpler, no carbonyl. When a question asks 'which lacks C=O', look for the ether among carbonyl-containing functional groups.",
  },
  {
    id: "pp24-43",
    subject: "chemistry",
    topic: "Unità di misura - Pressione",
    question: "Which of the following values of pressure does NOT correspond to 1 atm?",
    options: ["1013.25 kPa", "101325 Pa", "1013 millibar", "760 mmHg", "760 torr"],
    correct: 0,
    explanation:
      "1 atm = 101.325 kPa (NOT 1013.25 kPa — this value is off by a factor of 10). The correct conversions are: 101325 Pa ✓, ≈1013 millibar ✓ (since 1 mbar = 1 hPa, and 101325 Pa = 1013.25 hPa = 1013.25 mbar), 760 mmHg ✓, 760 torr ✓ (1 torr = 1 mmHg by definition).",
    studyTip:
      "1 atm = 101.325 kPa = 101325 Pa = 1013.25 hPa = 1013.25 mbar = 760 mmHg = 760 torr. The kPa/Pa relationship (1 kPa = 1000 Pa) means '1013.25 kPa' would actually equal 1,013,250 Pa — TEN TIMES too large. Watch for 'kPa vs Pa vs hPa/mbar' confusion; the numerical values 1013.25 and 101325 look similar but belong to DIFFERENT units.",
  },
  {
    id: "pp24-44",
    subject: "chemistry",
    topic: "Mole - Numero di Avogadro",
    question:
      "Given that the relative atomic mass of nitrogen is 14u, how many nitrogen atoms are present in 0.7 g of gaseous nitrogen?",
    options: ["3.01×10²²", "6.02×10²²", "3.01×10²³", "1.51×10²²", "2.01×10⁻²³"],
    correct: 0,
    explanation:
      "Gaseous nitrogen exists as N₂ molecules (molar mass = 2×14 = 28 g/mol). Moles of N₂ = 0.7/28 = 0.025 mol. Each N₂ molecule has 2 N atoms, so moles of N atoms = 0.025 × 2 = 0.05 mol. Number of N atoms = 0.05 × 6.022×10²³ ≈ 3.01×10²².",
    studyTip:
      "'Gaseous nitrogen' = N₂ (diatomic molecule), molar mass 28 g/mol — NOT 14 g/mol (the atomic mass of a single N atom). Compute moles of N₂ molecules first, then multiply by 2 to get moles of N ATOMS, then by Avogadro's number. Skipping the ×2 (or using molar mass 14 instead of 28) are the two complementary errors that cancel out IF you make BOTH — but making only one gives a wrong answer by a factor of 2.",
  },
  {
    id: "pp24-45",
    subject: "chemistry",
    topic: "Stechiometria - Reagente limitante",
    question:
      "Carbon and oxygen react at high temperature to form CO₂. With Ar(C)=12, Ar(O)=16, and 100% yield, what happens when 9 g of carbon reacts with 36 g of oxygen?",
    options: [
      "33 g of CO₂ are produced.",
      "45 g of CO₂ are produced.",
      "9 g of oxygen remain.",
      "4 g of oxygen remain.",
      "18 g of oxygen remain.",
    ],
    correct: 0,
    explanation:
      "C + O₂ → CO₂ (1:1:1 mole ratio). Moles C = 9/12 = 0.75 mol. Moles O₂ available = 36/32 = 1.125 mol. Since the ratio is 1:1, 0.75 mol O₂ is needed (less than the 1.125 mol available) — CARBON is the limiting reagent. Mass CO₂ produced = 0.75 mol × 44 g/mol (CO₂ molar mass = 12+32=44) = 33 g.",
    studyTip:
      "When given masses of TWO reactants, always: (1) convert both to moles, (2) compare to the STOICHIOMETRIC RATIO from the balanced equation to find the LIMITING reagent, (3) calculate the product based on the limiting reagent only. Here the 1:1:1 ratio makes step 2 simple: whichever reactant has FEWER moles (C: 0.75 < O₂: 1.125) is limiting.",
  },
  {
    id: "pp24-46",
    subject: "chemistry",
    topic: "pH - Diluizione di acidi",
    question: "How much water needs to be added to 1 mL of an HCl solution with pH=2 to obtain a solution with pH=4?",
    options: ["99 mL", "1 mL", "2 mL", "24 mL", "49 mL"],
    correct: 0,
    explanation:
      "pH=2 means [H⁺]=10⁻² M. pH=4 means [H⁺]=10⁻⁴ M — a 100-fold DECREASE in concentration. Since moles of H⁺ stay constant (C₁V₁=C₂V₂): 10⁻²×1 = 10⁻⁴×V₂ → V₂ = 100 mL. Water added = 100 − 1 = 99 mL.",
    studyTip:
      "Each unit increase in pH = a 10× DILUTION (10-fold decrease in [H⁺]). Going from pH 2 to pH 4 is a change of 2 units = a 10×10 = 100-fold dilution. So the final volume must be 100× the initial volume — then subtract the initial volume to get water ADDED (not the final volume itself).",
  },
  {
    id: "pp24-47",
    subject: "chemistry",
    topic: "Acidi e basi - Teoria di Brønsted-Lowry",
    question: "According to the Brønsted-Lowry theory:",
    options: [
      "a strong acid forms a conjugate with a weak base",
      "the conjugate base is formed by an acid that has acquired an OH⁻ ion",
      "the conjugate acid is the product of the bonding of the base with an OH⁻ ion",
      "a base is a compound which can donate OH⁻ ions",
      "an acid is a substance which can provide a pair of electrons",
    ],
    correct: 0,
    explanation:
      "By Brønsted-Lowry, an acid donates H⁺ and becomes its 'conjugate base'; a base accepts H⁺ and becomes its 'conjugate acid'. A STRONG acid (which dissociates completely/donates H⁺ very readily) produces a correspondingly WEAK conjugate base (with little tendency to re-accept H⁺) — strong acid ↔ weak conjugate base is a fundamental inverse relationship in this theory. Options B and C incorrectly involve OH⁻ (that's Arrhenius theory, option D, not Brønsted-Lowry, which is about H⁺/proton transfer). Option E describes Lewis theory.",
    studyTip:
      "Three acid-base theories, three different focuses: ARRHENIUS = H⁺/OH⁻ in water specifically. BRØNSTED-LOWRY = proton (H⁺) DONOR/ACCEPTOR (broader, not limited to water). LEWIS = electron pair DONOR/ACCEPTOR (broadest). If an option mentions OH⁻, it's describing Arrhenius, not Brønsted-Lowry — even if the question header says 'Brønsted-Lowry'.",
  },

  /* ---------------- PHYSICS & MATHEMATICS (Q48-60) ---------------- */
  {
    id: "pp24-48",
    subject: "math",
    topic: "Funzioni - Funzione inversa con logaritmi",
    question:
      "Consider f(x) = 2ln(x) − 2ln(x−1), defined for x>1. Which expression gives its inverse function f⁻¹(y)?",
    options: [
      "eʸ/²/(eʸ/²−1), y > 0",
      "eʸ/²/(eʸ/²−1), y > 1",
      "1/(eʸ/²−1), y > 0",
      "1/(eʸ/²−1), y > 1",
      "1/(eʸ/²−1), y ≠ 0",
    ],
    correct: 0,
    explanation:
      "f(x) = 2ln(x/(x−1)). Set y = 2ln(x/(x−1)) → eʸ/² = x/(x−1). Solve for x: eʸ/²(x−1) = x → eʸ/²·x − eʸ/² = x → x(eʸ/²−1) = eʸ/² → x = eʸ/²/(eʸ/²−1). For the DOMAIN of f⁻¹: since x>1 in the original function, x/(x−1) > 1 always (numerator > denominator when both positive and x>1), so ln(x/(x−1)) > 0, meaning y = 2ln(...) > 0. So the domain of f⁻¹ is y>0.",
    studyTip:
      "To find f⁻¹: (1) write y=f(x), (2) algebraically isolate x in terms of y, (3) determine the domain of f⁻¹ by finding the RANGE of the original f (swap roles — the range of f becomes the domain of f⁻¹). Combine log properties (ln(a)−ln(b)=ln(a/b)) BEFORE attempting to isolate x — it simplifies the algebra significantly.",
  },
  {
    id: "pp24-49",
    subject: "math",
    topic: "Disequazioni di secondo grado",
    question: "Find the set of real solutions of: 2x² − 6x + 5 > 0",
    options: ["ℝ (all reals)", "∅ (empty set)", "(−∞,1) ∪ (2,+∞)", "(1,2)", "{1,2}"],
    correct: 0,
    explanation:
      "Discriminant = b²−4ac = (−6)²−4(2)(5) = 36−40 = −4. Since the discriminant is NEGATIVE, the quadratic 2x²−6x+5 has NO real roots — it never crosses the x-axis. Since the leading coefficient (2) is POSITIVE, the parabola opens upward, meaning the expression is ALWAYS POSITIVE. So '> 0' is satisfied for ALL real x.",
    studyTip:
      "Two-step shortcut for ax²+bx+c > 0 (or < 0) with no obvious factoring: (1) compute the discriminant b²−4ac. If negative, the parabola never touches the x-axis. (2) Check the sign of 'a' (leading coefficient): positive → parabola entirely above the axis (always positive); negative → entirely below (always negative). Negative discriminant + positive 'a' = true for all x.",
  },
  {
    id: "pp24-50",
    subject: "math",
    topic: "Probabilità - Estrazioni con reintroduzione",
    question:
      "A bag has 3 red balls and 7 green balls. Two extractions are made WITH replacement (first ball returned before the second draw). What is the probability of extracting 2 green balls?",
    options: ["49/100", "42/90", "7/10", "51/100", "9/100"],
    correct: 0,
    explanation:
      "With replacement, each draw is INDEPENDENT and the bag composition stays the same. P(green) = 7/10 each time. P(green AND green) = (7/10) × (7/10) = 49/100.",
    studyTip:
      "'WITH replacement' = independent events = same probability each draw = simply MULTIPLY the same fraction by itself. This is the simpler counterpart to 'without replacement' problems (where the denominator/numerator changes between draws) — make sure you correctly identify which type the question describes.",
  },
  {
    id: "pp24-51",
    subject: "math",
    topic: "Disequazioni con valore assoluto",
    question:
      "Which of the following is the solution of the inequality (x² + |4x+3|)/(4−3x) ≥ 0 ?",
    options: [
      "each real x with x < 4/3",
      "each real x with x ≠ −3/4 ∧ x ≠ 0",
      "each real x with x ≥ 4/3",
      "each real x with x > 4/3",
      "each real x with x ≤ 4/3",
    ],
    correct: 0,
    explanation:
      "The numerator x² + |4x+3| is a SUM of two non-negative terms (x²≥0 always, |4x+3|≥0 always). For the sum to equal ZERO, BOTH terms would need to be zero simultaneously: x²=0 requires x=0, but |4x+3|=0 requires x=−3/4 — these can't both hold at once. So the numerator is STRICTLY POSITIVE for all x (never zero). With a strictly positive numerator, the fraction's sign is determined entirely by the denominator: fraction ≥ 0 ⟺ denominator > 0 (denominator=0 is excluded from the domain anyway, and the fraction can never equal 0 since the numerator never does). 4−3x > 0 ⟺ x < 4/3.",
    studyTip:
      "When a numerator is a SUM of squares/absolute values, check whether it can ever be ZERO by seeing if all terms can vanish SIMULTANEOUSLY for the same x. If not, the numerator has a CONSTANT sign (always positive here), collapsing the entire inequality down to just analysing the denominator's sign — a huge simplification that's easy to miss if you jump straight into case-by-case absolute value analysis.",
  },
  {
    id: "pp24-52",
    subject: "math",
    topic: "Equazioni trigonometriche",
    question:
      "How many solutions are there in the range 0°≤x≤360° to the equation sin⁴((x+90°)/10) = 1/16?",
    options: ["1", "2", "4", "20", "40"],
    correct: 0,
    explanation:
      "Let θ=(x+90°)/10. sin⁴θ=1/16 → sin²θ=1/4 (taking the positive square root, since sin²θ≥0) → sinθ=±1/2. As x ranges over [0°,360°], θ=(x+90°)/10 ranges over [9°,45°]. In this narrow range [9°,45°], the ONLY angle where sinθ=±1/2 is θ=30° (sin30°=1/2); θ=150°, 210°, 330° (other solutions of sinθ=±1/2) all fall OUTSIDE [9°,45°]. So there is exactly 1 solution: θ=30° → x=210°.",
    studyTip:
      "When a trig equation involves a TRANSFORMED angle (here θ=(x+90°)/10), first find the RANGE of the transformed angle θ corresponding to the given range of x — this is often a much SMALLER interval than [0°,360°], drastically limiting how many of the 'usual' solutions for sinθ=k actually fall within range.",
  },
  {
    id: "pp24-53",
    subject: "math",
    topic: "Geometria - Volume del cilindro",
    question: "Given a cylinder with base radius 5 cm and height 7 cm, what is its volume?",
    options: ["175π cm³", "245π cm³", "70π cm³", "105π cm³", "This cannot be calculated with these data"],
    correct: 0,
    explanation: "Volume of a cylinder = πr²h = π(5)²(7) = π × 25 × 7 = 175π cm³.",
    studyTip:
      "The cylinder volume formula πr²h needs only radius and height — both given here, so option E (claiming insufficient data) is automatically wrong whenever both quantities are provided. Compute r² FIRST (25), then multiply by h (7) to get the coefficient of π (175) — breaking it into two simple multiplications avoids errors.",
  },
  {
    id: "pp24-54",
    subject: "math",
    topic: "Geometria - Triangolo rettangolo e trigonometria",
    question:
      "In a right triangle, let a and b represent the legs and c the hypotenuse. If α is the angle opposite side a, which relation is true?",
    options: ["a = c·sin(α)", "a = c·cos(α)", "c = a·sin(α)", "c = a·cos(α)", "a = b·cos(α)"],
    correct: 0,
    explanation:
      "By definition, sin(α) = (opposite side)/(hypotenuse) = a/c. Rearranging: a = c·sin(α).",
    studyTip:
      "SOH-CAH-TOA: Sin = Opposite/Hypotenuse, Cos = Adjacent/Hypotenuse, Tan = Opposite/Adjacent. Here 'a is opposite α' and 'c is the hypotenuse', so sin(α)=a/c directly gives a=c·sin(α) — a one-line application of the basic definition.",
  },
  {
    id: "pp24-55",
    subject: "physics",
    topic: "Lavoro e potenza",
    question:
      "A boat moves at speed v in uniform straight motion. A braking force of 210 N is applied over a distance of 5 m. How much work is done by the braking force?",
    options: ["210 J", "105 J", "1050 J", "8.4 J", "420 J"],
    correct: 2,
    explanation:
      "Work = Force × distance (when force and displacement are in the same/opposite line) = 210 N × 5 m = 1050 J. (Note: the braking force does NEGATIVE work on the boat since it opposes motion, but the MAGNITUDE of work done is 1050 J.) — A note on this specific question: the source document stated all 60 answers on this paper were 'A', which would point to 210 rather than 1050. However, 210 N × 5 m = 1050 J is the direct, standard application of W=Fd with the given numbers, and no other combination of the given quantities yields 210. This explanation follows the verified physics calculation (1050 J); if you find an official answer key for this paper, it's worth double-checking this one question against it.",
    studyTip:
      "W = F × d is one of the most direct formulas in physics — when a question gives you a force and a distance and asks for 'work' (sometimes loosely called 'power' in casual phrasing, but the formula and units — Joules — confirm it's work), it's almost always a single multiplication.",
  },
  {
    id: "pp24-56",
    subject: "physics",
    topic: "Gas ideali - Trasformazione isoterma",
    question:
      "An ideal gas in a container at temperature T occupies volume V at pressure P. If the volume is tripled at constant temperature, the pressure...",
    options: ["becomes P/3", "does not change", "becomes 3P", "becomes P/2", "changes, depending on T"],
    correct: 0,
    explanation:
      "At constant temperature, Boyle's Law applies: PV = constant. If V → 3V, then P must become P/3 to keep the product PV unchanged: P×V = (P/3)×(3V) = PV ✓.",
    studyTip:
      "Boyle's Law (PV=constant at fixed T) means P and V are INVERSELY proportional — if one TRIPLES, the other must become ONE-THIRD to keep the product constant. 'Tripled' in the question directly tells you to divide the other quantity by 3.",
  },
  {
    id: "pp24-57",
    subject: "physics",
    topic: "Circuiti - Legge di Ohm e potenza",
    question: "In a conductor, when a current of 10A flows, 2922W are dissipated. What is the resistance?",
    options: ["29.22 Ω", "2922 Ω", "2.922 Ω", "292.2 Ω", "29220 Ω"],
    correct: 0,
    explanation: "Power dissipated P = I²R → R = P/I² = 2922/(10)² = 2922/100 = 29.22 Ω.",
    studyTip:
      "P = I²R is the 'power dissipated by resistance' formula (different from P=IV or P=V²/R, which are equivalent but use different given quantities). When given CURRENT and POWER (and asked for resistance), R=P/I² is the direct formula — square the current, then divide.",
  },
  {
    id: "pp24-58",
    subject: "physics",
    topic: "Elettromagnetismo - Moto di una carica in campo magnetico",
    question:
      "An electron with constant velocity v enters a uniform magnetic field B perpendicularly. Which statement is FALSE?",
    options: [
      "The electron continues to move with a constant velocity v (as a vector)",
      "The trajectory of the electron is a circle with radius mₑv/(eB)",
      "The motion is uniformly circular with period 2πmₑ/(eB)",
      "The motion is circular with constant angular velocity",
      "The motion is uniformly circular with frequency eB/(2πmₑ)",
    ],
    correct: 0,
    explanation:
      "When a charged particle moves perpendicular to a magnetic field, the magnetic force acts as a CENTRIPETAL force, causing UNIFORM CIRCULAR MOTION. While the SPEED (magnitude of velocity) remains constant, the DIRECTION of velocity continuously changes — so the velocity VECTOR is NOT constant. Statement A claims the (vector) velocity 'continues constant', which is FALSE — making A the answer to 'which is false'. Statements B-E correctly describe the radius, period, angular velocity, and frequency of this circular motion.",
    studyTip:
      "Distinguish 'speed' (a scalar, |v|, which IS constant in uniform circular motion) from 'velocity' (a vector, v, which is NOT constant because direction changes). When a physics statement says 'velocity remains constant' for something moving in a circle, that's describing speed, not velocity — technically false if read literally as a vector statement.",
  },
  {
    id: "pp24-59",
    subject: "physics",
    topic: "Moto armonico - Velocità istantanea",
    question:
      "A particle moves along the x-axis with x(t) = 4cos(ωt), x in metres, t in seconds, ω=2π rad/s. What is the velocity at t*=1/2 s?",
    options: ["0 m/s", "approximately −4 m/s", "approximately 8.5 m/s", "approximately 4.2 m/s", "approximately 25.1 m/s"],
    correct: 0,
    explanation:
      "Velocity v(t) = dx/dt = −4ω·sin(ωt). At t*=1/2s: ωt* = 2π × 0.5 = π rad = 180°. v(t*) = −4×(2π)×sin(π) = −8π × 0 = 0 m/s, since sin(π)=0.",
    studyTip:
      "Differentiate x(t)=A·cos(ωt) to get v(t)=−Aω·sin(ωt) — memorise this derivative pair for SHM problems. Then evaluate ωt* in RADIANS (here, ωt*=π exactly, a 'nice' angle) and recall sin(π)=0, sin(π/2)=1, sin(0)=0, etc. — these standard angle values make many SHM velocity questions resolve to clean numbers.",
  },
  {
    id: "pp24-60",
    subject: "physics",
    topic: "Moto oscillatorio - Pendolo",
    question: "A pendulum rod moves from the vertical position. Which of the following statements is FALSE?",
    options: [
      "In the absence of friction, the pendulum tends to come to a stop after a certain time",
      "In the absence of friction, the motion is simple harmonic oscillation.",
      "In the presence of friction, oscillatory motion is damped.",
      "The pendulum stops after reaching a certain height and then swings back.",
      "The pendulum describes a circular arc during its motion.",
    ],
    correct: 0,
    explanation:
      "By conservation of energy, a FRICTIONLESS pendulum oscillates FOREVER with constant amplitude — it never 'comes to a stop'. Statement A claims it DOES stop 'after a certain time' even WITHOUT friction, which is FALSE (this is the answer). Statements B-E correctly describe: small-angle SHM behaviour (B), friction causing damping (C), the momentary stop at maximum displacement before swinging back (D, true at each oscillation peak — not a permanent stop), and the circular arc geometry (E).",
    studyTip:
      "'In the absence of friction, X comes to a stop' is ALWAYS a red flag in mechanics — energy conservation guarantees that frictionless systems (pendulums, orbits, oscillators) maintain their motion indefinitely. Don't confuse 'momentarily stops at the peak of each swing' (true, happens every cycle) with 'eventually stops permanently' (false without friction/damping).",
  },
];

