import { useContext, useEffect, useState } from 'react'
import { Grid } from '../components/grid/Grid'
import { Keyboard } from '../components/keyboard/Keyboard'
import { AboutModal } from '../components/modals/AboutModal'
import { InfoModal } from '../components/modals/InfoModal'
import { MARKET } from '../constants/strings'
import { LangContext } from '../context/lang'
import { Words, wordsFactory } from '../lib/words'
import { Game } from './Game'
import { Header } from './Header'
import { gameContainer } from './i18n/gameContainer'

type Props = {
  market: MARKET
}

export function GameContainer({ market }: Props) {
  const [isAboutModalOpen, setIsAboutModalOpen] = useState(false)
  const [isInfoModalOpen, setIsInfoModalOpen] = useState(false)
  const [isStatsModalOpen, setIsStatsModalOpen] = useState(false)
  const [words, setWords] = useState<Words | null>(null)
  useEffect(() => {
    wordsFactory(market).then((w) => setWords(w))
  }, [market])
  const lang = useContext(LangContext)
  const t = gameContainer[lang]
  const loading = !words

  return (
    <div className="py-8 max-w-7xl mx-auto sm:px-6 lg:px-8">
      <Header setIsInfoModalOpen={setIsInfoModalOpen} setIsStatsModalOpen={setIsStatsModalOpen} />

      <InfoModal isOpen={isInfoModalOpen} handleClose={() => setIsInfoModalOpen(false)} />

      {loading ? (
        <Placeholder />
      ) : (
        <Game
          words={words}
          market={market}
          isStatsModalOpen={isStatsModalOpen}
          setIsStatsModalOpen={setIsStatsModalOpen}
        />
      )}

      <AboutModal isOpen={isAboutModalOpen} handleClose={() => setIsAboutModalOpen(false)} />
      <button
        type="button"
        className="mx-auto mt-8 flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 select-none"
        onClick={() => setIsAboutModalOpen(true)}
      >
        {t.about_this_game}
      </button>
    </div>
  )
}

const Placeholder = () => (
  <>
    <Grid guesses={[]} currentGuess={''} solution={'_'} />
    <Keyboard onChar={() => null} onDelete={() => null} onEnter={() => null} guesses={[]} solution={'_'} disabled />
  </>
)
