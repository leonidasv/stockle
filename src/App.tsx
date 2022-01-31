import React from 'react'
import { marketConfig } from './config/markets'
import { LangContext } from './context/lang'
import { GameContainer } from './game/GameContainer'
import { getMarket } from './lib/preferredMarket'

function App() {
  const market = getMarket()
  const config = marketConfig[market]

  return (
    <LangContext.Provider value={config.defaultLang}>
      <GameContainer market={market} />
    </LangContext.Provider>
  )
}

export default App
