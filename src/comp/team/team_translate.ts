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
    caglar_about:
      "Yapay zeka modelleri geliştirme ve dağıtma konusunda güçlü bir geçmişe sahip, tutkulu ve yenilikçi bir Yazılım Geliştiriciyim. Uzmanlık alanım makine öğrenimi, derin öğrenme ve bilgisayarla görme üzerinedir. Bunun Yanı sıra React JS ve SQL konusunda yetkinim.",
    sirous_position: "Derin Öğrenme - Bilgisayarla Görme Mühendisi",
    sirous_location: "Eskişehir, Türkiye",
    sirous_about:
      "Derin öğrenme ve bilgisayarla görme alanında uzmanlaşmış bir makine öğrenimi mühendisiyim ve başarılı gerçek dünya projeleri geliştirme geçmişine sahibim. Portföyümde, çeşitli endüstrilerde uygulanmış birçok yenilikçi çözüm bulunmaktadır. Yeteneklerimi sürekli olarak geliştirmeye ve sektördeki en son trendlerle güncel kalmaya tutkuyla yaklaşıyorum. Esnek ve açık fikirli bir çalışma anlayışına sahip olup, dinamik ortamlarda başarılı oluyorum ve değişen durumlara kolayca uyum sağlıyorum. Deneyimli profesyoneller ve ekip liderleri ile çalışarak, etkili bir şekilde işbirliği yapabilir ve herhangi bir projenin başarısına katkı sağlayabilirim. Ayrıca, genç takım üyelerine rehberlik ve destek sağlayarak, onların zorlukları aşmalarına ve hedeflerine ulaşmalarına yardımcı olabilirim.",
    veysel_position: "Önyüz Geliştirici",
    veysel_location: "Kocaeli, Türkiye",
    veysel_about:
      "Teknoloji ve programlamaya derin bir tutkuyla bağlı Yazılım Geliştiriciyim. Özellikle React.js üzerinde yoğunlaşarak web geliştirmeye odaklandım. Akademik çalışmalarımın dışında, bu alandaki bilgi ve becerilerimi sürekli olarak genişletmeye çalışıyor, yeni teknolojiler ve çerçevelerle deneyler yaparak sektördeki gelişmeleri takip ediyorum.",
    malik_position: "Tam Yığın Web Geliştirci",
    malik_location: "İstanbul, Türkiye",
    malik_about:
      "Web siteleri ve web uygulamaları için sezgisel ve ilgi çekici UI / UX oluşturma tutkusu olan motive bir Fullstack Web Geliştiricisiyim. JavaScript, MERN yığını, Redux, jQuery, RestAPI, Postman ve Telegram bot konularında uzmanım, yenilikçi projeler geliştirmekten ve becerilerimi sürekli geliştirmekten keyif alıyorum. Yazılım geliştirme alanındaki uzmanlığımı genişletirken dinamik ekiplere katkıda bulunmaya istekliyim.",
    harun_position: "Tam Yığın Web Geliştirci",
    harun_location: "Ankara, Türkiye",
    harun_about:
      "Ege Üniversitesi Bilgisayar Programcılığı Bölümü'nden başarıyla mezun oldum. Aynı kurumda proaktif olarak staj yaptım. Becerilerimi yazılım sektöründe uygulamaya istekli, motivasyonu yüksek, hızlı öğrenen ve detay odaklıyım. Mükemmel iletişim becerilerine sahip güçlü bir takım oyuncusuyum. Sürekli öğrenmeye ve profesyonel büyümeye kararlıyım.",
    hanzade_position: "Pazarlama Stajyeri",
    hanzade_location: "İstanbul, Türkiye",
    hanzade_about: 
      "İstanbul Üniversitesi Psikoloji bölümü 3.sınıf öğrencisiyim. Marketing alanına olan ilgim ile kendimi bu alanda geliştirmeye ve staj yapmaya devam ediyorum. SEO, Video Editing ve Social Media Management alanlarında deneyime sahibim.",  
    mennatulla_position: "Pazarlama Stajyeri",
    mennatulla_location: "İstanbul, Türkiye",
    mennatulla_about: 
      "Dijital pazarlama, yaratıcı strateji ve marka büyümesi konusunda tutkulu bir reklam ve halkla ilişkiler öğrencisiyim. SEO, PPC, içerik pazarlaması ve sosyal medya yönetimi konularında deneyim sahibiyim. Google Ads, Facebook Ads ve WordPress ile markaların dijital alanda büyümesine katkıda bulunuyorum. A/B testleri ve veri analizleriyle kampanyaları optimize ederek en iyi sonuçları elde etmeye odaklanıyorum. Ayrıca grafik tasarım ve marka kimliği oluşturma konularında yetkinim.",  
    yunus_position: "Yapay Zeka Stajyeri",
    yunus_location: "İstanbul, Türkiye",
    yunus_about: 
      "Yapay zeka ve görüntü işleme alanlarına ilgili, Elektronik mühendisiyim. Uzmanlık alanım makine öğrenimi, derin öğrenme ve bilgisayarla görme üzerinedir. Bunun yanı sıra frontend geliştirme konularında da deneyimliyim.",  
  },
  en: {
    meetTeam: "Meet the Team",
    caglar_position: "AI Developer",
    caglar_location: "Deventer, Netherlands / Izmir, Turkey",
    caglar_about:
      "I am a passionate and innovative Software Developer with a strong background in developing and deploying artificial intelligence models. My areas of expertise include machine learning, deep learning, and computer vision. Additionally, I am proficient in React JS and SQL.",
    sirous_position: "Deep Learning - Computer Vision Engineer",
    sirous_location: "Eskişehir, Turkey",
    sirous_about:
      "As a machine learning engineer specializing in the field of deep learning and computer vision, I have a track record of developing successful real-life projects. My portfolio includes several innovative solutions that have been implemented in various industries. I am passionate about continuously improving my skills and staying up-to-date with the latest industry trends. With a flexible and open-minded approach to work, I thrive in dynamic environments and find it easy to adapt to changing situations. Working alongside experienced professionals and team leaders, I am capable of collaborating effectively and contributing to the success of any project. I am also able to provide guidance and support to junior team members, helping them overcome challenges and achieve their goals.",
    veysel_position: "Frontend Developer",
    veysel_location: "Kocaeli, Turkey",
    veysel_about:
      "With a deep passion for technology and programming, I have immersed myself in the world of web development, focusing particularly on React.js. Beyond my academic pursuits, I actively seek opportunities to expand my knowledge and skills in this field, constantly experimenting with new technologies and frameworks to stay at the forefront of industry trends.",
    malik_position: "Fullstack Web Developer",
    malik_location: "Istanbul, Turkey",
    malik_about:
      "I am a motivated Fullstack Web Developer with a passion for crafting intuitive and engaging UI/UX for websites and web applications. Proficient in the JavaScript, MERN stack, Redux, jQuery, RestAPI, Postman and Telegram bot I enjoy building innovative projects and continuously improving my skills. I am eager to contribute to dynamic teams while expanding my expertise in software development.",
    harun_position: "Fullstack Web Developer",
    harun_location: "Ankara, Turkey",
    harun_about:
      "I'm successfully graduated from the Computer Programming Department at Ege University. Proactively completed an internship at the same institution. Eager to apply my skills in the software industry. I'm highly motivated, a quick learner, and detail-oriented and a strong team player with excellent communication skills. I'm committed to continuous learning and professional growth.",
    hanzade_position: "Marketing Intern",
    hanzade_location: "Istanbul, Turkey",
    hanzade_about:
      "I am a third-year Psychology student at Istanbul University. With my interest in the field of marketing, I continue to improve myself and gain experience through internships. I have experience in SEO, Video Editing, and Social Media Management.",
    mennatulla_position: "Marketing Intern",
    mennatulla_location: "Istanbul, Turkey",
    mennatulla_about:
      "I am a passionate Advertising and Public Relations student specializing in digital marketing, creative strategy, and brand growth. With expertise in SEO, PPC, content marketing, and social media management, I help brands thrive in the digital landscape. Proficient in Google Ads, Facebook Ads, and WordPress, I optimize campaigns using A/B testing and data analysis to maximize results. Additionally, I have strong skills in graphic design and brand identity development.",
    yunus_position: "AI Intern",
    yunus_location: "Istanbul, Turkey",
    yunus_about: 
        "I am an electronics engineer interested in artificial intelligence and image processing. I specialize in machine learning, deep learning and computer vision. I am also experienced in frontend development.",  
  },
};

addTranslation(translations);
