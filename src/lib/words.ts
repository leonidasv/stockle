import Chance from 'chance'
import { marketConfig } from '../config/markets'
import { MARKET } from '../constants/strings'

// January 3, 2022 9:30 EST - Game Epoch (2022 Nasdaq's opening bell)
const EPOCH_MS = 1641218400000
// Milliseconds in a day
const DAY_MS = 86400000

const seed = new Chance('whatareyoulookingfor')

export async function wordsFactory(market: MARKET) {
  const req = await fetch(`./${market}.json`)
  const words: string[] = await req.json()

  return new Words(market, words)
}

class Words {
  public readonly solution: string
  public readonly tomorrow: number

  private readonly validGuesses: Set<string>
  private readonly index: number

  constructor(market: MARKET, allWords: string[]) {
    this.validGuesses = new Set(allWords)
    this.index = this.getIndex()
    this.tomorrow = (this.index + 1) * DAY_MS + EPOCH_MS

    const guessingWords = allWords.slice(0, marketConfig[market].wordSlice)
    const words = seed.shuffle(guessingWords)
    this.solution = words[this.index % words.length]
  }

  public isWordInWordList = (word: string) => {
    return this.validGuesses.has(word)
  }

  public isWinningWord = (word: string) => {
    return this.solution === word
  }

  private getIndex() {
    const now = Date.now()
    return Math.floor((now - EPOCH_MS) / DAY_MS)
  }
}

export type { Words }
