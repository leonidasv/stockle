type Translation = {
  about_opensource_clone: string
  about_check_out_source: string
  about_forked_from: string
  about_not_wordle: string
  about_ending: string
  privacy_title: string
  privacy_text: string
  privacy_you_own_your_data: string
  not_investment_advice: string
  credits_prefix: string
  credits_link_text: string
  credits_link_url: string
}

export const about: { [k: string]: Translation } = {
  en: {
    about_opensource_clone: 'This is an open source clone of the game Wordle ',
    about_check_out_source: 'check out the source here',
    about_forked_from: '. Forked from the amazing ',
    about_not_wordle: 'Not Wordle by hannahcode',
    about_ending: '.',
    privacy_title: 'Privacy: ',
    privacy_text:
      'this website is allergic to tracking Cookies🍪. No tracking data is stored on your device or shared with us.',
    privacy_you_own_your_data: 'You own your data.',
    not_investment_advice: 'Not investment advice',
    credits_prefix: 'by ',
    credits_link_text: 'leonidasv.com',
    credits_link_url: 'https://leonidasv.com',
  },
  pt: {
    about_opensource_clone: 'Esse jogo é um clone open source do Wordle (ou Termooo). O código-fonte está ',
    about_check_out_source: 'disponível aqui',
    about_forked_from: '. Esta versão é um fork do ',
    about_not_wordle: 'Not Wordle by hannahcode',
    about_ending: '.',
    privacy_title: 'Privacidade: ',
    privacy_text:
      'este site é alérgico a Cookies🍪 de rastreamento. Nenhum dado de rastreio é armazenado no seu dispositivo ou compartilhado conosco.',
    privacy_you_own_your_data: 'Você é dono dos seus dados.',
    not_investment_advice: 'Não é recomendação de investimento',
    credits_prefix: 'Por ',
    credits_link_text: 'leonidasv.com',
    credits_link_url: 'https://leonidasv.com',
  },
}
