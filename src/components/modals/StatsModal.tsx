import { useContext } from 'react'
import Countdown from 'react-countdown'
import { LangContext } from '../../context/lang'
import { GameStats } from '../../lib/localStorage'
import { shareStatus } from '../../lib/share'
import { Histogram } from '../stats/Histogram'
import { StatBar } from '../stats/StatBar'
import { BaseModal } from './BaseModal'
import { stats } from './i18n/stats'

type Props = {
  isOpen: boolean
  handleClose: () => void
  guesses: string[]
  gameStats: GameStats
  isGameLost: boolean
  isGameWon: boolean
  handleShare: () => void
  solution: string
  tomorrow: number
}

export const StatsModal = ({
  isOpen,
  handleClose,
  guesses,
  gameStats,
  isGameLost,
  isGameWon,
  handleShare,
  solution,
  tomorrow,
}: Props) => {
  const lang = useContext(LangContext)
  const t = stats[lang]

  if (gameStats.totalGames <= 0) {
    return (
      <BaseModal title={t.statistics_title} isOpen={isOpen} handleClose={handleClose}>
        <StatBar gameStats={gameStats} />
      </BaseModal>
    )
  }
  return (
    <BaseModal title={t.statistics_title} isOpen={isOpen} handleClose={handleClose}>
      <StatBar gameStats={gameStats} />
      <h4 className="text-lg leading-6 font-medium text-gray-900">{t.guess_distribution}</h4>
      <Histogram gameStats={gameStats} />
      {(isGameLost || isGameWon) && (
        <div className="mt-5 sm:mt-6 columns-2 flex">
          <div className="self-center basis-1/2">
            <h5>{t.new_stock_in}</h5>
            <Countdown className="text-lg font-medium text-gray-900" date={tomorrow} daysInHours={true} />
          </div>
          <button
            type="button"
            className="mt-2 w-full basis-1/2 rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-500 text-base font-medium text-white hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:text-sm"
            onClick={() => {
              shareStatus(guesses, isGameLost, solution, t.sharing_template)
              handleShare()
            }}
          >
            {t.share}
          </button>
        </div>
      )}
    </BaseModal>
  )
}
