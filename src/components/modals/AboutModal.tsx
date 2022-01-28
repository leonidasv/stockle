import { useContext } from 'react'
import { LangContext } from '../../context/lang'
import { BaseModal } from './BaseModal'
import { about } from './i18n/about'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const AboutModal = ({ isOpen, handleClose }: Props) => {
  const lang = useContext(LangContext)
  const t = about[lang]

  return (
    <BaseModal title="About" isOpen={isOpen} handleClose={handleClose}>
      <p className="text-sm text-gray-500">
        {t.opensource_clone}{' '}
        <a href="https://github.com/leonidasv/stockle" className="underline font-bold">
          {t.check_out_source}
        </a>
        {t.forked_from}{' '}
        <a href="https://github.com/hannahcode/wordle" className="underline font-bold">
          {t.not_wordle}
        </a>
        {t.ending}
      </p>
    </BaseModal>
  )
}
