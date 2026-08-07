// Real assessment items for the IM 360 (G4-Period-2) periods.
// Source: Assessment Analysis Guide "26-27 Math G4 Form D Factors/Multiples"
// (Ref #A1751f052). Item order matches the guide's question numbers; the
// question-to-learning-component mapping comes from the IM 360 crosswalk.
// Selection percentages are illustrative demo data.
export const QDATA_IM = {
  "4|1": [
    {
      // AG Q1 — i185072 — 4.OA.B.4
      lc: "Find all factor pairs of a whole number within 100",
      typeLabel: "Selected Response",
      points: "1",
      blocks: [
        { kind: "text", text: "Which pair of numbers are both factors of 60?" },
      ],
      choices: [
        { L: "A", text: "5 and 36", pct: 6, correct: false, dr: "Student selected a factor of the given number and a number that shares factors with the given number but is not itself a factor." },
        { L: "B", text: "9 and 30", pct: 4, correct: false, dr: "Student identified a multiple of one of the factors rather than the factor itself." },
        { L: "C", text: "12 and 30", pct: 84, correct: true, dr: "Correct." },
        { L: "D", text: "25 and 35", pct: 6, correct: false, dr: "Student identified numbers based on their sum rather than their product, OR selected numbers that share a common factor with the given number." },
      ],
    },
    {
      // AG Q2 — i185094 — 4.NF.A.2
      lc: "Compare two fractions with different numerators and different denominators",
      typeLabel: "Selected Response",
      points: "1",
      blocks: [
        { kind: "text", text: "Which of the following makes the comparison true?", tex: "\\frac{1}{2} < \\rule{3em}{0.6pt}" },
      ],
      choices: [
        { L: "A", text: "1/3", tex: "\\frac{1}{3}", pct: 13, correct: false, dr: "Student may have thought that when fractions have the same numerator, the fraction with the greater denominator is larger, not recognizing that a larger denominator actually results in a smaller fraction." },
        { L: "B", text: "3/12", tex: "\\frac{3}{12}", pct: 9, correct: false, dr: "Student may have thought that a greater numerator and denominator always result in a greater fraction, not recognizing that the overall value of a fraction depends on the relationship between the numerator and denominator." },
        { L: "C", text: "5/10", tex: "\\frac{5}{10}", pct: 21, correct: false, dr: "Student did not recognize that the fractions were equivalent and may have thought that a greater numerator and denominator always result in a greater fraction, not recognizing that the overall value of a fraction depends on the relationship between the numerator and denominator." },
        { L: "D", text: "6/8", tex: "\\frac{6}{8}", pct: 57, correct: true, dr: "Correct." },
      ],
    },
    {
      // AG Q3 — i185037 — 4.OA.B.4
      lc: "Determine whether a whole number within 100 is a multiple of a given one-digit number",
      typeLabel: "Selected Response",
      points: "1",
      blocks: [
        { kind: "text", text: "Which number is a multiple of both 4 and 6?" },
      ],
      choices: [
        { L: "A", text: "2", pct: 8, correct: false, dr: "Student confused a common factor with a common multiple." },
        { L: "B", text: "8", pct: 17, correct: false, dr: "Student chose a number that is a multiple of only one given number when looking for a common multiple between two numbers." },
        { L: "C", text: "12", pct: 64, correct: true, dr: "Correct." },
        { L: "D", text: "18", pct: 11, correct: false, dr: "Student chose a number that is a multiple of only one given number when looking for a common multiple between two numbers." },
      ],
    },
    {
      // AG Q4 — i185038 — 4.OA.B.4 — Multiple Select, three correct
      lc: "Determine whether a whole number within 100 is prime or composite",
      typeLabel: "Multiple Select",
      points: "1",
      blocks: [
        { kind: "text", text: "Select three numbers that are prime." },
      ],
      choices: [
        { L: "A", text: "2", pct: 78, correct: true, dr: "Correct." },
        { L: "B", text: "11", pct: 71, correct: true, dr: "Correct." },
        { L: "C", text: "15", pct: 22, correct: false, dr: "Student possibly thought all odd numbers are prime, OR confused prime and composite." },
        { L: "D", text: "18", pct: 14, correct: false, dr: "Student possibly confused prime and composite." },
        { L: "E", text: "43", pct: 66, correct: true, dr: "Correct." },
      ],
    },
  ],
};
