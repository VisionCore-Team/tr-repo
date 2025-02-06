import { addTranslation } from "../../translate/Translate";

interface Translation {
    [language: string]: {
      [key: string]: string;
    };
  }

  const translations: Translation = {
    tr: {
        meetTeam: "Takımımız",
        caglar_position: "Kurucu, AI Geliştirici",
        caglar_location: "Deventer, Hollanda / Izmir, Türkiye",
        caglar_about: "Yapay zeka modelleri geliştirme ve dağıtma konusunda güçlü bir geçmişe sahip, tutkulu ve yenilikçi bir Yazılım Geliştiriciyim. Uzmanlık alanım makine öğrenimi, derin öğrenme ve bilgisayarla görme üzerinedir. Bunun Yanı sıra React JS ve SQL konusunda yetkinim.",
        sirous_position: "Derin Öğrenme - Bilgisayarla Görme Mühendisi",
        sirous_location: "Eskişehir, Türkiye",
        sirous_about: "Derin öğrenme ve bilgisayarla görme alanında uzmanlaşmış bir makine öğrenimi mühendisiyim ve başarılı gerçek dünya projeleri geliştirme geçmişine sahibim. Portföyümde, çeşitli endüstrilerde uygulanmış birçok yenilikçi çözüm bulunmaktadır. Yeteneklerimi sürekli olarak geliştirmeye ve sektördeki en son trendlerle güncel kalmaya tutkuyla yaklaşıyorum. Esnek ve açık fikirli bir çalışma anlayışına sahip olup, dinamik ortamlarda başarılı oluyorum ve değişen durumlara kolayca uyum sağlıyorum. Deneyimli profesyoneller ve ekip liderleri ile çalışarak, etkili bir şekilde işbirliği yapabilir ve herhangi bir projenin başarısına katkı sağlayabilirim. Ayrıca, genç takım üyelerine rehberlik ve destek sağlayarak, onların zorlukları aşmalarına ve hedeflerine ulaşmalarına yardımcı olabilirim.",
        veysel_position: "Önyüz Geliştirici",
        veysel_location: "Kocaeli, Türkiye",
        veysel_about: "Teknoloji ve programlamaya derin bir tutkuyla bağlı Yazılım Geliştiriciyim. Özellikle React.js üzerinde yoğunlaşarak web geliştirmeye odaklandım. Akademik çalışmalarımın dışında, bu alandaki bilgi ve becerilerimi sürekli olarak genişletmeye çalışıyor, yeni teknolojiler ve çerçevelerle deneyler yaparak sektördeki gelişmeleri takip ediyorum."
    },
    en: {
        meetTeam: "Meet the Team",
        caglar_position: "AI Developer",
        caglar_location: "Deventer, Netherlands / Izmir, Turkey",
        caglar_about: "I am a passionate and innovative Software Developer with a strong background in developing and deploying artificial intelligence models. My areas of expertise include machine learning, deep learning, and computer vision. Additionally, I am proficient in React JS and SQL.",
        sirous_position: "Deep Learning - Computer Vision Engineer",
        sirous_location: "Eskişehir, Turkey",
        sirous_about: "As a machine learning engineer specializing in the field of deep learning and computer vision, I have a track record of developing successful real-life projects. My portfolio includes several innovative solutions that have been implemented in various industries. I am passionate about continuously improving my skills and staying up-to-date with the latest industry trends. With a flexible and open-minded approach to work, I thrive in dynamic environments and find it easy to adapt to changing situations. Working alongside experienced professionals and team leaders, I am capable of collaborating effectively and contributing to the success of any project. I am also able to provide guidance and support to junior team members, helping them overcome challenges and achieve their goals.",
        veysel_position: "Frontend Developer",
        veysel_location: "Kocaeli, Turkey",
        veysel_about: "With a deep passion for technology and programming, I have immersed myself in the world of web development, focusing particularly on React.js. Beyond my academic pursuits, I actively seek opportunities to expand my knowledge and skills in this field, constantly experimenting with new technologies and frameworks to stay at the forefront of industry trends."
    }
};

addTranslation(translations);