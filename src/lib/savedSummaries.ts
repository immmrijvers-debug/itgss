import type { GeneratedSummary } from '../lib/summarize'

const STORAGE_KEY = 'itgss.saved-summaries.v1'

export type SavedSummary = GeneratedSummary & {
  id: string
  title: string
  createdAt: string
}

function canUseStorage() {
  return typeof window !== 'undefined' && typeof window.localStorage !== 'undefined'
}

export function loadSavedSummaries(): SavedSummary[] {
  if (!canUseStorage()) return []
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY)
    if (!raw) return []
    const parsed = JSON.parse(raw) as SavedSummary[]
    return Array.isArray(parsed) ? parsed : []
  } catch {
    return []
  }
}

export function persistSavedSummaries(items: SavedSummary[]) {
  if (!canUseStorage()) return
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
}

export function createSavedSummary(
  summary: GeneratedSummary,
  title = 'Untitled summary',
): SavedSummary {
  return {
    ...summary,
    id: `sum_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 7)}`,
    title: title.trim() || 'Untitled summary',
    createdAt: new Date().toISOString(),
  }
}
