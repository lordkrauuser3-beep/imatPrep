/* ============================================================
   PAST PAPER — IMAT 2018 (commented simulation)
   Source: user-provided "test-IMAT-2018-commentato.pdf".

   NOTE: commented simulation, not a clean official grid. Original
   questions that depend on figures/tables/charts/structure images
   lost in PDF extraction are OMITTED — only fully text-answerable
   questions are kept, so this is a subset, not all 60. Explanations
   condensed and translated to match the app's style.

   Shape: { id, subject, topic, question, options[5], correct, explanation, studyTip }
   Mixed into the simulation pool — never a standalone "2018" block.
   ============================================================ */

export const PAST_PAPER_2018 = [
  /* ---------------- LOGIC ---------------- */
  {
    id: "pp18-1",
    subject: "logic",
    topic: "Ragionamento critico - Struttura logica",
    question:
      "You want to buy a house in your local area with three bedrooms and a garage. However, you only want to spend €150,000. Houses in your local area with three bedrooms and a garage never sell for less than €200,000. You will have to spend more to get the house you want. Which one of the following most closely matches the logical structure of the above argument?",
    options: [
      "You want to buy the painting at the auction. Lots of other people want to buy it, so you have to be prepared to bid a lot of money to be successful.",
      "You want to study mathematics but you don't like numerical reasoning. Mathematics is essentially numerical reasoning, so you should choose a different subject.",
      "You want either the green jacket or the blue jacket. The green jacket looks good and the blue jacket is a bargain, so there are advantages in buying either one.",
      "You want a well-paid job with lots of holiday and the chance to retire early. Such jobs do not exist, so you need to adjust your expectations.",
      "You want a large powerful car that is fuel efficient. Large powerful cars are never fuel efficient, so you will have to spend more on fuel if you want a large powerful car.",
    ],
    correct: 4,
    explanation:
      "The structure is 'you want Q for cost x; Q costs more than x, so you must spend more'. E matches exactly: a fuel-efficient powerful car doesn't exist cheaply, so you'll spend more. B, C, D drop the achievement of the goal; A has no expectation about cost.",
    studyTip:
      "For 'matching structure' questions, abstract the argument to its skeleton, then find the option with the same skeleton — ignore the topic.",
  },
  {
    id: "pp18-2",
    subject: "logic",
    topic: "Ragionamento critico - Conclusioni",
    question:
      "Competition between restaurants is fierce and restaurateurs are trying to gain recognition for the quality of their food. Research from Oxford University might just give them that edge over their competitors. More than a hundred people participated in a series of experiments to see if the taste of food was affected by the cutlery used to eat it. The study found that desserts tasted better when eaten using small spoons. Similarly yoghurt tasted creamier when eaten with a black spoon. Cheese cut with a heavy knife tasted more expensive than cheese cut with a lighter knife. Which one of the following is a conclusion that can be drawn from the above passage?",
    options: [
      "Customers pay attention to the cutlery they are using.",
      "Restaurants should think carefully about what cutlery they use.",
      "Variety of cutlery is more important than quality of food.",
      "People choose restaurants only because of the quality of the food.",
      "Restaurants should pay less attention to food presentation.",
    ],
    correct: 1,
    explanation:
      "The research is framed from the restaurateurs' viewpoint, so the supported conclusion is B. A shifts to the customer's awareness, which can't be assumed; C, D and E add unstated factors.",
    studyTip:
      "Pick the conclusion that stays within the passage's own perspective — here the restaurateurs', not the customers'.",
  },
  {
    id: "pp18-3",
    subject: "logic",
    topic: "Ragionamento critico - Principi",
    question:
      "Food manufacturers should reduce sugar levels in processed foods. This is because there are too many overweight and obese people. Since people are unable or unwilling to make sensible decisions for themselves, manufacturers must take responsibility for rectifying a problem to which they contribute. Which one of the following illustrates the principle used in the above argument?",
    options: [
      "To reduce the number of deaths caused by excessive speed, car manufacturers should incorporate speed limiters in vehicles.",
      "In order to reduce sugar intake, foods with high sugar content should be taxed more heavily.",
      "Cigarette packets should have plain packaging and display government health warnings.",
      "Labelling on food should be improved so that consumers are clear about the level of sugar in a product.",
      "Power tools should have clear instructions in order to reduce the number of accidents caused by incorrect use.",
    ],
    correct: 0,
    explanation:
      "The principle is that producers should act to limit harm their products cause. A applies it (car makers fitting speed limiters); B and C invoke government, while D and E only improve information.",
    studyTip:
      "Identify who must act in the original principle (here the manufacturer), then choose the option that assigns responsibility the same way.",
  },
  {
    id: "pp18-4",
    subject: "logic",
    topic: "Ragionamento critico - Rinforzare",
    question:
      "Action has to be taken now to stop the spread of bovine tuberculosis (TB). Experts agree that reducing the number of badgers in the most heavily infected areas will help to break the cycle of infection between badgers and cattle and begin to reduce TB in both species. Although badgers can be vaccinated, there is no vaccine available to protect our cattle, and best estimates suggest it will be ten years before one is available. The only way to stop bovine TB spreading is to kill badgers. Which one of the following, if true, most strengthens the above argument?",
    options: [
      "When efforts are made to remove badgers, many are injured rather than killed outright.",
      "Shooting large numbers of badgers is more expensive than vaccinating them.",
      "In a trial, killing ten thousand badgers reduced the TB rate in cattle by only fifteen per cent.",
      "Five annual vaccinations are necessary to protect a badger fully against bovine TB.",
      "Less than ten per cent of the dairy cows destroyed each year are destroyed because of bovine TB.",
    ],
    correct: 3,
    explanation:
      "The conclusion is that culling badgers is the best control. D strengthens it: if vaccinating badgers needs five annual doses, the only alternative to culling becomes more costly and complicated.",
    studyTip:
      "To strengthen an argument, find the option that makes the rejected alternative less attractive or the chosen course more necessary.",
  },
  {
    id: "pp18-5",
    subject: "logic",
    topic: "Ragionamento critico - Conclusioni",
    question:
      "Sperm whales have the largest brains on the planet, although both humans and dolphins have larger brains relative to their body size. But why should relative brain size be important? If one thinks of a brain as a computer, there is no obvious reason why it must be sized in proportion to the body it lives in. Why for example should a whale need an especially large brain, when a hummingbird – which has complex tasks to perform – manages with a tiny one? Which one of the following is a conclusion that is supported by the above passage?",
    options: [
      "Hummingbirds and whales have equally complex tasks to perform, despite huge difference in brain size.",
      "Dolphins are more intelligent than whales.",
      "Brain size and the ability to perform complex tasks are not necessarily related.",
      "Whales need larger brains than either dolphins or humans because of their enormous size.",
      "There is no important difference between a brain and a computer.",
    ],
    correct: 2,
    explanation:
      "The passage questions whether brain size tracks task complexity, so the supported conclusion is C. The other options aren't established by the text.",
    studyTip:
      "The right conclusion captures the passage's central doubt without adding claims it never makes.",
  },
  {
    id: "pp18-6",
    subject: "logic",
    topic: "Ragionamento critico - Punti deboli",
    question:
      "Recent research in the USA has found that areas with more dentists per person have much lower rates of obesity than neighbouring areas of similar population size. Clearly, public health authorities concerned with obesity rates should focus more resources on the provision of dental care. Dentists are a neglected asset in the struggle against the serious health problems associated with obesity. Which one of the following is the best statement of the flaw in the above argument?",
    options: [
      "It assumes dental care in the USA is somewhat similar to that found elsewhere.",
      "It assumes that a higher number of dentists causes lower obesity rates.",
      "It ignores factors that might prevent public health authorities from spending more on obesity and related conditions.",
      "It assumes that obesity rates should be a priority concern for public health authorities.",
      "It ignores the fact that help and advice concerning obesity can be delivered in a variety of ways.",
    ],
    correct: 1,
    explanation:
      "The argument treats a correlation (more dentists, less obesity) as causation (B). Both could share a common cause such as greater wealth or healthcare access.",
    studyTip:
      "'Correlation is not causation' — when an argument leaps from an association to a cause, that's the flaw.",
  },
  {
    id: "pp18-7",
    subject: "logic",
    topic: "Ragionamento critico - Conclusioni",
    question:
      "It's better for your children's health to give them a video game to play than to let them watch television. Researchers at Queensland University examined the effects of video gaming and watching television on children between the ages of two and five. They found that the children burned more calories when they were gaming than when they were watching television; higher blood pressure was associated with watching television, but not with video gaming. The scientists believe that the difference comes from two distinct kinds of screen time: passive screen time, where you are simply viewing programmes or films, and active screen time, where you are engaging both your mind and your body. Which one of the following is the main conclusion of the above argument?",
    options: [
      "Video gaming is better for children's health than watching television.",
      "Children burn more calories when they play video games than when they watch television.",
      "Playing video games helps to reduce children's blood pressure.",
      "Video gaming engages both the mind and the body.",
      "Watching television does not stimulate children's minds.",
    ],
    correct: 0,
    explanation:
      "A is the main conclusion (gaming is healthier than TV for children). B is a research finding, C and D are supporting evidence, E is never claimed.",
    studyTip:
      "Separate the main conclusion from the data and reasoning used to support it — the conclusion is the overall claim, not an individual finding.",
  },
  {
    id: "pp18-8",
    subject: "logic",
    topic: "Ragionamento critico - Assunzioni",
    question:
      "'Internet addiction' is about to be classified as a recognised psychiatric disorder. Internet addiction is characterised by a number of signs: excessive use of the internet; anger or depression if access is lost; isolation from friends and family; and, most significantly, poor educational achievement. This should make us cautious about incorporating computer-based learning into all aspects of education. Educationalists should consider the long-term problems associated with extensive internet use as well as its immediate attractions. Which one of the following is an assumption of the above argument?",
    options: [
      "Students are unable to regulate their internet use.",
      "All computer-based learning includes internet use.",
      "Excessive internet use is the only cause of poor educational achievement.",
      "Classifying internet addiction as a recognised psychiatric disorder will help lead to a cure.",
      "It is a bad idea to incorporate computer-based learning into education.",
    ],
    correct: 1,
    explanation:
      "The argument links internet addiction to computer-based learning, assuming all computer-based learning involves internet use (B). The other options aren't assumed.",
    studyTip:
      "A hidden assumption is the bridge between two ideas the argument treats as connected — test which statement, if removed, breaks that link.",
  },
  {
    id: "pp18-9",
    subject: "logic",
    topic: "Ragionamento critico - Punti deboli",
    question:
      "One of the populations with the highest life expectancy is Iceland. The people there are very healthy, as indicated by the low incidence of diabetes, obesity, heart disease and diet related cancers. Their diet is rich in good quality local fish, and meat and dairy products from grass fed animals. The fish and meat is all caught, produced and processed on a small scale. If we want to live long and healthy lives we should adopt the Icelanders' diet. Which one of the following is the best statement of the flaw in the above argument?",
    options: [
      "The Icelandic diet may be prohibitively expensive elsewhere.",
      "Vegetarians may not be able to live on an Icelandic diet.",
      "There may be insufficient space in many countries to raise grass fed animals.",
      "There may be other reasons for the Icelanders' health and longevity.",
      "People may not like being told what they should eat.",
    ],
    correct: 3,
    explanation:
      "The argument assumes diet is the key to Icelandic longevity, ignoring that other factors might explain their health (D).",
    studyTip:
      "When an argument credits one cause for an outcome, the flaw is often that it overlooks other plausible causes.",
  },
  {
    id: "pp18-10",
    subject: "logic",
    topic: "Ragionamento critico - Indebolire",
    question:
      "A leaking undersea oil well in the USA caused massive damage to wildlife and was extremely expensive to clear up. Worst of all, it destroyed the livelihoods of poor people living in the area. Despite this, in the developed world we still don't take seriously the risks of deepwater drilling. Until we can be satisfied that regulation is effective and that oil companies are operating safely, deepwater drilling should be banned. Which one of the following, if true, most weakens the above argument?",
    options: [
      "Alternatives to fossil fuels may eventually be able to meet our energy needs.",
      "The risks of deepwater drilling were known prior to the accident in the USA.",
      "Oil companies involved in the accident in the USA paid money to compensate the victims.",
      "A ban on deepwater drilling would cause oil prices to rise, which would affect poor people most.",
      "Oil companies will operate more safely in future than they did before the accident in the USA.",
    ],
    correct: 3,
    explanation:
      "The argument bans drilling to protect poor people, so D weakens it best: a ban would raise oil prices, hurting poor people most — turning the argument's own concern against it.",
    studyTip:
      "The strongest weakener often uses the argument's own priority (here, protecting the poor) to show the proposed action backfires.",
  },
  {
    id: "pp18-11",
    subject: "logic",
    topic: "Logica numerica",
    question:
      "A train is travelling at 30 mph towards a terminus 120 miles away. At the same time, a pigeon starts flying from the terminus towards the train; when it meets the train it turns and flies back to the terminus, then turns and flies back towards the train again, continuing until the train reaches the terminus. The pigeon flies at an average speed of 40 mph, losing no time in each turnaround. How far (to the nearest 10 miles) does the pigeon fly altogether?",
    options: ["240 miles", "120 miles", "140 miles", "180 miles", "160 miles"],
    correct: 4,
    explanation:
      "The pigeon flies non-stop at constant speed for as long as the train travels: 120 miles / 30 mph = 4 hours. At 40 mph it covers 40 x 4 = 160 miles.",
    studyTip:
      "For 'back-and-forth' travel puzzles, ignore the turns — just find the total time and multiply by the constant speed.",
  },
  {
    id: "pp18-12",
    subject: "logic",
    topic: "Logica numerica",
    question:
      "Mr and Mrs Massa's rectangular lawn measures 10 m by 6 m. Giovanni charges a fixed rate per square metre of grass cut and another fixed rate per metre of edge trimmed; for the Massas this gives $12 to cut the grass and $8 to trim the edges. Mr and Mrs Costa's lawn is also rectangular, 15 m by 9 m. At the same rates, how much will Giovanni charge the Costas in total for cutting the grass and trimming the edges?",
    options: ["$39", "$30", "$35", "$36", "$45"],
    correct: 0,
    explanation:
      "Cutting cost is per area, edging per perimeter. From the Massas: 12/(10x6) = 1/5 per m^2, 8/(2(10+6)) = 1/4 per m. For the Costas: 1/5 x 135 = $27 cutting + 1/4 x 48 = $12 edging = $39.",
    studyTip:
      "Separate a combined charge into its per-unit rates first (here per area and per length), then apply each rate to the new dimensions.",
  },
  {
    id: "pp18-13",
    subject: "logic",
    topic: "Logica numerica",
    question:
      "David normally takes 45 minutes to walk at a steady speed in a straight line from his house, past his friend Barry's house and then past a shop, to reach his college. It normally takes David 20 minutes to walk from his home directly to the shop, and Barry normally takes 32 minutes to walk directly from his home to the college; they both walk at the same steady speed. How long does it take to walk from Barry's house to the shop?",
    options: ["4 minutes", "1 minute", "7 minutes", "10 minutes", "13 minutes"],
    correct: 2,
    explanation:
      "Same speed for both. Home-college = 45 min, Barry's home-college = 32 min, so David's home-Barry's = 13 min. Home-shop = 20 min, so Barry's-shop = 20 - 13 = 7 min.",
    studyTip:
      "With equal speeds, distances along a line are proportional to times — subtract the known segments to find the missing one.",
  },
  {
    id: "pp18-14",
    subject: "logic",
    topic: "Logica numerica",
    question:
      "Six children each have one packet of crisps on every weekday (Mon-Fri). The triplets have Cheese, the twins have Paprika, and the oldest child always has Chilli. The exact number of packets is bought at once for a four-week period. Prices: single packet £0.50, multipack of 6 £2.50, multipack of 12 £4.50, multipack of 24 £8.50, multipack of 36 £12.50 (a multipack is all one flavour). What is the most money that can be saved over the four weeks by buying the best combination of multipacks and singles rather than all singles?",
    options: ["£8.00", "£16.50", "£18.00", "£23.50", "£43.50"],
    correct: 1,
    explanation:
      "Over 4 weeks: 20 chilli, 40 paprika, 60 cheese packets (120 total = £60 as singles). Cheapest combos: chilli 12+6+2 singles = £8; paprika 36+4 singles = £14.50; cheese 24+36 = £21. Total £43.50, saving £60 - £43.50 = £16.50.",
    studyTip:
      "For bulk-buy savings, find the cheapest packaging combination for each quantity, total them, and subtract from the all-singles cost.",
  },
  /* ---------------- GENERAL KNOWLEDGE ---------------- */
  {
    id: "pp18-15",
    subject: "general",
    topic: "Cultura generale - Storia della scienza",
    question:
      "The Almagest is the common title of a mathematical and astronomical treatise written by",
    options: [
      "Nicolaus Copernicus.",
      "Pythagoras.",
      "Johannes Kepler.",
      "Claudius Ptolemy.",
      "Aristotle.",
    ],
    correct: 3,
    explanation:
      "The Almagest is the astronomical treatise written by Claudius Ptolemy (c. 150 AD), which dominated astronomy for over a millennium.",
    studyTip:
      "Tie landmark works to their authors — the Almagest is Ptolemy's, and underpinned the geocentric model for centuries.",
  },
  {
    id: "pp18-16",
    subject: "general",
    topic: "Cultura generale - Geografia",
    question: "Which of these pairs of nation and national newspaper name is wrong?",
    options: [
      "United Kingdom – The Times",
      "Slovakia – Nový Čas",
      "France – Le Monde",
      "Germany – Süddeutsche Zeitung",
      "Denmark – De Telegraaf",
    ],
    correct: 4,
    explanation:
      "De Telegraaf is a leading newspaper of the Netherlands, not Denmark, so the Denmark pairing is wrong.",
    studyTip:
      "For 'which pairing is wrong' questions you only need one certain mismatch — De Telegraaf belongs to the Netherlands.",
  },
  /* ---------------- BIOLOGY ---------------- */
  {
    id: "pp18-17",
    subject: "biology",
    topic: "Biologia molecolare - Virus",
    question:
      "Reverse transcriptase is mainly found in retroviruses such as HIV; four nucleotides are needed for the reaction it catalyses. A group of molecules may inhibit this enzyme: they are structurally similar to the nucleotides but slightly altered so that bonds normally formed in the reaction cannot be made. Which of the following statements may be correct? 1. The four inhibitor molecules will resemble adenine, thymine, guanine and cytosine.  2. The inhibitor molecules can prevent the formation of phosphodiester bonds.  3. The inhibitor molecules can result in a reduction in the number of new virus particles produced.",
    options: ["1 and 2 only", "1, 2 and 3", "1 and 3 only", "2 and 3 only", "3 only"],
    correct: 1,
    explanation:
      "Inhibitors mimicking the four bases (1) can block phosphodiester bond formation (2), stopping viral DNA synthesis and so reducing the number of new virus particles (3) — all correct.",
    studyTip:
      "Trace the chain of consequences: nucleotide-mimic inhibitors block bond formation, which blocks viral DNA synthesis, which cuts virion production.",
  },
  {
    id: "pp18-18",
    subject: "biology",
    topic: "Biochimica - Proteine",
    question:
      "The enzyme HIV-1 protease is formed from two identical chains of 99 amino acids. In each chain, amino acids 25, 26 and 27 form part of the active site. Which levels of structure control the shape of the active site of the HIV protease?",
    options: [
      "quaternary only",
      "secondary and tertiary only",
      "primary and quaternary only",
      "primary, secondary, tertiary and quaternary",
      "primary, secondary and tertiary only",
    ],
    correct: 3,
    explanation:
      "The enzyme is built from two identical chains, so it has primary, secondary and tertiary structure in each chain plus quaternary structure from the two subunits — all four levels.",
    studyTip:
      "Two or more polypeptide chains means quaternary structure is present, on top of the three levels every chain has.",
  },
  {
    id: "pp18-19",
    subject: "biology",
    topic: "Biologia molecolare - DNA",
    question:
      "A section of unmutated double-stranded DNA contains 100 nucleotides, and 38% of these nucleotides contain thymine. Which one of the following correctly identifies the number of hydrogen (H) bonds and phosphodiester bonds present in this section of DNA?",
    options: [
      "112 H bonds and 98 phosphodiester bonds",
      "112 H bonds and 99 phosphodiester bonds",
      "138 H bonds and 98 phosphodiester bonds",
      "138 H bonds and 99 phosphodiester bonds",
      "224 H bonds and 98 phosphodiester bonds",
    ],
    correct: 0,
    explanation:
      "38% T means 38% A (38x2 = 76 H-bonds); the remaining 24 are G+C, 12 pairs x 3 = 36 H-bonds, total 112. Phosphodiester bonds = 100 - 2 (one free 5' phosphate per strand) = 98.",
    studyTip:
      "Use complementary pairing for base counts, then 2 H-bonds per A-T and 3 per C-G; phosphodiester bonds = nucleotides minus one per strand.",
  },
  {
    id: "pp18-20",
    subject: "biology",
    topic: "Cellula - Neurone",
    question:
      "Which of the following statements about a neurone in a healthy human is/are correct? 1. Transport across its cell membrane can occur by exocytosis.  2. It contains the gene that codes for insulin.  3. It contains circular DNA.",
    options: ["1, 2 and 3", "1 and 2 only", "1 and 3 only", "2 and 3 only", "1 only"],
    correct: 0,
    explanation:
      "A neurone transports by exocytosis (e.g. neurotransmitters, 1), contains the insulin gene like every body cell though unexpressed (2), and contains circular mitochondrial DNA (3) — all correct.",
    studyTip:
      "Every nucleated body cell carries the full genome (all genes, expressed or not) and mitochondrial circular DNA — differences are in expression, not gene content.",
  },
  {
    id: "pp18-21",
    subject: "biology",
    topic: "Istologia",
    question:
      "Squamous epithelium, ciliated epithelium and cartilage are tissues found in healthy humans. Which one of the following structures is made up of at least TWO of these tissues?",
    options: ["trachea", "alveoli", "oviduct", "capillaries", "Bowman's capsule"],
    correct: 0,
    explanation:
      "The trachea contains cartilage rings and a ciliated epithelial lining (at least two of the listed tissues). The other structures are lined by a single tissue type.",
    studyTip:
      "Recall the tissue composition of airways — the trachea uniquely combines cartilage and ciliated epithelium.",
  },
  {
    id: "pp18-22",
    subject: "biology",
    topic: "Biochimica - Proteine",
    question:
      "Which of the following contain peptide bonds? 1. ribosomes in human liver cells  2. antibodies in human plasma  3. cilia on human bronchial cells  4. cholesterol in the membrane of human kidney cells",
    options: ["2 and 4 only", "1, 2 and 3 only", "1 and 3 only", "1 and 4 only", "2, 3 and 4 only"],
    correct: 1,
    explanation:
      "Ribosomes (rRNA + protein, 1), antibodies (glycoproteins, 2) and cilia (tubulin protein, 3) all contain peptide bonds; cholesterol (4) is a lipid with none.",
    studyTip:
      "Peptide bonds = protein; cholesterol and other lipids never contain them, so exclude any purely lipid option.",
  },
  {
    id: "pp18-23",
    subject: "biology",
    topic: "Cellula - Metabolismo",
    question:
      "An organism, in bright sunlight, has the following features: some cells contain organelles with grana; all cells contain ATP, ADP and NAD; some cells release carbon dioxide by diffusion all the time. Which one of the following statements about the organism is correct?",
    options: [
      "It is prokaryotic and only carries out respiration.",
      "It is photosynthetic but has some cells which only respire.",
      "It is eukaryotic and all cells carry out photosynthesis.",
      "It is made up of cells which all contain mitochondria and chloroplasts.",
      "It is an anaerobic organism which only releases carbon dioxide.",
    ],
    correct: 1,
    explanation:
      "Grana mean some cells photosynthesise, while cells continuously releasing CO2 are respiring, so the organism is photosynthetic but has some cells that only respire (B).",
    studyTip:
      "Grana indicate chloroplasts (photosynthesis); constant CO2 release indicates respiration — an organism can do both in different cells.",
  },
  {
    id: "pp18-24",
    subject: "biology",
    topic: "Fisiologia - Esercizio",
    question:
      "Which of the following can be a result of exercise in a healthy human? 1. a decrease in muscle pH  2. an increase in blood pH  3. more blood flows to certain organs",
    options: ["1 and 2 only", "3 only", "2 and 3 only", "1 and 3 only", "1, 2 and 3"],
    correct: 3,
    explanation:
      "Exercise lowers muscle pH via lactate (1) and redirects more blood to active organs (3). Blood pH tends to fall, not rise, so 2 is wrong.",
    studyTip:
      "Anaerobic exercise produces lactic acid (lower pH) and redistributes blood to working muscles — it doesn't raise blood pH.",
  },
  {
    id: "pp18-25",
    subject: "biology",
    topic: "Genetica - Meiosi",
    question:
      "Which of the following could explain why the phenotype of a healthy female child may show differences from her healthy biological brother (apart from the gender)? 1. independent assortment after the formation of the female zygote  2. crossing over between a chromosome from the sperm and a chromosome from the egg  3. random alignment of homologous chromosomes at the equator of the cell during metaphase I",
    options: ["2 and 3 only", "1 and 2 only", "1 only", "3 only", "2 only"],
    correct: 3,
    explanation:
      "Only random alignment of homologues at metaphase I (3) explains the difference. There's no 'female zygote' (1 wrong), and crossing over happens in prophase I before fertilisation, not between sperm and egg chromosomes (2 wrong).",
    studyTip:
      "Independent assortment comes from random homologue alignment at metaphase I; crossing over occurs in prophase I between non-sister chromatids of homologues.",
  },
  {
    id: "pp18-26",
    subject: "biology",
    topic: "Genetica - Mappatura",
    question:
      "The genes P, Q, R and S occur on the same chromosome. The crossover values (COV) for the pairs are: P and Q 35%, P and R 5%, R and Q 40%, Q and S 10%, R and S 30%. Which one of the following sequences of letters represents a correct order of genes on the chromosome?",
    options: ["RPSQ", "PRSQ", "PQSR", "RSQP", "PQRS"],
    correct: 0,
    explanation:
      "Higher COV means greater distance. R-Q (40%) are farthest apart; P is near R (5%) and far from Q (35%); S is near Q (10%) and far from R (30%), giving the order R-P-S-Q.",
    studyTip:
      "Build a gene map by placing the highest-COV pair at the ends, then position the rest by their distances from those anchors.",
  },
  {
    id: "pp18-27",
    subject: "biology",
    topic: "Meiosi",
    question:
      "A eukaryotic cell undergoes division. At one point it has pairs of chromosomes being separated by spindle fibres and moving towards the poles of the cell. What stage of division is this?",
    options: [
      "telophase in Meiosis I",
      "metaphase in Mitosis",
      "anaphase in Meiosis I",
      "metaphase in Meiosis II",
      "anaphase in Mitosis",
    ],
    correct: 2,
    explanation:
      "Whole homologous chromosomes (not chromatids) being pulled to the poles identifies anaphase of meiosis I; sister chromatids separate later, in anaphase II.",
    studyTip:
      "In meiosis I anaphase homologous chromosomes separate; in meiosis II (and mitosis) anaphase sister chromatids separate — that distinction is the key.",
  },
  {
    id: "pp18-28",
    subject: "biology",
    topic: "Genetica - Eredita legata al sesso",
    question:
      "A condition caused by the dominant allele of a gene on the X chromosome is passed down through a family. Individual Z inherits the condition. Assuming no spontaneous mutations, which of the following statements must be correct? 1. If Z is a boy, then he must have inherited the dominant allele from his father.  2. If Z is a boy, then one of his mother's parents must have also had the condition.  3. If Z is a girl, then both of her parents must have had the allele.  4. If Z is a boy, and has children, then all of his daughters will have the condition.",
    options: ["1, 3 and 4 only", "1 and 3 only", "2 and 4 only", "1 and 4 only", "2 and 3 only"],
    correct: 2,
    explanation:
      "For an X-linked dominant trait: a boy inherits his X from his mother, so she has it and got it from a parent (2); an affected father passes it to all daughters (4). Statement 1 (from father) and 3 (both parents) are wrong.",
    studyTip:
      "For X-linked dominant inheritance, sons get their X from the mother; affected fathers pass the trait to every daughter but no son.",
  },
  {
    id: "pp18-29",
    subject: "biology",
    topic: "Biologia molecolare - Trascrizione",
    question:
      "The tRNA anticodons for amino acids 1–4 of a polypeptide are, in order: GCA, ACA, UUG, GGU. Which one of the following is the correct sequence, in a 3′ to 5′ direction, for the bases on the template strand of the DNA?",
    options: [
      "ATGGTGCCTTTC",
      "CGTTGTAAGCCA",
      "GCAACAUUCCCU",
      "CGUUGUAAGCCA",
      "GCAACATTGGGT",
    ],
    correct: 4,
    explanation:
      "The anticodons GCA ACA UUG GGU correspond to mRNA 5'-CGU UGU AAC CCA-3', so the DNA template (3'->5') is GCA ACA TTG GGT — note A pairs with T, not U, in DNA.",
    studyTip:
      "Work tRNA -> mRNA -> DNA by complementary, antiparallel pairing, and switch U for T when you reach the DNA strand.",
  },
  {
    id: "pp18-30",
    subject: "biology",
    topic: "Biotecnologie - Terapia genica",
    question:
      "Mutations in the CFTR gene cause cystic fibrosis (CF). The non-mutated allele can be introduced into the lung cells of a person with CF using liposomes as a vector. This treatment gives only short-term relief. Which of the following statements would be a correct explanation? 1. Genes are unstable and break down over time in the cell.  2. Lung cells are constantly being replaced and new cells will have the faulty allele.  3. The non-mutated allele is recessive.",
    options: ["1 only", "2 only", "1 and 2 only", "1 and 3 only", "2 and 3 only"],
    correct: 1,
    explanation:
      "The therapy is short-lived because lung cells are continually replaced, and the new cells still carry the faulty allele (2). Genes don't simply break down (1 wrong), and the normal allele is dominant, not recessive (3 wrong).",
    studyTip:
      "Gene therapy in a high-turnover tissue fades as cells are replaced by descendants still carrying the original mutation.",
  },
  {
    id: "pp18-31",
    subject: "biology",
    topic: "Microbiologia",
    question:
      "A Petri dish contains two species of bacteria (V and W), both growing and reproducing at the same rate using the same resources. The conditions are then changed and the growth/reproduction rate of species V increases. Which of the following, acting independently, could cause this increase? 1. a decrease in temperature  2. a change in pH  3. the addition of an antibiotic",
    options: ["1, 2 and 3", "1 and 2 only", "2 and 3 only", "1 and 3 only", "2 only"],
    correct: 0,
    explanation:
      "Bacteria are highly adaptable: a temperature drop can favour V (1), a pH change can suit V's optimum (2), and an antibiotic can favour V if it is resistant or by suppressing competitor W (3) — all possible.",
    studyTip:
      "Given bacterial diversity, any environmental change can favour one species — including an antibiotic, if that species is resistant or its competitor isn't.",
  },
  {
    id: "pp18-32",
    subject: "biology",
    topic: "Sistema cardiovascolare",
    question:
      "Which one of the following statements is correct when the pressure in the ventricles of a healthy human heart is at its highest?",
    options: [
      "The atria of the heart will be filling.",
      "The semi-lunar valves will be closed.",
      "The heart will be in atrial systole.",
      "The atrioventricular valves will be open.",
      "A wave of electrical activity will be reaching the atrioventricular node.",
    ],
    correct: 0,
    explanation:
      "At peak ventricular pressure the ventricles are contracting and ejecting blood while the relaxed atria are filling (A). The semilunar valves are open, the AV valves closed, and it is ventricular (not atrial) systole.",
    studyTip:
      "During ventricular systole the atria relax and fill — peak ventricular pressure coincides with open semilunar valves and closed AV valves.",
  },
  {
    id: "pp18-33",
    subject: "biology",
    topic: "Apparato digerente",
    question:
      "Which of the following structures make a solution that can raise the pH in the digestive system of a healthy human? 1. gall bladder  2. pancreas  3. stomach",
    options: ["1 only", "3 only", "2 only", "1 and 2 only", "2 and 3 only"],
    correct: 2,
    explanation:
      "Pancreatic juice is rich in bicarbonate, which neutralises stomach acid and raises pH (2). The gall bladder stores bile and the stomach secretes acid, lowering pH.",
    studyTip:
      "The pancreas supplies bicarbonate to neutralise acidic chyme — it's the main source of an alkaline (pH-raising) secretion in digestion.",
  },
  {
    id: "pp18-34",
    subject: "biology",
    topic: "Immunologia",
    question:
      "B lymphocytes are involved in the human immune response to a bacterial infection. Which of the following processes would TYPICALLY be carried out by these lymphocytes in response to the infection? 1. cell division by mitosis  2. transcription producing mRNA  3. engulfing and digesting bacteria",
    options: ["3 only", "1 only", "1 and 2 only", "2 and 3 only", "1 and 3 only"],
    correct: 2,
    explanation:
      "B lymphocytes proliferate by mitosis (1) and, as plasma cells, transcribe mRNA heavily to make antibodies (2). Engulfing and digesting bacteria (3) is done by phagocytes, not B cells.",
    studyTip:
      "B cells make antibodies (mitosis + heavy transcription); phagocytosis of bacteria is the job of phagocytes like neutrophils, not lymphocytes.",
  },
  /* ---------------- CHEMISTRY ---------------- */
  {
    id: "pp18-35",
    subject: "chemistry",
    topic: "Energia di ionizzazione",
    question:
      "Five atoms are shown (the letters are NOT chemical symbols). Their atomic numbers are: V = 9, W = 10, X = 9, Y = 11, Z = 11. Which one of the following atoms has the highest first ionisation energy?",
    options: ["V", "W", "X", "Y", "Z"],
    correct: 1,
    explanation:
      "The atom with atomic number 10 (W) has a full valence shell (1s2 2s2 2p6), the noble-gas configuration, so removing an electron requires the most energy.",
    studyTip:
      "First ionisation energy peaks at a full (noble-gas) electron configuration — find the atom that reaches a complete octet.",
  },
  {
    id: "pp18-36",
    subject: "chemistry",
    topic: "Configurazione elettronica - Specie isoelettroniche",
    question:
      "Which of the following species have the same number and arrangement of electrons in their lowest energy states? The species are K+ (Z=19), Na+ (Z=11), O- (Z=8), O2- (Z=8) and S- (Z=16).",
    options: ["K+ and Na+", "O- and O2-", "Na+ and O2-", "O- and S-", "K+ and S-"],
    correct: 2,
    explanation:
      "Count electrons: K+ = 18, Na+ = 10, O- = 9, O2- = 10, S- = 17. Na+ and O2- both have 10 electrons (neon configuration), so C is correct.",
    studyTip:
      "For isoelectronic species, adjust the atomic number by the charge (subtract for +, add for -) and match equal electron counts.",
  },
  {
    id: "pp18-37",
    subject: "chemistry",
    topic: "Tavola periodica - Metalli alcalini",
    question:
      "Which of the following statements, if any, are correct for the properties of Group I elements? 1. They form hydrides where the hydrogen has an oxidation state of -1.  2. They can reduce iodine to iodide.  3. Their outer electrons are delocalised when in the liquid state.",
    options: ["none of them", "1 and 2 only", "1 and 3 only", "2 and 3 only", "1, 2 and 3"],
    correct: 4,
    explanation:
      "Group I metals form ionic hydrides with H in the -1 state (1), reduce iodine to iodide (2), and have delocalised outer electrons in the metallic/liquid state (3) — all correct.",
    studyTip:
      "Alkali metals are strong reducers with one easily lost outer electron — they form ionic hydrides (H-) and reduce halogens.",
  },
  {
    id: "pp18-38",
    subject: "chemistry",
    topic: "Numeri di ossidazione",
    question:
      "Compounds of chlorine include: Cl2O, KCl, KClO, KClO3, KClO4 and Cl2O7. Which one of the following options correctly lists the oxidation states of chlorine shown in these compounds?",
    options: [
      "-1, +1, +3, +5 and +7 only",
      "-1, 0, +1, +5 and +7 only",
      "-1 only",
      "-1, +1, +5 and +7 only",
      "-1, 0 and +1 only",
    ],
    correct: 3,
    explanation:
      "Cl2O (+1), KCl (-1), KClO (+1), KClO3 (+5), KClO4 (+7), Cl2O7 (+7): the distinct states are -1, +1, +5 and +7.",
    studyTip:
      "Assign chlorine's oxidation state in each compound (oxygen -2, K +1, neutral overall), then list the distinct values.",
  },
  {
    id: "pp18-39",
    subject: "chemistry",
    topic: "Solubilita",
    question:
      "Which one of the following substances has the highest solubility in the specified liquid at 298 K and 1 atm?",
    options: [
      "bromine in liquid hexane",
      "sodium chloride in liquid cyclohexane",
      "hydrogen in liquid water",
      "silicon dioxide in liquid water",
      "potassium bromide in liquid tetrachloromethane",
    ],
    correct: 0,
    explanation:
      "'Like dissolves like': non-polar bromine dissolves best in non-polar hexane. The salt/non-polar and gas/water mismatches all give low solubility.",
    studyTip:
      "Apply 'like dissolves like' — non-polar solutes dissolve in non-polar solvents, polar/ionic in polar solvents.",
  },
  {
    id: "pp18-40",
    subject: "chemistry",
    topic: "Equilibrio chimico - Cinetica",
    question:
      "When nitrogen and hydrogen react, an equilibrium is attained: N2(g) + 3H2(g) ⇌ 2NH3(g), with ΔH negative. Which of the following statements explain(s) why, when the pressure on the mixture is increased while temperature is constant, the time taken to reach equilibrium decreases? 1. The molecules have a higher collision frequency.  2. The yield of ammonia decreases.  3. A greater proportion of molecules in the mixture have energy greater than the activation energy.",
    options: ["2 only", "1 only", "3 only", "1 and 3 only", "1, 2 and 3"],
    correct: 1,
    explanation:
      "Higher pressure raises the collision frequency (1), so equilibrium is reached faster. Yield change (2) is irrelevant to rate, and the activation-energy fraction (3) depends on temperature, which is constant.",
    studyTip:
      "Pressure speeds up the rate via more frequent collisions; it doesn't change the activation energy or confuse rate with yield.",
  },
  {
    id: "pp18-41",
    subject: "chemistry",
    topic: "Acidi e basi - Bronsted-Lowry",
    question:
      "Consider this ionic equation in aqueous solution: CH3O- + H2O → CH3OH + OH-. Which statement about this reaction is correct?",
    options: [
      "The hydroxide ion is the conjugate acid of the water.",
      "Water is acting as a Brønsted–Lowry base.",
      "CH3OH is the conjugate acid of CH3O-.",
      "The final mixture of solutions would have a pH below 7.",
      "The CH3O- ion is a Lewis acid.",
    ],
    correct: 2,
    explanation:
      "CH3O- accepts a proton (base) to become CH3OH, its conjugate acid (C). Water donates the proton (acid), and OH- is its conjugate base.",
    studyTip:
      "A base gains a proton to form its conjugate acid — track which species accepts H+ to identify the conjugate pair.",
  },
  {
    id: "pp18-42",
    subject: "chemistry",
    topic: "Gas ideali - Teoria cinetica",
    question:
      "A sealed container holds 1.00 mol of hydrogen gas (ideal). Which of the following changes increase(s) the total kinetic energy of the hydrogen molecules initially in the container? 1. Changing the amount from 1.0 to 1.2 mol while keeping pressure and volume constant.  2. Changing the pressure from 1.0 to 1.2 atm while keeping volume and moles constant.  3. Changing the volume from 1.0 to 1.2 L while keeping pressure and moles constant.",
    options: ["2 and 3 only", "3 only", "1 and 2 only", "1 only", "1, 2 and 3"],
    correct: 0,
    explanation:
      "Total kinetic energy depends on temperature. Raising pressure at constant V and n (2) or raising volume at constant P and n (3) both raise T via PV = nRT. Adding moles at constant P and V (1) lowers T.",
    studyTip:
      "Kinetic energy tracks temperature; use PV = nRT to see which change raises T when the other variables are fixed.",
  },
  {
    id: "pp18-43",
    subject: "chemistry",
    topic: "Gas ideali - Legge di Gay-Lussac",
    question:
      "Consider a fixed volume and amount of an ideal gas at 10 °C. What temperature would it have to be changed to in order for the pressure to be doubled?",
    options: ["566 °C", "278 °C", "20 °C", "293 °C", "5 °C"],
    correct: 3,
    explanation:
      "At constant volume, pressure is proportional to absolute temperature. Start at 10 °C = 283 K; doubling the pressure needs 2 x 283 = 566 K ≈ 293 °C.",
    studyTip:
      "Pressure-temperature problems must use kelvin: convert, scale by the pressure factor, then convert back to °C.",
  },
  /* ---------------- MATH ---------------- */
  {
    id: "pp18-44",
    subject: "math",
    topic: "Notazione scientifica",
    question: "Evaluate (3 × 10³)³ × (2 × 10⁻⁵).",
    options: ["5.4 × 10¹", "5.4 × 10²", "5.4 × 10⁵", "5.4 × 10⁴", "5.4 × 10⁻¹"],
    correct: 2,
    explanation:
      "(3 × 10³)³ = 27 × 10⁹ = 2.7 × 10¹⁰; × (2 × 10⁻⁵) = 5.4 × 10⁵.",
    studyTip:
      "Cube the coefficient and the power of ten separately, then multiply — keep careful track of the exponent arithmetic.",
  },
  {
    id: "pp18-45",
    subject: "math",
    topic: "Geometria analitica",
    question:
      "Which one of the following is an equation of the line that passes through (4, 3) and is perpendicular to the line y = 2x + 4?",
    options: ["2y + x = 10", "2x + y = 11", "2y - x = 2", "2x - y = 5", "2y + x = 11"],
    correct: 0,
    explanation:
      "Perpendicular gradient = -1/2. Line: y - 3 = -1/2(x - 4) -> 2y - 6 = -x + 4 -> 2y + x = 10.",
    studyTip:
      "Perpendicular gradients multiply to -1; use the point to fix the intercept, then rearrange.",
  },
  {
    id: "pp18-46",
    subject: "math",
    topic: "Geometria",
    question:
      "A pentagon has one line of symmetry. All five sides are 6 cm, and the interior angles, in anticlockwise order, are 60°, 150°, 90°, 90° and 150°. What is the area of this pentagon?",
    options: [
      "3(4+√3) cm²",
      "3(12+√3) cm²",
      "9(2+√3) cm²",
      "3(5+√3) cm²",
      "9(4+√3) cm²",
    ],
    correct: 4,
    explanation:
      "Split the pentagon into a square (side 6, area 36) and an equilateral triangle (side 6, area 9√3) on top of it; total = 36 + 9√3 = 9(4 + √3) cm².",
    studyTip:
      "Decompose an irregular polygon into familiar shapes (here a square plus an equilateral triangle) and add their areas.",
  },
  {
    id: "pp18-47",
    subject: "math",
    topic: "Equazioni",
    question: "The equation (x+4)/(x+1) = x has two roots. What is the sum of the two roots?",
    options: ["0", "-2", "-4", "2", "4"],
    correct: 0,
    explanation:
      "(x+4)/(x+1) = x -> x+4 = x(x+1) = x²+x -> x² = 4 -> x = ±2. Sum = 0.",
    studyTip:
      "Clear the fraction, simplify to a quadratic, then read the root sum as -b/a (here 0).",
  },
  /* ---------------- PHYSICS ---------------- */
  {
    id: "pp18-48",
    subject: "physics",
    topic: "Unita di misura",
    question:
      "Three spherical particles have the following diameters: 1650 pm, 1.5 nm and 0.0036 μm. What is their order of diameter (smallest first)?",
    options: [
      "1650 pm, 1.5 nm, 0.0036 μm",
      "0.0036 μm, 1650 pm, 1.5 nm",
      "0.0036 μm, 1.5 nm, 1650 pm",
      "1.5 nm, 1650 pm, 0.0036 μm",
      "1.5 nm, 0.0036 μm, 1650 pm",
    ],
    correct: 3,
    explanation:
      "Convert to nm: 1650 pm = 1.65 nm, 1.5 nm, 0.0036 μm = 3.6 nm. Smallest first: 1.5 nm, 1650 pm, 0.0036 μm.",
    studyTip:
      "Put all measurements in the same unit (e.g. nm) before ordering — 1 nm = 1000 pm and 1 μm = 1000 nm.",
  },
  {
    id: "pp18-49",
    subject: "physics",
    topic: "Dinamica",
    question:
      "An electric train is travelling on a straight, horizontal track. A constant resultant force (greater than zero) acts on the train in the direction of its motion. What happens to the magnitude of the acceleration and to the magnitude of the velocity of the train while this force is acting?",
    options: [
      "The acceleration remains constant and the velocity remains constant.",
      "The acceleration increases and the velocity increases.",
      "The acceleration decreases and the velocity increases.",
      "The acceleration increases and the velocity remains constant.",
      "The acceleration remains constant and the velocity increases.",
    ],
    correct: 4,
    explanation:
      "A constant resultant force gives constant acceleration (F = ma), and constant positive acceleration makes the velocity increase steadily — option E.",
    studyTip:
      "Constant force -> constant acceleration (uniform acceleration), under which velocity rises linearly with time.",
  },
];
