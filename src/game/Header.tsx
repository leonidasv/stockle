import { ChartBarIcon, InformationCircleIcon } from '@heroicons/react/outline'

type Props = {
  setIsInfoModalOpen: (b: boolean) => void
  setIsStatsModalOpen: (b: boolean) => void
}

export function Header({ setIsInfoModalOpen, setIsStatsModalOpen }: Props) {
  return (
    <div className="flex w-80 mx-auto items-center mb-8">
      <h1 className="text-xl grow font-bold">Stockle 📈</h1>
      <InformationCircleIcon className="h-6 w-6 cursor-pointer" onClick={() => setIsInfoModalOpen(true)} />
      <ChartBarIcon className="h-6 w-6 cursor-pointer" onClick={() => setIsStatsModalOpen(true)} />
    </div>
  )
}
