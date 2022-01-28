import { useEffect, useState } from 'react'
import { Alert } from '../components/alerts/Alert'
import { Grid } from '../components/grid/Grid'
import { Keyboard } from '../components/keyboard/Keyboard'
import { StatsModal } from '../components/modals/StatsModal'
import { MARKET, WIN_MESSAGES } from '../constants/strings'
import {
  fixOldState,
  fixOldStats,
  loadGameStateFromLocalStorage,
  saveGameStateToLocalStorage,
} from '../lib/localStorage'
import { addStatsForCompletedGame, loadStats } from '../lib/stats'
import { Words } from '../lib/words'

const ALERT_TIME_MS = 2000

type Props = {
  market: MARKET
  words: Words
  setIsStatsModalOpen: (b: boolean) => void
  isStatsModalOpen: boolean
}

export function Game({ market, words, isStatsModalOpen, setIsStatsModalOpen }: Props) {
  useEffect(() => fixOld(), [])

  const { solution, tomorrow, isWinningWord, isWordInWordList } = words

  const [currentGuess, setCurrentGuess] = useState('')
  const [isGameWon, setIsGameWon] = useState(false)
  const [isNotEnoughLetters, setIsNotEnoughLetters] = useState(false)
  const [isWordNotFoundAlertOpen, setIsWordNotFoundAlertOpen] = useState(false)
  const [isGameLost, setIsGameLost] = useState(false)
  const [successAlert, setSuccessAlert] = useState('')
  const [guesses, setGuesses] = useState<string[]>(() => {
    const loaded = loadGameStateFromLocalStorage(market)
    if (loaded?.solution !== solution) {
      return []
    }
    const gameWasWon = loaded.guesses.includes(solution)
    if (gameWasWon) {
      setIsGameWon(true)
    }
    if (loaded.guesses.length === 6 && !gameWasWon) {
      setIsGameLost(true)
    }
    return loaded.guesses
  })
  const guessesAndSolution = { guesses, solution, currentGuess } as const

  const [stats, setStats] = useState(() => loadStats(market))

  useEffect(() => {
    saveGameStateToLocalStorage({ guesses, solution }, market)
  }, [guesses, market, solution])

  useEffect(() => {
    if (isGameWon) {
      setSuccessAlert(WIN_MESSAGES[Math.floor(Math.random() * WIN_MESSAGES.length)])
      setTimeout(() => {
        setSuccessAlert('')
        setIsStatsModalOpen(true)
      }, ALERT_TIME_MS)
    }
    if (isGameLost) {
      setTimeout(() => {
        setIsStatsModalOpen(true)
      }, ALERT_TIME_MS)
    }
  }, [isGameWon, isGameLost, setIsStatsModalOpen])

  const onChar = (value: string) => {
    if (currentGuess.length < 4 && guesses.length < 6 && !isGameWon) {
      setCurrentGuess(`${currentGuess}${value}`)
    }
  }

  const onDelete = () => {
    setCurrentGuess(currentGuess.slice(0, -1))
  }

  const onEnter = () => {
    if (isGameWon || isGameLost) {
      return
    }
    if (!(currentGuess.length === 4)) {
      setIsNotEnoughLetters(true)
      return setTimeout(() => {
        setIsNotEnoughLetters(false)
      }, ALERT_TIME_MS)
    }

    if (!isWordInWordList(currentGuess)) {
      setIsWordNotFoundAlertOpen(true)
      return setTimeout(() => {
        setIsWordNotFoundAlertOpen(false)
      }, ALERT_TIME_MS)
    }

    const winningWord = isWinningWord(currentGuess)

    if (currentGuess.length === 4 && guesses.length < 6 && !isGameWon) {
      setGuesses([...guesses, currentGuess])
      setCurrentGuess('')

      if (winningWord) {
        setStats(addStatsForCompletedGame(stats, guesses.length, market))
        return setIsGameWon(true)
      }

      if (guesses.length === 5) {
        setStats(addStatsForCompletedGame(stats, guesses.length + 1, market))
        setIsGameLost(true)
      }
    }
  }

  return (
    <>
      <Grid {...guessesAndSolution} />
      <Keyboard onChar={onChar} onDelete={onDelete} onEnter={onEnter} {...guessesAndSolution} />
      <StatsModal
        isOpen={isStatsModalOpen}
        handleClose={() => setIsStatsModalOpen(false)}
        gameStats={stats}
        isGameLost={isGameLost}
        isGameWon={isGameWon}
        tomorrow={tomorrow}
        handleShare={() => {
          setSuccessAlert('Game copied to clipboard')
          return setTimeout(() => setSuccessAlert(''), ALERT_TIME_MS)
        }}
        {...guessesAndSolution}
      />
      <Alert message="Not enough letters" isOpen={isNotEnoughLetters} />
      <Alert message="Stock not found" isOpen={isWordNotFoundAlertOpen} />
      <Alert message={`The stock was ${solution}`} isOpen={isGameLost} />
      <Alert message={successAlert} isOpen={successAlert !== ''} variant="success" />
    </>
  )
}

const fixOld = () => {
  fixOldState()
  fixOldStats()
}
