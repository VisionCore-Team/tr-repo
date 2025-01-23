import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import GlobalTranslate from './GlobalTranslate';

const resources = {
  tr: {
    translation: {
      ...GlobalTranslate.tr
    }
  },
  en: {
    translation: {
      ...GlobalTranslate.en
    }
  }
};

let language = 'tr';
if (window.localStorage.getItem('lang')) {
  language = window.localStorage.getItem('lang');
}
i18next.use(initReactI18next).init({ resources, lng: language });

export function translation(code) {
  return i18next.t(code);
}

export const addTranslation = translations => {
  for (const lang of Object.keys(translations)) {
    i18next.addResources(lang, 'translation', translations[lang]);
  }
};
