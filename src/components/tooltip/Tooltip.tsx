import { ReactNode } from 'react'

type Props = {
  id: string
  children: ReactNode
}

export function Tooltip({ id, children }: Props) {
  return (
    <div
      id={id}
      role="tooltip"
      className="inline-block absolute invisible z-10 py-2 px-3 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 transition-opacity duration-300 tooltip dark:bg-gray-200 dark:text-gray-700 z-50"
    >
      {children}
      <div className="tooltip-arrow" data-popper-arrow="" />
    </div>
  )
}
