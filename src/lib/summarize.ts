/** Lightweight, client-side note summarizer for lecture paste-ins. */

const STOP = new Set([
  'a',
  'an',
  'the',
  'and',
  'or',
  'but',
  'in',
  'on',
  'at',
  'to',
  'for',
  'of',
  'as',
  'is',
  'are',
  'was',
  'were',
  'be',
  'been',
  'being',
  'by',
  'with',
  'from',
  'that',
  'this',
  'these',
  'those',
  'it',
  'its',
  'into',
  'than',
  'then',
  'so',
  'if',
  'not',
  'no',
  'can',
  'may',
  'will',
  'would',
  'should',
  'could',
  'about',
  'over',
  'under',
  'between',
  'through',
  'during',
  'before',
  'after',
  'above',
  'below',
  'up',
  'down',
  'out',
  'off',
  'again',
  'further',
  'once',
  'here',
  'there',
  'when',
  'where',
  'why',
  'how',
  'all',
  'each',
  'few',
  'more',
  'most',
  'other',
  'some',
  'such',
  'only',
  'own',
  'same',
  'too',
  'very',
  'just',
  'also',
  'we',
  'you',
  'they',
  'he',
  'she',
  'them',
  'their',
  'our',
  'your',
  'who',
  'whom',
  'whose',
  'what',
  'which',
  'into',
  'used',
  'ensure',
  'make',
  'makes',
  'made',
])

function splitSentences(text: string): string[] {
  return text
    .replace(/\s+/g, ' ')
    .split(/(?<=[.!?])\s+|\n+/)
    .map((s) => s.trim())
    .filter((s) => s.length > 20)
}

function tokenize(sentence: string): string[] {
  return sentence
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, ' ')
    .split(/\s+/)
    .filter((w) => w.length > 2 && !STOP.has(w))
}

function scoreSentences(sentences: string[]): { sentence: string; score: number }[] {
  const freq = new Map<string, number>()
  for (const s of sentences) {
    for (const t of new Set(tokenize(s))) {
      freq.set(t, (freq.get(t) ?? 0) + 1)
    }
  }

  return sentences.map((sentence, index) => {
    const tokens = tokenize(sentence)
    const unique = new Set(tokens)
    let score = 0
    for (const t of unique) score += freq.get(t) ?? 0
    // Prefer earlier lecture framing and definitional lines
    if (/^.{0,40}\b(is|are|means|refers|defined)\b/i.test(sentence)) score *= 1.25
    if (index < 3) score *= 1.15
    if (sentence.length > 280) score *= 0.85
    return { sentence, score }
  })
}

export type GeneratedSummary = {
  overview: string
  bullets: string[]
  keywords: string[]
}

export function generateSummary(raw: string, maxBullets = 6): GeneratedSummary | null {
  const cleaned = raw.trim()
  if (cleaned.length < 80) return null

  const sentences = splitSentences(cleaned)
  if (sentences.length === 0) return null

  const scored = scoreSentences(sentences).sort((a, b) => b.score - a.score)
  const picked = scored.slice(0, Math.min(maxBullets, Math.max(3, Math.ceil(sentences.length * 0.35))))

  // Keep original order for readability
  const order = new Map(sentences.map((s, i) => [s, i]))
  picked.sort((a, b) => (order.get(a.sentence) ?? 0) - (order.get(b.sentence) ?? 0))

  const bullets = picked.map((p) => p.sentence.replace(/\s+/g, ' ').trim())

  const keywordFreq = new Map<string, number>()
  for (const s of sentences) {
    for (const t of tokenize(s)) {
      keywordFreq.set(t, (keywordFreq.get(t) ?? 0) + 1)
    }
  }
  const keywords = [...keywordFreq.entries()]
    .sort((a, b) => b[1] - a[1])
    .slice(0, 8)
    .map(([w]) => w)

  const overview =
    bullets[0] ??
    sentences[0] ??
    'Paste longer lecture notes to produce a structured summary.'

  return { overview, bullets, keywords }
}
