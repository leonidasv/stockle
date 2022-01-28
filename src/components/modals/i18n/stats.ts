type Translation = {
  guess_distribution: string
  new_stock_in: string
  share: string
  statistics_title: string
  sharing_template: string
}

export const stats: { [k: string]: Translation } = {
  en: {
    statistics_title: 'Statistics',
    guess_distribution: 'Guess Distribution',
    new_stock_in: 'New stock in',
    share: 'Share',
    sharing_template: 'played stockle.win 📈',
  },
  pt: {
    statistics_title: 'Estatísticas',
    guess_distribution: 'Distribuição de acertos',
    new_stock_in: 'Novo código em',
    share: 'Compartilhar Resultado',
    sharing_template: 'joguei stockle.win 📈',
  },
}
