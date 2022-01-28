import React, { useState } from 'react'
import { marketConfig } from './config/markets'
import { MARKET, MARKETS } from './constants/strings'
import { LangContext } from './context/lang'
import { GameContainer } from './game/GameContainer'

function App() {
  const [market, setMarket] = useState<MARKET>('nasdaq')
  const params = new URLSearchParams(window.location.search)
  const urlMarket = params.get('m') as MARKET | null
  const config = marketConfig[market]

  if (urlMarket && urlMarket !== market && MARKETS.includes(urlMarket)) {
    setMarket(urlMarket)
  }

  return (
    <LangContext.Provider value={config.defaultLang}>
      <GameContainer market={market} />
    </LangContext.Provider>
  )
}

export default App
