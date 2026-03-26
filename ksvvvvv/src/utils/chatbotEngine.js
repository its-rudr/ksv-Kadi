// Tokenization + keyword matching engine for KSV Chatbot

const FALLBACK = "I don't have specific information on that. Please contact KSV directly at info@ksv.ac.in or visit /contact for assistance.";

/**
 * Tokenize a query string into lowercase word tokens.
 */
function tokenize(text) {
  return text
    .toLowerCase()
    .replace(/[^\w\s]/g, '')
    .split(/\s+/)
    .filter(Boolean);
}

/**
 * Score a knowledge entry against the query tokens.
 * Partial substring matching is supported.
 */
function scoreEntry(tokens, entry) {
  let score = 0;
  for (const keyword of entry.keywords) {
    for (const token of tokens) {
      if (token === keyword) { score += 2; break; }
      if (token.includes(keyword) || keyword.includes(token)) { score += 1; break; }
    }
  }
  return score;
}

/**
 * Find the best matching answer for the given query.
 * @param {string} query - User input
 * @param {Array}  knowledge - chatKnowledge array
 * @returns {string} answer text
 */
export function processQuery(query, knowledge) {
  if (!query.trim()) return FALLBACK;

  const tokens = tokenize(query);
  let bestEntry = null;
  let bestScore = 0;

  for (const entry of knowledge) {
    const score = scoreEntry(tokens, entry);
    if (score > bestScore) {
      bestScore = score;
      bestEntry = entry;
    }
  }

  return bestScore > 0 ? bestEntry.answer : FALLBACK;
}
