type Translation = {
  opensource_clone: string
  check_out_source: string
  forked_from: string
  not_wordle: string
  ending: string
}

export const about: { [k: string]: Translation } = {
  en: {
    opensource_clone: 'This is an open source clone of the game Wordle',
    check_out_source: 'check out the source here',
    forked_from: '. Forked from the amazing',
    not_wordle: 'Not Wordle by hannahcode',
    ending: '.',
  },
  pt: {
    opensource_clone: 'Esse jogo é um clone open source do Wordle (ou Termooo). O código-fonte está',
    check_out_source: 'disponível aqui',
    forked_from: '. Esta versão é um fork do',
    not_wordle: 'Not Wordle by hannahcode',
    ending: '.',
  },
}
