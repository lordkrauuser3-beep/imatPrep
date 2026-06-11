/* ============================================================
   PAST PAPER — IMAT 2019 (commented simulation)
   Source: user-provided "test-IMAT-2019-commentato.pdf".

   NOTE: commented simulation, not a clean official grid. Original
   questions that depend on figures/tables/charts/diagrams lost in
   PDF extraction are OMITTED — only fully text-answerable questions
   are kept, so this is a subset, not all 60. Explanations condensed
   and translated to match the app's style.

   Shape: { id, subject, topic, question, options[5], correct, explanation, studyTip }
   Mixed into the simulation pool — never a standalone "2019" block.
   ============================================================ */

export const PAST_PAPER_2019 = [
  /* ---------------- LOGIC ---------------- */
  {
    id: "pp19-1",
    subject: "logic",
    topic: "Ragionamento critico - Conclusioni",
    question:
      "A study involving a brain-training exercise was carried out on more than a thousand adults aged 65 and over, some of whom later developed dementia. Results showed that the benefits of the five-week mental agility course undertaken by some of the adults lasted for at least five years. This led to an improvement in everyday activities such as money management and the ability to do housework. If those with trained brains developed dementia, they did so later than those in the control group. The results also showed that, for those people in the study who developed dementia, after the diagnosis their mental decline occurred faster than for those who had not undertaken the training. Which one of the following can be drawn as a conclusion from the above passage?",
    options: [
      "All over-65s who undertake brain training live for at least five years afterwards.",
      "Keeping the mind active delays the onset of dementia.",
      "Older people do not perform mentally challenging tasks unless forced to do so.",
      "People do a decreasing amount of housework as they grow older.",
      "It is preferable to have swift mental decline once dementia develops.",
    ],
    correct: 1,
    explanation:
      "The passage shows mental exercises slow dementia, so B (keeping the mind active delays onset) is the supported conclusion. A overstates 'five years'; C, D and E aren't claimed.",
    studyTip:
      "A valid conclusion summarises the passage's findings without exaggerating any single detail.",
  },
  {
    id: "pp19-2",
    subject: "logic",
    topic: "Ragionamento critico - Indebolire",
    question:
      "Once again it has become fashionable for householders to replace their carpets with wooden floors. Sales of laminate and solid floors, such as oak, have seen a massive increase in the last ten years. This trend seems more in tune with our eco-friendly aspirations: carpets are often plastic-based and use vast quantities of underlying material, or underlay, made from petrochemicals. For this reason, it seems unlikely that wooden floors will go out of fashion in the near future. Which one of the following, if true, most weakens the above argument?",
    options: [
      "Carpets can harbour dust mites and allergens.",
      "Not all wooden floors need a layer of underlay.",
      "Most types of laminate and wood floors use petrochemicals in their manufacture.",
      "Sales of carpets made of synthetic materials have decreased in the last ten years while woollen carpets have seen an increase.",
      "Wooden floors may look longer-lasting but can be more easily damaged than carpets.",
    ],
    correct: 2,
    explanation:
      "The argument favours wooden floors as eco-friendly; C weakens it most by noting most laminate and wood floors also use petrochemicals, undercutting that advantage.",
    studyTip:
      "To weaken an 'eco-friendly' claim, find evidence that the favoured option shares the very drawback it was supposed to avoid.",
  },
  {
    id: "pp19-3",
    subject: "logic",
    topic: "Ragionamento critico - Conclusioni",
    question:
      "According to the current mainstream scientific view, Near Death Experiences (NDEs) are explicable in purely physiological terms. Specifically, they are caused by cerebral anoxia (oxygen deficiency in brain tissue), which occurs in a dying brain. On the other hand, recent research on hundreds of successfully resuscitated cardiac patients found that only twenty per cent reported NDEs. If NDEs had purely medical causes then most of the patients should have experienced them, since they had all been clinically dead and experienced cerebral anoxia. NDEs therefore do not have purely physiological causes. Which one of the following best expresses the main conclusion of the above passage?",
    options: [
      "NDEs are caused by oxygen deficiency in the brain.",
      "Not all clinically dead patients have NDEs.",
      "NDEs are a physical property of the human brain.",
      "NDEs are not necessarily caused by physical events alone.",
      "Not all successfully resuscitated cardiac patients have NDEs.",
    ],
    correct: 3,
    explanation:
      "The passage argues NDEs aren't purely physiological, so D is the main conclusion. A, B and E restate premises; C contradicts the NDE definition.",
    studyTip:
      "The main conclusion restates the passage's final claim in different words — distinguish it from premises already given.",
  },
  {
    id: "pp19-4",
    subject: "logic",
    topic: "Ragionamento critico - Punti deboli",
    question:
      "Increasingly, the quality of a teacher, and of his or her lessons, is to be judged by feedback from their pupils. This is dangerous, as pupils have a tendency to focus too much on whether or not they enjoyed the lesson, in other words, on how much 'fun' they found it. The purpose of education, however, is not to keep children entertained; it is not to make their lives more fun. Arguably, it is not even to make them happier, per se. The purpose of schools is to make their pupils better, more educated people. This is all that matters, and therefore it is whether the teacher succeeds at this – not at being a children's entertainer – that counts. Which one of the following is a flaw in the above argument?",
    options: [
      "It fails to consider that enjoying lessons could result in pupils ending up better educated.",
      "By simply asserting that the purpose of education is not even to make people happier, the argument rests on a questionable contention.",
      "It patronises young people by thinking that their judgement will be based solely on how much fun they found the lesson.",
      "It doesn't specify precisely what it means by making someone a better, more educated person.",
      "The comparison with being a children's entertainer is an unfair exaggeration of what a teacher tries to do by making lessons more fun.",
    ],
    correct: 4,
    explanation:
      "The flaw is the unfair exaggeration in comparing teachers to 'children's entertainers' (E). The other options overstate or misread the passage.",
    studyTip:
      "A flaw can be a loaded or exaggerated comparison that distorts what's actually being argued.",
  },
  {
    id: "pp19-5",
    subject: "logic",
    topic: "Ragionamento critico - Assunzioni",
    question:
      "Researchers have tried to establish reasons for a recent drop in the catch of marlin near the Madeira coast. This drop cannot be explained by environmental conditions; there was no significant change in the temperature or composition of the region's water. Nor could one blame the human factor, because the size of the fishing fleet, catch quotas and pollution levels have been strictly observed. The environmentalists then analysed the records of the fishing catch of marlin over the last six centuries. This research identified that regular five-year periods of significant decrease in the catch alternated with fifteen-year periods of gradual growth of the catch. In view of this, the study concluded that the current drop in the marlin catch is part of a long-term cycle related to fish migration and food-chain balance. Which one of the following is an underlying assumption of the above argument?",
    options: [
      "The records provide accurate information about the catch of marlin off the Madeira coast.",
      "The change in fishing technology has affected the change in the fishing catch.",
      "There is no correlation between the fishing catch today and the deep-sea stock of marlin in the sixteenth century.",
      "The fishing catch of marlin around Madeira does not depend on the condition of the water around the island.",
      "Climate change did not affect the temperature of ocean water off the Madeira coast.",
    ],
    correct: 0,
    explanation:
      "The conclusion rests on six centuries of catch records, so it assumes those records are accurate (A). The other options aren't required for the argument.",
    studyTip:
      "When an argument relies on data, its accuracy is usually an unstated assumption — test whether the conclusion survives if the data were unreliable.",
  },
  {
    id: "pp19-6",
    subject: "logic",
    topic: "Logica numerica",
    question:
      "At the Shawilde Theatre, tickets are priced as follows: Front stalls £35, Centre stalls £28, Rear stalls £20. Every row in the theatre contains 30 seats. Last night's performance was a sell-out and the ticket sales were £21,000. Exactly 60% of this income came from tickets for the centre stalls, and the rest was split equally between the front stalls and the rear stalls. How many rows of seats make up the centre stalls at the Shawilde Theatre?",
    options: ["15", "11", "19", "22", "26"],
    correct: 0,
    explanation:
      "Centre stalls earned 60% of £21,000 = £12,600. Each centre row earns £28 x 30 = £840. Rows = 12,600 / 840 = 15.",
    studyTip:
      "Find the total revenue for the category, divide by the revenue per row (price x seats) to get the number of rows.",
  },
  /* ---------------- GENERAL KNOWLEDGE ---------------- */
  {
    id: "pp19-7",
    subject: "general",
    topic: "Cultura generale - Letteratura",
    question:
      "Which one of the following literary works does NOT originate in the corresponding country?",
    options: [
      "The Tale of Genji – Japan",
      "The Poems of Rumi – China",
      "Oedipus Rex – Greece",
      "The Divine Comedy – Italy",
      "Don Quixote – Spain",
    ],
    correct: 1,
    explanation: "Rumi's poems belong to Persian, not Chinese, culture, so that pairing is wrong.",
    studyTip:
      "Rumi is a Persian poet — link major literary works to their actual cultural origin.",
  },
  {
    id: "pp19-8",
    subject: "general",
    topic: "Cultura generale - Musica",
    question: "Which one of the following composed the opera Madama Butterfly?",
    options: [
      "Giacomo Puccini",
      "Giuseppe Verdi",
      "Gioachino Rossini",
      "Georges Bizet",
      "Richard Wagner",
    ],
    correct: 0,
    explanation: "Madama Butterfly is an opera by Giacomo Puccini.",
    studyTip:
      "Tie famous operas to their composers — Madama Butterfly, Tosca and La Bohème are all Puccini.",
  },
  {
    id: "pp19-9",
    subject: "general",
    topic: "Cultura generale - Letteratura",
    question: "Which one of the following plays by William Shakespeare is NOT set in Italy?",
    options: [
      "Much Ado About Nothing",
      "Othello",
      "A Midsummer Night's Dream",
      "The Taming of the Shrew",
      "Romeo and Juliet",
    ],
    correct: 2,
    explanation: "A Midsummer Night's Dream is set in Athens, Greece, not Italy.",
    studyTip:
      "Several Shakespeare plays are set in Italy (Othello, Romeo and Juliet); A Midsummer Night's Dream is the Athenian outlier.",
  },
  {
    id: "pp19-10",
    subject: "general",
    topic: "Cultura generale - Letteratura",
    question: "Which one of the following writers is the author of the novel To Kill a Mockingbird?",
    options: [
      "Georges Simenon",
      "Iris Murdoch",
      "Harper Lee",
      "Elena Ferrante",
      "Ernest Hemingway",
    ],
    correct: 2,
    explanation: "To Kill a Mockingbird was written by Harper Lee.",
    studyTip: "Match landmark novels to authors — To Kill a Mockingbird is Harper Lee's.",
  },
  {
    id: "pp19-11",
    subject: "general",
    topic: "Cultura generale - Scienza",
    question: "The 'prisoner's dilemma' is a common example analysed in the field of",
    options: [
      "Quantum theory",
      "Network theory",
      "Asymptotic theory",
      "Game theory",
      "Chaos theory",
    ],
    correct: 3,
    explanation: "The prisoner's dilemma is a classic example from game theory.",
    studyTip: "The prisoner's dilemma is the signature illustration of game theory.",
  },
  {
    id: "pp19-12",
    subject: "general",
    topic: "Cultura generale - Storia della scienza",
    question: "Who was the first woman to be awarded a Nobel Prize?",
    options: [
      "Doris Lessing",
      "Selma Lagerlöf",
      "Grazia Deledda",
      "Marie Curie",
      "Mother Teresa",
    ],
    correct: 3,
    explanation: "Marie Curie was the first woman to win a Nobel Prize (Physics, 1903).",
    studyTip:
      "Marie Curie was the first woman Nobel laureate and the first person to win in two sciences.",
  },
  {
    id: "pp19-13",
    subject: "general",
    topic: "Cultura generale - Storia",
    question: "Which one of these events in world history happened most recently?",
    options: [
      "The October Revolution in the Russian Empire",
      "The fall of the Western Roman Empire",
      "The Taiping Rebellion in China",
      "The building of the Taj Mahal",
      "The crowning of Charlemagne",
    ],
    correct: 0,
    explanation:
      "Ordering the events, the Russian October Revolution (1917) is the most recent, after the fall of Rome (476), Charlemagne (800), the Taj Mahal (1632) and the Taiping Rebellion (1851).",
    studyTip:
      "For 'most recent' history questions, sketch a rough timeline of each event's date and pick the latest.",
  },
  {
    id: "pp19-14",
    subject: "general",
    topic: "Cultura generale - Religione",
    question:
      "Which one of the following religions is NOT considered to have been revealed to or founded by an individual?",
    options: ["Buddhism", "Christianity", "Islam", "Hinduism", "Confucianism"],
    correct: 3,
    explanation:
      "Hinduism has no single founder, unlike Buddhism, Christianity, Islam or Confucianism.",
    studyTip:
      "Hinduism is the major religion with no individual founder — the others trace to a specific figure.",
  },
  {
    id: "pp19-15",
    subject: "general",
    topic: "Cultura generale - Istituzioni",
    question: "The governance of modern states is often based on the separation of which three powers?",
    options: [
      "Legislative – elective – executive",
      "Regulatory – executive – judicial",
      "Electoral – regulatory – jurisprudential",
      "Legislative – elective – jurisprudential",
      "Legislative – executive – judicial",
    ],
    correct: 4,
    explanation: "Modern states typically separate legislative, executive and judicial powers.",
    studyTip:
      "The classic separation of powers is legislative (makes law), executive (applies it) and judicial (interprets it).",
  },
  {
    id: "pp19-16",
    subject: "general",
    topic: "Cultura generale - Istituzioni",
    question: "The Constitution of the Italian Republic was enacted on 22 December 1947 by",
    options: [
      "The Government",
      "The Ministry of Defence",
      "The Ministry of Justice",
      "The Supreme Court",
      "The Constituent Assembly",
    ],
    correct: 4,
    explanation:
      "The Italian Republic's Constitution was drawn up and enacted by the Constituent Assembly.",
    studyTip: "Italy's 1947 Constitution was the work of the elected Constituent Assembly.",
  },
  {
    id: "pp19-17",
    subject: "general",
    topic: "Cultura generale - Istituzioni",
    question: "Which one of the following is NOT a stated purpose of the United Nations?",
    options: [
      "To be a centre for harmonizing the actions of nations",
      "To achieve international co-operation in solving international problems",
      "To develop friendly relations among nations",
      "To maintain international peace and security",
      "To encourage peaceful trade between nations",
    ],
    correct: 4,
    explanation:
      "Encouraging peaceful trade is not among the UN's stated purposes, which centre on peace, security, cooperation and friendly relations.",
    studyTip:
      "The UN's core aims are peace/security, cooperation and friendly relations — trade promotion isn't one of them.",
  },
  {
    id: "pp19-18",
    subject: "general",
    topic: "Cultura generale - Geografia",
    question:
      "Which one of the following countries did NOT adopt the coins and banknotes of the Euro as its currency on 1 January 2002?",
    options: ["Finland", "Luxembourg", "Portugal", "Austria", "Sweden"],
    correct: 4,
    explanation:
      "Sweden never adopted euro coins and banknotes and still uses the Swedish krona.",
    studyTip: "Sweden retained its krona — it's the standard exception in euro-adoption questions.",
  },
  /* ---------------- BIOLOGY ---------------- */
  {
    id: "pp19-19",
    subject: "biology",
    topic: "Istologia",
    question: "Which of the following is/are tissues? 1. cartilage  2. skin  3. endothelium",
    options: ["1 only", "2 and 3 only", "1 and 2 only", "1, 2 and 3", "1 and 3 only"],
    correct: 4,
    explanation:
      "Cartilage and endothelium are connective tissues (1 and 3). Skin is an organ, not a tissue, so 2 is excluded.",
    studyTip:
      "Distinguish tissues from organs — cartilage and endothelium are tissues, whereas skin is a whole organ made of several tissues.",
  },
  {
    id: "pp19-20",
    subject: "biology",
    topic: "Metabolismo vegetale",
    question:
      "Which of the following statements about the metabolism of plants is/are correct? 1. CO2 is produced during the day.  2. CO2 is produced at night.  3. The CO2 produced can be used by the plant.",
    options: ["1, 2 and 3", "1 only", "2 only", "2 and 3 only", "1 and 2 only"],
    correct: 0,
    explanation:
      "Plants release CO2 from respiration day and night (1 and 2), and the CO2 produced can be reused in photosynthesis (3) — all correct.",
    studyTip:
      "Plants respire continuously (CO2 day and night) while photosynthesising in light, and can recycle their own respiratory CO2.",
  },
  {
    id: "pp19-21",
    subject: "biology",
    topic: "Mitosi",
    question:
      "Which one of the following occurs during anaphase of mitosis in a healthy human liver cell?",
    options: [
      "Centrioles migrate to opposite poles of the cell and help to assemble the spindle fibres.",
      "DNA replicates so that each chromosome is made up of two sister chromatids.",
      "Chromosomes move towards the equator of the cell and attach to the spindle fibres.",
      "Sister chromatids are pulled by the spindle fibres towards opposite poles of the cell.",
      "Chromatin condenses so that the chromosomes are visible under the microscope.",
    ],
    correct: 3,
    explanation:
      "In anaphase, sister chromatids are pulled by spindle fibres to opposite poles (D). The other options describe prophase, metaphase or interphase events.",
    studyTip:
      "Anaphase = sister chromatids separating to opposite poles; match each described event to its correct mitotic phase.",
  },
  {
    id: "pp19-22",
    subject: "biology",
    topic: "Mitosi",
    question:
      "If a cell divides by mitosis ten times, what is the number of cells at the end of the process? [Assume that all cells remain alive.]",
    options: ["10", "11", "64", "100", "1024"],
    correct: 4,
    explanation:
      "Each mitotic division doubles cell number, so after 10 divisions there are 2^10 = 1024 cells.",
    studyTip: "n rounds of mitosis give 2^n cells — memorise powers of 2 (2^10 = 1024).",
  },
  {
    id: "pp19-23",
    subject: "biology",
    topic: "Cellula - Dimensioni",
    question:
      "An electron microscope (EM) was used to view a cell. The maximum dimension of the cell was observed at a magnification ×30,000. The image on the EM screen showed a maximum length of 30 mm. Which of the following mature healthy cells was being magnified?",
    options: [
      "one lymphocyte from a human",
      "one coccus bacterium in a Staphylococcus cluster",
      "one mature human red blood cell",
      "one sensory neuron from a human",
      "one palisade cell from a wheat plant",
    ],
    correct: 1,
    explanation:
      "Real size = image size / magnification = 30 mm / 30,000 = 0.001 mm = 1 μm, which matches a single coccus bacterium.",
    studyTip:
      "Actual size = image size / magnification — keep units consistent, then compare with typical cell sizes (a coccus is about 1 μm).",
  },
  {
    id: "pp19-24",
    subject: "biology",
    topic: "Biotecnologie - Enzimi",
    question: "Which statement about an enzyme involved in genetic modification is correct?",
    options: [
      "A restriction enzyme causes phosphodiester bonds to be broken.",
      "A ligase causes phosphodiester bonds to be broken.",
      "A restriction enzyme causes H-bonds to form between sticky ends.",
      "A restriction enzyme causes only H-bonds to be broken.",
      "A ligase causes H-bonds to form between sticky ends only.",
    ],
    correct: 0,
    explanation:
      "A restriction enzyme cuts DNA by breaking phosphodiester bonds (A). Ligase joins them, and a restriction enzyme doesn't break only H-bonds.",
    studyTip:
      "Restriction enzymes cut the sugar-phosphate backbone (phosphodiester bonds); ligase re-joins it — don't confuse their roles.",
  },
  {
    id: "pp19-25",
    subject: "biology",
    topic: "Sistema cardiovascolare - Trasporto gas",
    question: "Which statement is correct in healthy humans?",
    options: [
      "The majority of carbon dioxide transported in the blood is in the form of carbaminohaemoglobin.",
      "Increasing the partial pressure of oxygen makes it more likely that haemoglobin will release its oxygen.",
      "At a low partial pressure of oxygen, myoglobin is less saturated with oxygen than haemoglobin.",
      "Blood leaving active muscles that are respiring aerobically will contain hydrogencarbonate ions and raised levels of lactic acid.",
      "In active tissues where the carbon dioxide concentration is high, haemoglobin has a low affinity for oxygen.",
    ],
    correct: 4,
    explanation:
      "In active tissues high CO2 lowers pH, reducing haemoglobin's affinity for oxygen so it releases more O2 (E) — the Bohr effect. The other statements reverse the relationships.",
    studyTip:
      "The Bohr effect: high CO2 (low pH) lowers haemoglobin's O2 affinity, promoting oxygen release where tissues need it most.",
  },
  {
    id: "pp19-26",
    subject: "biology",
    topic: "Sistema muscolare",
    question:
      "Which of the following regions within a sarcomere remain UNCHANGED in length when a healthy human muscle cell contracts? 1. A-band  2. I-band  3. H-zone / band",
    options: ["2 only", "1 only", "3 only", "2 and 3 only", "1 and 3 only"],
    correct: 1,
    explanation:
      "During contraction filaments slide so the I-band and H-zone shorten, but the A-band (length of the myosin filaments) stays constant.",
    studyTip:
      "In a contracting sarcomere the A-band length is fixed (it equals the myosin length); the I-band and H-zone narrow.",
  },
  {
    id: "pp19-27",
    subject: "biology",
    topic: "Fisiologia - Ioni",
    question:
      "Which of the following processes involve ions? 1. contraction of a muscle  2. transmission of a nerve impulse across a synapse  3. transfer of light energy into chemical energy in photosynthesis  4. oxidative phosphorylation in a mitochondrion",
    options: ["1 and 2 only", "1, 2 and 3 only", "3 and 4 only", "2 and 3 only", "1, 2, 3 and 4"],
    correct: 4,
    explanation:
      "Ions are involved in muscle contraction (Ca2+), synaptic transmission (Na+/Ca2+) and the H+ gradients of photosynthesis and oxidative phosphorylation — all four processes.",
    studyTip:
      "Many core processes hinge on ion movements — Ca2+ for muscle/synapses and H+ gradients for ATP synthesis in mitochondria and chloroplasts.",
  },
  {
    id: "pp19-28",
    subject: "biology",
    topic: "Genetica - Espressione genica",
    question:
      "An animal has a coat with some patches of white hair and some of black hair; each hair follicle forms a single hair, either white or black. Assume no mutations following formation of the zygote. A student wrote: 1. The cells in all the hair follicles contain the same genes.  2. The alleles in a follicle forming a white hair are different from the alleles in the follicle forming a black hair.  3. Each white hair follicle cell contains two recessive alleles. Which statement(s) is/are correct?",
    options: ["1 only", "2 only", "1 and 2 only", "2 and 3 only", "1, 2 and 3"],
    correct: 0,
    explanation:
      "All follicle cells contain the same genes (1 correct); the colour difference comes from differential gene expression, not different alleles (2 wrong) or two recessive alleles (3 wrong).",
    studyTip:
      "Cells of one organism share identical genes — phenotypic patches reflect differential expression, not different DNA.",
  },
  {
    id: "pp19-29",
    subject: "biology",
    topic: "Biologia molecolare - Mutazioni",
    question:
      "The same section of an allele coding for five amino acids from two individuals, P and Q, is shown. P: ATTCCGGGATTCCCT   Q: ATTCCGGATTGCACT. Which of the following types of mutation could explain the differences between P and Q? 1. addition  2. deletion  3. substitution",
    options: ["1, 2 and 3", "1 only", "1 and 3 only", "2 and 3 only", "none of them"],
    correct: 0,
    explanation:
      "The differences could arise from an addition (an extra G in P) or a deletion (a G lost in Q), and from a substitution (e.g. A->C), so all three mutation types could explain it.",
    studyTip:
      "Compare two sequences for length and content differences — frameshifts suggest insertion/deletion, single swaps suggest substitution.",
  },
  /* ---------------- CHEMISTRY ---------------- */
  {
    id: "pp19-30",
    subject: "chemistry",
    topic: "Struttura atomica - Ioni",
    question: "Which statement about a positive ion explains why it is positively charged?",
    options: [
      "The ion has more protons than neutrons.",
      "The ion has the same number of protons and neutrons.",
      "The ion has more protons than electrons.",
      "The ion has more electrons than neutrons.",
      "The ion has more electrons than protons.",
    ],
    correct: 2,
    explanation:
      "A positive ion has lost electrons, so it has more protons than electrons (C). The number of protons never changes in ion formation.",
    studyTip:
      "Charge comes from the proton-electron balance: a cation has fewer electrons than protons; proton number stays fixed.",
  },
  {
    id: "pp19-31",
    subject: "chemistry",
    topic: "Acidi e basi - Indicatori",
    question:
      "A few drops of universal indicator were added to exactly 50 mL of sodium hydroxide solution (1 mol/L). Exactly 50 mL of hydrochloric acid (1 mol/L) was then added drop by drop to the sodium hydroxide solution containing the indicator. What colour changes would be observed as the hydrochloric acid was added?",
    options: [
      "red → orange → yellow → green → blue → violet",
      "blue → red",
      "violet → blue → green → yellow → orange → red",
      "violet → blue → green",
      "red → orange → yellow → green",
    ],
    correct: 3,
    explanation:
      "Adding acid to a strong base lowers the pH from very basic toward neutral, so the universal indicator goes violet → blue → green (equal volumes reach pH 7).",
    studyTip:
      "Universal indicator runs violet/blue (basic) → green (neutral) → yellow/red (acidic); track the pH direction to pick the colour sequence.",
  },
  {
    id: "pp19-32",
    subject: "chemistry",
    topic: "Proprieta colligative",
    question:
      "A student observed that when powdered sugar at -1 °C was added to ice at -1 °C all of the ice melted. Which of the following statements explain this observation? 1. Sugar has given the water molecules energy.  2. The melting point of the mixture is higher.  3. The melting point of the mixture is lower.",
    options: ["2 only", "3 only", "1 only", "1 and 2 only", "1 and 3 only"],
    correct: 1,
    explanation:
      "Dissolving sugar lowers the freezing/melting point of the mixture (3), so the ice melts at -1 °C. The sugar doesn't add energy, and the melting point falls, not rises.",
    studyTip:
      "A dissolved solute depresses the freezing point — that's why adding sugar (or salt) can melt ice below 0 °C.",
  },
  {
    id: "pp19-33",
    subject: "chemistry",
    topic: "Isomeria",
    question:
      "Which of the following pairs of structural formulae represent structural isomers? 1. CH3CH2OH and CH3OCH3  2. CH3CH(CH3)CH2CH2CH3 and CH3CH2CH2CH(CH3)CH3  3. CH(OH)=CHCH2OH and CH3CH2COOH",
    options: ["1, 2 and 3", "2 and 3 only", "1 and 3 only", "2 only", "1 only"],
    correct: 2,
    explanation:
      "Pairs 1 and 3 share a molecular formula but differ in functional groups, so they're structural isomers. Pair 2 shows the same molecule written two ways, so it isn't a pair of isomers.",
    studyTip:
      "Structural isomers have identical molecular formulae but different connectivity — first check the two structures aren't simply the same molecule.",
  },
  {
    id: "pp19-34",
    subject: "chemistry",
    topic: "Tavola periodica",
    question:
      "Element Z reacts with water at room temperature and hydrogen gas is released. The oxide of element Z is a solid at room temperature and does not conduct electricity. The oxide reacts with acids and has the formula ZO. To which group/part of the Periodic Table does element Z belong?",
    options: ["Group I", "Group II", "Group III", "Transition metals", "Group VII"],
    correct: 1,
    explanation:
      "Z reacts with water releasing H2 and forms a basic oxide ZO (oxidation state +2) that doesn't conduct, so Z is a Group II (alkaline earth) metal.",
    studyTip:
      "A metal forming an MO oxide with charge +2, basic and non-conducting, points to Group II.",
  },
  {
    id: "pp19-35",
    subject: "chemistry",
    topic: "Geometria molecolare - Polarita",
    question:
      "Which of the following molecules have an overall permanent dipole moment? 1. CO2  2. H2O  3. NH3 [C is in Group IV, N in Group V, O in Group VI]",
    options: ["2 and 3 only", "1 and 2 only", "1 and 3 only", "1, 2 and 3", "none of them"],
    correct: 0,
    explanation:
      "CO2 is linear so its bond dipoles cancel (no net dipole); H2O (bent) and NH3 (pyramidal) have net dipoles — so 2 and 3.",
    studyTip:
      "A molecule is polar only if its geometry leaves bond dipoles uncancelled — linear CO2 cancels, bent/pyramidal shapes don't.",
  },
  {
    id: "pp19-36",
    subject: "chemistry",
    topic: "Forze intermolecolari",
    question:
      "Why does hydrogen iodide (HI) have a higher boiling point than hydrogen bromide (HBr)? [Atomic numbers: bromine = 35; iodine = 53]",
    options: [
      "The iodide ions in HI are larger than the bromide ions in HBr.",
      "The H–I covalent bond is stronger than the H–Br covalent bond.",
      "There are hydrogen bonds between HI molecules but not between HBr molecules.",
      "The permanent dipole-permanent dipole forces between HI molecules are stronger than those between HBr molecules.",
      "The induced dipole-induced dipole (dispersion) forces between HI molecules are stronger than those between HBr molecules.",
    ],
    correct: 4,
    explanation:
      "HI has more electrons than HBr, giving stronger induced-dipole (dispersion) forces, hence a higher boiling point (E). It has no hydrogen bonding.",
    studyTip:
      "Among similar molecules, more electrons means stronger London dispersion forces and a higher boiling point.",
  },
  {
    id: "pp19-37",
    subject: "chemistry",
    topic: "Concentrazione / Mole",
    question:
      "What is the minimum mass of sulfur dioxide needed to make 500 mL of a solution of concentration 3.0 mol/L? [Ar values: O = 16; S = 32]",
    options: ["384 g", "192 g", "96 g", "48 g", "32 g"],
    correct: 2,
    explanation:
      "500 mL of 3.0 mol/L needs 1.5 mol SO2; with M = 64 g/mol, mass = 1.5 x 64 = 96 g.",
    studyTip:
      "moles = concentration x volume (in L); multiply by molar mass for the mass needed.",
  },
  {
    id: "pp19-38",
    subject: "chemistry",
    topic: "Formule empiriche e molecolari",
    question:
      "A compound consists of carbon, hydrogen and oxygen only. 8 g of this compound contains 3 g of carbon and 1 g of hydrogen. Which one of the following could be the molecular formula of the compound? [Ar values: C = 12; H = 1; O = 16]",
    options: ["CH4O", "CH2O", "C2H4O", "C2H8O", "C3HO4"],
    correct: 0,
    explanation:
      "In 8 g: 3 g C, 1 g H, 4 g O. Moles: C 0.25, H 1, O 0.25 -> ratio 1:4:1 -> CH4O.",
    studyTip:
      "Convert each element's mass to moles, then scale to the smallest whole-number ratio for the formula.",
  },
  {
    id: "pp19-39",
    subject: "chemistry",
    topic: "Isotopi - Massa atomica",
    question:
      "Hydrogen has a radioactive isotope called tritium, whose atoms have two neutrons. The most abundant naturally occurring isotope of hydrogen has a relative atomic mass of 1.0. What is the relative atomic mass of a sample of hydrogen gas that has an equal amount of these two isotopes of hydrogen?",
    options: ["4.0", "3.0", "1.5", "2.0", "1.0"],
    correct: 3,
    explanation:
      "With equal amounts of mass-1 hydrogen and mass-3 tritium, the average relative atomic mass = (1 + 3)/2 = 2.0.",
    studyTip:
      "Relative atomic mass is a weighted average of isotope masses — for a 50:50 mix it's the simple mean.",
  },
  {
    id: "pp19-40",
    subject: "chemistry",
    topic: "Equilibrio chimico",
    question:
      "Consider the following reversible reaction at temperature T: A + 2B ⇌ 2C + D. At equilibrium there are 0.5 moles of A, 0.2 moles of B, 0.5 moles of C and 0.8 moles of D, all in a vessel of volume V. What is the value of the equilibrium constant, Kc, at this temperature?",
    options: ["10", "4", "2", "0.25", "0.1"],
    correct: 0,
    explanation:
      "Kc = [C]²[D]/([A][B]²). The volume terms cancel (3 moles each side), giving (0.5² x 0.8)/(0.5 x 0.2²) = 0.2/0.02 = 10.",
    studyTip:
      "Write Kc as products over reactants, each raised to its coefficient; the volume terms cancel when the total moles match on both sides.",
  },
  /* ---------------- MATH ---------------- */
  {
    id: "pp19-41",
    subject: "math",
    topic: "Potenze",
    question: "Which of the following expressions is equal to (8²ⁿ × 4ⁿ)/2ⁿ for all integers n?",
    options: ["2¹⁴ⁿ", "2²ⁿ⁺⁵", "2⁷ⁿ", "2⁶ⁿ", "2⁶ⁿ⁺¹"],
    correct: 2,
    explanation:
      "Write everything as powers of 2: 8²ⁿ = 2⁶ⁿ, 4ⁿ = 2²ⁿ, so (2⁶ⁿ × 2²ⁿ)/2ⁿ = 2^(6n+2n-n) = 2⁷ⁿ.",
    studyTip:
      "Convert all bases to a common base, then add and subtract exponents using the power laws.",
  },
  {
    id: "pp19-42",
    subject: "math",
    topic: "Statistica",
    question:
      "The mean mass of three babies is 2.1 kg. The range of their masses is 0.7 kg. The lightest baby has a mass of 1.8 kg. What is the median mass of the three babies?",
    options: ["1.95 kg", "2.0 kg", "2.1 kg", "2.15 kg", "2.3 kg"],
    correct: 1,
    explanation:
      "Lightest = 1.8 kg, range 0.7 -> heaviest = 2.5 kg. Mean 2.1 over 3 -> total 6.3, so the middle baby = 6.3 - 1.8 - 2.5 = 2.0 kg, which is the median.",
    studyTip:
      "Use the range to get the extremes and the mean to get the total, then the middle value (median for three) is what's left.",
  },
  {
    id: "pp19-43",
    subject: "math",
    topic: "MCD",
    question:
      "What is the highest common factor of 360, 500 and 700, given as the product of powers of its prime factors?",
    options: ["2² × 5", "2 × 5", "2³ × 5³", "2² × 3² × 5 × 7", "2³ × 3² × 5³ × 7"],
    correct: 0,
    explanation:
      "360 = 2³·3²·5, 500 = 2²·5³, 700 = 2²·5²·7. The HCF takes the lowest power of each shared prime: 2² × 5.",
    studyTip:
      "For the highest common factor, factor each number and take each shared prime to its lowest power.",
  },
  {
    id: "pp19-44",
    subject: "math",
    topic: "Equazioni",
    question:
      "What is the sum of the solutions to the equation 3/x + 2/(x-2) = 1 where x is a real number and x ≠ 0 and x ≠ 2?",
    options: ["7", "5", "-7", "2.4", "-3"],
    correct: 0,
    explanation:
      "Multiply through by x(x-2): 3(x-2) + 2x = x(x-2) -> 5x - 6 = x² - 2x -> x² - 7x + 6 = 0. Sum of roots = 7.",
    studyTip:
      "Clear denominators to form a quadratic, then read the sum of roots as -b/a without solving fully.",
  },
  /* ---------------- PHYSICS ---------------- */
  {
    id: "pp19-45",
    subject: "physics",
    topic: "Cinematica",
    question:
      "A car, which is initially stationary, accelerates for 5.0 seconds at 4.0 m/s² along a straight road. It then continues in the same direction for 20 seconds at a constant speed. What is the maximum speed of the car, and what is the distance travelled by the car in the final 20 seconds of its motion?",
    options: [
      "maximum speed = 24 m/s; distance = 480 m",
      "maximum speed = 9.0 m/s; distance = 200 m",
      "maximum speed = 9.0 m/s; distance = 180 m",
      "maximum speed = 20 m/s; distance = 400 m",
      "maximum speed = 20 m/s; distance = 80 m",
    ],
    correct: 3,
    explanation:
      "After accelerating at 4.0 m/s² for 5 s from rest, v = 4 x 5 = 20 m/s (the maximum). At constant 20 m/s for 20 s, distance = 20 x 20 = 400 m.",
    studyTip:
      "Use v = at for the final speed of uniform acceleration, then distance = speed x time for the constant-velocity phase.",
  },
  {
    id: "pp19-46",
    subject: "physics",
    topic: "Fluidi - Spinta di Archimede",
    question:
      "A stone of density 5.20 g/cm³ and volume 200 cm³ is completely submerged in a liquid of density 1.20 g/cm³. What is the magnitude of the upthrust acting on the stone? [gravitational field strength = 10.0 N/kg]",
    options: ["2.00 N", "10.4 N", "8.00 N", "6.40 N", "2.40 N"],
    correct: 4,
    explanation:
      "Upthrust = (liquid density)(volume)(g) = 1.20 g/cm³ x 200 cm³ x 10 N/kg = 240 g x 10 N/kg = 2.4 N. The stone's density is irrelevant.",
    studyTip:
      "Upthrust depends only on the displaced liquid — convert units carefully (g/cm³ and cm³ to kg) and use the liquid's density.",
  },
  {
    id: "pp19-47",
    subject: "physics",
    topic: "Elettrostatica - Legge di Coulomb",
    question:
      "Two charged particles P and Q are 0.10 m apart. The charge on P is 1.50 × 10⁻⁷ C and the charge on Q is 1.50 × 10⁻⁷ C. Particle P experiences an electrostatic force of magnitude F. The distance between the two particles is then increased to 0.20 m, the charge on P is increased to 4.50 × 10⁻⁷ C and the charge on Q is increased to 6.00 × 10⁻⁷ C. What is the magnitude of the force that particle P experiences now?",
    options: ["12F", "3F", "6F", "F/4", "3F/4"],
    correct: 1,
    explanation:
      "F is proportional to q1·q2/r². The charge product rises by a factor (4.50 x 6.00)/(1.50 x 1.50) = 12, while r doubles, dividing by 4. Net: 12/4 = 3, so 3F.",
    studyTip:
      "Track Coulomb's law factor by factor: multiply the charge ratio, then divide by the square of the distance ratio.",
  },
  {
    id: "pp19-48",
    subject: "physics",
    topic: "Gas ideali - Legge di Boyle",
    question:
      "A fixed mass of an ideal gas is compressed at constant temperature. The pressure is recorded continuously as the volume decreases. The pressure (y-axis) and volume (x-axis) are plotted on a linearly scaled graph. Which statement describes the plotted line?",
    options: [
      "a curved line with negative gradient of decreasing magnitude",
      "a straight line of positive gradient starting at the origin of the graph",
      "a straight line parallel to the pressure axis",
      "a straight line parallel to the volume axis",
      "a curved line of increasing positive gradient starting at the origin of the graph",
    ],
    correct: 0,
    explanation:
      "At constant T, PV = constant, so P vs V is a hyperbola: a curve with negative gradient whose steepness decreases, never touching the axes.",
    studyTip:
      "Boyle's law (PV = constant) plots as a hyperbola — a falling curve that flattens, not a straight line.",
  },
];
