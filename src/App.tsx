import { useState } from 'react'
import { MARKET, MARKETS } from './constants/strings'
import { GameContainer } from './game/GameContainer'

function App() {
  const [market, setMarket] = useState<MARKET>('nasdaq')
  const params = new URLSearchParams(window.location.search)
  const urlMarket = params.get('m') as MARKET | null

  if (urlMarket && urlMarket !== market && MARKETS.includes(urlMarket)) {
    setMarket(urlMarket)
  }

  return <GameContainer market={market} />
}

export default App
