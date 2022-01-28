import Chance from 'chance'
import { MarketConfig, marketConfig } from '../config/markets'
import { MARKET } from '../constants/strings'

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
  private readonly config: MarketConfig

  constructor(market: MARKET, allWords: string[]) {
    this.config = marketConfig[market]
    this.validGuesses = new Set(allWords)
    this.index = this.getIndex()
    this.tomorrow = (this.index + 1) * DAY_MS + this.config.epoch

    const guessingWords = allWords.slice(0, this.config.wordSlice)
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
    return Math.floor((now - this.config.epoch) / DAY_MS)
  }
}

export type { Words }
