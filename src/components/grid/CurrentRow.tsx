import { Cell } from './Cell'

type Props = {
  guess: string
  disabled?: boolean
}

export const CurrentRow = ({ guess, disabled }: Props) => {
  const splitGuess = guess.split('')
  const emptyCells = Array.from(Array(4 - splitGuess.length))

  return (
    <div className="flex justify-center mb-1">
      {splitGuess.map((letter, i) => (
        <Cell key={i} value={letter} disabled={disabled} />
      ))}
      {emptyCells.map((_, i) => (
        <Cell key={i} disabled={disabled} />
      ))}
    </div>
  )
}
