import { addTranslation } from "../../translate/Translate";

interface Translation {
  [language: string]: {
    [key: string]: string;
  };
}

const translations: Translation = {
  tr: {
    licenseplate_title: "7/24 Tam Kontrol ve Güvenlik",
    licenseplate_titleText: "Yapay Zeka'nın eşsiz gücü ile arkanıza yaslanın",
    licenseplate_solutionTitle: "Kapalı Alan Araç Takibi ve Plaka Tanıma Sistemleri",
    licenseplate_solutionProblemTitle: "Operasyonel Verimsizlik",
    licenseplate_solutionProblemText: "Mercedes-Benz yetkili servis merkezleri araç takibi ve personel iletişimi konusundaki zorluklar nedeniyle karlılığında düşüş yaşıyordu. Servis alanındaki araçların verimsiz izlenmesi, onarım ve teslimat süreçlerinde gecikmelere yol açarak operasyonel verimliliği ve müşteri memnuniyetini olumsuz etkiliyordu. Farklı personel seviyeleri arasındaki yetersiz iletişim de operasyonel aksamalara neden oluyor ve daha fazla kazancın önüne geçerek şirketin kar sağlamasının önünde bir engel oluyordu.",
    licenseplate_solutionSolutionText: `Servis alanındaki araçların anlık olarak tam verimlilikle izlenebilmesi adına gelişmiş bir "Gerçek Zamanlı Araç Takip Sistemi" oluşturduk. Bu sistem, araçların tüm servis alanı içerisinde konumlarını ve durumlarını anında izlemeyi sağladı. Kullanıcı dostu arayüzümüz sayesinde her bir personel gerçek zamanlı bilgilere kolayca erişebildi. En önemlisi ise bu iyileştirmeler karlılığı %40 oranında artırmamıza olanak sağladı.`,
    port_title: "Liman Operasyonlarında Maksimum Verimlilik",
    port_titleText: "VisionCore, Yapay Zeka Sistemleriyle Limanların Sorumluluğunu Tam Güvence ile Alıyor",
    port_paragraphTitle: "Maximum Efficiency in Port Operations with Artificial Intelligence",
    port_paragraph: "At VisionCore, we're passionate about helping industries overcome their biggest challenges with our enterprise AI solutions. By partnering with our clients, we co-create innovative solutions that drive growth and set new industry standards.",
    port_solutionTitle: "Liman Operasyonları Kullanım Durumları",
    port_solution1Title: "Güvenlik ve İzleme",
    port_solution1SolutionTextBold:"Gerçek Zamanlı İzleme: ",
    port_solution1SolutionText: "AI destekli kameralar, liman alanlarını 7/24 izleyerek, yetkisiz erişim ve şüpheli faaliyetleri tespit eder. Bu sistemler, görüntü işleme ve hareket analizi aracılığıyla erken aşamada riskleri belirler ve güvenlik personeline hızlı bir şekilde uyarı gönderir. Ayrıca, gerçek zamanlı izleme sistemleri, liman içi ve işyeri kazalarını önlemeye yardımcı olarak işçi güvenliğini artırır ve operasyonel kesintileri azaltır.",
    port_solution2Title: "Konteyner ve Varlık Takibi",
    port_solution2SolutionText: "VisionCore'un ileri düzey AI çözümleri, lojistik ve taşımacılık endüstrilerine verimlilik ve yenilik getirir. Sistem, gönderi konteyneri tanımlama numaralarını %99 doğrulukla tanıyabilen özel bir teknoloji sunar ve ISO 6346 (BIC) ve ILU kodları gibi uluslararası standartlara uygun olarak çalışır. Özelleştirilebilir kod okuma yetenekleri, operasyonların genişletilmesini ve çeşitli senaryolarda kullanılmasını sağlar.",
    port_solution3Title: "Plaka Tespiti ve Takibi",
    port_solution3SolutionTextBold: "Otomatik Plaka ve Konteyner Tanıma: ",
    port_solution3SolutionText: "Bu sistemler, liman alanlarına giren ve çıkan araçları ve yükleri anında tanır ve kaydeder. Yapay zeka ile güçlendirilen bu sistemler, plakaları ve konteyner numaralarını hızlı ve doğru bir şekilde tespit ederken, manuel veri girişi hatalarını ortadan kaldırır. Yük ve araç akışını izlemeye yardımcı olur, limanda trafik yönetimini optimize eder ve potansiyel tıkanıklıkları önler.",
    port_solution4Title: "Konteyner Hasar Tespiti",
    port_solution4SolutionText: "Lojistik ve taşımacılık endüstrisinde konteyner bütünlüğü operasyonel süreklilik ve müşteri memnuniyeti için kritik öneme sahiptir. Geleneksel (manuel) hasar inceleme yöntemleri zaman alıcı, iş gücü gerektiren ve insan hatasına açıktır. İşte burada AI destekli Otomatik Konteyner Hasar Tespit Modeli devreye girer. Bu model, olası konteyner hasarını (delikler, ezikler, pas vb.) tespit eder ve hasar türlerin. kategorize eder.",
    port_solution5Title: "Tehlikeli Madde Tespiti",
    port_solution5SolutionText: "Tehlikeli maddelerin taşınması sırasında güvenlik çok önemlidir. AI destekli sistemler, tehlikeli maddeleri hızla tanır, güvenlik önlemlerinin doğru bir şekilde uygulanmasını ve uluslararası düzenlemelere uyumu sağlar. Bu sistemler, insan hatasını azaltır, risk yönetimini güçlendirir ve acil durumlarda hızlı bir şekilde müdahale edilmesine olanak tanır. AI tabanlı veri analitiği, liman operasyonlarının verimli yönetimi için çok önemlidir. Bu sistemler, operasyonel verileri hızlı bir şekilde analiz eder, gerçek zamanlı raporlar ve özelleştirilebilir gösterge panelleri sunar. Geçmiş verileri analiz ederek gelecekteki trendleri tahmin eder, stratejik karar alma süreçlerini destekler ve verimliliği artırır.",
    health_title: "Daha İyi Tedaviler İçin Çözümler",
    health_titleText: "VisionCore, sağlık sektöründe gerçek zamanlı izleme, nesne tanıma, süreç otomasyonu ve kapsamlı uçtan uca çözümler için bilgisayarla görmeyi kullanır.",
    health_paragraphTitle: "VisionMeds ile Sağlık Verimlilik ve Güvenlik",
    health_paragraph: "Bilgisayarlarla görme teknolojisi, sağlık süreçlerine yeni bir boyut kazandırarak hasta kabulünden tedaviye kadar verimliliği ve güvenliği artırır. VisionCore olarak sağlık kuruluşlarının karşılaştığı zorlukları anlıyor ve bu problemleri ele alan kapsamlı bir çözüm sunuyoruz. Mevcut kamera sistemlerinizi kullanarak fiziksel çevredeki nesneler ile durumları hızlı ve doğru bir şekilde tespit etmenize olanak tanır. Bu sayede süreçlerinizi gerçek zamanlı ve özelleştiriliş verilerle otomatikleştirerek operasyonel etkinliği maksmize edebilir, projenizi bir sonraki adıma taşıyabilirsiniz.",
    health_solutionTitle: "Sağlıkta Kullanım Durumları",
    health_solution1Title: "Beyin Bölgesi Segmentasyonu ve Tümör Tanımlaması Tıbbi Görüntülemede",
    health_solution1Problem1Title: "Doğru Segmentasyon İhtiyacı",
    health_solution1Problem1Text: "Beyin hastalıklarını teşhisi ve tedavi sürecinde, farklı beyin bölgelerini doğru bir şekilde belirlemek ve boyutlarını sayısal olarak ölçmek kritik öneme sahiptir.",
    health_solution1Solution1Title: "Otomatik Segmentasyon Sistemi",
    health_solution1Solution1Text: "MRI görüntülerini kullanarak farklı beyin bölgelerini doğru şekilde segmentlemek için otomatik bir sistem geliştirdik.",
    health_solution1Solution2Title: "Gerçek Zamanlı Tümör Tespiti",
    health_solution1Solution2Text: "Derin öğrenme algoritmalarını ve bilgisayarla görme tekniklerini kullanarak tümörleri sağlıklı dokulardan gerçek zamanlı olarak tespit ettik ve segmentledik.",
    health_solution2Title: "Beyaz Kan Hücresi Analizi Bilgisayarla Görme Kullanılarak",
    health_solution2Problem1Title: "Doğru Hücre Sayımı",
    health_solution2Problem1Text: "Beyaz kan hücrelerinin manuel sayımı, iş gücü gerektiren ve insan hatasına açık bir işlemdir.",
    health_solution2Problem2Title: "Yüksek İşlem Hızı Gereksinimi",
    health_solution2Problem2Text: "Büyük miktarda örneği verimli bir şekilde işlemek için hızlı analiz yapılması gerekmektedir.",
    health_solution3Title: "COVID-19 Teşhisi İçin AI Tabanlı Akciğer Segmentasyonu ve Lezyon Tespiti",
    health_solution3Problem1Text: "Akciğerlerin ve lezyonların doğru segmentasyonu ve hacim planlaması acil müdahale gerektiren durumlarda kritik öneme sahiptir. Ancak geleneksel yöntemler yavaş ve verimsiz olduğu için zamanında müdahale yapılamamaktadır.",
    health_solution3Solution1Text: "Derin öğrenme tekniklerini kullanarak, sol ve sağ akciğerleri ve lezyonları segmentleyen, hacimlerini doğru bir şekilde hesaplayan AI tabanlı bir araç geliştirdik. Bu, teşhis sürecini otomatikleştirip hızlandırarak, tıbbi ekibin hızlı bir şekilde yanıt vermesini ve etkili bir tedavi planı yapmasını sağladı.",
    health_solution4Title: "AI Destekli Otomatik Glomerüller Tespiti Böbrek Dokusunda",
    health_solution4Problem1Text: "Avrupa'daki tıbbi merkezler, böbrek dokusunda glomerülleri doğru bir şekilde tanıma ve sayma konusunda zorluk yaşamaktadır. Bu manuel ve zaman alıcı süreç, verimsizliklere ve olası hatalara yol açmakta, bu da böbrek hastalıklarının teşhisini ve takip edilmesini olumsuz etkilemektedir.",
    health_solution4Solution1Text: "Derin öğrenme tekniklerini kullanarak glomerüllerin tanınmasını ve sayılmasını otomatikleştiren bir yapay zeka aracı geliştirdik. Bu sistem, glomerüllerin tespitiyle analiz sürecini hızlandırarak verimliliği ve doğruluğu artırır. Bu, tıbbi uzmanların daha hızlı ve daha doğru müdahaleler yapmasını sağlayarak hasta sonuçlarını iyileştirir.",
    manufacture_title: "Gerçek Zamanlı Üretim Hattı İzleme",
    manufacture_titleText: "Üretim verimliliğini artırın, kusurları en aza indirin ve iş gücü teslimatını gerçek zamanlı verilerle optimize ederek ROI'yi artırın.",
    manufacture_paragraphTitle: "VisionCore ile Gerçek Zamanlı Üretim Hattı İzleme",
    manufacture_paragraph: "Bilgisayarlı görü (CV), üretim süreçlerinizde ikinci bir göz olur ve bu sayede süreçlerinizin malzeme takibinden teslimata kadar olan her aşamasında verimliliği ve güvenliği artırır. VisionCore, mevcut kameraların gerçek zamanlı verilerle spesifik ihtiyaçlara göre nesneleri hızlı bir şekilde tanıyıp yorumlamasını sağlar.",
    manufacture_solutionTitle: "Üretim Kullanım Durumları",
    manufacture_solution1Title: "Güvenlik İzleme",
    manufacture_solution1Problem1Text: "Büyük üretim tesislerinde çalışanları, teslimat personelini, malzemeleri ve ekipmanları yönetmek zordur ancak üretkenliği optimize etmek için gereklidir.",
    manufacture_solution1Solution1Text: "Heatmap ve yaya trafiği analitiği sayesinde tesisinizdeki hareketler ve durma süreleri hakkında gerçek zamanlı görsel veriler elde edin, operasyonları düzene sokun ve ROL'i artırın.",
    manufacture_solution2Title: "PCB Hata Tespiti",
    manufacture_solution2Problem1Title: "Manuel Kalite Kontrol",
    manufacture_solution2Problem1Text: "PCB üretim süreçleri, zaman alıcı ve insana dayalı hata yapma olasılığı yüksek manuel kalite kontrol yöntemlerine dayanır, bu da genel üretim verimliliğini düşürür.",
    manufacture_solution2Problem2Title: "Yüksek Üretim Maliyetleri",
    manufacture_solution2Problem2Text: "Manuel denetimlerdeki verimsizlikler, üretim maliyetlerini artırır ve özellikle yüksek hacimli üretim ortamlarında müşteri memnuniyetsizliğine yol açar.",
    manufacture_solution2Solution1Title: "Otomatik Hata Tespit Sistemi",
    manufacture_solution2Solution1Text: "Gerçek zamanlı olarak PCB'lerdeki hataları tespit etmek ve sınıflandırmak için YOLO (You Only Look Once) algoritması kullanan yapay zeka tabanlı bir sistem geliştirdik.",
    manufacture_solution2Solution2Title: "Üretim Verimliliğini Artırma",
    manufacture_solution2Solution2Text: "Bu otomatik çözüm, kalite kontrol sürecini düzene sokar, denetim süresini önemli ölçüde kısaltır ve hata tespit doğruluğunu artırır, böylece üretim maliyetlerini düşürür ve müşteri memnuniyetini artırır.",
    manufacture_solution3Title: "Anomali ve Hata Tespiti",
    manufacture_solution3Problem1Text: "Üretimde anomali ve kusurlar kaçınılmazdır ve son derece maliyetlidir. Ortalama bir üretim şirketinin kötü kalite maliyeti, toplam satışların yaklaşık %20'sini oluşturur.",
    manufacture_solution3Solution1Text: "Anomali ve hata tespiti işlemlerini eşsiz bir doğrulukla otomatikleştirin, sorunlar ortaya çıktığında hemen yakalayın, böylece gecikmeleri en aza indirin. Hızla uyarılar alarak yavaşlamaları önleyin ve ROI'yi artırın.",
    manufacture_solution4Title: "Süreç Optimizasyonu",
    manufacture_solution4Problem1Text: "Uzun üretim hatlarını her zaman izlemek zordur. Ancak görünürlük olmadan, maliyetli darboğazların ve gecikmelerin nerede oluştuğunu bilmek zordur.",
    manufacture_solution4Solution1Text: "Tüm üretim hattınız boyunca 24 saat görsel veriler ile süreçleri optimize edin. Makine kullanımı ve iş gücü verimliliği hakkında eşi benzeri görülmemiş içgörüler elde ederek verimliliği maksimize edin.",
    manufacture_solution5Title: "Güvenlik İzleme",
    manufacture_solution5Problem1Text: "Üretim işlerinde, iş yeri yaralanmaları en yüksek orana sahiptir ve bu da milyarlarca dolarlık kayıplara yol açar. Hareketli parçaları, keskin kenarları ve sıcak yüzeyleri olan karmaşık makineler onları doğası gereği tehlikeli hale getirir.",
    manufacture_solution5Solution1Text: "Tehlikeli alanları kolayca izleyin, kişisel koruyucu ekipman uyumunu takip edin ve makineler kullanımını gerçek zamanlı olarak yönetin. Güvenlik sorunları hakkında anında uyarılar alarak bunları çözmeden önce veya çözülürken müdahale edin.",
    agriculture_title: "Daha Az Kimyasal, Daha Fazla Verim",
    agriculture_titleText: "VisionCore, sağlık sektöründe gerçek zamanlı izleme, nesne tanıma, süreç otomasyonu ve kapsamlı uçtan uca çözümler için bilgisayarla görmeyi kullanır.",
    agriculture_solution1Title: "Şeker Pancarları ve Yabani Otların Segmentasyonu ve Sınıflandırılması",
    agriculture_solution1Problem1Text: "Hassas tarımda, şeker pancarlarını yabani otlardan doğru bir şekilde ayırmak, verimi maksimize etmek ve kimyasal kullanımını en aza indirmek için çok önemlidir. Geleneksel yabani ot kontrol yöntemleri, geniş çapta herbisit uygulamasına dayanır, bu da verimsiz, maliyetli ve çevreye zarar verir.",
    agriculture_solution1Solution1Text: "Şeker pancarları ve yabani otları hassas bir şekilde segmentlemek ve sınıflandırmak için derin öğrenme kullanan AI tabanlı bir sistem geliştirdik. Yabani ot konumlarını doğru bir şekilde tespit ederek, sistem lazerle ot biçme veya seçici spreyleme gibi hedeflenmiş müdahalelere olanak tanır ve pestisit kullanımını %90 oranında azaltır. Bu, operasyonel verimliliği artırır, maliyetleri düşürür ve sürdürülebilir tarım uygulamalarını teşvik eder.",
    speakAI: "Bir yapay zeka uzmanı ile konuşun",
    problem: "Problem",
    solution: "Çözüm"
  },
  en: {
    licenseplate_title: "VisionCore for Control & Security in Your Service",
    licenseplate_titleText: "Control and Security Combined in Your Service with License Plate Recognition",
    licenseplate_solutionTitle: "Car Tracking and Plate Recognition",
    licenseplate_solutionProblemTitle: "Operational Inefficiency",
    licenseplate_solutionProblemText: "Mercedes-Benz authorized service centers were experiencing a decline in profitability due to challenges in vehicle tracking and staff communication. Inefficient monitoring of vehicles within the service area led to delays in repair and delivery processes, negatively impacting operational efficiency and customer satisfaction.\n\nAdditionally, inadequate communication among different staff levels caused operational disruptions and increased costs, further reducing the company's profitability.",
    licenseplate_solutionSolutionText: "We developed an advanced real-time vehicle tracking system to ensure instant and efficient monitoring of vehicles within the service area. This system enabled immediate tracking of vehicle locations and statuses. Our user-friendly interface allowed all personnel to easily access real-time information, accelerating operational processes and enhancing efficiency.\n\nFurthermore, we improved communication and collaboration by ensuring seamless data flow between departments. As a result of these enhancements, we increased operational efficiency and security while maximizing customer satisfaction. Most importantly, these improvements led to up to a 40% increase in profitability.",
    port_title: "VisionCore for Maximum Efficiency in Port Operations with Artificial Intelligence",
    port_titleText: "Control and Security Combined in Your Service with License Plate Recognition",
    port_paragraphTitle: "Maximum Efficiency in Port Operations with Artificial Intelligence",
    port_paragraph: "At VisionCore, we're passionate about helping industries overcome their biggest challenges with our enterprise AI solutions. By partnering with our clients, we co-create innovative solutions that drive growth and set new industry standards.",
    port_solutionTitle: "Use Cases on Port Operations",
    port_solution1Title: "Security and Surveillance",
    port_solution1SolutionTextBold: "Real-time Monitoring: ",
    port_solution1SolutionText: "AI-powered cameras monitor port areas 24/7, detecting unauthorized access and suspicious activities. These systems identify risks at an early stage through image processing and motion analysis, promptly alerting security personnel. Additionally, real-time monitoring systems help prevent in-port and workplace accidents, enhancing worker safety and reducing operational disruptions",
    port_solution2Title: "Container and Asset Tracking",
    port_solution2SolutionText: "VisionCore's advanced AI solutions bring efficiency and innovation to the logistics and transportation industry. The system offers a specialized technology capable of recognizing shipping container identification numbers with 99% accuracy, adhering to international standards such as ISO 6346 (BIC) and ILU codes. Customizable code reading capabilities allow for the expansion of operations and utilization in various scenarios.",
    port_solution3Title: "License Plate Detection & Tracking",
    port_solution3SolutionTextBold: "Automatic License Plate and Container Recognition: ",
    port_solution3SolutionText: "These systems instantly recognize and record vehicles and cargo entering and exiting port areas. Powered by artificial intelligence, these systems quickly and accurately detect license plates and container numbers, eliminating manual data entry errors. They facilitate the tracking of cargo and vehicle flow, optimize traffic management within the port, and prevent potential bottlenecks.",
    port_solution4Title: "Container Damage Detection",
    port_solution4SolutionText: "In the logistics and transportation industry, container integrity is crucial for operational continuity and customer satisfaction. Traditional, manual damage inspection methods are time-consuming, labor-intensive, and prone to human error. This is where the AI-powered Automated Container Damage Detection Model comes into play. This model enables the detection of container damage, identifying damage types such as holes, dents, and rust.",
    port_solution5Title: "Hazardous Material Detection",
    port_solution5SolutionText: "Safety is paramount during the transportation of hazardous materials. AI-powered systems enable rapid identification of hazardous substances, ensuring the correct implementation of safety measures and compliance with international regulations. These systems reduce human error, strengthen risk management, and facilitate quick action in emergencies. AI-based data analytics is crucial for the efficient management of port operations. These systems rapidly analyze operational data, providing real-time reports and customizable dashboards. By analyzing historical data, they forecast future trends, supporting strategic decision-making and increasing efficiency.",
    health_title: "Solutions For Better Treatments by VisionCore AI Labs",
    health_titleText: "VisionCore leverages computer vision for healthcare with real-time monitoring, object recognition, process automation, and comprehensive end-to-end solutions.",
    health_paragraphTitle: "Efficiency and Safety in Healthcare with VisionCore",
    health_paragraph: "Computer vision technology introduces a new dimension to healthcare processes, enhancing efficiency and safety from patient admission to treatment. By leveraging your existing camera systems, it allows you to quickly and accurately detect objects and situations in the physical environment. This enables you to automate processes with real-time, customized data, maximizing operational effectiveness. We provide a comprehensive solution that addresses the most challenging problems faced by healthcare organizations.",
    health_solutionTitle: "Healthcare Use Cases",
    health_solution1Title: "Brain Region Segmentation and Tumor Recognition for Medical Imaging",
    health_solution1Problem1Title: "Need for Accwate Segmentation",
    health_solution1Problem1Text: "In diagnosing and treating brain diseases, accurately delineating different brain regions and quantifying their sizes is critical.",
    health_solution1Solution1Title: "Automated Segmentation System",
    health_solution1Solution1Text: "Developed an automated system using MRI images to precisely segment various brain regions.",
    health_solution1Solution2Title: "Real-Time Tumor Detection",
    health_solution1Solution2Text: "Utilized deep learning algorithms and computer vision techniques to identify and segment tumors from healthy tissue in real-time.",
    health_solution2Title: "WBC Analysis Using Computer Vision",
    health_solution2Problem1Title: "Accurate Cell Counting",
    health_solution2Problem1Text: "Manual counting of white blood cells is labor-intensive and subject to human error.",
    health_solution2Problem2Title: "High Throughput Requirements",
    health_solution2Problem2Text: "Rapid analysis is needed to handle large volumes of samples efficiently.",
    health_solution2Solution1Title: "Accurate Cell Counting",
    health_solution2Solution1Text: "Manual counting of white blood cells is labor-intensive and subject to human error.",
    health_solution2Solution2Title: "High Throughput Requirements",
    health_solution2Solution2Text: "Rapid analysis is needed to handle large volumes of samples efficiently.",
    health_solution3Title: "Al-Based Lung Segmentation and Lesion Detection for COVlD-19 Diagnosis",
    health_solution3Problem1Text: "Accurate segmentation and volume planning of the lungs and lesions are critical in cases where urgent intervention is required, but timely intervention cannot be performed because traditional methods are slow and inefficient.",
    health_solution3Solution1Text: "We developed an AI-powered tool that uses deep learning techniques to segment the left and right lungs and lesions and accurately calculate their volumes. This automated and accelerated the diagnostic process, helping the medical team to respond quickly and plan effective treatment.",
    health_solution4Title: "AI-Powered Automated Glomeruli Detection in Kidney Tissue",
    health_solution4Problem1Text: "Medical centres in Europe face the challenge of correctly recognising and counting glomeruli in kidney tissue. This manual and time-consuming process leads to inefficiencies and potential errors, negatively impacting the diagnosis and follow-up of kidney diseases.",
    health_solution4Solution1Text: "We have developed an artificial intelligence tool that uses deep learning techniques to automate the recognition and counting of glomeruli. This system speeds up the analysis process by increasing the efficiency and accuracy of glomerulus detection. This enables medical professionals to provide faster and more precise interventions, improving patient outcomes.",
    manufacture_title: "VisionCore Solutions For Monitoring Production Lines in Real-Time",
    manufacture_titleText: "Improve manufacturing throughput, minimize defects, and optimize labor delivery via real-time data to increase ROI.",
    manufacture_paragraphTitle: "Monitor Production Lines in Real-Time by VisionCore",
    manufacture_paragraph: "Computer vision acts as a second set of eyes over your manufacturing processes to enhance productivity and safety across the entire value chain, from materials tracking to production and delivery. VisionCore enables existing cameras to quickly identify and interpret objects in the physical world to automate processes with real-time data tailored for specific needs. We are an end-to-end solution that addresses manufacturers' most difficult challenges.",
    manufacture_solutionTitle: "Manufacturing Use Cases",
    manufacture_solution1Title: "Safety Monitoring",
    manufacture_solution1Problem1Text: "Managing employees, delivery personnel, materials, and equipment in large manufacturing facilities is challenging but essential to optimizing productivity.",
    manufacture_solution1Solution1Text: "Get real-time visual data about movement and dwell time anywhere in your facility through heatmapping and foot traffic analytics to streamline operations and boost ROL",
    manufacture_solution2Title: "PCB Defect Detection",
    manufacture_solution2Problem1Title: "Manual Quality Control",
    manufacture_solution2Problem1Text: "PCB manufacturing processes rely on manual quality control methods that are time-consuming and prone to human error, reducing overall production efficiency.",
    manufacture_solution2Problem2Title: "High Production Costs",
    manufacture_solution2Problem2Text: "The inefficiencies in manual inspection lead to increased production costs and customer dissatisfaction, especially in high-volume manufacturing environments.",
    manufacture_solution2Solution1Title: "Automated Defect Detection System",
    manufacture_solution2Solution1Text: "Developed an AI-based system utilizing the YOLO (You Only Look Once) algorithm to identify and classify defects on PCBs in real-time.",
    manufacture_solution2Solution2Title: "Enhanced Production Efficiency",
    manufacture_solution2Solution2Text: "This automated solution streamlines the quality control process, significantly reducing inspection time and improving defect detection accuracy, thereby lowering production costs and increasing customer satisfaction.",
    manufacture_solution3Title: "Anomaly and Defect Detection",
    manufacture_solution3Problem1Text: "Anomalies and defects are unavoidable and extremely costly in manufacturing. The average manufacturing company has a cost of poor quality at about 20% of total sales.",
    manufacture_solution3Solution1Text: "Automate anomaly and defect detection with unparalleled accuracy to minimize delays by catching issues as they arise.\n\nGet immediate alerts to avoid slowdowns and increase ROI.",
    manufacture_solution4Title: "Process Optimization",
    manufacture_solution4Problem1Text: "Long production lines are difficult to monitor at all times. But without visibility, it’s difficult to know where costly bottlenecks and delays occur.",
    manufacture_solution4Solution1Text: "Optimize processes with 24-hour visual data across your entire production line. Get unprecedented insights into machine use and labor productivity to maximize efficiency.",
    manufacture_solution5Title: "Safety Monitoring",
    manufacture_solution5Problem1Text: "Manufacturing jobs have the highest rate of workplace injuries resulting in billions of dollars of lost revenue. Complex machinery with moving parts, Sharp edges, and hot surfaces makes them inherently dangerous.",
    manufacture_solution5Solution1Text: "Easily monitor hazardous areas, track personal protective equipment compliance, and better manage machine usage in real-time. Get immediate alerts about safety issues so you can address them before or as they occur.",
    agriculture_title: "VisionCore For Less Chemicals, More Yield",
    agriculture_titleText: "VisionCore leverages computer vision for healthcare with real-time monitoring, object recognition, process automation, and comprehensive end-to-end solutions.",
    agriculture_solution1Title: "Sugar Beets and Weeds Segmentation and Classification",
    agriculture_solution1Problem1Text: "In precision agriculture, accurately distinguishing sugar beets from weeds is essential for maximizing crop yields and minimizing chemical usage. Traditional weed control methods rely on widespread herbicide application, which is inefficient, costly, and environmentally harmful.",
    agriculture_solution1Solution1Text: "We developed an AI-driven system using deep learning to precisely segment and classify sugar beets and weeds. By accurately identifying weed locations, the system enables targeted interventions such as laser weeding or selective spraying, achieving up to 90% reduction in pesticide use. This enhances operational efficiency, lowers costs, and promotes sustainable farming practices.",
    speakAI: "Speak With an AI expert",
    problem: "Problem",
    solution: "Solution"
  }
};

addTranslation(translations);