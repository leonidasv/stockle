import React, { useEffect, useState } from 'react'
import './App.css'
import { marketConfig } from './config/markets'
import { LangContext } from './context/lang'
import { GameContainer } from './game/GameContainer'
import { getMarket } from './lib/preferredMarket'

function App() {
  const market = getMarket()
  const config = marketConfig[market]
  const prefersDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem('theme') ? localStorage.getItem('theme') === 'dark' : prefersDarkMode
  )

  useEffect(() => {
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light')
    if (isDarkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [isDarkMode])

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
  }

  return (
    <LangContext.Provider value={config.defaultLang}>
      <GameContainer market={market} toggleDarkMode={toggleDarkMode} />
    </LangContext.Provider>
  )
}

export default App
