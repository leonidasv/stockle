import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const AboutModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal title="About" isOpen={isOpen} handleClose={handleClose}>
      <p className="text-sm text-gray-500">
        This is an open source clone of the game Wordle{' '}
        <a
          href="https://github.com/leonidasv/stockle"
          className="underline font-bold"
        >
          check out the source here
        </a>
        . Forked from the amazing{' '}
        <a
          href="https://github.com/hannahcode/wordle"
          className="underline font-bold"
        >
          Not Wordle by hannahcode
        </a>
        .
      </p>
    </BaseModal>
  )
}
