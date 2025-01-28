import i18next, { Resource, ResourceLanguage } from 'i18next';
import { initReactI18next } from 'react-i18next';
import GlobalTranslate from './GlobalTranslate';

// Определяем интерфейс для структуры переводов
interface Translations {
  [key: string]: {
    [key: string]: string;
  };
}

// Определяем ресурсы для i18next с типизацией
const resources: Resource = {
  tr: {
    translation: {
      ...GlobalTranslate.tr,
    },
  },
  en: {
    translation: {
      ...GlobalTranslate.en,
    },
  },
};

// Определяем начальный язык
let language: string = 'tr';
const savedLanguage = window.localStorage.getItem('lang');
if (savedLanguage) {
  language = savedLanguage;
}

// Инициализируем i18next
i18next.use(initReactI18next).init({
  resources,
  lng: language,
  fallbackLng: 'en', // Указываем резервный язык
});

export function translation(code: string): string {
  return i18next.t(code);
}

export const addTranslation = (translations: Translations): void => {
  for (const lang of Object.keys(translations)) {
    const langTranslations: ResourceLanguage = translations[lang];
    i18next.addResources(lang, 'translation', langTranslations);
  }
};
