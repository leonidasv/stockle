import { useContext } from 'react'
import { LangContext } from '../../context/lang'
import { GameStats } from '../../lib/localStorage'
import { statBar } from './i18n/statBar'

type Props = {
  gameStats: GameStats
}

const StatItem = ({ label, value }: { label: string; value: string | number }) => {
  return (
    <div className="items-center justify-center m-1 w-1/4">
      <div className="text-3xl font-bold">{value}</div>
      <div className="text-xs">{label}</div>
    </div>
  )
}

export const StatBar = ({ gameStats }: Props) => {
  const lang = useContext(LangContext)
  const t = statBar[lang]

  return (
    <div className="flex justify-center my-2">
      <StatItem label={t.total_tries} value={gameStats.totalGames} />
      <StatItem label={t.success_rate} value={`${gameStats.successRate}%`} />
      <StatItem label={t.current_streak} value={gameStats.currentStreak} />
      <StatItem label={t.best_streak} value={gameStats.bestStreak} />
    </div>
  )
}
