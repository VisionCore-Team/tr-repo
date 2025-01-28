import { addTranslation } from "../../../translate/Translate";

interface Translation {
    [language: string]: {
      [key: string]: string;
    };
  }
  
  const translations: Translation = {
    tr: {
        banner_text1: "Sektörünüzü Göremiyor Musunuz?",
        banner_text2: "Bir Yapay Zeka Uzmanıyla Konuşun",
    },
    en: {
        banner_text1: "Can't See Your Industry?",
        banner_text2: "Speak with an AI Expert",
    }
};

addTranslation(translations);