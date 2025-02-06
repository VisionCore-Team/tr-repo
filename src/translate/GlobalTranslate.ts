export interface TranslationContent {
    [key: string]: string;
  }
  
  export interface LanguageResources {
    [key: string]: {
      [key: string]: string;
    };
  }

const translations: LanguageResources = {
    tr: {
        error_503_text: "Bu sayfa geçici olarak kullanılamıyor",
        explore_insights: "En Son İçgörülerimizi Keşfedin",
        explore_insights_text: "Dijital dönüşümde güncel kalmak ve işletmenizin başarısını güçlendirmek için en yeni çözümlerimizi ve içgörülerimizi keşfedin. Visioncore’un inovatif çözümleri, sizi geleceğe hazırlamak için teknolojiyi iş süreçlerinize entegre eder ve sektörde bir adım önde olmanızı sağlar.",
        transforming_retail: "Gelişmiş Bilgisayarlı Görü Çözümleri ile Perakendeyi Dönüştürmek",
        transforming_retail_text: "Bilgisayarlı Görü (CV) teknolojilerimiz, müşterilerinizin ihtiyaçlarına göre anında adapte olan bir perakende deneyimi sunar. Yüz tanıma teknolojisi sayesinde, gerçek zamanlı verilerle müşteri davranışlarını izleyip en etkili promosyonları sunabilirsiniz. Ayrıca, raf yönetiminde optimizasyon sağlayan çözümlerimiz, stok seviyelerinin kontrolünü kolaylaştırarak maliyetleri düşürür ve müşteri memnuniyetini artırır. Visioncore ile perakende operasyonlarınızda fark yaratın ve rekabette öne geçin.",
        data_analytics_role: "Veri Analitiğinin İş Başarısındaki Stratejik Rolü",
        data_analytics_text: "Veri analitiği sayesinde, müşteri davranışlarını ve pazar eğilimlerini doğru analiz ederek işletmenizin stratejik kararlarını daha sağlam temellerle oluşturabilirsiniz. Visioncore’un veri analitiği çözümleri, karmaşık verileri anlaşılır ve aksiyon alınabilir içgörülere dönüştürerek işletmenizin hem güncel hem de uzun vadeli hedeflerine ulaşmasını sağlar.",
        machine_learning_solutions: "Makine Öğrenimi Çözümleriyle İş Potansiyelinizi Açığa Çıkarın",
        machine_learning_text: "Visioncore’un makine öğrenimi çözümleri, işletmenizin ihtiyaçlarına özel olarak geliştirilmiştir. Örneğin, öngörücü bakım uygulamaları ile ekipman ihtiyaçlarını önceden belirleyebilir, davranış analizleriyle müşterilerinize kişiselleştirilmiş hizmetler sunabilirsiniz. Verilerinizi etkin bir şekilde değerlendirerek işinizi akıllı kararlarla güçlendirin.",
        iot_technology: "IoT Teknolojisi ile İş Süreçlerini Optimize Edin",
        iot_text: "Visioncore’un IoT çözümleri, işletmelerin operasyonel verimliliklerini artırırken maliyetleri düşürmelerine yardımcı olur. Gerçek zamanlı veri toplama ve analiz, özellikle üretim ve lojistik gibi alanlarda süreçleri dönüştürerek stratejik kararların alınmasını sağlar. IoT’nin gücüyle iş süreçlerinizi bir üst seviyeye taşıyın.",
        data_security: "İşletmenizi Koruma: Veri Güvenliğinin Önemi",
        data_security_text: "Veri güvenliği, günümüz dijital ortamında işletmeler için kritik bir önceliktir. Artan siber tehditlerle birlikte, bir şirketin itibarı ve mali durumu, güçlü bir koruma olmadan savunmasız olabilir. Visioncore’un veri güvenliği çözümleri, verilerinizi korumak için gelişmiş şifreleme, güvenlik duvarları ve sürekli izleme kullanır, uzun vadeli sürdürülebilirliği güvenilir güvenlik önlemleriyle destekler.",
        industry_4_digital_transformation: "Endüstri 4.0 ve Dijital Dönüşümü Benimsemek",
        industry_4_text: "Endüstri 4.0, dijital teknolojilerin üretime entegrasyonunu temsil eder ve büyük değer sunar. Otomasyon, yapay zeka ve IoT, üretim verimliliğini, esnekliğini ve yeniliği artırır. Visioncore’un Endüstri 4.0 çözümleri, dijital dönüşümü hızlandırarak işletmelerin pazar taleplerine hızla uyum sağlamasına ve kalıcı bir rekabet avantajı elde etmesine olanak tanır.",
        ai_driven_crm: "Kalıcı Bağlantılar İçin Yapay Zeka Destekli Müşteri İlişkileri Yönetimi",
        ai_crm_text: "Yapay zeka destekli CRM sistemleri, müşteri ilişkileri yönetimini yeniden şekillendirerek kişiselleştirilmiş hizmet ve iletişim sağlar. Visioncore’un yapay zeka çözümleri, otomatik yanıtlar, öngörücü analizler ve davranışsal segmentasyon gibi araçlarla müşteri memnuniyetini artırır ve satışları kolaylaştırır. Yapay zeka destekli CRM, güçlü ve sürdürülebilir müşteri ilişkileri kurmanın anahtarıdır.",
        big_data_growth: "İş Büyümesi İçin Büyük Veriden Yararlanma",
        big_data_text: "Büyük veri analizi, işletmeler için yeni yollar açarak rekabet avantajı sunar. Geniş veri setlerini işleyerek, şirketler pazar trendlerini, müşteri davranışlarını ve operasyonel verimlilikleri keşfedebilir. Visioncore’un büyük veri çözümleri, verileri stratejik varlıklara dönüştürerek veri odaklı kararlar alınmasını, yeni pazar fırsatlarının keşfedilmesini ve yenilikçi ürün geliştirilmesini sağlar.",
        digital_marketing_strategies: "Dijital Pazarlamayı Veri Tabanlı Stratejilerle Güçlendirmek",
        digital_marketing_text: "Veri analitiği, dijital pazarlamayı iyileştirmek, kampanya etkinliğini ve yatırım getirisini maksimize etmek için çok önemlidir. Visioncore’un analitik çözümleri, pazarlama verileri hakkında derinlemesine içgörüler sunarak ekibinize hedef kitle davranışlarına uygun stratejiler geliştirmede rehberlik eder. Veri odaklı pazarlama, etkileşimi, dönüşümü ve çevrimiçi görünürlüğü artırarak dijital dünyada rekabet avantajı sağlar.",
        ml_vs_dl: "Makine Öğrenimi ve Derin Öğrenme: Doğru Çözümü Seçmek",
        ml_vs_dl_text: "Makine öğrenimi ve derin öğrenme, yapay zeka içinde güçlü yetenekler sunar. Makine öğrenimi tahmin ve sınıflandırmada başarılı olurken, derin öğrenme karmaşık yapıları ve büyük veri setlerini işler. Visioncore, bu teknolojileri iş ihtiyaçlarına uygun hale getirir; müşteri analizi, öngörücü modelleme, görüntü ve dil işleme gibi alanlarda kullanır. Doğru yaklaşımı seçmek, işletmelerin yapay zeka yatırımlarından maksimum fayda sağlamasını garanti eder."    
    },
    en: {
        error_503_text: "This page is temporarily unavailable",
        explore_insights: "Explore Our Latest Insights",
        transforming_retail: "Transforming Retail with Advanced Computer Vision Solutions",
        transforming_retail_text: "Computer Vision (CV) is revolutionizing the retail industry by enhancing both customer engagement and operational efficiency. Through facial recognition technologies, retailers can offer highly personalized promotions based on real-time insights into customer behaviors. Furthermore, our advanced CV applications optimize shelf management, ensuring accurate stock levels and timely replenishments to reduce costs and improve service. At Visioncore, we empower businesses to harness Computer Vision, providing cutting-edge solutions that create a distinct competitive advantage.",
        data_analytics_role: "The Strategic Role of Data Analytics in Business Success",
        data_analytics_text: "Data analytics is pivotal in empowering businesses to make informed, strategic decisions. By analyzing extensive data sources, companies can discern market trends and respond proactively to customer needs. At Visioncore, our advanced analytics solutions help businesses transform raw data into valuable insights, enabling them to stay ahead in a competitive market. The future promises even deeper analytics through AI, offering businesses tools for proactive strategies and sustainable growth.",
        machine_learning_solutions: "Unlocking Business Potential with Machine Learning Solutions",
        machine_learning_text: "Machine learning empowers businesses by enhancing operational efficiency and customer satisfaction. For example, predictive maintenance anticipates equipment needs, while behavioral analytics enable personalized services. Visioncore’s tailored machine learning solutions analyze data to enable smarter decisions, facilitating innovation across various industries and helping businesses strengthen their market position.",
        iot_technology: "Optimizing Business Processes with IoT Technology",
        iot_text: "The Internet of Things (IoT) empowers businesses to streamline operations and create new opportunities. IoT enables real-time data collection and analysis, transforming processes across manufacturing, logistics, and more. Visioncore’s IoT solutions drive efficiency and cost savings, enabling informed strategic decisions. As IoT continues to evolve, it will bring even greater benefits to forward-thinking businesses.",
        data_security: "Protecting Your Business: The Importance of Data Security",
        data_security_text: "Data security is a critical priority for businesses in today’s digital landscape. With increasing cyber threats, a company’s reputation and finances can be vulnerable without robust protection. Visioncore’s data security solutions use advanced encryption, firewalls, and continuous monitoring to safeguard your data, supporting your long-term sustainability with reliable security measures.",
        industry_4_digital_transformation: "Embracing Industry 4.0 and Digital Transformation",
        industry_4_text: "Industry 4.0 represents the integration of digital technologies into production, offering immense value. Automation, AI, and IoT elevate production efficiency, flexibility, and innovation. Visioncore’s Industry 4.0 solutions accelerate digital transformation, enabling businesses to adapt swiftly to market demands and achieve a lasting competitive edge.",
        ai_driven_crm: "AI-Driven Customer Relationship Management for Lasting Connections",
        ai_crm_text: "AI-powered CRM systems are reshaping customer relationship management, allowing personalized service and communication. Visioncore’s AI solutions enhance customer satisfaction and streamline sales with tools like automated responses, predictive analytics, and behavioral segmentation. AI-powered CRM is key to building strong, sustainable customer relationships.",
        big_data_growth: "Leveraging Big Data for Business Growth",
        big_data_text: "Big data analysis opens new pathways for businesses, offering a competitive edge. By processing vast datasets, companies can uncover market trends, customer behavior, and operational efficiencies. Visioncore’s big data solutions help transform data into strategic assets, enabling data-driven decisions, new market opportunities, and innovative product development.",
        digital_marketing_strategies: "Enhancing Digital Marketing with Data-Driven Strategies",
        digital_marketing_text: "Data analytics is crucial in refining digital marketing, maximizing campaign effectiveness and ROI. Visioncore’s analytics solutions provide deep insights into marketing data, guiding your team to craft strategies aligned with target audience behaviors. Data-driven marketing boosts engagement, conversion, and online visibility, establishing a competitive advantage in the digital landscape.",
        ml_vs_dl: "Machine Learning vs. Deep Learning: Choosing the Right Solution",
        ml_vs_dl_text: "Machine learning and deep learning offer powerful capabilities within AI. While machine learning excels in prediction and classification, deep learning handles complex structures and large datasets. Visioncore customizes these technologies to align with business needs, from customer analysis and predictive modeling to image and language processing. Selecting the right approach ensures businesses maximize the value of their AI investments."
    }
}

export default translations;