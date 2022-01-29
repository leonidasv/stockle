import { useEffect } from 'react'
import { KeyValue } from '../../lib/keyboard'
import { getStatuses } from '../../lib/statuses'
import { Key } from './Key'

type Props = {
  onChar: (value: string) => void
  onDelete: () => void
  onEnter: () => void
  guesses: string[]
  solution: string
  disabled?: boolean
}

export const Keyboard = ({ onChar, onDelete, onEnter, guesses, disabled, solution }: Props) => {
  const charStatuses = getStatuses(guesses, solution)
  const d = !!disabled

  const onClick = (value: KeyValue) => {
    if (value === 'ENTER') {
      onEnter()
    } else if (value === 'DELETE') {
      onDelete()
    } else {
      onChar(value)
    }
  }

  useEffect(() => {
    const listener = (e: KeyboardEvent) => {
      if (e.code === 'Enter') {
        onEnter()
      } else if (e.code === 'Backspace') {
        onDelete()
      } else {
        const key = e.key.toUpperCase()
        if (key.length === 1 && key >= 'A' && key <= 'Z') {
          onChar(key)
        }
      }
    }
    window.addEventListener('keyup', listener)
    return () => {
      window.removeEventListener('keyup', listener)
    }
  }, [onEnter, onDelete, onChar])

  return (
    <div>
      <div className="flex justify-center mb-1">
        <Key disabled={d} value="Q" onClick={onClick} status={charStatuses['Q']} />
        <Key disabled={d} value="W" onClick={onClick} status={charStatuses['W']} />
        <Key disabled={d} value="E" onClick={onClick} status={charStatuses['E']} />
        <Key disabled={d} value="R" onClick={onClick} status={charStatuses['R']} />
        <Key disabled={d} value="T" onClick={onClick} status={charStatuses['T']} />
        <Key disabled={d} value="Y" onClick={onClick} status={charStatuses['Y']} />
        <Key disabled={d} value="U" onClick={onClick} status={charStatuses['U']} />
        <Key disabled={d} value="I" onClick={onClick} status={charStatuses['I']} />
        <Key disabled={d} value="O" onClick={onClick} status={charStatuses['O']} />
        <Key disabled={d} value="P" onClick={onClick} status={charStatuses['P']} />
      </div>
      <div className="flex justify-center mb-1">
        <Key disabled={d} value="A" onClick={onClick} status={charStatuses['A']} />
        <Key disabled={d} value="S" onClick={onClick} status={charStatuses['S']} />
        <Key disabled={d} value="D" onClick={onClick} status={charStatuses['D']} />
        <Key disabled={d} value="F" onClick={onClick} status={charStatuses['F']} />
        <Key disabled={d} value="G" onClick={onClick} status={charStatuses['G']} />
        <Key disabled={d} value="H" onClick={onClick} status={charStatuses['H']} />
        <Key disabled={d} value="J" onClick={onClick} status={charStatuses['J']} />
        <Key disabled={d} value="K" onClick={onClick} status={charStatuses['K']} />
        <Key disabled={d} value="L" onClick={onClick} status={charStatuses['L']} />
      </div>
      <div className="flex justify-center">
        <Key disabled={d} width={65.4} value="ENTER" onClick={onClick}>
          Enter
        </Key>
        <Key disabled={d} value="Z" onClick={onClick} status={charStatuses['Z']} />
        <Key disabled={d} value="X" onClick={onClick} status={charStatuses['X']} />
        <Key disabled={d} value="C" onClick={onClick} status={charStatuses['C']} />
        <Key disabled={d} value="V" onClick={onClick} status={charStatuses['V']} />
        <Key disabled={d} value="B" onClick={onClick} status={charStatuses['B']} />
        <Key disabled={d} value="N" onClick={onClick} status={charStatuses['N']} />
        <Key disabled={d} value="M" onClick={onClick} status={charStatuses['M']} />
        <Key disabled={d} width={65.4} value="DELETE" onClick={onClick}>
          ⌫
        </Key>
      </div>
    </div>
  )
}
