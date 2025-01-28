import { addTranslation } from "../../../translate/Translate";

interface Translation {
    [language: string]: {
      [key: string]: string;
    };
  }
  
  const translations: Translation = {
    tr: {
        title: "Hizmetlerimizi Keşfedin",
        video_title1: "Kapalı Alan Araç Takip Sistemleri",
        video_title2: "Beyaz Kan Hücresi Tespiti",
        video_title3: "Solar Panel Hata Tespiti Sistemleri",
    },
    en: {
        title: "Discover Our Services",
        video_title1: "Indoor Car Tracking and Plate Recognition",
        video_title2: "White Blood Cell Detection",
        video_title3: "Solar Panel Defect Detection Systems",
    }
};

addTranslation(translations);