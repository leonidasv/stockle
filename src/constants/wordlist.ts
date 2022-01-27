import Chance from 'chance'
import { VALIDGUESSES } from './validGuesses'

const validWords = VALIDGUESSES.slice(0, 1500)
// Yep, I'm generating this dynamically. Sorry.
const chance = new Chance('whatareyoulookingfor')
export const WORDS = chance.shuffle(validWords)
