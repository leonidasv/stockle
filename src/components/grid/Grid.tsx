import { CompletedRow } from './CompletedRow'
import { CurrentRow } from './CurrentRow'
import { EmptyRow } from './EmptyRow'

type Props = {
  guesses: string[]
  currentGuess: string
  solution: string
  disabled?: boolean
}

export const Grid = ({ guesses, currentGuess, solution, disabled }: Props) => {
  const empties = guesses.length < 5 ? Array.from(Array(5 - guesses.length)) : []

  return (
    <div className="pb-6">
      {guesses.map((guess, i) => (
        <CompletedRow key={i} guess={guess} solution={solution} />
      ))}
      {guesses.length < 6 && <CurrentRow guess={currentGuess} disabled={disabled} />}
      {empties.map((_, i) => (
        <EmptyRow key={i} disabled={disabled} />
      ))}
    </div>
  )
}
