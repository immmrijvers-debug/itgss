export type WeekSummary = {
  id: string
  week: number
  title: string
  subtitle: string
  overview: string
  keyPoints: string[]
  frameworks: { name: string; takeaway: string }[]
  examHints: string[]
}

export const weekSummaries: WeekSummary[] = [
  {
    id: 'week-1',
    week: 1,
    title: 'Introduction to IT Governance',
    subtitle: 'HC 1 — Decision rights, accountability, and operating models',
    overview:
      'Week 1 frames IT governance as a decision-rights and accountability system—not a catalogue of IT projects. The core question is who decides, who has input, and how actors are held responsible so IT stays aligned with strategy.',
    keyPoints: [
      'IT Governance (ITG) is the decision rights and accountability framework that aligns IT-related activities with organizational strategy and objectives (Gregory et al., 2018).',
      'Distinguish decision rights (who decides) from input rights (who advises) and accountability (how responsibility is enforced).',
      'ITG can be analyzed along three axes: focus (what to govern), scope (who to govern), and patterns (how to govern).',
      'Enterprise architecture encodes the firm’s standardization and integration needs—its operating model.',
      'Weill & Ross: governance is about who decides and who is accountable, balancing empowerment and control.',
    ],
    frameworks: [
      {
        name: 'Operating model — Diversification',
        takeaway: 'Low standardization, low integration (e.g. GE). Business units stay independent.',
      },
      {
        name: 'Operating model — Unification',
        takeaway: 'High standardization, high integration (e.g. Delta Airlines). One shared process/IT backbone.',
      },
      {
        name: 'Operating model — Coordination',
        takeaway: 'Low standardization, high integration (e.g. Toyota Europe). Share data, keep local processes.',
      },
      {
        name: 'Operating model — Replication',
        takeaway: 'High standardization, low integration (e.g. Marriott). Copy best-practice processes globally.',
      },
      {
        name: 'Key asset governance',
        takeaway:
          'IT sits beside financial, human, physical, IP, and relationship assets under corporate/business governance (Weill & Ross, 2004).',
      },
      {
        name: 'IT asset views',
        takeaway: 'Demand-side ITG, supply-side ITG, and information security governance.',
      },
    ],
    examHints: [
      'Be ready to define ITG with the Gregory et al. framing (decision rights + accountability + alignment).',
      'Map a firm to an operating model using standardization vs. integration.',
      'Explain why “who decides” matters more than “which decision” for governance design.',
    ],
  },
]

export const courseMeta = {
  code: '320124',
  name: 'IT Governance & Strategic Sourcing',
  shortName: 'ITGSS',
  assessment: 'CloudStrat 30% · Final exam 70%',
}
