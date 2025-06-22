import { createI18n } from 'vue-i18n'

const messages = {
  ru: {
    title: 'АНО «ОТКРЫТИЕ ПЕРСПЕКТИВЫ»',
    mission: 'Наша миссия – помогать каждому реализовать себя.',
    about: {
      heading: '🏛 О нас',
      text: '«Перспективы» — партнёрство двух благотворительных организаций:',
      list: [
        'Московская благотворительная общественная организация «Перспективы и помощь на радость»',
        'АНО «Новые перспективы»'
      ],
      paragraph: 'Мы работаем в Москве и создаём условия, в которых люди с ментальными и физическими особенностями могут развиваться, работать и жить достойно.'
    },
    support: {
      heading: '💬 Кого мы поддерживаем',
      list: [
        'людей с инвалидностью',
        'тех, кто ищет работу',
        'глухих и слабослышащих',
        'всех, кому нужна поддержка'
      ],
      paragraph: 'Мы верим, что каждый человек достоин возможностей и достойной жизни.'
    },
    actions: {
      heading: '💼 Что мы делаем',
      list: [
        'обучаем и развиваем',
        'помогаем в трудоустройстве',
        'сопровождаем путь каждого участника'
      ],
      paragraph: 'Наша цель — не просто поддержать, а помочь стать автором своей жизни.'
    },
    philosophy: {
      heading: '🌱 Наша философия',
      lines: [
        'Счастье — это не только результат, но и путь.',
        'Каждый шаг, каждая попытка, каждое достижение важны.',
        'Мы создаём пространство, где расти безопасно, а мечтать — не стыдно.'
      ]
    },
    join: {
      heading: '🤝 Присоединяйтесь',
      paragraph: 'Вместе с вами мы строим мир, где у каждого есть шанс реализовать свой потенциал и изменить свою жизнь к лучшему.'
    },
    contacts: {
      title: 'АНО «ОТКРЫТИЕ ПЕРСПЕКТИВЫ»',
      phone: '+7 (999) 999-99-99',
      email: 'info@perspektiva.ru',
      site: 'https://perspektiva.ru',
      address: 'Варшавское шоссе, д. 32, Москва'
    }
  },

  en: {
    title: 'ANO "DISCOVERY OF OPPORTUNITIES"',
    mission: 'Our mission is to help everyone realize their potential.',
    about: {
      heading: '🏛 About us',
      text: '“Perspektivy” is a partnership of two charitable organizations:',
      list: [
        'Moscow Charitable Public Organization “Perspektivy and Joyful Support”',
        'ANO “New Perspectives”'
      ],
      paragraph: 'We operate in Moscow and create conditions for people with mental and physical disabilities to grow, work and live with dignity.'
    },
    support: {
      heading: '💬 Who we support',
      list: [
        'people with disabilities',
        'those seeking employment',
        'deaf and hard of hearing individuals',
        'anyone who needs support'
      ],
      paragraph: 'We believe every person deserves opportunities and a dignified life.'
    },
    actions: {
      heading: '💼 What we do',
      list: [
        'we educate and develop',
        'we help with employment',
        'we support each participant along their journey'
      ],
      paragraph: 'Our goal is not just to support but to help people become authors of their own lives.'
    },
    philosophy: {
      heading: '🌱 Our philosophy',
      lines: [
        'Happiness is not only the result, but also the journey.',
        'Every step, every attempt, every achievement matters.',
        'We create a space where it’s safe to grow and okay to dream.'
      ]
    },
    join: {
      heading: '🤝 Join us',
      paragraph: 'Together we build a world where everyone has the chance to fulfill their potential and change their life for the better.'
    },
    contacts: {
      title: 'ANO "DISCOVERY OF OPPORTUNITIES"',
      phone: '+7 (999) 999-99-99',
      email: 'info@perspektiva.ru',
      site: 'https://perspektiva.ru',
      address: 'Varshavskoe Highway, 32, Moscow'
    }
  }
}

export const i18n = createI18n({
  locale: 'ru',
  fallbackLocale: 'en',
  messages
})
