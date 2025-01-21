
import Mercedes from '../../../public/project/Mercedes.jpg';
import Shelf from '../../../public/project/Shelf.png';
import BrainSeg from '../../../public/project/p5.png';
import WBC from '../../../public/project/p1.jpeg';
import SGBeets from '../../../public/project/p4.jpeg';
import Glomer from '../../../public/project/p3.jpeg';
import LungLes from '../../../public/project/p2.jpeg';
import PCBB from '../../../public/project/p6.png';


const projectsData = [
  {
    id: 1,
    name: 'Vehicle Tracking System',
    description:"Our Real-Time Vehicle Detection System for Mercedes-Benz Authorized Services enhances operational efficiency and security within service centers. Utilizing advanced image processing and automated license plate recognition, the system provides instant monitoring and seamless vehicle tracking. Its intuitive interface simplifies data management, optimizing entry and exit control. By ensuring smooth data flow between departments, our solution improves operational processes and maximizes customer satisfaction." ,   img: Mercedes,
    address: 'https://caglarcakmak.com.tr/',
    modalAdress: ""  
  },
  {
    id: 2,
    name: 'Market Shelf Product Detection',
    description: "We developed an advanced object recognition model leveraging the YOLO algorithm, achieving a 97% accuracy rate. This solution was applied to oral care shelves in retail stores, identifying product brands, counting the total number of items, and analyzing the percentage of shelf space occupied by each brand in comparison to competitors. This real-time data provides actionable insights for optimizing shelf management and product visibility.",
    img: Shelf,
    address: 'https://youtu.be/tqzH3CmzV4A',
    modalAdress: ""
  },
  {
    id: 3,
    name: 'Brain Region Segmentation and Tumor Recognition for Medical Imaging',
    description: "We developed a comprehensive AI solution for a medical center in Madrid, Spain, focused on brain region segmentation and tumor detection using MRI images. The system accurately divides the brain into distinct regions and quantifies their sizes, supporting detailed neurological analysis. It also automates the identification and segmentation of tumors from healthy tissue, facilitating early diagnosis and enhancing targeted treatment precision.",
    img: BrainSeg, // Örneğin doğru görseli atadım
    address: 'https://www.youtube.com/shorts/JcpLUigaNzs',
    modalAdress: 'https://www.youtube.com/embed/JcpLUigaNzs',
  },
  {
    id: 4,
    name: 'White Blood Cells (WBCs) Detection & Classification',
    description:  "This project utilizes YOLOv6, an advanced object detection algorithm, to detect, classify, and count white blood cells (WBCs) in medical samples. It aims to streamline and accelerate WBC identification in laboratories in Tabriz and Isfahan, Iran. By improving the speed and accuracy of cell analysis, the system supports more efficient diagnostics.",
    img: WBC, // Eğer farklı bir görsel varsa buraya ekleyebilirsiniz
    address: 'https://www.youtube.com/watch?v=XfHrn4_yttU&t=6s',
    modalAdress:'https://www.youtube.com/watch?v=XfHrn4_yttU&t=6s',

  },
  {
    id: 5,
    name: 'Sugar Beets and Weeds Segmentation and Classification',
    description: 'This project utilizes AI and deep learning for the precise segmentation and classification of sugar beets and weeds. By identifying the exact locations of weeds, the system optimizes targeted interventions such as laser weeding or selective spraying, reducing the need for widespread chemical use. The integration of advanced deep learning models enhances segmentation accuracy, making it a powerful tool for precision agriculture.'   ,
     img: SGBeets, // Eğer farklı bir görsel varsa buraya ekleyebilirsiniz
    address: 'https://www.youtube.com/shorts/o8xAVDwSb4U',
    modalAdress: 'https://www.youtube.com/shorts/o8xAVDwSb4U',

  },

  {
    id: 6,
    name: 'AI-Based Lung Segmentation and Lesion Detection for COVID-19 Diagnosis',
    description: "This project involves the development of an AI-driven tool designed for a medical center in a European country. The system focuses on recognizing and counting glomeruli in human kidney tissue using deep learning techniques. By automating this process, the project aims to improve the efficiency and accuracy of glomeruli detection, which is crucial for diagnosing and monitoring kidney diseases. The tool helps medical professionals expedite their analyses, allowing for more precise and timely interventions.",
    img: LungLes, // Eğer farklı bir görsel varsa buraya ekleyebilirsiniz
    address: 'https://www.youtube.com/shorts/B2rJn1umbqI',
    modalAdress: 'https://www.youtube.com/shorts/B2rJn1umbqI',
  },
  
  {
    id: 7,
    name: 'PCB Defect Detection',
    description: 'The goal of this project was to detect defects on PCBs using the YOLO algorithm, significantly improving efficiency on the production line. By implementing this solution, the factory saved substantial time in quality control. We developed the algorithm for a company based in Tabriz, Iran.',
    img: PCBB, // Örneğin doğru görseli atadım
    address: 'https://youtu.be/2-s3_cWRu8s',
    modalAdress:  'https://youtu.be/2-s3_cWRu8s',

  },
  {
    id: 8,
    name: 'AI-Powered Automated Glomeruli Detection in Kidney Tissue',
    description: 'This project involves the development of an AI-driven tool designed for a medical center in a European country. The system focuses on recognizing and counting glomeruli in human kidney tissue using deep learning techniques. By automating this process, the project aims to improve the efficiency and accuracy of glomeruli detection, which is crucial for diagnosing and monitoring kidney diseases. The tool helps medical professionals expedite their analyses, allowing for more precise and timely interventions.',
    img: Glomer, // Örneğin doğru görseli atadım
    address: 'https://www.youtube.com/shorts/JcpLUigaNzs',
    modalAdress:  'https://www.youtube.com/shorts/JcpLUigaNzs',

  },
];

export default projectsData;
