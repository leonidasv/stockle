import { DEFAULT_MARKET, MARKET } from '../constants/strings'

const oldGameStateKey = 'gameState'
const gameStateKey = (m: MARKET) => `gameState_${m}`

type StoredGameState = {
  guesses: string[]
  solution: string
}

export const saveGameStateToLocalStorage = (gameState: StoredGameState, m: MARKET) => {
  localStorage.setItem(gameStateKey(m), JSON.stringify(gameState))
}

export const loadGameStateFromLocalStorage = (m: MARKET) => {
  const state = localStorage.getItem(gameStateKey(m))
  return state ? (JSON.parse(state) as StoredGameState) : null
}

const oldStatKey = 'gameStats'
const gameStatKey = (m: MARKET) => `gameStats_${m}`

export type GameStats = {
  winDistribution: number[]
  gamesFailed: number
  currentStreak: number
  bestStreak: number
  totalGames: number
  successRate: number
}

export const saveStatsToLocalStorage = (gameStats: GameStats, m: MARKET) => {
  localStorage.setItem(gameStatKey(m), JSON.stringify(gameStats))
}

export const loadStatsFromLocalStorage = (m: MARKET) => {
  const stats = localStorage.getItem(gameStatKey(m))
  return stats ? (JSON.parse(stats) as GameStats) : null
}

const fixOld = (oldKey: string, newKey: (m: MARKET) => string) => {
  // Fix for old users
  const old = localStorage.getItem(oldKey)
  if (old) {
    localStorage.setItem(newKey(DEFAULT_MARKET), old)
    localStorage.removeItem(oldKey)
  }
}

export const fixOldState = () => fixOld(oldGameStateKey, gameStateKey)
export const fixOldStats = () => fixOld(oldStatKey, gameStatKey)
