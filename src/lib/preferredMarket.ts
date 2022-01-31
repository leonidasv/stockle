import { MARKET, MARKETS } from '../constants/strings'

const PREFERRED_MARKET = 'preferredMarket'

export function getMarket(): MARKET {
  const params = new URLSearchParams(window.location.search)
  const marketFromURL = params.get('m') as MARKET | null
  if (marketFromURL && MARKETS.includes(marketFromURL)) {
    setPreferredMarket(marketFromURL)
    return marketFromURL
  }

  return marketFromStorageOrLocale()
}

function marketFromStorageOrLocale() {
  const marketFromStorage = localStorage.getItem(PREFERRED_MARKET) as MARKET | null
  if (!marketFromStorage) {
    const marketFromLocale = window.navigator?.languages?.includes('pt-BR') ? 'b3' : 'nasdaq'
    setPreferredMarket(marketFromLocale)
    return marketFromLocale
  }

  return marketFromStorage
}

export function setPreferredMarket(market: MARKET) {
  localStorage.setItem(PREFERRED_MARKET, market)
}

export function changeMarket(market: MARKET) {
  setPreferredMarket(market)
  window.location.replace(`/?m=${market}`)
}
