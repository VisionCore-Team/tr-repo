import { addTranslation } from "../../../translate/Translate";

interface Translation {
    [language: string]: {
      [key: string]: string;
    };
}
  
  const translations: Translation = {
    tr: {
        meetTeam: "Bizi Tanıyın",

    },
    en: {
        meetTeam: "Meet The Team"
    }
};

addTranslation(translations);