import React, { useState, useEffect, useCallback, useRef } from "react";
import {
  LayoutGrid,
  BookOpen,
  Timer,
  LineChart as LineChartIcon,
  ChevronRight,
  ChevronLeft,
  Check,
  X,
  RotateCcw,
  Lightbulb,
  Sigma,
  FlaskConical,
  Atom,
  BrainCircuit,
  Play,
  Flag,
  AlertTriangle,
  Dna,
  Globe2,
  TrendingUp,
  TrendingDown,
  History,
  Download,
  Upload,
} from "lucide-react";
import { SIMULATION_POOL } from "./simulationQuestions";
import { PAST_PAPER_2025 } from "./pastPaper2025";
import { PAST_PAPER_2024 } from "./pastPaper2024";
import { PAST_PAPER_2023 } from "./pastPaper2023";
import { PAST_PAPER_2019 } from "./pastPaper2019";
import { PAST_PAPER_2018 } from "./pastPaper2018";
import { PAST_PAPER_2017 } from "./pastPaper2017";
import { ORIGINAL_QUESTIONS } from "./originalQuestions";

/* ============================================================
   STORAGE HELPERS
   Uses the browser's localStorage: data persists on this
   device/browser across sessions, but does not sync across
   different devices or browsers.
   ============================================================ */

const STORAGE_KEY = "imat-prep:results";

async function loadResults() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    const parsed = raw ? JSON.parse(raw) : {};
    return {
      attempts: parsed.attempts || [],
      simulations: parsed.simulations || [],
    };
  } catch (e) {
    return { attempts: [], simulations: [] };
  }
}

async function saveResults(data) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch (e) {
    console.error("Storage error", e);
  }
}

/* ============================================================
   QUESTION BANK
   ============================================================ */

const SUBJECTS = {
  biology: { label: "Biologia", icon: Dna, color: "#5B7C8C" },
  chemistry: { label: "Chimica", icon: FlaskConical, color: "#5B8C5A" },
  physics: { label: "Fisica", icon: Atom, color: "#8C6A5B" },
  math: { label: "Matematica", icon: Sigma, color: "#2B5F75" },
  logic: { label: "Logica", icon: BrainCircuit, color: "#C8632E" },
  general: { label: "Cultura Generale", icon: Globe2, color: "#9C7B4F" },
};

/* ============================================================
   EXTERNAL STUDY RESOURCES
   Fallback link per subject (verified guides), with an optional
   per-topic override map for when a more specific link is known.
   Add entries to TOPIC_RESOURCES as you find good material —
   anything not listed there falls back to the subject guide.
   ============================================================ */

const SUBJECT_RESOURCES = {
  biology: { label: "Guida Biologia (EnterMedSchool)", url: "https://www.entermedschool.com/imat-biology" },
  chemistry: { label: "Guida Chimica (EnterMedSchool)", url: "https://www.entermedschool.com/imat-chemistry" },
  physics: { label: "Sillabo Fisica (EnterMedSchool)", url: "https://www.entermedschool.com/imat-2026-syllabus" },
  math: { label: "Sillabo Matematica (EnterMedSchool)", url: "https://www.entermedschool.com/imat-2026-syllabus" },
  logic: { label: "Guida Logica (EnterMedSchool)", url: "https://www.entermedschool.com/imat-logic" },
  general: { label: "Guida Cultura Generale (EnterMedSchool)", url: "https://www.entermedschool.com/imat-general-knowledge" },
};

// Optional per-topic overrides. Key = exact `topic` string used in the
// question data. Populate this over time with your own links (video,
// PDF, article) for the topics you want a more specific richiamo teorico.
const TOPIC_RESOURCES = {};

function getResourceFor(question) {
  if (!question) return null;
  return TOPIC_RESOURCES[question.topic] || SUBJECT_RESOURCES[question.subject] || null;
}

function ResourceLink({ question }) {
  const resource = getResourceFor(question);
  if (!resource) return null;
  return (
    <a
      href={resource.url}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "6px",
        marginTop: "4px",
        padding: "9px 12px",
        borderRadius: "8px",
        border: "1.5px solid #E8E4DC",
        backgroundColor: "#FFFFFF",
        color: "#6B6F73",
        fontSize: "12px",
        fontWeight: 600,
        textDecoration: "none",
      }}
    >
      <BookOpen size={13} strokeWidth={2} />
      Approfondisci: {resource.label}
    </a>
  );
}

const QUESTION_BANK = [
  {
    id: "m1",
    subject: "math",
    topic: "Logaritmi",
    question: "What is the value of log₂(32)?",
    options: ["4", "6", "5", "3", "8"],
    correct: 2,
    explanation:
      "log₂(32) asks: 2 raised to what power gives 32? Since 2⁵ = 32, the answer is 5. A quick way to check: 2¹=2, 2²=4, 2³=8, 2⁴=16, 2⁵=32.",
    studyTip:
      "Memorise powers of 2 up to 2¹⁰ (1024). Logarithm questions on the IMAT almost always reduce to recognising a power you already know.",
  },
  {
    id: "m2",
    subject: "math",
    topic: "Geometria - Aree",
    question:
      "A rectangle has a perimeter of 36 cm. If one side is twice the length of the other, what is the area?",
    options: ["72 cm²", "81 cm²", "64 cm²", "48 cm²", "56 cm²"],
    correct: 0,
    explanation:
      "Let the shorter side = x, longer side = 2x. Perimeter = 2(x + 2x) = 6x = 36, so x = 6. Sides are 6 and 12. Area = 6 × 12 = 72 cm².",
    studyTip:
      "Translate 'one side is twice the other' into algebra immediately (x and 2x). Most IMAT geometry problems are algebra problems wearing a geometry costume.",
  },
  {
    id: "m3",
    subject: "math",
    topic: "Disequazioni",
    question: "Which of the following is the solution set of |2x − 4| < 6?",
    options: ["x < 5", "−1 < x < 5", "x > −1", "−5 < x < 1", "1 < x < 5"],
    correct: 1,
    explanation:
      "|2x − 4| < 6 means −6 < 2x − 4 < 6. Add 4: −2 < 2x < 10. Divide by 2: −1 < x < 5.",
    studyTip:
      "For |expr| < k, always rewrite as −k < expr < k before solving. For |expr| > k it splits into two separate inequalities instead — the direction of the inequality changes the strategy completely.",
  },
  {
    id: "m4",
    subject: "math",
    topic: "Probabilità",
    question:
      "A bag contains 4 red balls and 6 blue balls. What is the probability of drawing 2 red balls in a row without replacement?",
    options: ["2/15", "4/25", "1/6", "8/45", "2/9"],
    correct: 0,
    explanation:
      "P(first red) = 4/10. After removing one red ball, P(second red) = 3/9. Multiply: (4/10) × (3/9) = 12/90 = 2/15.",
    studyTip:
      "'Without replacement' means the second probability's denominator (and possibly numerator) shrinks by 1. This is the single most common trap in IMAT probability questions.",
  },
  {
    id: "m5",
    subject: "math",
    topic: "Funzioni - Dominio",
    question: "What is the domain of the function f(x) = √(x² − 9)?",
    options: [
      "x ≥ 3",
      "−3 ≤ x ≤ 3",
      "x ≤ −3 or x ≥ 3",
      "x > 0",
      "all real numbers",
    ],
    correct: 2,
    explanation:
      "A square root requires its argument to be ≥ 0, so x² − 9 ≥ 0, i.e. x² ≥ 9. This gives x ≤ −3 or x ≥ 3 (not −3 ≤ x ≤ 3, which would solve x² ≤ 9).",
    studyTip:
      "x² ≥ k² gives values OUTSIDE the interval [−k, k]; x² ≤ k² gives values INSIDE it. Drawing a quick parabola sketch removes all doubt.",
  },
  {
    id: "l1",
    subject: "logic",
    topic: "Sequenze numeriche",
    question: "What is the next number in the sequence: 2, 6, 12, 20, 30, ?",
    options: ["38", "40", "42", "44", "36"],
    correct: 2,
    explanation:
      "Differences between terms are 4, 6, 8, 10 — increasing by 2 each time. The next difference is 12, so 30 + 12 = 42. (These numbers are also n(n+1): 1·2, 2·3, 3·4...)",
    studyTip:
      "When a sequence isn't obviously arithmetic or geometric, write the differences between consecutive terms on a second row. A pattern in the differences is the most common 'second layer' on the IMAT.",
  },
  {
    id: "l2",
    subject: "logic",
    topic: "Sillogismi",
    question:
      "All members of the chess club play at least one instrument. Some musicians in the school are also athletes. Maria is a member of the chess club. Which of the following must be true?",
    options: [
      "Maria is an athlete",
      "Maria plays at least one instrument",
      "Maria is not an athlete",
      "All musicians are chess club members",
      "Maria plays two instruments",
    ],
    correct: 1,
    explanation:
      "From the first statement, chess club membership guarantees playing an instrument. Since Maria is a member, she must play at least one instrument. The second statement about musicians/athletes is irrelevant noise — it doesn't connect to Maria specifically.",
    studyTip:
      "IMAT logic puzzles often include one true-but-irrelevant statement designed to distract you. Before answering, ask: 'does this premise actually mention the subject of the question?'",
  },
  {
    id: "c1",
    subject: "chemistry",
    topic: "Struttura atomica",
    question:
      "An atom has 17 protons, 18 neutrons, and 17 electrons. What is its mass number?",
    options: ["17", "18", "34", "35", "1"],
    correct: 3,
    explanation:
      "Mass number = protons + neutrons = 17 + 18 = 35. Electrons don't contribute meaningfully to mass and don't count toward the mass number.",
    studyTip:
      "Mass number (A) = protons + neutrons. Atomic number (Z) = protons = electrons (in a neutral atom). Don't confuse the two — A is always written as a superscript, Z as a subscript.",
  },
  {
    id: "c2",
    subject: "chemistry",
    topic: "Mole e stechiometria",
    question:
      "How many moles of oxygen atoms are present in 2 moles of CO₂?",
    options: ["1 mole", "2 moles", "4 moles", "6 moles", "0.5 moles"],
    correct: 2,
    explanation:
      "Each CO₂ molecule contains 2 oxygen atoms. 2 moles of CO₂ contain 2 × 2 = 4 moles of oxygen atoms.",
    studyTip:
      "Always read the subscript as 'per molecule', then multiply by however many moles of the compound you're given. This two-step habit prevents almost all stoichiometry slip-ups.",
  },
  {
    id: "p1",
    subject: "physics",
    topic: "Cinematica",
    question:
      "A car accelerates uniformly from rest to 20 m/s in 4 seconds. What is its acceleration?",
    options: ["4 m/s²", "5 m/s²", "8 m/s²", "16 m/s²", "20 m/s²"],
    correct: 1,
    explanation:
      "Acceleration = Δv / Δt = (20 − 0) / 4 = 5 m/s².",
    studyTip:
      "Write down the kinematics formulas (v = u + at, s = ut + ½at², v² = u² + 2as) and identify which variables the question gives you BEFORE picking a formula. Most errors come from picking the wrong one, not from the arithmetic.",
  },
  {
    id: "p2",
    subject: "physics",
    topic: "Densità e pressione",
    question:
      "An object has a mass of 600 g and a volume of 200 cm³. What is its density?",
    options: [
      "0.3 g/cm³",
      "3 g/cm³",
      "1.2 g/cm³",
      "120 g/cm³",
      "30 g/cm³",
    ],
    correct: 1,
    explanation:
      "Density = mass / volume = 600 g / 200 cm³ = 3 g/cm³.",
    studyTip:
      "Density problems are simple division, but watch units carefully: g/cm³ and kg/m³ differ by a factor of 1000. The IMAT sometimes mixes units within the same problem on purpose.",
  },
];

/* Pool used by the full SIMULATION (60q/100min): official past papers +
   the original base/extended question sets only. New quiz-only questions
   (ORIGINAL_QUESTIONS) are deliberately excluded so the simulation stays
   a faithful mock of the real exam composition. */
const SIMULATION_FULL_POOL = [
  ...QUESTION_BANK,
  ...SIMULATION_POOL,
  ...PAST_PAPER_2025,
  ...PAST_PAPER_2024,
  ...PAST_PAPER_2023,
  ...PAST_PAPER_2019,
  ...PAST_PAPER_2018,
  ...PAST_PAPER_2017,
];

/* Pool used by the QUIZ section: everything in the simulation pool,
   PLUS additional quiz-only practice questions. */
const FULL_POOL = [...SIMULATION_FULL_POOL, ...ORIGINAL_QUESTIONS];

const SIMULATION_TOTAL_QUESTIONS = 60;
const SIMULATION_DURATION_SECONDS = 100 * 60; // 100 minutes

/** Fisher-Yates shuffle, returns a new array */
function shuffleArray(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/**
 * Build a 60-question simulation set.
 * Draws ONLY from SIMULATION_FULL_POOL (official past papers + original
 * base/extended sets) — quiz-only practice questions are never included,
 * keeping the simulation a faithful mock of the real exam.
 * Uses each available question once if possible; if the pool has fewer
 * than 60 questions, fills the remainder by reusing questions (shuffled
 * again) and tags which ones are repeats so the UI can be transparent
 * about it.
 */
function buildSimulationSet() {
  const shuffledOnce = shuffleArray(SIMULATION_FULL_POOL);
  const set = shuffledOnce.map((q) => ({ ...q, repeatTag: false }));

  if (set.length >= SIMULATION_TOTAL_QUESTIONS) {
    return shuffleArray(set.slice(0, SIMULATION_TOTAL_QUESTIONS));
  }

  // Need to fill the rest with repeats
  const remaining = SIMULATION_TOTAL_QUESTIONS - set.length;
  const refill = shuffleArray(SIMULATION_FULL_POOL)
    .slice(0, remaining)
    .map((q) => ({ ...q, repeatTag: true }));

  return shuffleArray([...set, ...refill]);
}

// Returns a Monday-anchored ISO date string (YYYY-MM-DD) identifying the
// calendar week a timestamp falls into. Used to bucket attempts by week.
function getWeekKey(timestamp) {
  const d = new Date(timestamp);
  const day = (d.getDay() + 6) % 7; // Monday = 0 ... Sunday = 6
  d.setHours(0, 0, 0, 0);
  d.setDate(d.getDate() - day);
  return d.toISOString().slice(0, 10);
}

function formatWeekLabel(weekKey) {
  const d = new Date(weekKey + "T00:00:00");
  return d.toLocaleDateString("it-IT", { day: "2-digit", month: "2-digit" });
}

// Groups attempts by topic and returns accuracy stats, sorted from
// weakest to strongest. Topics with fewer than `minAttempts` answers
// are excluded (too little data to call them a real weak spot).
function computeWeakTopics(attempts, minAttempts = 3) {
  const topicMap = {};
  attempts.forEach((a) => {
    const key = a.topic || SUBJECTS[a.subject]?.label || a.subject || "Altro";
    if (!topicMap[key]) topicMap[key] = { correct: 0, total: 0, subject: a.subject };
    topicMap[key].total += 1;
    if (a.correct) topicMap[key].correct += 1;
  });
  return Object.entries(topicMap)
    .map(([topic, stats]) => ({
      topic,
      subject: stats.subject,
      total: stats.total,
      correct: stats.correct,
      accuracy: Math.round((stats.correct / stats.total) * 100),
    }))
    .filter((t) => t.total >= minAttempts)
    .sort((a, b) => a.accuracy - b.accuracy);
}

function formatTime(totalSeconds) {
  const m = Math.floor(totalSeconds / 60);
  const s = totalSeconds % 60;
  return `${m}:${s.toString().padStart(2, "0")}`;
}

/* ============================================================
   SHARED UI ATOMS
   ============================================================ */

function SubjectBadge({ subject }) {
  const meta = SUBJECTS[subject];
  const Icon = meta.icon;
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "6px",
        padding: "4px 10px",
        borderRadius: "999px",
        fontSize: "12px",
        fontWeight: 600,
        letterSpacing: "0.02em",
        backgroundColor: `${meta.color}1A`,
        color: meta.color,
        border: `1px solid ${meta.color}33`,
      }}
    >
      <Icon size={13} strokeWidth={2.5} />
      {meta.label}
    </span>
  );
}

/* ============================================================
   QUIZ SECTION
   ============================================================ */

function QuizSection({
  onAttemptComplete,
  pool = FULL_POOL,
  mode = "quiz",
  title = "Quiz per argomento",
  subtitle = "Una domanda alla volta, con spiegazione e consiglio di studio dopo ogni risposta.",
}) {
  const [filterSubject, setFilterSubject] = useState("all");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selected, setSelected] = useState(null);
  const [revealed, setRevealed] = useState(false);
  const [sessionStats, setSessionStats] = useState({ correct: 0, total: 0 });

  // Shuffle once per mount so "Tutte le materie" doesn't always start
  // with the same fixed order, but stays stable while answering.
  const [shuffledPool] = useState(() => shuffleArray(pool));

  const filteredQuestions =
    filterSubject === "all"
      ? shuffledPool
      : shuffledPool.filter((q) => q.subject === filterSubject);

  const question = filteredQuestions[currentIndex] || filteredQuestions[0];

  useEffect(() => {
    setCurrentIndex(0);
    setSelected(null);
    setRevealed(false);
    setSessionStats({ correct: 0, total: 0 });
  }, [filterSubject]);

  const handleSelect = (idx) => {
    if (revealed) return;
    setSelected(idx);
  };

  const handleCheck = () => {
    if (selected === null || revealed) return;
    const isCorrect = selected === question.correct;
    setRevealed(true);
    setSessionStats((s) => ({
      correct: s.correct + (isCorrect ? 1 : 0),
      total: s.total + 1,
    }));
    onAttemptComplete({
      questionId: question.id,
      subject: question.subject,
      topic: question.topic,
      correct: isCorrect,
      timestamp: Date.now(),
      mode,
    });
  };

  const goNext = () => {
    setSelected(null);
    setRevealed(false);
    setCurrentIndex((i) => (i + 1) % filteredQuestions.length);
  };

  const goPrev = () => {
    setSelected(null);
    setRevealed(false);
    setCurrentIndex(
      (i) => (i - 1 + filteredQuestions.length) % filteredQuestions.length
    );
  };

  if (shuffledPool.length === 0) {
    return (
      <div style={{ maxWidth: "560px" }}>
        <h1
          style={{
            fontFamily: "'Source Serif 4', Georgia, serif",
            fontSize: "28px",
            fontWeight: 600,
            color: "#1A1D1F",
            margin: "0 0 10px 0",
          }}
        >
          {title}
        </h1>
        <p style={{ color: "#6B6F73", fontSize: "15px", lineHeight: 1.6 }}>
          Non ci sono ancora domande qui. Rispondi a qualche quiz o completa
          una simulazione per iniziare a raccogliere dati.
        </p>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: "760px" }}>
      <div style={{ marginBottom: "24px" }}>
        <h1
          style={{
            fontFamily: "'Source Serif 4', Georgia, serif",
            fontSize: "28px",
            fontWeight: 600,
            color: "#1A1D1F",
            margin: "0 0 6px 0",
          }}
        >
          {title}
        </h1>
        <p style={{ color: "#6B6F73", fontSize: "14px", margin: 0 }}>
          {subtitle}
        </p>
      </div>

      {/* Subject filter */}
      <div
        style={{
          display: "flex",
          gap: "8px",
          marginBottom: "20px",
          flexWrap: "wrap",
        }}
      >
        {["all", ...Object.keys(SUBJECTS)].map((key) => {
          const isActive = filterSubject === key;
          const label = key === "all" ? "Tutte le materie" : SUBJECTS[key].label;
          const color = key === "all" ? "#1A1D1F" : SUBJECTS[key].color;
          return (
            <button
              key={key}
              onClick={() => setFilterSubject(key)}
              style={{
                padding: "8px 14px",
                borderRadius: "8px",
                border: `1.5px solid ${isActive ? color : "#E8E4DC"}`,
                backgroundColor: isActive ? `${color}14` : "#FFFFFF",
                color: isActive ? color : "#6B6F73",
                fontSize: "13px",
                fontWeight: 600,
                fontFamily: "'IBM Plex Sans', sans-serif",
                cursor: "pointer",
                transition: "all 0.15s ease",
              }}
            >
              {label}
            </button>
          );
        })}
      </div>

      {/* Session stats */}
      <div
        style={{
          display: "flex",
          gap: "16px",
          marginBottom: "20px",
          fontFamily: "'IBM Plex Mono', monospace",
          fontSize: "13px",
          color: "#6B6F73",
        }}
      >
        <span>
          Domanda {currentIndex + 1} / {filteredQuestions.length}
        </span>
        <span>•</span>
        <span>
          Sessione: {sessionStats.correct}/{sessionStats.total} corrette
        </span>
      </div>

      {/* Question card */}
      <div
        style={{
          backgroundColor: "#FFFFFF",
          border: "1.5px solid #E8E4DC",
          borderRadius: "14px",
          padding: "28px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "16px",
          }}
        >
          <SubjectBadge subject={question.subject} />
          <span
            style={{
              fontSize: "12px",
              color: "#9A9D9F",
              fontFamily: "'IBM Plex Mono', monospace",
            }}
          >
            {question.topic}
          </span>
        </div>

        <p
          style={{
            fontSize: "17px",
            lineHeight: "1.6",
            color: "#1A1D1F",
            margin: "0 0 22px 0",
            fontFamily: "'IBM Plex Sans', sans-serif",
          }}
        >
          {question.question}
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          {question.options.map((opt, idx) => {
            const isSelected = selected === idx;
            const isCorrectAnswer = idx === question.correct;
            let bgColor = "#FFFFFF";
            let borderColor = "#E8E4DC";
            let textColor = "#1A1D1F";

            if (revealed) {
              if (isCorrectAnswer) {
                bgColor = "#5B8C5A14";
                borderColor = "#5B8C5A";
                textColor = "#3F6B3E";
              } else if (isSelected && !isCorrectAnswer) {
                bgColor = "#C8632E14";
                borderColor = "#C8632E";
                textColor = "#A34F24";
              }
            } else if (isSelected) {
              bgColor = "#2B5F7514";
              borderColor = "#2B5F75";
              textColor = "#2B5F75";
            }

            return (
              <button
                key={idx}
                onClick={() => handleSelect(idx)}
                disabled={revealed}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "13px 16px",
                  borderRadius: "10px",
                  border: `1.5px solid ${borderColor}`,
                  backgroundColor: bgColor,
                  color: textColor,
                  fontSize: "15px",
                  fontFamily: "'IBM Plex Sans', sans-serif",
                  textAlign: "left",
                  cursor: revealed ? "default" : "pointer",
                  transition: "all 0.15s ease",
                }}
              >
                <span>
                  <strong style={{ marginRight: "10px" }}>
                    {String.fromCharCode(65 + idx)}
                  </strong>
                  {opt}
                </span>
                {revealed && isCorrectAnswer && (
                  <Check size={18} strokeWidth={2.5} />
                )}
                {revealed && isSelected && !isCorrectAnswer && (
                  <X size={18} strokeWidth={2.5} />
                )}
              </button>
            );
          })}
        </div>

        {/* Explanation */}
        {revealed && (
          <div
            style={{
              marginTop: "22px",
              paddingTop: "22px",
              borderTop: "1px solid #E8E4DC",
              display: "flex",
              flexDirection: "column",
              gap: "16px",
            }}
          >
            <div>
              <div
                style={{
                  fontSize: "11px",
                  fontWeight: 700,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  color: "#9A9D9F",
                  marginBottom: "6px",
                }}
              >
                Spiegazione
              </div>
              <p
                style={{
                  fontSize: "14px",
                  lineHeight: "1.65",
                  color: "#3A3D3F",
                  margin: 0,
                }}
              >
                {question.explanation}
              </p>
            </div>

            <div
              style={{
                display: "flex",
                gap: "10px",
                padding: "14px",
                borderRadius: "10px",
                backgroundColor: "#2B5F7508",
                border: "1px solid #2B5F751F",
              }}
            >
              <Lightbulb
                size={18}
                strokeWidth={2}
                color="#2B5F75"
                style={{ flexShrink: 0, marginTop: "2px" }}
              />
              <div>
                <div
                  style={{
                    fontSize: "11px",
                    fontWeight: 700,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    color: "#2B5F75",
                    marginBottom: "4px",
                  }}
                >
                  Come affrontarla la prossima volta
                </div>
                <p
                  style={{
                    fontSize: "14px",
                    lineHeight: "1.6",
                    color: "#2B5F75",
                    margin: 0,
                  }}
                >
                  {question.studyTip}
                </p>
              </div>
            </div>

            <ResourceLink question={question} />
          </div>
        )}
      </div>

      {/* Controls */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: "20px",
        }}
      >
        <button
          onClick={goPrev}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "6px",
            padding: "10px 16px",
            borderRadius: "8px",
            border: "1.5px solid #E8E4DC",
            backgroundColor: "#FFFFFF",
            color: "#6B6F73",
            fontSize: "13px",
            fontWeight: 600,
            cursor: "pointer",
          }}
        >
          <ChevronLeft size={16} />
          Precedente
        </button>

        {!revealed ? (
          <button
            onClick={handleCheck}
            disabled={selected === null}
            style={{
              padding: "10px 28px",
              borderRadius: "8px",
              border: "none",
              backgroundColor: selected === null ? "#E8E4DC" : "#2B5F75",
              color: selected === null ? "#9A9D9F" : "#FFFFFF",
              fontSize: "13px",
              fontWeight: 700,
              cursor: selected === null ? "default" : "pointer",
              letterSpacing: "0.02em",
            }}
          >
            Verifica risposta
          </button>
        ) : (
          <button
            onClick={goNext}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "6px",
              padding: "10px 28px",
              borderRadius: "8px",
              border: "none",
              backgroundColor: "#1A1D1F",
              color: "#FFFFFF",
              fontSize: "13px",
              fontWeight: 700,
              cursor: "pointer",
              letterSpacing: "0.02em",
            }}
          >
            Prossima domanda
            <ChevronRight size={16} />
          </button>
        )}

        <button
          onClick={goNext}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "6px",
            padding: "10px 16px",
            borderRadius: "8px",
            border: "1.5px solid #E8E4DC",
            backgroundColor: "#FFFFFF",
            color: "#6B6F73",
            fontSize: "13px",
            fontWeight: 600,
            cursor: "pointer",
          }}
        >
          Salta
          <ChevronRight size={16} />
        </button>
      </div>
    </div>
  );
}

/* ============================================================
   RIPASSO MIRATO (targeted review)
   Filters the question pool down to whichever topics currently
   have the lowest accuracy, based on the same logic used in the
   advanced stats. Reuses QuizSection for the actual quiz UI.
   ============================================================ */

function RipassoSection({ results, onAttemptComplete }) {
  const attempts = results.attempts || [];
  const MIN_ATTEMPTS_FOR_PRIORITY = 3;
  const ACCURACY_THRESHOLD = 70; // topics below this % are considered priority

  const weakTopics = computeWeakTopics(attempts, MIN_ATTEMPTS_FOR_PRIORITY);
  let targetTopics = weakTopics.filter((t) => t.accuracy < ACCURACY_THRESHOLD);
  // If nothing crosses the threshold (e.g. you're doing great everywhere),
  // fall back to the 5 relatively weakest topics so the mode isn't empty.
  if (targetTopics.length === 0 && weakTopics.length > 0) {
    targetTopics = weakTopics.slice(0, 5);
  }

  if (attempts.length < MIN_ATTEMPTS_FOR_PRIORITY || targetTopics.length === 0) {
    return (
      <div style={{ maxWidth: "560px" }}>
        <h1
          style={{
            fontFamily: "'Source Serif 4', Georgia, serif",
            fontSize: "28px",
            fontWeight: 600,
            color: "#1A1D1F",
            margin: "0 0 10px 0",
          }}
        >
          Ripasso mirato
        </h1>
        <p style={{ color: "#6B6F73", fontSize: "15px", lineHeight: 1.6 }}>
          Rispondi ad almeno {MIN_ATTEMPTS_FOR_PRIORITY} domande per lo stesso
          argomento (nei Quiz o in Simulazione) così posso capire dove hai più
          margine di miglioramento e costruirti un ripasso su misura.
        </p>
      </div>
    );
  }

  const targetTopicNames = new Set(targetTopics.map((t) => t.topic));
  const pool = FULL_POOL.filter((q) => targetTopicNames.has(q.topic));

  const topicList = targetTopics
    .slice(0, 6)
    .map((t) => t.topic)
    .join(", ");

  return (
    <QuizSection
      key={targetTopics.map((t) => t.topic).join("|")}
      onAttemptComplete={onAttemptComplete}
      pool={pool}
      mode="ripasso"
      title="Ripasso mirato"
      subtitle={`${targetTopics.length} argomenti con più margine di miglioramento: ${topicList}${
        targetTopics.length > 6 ? "…" : ""
      }`}
    />
  );
}

/* ============================================================
   SIMULATION SECTION (full mock test: 60 questions, 100 minutes)
   ============================================================ */

function SimulationSection({ onSimulationComplete, onSimulationRecorded }) {
  // phase: "intro" | "running" | "confirm" | "report"
  const [phase, setPhase] = useState("intro");
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState({}); // { [index]: optionIdx }
  const [flagged, setFlagged] = useState({}); // { [index]: true }
  const [timeLeft, setTimeLeft] = useState(SIMULATION_DURATION_SECONDS);
  const [report, setReport] = useState(null);
  const timerRef = useRef(null);

  // Timer effect — only runs while phase === "running"
  useEffect(() => {
    if (phase !== "running") return;

    timerRef.current = setInterval(() => {
      setTimeLeft((t) => {
        if (t <= 1) {
          clearInterval(timerRef.current);
          return 0;
        }
        return t - 1;
      });
    }, 1000);

    return () => clearInterval(timerRef.current);
  }, [phase]);

  // Auto-submit when time runs out
  useEffect(() => {
    if (phase === "running" && timeLeft === 0) {
      handleSubmit();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [timeLeft, phase]);

  const startSimulation = () => {
    const set = buildSimulationSet();
    setQuestions(set);
    setCurrentIndex(0);
    setAnswers({});
    setFlagged({});
    setTimeLeft(SIMULATION_DURATION_SECONDS);
    setReport(null);
    setPhase("running");
  };

  const selectAnswer = (optionIdx) => {
    setAnswers((prev) => ({ ...prev, [currentIndex]: optionIdx }));
  };

  const toggleFlag = () => {
    setFlagged((prev) => ({ ...prev, [currentIndex]: !prev[currentIndex] }));
  };

  const goTo = (idx) => {
    if (idx < 0 || idx >= questions.length) return;
    setCurrentIndex(idx);
  };

  const handleSubmit = () => {
    clearInterval(timerRef.current);

    // Score: IMAT scoring is +1.5 correct, -0.4 wrong, 0 blank (out of 90 for 60 q)
    let correct = 0;
    let wrong = 0;
    let blank = 0;
    const bySubject = {};
    const wrongDetails = [];

    Object.keys(SUBJECTS).forEach((key) => {
      bySubject[key] = { correct: 0, wrong: 0, blank: 0, total: 0 };
    });

    questions.forEach((q, idx) => {
      const subjStats = bySubject[q.subject] || (bySubject[q.subject] = { correct: 0, wrong: 0, blank: 0, total: 0 });
      subjStats.total += 1;

      const given = answers[idx];
      if (given === undefined) {
        blank += 1;
        subjStats.blank += 1;
      } else if (given === q.correct) {
        correct += 1;
        subjStats.correct += 1;
      } else {
        wrong += 1;
        subjStats.wrong += 1;
        wrongDetails.push({ question: q, given, index: idx });
      }
    });

    const score = correct * 1.5 - wrong * 0.4;
    const scoreClamped = Math.max(0, Math.min(90, score));

    const reportData = {
      correct,
      wrong,
      blank,
      total: questions.length,
      score: Math.round(scoreClamped * 10) / 10,
      bySubject,
      wrongDetails,
      timeUsed: SIMULATION_DURATION_SECONDS - timeLeft,
    };

    setReport(reportData);
    setPhase("report");

    // Persist the full simulation summary for the simulation history view
    onSimulationRecorded({
      id: `sim-${Date.now()}`,
      timestamp: Date.now(),
      score: reportData.score,
      correct,
      wrong,
      blank,
      total: questions.length,
      bySubject,
      timeUsed: reportData.timeUsed,
    });

    // Push each answered question into global stats too
    questions.forEach((q, idx) => {
      const given = answers[idx];
      if (given === undefined) return;
      onSimulationComplete({
        questionId: q.id,
        subject: q.subject,
        topic: q.topic,
        correct: given === q.correct,
        timestamp: Date.now(),
        mode: "simulation",
      });
    });
  };

  /* ---------------- INTRO ---------------- */
  if (phase === "intro") {
    const uniqueCount = SIMULATION_FULL_POOL.length;
    const repeatCount = Math.max(0, SIMULATION_TOTAL_QUESTIONS - uniqueCount);

    return (
      <div style={{ maxWidth: "640px" }}>
        <h1
          style={{
            fontFamily: "'Source Serif 4', Georgia, serif",
            fontSize: "28px",
            fontWeight: 600,
            color: "#1A1D1F",
            margin: "0 0 6px 0",
          }}
        >
          Simulazione esame completo
        </h1>
        <p style={{ color: "#6B6F73", fontSize: "14px", margin: "0 0 28px 0" }}>
          Riproduce la struttura ufficiale dell'IMAT.
        </p>

        <div
          style={{
            backgroundColor: "#FFFFFF",
            border: "1.5px solid #E8E4DC",
            borderRadius: "14px",
            padding: "24px",
            marginBottom: "20px",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr 1fr",
              gap: "16px",
              marginBottom: "20px",
            }}
          >
            {[
              { label: "Domande", value: "60" },
              { label: "Tempo", value: "100 min" },
              { label: "Punteggio max", value: "90" },
            ].map((stat) => (
              <div key={stat.label}>
                <div
                  style={{
                    fontFamily: "'IBM Plex Mono', monospace",
                    fontSize: "24px",
                    fontWeight: 600,
                    color: "#2B5F75",
                  }}
                >
                  {stat.value}
                </div>
                <div style={{ fontSize: "12px", color: "#9A9D9F" }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          <div
            style={{
              fontSize: "13px",
              color: "#6B6F73",
              lineHeight: "1.7",
              borderTop: "1px solid #E8E4DC",
              paddingTop: "16px",
            }}
          >
            <strong style={{ color: "#1A1D1F" }}>Punteggio:</strong> +1.5 per
            risposta corretta, −0.4 per risposta errata, 0 per domanda
            lasciata in bianco — come nel test reale.
            <br />
            <br />
            <strong style={{ color: "#1A1D1F" }}>Navigazione:</strong> puoi
            muoverti liberamente tra le domande, segnarle per revisione e
            tornare indietro, esattamente come nel test cartaceo.
          </div>
        </div>

        {repeatCount > 0 && (
          <div
            style={{
              display: "flex",
              gap: "10px",
              padding: "14px",
              borderRadius: "10px",
              backgroundColor: "#C8632E0D",
              border: "1px solid #C8632E26",
              marginBottom: "20px",
            }}
          >
            <AlertTriangle
              size={17}
              color="#C8632E"
              strokeWidth={2}
              style={{ flexShrink: 0, marginTop: "1px" }}
            />
            <p style={{ fontSize: "13px", color: "#A34F24", margin: 0, lineHeight: "1.6" }}>
              Il pool attuale ha {uniqueCount} domande uniche, quindi{" "}
              {repeatCount} domande di questa simulazione saranno ripetizioni
              (mescolate, posizioni diverse). Man mano che il pool cresce, le
              ripetizioni diminuiranno.
            </p>
          </div>
        )}

        <button
          onClick={startSimulation}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            padding: "13px 28px",
            borderRadius: "10px",
            border: "none",
            backgroundColor: "#1A1D1F",
            color: "#FFFFFF",
            fontSize: "14px",
            fontWeight: 700,
            cursor: "pointer",
            letterSpacing: "0.02em",
          }}
        >
          <Play size={16} fill="#FFFFFF" />
          Inizia simulazione
        </button>
      </div>
    );
  }

  /* ---------------- CONFIRM SUBMIT ---------------- */
  if (phase === "confirm") {
    const answeredCount = Object.keys(answers).length;
    const blankCount = questions.length - answeredCount;
    const flaggedCount = Object.values(flagged).filter(Boolean).length;

    return (
      <div style={{ maxWidth: "480px" }}>
        <h1
          style={{
            fontFamily: "'Source Serif 4', Georgia, serif",
            fontSize: "24px",
            fontWeight: 600,
            color: "#1A1D1F",
            margin: "0 0 16px 0",
          }}
        >
          Confermi la consegna?
        </h1>

        <div
          style={{
            backgroundColor: "#FFFFFF",
            border: "1.5px solid #E8E4DC",
            borderRadius: "12px",
            padding: "20px",
            marginBottom: "20px",
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            fontSize: "14px",
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <span style={{ color: "#6B6F73" }}>Risposte date</span>
            <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontWeight: 600 }}>
              {answeredCount} / {questions.length}
            </span>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <span style={{ color: "#6B6F73" }}>Lasciate in bianco</span>
            <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontWeight: 600, color: blankCount > 0 ? "#C8632E" : "#1A1D1F" }}>
              {blankCount}
            </span>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <span style={{ color: "#6B6F73" }}>Segnate per revisione</span>
            <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontWeight: 600 }}>
              {flaggedCount}
            </span>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <span style={{ color: "#6B6F73" }}>Tempo rimasto</span>
            <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontWeight: 600 }}>
              {formatTime(timeLeft)}
            </span>
          </div>
        </div>

        <div style={{ display: "flex", gap: "10px" }}>
          <button
            onClick={() => setPhase("running")}
            style={{
              flex: 1,
              padding: "12px",
              borderRadius: "8px",
              border: "1.5px solid #E8E4DC",
              backgroundColor: "#FFFFFF",
              color: "#6B6F73",
              fontSize: "13px",
              fontWeight: 700,
              cursor: "pointer",
            }}
          >
            Torna indietro
          </button>
          <button
            onClick={handleSubmit}
            style={{
              flex: 1,
              padding: "12px",
              borderRadius: "8px",
              border: "none",
              backgroundColor: "#1A1D1F",
              color: "#FFFFFF",
              fontSize: "13px",
              fontWeight: 700,
              cursor: "pointer",
            }}
          >
            Consegna definitivamente
          </button>
        </div>
      </div>
    );
  }

  /* ---------------- REPORT ---------------- */
  if (phase === "report" && report) {
    return (
      <div style={{ maxWidth: "760px" }}>
        <h1
          style={{
            fontFamily: "'Source Serif 4', Georgia, serif",
            fontSize: "28px",
            fontWeight: 600,
            color: "#1A1D1F",
            margin: "0 0 6px 0",
          }}
        >
          Risultato simulazione
        </h1>
        <p style={{ color: "#6B6F73", fontSize: "14px", margin: "0 0 24px 0" }}>
          Tempo impiegato: {formatTime(report.timeUsed)} di{" "}
          {formatTime(SIMULATION_DURATION_SECONDS)}
        </p>

        {/* Score hero */}
        <div
          style={{
            backgroundColor: "#FFFFFF",
            border: "1.5px solid #E8E4DC",
            borderRadius: "14px",
            padding: "28px",
            marginBottom: "20px",
            display: "flex",
            alignItems: "center",
            gap: "32px",
          }}
        >
          <div>
            <div
              style={{
                fontFamily: "'IBM Plex Mono', monospace",
                fontSize: "48px",
                fontWeight: 700,
                color: "#2B5F75",
                lineHeight: 1,
              }}
            >
              {report.score}
              <span style={{ fontSize: "20px", color: "#9A9D9F" }}>/90</span>
            </div>
            <div style={{ fontSize: "12px", color: "#9A9D9F", marginTop: "6px" }}>
              Punteggio stimato
            </div>
          </div>

          <div style={{ flex: 1, display: "flex", gap: "20px" }}>
            <div>
              <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "20px", fontWeight: 600, color: "#5B8C5A" }}>
                {report.correct}
              </div>
              <div style={{ fontSize: "12px", color: "#9A9D9F" }}>Corrette</div>
            </div>
            <div>
              <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "20px", fontWeight: 600, color: "#C8632E" }}>
                {report.wrong}
              </div>
              <div style={{ fontSize: "12px", color: "#9A9D9F" }}>Errate</div>
            </div>
            <div>
              <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "20px", fontWeight: 600, color: "#9A9D9F" }}>
                {report.blank}
              </div>
              <div style={{ fontSize: "12px", color: "#9A9D9F" }}>Bianche</div>
            </div>
          </div>
        </div>

        {/* By subject breakdown */}
        <div
          style={{
            fontSize: "11px",
            fontWeight: 700,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            color: "#9A9D9F",
            marginBottom: "12px",
          }}
        >
          Per materia
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginBottom: "28px" }}>
          {Object.entries(report.bySubject).map(([key, stats]) => {
            if (stats.total === 0) return null;
            const meta = SUBJECTS[key];
            const Icon = meta.icon;
            const pct = Math.round((stats.correct / stats.total) * 100);
            return (
              <div
                key={key}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "14px",
                  backgroundColor: "#FFFFFF",
                  border: "1.5px solid #E8E4DC",
                  borderRadius: "10px",
                  padding: "14px 16px",
                }}
              >
                <div
                  style={{
                    width: "36px",
                    height: "36px",
                    borderRadius: "8px",
                    backgroundColor: `${meta.color}14`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <Icon size={17} color={meta.color} strokeWidth={2} />
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: "14px", fontWeight: 600, color: "#1A1D1F", marginBottom: "4px" }}>
                    {meta.label}
                  </div>
                  <div style={{ height: "6px", backgroundColor: "#F0EEE9", borderRadius: "999px", overflow: "hidden" }}>
                    <div style={{ height: "100%", width: `${pct}%`, backgroundColor: meta.color, borderRadius: "999px" }} />
                  </div>
                </div>
                <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "13px", color: "#6B6F73", minWidth: "90px", textAlign: "right" }}>
                  {stats.correct}✓ {stats.wrong}✗ {stats.blank}—
                </div>
              </div>
            );
          })}
        </div>

        {/* Wrong answers review */}
        {report.wrongDetails.length > 0 && (
          <>
            <div
              style={{
                fontSize: "11px",
                fontWeight: 700,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: "#9A9D9F",
                marginBottom: "12px",
              }}
            >
              Domande da rivedere ({report.wrongDetails.length})
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginBottom: "28px" }}>
              {report.wrongDetails.map(({ question, given, index }) => (
                <div
                  key={`${question.id}-${index}`}
                  style={{
                    backgroundColor: "#FFFFFF",
                    border: "1.5px solid #E8E4DC",
                    borderRadius: "12px",
                    padding: "18px",
                  }}
                >
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "10px" }}>
                    <SubjectBadge subject={question.subject} />
                    <span style={{ fontSize: "12px", color: "#9A9D9F", fontFamily: "'IBM Plex Mono', monospace" }}>
                      {question.topic}
                    </span>
                  </div>
                  <p style={{ fontSize: "14px", color: "#1A1D1F", margin: "0 0 10px 0", lineHeight: "1.6" }}>
                    {question.question}
                  </p>
                  <div style={{ fontSize: "13px", marginBottom: "10px" }}>
                    <div style={{ color: "#A34F24", marginBottom: "4px" }}>
                      Tua risposta: <strong>{String.fromCharCode(65 + given)}. {question.options[given]}</strong>
                    </div>
                    <div style={{ color: "#3F6B3E" }}>
                      Corretta: <strong>{String.fromCharCode(65 + question.correct)}. {question.options[question.correct]}</strong>
                    </div>
                  </div>
                  <div style={{ fontSize: "13px", color: "#6B6F73", lineHeight: "1.6", marginBottom: "10px" }}>
                    {question.explanation}
                  </div>
                  <div
                    style={{
                      display: "flex",
                      gap: "8px",
                      padding: "10px 12px",
                      borderRadius: "8px",
                      backgroundColor: "#2B5F7508",
                      fontSize: "12px",
                      color: "#2B5F75",
                      lineHeight: "1.5",
                    }}
                  >
                    <Lightbulb size={14} strokeWidth={2} style={{ flexShrink: 0, marginTop: "1px" }} />
                    {question.studyTip}
                  </div>

                  <div style={{ marginTop: "10px" }}>
                    <ResourceLink question={question} />
                  </div>
                </div>
              ))}
            </div>
          </>
        )}

        <button
          onClick={() => setPhase("intro")}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            padding: "12px 24px",
            borderRadius: "10px",
            border: "1.5px solid #E8E4DC",
            backgroundColor: "#FFFFFF",
            color: "#1A1D1F",
            fontSize: "14px",
            fontWeight: 700,
            cursor: "pointer",
          }}
        >
          <RotateCcw size={16} />
          Nuova simulazione
        </button>
      </div>
    );
  }

  /* ---------------- RUNNING ---------------- */
  const question = questions[currentIndex];
  if (!question) return null;

  const isUrgent = timeLeft <= 300; // last 5 minutes
  const answeredCount = Object.keys(answers).length;

  return (
    <div style={{ maxWidth: "900px" }}>
      {/* Top bar: progress + timer */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "20px",
          padding: "14px 20px",
          backgroundColor: "#FFFFFF",
          border: "1.5px solid #E8E4DC",
          borderRadius: "12px",
        }}
      >
        <div style={{ fontSize: "13px", color: "#6B6F73" }}>
          Domanda{" "}
          <strong style={{ color: "#1A1D1F", fontFamily: "'IBM Plex Mono', monospace" }}>
            {currentIndex + 1}
          </strong>{" "}
          / {questions.length}
          <span style={{ marginLeft: "12px", color: "#9A9D9F" }}>
            • {answeredCount} risposte date
          </span>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            fontFamily: "'IBM Plex Mono', monospace",
            fontSize: "20px",
            fontWeight: 700,
            color: isUrgent ? "#C8632E" : "#1A1D1F",
            padding: "6px 14px",
            borderRadius: "8px",
            backgroundColor: isUrgent ? "#C8632E14" : "#F0EEE9",
          }}
        >
          <Timer size={18} strokeWidth={2.5} />
          {formatTime(timeLeft)}
        </div>
      </div>

      <div style={{ display: "flex", gap: "20px" }}>
        {/* Question column */}
        <div style={{ flex: 1, minWidth: 0 }}>
          <div
            style={{
              backgroundColor: "#FFFFFF",
              border: "1.5px solid #E8E4DC",
              borderRadius: "14px",
              padding: "28px",
              marginBottom: "16px",
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" }}>
              <SubjectBadge subject={question.subject} />
              <button
                onClick={toggleFlag}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                  padding: "6px 12px",
                  borderRadius: "8px",
                  border: `1.5px solid ${flagged[currentIndex] ? "#C8632E" : "#E8E4DC"}`,
                  backgroundColor: flagged[currentIndex] ? "#C8632E14" : "#FFFFFF",
                  color: flagged[currentIndex] ? "#C8632E" : "#9A9D9F",
                  fontSize: "12px",
                  fontWeight: 600,
                  cursor: "pointer",
                }}
              >
                <Flag size={13} fill={flagged[currentIndex] ? "#C8632E" : "none"} />
                {flagged[currentIndex] ? "Segnata" : "Segna per dopo"}
              </button>
            </div>

            <p
              style={{
                fontSize: "17px",
                lineHeight: "1.6",
                color: "#1A1D1F",
                margin: "0 0 22px 0",
              }}
            >
              {question.question}
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              {question.options.map((opt, idx) => {
                const isSelected = answers[currentIndex] === idx;
                return (
                  <button
                    key={idx}
                    onClick={() => selectAnswer(idx)}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      padding: "13px 16px",
                      borderRadius: "10px",
                      border: `1.5px solid ${isSelected ? "#2B5F75" : "#E8E4DC"}`,
                      backgroundColor: isSelected ? "#2B5F7514" : "#FFFFFF",
                      color: isSelected ? "#2B5F75" : "#1A1D1F",
                      fontSize: "15px",
                      textAlign: "left",
                      cursor: "pointer",
                    }}
                  >
                    <strong style={{ marginRight: "10px" }}>
                      {String.fromCharCode(65 + idx)}
                    </strong>
                    {opt}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Navigation controls */}
          <div style={{ display: "flex", justifyContent: "space-between", gap: "10px" }}>
            <button
              onClick={() => goTo(currentIndex - 1)}
              disabled={currentIndex === 0}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "6px",
                padding: "10px 16px",
                borderRadius: "8px",
                border: "1.5px solid #E8E4DC",
                backgroundColor: "#FFFFFF",
                color: currentIndex === 0 ? "#D8D5CE" : "#6B6F73",
                fontSize: "13px",
                fontWeight: 600,
                cursor: currentIndex === 0 ? "default" : "pointer",
              }}
            >
              <ChevronLeft size={16} />
              Precedente
            </button>

            {currentIndex === questions.length - 1 ? (
              <button
                onClick={() => setPhase("confirm")}
                style={{
                  padding: "10px 28px",
                  borderRadius: "8px",
                  border: "none",
                  backgroundColor: "#1A1D1F",
                  color: "#FFFFFF",
                  fontSize: "13px",
                  fontWeight: 700,
                  cursor: "pointer",
                }}
              >
                Vai alla consegna
              </button>
            ) : (
              <button
                onClick={() => goTo(currentIndex + 1)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                  padding: "10px 28px",
                  borderRadius: "8px",
                  border: "none",
                  backgroundColor: "#1A1D1F",
                  color: "#FFFFFF",
                  fontSize: "13px",
                  fontWeight: 700,
                  cursor: "pointer",
                }}
              >
                Successiva
                <ChevronRight size={16} />
              </button>
            )}
          </div>
        </div>

        {/* Question grid sidebar */}
        <div
          style={{
            width: "200px",
            flexShrink: 0,
            backgroundColor: "#FFFFFF",
            border: "1.5px solid #E8E4DC",
            borderRadius: "14px",
            padding: "16px",
            height: "fit-content",
          }}
        >
          <div
            style={{
              fontSize: "11px",
              fontWeight: 700,
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              color: "#9A9D9F",
              marginBottom: "12px",
            }}
          >
            Mappa domande
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(6, 1fr)",
              gap: "6px",
              marginBottom: "16px",
            }}
          >
            {questions.map((_, idx) => {
              const isAnswered = answers[idx] !== undefined;
              const isFlaggedQ = flagged[idx];
              const isCurrent = idx === currentIndex;
              let bg = "#F0EEE9";
              let color = "#9A9D9F";
              let border = "1.5px solid transparent";

              if (isCurrent) {
                border = "1.5px solid #1A1D1F";
              }
              if (isAnswered) {
                bg = "#5B8C5A1F";
                color = "#5B8C5A";
              }
              if (isFlaggedQ) {
                bg = "#C8632E1F";
                color = "#C8632E";
              }

              return (
                <button
                  key={idx}
                  onClick={() => goTo(idx)}
                  style={{
                    width: "100%",
                    aspectRatio: "1",
                    borderRadius: "6px",
                    border,
                    backgroundColor: bg,
                    color,
                    fontSize: "11px",
                    fontWeight: 600,
                    fontFamily: "'IBM Plex Mono', monospace",
                    cursor: "pointer",
                  }}
                >
                  {idx + 1}
                </button>
              );
            })}
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "6px", fontSize: "11px", color: "#9A9D9F" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
              <div style={{ width: "10px", height: "10px", borderRadius: "3px", backgroundColor: "#5B8C5A1F" }} />
              Risposta data
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
              <div style={{ width: "10px", height: "10px", borderRadius: "3px", backgroundColor: "#C8632E1F" }} />
              Segnata
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
              <div style={{ width: "10px", height: "10px", borderRadius: "3px", backgroundColor: "#F0EEE9" }} />
              Da fare
            </div>
          </div>

          <button
            onClick={() => setPhase("confirm")}
            style={{
              width: "100%",
              marginTop: "16px",
              padding: "10px",
              borderRadius: "8px",
              border: "1.5px solid #E8E4DC",
              backgroundColor: "#FFFFFF",
              color: "#6B6F73",
              fontSize: "12px",
              fontWeight: 600,
              cursor: "pointer",
            }}
          >
            Termina ora
          </button>
        </div>
      </div>
    </div>
  );
}

/* ============================================================
   ADVANCED STATS
   Weekly trend, topic weakness report, simulation history.
   ============================================================ */

function StatLabel({ children }) {
  return (
    <div
      style={{
        fontSize: "11px",
        fontWeight: 700,
        letterSpacing: "0.08em",
        textTransform: "uppercase",
        color: "#9A9D9F",
        marginBottom: "12px",
        marginTop: "32px",
        display: "flex",
        alignItems: "center",
        gap: "6px",
      }}
    >
      {children}
    </div>
  );
}

function StatsSection({ results }) {
  const attempts = results.attempts || [];
  const simulations = results.simulations || [];

  /* ---------- Weekly trend: accuracy per week, last 8 active weeks ---------- */
  const weekMap = {};
  attempts.forEach((a) => {
    const key = getWeekKey(a.timestamp);
    if (!weekMap[key]) weekMap[key] = { correct: 0, total: 0 };
    weekMap[key].total += 1;
    if (a.correct) weekMap[key].correct += 1;
  });
  const weeks = Object.keys(weekMap).sort().slice(-8);
  const maxWeekTotal = Math.max(1, ...weeks.map((w) => weekMap[w].total));

  /* ---------- Topic weakness: lowest accuracy topics with enough data ---------- */
  const MIN_ATTEMPTS_FOR_PRIORITY = 3;
  const weakTopics = computeWeakTopics(attempts, MIN_ATTEMPTS_FOR_PRIORITY).slice(0, 8);

  /* ---------- Simulation history: most recent first ---------- */
  const sortedSimulations = [...simulations].sort((a, b) => b.timestamp - a.timestamp);

  const cardStyle = {
    backgroundColor: "#FFFFFF",
    border: "1.5px solid #E8E4DC",
    borderRadius: "12px",
    padding: "18px",
  };
  const emptyStyle = { color: "#9A9D9F", fontSize: "13px", margin: 0 };

  return (
    <div style={{ maxWidth: "760px" }}>
      <div style={{ marginBottom: "8px" }}>
        <h1
          style={{
            fontFamily: "'Source Serif 4', Georgia, serif",
            fontSize: "28px",
            fontWeight: 600,
            color: "#1A1D1F",
            margin: "0 0 6px 0",
          }}
        >
          Statistiche avanzate
        </h1>
        <p style={{ color: "#6B6F73", fontSize: "14px", margin: 0 }}>
          Andamento nel tempo, argomenti da rivedere con priorità e storico delle simulazioni.
        </p>
      </div>

      {/* Weekly trend */}
      <StatLabel>
        <TrendingUp size={13} strokeWidth={2.5} />
        Andamento settimanale
      </StatLabel>
      <div style={cardStyle}>
        {weeks.length === 0 ? (
          <p style={emptyStyle}>
            Non ci sono ancora abbastanza dati. Rispondi a qualche domanda nei Quiz o in Simulazione.
          </p>
        ) : (
          <svg
            viewBox={`0 0 ${weeks.length * 64} 150`}
            width="100%"
            height="150"
            style={{ overflow: "visible" }}
          >
            {weeks.map((w, i) => {
              const stats = weekMap[w];
              const pct = Math.round((stats.correct / stats.total) * 100);
              const barHeight = Math.max(4, (stats.total / maxWeekTotal) * 90);
              const x = i * 64 + 12;
              return (
                <g key={w}>
                  <text
                    x={x + 20}
                    y={112 - barHeight - 8}
                    textAnchor="middle"
                    fontSize="11"
                    fontWeight="600"
                    fill="#1A1D1F"
                    fontFamily="'IBM Plex Mono', monospace"
                  >
                    {pct}%
                  </text>
                  <rect
                    x={x}
                    y={112 - barHeight}
                    width="40"
                    height={barHeight}
                    rx="5"
                    fill="#2B5F75"
                    opacity={0.25 + (pct / 100) * 0.55}
                  />
                  <text
                    x={x + 20}
                    y={130}
                    textAnchor="middle"
                    fontSize="10"
                    fill="#9A9D9F"
                    fontFamily="'IBM Plex Mono', monospace"
                  >
                    {formatWeekLabel(w)}
                  </text>
                  <text
                    x={x + 20}
                    y={143}
                    textAnchor="middle"
                    fontSize="9"
                    fill="#9A9D9F"
                  >
                    {stats.total}q
                  </text>
                </g>
              );
            })}
          </svg>
        )}
      </div>

      {/* Topic weakness report */}
      <StatLabel>
        <AlertTriangle size={13} strokeWidth={2.5} />
        Argomenti da rivedere con priorità
      </StatLabel>
      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        {weakTopics.length === 0 ? (
          <div style={cardStyle}>
            <p style={emptyStyle}>
              Rispondi ad almeno {MIN_ATTEMPTS_FOR_PRIORITY} domande dello stesso argomento per vedere qui le priorità di ripasso.
            </p>
          </div>
        ) : (
          weakTopics.map((t) => {
            const meta = SUBJECTS[t.subject] || { color: "#9A9D9F", icon: Lightbulb };
            const Icon = meta.icon;
            return (
              <div
                key={t.topic}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "14px",
                  backgroundColor: "#FFFFFF",
                  border: "1.5px solid #E8E4DC",
                  borderRadius: "10px",
                  padding: "14px 16px",
                }}
              >
                <div
                  style={{
                    width: "36px",
                    height: "36px",
                    borderRadius: "8px",
                    backgroundColor: `${meta.color}14`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <Icon size={17} color={meta.color} strokeWidth={2} />
                </div>
                <div style={{ flex: 1 }}>
                  <div
                    style={{
                      fontSize: "14px",
                      fontWeight: 600,
                      color: "#1A1D1F",
                      marginBottom: "4px",
                    }}
                  >
                    {t.topic}
                  </div>
                  <div
                    style={{
                      height: "6px",
                      backgroundColor: "#F0EEE9",
                      borderRadius: "999px",
                      overflow: "hidden",
                    }}
                  >
                    <div
                      style={{
                        height: "100%",
                        width: `${t.accuracy}%`,
                        backgroundColor: t.accuracy < 50 ? "#C8632E" : meta.color,
                        borderRadius: "999px",
                      }}
                    />
                  </div>
                </div>
                <div
                  style={{
                    fontFamily: "'IBM Plex Mono', monospace",
                    fontSize: "13px",
                    color: "#6B6F73",
                    minWidth: "90px",
                    textAlign: "right",
                  }}
                >
                  {t.correct}/{t.total} · {t.accuracy}%
                </div>
              </div>
            );
          })
        )}
      </div>

      {/* Simulation history */}
      <StatLabel>
        <History size={13} strokeWidth={2.5} />
        Storico simulazioni
      </StatLabel>
      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        {sortedSimulations.length === 0 ? (
          <div style={cardStyle}>
            <p style={emptyStyle}>
              Nessuna simulazione completata finora. Trovi la modalità Simulazione nel menu a sinistra.
            </p>
          </div>
        ) : (
          sortedSimulations.map((sim, i) => {
            const prev = sortedSimulations[i + 1];
            const delta = prev ? Math.round((sim.score - prev.score) * 10) / 10 : null;
            const date = new Date(sim.timestamp).toLocaleDateString("it-IT", {
              day: "2-digit",
              month: "2-digit",
              year: "numeric",
            });
            return (
              <div
                key={sim.id}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "16px",
                  backgroundColor: "#FFFFFF",
                  border: "1.5px solid #E8E4DC",
                  borderRadius: "10px",
                  padding: "14px 16px",
                }}
              >
                <div
                  style={{
                    fontFamily: "'IBM Plex Mono', monospace",
                    fontSize: "12px",
                    color: "#9A9D9F",
                    minWidth: "72px",
                  }}
                >
                  {date}
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: "14px", fontWeight: 600, color: "#1A1D1F" }}>
                    {sim.score}/90 punti
                  </div>
                  <div style={{ fontSize: "12px", color: "#9A9D9F", marginTop: "2px" }}>
                    {sim.correct} corrette · {sim.wrong} sbagliate · {sim.blank} in bianco
                  </div>
                </div>
                {delta !== null && (
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "4px",
                      fontFamily: "'IBM Plex Mono', monospace",
                      fontSize: "12px",
                      fontWeight: 600,
                      color: delta > 0 ? "#5B8C5A" : delta < 0 ? "#C8632E" : "#9A9D9F",
                    }}
                  >
                    {delta > 0 ? (
                      <TrendingUp size={13} />
                    ) : delta < 0 ? (
                      <TrendingDown size={13} />
                    ) : null}
                    {delta > 0 ? `+${delta}` : delta}
                  </div>
                )}
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}

/* ============================================================
   PLACEHOLDER SECTIONS (future steps)
   ============================================================ */

function PlaceholderSection({ icon: Icon, title, description, nextStep }) {
  return (
    <div style={{ maxWidth: "560px" }}>
      <div
        style={{
          width: "52px",
          height: "52px",
          borderRadius: "12px",
          backgroundColor: "#2B5F7514",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: "20px",
        }}
      >
        <Icon size={24} color="#2B5F75" strokeWidth={2} />
      </div>
      <h1
        style={{
          fontFamily: "'Source Serif 4', Georgia, serif",
          fontSize: "28px",
          fontWeight: 600,
          color: "#1A1D1F",
          margin: "0 0 10px 0",
        }}
      >
        {title}
      </h1>
      <p
        style={{
          color: "#6B6F73",
          fontSize: "15px",
          lineHeight: "1.6",
          margin: "0 0 16px 0",
        }}
      >
        {description}
      </p>
      <div
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "8px",
          padding: "10px 16px",
          borderRadius: "8px",
          backgroundColor: "#FAFAF7",
          border: "1px dashed #E8E4DC",
          fontSize: "13px",
          color: "#9A9D9F",
          fontFamily: "'IBM Plex Mono', monospace",
        }}
      >
        {nextStep}
      </div>
    </div>
  );
}

/* ============================================================
   STATS / DASHBOARD SECTION
   ============================================================ */

function DashboardSection({ results, onImport }) {
  const attempts = results.attempts || [];
  const total = attempts.length;
  const correct = attempts.filter((a) => a.correct).length;
  const accuracy = total > 0 ? Math.round((correct / total) * 100) : 0;
  const fileInputRef = useRef(null);
  const [importMessage, setImportMessage] = useState(null);

  const bySubject = {};
  Object.keys(SUBJECTS).forEach((key) => {
    const subAttempts = attempts.filter((a) => a.subject === key);
    bySubject[key] = {
      total: subAttempts.length,
      correct: subAttempts.filter((a) => a.correct).length,
    };
  });

  const handleExport = () => {
    const dataStr = JSON.stringify(results, null, 2);
    const blob = new Blob([dataStr], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    const date = new Date().toISOString().slice(0, 10);
    a.href = url;
    a.download = `imat-prep-backup-${date}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const handleImportClick = () => {
    setImportMessage(null);
    fileInputRef.current?.click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const parsed = JSON.parse(event.target.result);
        if (!parsed || !Array.isArray(parsed.attempts)) {
          throw new Error("Formato non valido");
        }
        onImport({
          attempts: parsed.attempts || [],
          simulations: Array.isArray(parsed.simulations) ? parsed.simulations : [],
        });
        setImportMessage({ type: "ok", text: "Dati importati con successo." });
      } catch (err) {
        setImportMessage({
          type: "error",
          text: "Il file non sembra un backup valido di IMAT Prep.",
        });
      }
    };
    reader.readAsText(file);
    e.target.value = ""; // allow re-selecting the same file later
  };

  return (
    <div style={{ maxWidth: "760px" }}>
      <div style={{ marginBottom: "28px" }}>
        <h1
          style={{
            fontFamily: "'Source Serif 4', Georgia, serif",
            fontSize: "28px",
            fontWeight: 600,
            color: "#1A1D1F",
            margin: "0 0 6px 0",
          }}
        >
          I tuoi progressi
        </h1>
        <p style={{ color: "#6B6F73", fontSize: "14px", margin: 0 }}>
          {total === 0
            ? "Inizia a rispondere ai quiz per vedere le statistiche qui."
            : `${total} domande completate finora.`}
        </p>
      </div>

      {total > 0 && (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            gap: "12px",
            marginBottom: "28px",
          }}
        >
          {[
            { label: "Domande totali", value: total },
            { label: "Risposte corrette", value: correct },
            { label: "Accuratezza", value: `${accuracy}%` },
          ].map((stat) => (
            <div
              key={stat.label}
              style={{
                backgroundColor: "#FFFFFF",
                border: "1.5px solid #E8E4DC",
                borderRadius: "12px",
                padding: "18px",
              }}
            >
              <div
                style={{
                  fontFamily: "'IBM Plex Mono', monospace",
                  fontSize: "26px",
                  fontWeight: 600,
                  color: "#1A1D1F",
                  marginBottom: "4px",
                }}
              >
                {stat.value}
              </div>
              <div style={{ fontSize: "12px", color: "#9A9D9F" }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      )}

      <div
        style={{
          fontSize: "11px",
          fontWeight: 700,
          letterSpacing: "0.08em",
          textTransform: "uppercase",
          color: "#9A9D9F",
          marginBottom: "12px",
        }}
      >
        Per materia
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        {Object.entries(SUBJECTS).map(([key, meta]) => {
          const stats = bySubject[key];
          const pct =
            stats.total > 0
              ? Math.round((stats.correct / stats.total) * 100)
              : 0;
          const Icon = meta.icon;
          return (
            <div
              key={key}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "14px",
                backgroundColor: "#FFFFFF",
                border: "1.5px solid #E8E4DC",
                borderRadius: "10px",
                padding: "14px 16px",
              }}
            >
              <div
                style={{
                  width: "36px",
                  height: "36px",
                  borderRadius: "8px",
                  backgroundColor: `${meta.color}14`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <Icon size={17} color={meta.color} strokeWidth={2} />
              </div>
              <div style={{ flex: 1 }}>
                <div
                  style={{
                    fontSize: "14px",
                    fontWeight: 600,
                    color: "#1A1D1F",
                    marginBottom: "4px",
                  }}
                >
                  {meta.label}
                </div>
                <div
                  style={{
                    height: "6px",
                    backgroundColor: "#F0EEE9",
                    borderRadius: "999px",
                    overflow: "hidden",
                  }}
                >
                  <div
                    style={{
                      height: "100%",
                      width: `${pct}%`,
                      backgroundColor: meta.color,
                      borderRadius: "999px",
                      transition: "width 0.3s ease",
                    }}
                  />
                </div>
              </div>
              <div
                style={{
                  fontFamily: "'IBM Plex Mono', monospace",
                  fontSize: "13px",
                  color: "#6B6F73",
                  minWidth: "60px",
                  textAlign: "right",
                }}
              >
                {stats.total > 0
                  ? `${stats.correct}/${stats.total}`
                  : "—"}
              </div>
            </div>
          );
        })}
      </div>

      <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", marginTop: "28px" }}>
        <button
          onClick={handleExport}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "6px",
            padding: "9px 14px",
            borderRadius: "8px",
            border: "1.5px solid #E8E4DC",
            backgroundColor: "#FFFFFF",
            color: "#6B6F73",
            fontSize: "12px",
            fontWeight: 600,
            cursor: "pointer",
          }}
        >
          <Download size={13} />
          Esporta dati
        </button>

        <button
          onClick={handleImportClick}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "6px",
            padding: "9px 14px",
            borderRadius: "8px",
            border: "1.5px solid #E8E4DC",
            backgroundColor: "#FFFFFF",
            color: "#6B6F73",
            fontSize: "12px",
            fontWeight: 600,
            cursor: "pointer",
          }}
        >
          <Upload size={13} />
          Importa dati
        </button>
        <input
          ref={fileInputRef}
          type="file"
          accept="application/json"
          onChange={handleFileChange}
          style={{ display: "none" }}
        />

        {total > 0 && (
          <button
            onClick={() => {
              localStorage.removeItem(STORAGE_KEY);
              window.location.reload();
            }}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
              padding: "9px 14px",
              borderRadius: "8px",
              border: "1.5px solid #E8E4DC",
              backgroundColor: "#FFFFFF",
              color: "#9A9D9F",
              fontSize: "12px",
              fontWeight: 600,
              cursor: "pointer",
            }}
          >
            <RotateCcw size={13} />
            Azzera statistiche
          </button>
        )}
      </div>

      {importMessage && (
        <p
          style={{
            marginTop: "10px",
            fontSize: "12px",
            color: importMessage.type === "ok" ? "#5B8C5A" : "#C8632E",
          }}
        >
          {importMessage.text}
        </p>
      )}
    </div>
  );
}

/* ============================================================
   MAIN APP
   ============================================================ */

const NAV_ITEMS = [
  { key: "dashboard", label: "Panoramica", icon: LayoutGrid },
  { key: "quiz", label: "Quiz", icon: BookOpen },
  { key: "ripasso", label: "Ripasso mirato", icon: AlertTriangle },
  { key: "simulation", label: "Simulazione", icon: Timer },
  { key: "stats", label: "Statistiche", icon: LineChartIcon },
];

export default function App() {
  const [activeSection, setActiveSection] = useState("quiz");
  const [results, setResults] = useState({ attempts: [], simulations: [] });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadResults().then((data) => {
      setResults(data);
      setLoading(false);
    });
  }, []);

  const handleAttemptComplete = useCallback((attempt) => {
    setResults((prev) => {
      const updated = {
        ...prev,
        attempts: [...(prev.attempts || []), attempt],
      };
      saveResults(updated);
      return updated;
    });
  }, []);

  const handleSimulationRecorded = useCallback((simulation) => {
    setResults((prev) => {
      const updated = {
        ...prev,
        simulations: [...(prev.simulations || []), simulation],
      };
      saveResults(updated);
      return updated;
    });
  }, []);

  const handleImportResults = useCallback((imported) => {
    setResults(imported);
    saveResults(imported);
  }, []);

  return (
    <div
      style={{
        display: "flex",
        minHeight: "100vh",
        backgroundColor: "#FAFAF7",
        fontFamily: "'IBM Plex Sans', sans-serif",
      }}
    >
      {/* Load fonts */}
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Source+Serif+4:wght@500;600;700&family=IBM+Plex+Sans:wght@400;500;600;700&family=IBM+Plex+Mono:wght@400;500;600&display=swap"
      />

      {/* Sidebar */}
      <aside
        style={{
          width: "220px",
          flexShrink: 0,
          borderRight: "1.5px solid #E8E4DC",
          padding: "24px 16px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div style={{ padding: "0 8px", marginBottom: "32px" }}>
          <div
            style={{
              fontFamily: "'Source Serif 4', Georgia, serif",
              fontSize: "19px",
              fontWeight: 700,
              color: "#1A1D1F",
              lineHeight: "1.2",
            }}
          >
            IMAT Prep
          </div>
          <div
            style={{
              fontSize: "12px",
              color: "#9A9D9F",
              marginTop: "2px",
              fontFamily: "'IBM Plex Mono', monospace",
            }}
          >
            settembre 2026
          </div>
        </div>

        <nav style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
          {NAV_ITEMS.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.key;
            return (
              <button
                key={item.key}
                onClick={() => setActiveSection(item.key)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  padding: "10px 12px",
                  borderRadius: "8px",
                  border: "none",
                  backgroundColor: isActive ? "#2B5F7514" : "transparent",
                  color: isActive ? "#2B5F75" : "#6B6F73",
                  fontSize: "14px",
                  fontWeight: isActive ? 600 : 500,
                  cursor: "pointer",
                  textAlign: "left",
                  transition: "all 0.15s ease",
                }}
              >
                <Icon size={17} strokeWidth={2} />
                {item.label}
              </button>
            );
          })}
        </nav>

        <div style={{ marginTop: "auto", padding: "0 8px" }}>
          <div
            style={{
              fontSize: "11px",
              color: "#9A9D9F",
              lineHeight: "1.5",
              borderTop: "1px solid #E8E4DC",
              paddingTop: "16px",
            }}
          >
            <strong style={{ color: "#6B6F73" }}>{FULL_POOL.length} domande</strong> nei Quiz (test ufficiali IMAT 2017-2025 + extra di pratica).
            <br />
            La <strong style={{ color: "#6B6F73" }}>Simulazione</strong> usa solo le {SIMULATION_FULL_POOL.length} domande ufficiali, per restare fedele all'esame reale.
            <br />
            Prossimi step: Lezioni teoriche.
          </div>
        </div>
      </aside>

      {/* Main content */}
      <main style={{ flex: 1, padding: "32px 40px", overflow: "auto" }}>
        {loading ? (
          <div style={{ color: "#9A9D9F", fontSize: "14px" }}>
            Caricamento...
          </div>
        ) : (
          <>
            {activeSection === "dashboard" && (
              <DashboardSection results={results} onImport={handleImportResults} />
            )}
            {activeSection === "quiz" && (
              <QuizSection onAttemptComplete={handleAttemptComplete} />
            )}
            {activeSection === "ripasso" && (
              <RipassoSection results={results} onAttemptComplete={handleAttemptComplete} />
            )}
            {activeSection === "simulation" && (
              <SimulationSection
                onSimulationComplete={handleAttemptComplete}
                onSimulationRecorded={handleSimulationRecorded}
              />
            )}
            {activeSection === "stats" && <StatsSection results={results} />}
          </>
        )}
      </main>
    </div>
  );
}
