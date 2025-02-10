import { addTranslation } from "../../../../translate/Translate";

interface Translation {
    [language: string]: {
      [key: string]: string;
    };
  }
  
  const translations: Translation = {
    tr: {
        chartbar_title1: "Yeni Dünyanın Petrolü",
        chartbar_title2: "Yapay Zeka",
        chartbar_text1: "Yapay Zeka'nın bir alt disiplini olan Bilgisayarla Görme (CV), video görüntülerindeki binlerce görsel nesne, resim veya aksiyonu tespit eden, işleyen ve anında analiz eden bir yapay zeka teknolojisi olmasıyla birlikte bunu insanın yaptığı süreye kıyasla nanosaniyelerde yapar.",
        chartbar_text2: "Kısacası, beyin ve gözün bir arada yapabildiği her şeyi yapabilen, maaş; tatil yorgunluk gibi insani ihtiyaçları olmayan bir teknoloji olarak düşünebilirsiniz.",
        billion: 'Milyar',
        trillion: 'Trilyon',
        billion_text: '2021’de tahmin edilen USD Değeri',
        trillion_text: '2030’da tahmin edilen USD Değeri',
    },
    en: {
        chartbar_title1: "The oil of the new world",
        chartbar_title2: "AI-powered computer vision",
        chartbar_text1: "Computer Vision (CV) is an artificial intelligence technology that detects, processes, and instantly analyzes thousands of visual objects, images, or actions in video images but does so in nanoseconds, versus the time it takes a human being.",
        chartbar_text2: "The technology can take immediate action when images, pictures, or patterns of images are detected. Think of it as artificial eyes and brains, only more highly evolved.",
        billion: 'Billion',
        trillion: 'Trillion',
        billion_text: 'Estimated USD Value in 2021',
        trillion_text: 'Estimated AI USD Value in 2030',
    }
};

addTranslation(translations);