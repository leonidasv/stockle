import { Cell } from '../grid/Cell'
import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const InfoModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal title="How to play" isOpen={isOpen} handleClose={handleClose}>
      <p className="text-sm text-gray-500">
        Guess the stock (or ETF) in 6 tries. After each guess, the color of the
        tiles will change to show how close your guess was to the ticker symbol.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="M" status="correct" />
        <Cell value="S" />
        <Cell value="F" />
        <Cell value="T" />
      </div>
      <p className="text-sm text-gray-500">
        The letter <b>M</b> is in the ticker and in the correct spot.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="T" />
        <Cell value="S" />
        <Cell value="L" status="present" />
        <Cell value="A" />
      </div>
      <p className="text-sm text-gray-500">
        The letter <b>L</b> is in the ticker but in the wrong spot.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="N" />
        <Cell value="V" />
        <Cell value="D" />
        <Cell value="A" status="absent" />
      </div>
      <p className="text-sm text-gray-500">
        The letter <b>A</b> is not in the ticker in any spot.
      </p>
      <br />
      <p className="text-sm text-gray-500">
        A new ticker is available for guessing everyday at 9:30am EST.
      </p>
    </BaseModal>
  )
}
