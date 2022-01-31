import { ChartBarIcon, InformationCircleIcon } from '@heroicons/react/outline'
import { useContext } from 'react'
import Flag from 'react-flagkit'
import { Tooltip } from '../components/tooltip/Tooltip'
import { LangContext } from '../context/lang'
import { changeMarket } from '../lib/preferredMarket'

type Props = {
  setIsInfoModalOpen: (b: boolean) => void
  setIsStatsModalOpen: (b: boolean) => void
}

export function Header({ setIsInfoModalOpen, setIsStatsModalOpen }: Props) {
  const lang = useContext(LangContext)
  const activeCountry = lang === 'en' ? 'US' : 'BR'

  return (
    <div className="flex w-80 mx-auto items-center mb-8">
      <h1 className="text-xl grow font-bold">Stockle 📈</h1>
      <Flag
        country="US"
        className={`mx-1 rounded cursor-pointer ${!(activeCountry === 'US') ? 'opacity-40' : ''}`}
        onClick={() => changeMarket('nasdaq')}
        data-tooltip-target="tooltip-US"
      />
      <Tooltip id="tooltip-US">Nasdaq</Tooltip>
      <Flag
        country="BR"
        className={`mx-1 rounded cursor-pointer ${!(activeCountry === 'BR') ? 'opacity-40' : ''}`}
        onClick={() => changeMarket('b3')}
        data-tooltip-target="tooltip-BR"
      />
      <Tooltip id="tooltip-BR">B3</Tooltip>
      <InformationCircleIcon className="h-6 w-6 ml-2 cursor-pointer" onClick={() => setIsInfoModalOpen(true)} />
      <ChartBarIcon className="h-6 w-6 cursor-pointer" onClick={() => setIsStatsModalOpen(true)} />
    </div>
  )
}
