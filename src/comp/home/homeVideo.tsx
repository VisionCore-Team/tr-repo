import homeVideo from '/video/homeVideocompress.mp4';
import { SlideIn } from '../fade/SlideIn';

const BackgroundVideo = () => {
  return (
    <SlideIn delay={0.8} duration={1}>
      <video
    src={homeVideo} // video dosyasının yolu
    autoPlay
    loop
    muted
    className="w-96 rounded-2xl shadow-2xl shadow-black transform md:translate-x-[-120px] mx-auto" // X ekseninde 20px sola kaydırma büyük ekranlarda olur
  /></SlideIn>
    
  );
};

export default BackgroundVideo;
