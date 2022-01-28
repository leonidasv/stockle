import { MARKET } from '../constants/strings'

type MarketConfig = {
  wordSlice: number
}

export const marketConfig: Record<MARKET, MarketConfig> = {
  b3: {
    wordSlice: 365,
  },
  nasdaq: {
    wordSlice: 1500,
  },
}
