export const WIN_MESSAGES = ['Great Job!', 'Awesome', 'Well done!']

export const MARKETS = ['b3', 'nasdaq'] as const
export type MARKET = typeof MARKETS[number]
export const DEFAULT_MARKET = 'nasdaq'
