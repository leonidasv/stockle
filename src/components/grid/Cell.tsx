import classnames from 'classnames'
import { CharStatus } from '../../lib/statuses'

type Props = {
  value?: string
  status?: CharStatus
  disabled?: boolean
}

export const Cell = ({ value, status, disabled }: Props) => {
  const classes = {
    'bg-white border-slate-200': !status,
    'border-black': value && !status,
    'bg-slate-400 text-white border-slate-400': status === 'absent',
    'bg-green-500 text-white border-green-500': status === 'correct',
    'bg-yellow-400 text-white border-yellow-400': status === 'present',
    'cell-animation': !!value,
    'bg-slate-100 border-slate-200': !!disabled,
  }

  const c = classnames(
    'w-14 h-14 border-solid border-2 flex items-center justify-center mx-0.5 text-lg font-bold rounded',
    classes
  )

  return <div className={c}>{value}</div>
}
