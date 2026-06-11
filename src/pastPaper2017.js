/* ============================================================
   PAST PAPER — IMAT 2017 (commented simulation)
   Source: user-provided "test-IMAT-2017-commentato.pdf".

   NOTE: this source is a commented simulation, not a clean
   official grid. Many original questions depend on figures,
   tables, charts or molecular-structure images that did NOT
   survive PDF text extraction. Those are intentionally OMITTED
   — only questions fully answerable from the recovered text are
   included, so this is a subset, not all 60. Explanations have
   been condensed and translated to match the app's style.

   Shape: { id, subject, topic, question, options[5], correct, explanation, studyTip }
   Mixed into the simulation pool — never a standalone "2017" block.
   ============================================================ */

export const PAST_PAPER_2017 = [
  /* ---------------- LOGIC ---------------- */
  {
    id: "pp17-1",
    subject: "logic",
    topic: "Ragionamento critico - Assunzioni",
    question:
      "The recently-appointed captain of the national football team has been publicly accused of adultery with several women, including the girlfriend of a former teammate. The newspapers have made a great deal of his extramarital activities and it has become a scandal. His behaviour has led him to be the subject of crude jokes. He has now been suspended from his duties. It is right that he has been removed from his position so that the team can start to pull together and have the best possible chance of winning the World Cup. Which one of the following is an underlying assumption of the above argument?",
    options: [
      "Newspapers have the right to report on people's personal lives.",
      "This new captain should not have been appointed.",
      "If the new captain is fired, the national team will win the World Cup.",
      "The national team will not win the World Cup.",
      "The new captain's actions have weakened team morale.",
    ],
    correct: 4,
    explanation:
      "An underlying assumption is unstated but needed for the conclusion. The argument jumps from the captain's behaviour to the claim that removing him improves the team's chances; only E supplies the missing link — his actions weakened morale.",
    studyTip:
      "For 'underlying assumption' questions, find the unstated claim that bridges the evidence and the conclusion — the gap the argument silently relies on.",
  },
  {
    id: "pp17-2",
    subject: "logic",
    topic: "Ragionamento critico - Conclusioni",
    question:
      "E-cigarettes, which provide nicotine without cigarette smoke, have been praised by health campaigners. Research has suggested that success rates for quitting smoking are higher with e-cigarettes than with other methods. However, rather than tackling their nicotine addiction, e-cigarette users have simply replaced one habit with another. It is true that cigarette smoke contains many hazardous compounds, and also that quitting smoking increases life expectancy and reduces the risk of many health problems. But nicotine also has its dangers: it has been associated with a range of conditions that we do not fully understand, and research has yet to establish the long-term effects of nicotine use outside of cigarette smoke. Which one of the following is a conclusion that can be drawn from the above passage?",
    options: [
      "Using nicotine patches is an ineffective way to give up smoking.",
      "Smoking traditional cigarettes still poses a major risk to health.",
      "People should not assume e-cigarettes are a safe alternative to traditional cigarettes.",
      "E-cigarettes are just as harmful as traditional cigarettes.",
      "Not everyone is able to give up smoking without nicotine replacement.",
    ],
    correct: 2,
    explanation:
      "The passage lists benefits of e-cigarettes, then raises doubts about their safety, so the sensible conclusion is C. D overstates ('just as harmful'); A mentions patches, never discussed; B and E are premises, not conclusions.",
    studyTip:
      "A valid conclusion follows from the passage without going beyond it — reject options that overshoot the evidence or merely restate a premise.",
  },
  {
    id: "pp17-3",
    subject: "logic",
    topic: "Ragionamento critico - Conclusioni",
    question:
      "Many children from poor backgrounds would benefit from wearing spectacles but do not have them. Sometimes parents are not aware of their children's poor eyesight, but most often they suffer from financial constraints. The government should provide free glasses to poor children with eyesight problems. A recent study of underprivileged students with poor vision demonstrated that those who were given free glasses enjoyed an improvement in test scores equivalent to almost a year of additional schooling. Using the most conservative estimate of the impact of schooling on salary, this would significantly increase an average school-leaver's annual income and tax contributions, and by far more than the cost of a pair of glasses. Which one of the following best expresses the main conclusion of the above argument?",
    options: [
      "The government should help financially with the provision of children's glasses.",
      "Parents should be educated about potential eyesight problems in children.",
      "Children from poor backgrounds with bad eyesight should be given additional schooling.",
      "Exam marking should take into account any disabilities the student might have.",
      "People's salaries should reflect whether or not they had eyesight problems during school.",
    ],
    correct: 0,
    explanation:
      "The paragraph argues the government should fund glasses for poor children and lists the benefits, so A is the main conclusion. B is mentioned only in passing; C, D and E have no support.",
    studyTip:
      "The main conclusion is the single claim everything else in the passage supports — distinguish it from details mentioned only briefly.",
  },
  {
    id: "pp17-4",
    subject: "logic",
    topic: "Ragionamento critico - Punti deboli",
    question:
      "It is common practice to look online for a loan or a mortgage. This has led to a large number of 'comparison websites' where you type in your details and they search a range of companies for you based on these details. Night after night, there are adverts on television emphasising how much time and money comparison sites could save you. The experience of one user should make you consider the wisdom of using such sites. She gave her details to a comparison website and received no useful results. However, for weeks afterwards she was bombarded with emails and phone calls from companies she had never heard of. Which one of the following is the best statement of the flaw in the above argument?",
    options: [
      "It assumes that comparison websites save customers money.",
      "It attacks the website and not what the company does.",
      "It assumes everyone uses comparison websites.",
      "It draws a conclusion based on one example of how a company operates.",
      "It assumes using the internet is the only way to get a loan.",
    ],
    correct: 3,
    explanation:
      "The argument generalises from one user's bad experience, so the flaw is D. The other options describe assumptions the text never makes.",
    studyTip:
      "Drawing a general conclusion from a single anecdote is one of the most common reasoning flaws — watch for arguments built on one example.",
  },
  {
    id: "pp17-5",
    subject: "logic",
    topic: "Ragionamento critico - Conclusioni",
    question:
      "Though relatively few people know it by name, palm oil is found in over fifty per cent of processed supermarket goods, from soaps to snacks. This vegetable oil, which is taken from the fruit of the oil palm tree, causes a great deal of environmental concern. The clearing of tropical forests to grow oil palm plantations threatens the survival of orangutans and other endangered species. The land conversion often happens on carbon rich peat soils in a process which releases significant greenhouse gas emissions. Yet even some environmental organisations warn that alternative vegetable oil crops may require much larger areas of forest to be converted to agricultural land. Which one of the following is a conclusion that can be drawn from the above passage?",
    options: [
      "A ban on palm oil alone would not solve all of the environmental problems associated with vegetable oil production.",
      "To produce the most profitable crops, oil palm plantations must be grown on carbon rich peat soils.",
      "If farmers stopped clearing tropical forests for oil palm plantations, endangered orangutan populations would recover.",
      "The environmental risks associated with oil palm plantations are not well understood in tropical countries.",
      "There is no motivation for manufacturers to stop using palm oil in their products.",
    ],
    correct: 0,
    explanation:
      "The passage notes palm oil's harms but adds that alternative oils may be worse, so the only safe conclusion is A. The others aren't supported.",
    studyTip:
      "When a passage qualifies its own claim with a 'yet/however', the conclusion usually has to accommodate that qualification rather than ignore it.",
  },
  {
    id: "pp17-6",
    subject: "logic",
    topic: "Ragionamento critico - Indebolire",
    question:
      "Next week the European Parliament will vote on whether to ban trawling, a method of fishing that involves pulling large fishing nets behind boats. The fishing industry is opposed to a ban and has argued strongly against it. Trawling is not as damaging to ecosystems as environmentalists claim. Trawling the seabed doesn't always create 'dead zones' in the ocean. It can boost fish numbers, since the species that are more resistant to the effects of trawling can proliferate. So trawling on flat sandy beds in shallow areas can benefit marine life. Which one of the following, if true, most weakens the above argument?",
    options: [
      "Trawling in deep waters is expensive and an ineffective use of fishing resources.",
      "Trawling nets have a destructive impact on many endangered species.",
      "Trawling in shallow waters can alter the ecology in beneficial ways.",
      "Trawling in shallow waters can damage the bottom of fishermen's boats.",
      "Trawling creates new habitats by making parts of the sea more habitable.",
    ],
    correct: 1,
    explanation:
      "The argument defends trawling on environmental grounds, so a weakener must be an environmental counterpoint: B. A and D concern fishermen, not ecosystems; C and E support the argument.",
    studyTip:
      "To weaken an argument, stay on its own terms — match the counter-evidence to the exact claim being made (here, environmental impact), not a side issue.",
  },
  {
    id: "pp17-7",
    subject: "logic",
    topic: "Ragionamento critico - Principi",
    question:
      "Car drivers understandably become very annoyed at high sales taxes on fuel. In the interests of fairness, money raised from fuel taxes should be spent on maintaining roads or even on subsidising public transport. In fact much of it is put to other uses, such as providing healthcare or improving national defence. Which one of the following is an application of the principle underlying the above argument?",
    options: [
      "Better transport is more important than national defence.",
      "Money raised by taxing fuel should be spent on improving roads rather than on public transport.",
      "Profits from sporting events should be spent on encouraging people to participate in sport.",
      "Maintaining roads should be a higher priority than spending on healthcare.",
      "There should be no sales taxes on consumer goods.",
    ],
    correct: 2,
    explanation:
      "The principle is that revenue from taxing something should be spent on that same area. C mirrors it exactly: profits from sport should be spent encouraging sport.",
    studyTip:
      "For 'apply the principle' questions, strip the argument to its abstract rule, then find the option that follows the same rule in a different context.",
  },
  {
    id: "pp17-8",
    subject: "logic",
    topic: "Ragionamento critico - Punti deboli",
    question:
      "Widespread underage drinking in certain countries prompted their governments to place restrictions on selling alcohol to young people. The aim was to protect young people's health, but the result was not as intended. Soon after the restrictions were in place, hospitals saw several cases of young people becoming ill as a result of drinking alcohol-based liquids such as medical spirits, ethanol solutions and perfumes. The young people claimed that the restriction on legal alcohol was the main reason they were drinking other substances. If the restrictions were abolished, the health risk would be reduced. Which one of the following is the best statement of the flaw in the above argument?",
    options: [
      "It ignores the role of education in encouraging young people to drink alcohol responsibly.",
      "It ignores the fact that if there had been no restrictions more young people would have suffered from drinking alcohol.",
      "It assumes that restrictions encourage young people to drink alcohol.",
      "It does not take into account the social and cultural importance of drinking alcohol.",
      "It ignores the problem of people drinking dangerous substances because they cannot afford to buy alcohol legally.",
    ],
    correct: 1,
    explanation:
      "The argument claims lifting restrictions would reduce harm, ignoring that without restrictions even more young people would have been harmed by alcohol itself (B).",
    studyTip:
      "A flaw often lies in what an argument ignores — ask what would happen under the opposite scenario the argument conveniently leaves out.",
  },
  {
    id: "pp17-9",
    subject: "logic",
    topic: "Ragionamento critico - Indebolire",
    question:
      "Over the last ten years there has been a huge increase in the number of television programmes involving the work of forensic scientists. This media attention has been matched by a massive increase in the number of courses and qualifications available in this field. Although this new attention has led to greater public awareness, it has not led to the creation of more jobs in this field. The work of forensics professionals has continued unchanged. Therefore, those who choose to study these courses will find that there is fierce competition for difficult and unpleasant work. Which one of the following, if true, would most weaken the above argument?",
    options: [
      "Each year around 1500 graduates in forensic science compete for 200 jobs in the sector.",
      "New technologies have brought about a decrease in the number of forensics staff required in laboratories.",
      "Salaries for forensic scientists compare well with those in other scientific fields.",
      "The number of university courses in forensic science has grown at an unprecedented rate.",
      "Many students of forensic science go on to pursue careers in other areas.",
    ],
    correct: 4,
    explanation:
      "The conclusion is that forensics graduates face fierce competition; E weakens it by noting many move into other fields. A and B strengthen it; C and D are neutral or already stated.",
    studyTip:
      "An option that opens an 'escape route' the argument didn't consider (here, alternative careers) is a classic way to weaken a conclusion.",
  },
  {
    id: "pp17-10",
    subject: "logic",
    topic: "Ragionamento critico - Assunzioni",
    question:
      "Many banks encourage their customers to buy insurance against credit card fraud and other kinds of 'identity theft'. But the banks are really protecting themselves. Customers who are victims of credit card fraud suffer inconvenience but they are unlikely to lose money: the costs of any fraudulent transactions are met by the bank. It is therefore unnecessary for customers to spend money on additional insurance services. Which one of the following is an underlying assumption of the above argument?",
    options: [
      "The banks' additional insurance services protect only against the costs of fraudulent credit card transactions.",
      "People who are worried about identity theft worry only about their credit cards.",
      "Credit card fraud is a less serious problem than many people believe.",
      "Customers whose identities have been stolen would have benefited from the banks' additional insurance services.",
      "Additional insurance services are widely available for credit card customers.",
    ],
    correct: 0,
    explanation:
      "The argument assumes the insurance only covers fraudulent card transactions (A); otherwise it might still be useful for other identity-theft costs the bank doesn't cover.",
    studyTip:
      "Test a candidate assumption by negating it — if the argument falls apart when the statement is false, it's a genuine underlying assumption.",
  },
  {
    id: "pp17-11",
    subject: "logic",
    topic: "Logica numerica",
    question:
      "You want to order seven items from a publications list. The postage charges are: 1 item 55p, 2 items 70p, 3 items 95p, 4 items £1.30, 5 items £1.60, 6 or more items £3.30. You will ask them to pack your order in the number of parcels that gives the lowest total postal charge. What is the lowest postal charge for your seven items? (£1 = 100p)",
    options: ["£2.45", "£1.90", "£2.35", "£2.25", "£3.30"],
    correct: 3,
    explanation:
      "Compare per-item costs; the cheapest bundles are 3, 4 and 5 items. Split the 7 as 3 + 4 = 95p + £1.30 = £2.25, cheaper than 5 + 2 = £1.60 + 70p = £2.30.",
    studyTip:
      "For 'lowest cost' packing problems, compute the unit cost of each bundle size first, then combine the cheapest bundles to cover the total.",
  },
  {
    id: "pp17-12",
    subject: "logic",
    topic: "Logica numerica",
    question:
      "Luke walks his puppy to a park and lets it off the lead. The puppy runs ahead 100 metres, then turns and runs back to Luke, who in that time has walked 50 metres. The puppy then runs 100 metres ahead again and back to Luke, who has walked another 50 metres. This routine continues until Luke has walked 1 km. If it takes Luke 12 minutes to walk the 1 km, what is the puppy's average running speed during that time?",
    options: ["5 km/h", "15 km/h", "10 km/h", "12 km/h", "14 km/h"],
    correct: 1,
    explanation:
      "Every time Luke walks 50 m the puppy runs 150 m (100 forward + 50 back), i.e. 3x his distance. In 12 min Luke covers 1 km, so the puppy covers 3 km. 12 min = 1/5 h, so speed = 3 / (1/5) = 15 km/h.",
    studyTip:
      "When one object retraces its path relative to another, find the constant distance ratio per cycle, then scale the known distance.",
  },
  {
    id: "pp17-13",
    subject: "logic",
    topic: "Logica numerica",
    question:
      "12 matchsticks can be arranged to make a grid of 4 squares (2 rows of 2). Using matchsticks the same way, how many matchsticks are needed to make a grid of 100 squares, arranged in 10 rows of 10?",
    options: ["220", "300", "242", "320", "400"],
    correct: 0,
    explanation:
      "Count by rows. A 10x10 grid needs 11 horizontal lines of 10 matchsticks (110) and, symmetrically, 110 vertical matchsticks: 110 + 110 = 220.",
    studyTip:
      "For grid-counting problems, count horizontal and vertical segments separately; an n x n grid of squares needs (n+1) lines of n in each direction.",
  },
  {
    id: "pp17-14",
    subject: "logic",
    topic: "Logica numerica",
    question:
      "A tin contains four types of chocolate — red, blue, green and yellow wrappers — with equal numbers of each. The tin is passed from friend to friend. When it reaches them: John always takes three red, Peter always takes one of each colour, Jane always takes one yellow, and I always take two green. After six passings, half of the chocolates remaining in the tin are blue. How many chocolates were there when the tin was full?",
    options: ["48", "24", "96", "60", "72"],
    correct: 2,
    explanation:
      "Let x be the number per colour. Per pass 4 red, 1 blue, 3 green, 2 yellow are removed. After 6 passes: x-24 red, x-6 blue, x-18 green, x-12 yellow remain. Blue being half the total gives (x-24)+(x-18)+(x-12) = x-6, so x = 24 and 4x = 96.",
    studyTip:
      "Set up one variable for the quantity per category, track removals per round, then turn the condition ('half are blue') into a single equation.",
  },
  /* ---------------- GENERAL KNOWLEDGE ---------------- */
  {
    id: "pp17-15",
    subject: "general",
    topic: "Cultura generale - Scienza",
    question:
      "Which one of the following theories was publicly announced to the Prussian Academy of Science on 25th November 1915?",
    options: [
      "The Big Bang theory",
      "Quantum theory",
      "Einstein's general theory of relativity",
      "String theory",
      "Dalton's atomic theory",
    ],
    correct: 2,
    explanation:
      "On 25 November 1915 Einstein presented his general theory of relativity to the Prussian Academy of Sciences.",
    studyTip:
      "Anchor major scientific milestones to their dates and figures — general relativity (1915, Einstein) is a frequently tested landmark.",
  },
  {
    id: "pp17-16",
    subject: "general",
    topic: "Cultura generale - Economia",
    question:
      "Which one of the following introduced the metaphor of the 'invisible hand' in relation to a free trade economy?",
    options: ["Adam Smith", "David Ricardo", "Karl Marx", "Vilfredo Pareto", "Thomas Robert Malthus"],
    correct: 0,
    explanation:
      "The 'invisible hand' metaphor was introduced by Adam Smith to describe how self-interest in a free market can also serve the broader social interest.",
    studyTip:
      "Link key economic concepts to their originators; the 'invisible hand' is Adam Smith's signature idea.",
  },
  /* ---------------- BIOLOGY ---------------- */
  {
    id: "pp17-17",
    subject: "biology",
    topic: "Biochimica - Proteine",
    question:
      "Which of the following components of a human immunodeficiency virus (HIV) contain peptide bonds? 1. capsid  2. envelope  3. reverse transcriptase",
    options: ["3 only", "2 and 3 only", "1 and 3 only", "1, 2 and 3", "1 and 2 only"],
    correct: 3,
    explanation:
      "Peptide bonds link amino acids, so they occur in any protein. All three contain protein: the capsid (protein shell), the envelope (which carries glycoproteins such as gp120), and reverse transcriptase (an enzyme).",
    studyTip:
      "Peptide bonds occur wherever there's protein — scan each option for any protein component, including glycoproteins and enzymes.",
  },
  {
    id: "pp17-18",
    subject: "biology",
    topic: "Biochimica - Proteine",
    question:
      "Which one of the following most accurately describes the structure of a human haemoglobin molecule that can bind four oxygen molecules to form oxyhaemoglobin?",
    options: [
      "It has a primary, secondary and tertiary structure only.",
      "It has a primary, secondary, tertiary and quaternary structure.",
      "It has a primary, secondary and quaternary structure only.",
      "It has a primary, tertiary and quaternary structure only.",
      "It has a primary and secondary structure only.",
    ],
    correct: 1,
    explanation:
      "Haemoglobin is a tetramer of four subunits, so it has primary, secondary, tertiary AND quaternary structure. Quaternary structure arises only when a protein has multiple polypeptide chains.",
    studyTip:
      "Quaternary structure exists only for multi-subunit proteins — binding four O2 tells you haemoglobin has four chains, hence all four levels.",
  },
  {
    id: "pp17-19",
    subject: "biology",
    topic: "Biologia molecolare - DNA",
    question:
      "A short section of the DNA strand that codes for a protein has the sequence: CAT TGG GCA TCG. Which of the following statements about this section is/are correct? 1. There are 29 hydrogen bonds between this section and its complementary strand.  2. There are 12 phosphodiester bonds within this section.  3. The unmutated tRNA molecules used to translate this sequence contain a total of 3 uracil bases.",
    options: ["3 only", "2 only", "1 and 2 only", "1 and 3 only", "2 and 3 only"],
    correct: 0,
    explanation:
      "Phosphodiester bonds = 11, not 12 (the 5' end has a free phosphate), so 2 is wrong. H-bonds = 31, not 29 (A-T = 2, C-G = 3), so 1 is wrong. The tRNA anticodons CAU UGG GCA UCG contain 3 uracils, so only 3 is correct.",
    studyTip:
      "For a strand of n nucleotides there are n-1 phosphodiester bonds; count H-bonds as 2 per A-T and 3 per C-G, and remember tRNA uses U for T.",
  },
  {
    id: "pp17-20",
    subject: "biology",
    topic: "Cellula - Strutture",
    question:
      "The following structures are found in plant cells: 1. cell wall  2. cell membrane  3. nucleolus  4. mitochondrion. Which cell structures might contain molecules containing carbohydrate monomers?",
    options: ["1 only", "1 and 4 only", "1, 2, 3 and 4", "4 only", "2 and 3 only"],
    correct: 2,
    explanation:
      "All four contain carbohydrate monomers: the cell wall (cellulose = glucose), the membrane (glycosylated proteins), and the nucleolus and mitochondrion (nucleic acids contain ribose/deoxyribose sugars).",
    studyTip:
      "Nucleic acids count as carbohydrate-containing because their backbones are sugars — any structure with DNA or RNA qualifies.",
  },
  {
    id: "pp17-21",
    subject: "biology",
    topic: "Trasporto di membrana",
    question:
      "Two adjacent healthy human cells, X and Y, contain molecules Q and R. The concentration of Q in cell X is 4 a.u. and in cell Y is 6 a.u. The concentration of R in both cells is 7 a.u. Which statements about the net movement of ONLY Q and R between cells X and Y could be correct? 1. Q moves by facilitated diffusion from cell X.  2. Q moves by active transport into cell Y.  3. R moves into and out of both cell X and cell Y.",
    options: ["2 only", "1 and 3 only", "1 only", "1, 2 and 3", "2 and 3 only"],
    correct: 4,
    explanation:
      "R is equal in both cells (7 a.u.), so it moves both ways by simple diffusion (3). Q is higher in Y than X, so moving Q into Y is against the gradient and needs active transport (2); facilitated diffusion (1) couldn't move Q from X where it's lower.",
    studyTip:
      "Movement against a concentration gradient needs active transport; passive routes (diffusion, facilitated diffusion) only ever go down a gradient.",
  },
  {
    id: "pp17-22",
    subject: "biology",
    topic: "Fotosintesi",
    question:
      "Which one of the following is a correct outline of some main events in photosynthesis in a healthy wheat plant?",
    options: [
      "Light joins carbon dioxide to an acceptor compound which is then reduced by hydrogen obtained from water.",
      "Carbon dioxide combines with an acceptor compound which breaks into two and each is reduced by hydrogen split from water by light.",
      "Light splits carbon dioxide and the resulting carbon then combines with oxygen and hydrogen obtained from water.",
      "Light splits water and the resulting hydroxyl group combines with a compound which has reacted with carbon dioxide.",
      "In the presence of light, oxygen reacts with a carbohydrate to produce water and carbon dioxide.",
    ],
    correct: 1,
    explanation:
      "In the Calvin cycle CO2 combines with a 5-carbon acceptor (RuBP) to form two 3-carbon molecules, each reduced using hydrogen from water split by light in the light-dependent reactions — option B.",
    studyTip:
      "Keep the two stages straight: light splits water and drives reduction; the Calvin cycle fixes CO2 onto an acceptor that then splits into two reduced 3-carbon molecules.",
  },
  {
    id: "pp17-23",
    subject: "biology",
    topic: "Respirazione cellulare",
    question:
      "Which of the following molecules is/are directly produced during BOTH glycolysis and pyruvate decarboxylation in a healthy human cell? 1. ATP  2. carbon dioxide  3. reduced NAD",
    options: ["2 and 3 only", "1 and 3 only", "1 and 2 only", "1 only", "3 only"],
    correct: 4,
    explanation:
      "Glycolysis makes ATP and reduced NAD but no CO2; pyruvate decarboxylation makes CO2 and reduced NAD but no ATP. The only product common to both is reduced NAD.",
    studyTip:
      "For 'common to both processes' questions, list each process's products separately and take the overlap.",
  },
  {
    id: "pp17-24",
    subject: "biology",
    topic: "Meiosi",
    question:
      "Which of the following occurs in a healthy human testis cell before it undergoes meiosis? 1. DNA content of the nucleus doubles  2. spindle fibres form the spindle  3. crossing over",
    options: ["1 only", "1 and 2 only", "1 and 3 only", "2 and 3 only", "1, 2 and 3"],
    correct: 0,
    explanation:
      "Only DNA replication (S phase) occurs before meiosis begins. Spindle formation and crossing over both happen during prophase I, i.e. within meiosis, not before it.",
    studyTip:
      "'Before meiosis' means interphase — only DNA doubling happens then; spindle assembly and crossing over are events of meiosis itself.",
  },
  {
    id: "pp17-25",
    subject: "biology",
    topic: "Genetica - Trasmissione",
    question:
      "A mother and a father, neither of whom has cystic fibrosis, conceive a child who has the condition. What is the likelihood that the same parents will have another child who is a boy without cystic fibrosis?",
    options: ["3 in 8", "1 in 2", "3 in 4", "1 in 8", "1 in 4"],
    correct: 0,
    explanation:
      "CF is autosomal recessive, so both carrier parents give a 3/4 chance of an unaffected child; the chance of a boy is 1/2. Independent events: 3/4 x 1/2 = 3/8.",
    studyTip:
      "Combine independent probabilities by multiplying — sex (1/2) is independent of an autosomal trait, so multiply the two separate chances.",
  },
  {
    id: "pp17-26",
    subject: "biology",
    topic: "Biologia molecolare - Acidi nucleici",
    question: "Which one of the following statements about unmutated nucleic acids is correct?",
    options: [
      "mRNA is made up of a single nucleotide with a codon of uracil, cytosine and guanine bases.",
      "Prokaryotic DNA is a single strand which forms a loop.",
      "Bases in DNA may form hydrogen bonds with uracil bases.",
      "rRNA has anticodons which bind to tRNA.",
      "tRNA is made up of one phosphate-sugar backbone and may have adenosine and thymine bases.",
    ],
    correct: 2,
    explanation:
      "During an RNA-DNA pairing (transcription), DNA adenine pairs with uracil (2 H-bonds), so C is correct. Thymine never appears in RNA (E wrong); mRNA isn't a single nucleotide (A); rRNA has no anticodons (D); prokaryotic DNA is double-stranded and circular.",
    studyTip:
      "Remember the base-pairing rules across DNA/RNA: A-U during transcription, no thymine in any RNA, and anticodons belong to tRNA, not rRNA.",
  },
  {
    id: "pp17-27",
    subject: "biology",
    topic: "Biotecnologie - DNA ricombinante",
    question:
      "Which combinations of DNA could be present in a transgenic organism? 1. invertebrate animal DNA in mammal DNA  2. prokaryotic DNA in plant DNA  3. plant DNA in animal DNA",
    options: ["1 and 2 only", "1 and 3 only", "2 and 3 only", "1, 2 and 3", "2 only"],
    correct: 3,
    explanation:
      "Transgenesis inserts genes from any species into another's genome, so all combinations (invertebrate to mammal, prokaryote to plant, plant to animal) are possible.",
    studyTip:
      "Recombinant DNA technology recognises no species barrier — any cross-kingdom gene transfer is, in principle, possible.",
  },
  {
    id: "pp17-28",
    subject: "biology",
    topic: "Sistema endocrino",
    question:
      "Which of the following could be a consequence of a reduction in pituitary function in an otherwise healthy human? 1. more urine produced in a male or female  2. infertility in a female  3. infertility in a male",
    options: ["2 only", "1 and 3 only", "2 and 3 only", "1, 2 and 3", "1 and 2 only"],
    correct: 3,
    explanation:
      "The pituitary secretes ADH (less ADH means more urine, 1) and the gonadotropins FSH/LH (less means infertility in both sexes, 2 and 3), so all three can result.",
    studyTip:
      "Map the pituitary's main hormones to their effects — ADH controls water balance, while FSH/LH drive fertility in both sexes.",
  },
  {
    id: "pp17-29",
    subject: "biology",
    topic: "Enzimi",
    question:
      "Which of the following statements is/are correct for all enzyme inhibitors? 1. They alter the shape of the active site.  2. They denature the enzyme.  3. They increase the activation energy of the reaction.  4. They reduce the rate of the enzyme catalysed reaction.",
    options: ["4 only", "1, 2 and 4 only", "2 and 4 only", "3 only", "1, 2 and 3 only"],
    correct: 0,
    explanation:
      "The only statement true for ALL inhibitors is that they reduce the reaction rate (4). They don't denature the enzyme, and only some (non-competitive) alter the active site's shape, so 1, 2 and 3 aren't universally true.",
    studyTip:
      "For 'true for all X' questions, reject any property that holds for only one subtype — only rate reduction applies to every inhibitor.",
  },
  {
    id: "pp17-30",
    subject: "biology",
    topic: "Sistema nervoso",
    question:
      "A person was admitted to hospital suffering from a loss of memory. Which part of the central nervous system is most likely to have been affected?",
    options: ["cerebellum", "cerebrum", "hypothalamus", "medulla", "spinal cord"],
    correct: 1,
    explanation:
      "The cerebrum governs higher cognitive functions including memory, so memory loss points to the cerebrum. The cerebellum handles movement/balance, the hypothalamus visceral functions, the medulla vital reflexes.",
    studyTip:
      "Match brain regions to roles — cerebrum (cognition/memory), cerebellum (coordination), hypothalamus (homeostasis), medulla (autonomic reflexes).",
  },
  {
    id: "pp17-31",
    subject: "biology",
    topic: "Sistema nervoso",
    question:
      "Which of the following processes take place during the establishment of a resting potential in the axon of a healthy human neuron? 1. active transport  2. facilitated diffusion  3. respiration",
    options: ["1 and 2 only", "1 and 3 only", "2 and 3 only", "1, 2 and 3", "2 only"],
    correct: 3,
    explanation:
      "Establishing the resting potential uses active transport (Na+/K+ pump), facilitated diffusion (leak/voltage channels) and respiration (ATP to power the pump) — all three.",
    studyTip:
      "The resting potential depends on ATP-driven pumping, so cellular respiration is always implicated alongside active transport and channel diffusion.",
  },
  {
    id: "pp17-32",
    subject: "biology",
    topic: "Sistema cardiovascolare",
    question:
      "Which of the following statements is/are correct in a healthy human? 1. During inspiration, the pressure within the chest cavity is lower than outside the body.  2. During ventricular systole, the pressure in the atrium is lower than in the ventricles.  3. During ventricular systole, the pressure in the aorta is lower than the pressure in the atrium.",
    options: ["1 and 2 only", "2 only", "3 only", "1 only", "2 and 3 only"],
    correct: 0,
    explanation:
      "During inspiration intrathoracic pressure drops below atmospheric (1). During ventricular systole the ventricles contract, so their pressure exceeds the atria's (2); but aortic pressure is higher than atrial, not lower (3 wrong).",
    studyTip:
      "In ventricular systole the ventricle is the high-pressure chamber — its pressure rises above both the atria and (to eject blood) the aorta.",
  },
  /* ---------------- CHEMISTRY ---------------- */
  {
    id: "pp17-33",
    subject: "chemistry",
    topic: "Soluzioni",
    question:
      "Consider the following list of particles: 1. molecules  2. ions  3. single atoms. Which one of the following options correctly describes the particles present in an aqueous solution of sodium chloride?",
    options: ["1 and 2 only", "2 only", "3 only", "1 only", "1, 2 and 3"],
    correct: 0,
    explanation:
      "Aqueous NaCl contains Na+ and Cl- ions plus H2O molecules — so both molecules (1) and ions (2) are present; there are no single free atoms.",
    studyTip:
      "A dissolved ionic salt gives ions in solution, and the solvent water contributes molecules — but never lone atoms.",
  },
  {
    id: "pp17-34",
    subject: "chemistry",
    topic: "Tavola periodica - Alogeni",
    question:
      "Element X is a grey solid. It combines with chlorine to form a polar molecule with formula XCl in which X has oxidation state +1. In potassium iodide solution it dissolves to form a coloured solution, and at 500 °C it becomes a coloured vapour. What is the identity of element X?",
    options: ["iodine", "lithium", "manganese", "fluorine", "carbon"],
    correct: 0,
    explanation:
      "X forms a polar (covalent) molecular chloride with oxidation state +1, gives a coloured solution in KI and a coloured vapour — this matches iodine. A polar, non-ionic chloride rules out a metal like lithium.",
    studyTip:
      "Clues like 'coloured vapour', 'polar molecular chloride' and reactions with iodide solutions point to a halogen — here iodine.",
  },
  {
    id: "pp17-35",
    subject: "chemistry",
    topic: "Legami e geometria molecolare",
    question:
      "Which option correctly describes these features of a silane (silicon tetrahydride, SiH4) molecule: number of bonding pairs (bp) of electrons; number of lone pairs (lp) in the valence shell of silicon; bond angle? [Atomic numbers: Si = 14, H = 1]",
    options: [
      "3 bp; 1 lp; 109.5°",
      "3 bp; 1 lp; 107°",
      "4 bp; 0 lp; 109.5°",
      "4 bp; 0 lp; 90°",
      "4 bp; 2 lp; 90°",
    ],
    correct: 2,
    explanation:
      "SiH4 has four bonding pairs and no lone pairs around silicon, giving a tetrahedral shape with bond angles of 109.5°.",
    studyTip:
      "Four bonding pairs with no lone pairs always means tetrahedral geometry and 109.5° bond angles.",
  },
  {
    id: "pp17-36",
    subject: "chemistry",
    topic: "Configurazione elettronica",
    question:
      "What is the electron configuration of an oxide ion, O2-? [Atomic number: O = 8]",
    options: [
      "1s2 2s2 2p4",
      "1s2 2s2 2p2",
      "1s2 2s2 2p6 3s2 3p4",
      "1s2 2s2 2p6",
      "1s2 2s2 2p6 3s2 3p6",
    ],
    correct: 3,
    explanation:
      "Neutral oxygen is 1s2 2s2 2p4 (8 electrons); gaining two electrons to form O2- gives 1s2 2s2 2p6 (the neon configuration).",
    studyTip:
      "For an anion, add electrons equal to the negative charge to the neutral configuration.",
  },
  {
    id: "pp17-37",
    subject: "chemistry",
    topic: "Soluzioni - Solubilità",
    question:
      "The solubility of potassium nitrate in water increases with temperature. A saturated solution of potassium nitrate at 80 °C is cooled to 25 °C in a closed container. Which of the following statements is/are correct? 1. The mass of undissolved potassium nitrate will increase.  2. The concentration of the potassium nitrate solution remains the same.  3. The total mass of solvent present remains the same.",
    options: ["2 and 3 only", "1, 2 and 3", "1 and 3 only", "1 only", "2 only"],
    correct: 2,
    explanation:
      "Cooling lowers KNO3 solubility, so undissolved salt increases (1) and the dissolved concentration falls (2 wrong); the total mass of solvent is unchanged in a closed container (3).",
    studyTip:
      "When a saturated solution cools, solute crystallises out (concentration falls), but in a sealed container no solvent is lost.",
  },
  {
    id: "pp17-38",
    subject: "chemistry",
    topic: "Miscele e separazioni",
    question:
      "Which one of the following statements correctly describes the type of mixture and the most appropriate method used to separate the specified component from the mixture?",
    options: [
      "water from salt solution - heterogeneous; simple distillation",
      "salt from salt solution - homogeneous; paper filtration",
      "red blood cells from blood - homogeneous; centrifuge",
      "gasoline/petrol from crude oil - heterogeneous; simple distillation",
      "chlorophyll from a solution of different plant pigments - homogeneous; chromatography",
    ],
    correct: 4,
    explanation:
      "A solution of plant pigments is homogeneous and chromatography separates its components, so E is correctly matched. The other options pair the wrong mixture type or method.",
    studyTip:
      "Match separation to mixture type: chromatography separates dissolved components of a homogeneous mixture by differential movement.",
  },
  {
    id: "pp17-39",
    subject: "chemistry",
    topic: "Isomeria",
    question:
      "Which one of the following molecules is a structural isomer of methylcyclopentane?",
    options: ["2,2-dimethylbutane", "hexane", "2-methylpentane", "hex-2-ene", "cyclohexene"],
    correct: 3,
    explanation:
      "Methylcyclopentane is C6H12. A structural isomer must share that formula: hex-2-ene (C6H12) does. The listed alkanes are C6H14 and cyclohexene is C6H10.",
    studyTip:
      "Structural isomers share the same molecular formula — work out C6H12 for the ring, then find the option with the identical formula.",
  },
  {
    id: "pp17-40",
    subject: "chemistry",
    topic: "Mole",
    question:
      "Which one of the following samples of gases contains the most particles? All gases are at 0 °C and 1 atm, where 1 mole of gas has a volume of 22.4 L. [Ar: H = 1, He = 4, C = 12, O = 16, Cl = 35.5]",
    options: [
      "33.6 L of chlorine gas",
      "22.4 L of hydrogen gas",
      "10.0 g of helium gas",
      "66.0 g of carbon dioxide gas",
      "64.0 g of oxygen gas",
    ],
    correct: 2,
    explanation:
      "Convert each to moles: 33.6 L Cl2 = 1.5 mol, 22.4 L H2 = 1 mol, 10 g He = 2.5 mol, 66 g CO2 = 1.5 mol, 64 g O2 = 2 mol. Most particles = most moles = 10 g of helium.",
    studyTip:
      "'Most particles' means most moles — convert every quantity (volume or mass) to moles before comparing.",
  },
  {
    id: "pp17-41",
    subject: "chemistry",
    topic: "Acidi e basi - pH",
    question:
      "A solution of hydrochloric acid has a concentration of 1.0 mol/L. If 10 mL of this acid is added to water and made up to a total volume of 1.0 L, what is the pH of the resulting solution?",
    options: ["2", "0", "5", "6", "7"],
    correct: 0,
    explanation:
      "10 mL of 1.0 mol/L HCl contains 0.01 mol H+; diluted to 1.0 L gives [H+] = 1x10^-2 M, so pH = 2.",
    studyTip:
      "pH = -log[H+]; find the moles of H+, divide by the final volume, then take the negative log.",
  },
  /* ---------------- MATH ---------------- */
  {
    id: "pp17-42",
    subject: "math",
    topic: "Geometria analitica",
    question:
      "What is the gradient of the straight line passing through the points with coordinates (2, -3) and (-1, 6)?",
    options: ["-9", "-3", "-1", "-1/3", "-1/9"],
    correct: 1,
    explanation:
      "Gradient = (y2 - y1)/(x2 - x1) = (6 - (-3))/(-1 - 2) = 9/(-3) = -3.",
    studyTip:
      "Gradient is the change in y over the change in x — keep the coordinate order consistent in numerator and denominator.",
  },
  {
    id: "pp17-43",
    subject: "math",
    topic: "Logaritmi",
    question:
      "Given that log10(7) = x, log10(2) = y and log10(3) = z, what is log10(14/3) expressed in terms of x, y and z?",
    options: ["(x+y)/2", "xy - z", "x + y - z", "xy/z", "xy + z"],
    correct: 2,
    explanation:
      "log(14/3) = log14 - log3 = log(7x2) - log3 = log7 + log2 - log3 = x + y - z.",
    studyTip:
      "Break a logarithm of a fraction/product into sums and differences using log(ab) = log a + log b and log(a/b) = log a - log b.",
  },
  {
    id: "pp17-44",
    subject: "math",
    topic: "Calcolo combinatorio",
    question:
      "How many ways are there to order the letters 'AABBC'? (For example, 'ACABB' and 'AABBC' are two ways.)",
    options: ["30", "5", "60", "116", "120"],
    correct: 0,
    explanation:
      "Permutations of AABBC = 5!/(2! x 2!) = 120/4 = 30 (divide by the repeats of the two A's and two B's).",
    studyTip:
      "For arrangements with repeated letters, divide n! by the factorial of each repeat count.",
  },
  /* ---------------- PHYSICS ---------------- */
  {
    id: "pp17-45",
    subject: "physics",
    topic: "Cinematica - Vettori",
    question:
      "A car starts at point X. It travels 3.0 km due east, then 4.0 km due south, then 6.0 km due west and finally 8.0 km due north. How far away is the car from point X at the end of this journey? [Treat the surface as flat.]",
    options: ["5.0 km", "2.0 km", "7.0 km", "10.0 km", "21.0 km"],
    correct: 0,
    explanation:
      "Net east-west: 3 east - 6 west = 3 km west. Net north-south: 8 north - 4 south = 4 km north. Resultant = sqrt(3^2 + 4^2) = 5.0 km.",
    studyTip:
      "For displacement, add the perpendicular components separately, then combine with Pythagoras.",
  },
  {
    id: "pp17-46",
    subject: "physics",
    topic: "Fluidi - Spinta di Archimede",
    question:
      "A solid wooden cube has sides of length a and the wood has density rho. The cube is completely immersed in a beaker of oil of density sigma, with its top surface horizontal. The gravitational field strength is g. What is the upward force (upthrust) on the cube due to the oil? [No oil is absorbed.]",
    options: ["(sigma - rho)a^3 g", "rho a^3", "sigma a^3", "sigma a^3 g", "rho a^3 g"],
    correct: 3,
    explanation:
      "Upthrust depends only on the displaced fluid: it equals the cube's volume times the oil's density times g, i.e. sigma a^3 g. The wood's density is irrelevant here.",
    studyTip:
      "Upthrust = (fluid density)(displaced volume)(g) — it depends on the fluid and submerged volume, never on the object's own density.",
  },
  {
    id: "pp17-47",
    subject: "physics",
    topic: "Termodinamica",
    question:
      "A fixed mass of an ideal gas undergoes a change in which it is supplied with 3500 J of thermal energy. At the same time the gas does 3500 J of work on its surroundings. Which type of change does the gas undergo?",
    options: ["adiabatic", "isomeric", "isochoric", "isobaric", "isothermal"],
    correct: 4,
    explanation:
      "Delta-U = Q - W = 3500 - 3500 = 0. For an ideal gas internal energy depends only on temperature, so Delta-U = 0 means Delta-T = 0 — an isothermal change.",
    studyTip:
      "Use the first law (Delta-U = Q - W); zero internal-energy change in an ideal gas means constant temperature (isothermal).",
  },
  {
    id: "pp17-48",
    subject: "physics",
    topic: "Elettricita - Effetto Joule",
    question:
      "A resistor has a resistance of 5.0 ohm. There is a direct current of 10 A in the resistor. What is the power dissipated by the resistor?",
    options: ["2500 W", "20 W", "250 W", "50 W", "500 W"],
    correct: 4,
    explanation:
      "P = I^2 R = 10^2 x 5 = 100 x 5 = 500 W.",
    studyTip:
      "When you know current and resistance, use P = I^2 R directly.",
  },
];
