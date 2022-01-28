type Translation = {
  total_tries: string
  success_rate: string
  current_streak: string
  best_streak: string
}

export const statBar: { [k: string]: Translation } = {
  en: {
    total_tries: 'Total tries',
    success_rate: 'Success rate',
    current_streak: 'Current streak',
    best_streak: 'Best streak',
  },
  pt: {
    total_tries: 'Jogos',
    success_rate: 'de sucesso',
    current_streak: 'Sequência atual',
    best_streak: 'Melhor sequência',
  },
}
