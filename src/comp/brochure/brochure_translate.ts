import { addTranslation } from "../../translate/Translate";

interface Translation {
  [language: string]: {
    [key: string]: string;
  };
}

const translations: Translation = {
  tr: {
    brochure: "Broşür",
    english: "İngilizce",
    turkish: "Türkçe",
    previous: "Geri",
    next: "İleri",
    page: "Sayfa",
    firstPage: "İlk Sayfa",
    lastPage: "Son Sayfa",
    goToPage: "Git",
  },
  en: {
    brochure: "Brochure",
    english: "In English",
    turkish: "In Turkish",
    previous: "Previous",
    next: "Next",
    page: "Page",
    firstPage: "First Page",
    lastPage: "Last Page",
    goToPage: "Go",
  },
};

addTranslation(translations);
