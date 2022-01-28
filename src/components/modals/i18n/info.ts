type Translation = {
  how_to_play: string
  how_to_play_init: string
  how_to_play_stock_1: string
  how_to_play_stock_2: string
  how_to_play_stock_3: string
  how_to_play_the_letter: string
  how_to_play_letter_correct: string
  how_to_play_letter_present: string
  how_to_play_letter_absent: string
  new_ticker_available_at: string
}

export const info: { [k: string]: Translation } = {
  en: {
    how_to_play: 'How to play',
    how_to_play_init:
      'Guess the stock (or ETF) in 6 tries. After each guess, the color of the tiles will change to show how close your guess was to the ticker symbol.',

    how_to_play_stock_1: 'MSFT',
    how_to_play_stock_2: 'TSLA',
    how_to_play_stock_3: 'NVDA',

    how_to_play_the_letter: 'The letter ',

    how_to_play_letter_correct: ' is in the ticker and in the correct spot.',
    how_to_play_letter_present: ' is in the ticker but in the wrong spot.',
    how_to_play_letter_absent: ' is not in the ticker in any spot.',

    new_ticker_available_at: 'A new ticker is available for guessing everyday at 9:30am EST.',
  },
  pt: {
    how_to_play: 'Como jogar',
    how_to_play_init:
      'Você tem 6 chances de adivinhar o código de um ativo da B3 (ação, FII, ETF ou BDR). A cada tentativa, a cor dos blocos mudará, te indicando quão perto você está de acertar.',
    how_to_play_stock_1: 'PETR',
    how_to_play_stock_2: 'ITUB',
    how_to_play_stock_3: 'COGN',

    how_to_play_the_letter: 'A letra ',

    how_to_play_letter_correct: ' pertence ao ativo e está na posição correta.',
    how_to_play_letter_present: ' pertence ao ativo mas está na posição incorreta.',
    how_to_play_letter_absent: ' não está presente no código do ativo.',

    new_ticker_available_at: 'O código do desafio muda todo dia às 10:00 (BRT), junto com a abertura do mercado.',
  },
} as const
