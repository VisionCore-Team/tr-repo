import { addTranslation } from "../../translate/Translate";

interface Translation {
    [language: string]: {
      [key: string]: string;
    };
  }
  
  const translations: Translation = {
    tr:{
        solutions: "Çözümler",
        health: "Sağlık",
        manufacturing: "Üretim",
        agriculture: "Tarım",
        car: "Plaka Tanıma ve Takip Sistemleri",
        legal: "Hukuki",
        policy: "Gizlilik Politikası",
        terms: "Kullanım Şartları",
    },
    en:{
        solutions: "Solutions",
        health: "Health",
        manufacturing: "Manufacturing",
        agriculture: "Agriculture",
        car: "License Plate Detection & Tracking",
        legal: "Legal",
        policy: "Privacy Policy",
        terms: "Terms & Conditions",
    }
};

addTranslation(translations);