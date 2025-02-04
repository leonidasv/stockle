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
    'flex items-center justify-center rounded mx-0.5 text-xs font-bold cursor-pointer select-none dark:text-white',
    {
      'bg-slate-200 hover:bg-slate-300 dark:bg-slate-600 dark:hover:bg-slate-700 active:bg-slate-400': !status,
      'bg-slate-400 hover:bg-slate-500 text-white': status === 'absent',
      'bg-green-500 hover:bg-green-600 active:bg-green-700 text-white': status === 'correct',
      'bg-yellow-400 hover:bg-yellow-500 active:bg-yellow-600 text-white': status === 'present',
      'bg-slate-200 text-slate-200 hover:bg-slate-200 active:bg-slate-200': !!disabled,
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
