// Illustrative Math (IM 360) learning-component map — used by the
// G4-Period-2 (IM) roster. Verbatim from the IM360 Curriculum Map,
// Grade 4 Learning Component Map.
export const LCMAP_IM = {
  "4": {
    // Milestone 1 — Assess after: Unit 2, Section A
    // Order matches the Form D analysis guide's question numbers.
    "1": [
      "Find all factor pairs of a whole number within 100",
      "Compare two fractions with different numerators and different denominators (Restricted to comparisons to benchmark fractions)",
      "Determine whether a whole number within 100 is a multiple of a given one-digit number",
      "Determine whether a whole number within 100 is prime or composite",
    ],
    // Milestone 2 — Assess after: Unit 3, Section A
    "2": [
      "Explain why a fraction a/b is equivalent to a fraction (n x a)/(n x b) using visual fraction models",
      "Generate equivalent fractions using the principle a/b = (n x a)/(n x b)",
      "Compare two fractions with different numerators and different denominators",
      "Represent a multiple of a/b as a multiple of 1/b",
    ],
  },
};

// Diagnostic prediction baselines for IM components, where the default
// (name-hashed) baseline would misrepresent the class. Values are the
// predicted class-average prediction score for that component.
export const DIAG_IM = {
  "4": {
    "1": {
      "Find all factor pairs of a whole number within 100": 84,
      "Determine whether a whole number within 100 is a multiple of a given one-digit number": 78,
      // Still class-level challenges (below the 68% threshold), but close
      // enough that most students clear the threshold on average.
      "Compare two fractions with different numerators and different denominators (Restricted to comparisons to benchmark fractions)": 64,
      "Determine whether a whole number within 100 is prime or composite": 61,
    },
  },
};
