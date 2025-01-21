

  // src/data/videosData.ts

export interface Video {
  id: number;
  title: string;
  url: string;
  thumbnail: string;
}

const videosData: Video[] = [
  {
    id: 1,
    title: "Indoor Car Tracking and Plate Recognition",
    url: "https://www.youtube.com/watch?v=S592KoowrR0",
    thumbnail: "https://img.youtube.com/vi/S592KoowrR0/hqdefault.jpg",
  },
  {
    id: 2,
    title: "White Blood Cell Detection",
    url: "https://www.youtube.com/watch?v=SEumbIehmI4",
      thumbnail: "https://img.youtube.com/vi/SEumbIehmI4/hqdefault.jpg",
  },
  {
    id: 3,
    title: "Solar Panel Defect Detection Systems",
    url: "https://www.youtube.com/watch?v=bYB9CnX8lTo",
      thumbnail: "https://img.youtube.com/vi/bYB9CnX8lTo/hqdefault.jpg",
  },
  // Daha fazla video ekleyin...
];

export default videosData;

  