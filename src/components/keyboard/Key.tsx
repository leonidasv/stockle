import classnames from 'classnames'
import { ReactNode } from 'react'
import { KeyValue } from '../../lib/keyboard'
import { CharStatus } from '../../lib/statuses'

type Props = {
  children?: ReactNode
  value: KeyValue
  width?: number
  status?: CharStatus
  onClick: (value: KeyValue) => void
  disabled: boolean
}

export const Key = ({ children, status, width = 40, value, onClick, disabled }: Props) => {
  const classes = classnames(
    'flex items-center justify-center rounded mx-0.5 text-xs font-bold cursor-pointer select-none',
    {
      'bg-slate-200 hover:bg-slate-300 active:bg-slate-400': !status && !disabled,
      'bg-slate-400 text-white': status === 'absent' || disabled,
      'bg-green-500 hover:bg-green-600 active:bg-green-700 text-white': status === 'correct' && !disabled,
      'bg-yellow-500 hover:bg-yellow-600 active:bg-yellow-700 text-white': status === 'present' && !disabled,
    }
  )

  const handleClick: React.MouseEventHandler<HTMLButtonElement> = (event) => {
    onClick(value)
    event.currentTarget.blur()
  }

  return (
    <button style={{ width: `${width}px`, height: '58px' }} className={classes} onClick={handleClick}>
      {children || value}
    </button>
  )
}
