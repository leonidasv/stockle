type Translation = {
  win_message_1: string
  win_message_2: string
  win_message_3: string
  win_message_4: string
  the_stock_was: string
  stock_not_found: string
  not_enough_letters: string
  game_copied_to_clipboard: string
}

export const game: { [k: string]: Translation } = {
  en: {
    win_message_1: 'Great Job!',
    win_message_2: 'Awesome',
    win_message_3: 'Well done!',
    win_message_4: 'Amazing!',
    the_stock_was: 'The stock was',
    stock_not_found: 'Stock not found',
    not_enough_letters: 'Not enough letters',
    game_copied_to_clipboard: 'Game copied to clipboard',
  },
  pt: {
    win_message_1: 'Bom trabalho!',
    win_message_2: 'Excelente',
    win_message_3: 'Ótimo',
    win_message_4: 'Se saiu bem',
    the_stock_was: 'Loss! O ativo era',
    stock_not_found: 'Ativo não encontrado',
    not_enough_letters: 'Letras insuficientes',
    game_copied_to_clipboard: 'Resultado copiado',
  },
}
