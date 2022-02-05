import classnames from 'classnames'
import { CharStatus } from '../../lib/statuses'

type Props = {
  value?: string
  status?: CharStatus
  disabled?: boolean
}

export const Cell = ({ value, status, disabled }: Props) => {
  const classes = classnames(
    'w-14 h-14 border-solid border-2 flex items-center justify-center mx-0.5 text-lg font-bold rounded dark:text-white',
    {
      'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-600': !status,
      'border-black dark:border-slate-100': value && !status,
      'bg-slate-400 dark:bg-slate-700 text-white border-slate-400 dark:border-slate-700': status === 'absent',
      'bg-green-500 text-white border-green-500': status === 'correct',
      'bg-yellow-400 text-white border-yellow-400': status === 'present',
      'cell-animation': !!value,
      'bg-slate-100 border-slate-200': !!disabled,
    }
  )

  return <div className={classes}>{value}</div>
}
