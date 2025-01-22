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
    title: "video_title1",
    url: "https://www.youtube.com/watch?v=S592KoowrR0",
    thumbnail: "https://img.youtube.com/vi/S592KoowrR0/hqdefault.jpg",
  },
  {
    id: 2,
    title: "video_title2",
    url: "https://www.youtube.com/watch?v=SEumbIehmI4",
      thumbnail: "https://img.youtube.com/vi/SEumbIehmI4/hqdefault.jpg",
  },
  {
    id: 3,
    title: "video_title3",
    url: "https://www.youtube.com/watch?v=bYB9CnX8lTo",
      thumbnail: "https://img.youtube.com/vi/bYB9CnX8lTo/hqdefault.jpg",
  },
  // Daha fazla video ekleyin...
];

export default videosData;

  