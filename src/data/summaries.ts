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

export type GlossaryTerm = {
  id: string
  term: string
  definition: string
  week: number
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
      'Five key IT decisions structure the governance arrangement matrix: principles, architecture, infrastructure, business application needs, and investment/prioritization.',
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
        name: 'IT decision — Principles',
        takeaway: 'High-level statements about how IT is used in the business.',
      },
      {
        name: 'IT decision — Architecture',
        takeaway: 'Organizing logic for data, applications, and infrastructure—policies and technical choices.',
      },
      {
        name: 'IT decision — Infrastructure',
        takeaway: 'Centrally coordinated shared IT capability (network, platforms, shared services).',
      },
      {
        name: 'IT decision — Business application needs',
        takeaway: 'Specifying which business needs purchased or built applications must serve.',
      },
      {
        name: 'IT decision — Investment & prioritization',
        takeaway: 'How much and where to invest in IT, including project approvals and justification.',
      },
      {
        name: 'Governance archetypes',
        takeaway:
          'Business monarchy, IT monarchy, feudal, federal, and IT duopoly describe who holds decision/input rights.',
      },
    ],
    examHints: [
      'Be ready to define ITG with the Gregory et al. framing (decision rights + accountability + alignment).',
      'Map a firm to an operating model using standardization vs. integration.',
      'Place stakeholders into governance archetypes for a given IT decision type.',
      'Explain why “who decides” matters more than “which decision” for governance design.',
    ],
  },
  {
    id: 'week-2',
    week: 2,
    title: 'Dealing with Uncertainty',
    subtitle: 'HC 2 — Ambiguity, risk, and adaptive IT governance',
    overview:
      'Week 2 shifts from static decision-rights maps to governing under uncertainty. When technology, markets, or requirements are unstable, rigid stage-gate control can destroy option value—governance must decide how much to lock in versus how much to learn.',
    keyPoints: [
      'Uncertainty is not only risk (known probabilities)—it includes ambiguity about goals, technology trajectories, and stakeholder preferences.',
      'IT investments often create options: the right (not obligation) to scale, pivot, or abandon after learning.',
      'Governance mechanisms should match uncertainty: discovery-oriented funding, staged commitment, and clear kill criteria.',
      'Over-centralizing early technical choices can raise switching costs before the operating model is understood.',
      'Accountability still matters: who owns learning outcomes, residual risk, and the decision to continue or stop.',
    ],
    frameworks: [
      {
        name: 'Risk vs. ambiguity',
        takeaway: 'Risk allows probabilistic planning; ambiguity needs experiments and sense-making.',
      },
      {
        name: 'Staged commitment',
        takeaway: 'Fund learning milestones instead of one large bet; re-decide with new information.',
      },
      {
        name: 'Real options thinking',
        takeaway: 'Value flexibility (expand, defer, switch, abandon) when uncertainty is high.',
      },
      {
        name: 'Adaptive governance',
        takeaway: 'Keep principles stable; make architecture/infrastructure choices progressively.',
      },
    ],
    examHints: [
      'Contrast governance for predictable efficiency projects vs. exploratory digital initiatives.',
      'Argue when staged funding improves accountability rather than weakens it.',
      'Connect uncertainty type to which IT decisions should stay centralized vs. deferred.',
    ],
  },
  {
    id: 'week-3',
    week: 3,
    title: 'Digital Transformation',
    subtitle: 'HC 3 — Governing digital change and value realization',
    overview:
      'Week 3 connects IT governance to digital transformation: redesigning value propositions, operating models, and capability bases—not just digitizing existing processes. Governance must align demand-side strategy with supply-side delivery and security.',
    keyPoints: [
      'Digital transformation changes how the firm creates and captures value; IT is necessary but not sufficient.',
      'Extracting value from IT depends on complementary business-process innovation and matched investments—not spend alone.',
      'Transformation raises the stakes of architecture and data decisions because platforms become the backbone of products and channels.',
      'Demand-side governance (what the business needs) and supply-side governance (how IT delivers) must stay coupled.',
      'Security and data governance are transformation constraints, not afterthoughts.',
    ],
    frameworks: [
      {
        name: 'Value from IT',
        takeaway: 'Outcomes track process innovation + governance quality + well-matched IT investments.',
      },
      {
        name: 'Demand-side ITG',
        takeaway: 'Business priorities, investment rights, and application needs that pull IT capability.',
      },
      {
        name: 'Supply-side ITG',
        takeaway: 'Architecture, infrastructure, delivery capacity, and vendor/sourcing arrangements.',
      },
      {
        name: 'Platform leverage',
        takeaway: 'Shared digital platforms amplify both scale advantages and governance mistakes.',
      },
    ],
    examHints: [
      'Explain why IT spend without governance/process change rarely produces superior results.',
      'Show how operating-model choice shapes digital platform strategy.',
      'Separate transformation “strategy talk” from concrete decision-rights assignments.',
    ],
  },
]

export const glossary: GlossaryTerm[] = [
  {
    id: 'itg',
    term: 'IT Governance (ITG)',
    definition:
      'The decision rights and accountability framework used to ensure IT-related activities align with the organization’s strategy and objectives (Gregory et al., 2018).',
    week: 1,
  },
  {
    id: 'decision-rights',
    term: 'Decision rights',
    definition: 'Who makes each type of IT decision.',
    week: 1,
  },
  {
    id: 'input-rights',
    term: 'Input rights',
    definition: 'Who has input into a decision (but does not necessarily decide).',
    week: 1,
  },
  {
    id: 'accountability',
    term: 'Accountability',
    definition: 'How people or groups are held responsible for their role in IT decisions.',
    week: 1,
  },
  {
    id: 'focus',
    term: 'Focus of IT governance',
    definition:
      'What to govern: which IT-related activities and artifacts must align with strategy and objectives.',
    week: 1,
  },
  {
    id: 'scope',
    term: 'Scope of IT governance',
    definition:
      'Who to govern: which actors and stakeholders are accountable for IT’s contribution.',
    week: 1,
  },
  {
    id: 'patterns',
    term: 'Patterns of IT governance',
    definition:
      'How to govern: which mechanisms ensure desirable IT-related activities and outcomes.',
    week: 1,
  },
  {
    id: 'ea',
    term: 'Enterprise architecture',
    definition:
      'The organizing logic for business processes and IT infrastructure, reflecting the firm’s standardization and integration requirements (its operating model).',
    week: 1,
  },
  {
    id: 'operating-model',
    term: 'Operating model',
    definition:
      'The required level of business process integration and standardization for delivering goods and services. Types: Diversification, Unification, Coordination, Replication.',
    week: 1,
  },
  {
    id: 'key-asset',
    term: 'Key asset governance',
    definition:
      'Governance of major organizational assets (financial, human, physical, IP, relationship, and IT), nested under corporate/business governance (Weill & Ross, 2004).',
    week: 1,
  },
  {
    id: 'archetypes',
    term: 'Governance archetypes',
    definition:
      'Patterns of who holds decision/input rights: business monarchy, IT monarchy, feudal, federal, and IT duopoly.',
    week: 1,
  },
  {
    id: 'staged-commitment',
    term: 'Staged commitment',
    definition:
      'Funding and deciding in phases so the organization can learn under uncertainty before locking in large investments.',
    week: 2,
  },
  {
    id: 'real-options',
    term: 'Real options (IT investment)',
    definition:
      'Treating IT initiatives as creating flexible rights to expand, defer, switch, or abandon after new information arrives.',
    week: 2,
  },
  {
    id: 'digital-transformation',
    term: 'Digital transformation',
    definition:
      'Fundamental change in how an organization creates and captures value using digital technologies, capabilities, and operating-model redesign.',
    week: 3,
  },
  {
    id: 'demand-side',
    term: 'Demand-side IT governance',
    definition: 'Governing what the business needs from IT—priorities, investments, and application demand.',
    week: 3,
  },
  {
    id: 'supply-side',
    term: 'Supply-side IT governance',
    definition:
      'Governing how IT capability is built and run—architecture, infrastructure, delivery, and sourcing.',
    week: 3,
  },
]

export const courseMeta = {
  code: '320124',
  name: 'IT Governance & Strategic Sourcing',
  shortName: 'ITGSS',
  assessment: 'CloudStrat 30% · Final exam 70%',
}
