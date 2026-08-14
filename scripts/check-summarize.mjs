import { generateSummary } from '../src/lib/summarize.ts'

const sample = `
IT Governance is the decision rights and accountability framework used to ensure IT-related activities align with the organization's strategy and objectives.
Decision rights determine who makes each type of IT decision.
Input rights determine who has input into a decision.
Accountability describes how people or groups are held responsible.
Enterprise architecture is the organizing logic for business processes and IT infrastructure.
The operating model defines required levels of business process integration and standardization.
`

const result = generateSummary(sample)
if (!result) {
  console.error('Expected a summary')
  process.exit(1)
}
if (result.bullets.length < 3) {
  console.error('Expected at least 3 bullets', result)
  process.exit(1)
}
if (!result.keywords.includes('governance') && !result.keywords.includes('decision')) {
  console.error('Expected governance-related keywords', result.keywords)
  process.exit(1)
}
console.log('summarize ok:', {
  bullets: result.bullets.length,
  keywords: result.keywords.slice(0, 4),
})
