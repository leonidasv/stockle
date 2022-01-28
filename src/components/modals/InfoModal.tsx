import { useContext } from 'react'
import { LangContext } from '../../context/lang'
import { Cell } from '../grid/Cell'
import { BaseModal } from './BaseModal'
import { info } from './i18n/info'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const InfoModal = ({ isOpen, handleClose }: Props) => {
  const lang = useContext(LangContext)
  const t = info[lang]

  const stock1 = t.how_to_play_stock_1
  const stock2 = t.how_to_play_stock_2
  const stock3 = t.how_to_play_stock_3

  return (
    <BaseModal title={t.how_to_play} isOpen={isOpen} handleClose={handleClose}>
      <p className="text-sm text-gray-500">{t.how_to_play_init}</p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value={stock1[0]} status="correct" />
        <Cell value={stock1[1]} />
        <Cell value={stock1[2]} />
        <Cell value={stock1[3]} />
      </div>
      <p className="text-sm text-gray-500">
        {t.how_to_play_the_letter}
        <b>{stock1[0]}</b>
        {t.how_to_play_letter_correct}
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value={stock2[0]} />
        <Cell value={stock2[1]} />
        <Cell value={stock2[2]} status="present" />
        <Cell value={stock2[3]} />
      </div>
      <p className="text-sm text-gray-500">
        {t.how_to_play_the_letter}
        <b>{stock2[2]}</b>
        {t.how_to_play_letter_present}
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value={stock3[0]} />
        <Cell value={stock3[1]} />
        <Cell value={stock3[2]} />
        <Cell value={stock3[3]} status="absent" />
      </div>
      <p className="text-sm text-gray-500">
        {t.how_to_play_the_letter}
        <b>{stock3[3]}</b>
        {t.how_to_play_letter_absent}
      </p>
      <br />
      <p className="text-sm text-gray-500">{t.new_ticker_available_at}</p>
    </BaseModal>
  )
}
