import { Cell } from './Cell'

type Props = { disabled?: boolean }

export const EmptyRow = ({ disabled }: Props) => {
  const emptyCells = Array.from(Array(4))

  return (
    <div className="flex justify-center mb-1">
      {emptyCells.map((_, i) => (
        <Cell key={i} disabled={disabled} />
      ))}
    </div>
  )
}
