import {addTranslation} from '../../../translate/Translate';

interface Translation {
    [language: string]: {
      [key: string]: string;
    };
  }
  
  const translations: Translation = {
    tr: {
        fullNameRequired: "Tam isim gereklidir",
        emailRequired: "E-mail gereklidir",
        messageRequired: "Mesaj gereklidir",
        topicRequired: "Mesaj konusu gerklidir",
        validNumber: "Numarayı doğru yazınız",
        validEmail: "Email'i doğru yazınız",
        modalTitle: "Size yardımcı olmak için buradayız.",
        modalText: "İlginize çok değer veriyoruz. Lütfen formu doldurmak için bir dakikanızı ayırın; ekibimiz sorunuza en kısa sürede yanıt verecektir.",
        callText: "Ara",
        fullName: "Ad Soyad",
        phoneNumber: "Telefon Numarası",
        messageTopic: "Mesaj Konusu",
        selectTopic: "Mesak konusunu seçin",
        topic1: "Demo Talebi",
        topic2: "Teklif Al",
        topic3: "Genel Sorular",
        message: "Mesaj",
        submit: "Onay",
        verifyRobot: "Lütfen robot olmadığınızı doğrulayın!",
        recaptchaError: "reCAPTCHA kontrolü sırasında hata oluştu.",
    },
    en: {
        fullNameRequired: "Full name is required",
        emailRequired: "E-mail is required",
        messageRequired: "Message is required",
        topicRequired: "Topic is required",
        validNumber: "Phone number is not valid",
        validEmail: "Invalid email address",
        modalTitle: "We are here to assist you.",
        modalText: "We highly value your interest. Please take a moment to complete the form and our team will respond promptly to your inquiry.",
        callText: "Call",
        fullName: "Full Name",
        phoneNumber: "Phone Number",
        messageTopic: "Message Topic",
        selectTopic: "Select a topic",
        topic1: "Demo Request",
        topic2: "Get an Offer",
        topic3: "General Questions",
        message: "Message",
        submit: "Submit",
        robotVerify: "Please, verify you are not a robot!",
        recaptchaError: "Error during reCAPTCHA check."
    }
};

addTranslation(translations);