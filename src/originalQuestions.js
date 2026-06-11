/* ============================================================
   ORIGINAL PRACTICE QUESTIONS — Quiz-only
   These are additional practice questions written for this app,
   NOT taken from official past papers. They are deliberately
   EXCLUDED from the full Simulation (60q/100min), which draws
   only from official past papers + the original base sets, so
   the Simulation stays a faithful mock of the real exam.

   They appear ONLY in the per-topic Quiz section, mixed in with
   everything else, to give extra practice volume.

   Each question follows the standard shape used across the app:
   { id, subject, topic, question, options[5], correct, explanation, studyTip }
   All numeric answers independently verified before writing.
   ============================================================ */

export const ORIGINAL_QUESTIONS = [
  /* ================= MATHEMATICS (18) ================= */
  {
    id: "oq-m1",
    subject: "math",
    topic: "Equazioni esponenziali",
    question: "Solve for x: 3^(2x−1) = 27",
    options: ["x = 1", "x = 1.5", "x = 2", "x = 2.5", "x = 3"],
    correct: 2,
    explanation:
      "Rewrite 27 as a power of 3: 27 = 3³. So 3^(2x−1) = 3³, which means the exponents must be equal: 2x−1 = 3 → 2x = 4 → x = 2.",
    studyTip:
      "For exponential equations, always try to rewrite BOTH sides with the SAME base first (here, both sides become powers of 3). Once the bases match, the equation reduces to a simple equation between the exponents — no logarithms needed.",
  },
  {
    id: "oq-m2",
    subject: "math",
    topic: "Sistemi di equazioni lineari",
    question: "If 2x + y = 11 and x − y = 1, what is the value of x + y?",
    options: ["5", "6", "7", "8", "9"],
    correct: 2,
    explanation:
      "Adding the two equations directly: (2x+y) + (x−y) = 11+1 → 3x = 12 → x = 4. Substituting into x−y=1: 4−y=1 → y=3. So x+y = 4+3 = 7.",
    studyTip:
      "Before solving for x and y individually, check if ADDING or SUBTRACTING the two equations directly gives you what's ASKED FOR. Here, the question asks for x+y — but adding the equations gives 3x=12 (not directly x+y). Still, once you have x and y separately, computing x+y is a quick final step — don't stop after finding just one variable.",
  },
  {
    id: "oq-m3",
    subject: "math",
    topic: "Geometria - Area del triangolo equilatero",
    question: "What is the area of an equilateral triangle with side length 6 cm?",
    options: ["18 cm²", "9√3 cm²", "12√3 cm²", "36 cm²", "6√3 cm²"],
    correct: 1,
    explanation:
      "The area of an equilateral triangle with side s is (√3/4)·s². With s=6: Area = (√3/4)×36 = 9√3 cm².",
    studyTip:
      "Memorise the equilateral triangle area formula (√3/4)·s² as a single unit — it comes up often enough on the IMAT that deriving it from scratch (splitting into two right triangles, using Pythagoras) every time wastes valuable seconds.",
  },
  {
    id: "oq-m4",
    subject: "math",
    topic: "Funzioni - Dominio di funzioni razionali",
    question: "What is the domain of f(x) = (x+2)/(x²−4)?",
    options: [
      "All real numbers",
      "x ≠ 2 and x ≠ −2",
      "x ≠ −2 only",
      "x ≠ 2 only",
      "x > 2 or x < −2",
    ],
    correct: 1,
    explanation:
      "The denominator x²−4 = (x−2)(x+2) cannot equal zero, so x ≠ 2 and x ≠ −2. Note that even though the numerator (x+2) shares a factor with the denominator — meaning the function SIMPLIFIES to 1/(x−2) for x≠−2 — the DOMAIN of the original expression as written still excludes x=−2 (it's a 'removable discontinuity', not a valid domain point).",
    studyTip:
      "For rational functions, the domain excludes wherever the DENOMINATOR equals zero — factor the denominator FIRST. Don't be tempted to simplify/cancel common factors with the numerator before stating the domain: even 'removable' discontinuities are still excluded from the domain of the ORIGINAL expression.",
  },
  {
    id: "oq-m5",
    subject: "math",
    topic: "Percentuali - Variazioni successive",
    question:
      "A price increases by 25%, and then the new price decreases by 20%. What is the overall percentage change from the original price?",
    options: ["+5%", "0% (no change)", "−5%", "+45%", "−45%"],
    correct: 1,
    explanation:
      "After a 25% increase, the price is ×1.25 of the original. After a 20% decrease on THAT new price, it's ×0.80 of the increased price. Combined factor: 1.25 × 0.80 = 1.00 — exactly the original price, so the overall change is 0%.",
    studyTip:
      "A useful pattern to recognise: increasing by x% then decreasing by y% (or vice versa) returns to the ORIGINAL value exactly when (1+x/100)×(1−y/100)=1. Here, 1.25×0.80=1 is a 'nice' pair worth remembering — it's a common setup for a 'looks like it changed, but didn't' trick question.",
  },
  {
    id: "oq-m6",
    subject: "math",
    topic: "Successioni - Somma di Gauss",
    question: "What is the sum of all integers from 1 to 50?",
    options: ["1225", "1275", "1325", "2500", "1250"],
    correct: 1,
    explanation:
      "Using the formula for the sum of the first n integers: Sum = n(n+1)/2 = 50×51/2 = 2550/2 = 1275.",
    studyTip:
      "The formula n(n+1)/2 (Gauss's sum) for 1+2+...+n is essential for quick mental math on the IMAT. Pair the first and last terms (1+50=51), second and second-last (2+49=51) — there are 25 such pairs, each summing to 51: 25×51=1275, the same result via a different route.",
  },
  {
    id: "oq-m7",
    subject: "math",
    topic: "Logaritmi - Proprietà della somma",
    question: "What is log₂(8) + log₂(4)?",
    options: ["4", "5", "6", "7", "12"],
    correct: 1,
    explanation:
      "log₂(8)=3 (since 2³=8) and log₂(4)=2 (since 2²=4). Sum = 3+2 = 5. Alternatively, using the product rule: log₂(8)+log₂(4)=log₂(8×4)=log₂(32)=5 (since 2⁵=32).",
    studyTip:
      "Two equally valid approaches: either evaluate each logarithm separately (if the individual values are 'nice' powers of the base, as here) and add, OR use log(a)+log(b)=log(a×b) to combine first and evaluate once. When both numbers are clean powers of the base, evaluating separately is often faster and less error-prone.",
  },
  {
    id: "oq-m8",
    subject: "math",
    topic: "Geometria - Diagonale del rettangolo",
    question: "A rectangle has sides of 6 cm and 8 cm. What is the length of its diagonal?",
    options: ["12 cm", "10 cm", "14 cm", "√48 cm", "7 cm"],
    correct: 1,
    explanation:
      "The diagonal of a rectangle forms the hypotenuse of a right triangle with the two sides as legs. By Pythagoras: diagonal = √(6²+8²) = √(36+64) = √100 = 10 cm.",
    studyTip:
      "6-8-10 is a scaled version of the famous 3-4-5 Pythagorean triple (×2). Recognising common Pythagorean triples (3-4-5, 5-12-13, 8-15-17, and their multiples) lets you skip the square root calculation entirely for many geometry questions.",
  },
  {
    id: "oq-m9",
    subject: "math",
    topic: "Probabilità - Carte da gioco",
    question:
      "A standard deck of 52 playing cards (4 suits, 13 ranks each) is shuffled. What is the probability of drawing an Ace OR a King?",
    options: ["1/13", "2/13", "1/26", "4/13", "1/52"],
    correct: 1,
    explanation:
      "There are 4 Aces and 4 Kings in a deck — these are mutually exclusive outcomes (a card can't be both), so we ADD their probabilities: P(Ace) + P(King) = 4/52 + 4/52 = 8/52 = 2/13.",
    studyTip:
      "For 'A or B' probability with mutually exclusive events (a card can't simultaneously be an Ace AND a King), simply ADD the favourable outcomes (4+4=8) over the total (52), then simplify the fraction. This is the addition rule for disjoint events — far simpler than the OR formula needed when events can overlap.",
  },
  {
    id: "oq-m10",
    subject: "math",
    topic: "Equazioni di secondo grado - Somma e prodotto delle radici",
    question:
      "For the equation x² − 7x + 12 = 0, what is the SUM of its two roots?",
    options: ["5", "7", "12", "−7", "−12"],
    correct: 1,
    explanation:
      "By Vieta's formulas, for x²+bx+c=0, the sum of roots = −b and the product of roots = c. Here b=−7, so sum of roots = −(−7) = 7. (You can verify: x²−7x+12=0 factors as (x−3)(x−4)=0, roots 3 and 4, sum=7.)",
    studyTip:
      "Vieta's formulas (sum of roots = −b/a, product of roots = c/a, for ax²+bx+c=0) let you answer 'sum/product of roots' questions WITHOUT solving the quadratic at all — useful when the question only asks for the sum or product, not the individual roots.",
  },
  {
    id: "oq-m11",
    subject: "math",
    topic: "Funzioni - Composizione",
    question: "If f(x) = 2x+1 and g(x) = x², what is f(g(2))?",
    options: ["5", "8", "9", "10", "16"],
    correct: 2,
    explanation:
      "Work from the INSIDE out: g(2) = 2² = 4. Then f(g(2)) = f(4) = 2(4)+1 = 9.",
    studyTip:
      "For composite functions f(g(x)), ALWAYS evaluate the INNERMOST function first (here, g(2)=4), then feed that RESULT into the outer function (f(4)). Trying to substitute symbolically first (f(g(x))=2(x²)+1, then plug in x=2) gives the same answer but is more error-prone for numeric evaluation — work inside-out with numbers when possible.",
  },
  {
    id: "oq-m12",
    subject: "math",
    topic: "Geometria - Area del cerchio dal diametro",
    question: "A circle has a diameter of 10 cm. What is its area?",
    options: ["10π cm²", "20π cm²", "25π cm²", "50π cm²", "100π cm²"],
    correct: 2,
    explanation:
      "Radius = diameter/2 = 10/2 = 5 cm. Area = πr² = π(5)² = 25π cm².",
    studyTip:
      "Whenever a problem gives the DIAMETER but the area formula needs the RADIUS, the very first step is always: radius = diameter/2. Forgetting this halving step (and using the diameter directly as 'r') is the single most common error on circle-area questions — it would give 100π here, a tempting wrong answer that's exactly 4× too large.",
  },
  {
    id: "oq-m13",
    subject: "math",
    topic: "Sistemi di disequazioni",
    question: "What is the solution set of the system: x > 2 AND x < 7?",
    options: ["x < 2", "(2, 7)", "x > 7", "[2, 7]", "x ≠ 2 and x ≠ 7"],
    correct: 1,
    explanation:
      "Both conditions must hold simultaneously (AND = intersection). x>2 means x is to the right of 2; x<7 means x is to the left of 7. The overlap is all x strictly between 2 and 7, written as the open interval (2,7). Note: round brackets () mean the endpoints are EXCLUDED (strict inequalities >, <); square brackets [] would mean included (≥, ≤).",
    studyTip:
      "AND between two inequalities = INTERSECTION (the overlap of both ranges). OR would mean UNION (everything covered by EITHER range). Drawing a quick number line with both conditions shaded helps visualise the intersection instantly — and watch whether the original inequalities are strict (>,<, giving open intervals with parentheses) or non-strict (≥,≤, giving closed intervals with brackets).",
  },
  {
    id: "oq-m14",
    subject: "math",
    topic: "Statistica - Moda",
    question: "What is the mode of this data set: 3, 5, 5, 7, 5, 8, 2, 5?",
    options: ["3", "5", "7", "8", "There is no mode"],
    correct: 1,
    explanation:
      "The mode is the value that appears MOST FREQUENTLY. Counting occurrences: 3 appears once, 5 appears FOUR times, 7 once, 8 once, 2 once. The mode is 5.",
    studyTip:
      "Mode = most frequent value (can have NONE if all values are unique, ONE, or even MULTIPLE if there's a tie for most frequent — 'bimodal'/'multimodal'). Don't confuse mode with mean (average) or median (middle value when sorted) — these three measures of central tendency answer different questions and rarely give the same number.",
  },
  {
    id: "oq-m15",
    subject: "math",
    topic: "Moto - Velocità media",
    question:
      "A car travels 120 km in 2 hours, then a further 180 km in 3 hours. What is its AVERAGE speed for the whole journey?",
    options: ["50 km/h", "55 km/h", "60 km/h", "65 km/h", "70 km/h"],
    correct: 2,
    explanation:
      "Average speed = TOTAL distance / TOTAL time = (120+180)/(2+3) = 300/5 = 60 km/h. (Note: this is NOT the same as averaging the two individual speeds — 120/2=60 km/h and 180/3=60 km/h happen to both be 60 here, so the average of speeds also gives 60, but this coincidence wouldn't hold if the speeds differed.)",
    studyTip:
      "Average speed is ALWAYS total distance ÷ total time — never the simple average of individual speeds (unless, by coincidence, the time intervals are equal AND/OR the speeds happen to be the same, as in this specific question). When in doubt, always go back to the total distance/total time definition.",
  },
  {
    id: "oq-m16",
    subject: "math",
    topic: "Equazioni con valore assoluto",
    question: "Solve: |x − 3| = 5",
    options: ["x = 8 only", "x = −2 only", "x = 8 or x = −2", "x = 2 or x = −8", "No solution"],
    correct: 2,
    explanation:
      "|x−3|=5 means the EXPRESSION INSIDE the absolute value equals either +5 or −5: x−3=5 → x=8, OR x−3=−5 → x=−2. Both values are valid solutions.",
    studyTip:
      "|expr| = k (for k>0) ALWAYS splits into TWO equations: expr=k AND expr=−k. Solve each separately — both solutions are typically valid (unless an additional domain restriction excludes one). Forgetting the negative case (only finding x=8, not x=−2) is the most common error.",
  },
  {
    id: "oq-m17",
    subject: "math",
    topic: "Funzioni esponenziali - Crescita",
    question:
      "A population of bacteria doubles every 3 hours. Starting from 100 bacteria, how many will there be after 9 hours?",
    options: ["300", "600", "700", "800", "900"],
    correct: 3,
    explanation:
      "9 hours ÷ 3 hours per doubling = 3 doublings. Population = 100 × 2³ = 100 × 8 = 800.",
    studyTip:
      "For 'doubles every T time units' problems: (1) compute (elapsed time)/T = number of doublings, (2) multiply the initial value by 2^(number of doublings). The exponent must be a count of FULL doubling periods — here 9÷3=3 is a clean integer, but if it weren't, you'd use a fractional exponent.",
  },
  {
    id: "oq-m18",
    subject: "math",
    topic: "Geometria - Angoli interni dei poligoni",
    question: "What is the measure of EACH interior angle of a regular hexagon?",
    options: ["60°", "90°", "100°", "120°", "150°"],
    correct: 3,
    explanation:
      "Sum of interior angles of an n-sided polygon = (n−2)×180°. For a hexagon, n=6: sum = (6−2)×180° = 4×180° = 720°. Since a REGULAR hexagon has all angles equal, each angle = 720°/6 = 120°.",
    studyTip:
      "Two-step formula for regular polygons: (1) total interior angle sum = (n−2)×180°, (2) divide by n (number of sides/angles) for EACH angle in a regular (equal-angled) polygon. The hexagon's 120° per angle is worth memorising directly, since hexagons appear often in geometry questions (honeycomb patterns, tiling).",
  },

  /* ================= LOGIC (15) ================= */
  {
    id: "oq-l1",
    subject: "logic",
    topic: "Sillogismi - Sillogismo valido (Barbara)",
    question:
      "Premise 1: All mammals are warm-blooded. Premise 2: All dogs are mammals. What can be validly concluded?",
    options: [
      "All dogs are warm-blooded.",
      "All warm-blooded animals are dogs.",
      "Some mammals are not dogs.",
      "All warm-blooded animals are mammals.",
      "No dogs are warm-blooded.",
    ],
    correct: 0,
    explanation:
      "This is the classic valid syllogism form 'Barbara': All B are C (mammals→warm-blooded), All A are B (dogs→mammals), therefore All A are C (dogs→warm-blooded). The chain A→B→C transfers directly to A→C.",
    studyTip:
      "When you see 'All A are B' and 'All B are C', you can chain them into 'All A are C' — think of it as a transitive relationship, like A⊆B⊆C implies A⊆C. Watch out for options that REVERSE the direction (option B, D) — 'All A are B' does NOT mean 'All B are A'.",
  },
  {
    id: "oq-l2",
    subject: "logic",
    topic: "Sequenze numeriche - Quadrati perfetti",
    question: "What is the next number in the sequence: 1, 4, 9, 16, 25, ?",
    options: ["30", "32", "36", "49", "30.5"],
    correct: 2,
    explanation:
      "These are perfect squares: 1²=1, 2²=4, 3²=9, 4²=16, 5²=25. The next term is 6²=36.",
    studyTip:
      "Recognise the first several perfect squares (1,4,9,16,25,36,49,64,81,100) on sight — sequences of perfect squares are extremely common, and instant recognition saves the time of computing differences between terms.",
  },
  {
    id: "oq-l3",
    subject: "logic",
    topic: "Sequenze numeriche - Regola moltiplicativa",
    question: "What is the next number in the sequence: 2, 5, 11, 23, 47, ?",
    options: ["83", "94", "95", "96", "101"],
    correct: 2,
    explanation:
      "Each term follows the rule 'previous × 2, plus 1': 2×2+1=5, 5×2+1=11, 11×2+1=23, 23×2+1=47, 47×2+1=95.",
    studyTip:
      "When differences between consecutive terms keep DOUBLING (5−2=3, 11−5=6, 23−11=12, 47−23=24 — each difference is 2× the previous), suspect a 'multiply by 2 (and add a constant)' rule rather than a purely additive pattern. Verify by checking if term×2+constant = next term consistently.",
  },
  {
    id: "oq-l4",
    subject: "logic",
    topic: "Problemi di età - Rapporto futuro",
    question:
      "Today, Anna is 3 times as old as Luca. In 10 years, Anna will be twice as old as Luca. How old is Luca today?",
    options: ["5", "8", "10", "12", "15"],
    correct: 2,
    explanation:
      "Let Luca = x today, so Anna = 3x. In 10 years: Anna = 3x+10, Luca = x+10. The new ratio is 2:1, so 3x+10 = 2(x+10) → 3x+10 = 2x+20 → x = 10.",
    studyTip:
      "Age problems follow a reusable template: define variables for 'now' using the GIVEN ratio (Anna=3x since she's '3 times' Luca), then write BOTH people's ages '10 years from now' by adding 10 to each, and set up the equation using the SECOND ratio given. The structure is identical regardless of the specific numbers.",
  },
  {
    id: "oq-l5",
    subject: "logic",
    topic: "Problemi - Moto relativo (avvicinamento)",
    question:
      "Two trains start 360 km apart and move toward each other, one at 80 km/h and the other at 100 km/h. How long until they meet?",
    options: ["1.5 hours", "1.8 hours", "2 hours", "2.5 hours", "3.6 hours"],
    correct: 2,
    explanation:
      "When two objects move TOWARD each other, their speeds ADD for the purpose of closing the gap: combined closing speed = 80+100 = 180 km/h. Time to meet = distance/combined speed = 360/180 = 2 hours.",
    studyTip:
      "'Moving toward each other' → ADD the speeds (combined closing speed). 'One chasing the other, same direction' → SUBTRACT the speeds (relative speed = difference). Identifying which scenario applies is the key first step — the arithmetic afterward is simple division.",
  },
  {
    id: "oq-l6",
    subject: "logic",
    topic: "Insiemi - Diagrammi di Venn",
    question:
      "In a group of 50 people, 30 speak English and 25 speak French, with 10 people speaking BOTH languages. How many people speak NEITHER language?",
    options: ["0", "5", "10", "15", "20"],
    correct: 1,
    explanation:
      "By inclusion-exclusion, people speaking AT LEAST ONE language = (English) + (French) − (Both) = 30+25−10 = 45. People speaking NEITHER = total − at least one = 50−45 = 5.",
    studyTip:
      "The inclusion-exclusion formula |A∪B| = |A|+|B|−|A∩B| prevents DOUBLE-COUNTING the people in both groups. A common error is simply adding 30+25=55 (impossible since it exceeds the total of 50!) — the moment a sum exceeds the total population, that's a signal you've forgotten to subtract the overlap.",
  },
  {
    id: "oq-l7",
    subject: "logic",
    topic: "Sequenze numeriche - Fibonacci",
    question: "What is the next number in the sequence: 1, 1, 2, 3, 5, 8, ?",
    options: ["10", "11", "12", "13", "16"],
    correct: 3,
    explanation:
      "This is the Fibonacci sequence, where each term is the SUM of the two preceding terms: 1+1=2, 1+2=3, 2+3=5, 3+5=8, 5+8=13.",
    studyTip:
      "Recognise the Fibonacci pattern (each term = sum of the previous two) on sight — it's one of the most famous sequences and appears occasionally on logic sections. The 'rule' to check is simply: does term[n] = term[n-1] + term[n-2]?",
  },
  {
    id: "oq-l8",
    subject: "logic",
    topic: "Sillogismi - Negazione universale (Celarent)",
    question:
      "Premise 1: No reptiles are warm-blooded. Premise 2: All snakes are reptiles. What can be validly concluded?",
    options: [
      "No snakes are warm-blooded.",
      "All warm-blooded animals are snakes.",
      "Some snakes are warm-blooded.",
      "No reptiles are snakes.",
      "All snakes are warm-blooded.",
    ],
    correct: 0,
    explanation:
      "This is the valid syllogism form 'Celarent': No B are C (reptiles→not warm-blooded), All A are B (snakes→reptiles), therefore No A are C (snakes→not warm-blooded). If NOTHING in category B has property C, and A is entirely WITHIN B, then nothing in A has property C either.",
    studyTip:
      "'No B are C' + 'All A are B' ⊢ 'No A are C'. Visualise it with circles: if the B-circle and C-circle don't overlap AT ALL, and the A-circle is COMPLETELY INSIDE the B-circle, then A can't overlap with C either — A is 'protected' from C by being fully inside B.",
  },
  {
    id: "oq-l9",
    subject: "logic",
    topic: "Problemi - Lavoro combinato (tassi)",
    question:
      "Worker A can complete a task alone in 6 hours. Worker B can complete the same task alone in 3 hours. How long would it take them to complete the task WORKING TOGETHER?",
    options: ["1.5 hours", "2 hours", "2.5 hours", "4 hours", "4.5 hours"],
    correct: 1,
    explanation:
      "Express each worker's rate as 'fraction of task per hour': A's rate = 1/6 task/hour, B's rate = 1/3 task/hour. Combined rate = 1/6 + 1/3 = 1/6 + 2/6 = 3/6 = 1/2 task/hour. Time to complete 1 whole task at this combined rate = 1 ÷ (1/2) = 2 hours.",
    studyTip:
      "For 'working together' problems, convert each person's time into a RATE (1/time = fraction of the job done per unit time), ADD the rates, then take the RECIPROCAL of the combined rate to get the combined TIME. Never average the times directly (e.g. (6+3)/2=4.5 is WRONG) — rates add, times don't.",
  },
  {
    id: "oq-l10",
    subject: "logic",
    topic: "Sequenze di lettere - Salto regolare",
    question: "What letter comes next in the sequence: A, C, E, G, ?",
    options: ["H", "I", "J", "F", "K"],
    correct: 1,
    explanation:
      "The sequence skips one letter each time: A(1)→C(3)→E(5)→G(7), each jumping +2 in alphabetical position. The next position is 7+2=9, which corresponds to 'I'.",
    studyTip:
      "Convert letters to their alphabetical position numbers (A=1, B=2, C=3...) to reveal the underlying NUMERIC pattern (here, +2 each time: 1,3,5,7,9). Once you spot the numeric rule, convert the answer back to a letter.",
  },
  {
    id: "oq-l11",
    subject: "logic",
    topic: "Problemi - Proporzionalità inversa (lavoratori)",
    question:
      "8 workers can complete a job in 15 days. How many days would it take 12 workers to complete the same job, working at the same rate?",
    options: ["8 days", "9 days", "10 days", "12 days", "20 days"],
    correct: 2,
    explanation:
      "Total 'worker-days' of effort = 8 workers × 15 days = 120 worker-days (constant for this job). With 12 workers: days = 120 ÷ 12 = 10 days.",
    studyTip:
      "'Workers and days' problems are INVERSE proportions: MORE workers means FEWER days, and the product (workers × days) stays CONSTANT for a fixed amount of work. Compute this constant product first, then divide by the new number of workers.",
  },
  {
    id: "oq-l12",
    subject: "logic",
    topic: "Sillogismi - Quantificatore esistenziale (Darii)",
    question:
      "Premise 1: Some students are athletes. Premise 2: All athletes are disciplined. What can be validly concluded?",
    options: [
      "Some students are disciplined.",
      "All students are disciplined.",
      "All disciplined people are students.",
      "No students are disciplined.",
      "All athletes are students.",
    ],
    correct: 0,
    explanation:
      "This is the valid syllogism form 'Darii': Some A are B (some students are athletes), All B are C (all athletes are disciplined), therefore Some A are C (some students are disciplined) — at least the students who ARE athletes must be disciplined, by the second premise.",
    studyTip:
      "'Some A are B' + 'All B are C' ⊢ 'Some A are C'. The 'some' from the first premise CARRIES THROUGH to the conclusion — you can never strengthen 'some' into 'all' (option B overreaches) just because the second premise uses 'all'. The weakest quantifier in the premises limits the strength of the conclusion.",
  },
  {
    id: "oq-l13",
    subject: "logic",
    topic: "Percentuali - Sondaggi e indecisi",
    question:
      "In a survey, 60% of respondents prefer candidate A, 25% prefer candidate B, and the rest are undecided. Out of 200 people surveyed, how many are undecided?",
    options: ["10", "20", "30", "40", "50"],
    correct: 2,
    explanation:
      "Percentage undecided = 100% − 60% − 25% = 15%. Number undecided = 15% of 200 = 0.15 × 200 = 30.",
    studyTip:
      "When percentages are described as parts of a whole that must sum to 100%, find the MISSING percentage by subtraction FIRST (100−60−25=15%), then apply that percentage to the total population. Don't try to compute 'undecided' as some combination of the other groups directly.",
  },
  {
    id: "oq-l14",
    subject: "logic",
    topic: "Sequenze numeriche - Numeri primi",
    question: "What is the next number in the sequence: 2, 3, 5, 7, 11, ?",
    options: ["12", "13", "14", "15", "17"],
    correct: 1,
    explanation:
      "This is the sequence of prime numbers (numbers divisible only by 1 and themselves): 2, 3, 5, 7, 11, 13. (12, 14, 15 are all divisible by smaller numbers — not prime; 17 is prime but SKIPS 13.)",
    studyTip:
      "Memorise the first several primes (2,3,5,7,11,13,17,19,23,29) for quick recognition. When checking if a number is the 'next prime', test divisibility by smaller primes (2,3,5,7...) up to its square root — for 12: divisible by 2,3 (not prime); for 13: not divisible by 2,3 (and √13<4, so no need to check further) → prime.",
  },
  {
    id: "oq-l15",
    subject: "logic",
    topic: "Deduzione - Confronti di ordine",
    question:
      "Marco is taller than Luca. Luca is taller than Sara. Which of the following must be true?",
    options: [
      "Sara is the shortest of the three.",
      "Marco is the shortest of the three.",
      "Sara is taller than Marco.",
      "Luca is the tallest of the three.",
      "Marco and Sara are the same height.",
    ],
    correct: 0,
    explanation:
      "From 'Marco > Luca' and 'Luca > Sara' (using > for 'taller than'), by transitivity: Marco > Luca > Sara. This places Sara at the BOTTOM of the height ordering — Sara is the shortest.",
    studyTip:
      "Chain comparison statements ('X > Y' and 'Y > Z') into a single ordering (X > Y > Z) using transitivity. Once you have the full chain, identifying 'tallest'/'shortest'/'middle' is just reading off the two ends and the centre of that chain — Marco (first) is tallest, Sara (last) is shortest, Luca (middle) is in between.",
  },

  /* ================= CHEMISTRY (18) ================= */
  {
    id: "oq-c1",
    subject: "chemistry",
    topic: "Struttura atomica - Numero di massa",
    question: "An atom has 6 protons and 8 neutrons. What is its mass number?",
    options: ["6", "8", "14", "2", "48"],
    correct: 2,
    explanation:
      "Mass number (A) = protons + neutrons = 6 + 8 = 14. (This describes carbon-14, a well-known radioactive isotope of carbon used in radiocarbon dating.)",
    studyTip:
      "Mass number = protons + neutrons (always add, regardless of which element it is). The atomic number (which identifies the ELEMENT, here carbon since Z=6) equals protons only — don't confuse the two numbers, which is a frequent source of careless errors.",
  },
  {
    id: "oq-c2",
    subject: "chemistry",
    topic: "Mole - Calcolo da massa",
    question: "How many moles are present in 88 g of CO₂? (Molar mass of CO₂ = 44 g/mol)",
    options: ["0.5 mol", "1 mol", "2 mol", "4 mol", "44 mol"],
    correct: 2,
    explanation: "Moles = mass / molar mass = 88 / 44 = 2 mol.",
    studyTip:
      "The 'moles = mass/molar mass' formula is the most fundamental conversion in stoichiometry. When the numbers divide evenly (88/44=2 exactly), it's a strong signal you've set up the calculation correctly — messy non-terminating decimals in a 'simple' question often indicate an arithmetic slip.",
  },
  {
    id: "oq-c3",
    subject: "chemistry",
    topic: "Soluzioni - Calcolo della molarità",
    question: "0.5 mol of NaCl is dissolved in water to make 250 mL of solution. What is the molarity?",
    options: ["0.5 M", "1 M", "2 M", "0.125 M", "4 M"],
    correct: 2,
    explanation:
      "Molarity = moles / volume(L) = 0.5 / 0.250 = 2 M.",
    studyTip:
      "Always convert volume to LITRES before dividing (250 mL = 0.250 L). Dividing 0.5 by 250 directly (forgetting the unit conversion) would give a wrong answer that's smaller by a factor of 1000 — a very common slip when the volume is given in mL.",
  },
  {
    id: "oq-c4",
    subject: "chemistry",
    topic: "pH e pOH - Relazione e concentrazione di OH⁻",
    question: "A solution has pH = 9. What is its [OH⁻] concentration?",
    options: ["10⁻⁹ M", "10⁻⁵ M", "10⁻⁷ M", "9 M", "5 M"],
    correct: 1,
    explanation:
      "pOH = 14 − pH = 14 − 9 = 5. Then [OH⁻] = 10^(−pOH) = 10⁻⁵ M.",
    studyTip:
      "Two-step chain for pH↔[OH⁻] questions: (1) pOH = 14 − pH, (2) [OH⁻] = 10^(−pOH). Don't try to jump directly from pH to [OH⁻] with a single formula — going through pOH as an intermediate step keeps the logic clear and avoids sign errors.",
  },
  {
    id: "oq-c5",
    subject: "chemistry",
    topic: "Reazioni - Bilanciamento (combustione)",
    question: "Balance the combustion of methane: __ CH₄ + __ O₂ → __ CO₂ + __ H₂O. What are the coefficients (in order)?",
    options: ["1, 1, 1, 1", "1, 2, 1, 2", "2, 1, 2, 2", "1, 2, 1, 1", "2, 4, 2, 4"],
    correct: 1,
    explanation:
      "CH₄ + 2O₂ → CO₂ + 2H₂O. Check: Carbon 1=1 ✓. Hydrogen 4=2×2=4 ✓. Oxygen on left = 2×2=4; on right = 2(CO₂)+2×1(H₂O)=2+2=4 ✓.",
    studyTip:
      "For combustion of hydrocarbons (CₓHᵧ + O₂ → CO₂ + H₂O), balance C first (coefficient of CO₂ = x), then H (coefficient of H₂O = y/2), and balance O LAST by counting total oxygen atoms needed on the product side and dividing by 2 for the O₂ coefficient. Methane (CH₄, x=1,y=4) gives the simplest case: CO₂ coefficient=1, H₂O coefficient=4/2=2, then O₂=(2×1+2)/2=2.",
  },
  {
    id: "oq-c6",
    subject: "chemistry",
    topic: "Numeri di ossidazione",
    question: "What is the oxidation number of nitrogen (N) in HNO₃?",
    options: ["−3", "+3", "+5", "−5", "+1"],
    correct: 2,
    explanation:
      "In HNO₃, H is +1 and each O is −2 (×3 oxygens = −6). The molecule is neutral overall, so: (+1) + N + (−6) = 0 → N = +5.",
    studyTip:
      "Standard oxidation number assignments: H is almost always +1 (except in metal hydrides), O is almost always −2 (except in peroxides). Sum all known oxidation numbers, set the total equal to the molecule's overall charge (0 for neutral molecules), and solve for the unknown element by simple algebra.",
  },
  {
    id: "oq-c7",
    subject: "chemistry",
    topic: "Gas ideali - Legge di Boyle",
    question:
      "A gas occupies 4 L at a pressure of 2 atm. At constant temperature, if the volume is compressed to 2 L, what is the new pressure?",
    options: ["1 atm", "2 atm", "4 atm", "8 atm", "0.5 atm"],
    correct: 2,
    explanation:
      "Boyle's Law: P₁V₁ = P₂V₂ (constant T). 2×4 = P₂×2 → 8 = 2P₂ → P₂ = 4 atm.",
    studyTip:
      "Boyle's Law (PV=constant at fixed T) means halving the volume DOUBLES the pressure (and vice versa) — P and V move in OPPOSITE directions. As a sanity check, the PRODUCT P×V should be the SAME before and after: 2×4=8 and 4×2=8 ✓.",
  },
  {
    id: "oq-c8",
    subject: "chemistry",
    topic: "Configurazione elettronica - Capacità dei gusci",
    question: "What is the maximum number of electrons that can occupy the n=2 shell (2s + 2p subshells combined)?",
    options: ["2", "4", "6", "8", "10"],
    correct: 3,
    explanation:
      "The 2s subshell holds a maximum of 2 electrons, and the 2p subshell holds a maximum of 6 electrons. Combined: 2+6 = 8.",
    studyTip:
      "Subshell capacities to memorise: s=2, p=6, d=10, f=14 (each is 2× the number of orbitals in that subshell: s has 1 orbital, p has 3, d has 5, f has 7). For shell n=2, only s and p subshells exist (2s+2p=2+6=8) — shell n=1 has only 1s (capacity 2), and n=3 adds d (capacity 2+6+10=18).",
  },
  {
    id: "oq-c9",
    subject: "chemistry",
    topic: "Tipi di reazione - Decomposizione",
    question: "The reaction 2H₂O → 2H₂ + O₂ is an example of:",
    options: ["A synthesis (combination) reaction", "A decomposition reaction", "A single displacement reaction", "A double displacement reaction", "A neutralisation reaction"],
    correct: 1,
    explanation:
      "One compound (H₂O) breaks down into TWO simpler substances (H₂ and O₂) — this is the definition of a DECOMPOSITION reaction (AB → A + B).",
    studyTip:
      "Reaction type by 'shape': SYNTHESIS = A+B→AB (combine into one). DECOMPOSITION = AB→A+B (one breaks into many) — the OPPOSITE of synthesis. SINGLE DISPLACEMENT = A+BC→AC+B (one element swaps places). DOUBLE DISPLACEMENT = AB+CD→AD+CB (ions swap partners). Count the number of substances on EACH side to quickly identify the type: 1→2 is decomposition, 2→1 is synthesis.",
  },
  {
    id: "oq-c10",
    subject: "chemistry",
    topic: "Stechiometria - Rapporti molari",
    question: "Given the reaction 2Mg + O₂ → 2MgO, how many moles of O₂ are needed to react completely with 6 moles of Mg?",
    options: ["1.5 mol", "2 mol", "3 mol", "6 mol", "12 mol"],
    correct: 2,
    explanation:
      "From the balanced equation, the ratio Mg:O₂ = 2:1. So moles O₂ needed = (moles Mg) × (1/2) = 6 × (1/2) = 3 mol.",
    studyTip:
      "Set up stoichiometry as a simple ratio/proportion: (coefficient of substance you HAVE) : (coefficient of substance you WANT) = (amount you have) : (amount you want). Here 2(Mg):1(O₂) = 6(Mg):x(O₂) → x = 6×(1/2) = 3. This proportional approach works for any stoichiometry conversion.",
  },
  {
    id: "oq-c11",
    subject: "chemistry",
    topic: "Soluzioni - Diluizioni (volume finale)",
    question: "100 mL of a 2 M solution is diluted to a final concentration of 0.5 M. What is the FINAL volume?",
    options: ["200 mL", "300 mL", "400 mL", "500 mL", "50 mL"],
    correct: 2,
    explanation:
      "M₁V₁ = M₂V₂ → 2 × 100 = 0.5 × V₂ → V₂ = 200/0.5 = 400 mL.",
    studyTip:
      "This question asks for the FINAL volume directly (unlike some dilution questions that ask for water ADDED, requiring a subtraction step afterward). Always re-read what's being asked: 'final volume' (just solve M₁V₁=M₂V₂ for V₂) vs. 'water added' (V₂ minus V₁, an extra step).",
  },
  {
    id: "oq-c12",
    subject: "chemistry",
    topic: "Tavola periodica - Andamento dell'elettronegatività",
    question: "In the periodic table, electronegativity generally increases going:",
    options: [
      "from left to right across a period, and from bottom to top within a group",
      "from right to left across a period, and from top to bottom within a group",
      "from left to right across a period, and from top to bottom within a group",
      "from right to left across a period, and from bottom to top within a group",
      "Electronegativity does not follow any periodic trend",
    ],
    correct: 0,
    explanation:
      "Electronegativity INCREASES across a period (left to right, e.g. from Li to F) as nuclear charge increases while atomic radius decreases (electrons are pulled more strongly). It DECREASES down a group (top to bottom) as atomic radius increases (outer electrons are farther from the nucleus, less strongly attracted) — equivalently, it INCREASES going UP a group (bottom to top).",
    studyTip:
      "Fluorine (top-right of the periodic table, excluding noble gases) is the most electronegative element — this single fact anchors the whole trend: electronegativity increases TOWARD fluorine's position, i.e. left→right across periods AND bottom→top within groups.",
  },
  {
    id: "oq-c13",
    subject: "chemistry",
    topic: "Polarità delle molecole - Geometria molecolare",
    question: "Why is the CO₂ molecule NON-POLAR overall, even though each individual C=O bond is polar?",
    options: [
      "The molecule is linear and symmetric, so the two bond dipoles point in opposite directions and cancel out",
      "Carbon and oxygen have identical electronegativity",
      "CO₂ contains no covalent bonds",
      "The C=O bonds are not actually polar",
      "CO₂ molecules do not exist in a fixed geometry",
    ],
    correct: 0,
    explanation:
      "CO₂ has a LINEAR geometry (O=C=O, 180° bond angle). Each C=O bond IS polar (oxygen is more electronegative, pulling electron density toward itself), creating a bond dipole pointing toward each oxygen. But because the molecule is linear and symmetric, these two EQUAL and OPPOSITE bond dipoles CANCEL EACH OTHER OUT, resulting in a net molecular dipole moment of ZERO — the molecule is non-polar overall.",
    studyTip:
      "Overall molecular polarity depends on BOTH bond polarity AND molecular GEOMETRY/symmetry. A molecule can have polar BONDS but be a NON-POLAR molecule overall if the geometry causes the bond dipoles to cancel by symmetry (linear CO₂, trigonal planar BF₃, tetrahedral CCl₄ are classic examples). Don't assume 'has polar bonds' automatically means 'is a polar molecule'.",
  },
  {
    id: "oq-c14",
    subject: "chemistry",
    topic: "Equilibrio chimico - Calcolo di Kc",
    question:
      "For the reaction A + B ⇌ C + D, Kc = 4. At equilibrium, [A] = [B] = 2 M. If [C] = [D] = x at equilibrium, what is x?",
    options: ["1 M", "2 M", "4 M", "8 M", "16 M"],
    correct: 2,
    explanation:
      "Kc = [C][D] / ([A][B]) = x² / (2×2) = x²/4. Setting Kc=4: x²/4 = 4 → x² = 16 → x = 4 M.",
    studyTip:
      "Write the Kc expression FIRST (products over reactants, each raised to its stoichiometric coefficient — here all coefficients are 1, so it's a simple ratio), substitute the KNOWN equilibrium concentrations, and solve the resulting equation for the unknown. Taking the square root at the end (x²=16→x=4) is straightforward when the unknown appears squared due to two IDENTICAL unknown concentrations.",
  },
  {
    id: "oq-c15",
    subject: "chemistry",
    topic: "Termochimica - Reazioni esotermiche/endotermiche",
    question: "A reaction releases heat to its surroundings as it proceeds. This reaction is classified as:",
    options: ["Exothermic, with ΔH < 0", "Endothermic, with ΔH > 0", "Exothermic, with ΔH > 0", "Endothermic, with ΔH < 0", "Neither — heat release doesn't relate to ΔH"],
    correct: 0,
    explanation:
      "A reaction that RELEASES heat to the surroundings is EXOTHERMIC (exo = 'out'). By convention, the enthalpy change ΔH is NEGATIVE for exothermic reactions (the system loses energy/enthalpy, which flows out as heat).",
    studyTip:
      "Exo- = energy goes OUT (released, ΔH negative). Endo- = energy goes IN (absorbed, ΔH positive) — the same Greek-root logic as 'exergonic/endergonic' in biology. Linking these parallel vocabulary pairs across chemistry and biology reinforces both.",
  },
  {
    id: "oq-c16",
    subject: "chemistry",
    topic: "Mole - Conteggio di atomi in un composto",
    question: "How many atoms (of all types combined) are present in ONE molecule of H₂SO₄?",
    options: ["3", "5", "6", "7", "9"],
    correct: 3,
    explanation:
      "H₂SO₄ contains: 2 H atoms + 1 S atom + 4 O atoms = 2+1+4 = 7 atoms total per molecule.",
    studyTip:
      "When counting 'total atoms in a formula', simply ADD UP all the subscripts (treating an element with no subscript as having an implicit '1'). H₂SO₄: H has subscript 2, S has implicit 1, O has subscript 4 → 2+1+4=7. This is purely a counting exercise, not a chemistry concept — but it's a frequent setup step for Avogadro's-number-based questions.",
  },
  {
    id: "oq-c17",
    subject: "chemistry",
    topic: "Acidi e basi - Forza relativa",
    question: "Which of the following best describes the difference between HCl and CH₃COOH (acetic acid) in water?",
    options: [
      "HCl is a strong acid that dissociates completely; CH₃COOH is a weak acid that only partially dissociates",
      "Both are strong acids that dissociate completely",
      "HCl is a weak acid; CH₃COOH is a strong acid",
      "Neither dissociates in water",
      "Both are bases, not acids",
    ],
    correct: 0,
    explanation:
      "HCl is a STRONG acid: in water, essentially 100% of HCl molecules dissociate into H⁺ and Cl⁻. CH₃COOH (acetic acid, found in vinegar) is a WEAK acid: only a small fraction of molecules dissociate at any given time, with most remaining as intact CH₃COOH molecules in equilibrium with H⁺ and CH₃COO⁻.",
    studyTip:
      "'Strong vs weak' acid/base refers to the DEGREE OF DISSOCIATION in water, NOT to concentration (a 'strong acid' can be dilute, a 'weak acid' can be concentrated — these are independent properties). The handful of common strong acids (HCl, HNO₃, H₂SO₄, HBr, HI, HClO₄) are worth memorising as a list — virtually everything else encountered is a weak acid.",
  },
  {
    id: "oq-c18",
    subject: "chemistry",
    topic: "Cinetica chimica - Effetto della temperatura",
    question: "How does increasing the temperature of a reaction mixture generally affect the rate of reaction?",
    options: [
      "It increases the rate, because particles move faster and collide more frequently and energetically",
      "It decreases the rate, because particles become less reactive at higher temperatures",
      "It has no effect on rate, only on equilibrium position",
      "It only affects endothermic reactions, not exothermic ones",
      "It decreases the activation energy required",
    ],
    correct: 0,
    explanation:
      "Increasing temperature gives particles more KINETIC ENERGY, causing them to move faster. This results in MORE FREQUENT collisions AND a greater proportion of collisions having enough energy to exceed the activation energy (more 'effective' collisions) — both effects increase the reaction rate.",
    studyTip:
      "Temperature affects rate through TWO combined mechanisms: (1) more collisions overall (faster-moving particles meet more often), and (2) a higher FRACTION of those collisions have energy ≥ activation energy (effective collisions). Note temperature does NOT change the activation energy itself (option E is wrong) — it changes how many particles have ENOUGH energy to overcome that fixed barrier.",
  },

  /* ================= PHYSICS (15) ================= */
  {
    id: "oq-p1",
    subject: "physics",
    topic: "Cinematica - Accelerazione costante",
    question:
      "An object starts from rest and accelerates at 4 m/s². What is its velocity after 3 seconds?",
    options: ["4 m/s", "7 m/s", "8 m/s", "12 m/s", "16 m/s"],
    correct: 3,
    explanation: "v = v₀ + at = 0 + (4)(3) = 12 m/s.",
    studyTip:
      "v=v₀+at is the most basic kinematics equation — when starting 'from rest', v₀=0 simplifies it to v=at, a single multiplication. This is often the first formula to try when only acceleration and time are given (no distances involved).",
  },
  {
    id: "oq-p2",
    subject: "physics",
    topic: "Energia cinetica",
    question: "What is the kinetic energy of a 2 kg object moving at 10 m/s?",
    options: ["20 J", "50 J", "100 J", "200 J", "10 J"],
    correct: 2,
    explanation: "KE = ½mv² = ½(2)(10)² = ½(2)(100) = 100 J.",
    studyTip:
      "KE = ½mv² — note the velocity is SQUARED, which has a big effect: doubling the velocity QUADRUPLES the kinetic energy (not just doubles it). Compute v² first (10²=100), then multiply by m and by ½ — order of operations matters less than making sure you square v before multiplying.",
  },
  {
    id: "oq-p3",
    subject: "physics",
    topic: "Forza peso",
    question: "What is the weight of a 5 kg object on Earth? (g = 10 m/s²)",
    options: ["5 N", "10 N", "15 N", "50 N", "0.5 N"],
    correct: 3,
    explanation: "Weight = mg = (5)(10) = 50 N.",
    studyTip:
      "MASS (kg) and WEIGHT (N, a force) are different quantities — mass is constant everywhere, weight depends on local gravity (W=mg). On the IMAT, g=10 m/s² is the standard value used (not 9.8) for clean arithmetic.",
  },
  {
    id: "oq-p4",
    subject: "physics",
    topic: "Statica - Leve ed equilibrio dei momenti",
    question:
      "A lever has a force of 20 N applied at 3 m from the pivot. For the lever to be balanced, what force must be applied at 2 m from the pivot on the other side?",
    options: ["10 N", "20 N", "25 N", "30 N", "40 N"],
    correct: 3,
    explanation:
      "For balance, the moments (torques) must be equal: F₁×d₁ = F₂×d₂ → 20×3 = F₂×2 → 60 = 2F₂ → F₂ = 30 N.",
    studyTip:
      "Lever balance is 'F×d = F×d' — the products of force and distance from the pivot must be EQUAL on both sides. A SHORTER distance requires a LARGER force to balance the same moment (here, 2m needs MORE force than the 3m side's 20N) — this is the principle behind levers giving mechanical advantage.",
  },
  {
    id: "oq-p5",
    subject: "physics",
    topic: "Onde - Periodo e frequenza",
    question: "A wave has a frequency of 50 Hz. What is its period?",
    options: ["50 s", "0.5 s", "0.05 s", "0.02 s", "5 s"],
    correct: 3,
    explanation: "Period T = 1/f = 1/50 = 0.02 s.",
    studyTip:
      "Period and frequency are RECIPROCALS of each other (T=1/f, f=1/T) — they describe the same wave from two angles ('time per cycle' vs 'cycles per second'). A high frequency (many cycles per second) corresponds to a SHORT period (each cycle takes little time), and vice versa.",
  },
  {
    id: "oq-p6",
    subject: "physics",
    topic: "Ottica - Lenti convergenti",
    question:
      "An object is placed 20 cm from a converging lens, and its image forms 20 cm on the other side. What is the focal length of the lens?",
    options: ["5 cm", "10 cm", "20 cm", "40 cm", "60 cm"],
    correct: 1,
    explanation:
      "Using the lens equation 1/f = 1/dₒ + 1/dᵢ (where dₒ=object distance, dᵢ=image distance): 1/f = 1/20 + 1/20 = 2/20 = 1/10. So f = 10 cm.",
    studyTip:
      "When object distance equals image distance (dₒ=dᵢ), the lens equation simplifies to 1/f = 2/dₒ, giving f = dₒ/2. This special symmetric case (which occurs at 2f, producing a same-size inverted image) is worth recognising — here dₒ=20cm gives f=10cm directly.",
  },
  {
    id: "oq-p7",
    subject: "physics",
    topic: "Elettrostatica - Legge di Coulomb",
    question:
      "Two point charges exert a force F on each other at a certain distance r. If the distance between them is DOUBLED (charges unchanged), what happens to the force?",
    options: ["F becomes 2F", "F becomes F/2", "F becomes 4F", "F becomes F/4", "F stays the same"],
    correct: 3,
    explanation:
      "Coulomb's Law: F = k(q₁q₂)/r². Force is INVERSELY PROPORTIONAL to the SQUARE of the distance. Doubling r means dividing F by 2² = 4: new force = F/4.",
    studyTip:
      "Any 'inverse square law' (Coulomb's law for electric force, Newton's law of gravitation) follows the same pattern: doubling the distance → divide the quantity by 4 (2²); tripling the distance → divide by 9 (3²). This 1/r² relationship appears in multiple physics topics — recognise the pattern once, apply it everywhere.",
  },
  {
    id: "oq-p8",
    subject: "physics",
    topic: "Calorimetria - Calore specifico",
    question:
      "How much heat is required to raise the temperature of 2 kg of water by 10°C? (Specific heat capacity of water c = 4186 J/(kg·°C))",
    options: ["4186 J", "8372 J", "41860 J", "83720 J", "418600 J"],
    correct: 3,
    explanation: "Q = mcΔT = (2)(4186)(10) = 83,720 J.",
    studyTip:
      "Q=mcΔT: heat depends on mass, specific heat capacity (a property of the SUBSTANCE — water's value, ~4186 J/(kg·°C), is worth memorising as it appears often), and the TEMPERATURE CHANGE (not the absolute temperature). Multiply all three together — there's no shortcut, but each factor is usually a clean given number.",
  },
  {
    id: "oq-p9",
    subject: "physics",
    topic: "Moto circolare - Forza centripeta",
    question:
      "An object of mass 1 kg moves in a circle of radius 2 m at a speed of 4 m/s. What is the centripetal force acting on it?",
    options: ["2 N", "4 N", "8 N", "16 N", "32 N"],
    correct: 2,
    explanation: "Centripetal force Fc = mv²/r = (1)(4)²/2 = (1)(16)/2 = 8 N.",
    studyTip:
      "Fc=mv²/r — like kinetic energy, velocity is SQUARED here too. Compute v² first (4²=16), multiply by m (×1=16), then divide by r (16/2=8). The squared velocity means doubling speed QUADRUPLES the required centripetal force, all else equal.",
  },
  {
    id: "oq-p10",
    subject: "physics",
    topic: "Ottica - Indice di rifrazione",
    question:
      "A medium has a refractive index of n=1.5. What is the speed of light in this medium? (Speed of light in vacuum c = 3×10⁸ m/s)",
    options: ["1×10⁸ m/s", "1.5×10⁸ m/s", "2×10⁸ m/s", "3×10⁸ m/s", "4.5×10⁸ m/s"],
    correct: 2,
    explanation: "Refractive index n = c/v → v = c/n = (3×10⁸)/1.5 = 2×10⁸ m/s.",
    studyTip:
      "n=c/v means a HIGHER refractive index corresponds to LIGHT TRAVELLING SLOWER in that medium (light is always slower in a medium than in vacuum, so n≥1 always). Rearrange to v=c/n when the refractive index is given and speed is asked for.",
  },
  {
    id: "oq-p11",
    subject: "physics",
    topic: "Circuiti - Potenza elettrica",
    question:
      "A circuit has a voltage of 12 V across a resistance of 4 Ω. What is the power dissipated?",
    options: ["3 W", "12 W", "16 W", "36 W", "48 W"],
    correct: 3,
    explanation:
      "First find current: I = V/R = 12/4 = 3 A. Then power: P = VI = 12×3 = 36 W. (Equivalently, P = V²/R = 144/4 = 36 W directly.)",
    studyTip:
      "Three equivalent power formulas: P=VI, P=I²R, P=V²/R — choose whichever uses the quantities you're GIVEN directly. Here, V and R are given, so P=V²/R (=144/4=36) skips the intermediate step of finding I — though going via I=V/R then P=VI (as shown) gives the same answer and may feel more intuitive.",
  },
  {
    id: "oq-p12",
    subject: "physics",
    topic: "Gravitazione - Peso su altri corpi celesti",
    question:
      "The gravitational acceleration on the Moon is approximately 1/6 of that on Earth (g_Earth=10 m/s²). What is the weight of a 60 kg person on the Moon?",
    options: ["10 N", "60 N", "100 N", "360 N", "600 N"],
    correct: 2,
    explanation:
      "g_Moon = g_Earth/6 = 10/6 ≈ 1.67 m/s². Weight on Moon = m × g_Moon = 60 × (10/6) = 600/6 = 100 N.",
    studyTip:
      "MASS (60 kg) doesn't change between Earth and Moon — only WEIGHT changes, because g changes. Weight_Moon = m × g_Moon = m × (g_Earth/6) = (m×g_Earth)/6 = Weight_Earth/6. Either compute g_Moon first then multiply by mass, or compute Earth weight first (600N) then divide by 6 — both routes give 100N.",
  },
  {
    id: "oq-p13",
    subject: "physics",
    topic: "Idrostatica - Pressione in un fluido",
    question:
      "What is the pressure exerted by a column of water 5 m deep? (Density of water ρ=1000 kg/m³, g=10 m/s²)",
    options: ["500 Pa", "5000 Pa", "50000 Pa", "500000 Pa", "5 Pa"],
    correct: 2,
    explanation: "Hydrostatic pressure P = ρgh = (1000)(10)(5) = 50,000 Pa.",
    studyTip:
      "P=ρgh for hydrostatic pressure — note this gives the pressure due to the FLUID COLUMN alone (additional atmospheric pressure on top would need to be added separately if asked for TOTAL/absolute pressure). The three quantities (density, g, depth) are usually all given directly — straightforward multiplication.",
  },
  {
    id: "oq-p14",
    subject: "physics",
    topic: "Caduta libera - Tempo di caduta",
    question:
      "An object is dropped from a height of 20 m (initial velocity = 0). How long does it take to reach the ground? (g = 10 m/s²)",
    options: ["1 s", "1.5 s", "2 s", "2.5 s", "4 s"],
    correct: 2,
    explanation:
      "Using h = ½gt² (since v₀=0): 20 = ½(10)t² → 20 = 5t² → t² = 4 → t = 2 s.",
    studyTip:
      "For 'dropped from rest' (v₀=0), h=½gt² rearranges to t=√(2h/g). Plugging in: t=√(2×20/10)=√4=2. Recognise that h=½gt² with g=10 often produces 'nice' numbers (like 2h/g being a perfect square) — a clean result like t=2 (rather than a messy decimal) is a good sign you've applied the formula correctly.",
  },
  {
    id: "oq-p15",
    subject: "physics",
    topic: "Ottica - Specchi piani",
    question: "Which of the following correctly describes the image formed by a PLANE (flat) mirror?",
    options: [
      "Virtual, upright, same size as the object, located as far behind the mirror as the object is in front",
      "Real, inverted, magnified, located behind the mirror",
      "Virtual, inverted, smaller than the object, located in front of the mirror",
      "Real, upright, same size, located in front of the mirror",
      "Virtual, upright, magnified, located at the mirror's surface",
    ],
    correct: 0,
    explanation:
      "A plane mirror always produces a VIRTUAL image (cannot be projected onto a screen — light rays only APPEAR to diverge from behind the mirror), UPRIGHT (same orientation as object), SAME SIZE (magnification=1), and located at a distance BEHIND the mirror EQUAL to the object's distance IN FRONT of the mirror.",
    studyTip:
      "Plane mirrors are the SIMPLEST optical case: virtual, upright, same-size, symmetric distance. This is the baseline to contrast against curved mirrors/lenses, which can produce REAL images, INVERTED images, and MAGNIFICATION ≠ 1 depending on object position relative to the focal length — plane mirrors never do any of these.",
  },

  /* ================= BIOLOGY (18) ================= */
  {
    id: "oq-b1",
    subject: "biology",
    topic: "Organelli - Apparato del Golgi",
    question: "What is the main function of the Golgi apparatus?",
    options: [
      "Modifying, packaging, and sorting proteins and lipids received from the endoplasmic reticulum",
      "Synthesising ATP through oxidative phosphorylation",
      "Storing the cell's genetic material",
      "Breaking down macromolecules using digestive enzymes",
      "Synthesising lipids for the cell membrane from scratch",
    ],
    correct: 0,
    explanation:
      "The Golgi apparatus acts as the cell's 'post office': it receives proteins/lipids from the ER, chemically modifies them (e.g. adding sugar groups — glycosylation), packages them into vesicles, and sorts/ships them to their final destinations (secretion, lysosomes, plasma membrane, etc.).",
    studyTip:
      "Think of the Golgi as a processing-and-shipping centre DOWNSTREAM of the ER: rough ER makes proteins → Golgi modifies/packages/labels them → vesicles deliver them. ATP synthesis (mitochondria), genetic storage (nucleus), and digestion (lysosomes) are jobs of OTHER organelles entirely.",
  },
  {
    id: "oq-b2",
    subject: "biology",
    topic: "Mitosi - Numero di cromosomi nelle cellule figlie",
    question:
      "A diploid (2n) cell with 46 chromosomes undergoes MITOSIS. How many chromosomes will each daughter cell have?",
    options: ["23", "46", "92", "69", "Variable, depending on the cell type"],
    correct: 1,
    explanation:
      "Mitosis produces TWO genetically identical daughter cells, each with the SAME chromosome number as the parent cell (46, diploid/2n). This is fundamentally different from MEIOSIS, which HALVES the chromosome number to produce haploid (n=23) gametes.",
    studyTip:
      "MITOSIS = same number (2n→2n, for growth/repair, produces 2 identical cells). MEIOSIS = halved number (2n→n, for gametes, produces 4 genetically varied cells). 'Mitosis maintains, meiosis halves' is a useful one-line distinction to keep these two division types straight.",
  },
  {
    id: "oq-b3",
    subject: "biology",
    topic: "Genetica - Quadrato di Punnett (monoibrido)",
    question:
      "In a cross between two heterozygous individuals (Aa × Aa), where A is dominant over a, what is the expected PHENOTYPIC ratio of offspring?",
    options: ["1:1", "1:2:1", "3:1", "9:3:3:1", "1:3"],
    correct: 2,
    explanation:
      "Aa × Aa produces genotypes in ratio 1 AA : 2 Aa : 1 aa (genotypic ratio 1:2:1). Since A is DOMINANT, both AA and Aa show the dominant PHENOTYPE — so 3 out of 4 offspring (AA + Aa = 1+2 = 3) show the dominant trait, and 1 out of 4 (aa) shows the recessive trait. Phenotypic ratio = 3:1.",
    studyTip:
      "Aa × Aa is THE classic monohybrid cross — its genotypic ratio (1:2:1) and phenotypic ratio (3:1, when one allele is fully dominant) are foundational numbers worth memorising directly. The 9:3:3:1 ratio (option D) is for DIHYBRID crosses (two genes) — don't confuse the two.",
  },
  {
    id: "oq-b4",
    subject: "biology",
    topic: "Sistema circolatorio - Percorso del sangue",
    question:
      "Deoxygenated blood returning to the heart from the body enters the right atrium. Which structure does it pass through NEXT, on its way to the lungs?",
    options: [
      "Right ventricle, then pulmonary artery",
      "Left ventricle, then aorta",
      "Left atrium, then pulmonary vein",
      "Right ventricle, then aorta",
      "Pulmonary vein directly",
    ],
    correct: 0,
    explanation:
      "The path is: right atrium → (through the tricuspid valve) → right ventricle → (through the pulmonary valve) → pulmonary artery → lungs (where blood picks up oxygen and releases CO₂) → pulmonary VEINS → left atrium → left ventricle → aorta → body.",
    studyTip:
      "Memorise the heart's circuit as a LOOP with two halves: RIGHT side = deoxygenated blood, body→lungs (pulmonary circulation, via pulmonary ARTERY — unusually, this artery carries deoxygenated blood). LEFT side = oxygenated blood, lungs→body (systemic circulation, via aorta). The pulmonary artery/vein naming is a famous EXCEPTION to 'arteries carry oxygenated blood' — arteries are defined by carrying blood AWAY from the heart, regardless of oxygenation.",
  },
  {
    id: "oq-b5",
    subject: "biology",
    topic: "Fotosintesi - Equazione complessiva",
    question: "What is the overall balanced equation for photosynthesis?",
    options: [
      "6CO₂ + 6H₂O + light energy → C₆H₁₂O₆ + 6O₂",
      "C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O + energy",
      "6CO₂ + 6O₂ → C₆H₁₂O₆ + 6H₂O",
      "C₆H₁₂O₆ + 6CO₂ → 6O₂ + 6H₂O",
      "6O₂ + 6H₂O → C₆H₁₂O₆ + 6CO₂ + light energy",
    ],
    correct: 0,
    explanation:
      "Photosynthesis converts carbon dioxide and water, using light energy, into glucose and oxygen: 6CO₂ + 6H₂O + light → C₆H₁₂O₆ + 6O₂. (Option B is the REVERSE reaction — cellular respiration — which releases energy rather than requiring it.)",
    studyTip:
      "Photosynthesis and (aerobic) cellular respiration are EXACT REVERSES of each other in terms of overall reactants/products: photosynthesis takes CO₂+H₂O+light→glucose+O₂ (energy STORED), respiration takes glucose+O₂→CO₂+H₂O+energy (energy RELEASED). If you know one equation, you know the other by reversing arrows and swapping 'light energy required' for 'energy released'.",
  },
  {
    id: "oq-b6",
    subject: "biology",
    topic: "Trasporto di membrana - Osmosi e tonicità",
    question:
      "An animal cell is placed in a HYPERTONIC solution (higher solute concentration outside than inside the cell). What happens to the cell?",
    options: [
      "Water moves OUT of the cell, causing it to shrink (crenation)",
      "Water moves INTO the cell, causing it to swell and possibly burst (lysis)",
      "No net water movement occurs",
      "The cell membrane becomes impermeable",
      "Solutes move out of the cell to balance concentrations",
    ],
    correct: 0,
    explanation:
      "In a HYPERTONIC external solution, the solute concentration is HIGHER outside than inside — equivalently, water concentration is LOWER outside. By osmosis, water moves from where it's MORE concentrated (inside the cell) to where it's LESS concentrated (outside), i.e. OUT of the cell. The cell loses water and shrinks (crenation in animal cells).",
    studyTip:
      "Remember tonicity from the cell's perspective: HYPERtonic environment (more solute OUTSIDE) → water leaves the cell → cell SHRINKS. HYPOtonic environment (more solute INSIDE/less outside) → water enters → cell SWELLS (may burst/lyse in animal cells, though plant cells resist this due to their cell wall — turgor pressure). 'Water follows solute concentration AWAY from itself' — water moves toward the side with MORE solute (less water).",
  },
  {
    id: "oq-b7",
    subject: "biology",
    topic: "Sistema nervoso - Struttura del neurone",
    question: "In a typical neuron, in which direction does a nerve impulse travel?",
    options: [
      "Dendrites → cell body → axon → axon terminals",
      "Axon terminals → axon → cell body → dendrites",
      "Cell body → dendrites → axon → axon terminals",
      "Axon → dendrites → cell body → axon terminals",
      "Dendrites → axon terminals → cell body → axon",
    ],
    correct: 0,
    explanation:
      "The standard signal flow in a neuron is: DENDRITES (receive signals from other neurons) → CELL BODY/soma (integrates signals) → AXON (transmits the signal, often over long distances) → AXON TERMINALS (release neurotransmitters to the next neuron via synapses).",
    studyTip:
      "Think of the neuron as having a clear 'input → processing → output' architecture: dendrites = INPUT (receiving end, often branched/tree-like — 'dendrite' relates to 'tree'), cell body = PROCESSING, axon + terminals = OUTPUT (sending end). Signal flow follows this input-to-output direction.",
  },
  {
    id: "oq-b8",
    subject: "biology",
    topic: "Genetica - Gruppi sanguigni ABO",
    question:
      "The ABO blood group system has three alleles: I^A, I^B (codominant with each other), and i (recessive to both). What blood type results from the genotype I^A I^B?",
    options: ["Type AB", "Type A", "Type B", "Type O", "Cannot be determined"],
    correct: 0,
    explanation:
      "I^A and I^B are CODOMINANT — when both are present (genotype I^A I^B), BOTH are expressed simultaneously, producing BOTH A and B antigens on red blood cells. This phenotype is blood type AB.",
    studyTip:
      "ABO blood type is the textbook example of CODOMINANCE (different from simple dominant/recessive): when I^A and I^B are both present, NEITHER masks the other — both traits show up TOGETHER (type AB), unlike a typical Aa heterozygote where only the dominant trait is visible.",
  },
  {
    id: "oq-b9",
    subject: "biology",
    topic: "Apparato respiratorio - Scambio gassoso alveolare",
    question:
      "In the alveoli of the lungs, oxygen moves from the air into the blood, and carbon dioxide moves from the blood into the air. What is the underlying mechanism for BOTH of these movements?",
    options: [
      "Simple diffusion, driven by concentration gradients (each gas moves from high to low concentration)",
      "Active transport, requiring ATP for both gases",
      "Osmosis, driven by water concentration differences",
      "Facilitated diffusion through specific O₂ and CO₂ channel proteins only",
      "Bulk flow driven by blood pressure differences",
    ],
    correct: 0,
    explanation:
      "Gas exchange in the alveoli occurs by SIMPLE DIFFUSION: O₂ is at HIGHER concentration in alveolar air than in deoxygenated blood, so it diffuses INTO the blood. CO₂ is at HIGHER concentration in the blood than in alveolar air, so it diffuses OUT into the air to be exhaled. Both movements follow the same principle — net movement from high to low concentration — requiring NO energy (ATP) input.",
    studyTip:
      "Gas exchange (O₂ and CO₂ across the alveolar-capillary membrane) is a classic example of PASSIVE, simple diffusion — no transport proteins or energy needed, just concentration gradients maintained by continuous blood flow (bringing in CO₂-rich blood, removing O₂-rich blood) and breathing (refreshing alveolar air).",
  },
  {
    id: "oq-b10",
    subject: "biology",
    topic: "Sistema digerente - Enzimi e specificità",
    question: "Pepsin is an enzyme that digests PROTEINS in the stomach. Under what conditions does pepsin work optimally?",
    options: [
      "Acidic pH (around pH 2)",
      "Neutral pH (around pH 7)",
      "Basic/alkaline pH (around pH 9-10)",
      "Only in the absence of any pH (pH-independent)",
      "Only at body temperature, regardless of pH",
    ],
    correct: 0,
    explanation:
      "Pepsin is secreted in the stomach, where hydrochloric acid (HCl) creates a highly ACIDIC environment (pH≈2). Pepsin's optimal activity is at this LOW pH — it would be denatured/inactive at the neutral or basic pH found elsewhere in the digestive tract (e.g. the small intestine, where DIFFERENT enzymes like trypsin work optimally at near-neutral/slightly basic pH).",
    studyTip:
      "Different digestive enzymes are adapted to the pH of the organ where they work: pepsin (stomach, acidic pH~2) vs. pancreatic enzymes like trypsin (small intestine, near-neutral/slightly basic pH~8, after bicarbonate neutralises stomach acid). An enzyme moved to the 'wrong' pH environment would lose its functional shape (denature) and stop working.",
  },
  {
    id: "oq-b11",
    subject: "biology",
    topic: "Ecologia - Piramidi energetiche e livelli trofici",
    question:
      "In an ecosystem, approximately what percentage of energy is transferred from one trophic level to the next (e.g. from primary producers to primary consumers)?",
    options: ["~10%", "~50%", "~90%", "~100%", "~1%"],
    correct: 0,
    explanation:
      "The '10% rule' (an approximation) states that on average only about 10% of the energy at one trophic level is transferred to and stored as biomass in the level above it — the rest is lost mainly as metabolic heat (respiration), or used for life processes, or remains unconsumed/undigested. This is why energy pyramids are pyramid-shaped — each level holds dramatically less energy than the one below.",
    studyTip:
      "The '10% rule' explains why food chains rarely have more than 4-5 trophic levels (after several 90% losses, very little usable energy remains at the top) and why eating LOWER on the food chain (more plant-based) is more energy-efficient — less energy is 'lost' between you and the original solar energy captured by plants.",
  },
  {
    id: "oq-b12",
    subject: "biology",
    topic: "Genetica - Cariotipo umano",
    question: "How many chromosomes are present in a normal human somatic (body) cell, and how are they organised?",
    options: [
      "46 chromosomes, organised as 23 pairs (22 pairs of autosomes + 1 pair of sex chromosomes)",
      "23 chromosomes, organised as individual (unpaired) chromosomes",
      "46 chromosomes, all identical to each other",
      "44 chromosomes, organised as 22 pairs, with no sex chromosomes",
      "92 chromosomes, organised as 46 pairs",
    ],
    correct: 0,
    explanation:
      "Human somatic (non-gamete) cells are DIPLOID with 46 chromosomes total, organised as 23 HOMOLOGOUS PAIRS: 22 pairs of AUTOSOMES (non-sex chromosomes, numbered 1-22) plus 1 pair of SEX CHROMOSOMES (XX in females, XY in males).",
    studyTip:
      "46 = 23 pairs is the human diploid number — GAMETES (sperm/egg) are HAPLOID with only 23 chromosomes (one from each pair, no pairing). When gametes fuse at fertilisation, 23+23=46 restores the diploid number in the zygote. The '22 autosome pairs + 1 sex chromosome pair' breakdown is worth knowing precisely.",
  },
  {
    id: "oq-b13",
    subject: "biology",
    topic: "Evoluzione - Meccanismo della selezione naturale",
    question: "Which combination of factors is REQUIRED for natural selection to occur in a population?",
    options: [
      "Heritable variation among individuals, AND differential survival/reproduction based on that variation",
      "A constant environment with no changes over time",
      "All individuals in the population must be genetically identical",
      "Mutations must occur at a constant, predictable rate",
      "The population must be very large (no effect in small populations)",
    ],
    correct: 0,
    explanation:
      "Natural selection requires: (1) VARIATION among individuals that is HERITABLE (passed to offspring), and (2) that variation must lead to DIFFERENTIAL SURVIVAL or REPRODUCTIVE SUCCESS (some variants leave more offspring than others). Over generations, this causes allele frequencies to shift toward advantageous variants. A population with NO variation (option C) cannot undergo natural selection — there's nothing to 'select' between.",
    studyTip:
      "Three-word summary of natural selection's requirements: VARIATION (differences exist), HERITABILITY (differences are passed on), DIFFERENTIAL FITNESS (differences affect survival/reproduction). All three must be present — missing any one means natural selection cannot act, even if the others are true.",
  },
  {
    id: "oq-b14",
    subject: "biology",
    topic: "Sistema endocrino - Feedback negativo",
    question:
      "After a meal, blood glucose rises, triggering insulin release, which lowers blood glucose back toward normal — and as glucose falls, insulin release decreases. What kind of regulatory mechanism is this?",
    options: [
      "Negative feedback",
      "Positive feedback",
      "Feedforward control",
      "Allosteric inhibition",
      "Competitive inhibition",
    ],
    correct: 0,
    explanation:
      "NEGATIVE FEEDBACK occurs when the RESPONSE to a change COUNTERACTS (opposes/reverses) the original change, returning the system toward a set point. Here: glucose rises (the change) → insulin is released (the response) → glucose falls back toward normal (counteracting the original rise) → insulin release decreases. The response 'pushes back' against the original deviation, maintaining homeostasis.",
    studyTip:
      "NEGATIVE feedback = stabilising, opposes the change, maintains homeostasis (the vast majority of body regulation works this way: blood glucose, body temperature, blood pressure, etc.). POSITIVE feedback = amplifying, REINFORCES the change, drives a process to completion (rarer examples: childbirth contractions, blood clotting cascade). 'Negative' doesn't mean 'bad' — it means 'opposing/counteracting'.",
  },
  {
    id: "oq-b15",
    subject: "biology",
    topic: "Istologia - Tessuto epiteliale squamoso",
    question:
      "Simple squamous epithelium consists of a single layer of thin, flat cells. Where in the body would you expect to find this tissue type, and why?",
    options: [
      "In sites of diffusion/filtration, such as alveoli and capillary walls — the thinness minimises the distance for substances to cross",
      "In the outer layer of skin, where it provides mechanical protection against abrasion",
      "Lining the digestive tract, where it secretes large amounts of mucus and digestive enzymes",
      "In glands, where it forms the bulk of secretory tissue",
      "In bone, where it provides structural rigidity",
    ],
    correct: 0,
    explanation:
      "Simple squamous epithelium's defining features — SINGLE layer + THIN/FLAT cells — make it ideal for locations where substances need to DIFFUSE ACROSS the tissue quickly (shorter distance = faster diffusion, by Fick's law). Alveoli (gas exchange with blood) and capillary walls (exchange between blood and tissue) are the classic examples. Thick, multi-layered tissue (like skin's outer layer, option B — which is actually STRATIFIED squamous) would be too slow for diffusion but better for protection.",
    studyTip:
      "Match epithelial tissue STRUCTURE to FUNCTION: thin+single-layer (simple squamous) → fast diffusion/filtration (alveoli, capillaries, kidney filtration). Thick+multi-layered (stratified squamous) → protection against abrasion (skin surface, oesophagus lining). The structure-function relationship is the key reasoning tool for histology questions, even for tissue types you haven't memorised by name.",
  },
  {
    id: "oq-b16",
    subject: "biology",
    topic: "Meiosi - Numero e tipo di cellule prodotte",
    question:
      "A diploid (2n) cell with 46 chromosomes undergoes MEIOSIS. How many cells are produced, and what is the chromosome number in each?",
    options: [
      "4 cells, each with 23 chromosomes (haploid)",
      "2 cells, each with 46 chromosomes (diploid)",
      "4 cells, each with 46 chromosomes (diploid)",
      "2 cells, each with 23 chromosomes (haploid)",
      "1 cell, with 92 chromosomes",
    ],
    correct: 0,
    explanation:
      "Meiosis consists of TWO sequential divisions (Meiosis I and Meiosis II), starting from ONE diploid cell and producing FOUR haploid cells, each with HALF the original chromosome number (46→23). This halving is essential so that when two gametes (sperm+egg, each n=23) fuse during fertilisation, the resulting zygote has the correct diploid number (2n=46).",
    studyTip:
      "Meiosis 'numbers': 1 cell in → 4 cells out, chromosome number HALVED (2n→n). Contrast with mitosis: 1 cell in → 2 cells out, chromosome number UNCHANGED (2n→2n). The '4 haploid cells' result of meiosis is what becomes sperm (all 4 typically functional) or eggs (in females, typically only 1 of the 4 becomes a functional egg, the others become polar bodies).",
  },
  {
    id: "oq-b17",
    subject: "biology",
    topic: "Genetica - Tipi di mutazioni puntiformi",
    question:
      "A point mutation changes a single DNA base, but the resulting mRNA codon still codes for the SAME amino acid as before (due to the redundancy of the genetic code). What type of mutation is this?",
    options: ["Silent mutation", "Missense mutation", "Nonsense mutation", "Frameshift mutation", "Insertion mutation"],
    correct: 0,
    explanation:
      "A SILENT mutation changes the DNA sequence (and the mRNA codon), but because the genetic code is REDUNDANT (multiple codons can code for the same amino acid — e.g. both GAA and GAG code for glutamate), the resulting PROTEIN is unchanged. A MISSENSE mutation (option B) would change the codon to one specifying a DIFFERENT amino acid; a NONSENSE mutation (option C) would create a premature STOP codon.",
    studyTip:
      "Three point-mutation outcomes, by effect on the PROTEIN: SILENT = no change (same amino acid, due to codon redundancy). MISSENSE = one amino acid changes (protein may still function, depending on which amino acid). NONSENSE = premature stop codon (truncated, usually non-functional protein). 'Silent' is the mildest — like a typo that doesn't change the word's meaning because of a synonym.",
  },
  {
    id: "oq-b18",
    subject: "biology",
    topic: "Sistema immunitario - Produzione di anticorpi",
    question: "Which cells are primarily responsible for PRODUCING antibodies in the immune system?",
    options: [
      "Plasma cells (differentiated from activated B lymphocytes)",
      "Cytotoxic T cells (T killer cells)",
      "Macrophages",
      "Red blood cells",
      "Platelets",
    ],
    correct: 0,
    explanation:
      "When a B lymphocyte encounters its specific antigen (often with help from T-helper cells), it proliferates and differentiates into PLASMA CELLS — specialised 'antibody factories' that secrete large quantities of antibodies (immunoglobulins) specific to that antigen. Cytotoxic T cells (option B) directly kill infected cells but don't produce antibodies; macrophages (option C) are phagocytic cells that present antigens but don't produce antibodies themselves.",
    studyTip:
      "B lymphocytes (B cells) = the antibody-producing branch of the adaptive immune system; their activated/differentiated form is the PLASMA CELL, the actual antibody 'factory'. T cells (cytotoxic and helper) operate differently — cytotoxic T cells directly destroy infected/abnormal cells, while helper T cells coordinate/activate other immune cells (including B cells) but don't themselves make antibodies.",
  },

  /* ================= GENERAL KNOWLEDGE (6) ================= */
  {
    id: "oq-g1",
    subject: "general",
    topic: "Geografia - Capitali europee",
    question: "What is the capital city of Portugal?",
    options: ["Porto", "Lisbon", "Madrid", "Barcelona", "Brussels"],
    correct: 1,
    explanation:
      "Lisbon (Lisboa) is the capital and largest city of Portugal. Porto is Portugal's SECOND-largest city (a common confusion); Madrid and Barcelona are in Spain; Brussels is the capital of Belgium.",
    studyTip:
      "For 'capital city' questions, the most common wrong answer is the country's MOST FAMOUS or LARGEST city when it ISN'T the capital (Porto for Portugal here is exactly this trap — many people know Porto better, e.g. from port wine, but it's not the capital). Double-check capitals for countries with a well-known 'other' major city.",
  },
  {
    id: "oq-g2",
    subject: "general",
    topic: "Storia - Origine del Rinascimento",
    question: "The Renaissance, a period of renewed interest in classical art, learning, and culture, originated in which country during the 14th-15th centuries?",
    options: ["Italy", "France", "England", "Germany", "Spain"],
    correct: 0,
    explanation:
      "The Renaissance ('rebirth') began in ITALY, particularly in city-states like Florence, in the 14th century, before spreading to the rest of Europe over the following centuries. Key early figures (Giotto, Brunelleschi, Donatello, later Leonardo da Vinci, Michelangelo) were predominantly Italian.",
    studyTip:
      "'Renaissance' literally means 'rebirth' (of classical Greek/Roman ideals) — and Italy, being the geographic and cultural HEIR to the Roman Empire, is where this 'rebirth' naturally began first, centred on wealthy trading city-states like Florence, Venice, and Rome.",
  },
  {
    id: "oq-g3",
    subject: "general",
    topic: "Letteratura - Opere di Shakespeare (generi)",
    question: "Which of the following is NOT one of Shakespeare's TRAGEDIES?",
    options: ["Hamlet", "Macbeth", "Othello", "A Midsummer Night's Dream", "King Lear"],
    correct: 3,
    explanation:
      "'A Midsummer Night's Dream' is one of Shakespeare's COMEDIES (a lighthearted play involving mistaken identities, fairies, and a happy ending with multiple marriages). Hamlet, Macbeth, Othello, and King Lear are all among Shakespeare's most famous TRAGEDIES — plays centred on a protagonist's downfall, typically ending in death.",
    studyTip:
      "Shakespeare's plays are traditionally classified as TRAGEDIES (protagonist's downfall/death — Hamlet, Macbeth, Othello, King Lear, Romeo and Juliet), COMEDIES (lighthearted, often ending in marriage — A Midsummer Night's Dream, Much Ado About Nothing, Twelfth Night), and HISTORIES (based on English kings — Henry V, Richard III). Knowing which 'bucket' a title falls into is often tested as an 'odd one out' question.",
  },
  {
    id: "oq-g4",
    subject: "general",
    topic: "Scienza - Sistema solare",
    question: "Counting from the Sun outward, which planet is the FOURTH in our solar system?",
    options: ["Venus", "Earth", "Mars", "Jupiter", "Mercury"],
    correct: 2,
    explanation:
      "The order of planets from the Sun is: (1) Mercury, (2) Venus, (3) Earth, (4) Mars, (5) Jupiter, (6) Saturn, (7) Uranus, (8) Neptune. Mars is the fourth planet.",
    studyTip:
      "A classic mnemonic for planet order: 'My Very Easy Method Just Speeds Up Naming' = Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune. Such mnemonics turn an ordering question into simple recall of a memorised phrase.",
  },
  {
    id: "oq-g5",
    subject: "general",
    topic: "Storia dell'arte - Movimenti artistici",
    question:
      "Which late 19th-century art movement, originating in France, is characterised by visible brushstrokes, an emphasis on light and its changing qualities, and outdoor ('en plein air') painting? Key artists include Monet, Renoir, and Degas.",
    options: ["Impressionism", "Cubism", "Baroque", "Surrealism", "Romanticism"],
    correct: 0,
    explanation:
      "IMPRESSIONISM, which emerged in France in the 1860s-1870s, is defined by exactly these features: visible/loose brushwork, a focus on capturing fleeting effects of light and colour, and painting outdoors directly from the subject (rather than composing carefully in a studio). Monet's 'Impression, Sunrise' gave the movement its name.",
    studyTip:
      "Match art movements to their DEFINING technique/focus: Impressionism = light & visible brushstrokes (late 1800s France). Cubism = fragmented/geometric forms, multiple perspectives (early 1900s, Picasso/Braque). Baroque = dramatic, ornate, high contrast (1600s). Surrealism = dreamlike, irrational imagery (1920s+). Romanticism = emotion, nature, the sublime (late 1700s-1800s). The DESCRIPTION in the question (brushstrokes, light, plein air, French, late 1800s) maps uniquely to Impressionism.",
  },
  {
    id: "oq-g6",
    subject: "general",
    topic: "Grammatica inglese - Present Perfect vs Past Simple",
    question: "Which sentence correctly uses the PRESENT PERFECT tense?",
    options: [
      "I have visited Paris twice.",
      "I visited Paris twice last year.",
      "I am visiting Paris twice.",
      "I will have visit Paris twice.",
      "I visit Paris twice yesterday.",
    ],
    correct: 0,
    explanation:
      "Present perfect = 'have/has' + past participle. 'I have visited Paris twice' correctly uses 'have' + 'visited' (past participle of 'visit'), expressing an experience without specifying WHEN — appropriate for present perfect. Option B uses past simple correctly (with a specific time, 'last year') but that's NOT present perfect. Options C, D, and E contain grammatical errors or tense mismatches (E mixes present tense 'visit' with past time marker 'yesterday', which is incorrect).",
    studyTip:
      "Present perfect (have/has + past participle) is used for experiences/actions with NO specific time mentioned, or actions connecting past to present ('I have lived here for 5 years' = still living here). Past simple is used for actions completed at a SPECIFIC, stated time in the past ('last year', 'yesterday', 'in 2020'). A sentence combining present-tense verb forms with past-time markers (like option E: 'visit...yesterday') is a tense-agreement error.",
  },
];
