import { addTranslation } from "../../translate/Translate";

interface Translation {
    [language: string]: {
      [key: string]: string;
    };
  }
  
  const translations: Translation = {
    tr:{
        brochure: "Broşür",
        english: "İngilizce",
        turkish: "Türkçe",
        previous: "Geri",
        next: "İleri",
        page: "Sayfa",
    },
    en:{
        brochure: "Brochure",
        english: "In English",
        turkish: "In Turkish",
        previous: "Previous",
        next: "Next",
        page: "Page",
    }
};

addTranslation(translations);