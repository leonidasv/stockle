import { getGuessStatuses } from './statuses'

export const shareStatus = (guesses: string[], lost: boolean, solution: string) => {
  navigator.clipboard.writeText(
    `stockle.win 📈 ${lost ? 'X' : guesses.length}/6\n\n` + generateEmojiGrid(guesses, solution)
  )
}

const generateEmojiGrid = (guesses: string[], solution: string) => {
  return guesses
    .map((guess) => {
      const status = getGuessStatuses(guess, solution)
      return guess
        .split('')
        .map((letter, i) => {
          switch (status[i]) {
            case 'correct':
              return '🟩'
            case 'present':
              return '🟨'
            default:
              return '⬜'
          }
        })
        .join('')
    })
    .join('\n')
}
