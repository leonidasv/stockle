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
      <p className="text-sm text-gray-500 dark:text-gray-300">
        {t.about_opensource_clone}{' '}
        <a href="https://github.com/leonidasv/stockle" className="underline font-bold">
          {t.about_check_out_source}
        </a>
        {t.about_forked_from}{' '}
        <a href="https://github.com/hannahcode/wordle" className="underline font-bold">
          {t.about_not_wordle}
        </a>
        {t.about_ending}
      </p>
      <p className="text-sm text-gray-500 font-light mt-6">
        <span className="font-normal">{t.privacy_title}</span>
        {t.privacy_text}
      </p>
      <p className="text-sm text-gray-500 font-normal">{t.privacy_you_own_your_data}</p>
      <p className="text-sm text-gray-400 font-light italic mt-6">{t.not_investment_advice}</p>
    </BaseModal>
  )
}
