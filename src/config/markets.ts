import { MARKET } from '../constants/strings'

export type MarketConfig = {
  // slice index for the word array
  wordSlice: number
  // epoch in MS
  epoch: number
  defaultLang: string
}

export const marketConfig: Record<MARKET, MarketConfig> = {
  b3: {
    wordSlice: 365,
    // Jan 3, 9:30am BRT
    epoch: 1641213000000,
    defaultLang: 'pt',
  },
  nasdaq: {
    wordSlice: 1500,
    // Jan 3, 9:30am EST
    epoch: 1641218400000,
    defaultLang: 'en',
  },
}
