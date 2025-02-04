// src/comp/reactVideoSlider/VideoSlider.tsx

import React, { useRef, useState, useEffect } from "react";
import Slider from "react-slick";
import ReactPlayer from "react-player";
import { useTranslation } from "react-i18next";
import videosData, { Video } from "./videosData"; // Doğru yolu kullandığınızdan emin olun
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './videoSlider_translate';
import { motion, AnimatePresence } from "framer-motion";

const VideoSlider: React.FC = () => {

  const { t } = useTranslation();
  const sliderRef = useRef<Slider>(null);
  const [activeVideo, setActiveVideo] = useState<Video | null>(null);

  const translatedVideos = videosData.map((video) => ({
    ...video,
    title: t(video.title),
  }));

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 3, // Büyük ekranlarda gösterilecek video sayısı
    slidesToScroll: 1,
    autoplay: true, // Otomatik kaydırma
    autoplaySpeed: 3000, // 3 saniye
    responsive: [
      {
        breakpoint: 1024, // Tablet ve daha küçük ekranlar
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640, // Mobil ekranlar
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const openVideo = (video: Video) => {
    setActiveVideo(video);
  };

  const closeVideo = () => {
    setActiveVideo(null);
  };

  const handleOverlayClick = () => {
    closeVideo();
  };

  const handleVideoClick = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    e.stopPropagation(); // Olayın üst elementlere yayılmasını engeller
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeVideo();
      }
    };

    if (activeVideo) {
      window.addEventListener("keydown", handleKeyDown);
    } else {
      window.removeEventListener("keydown", handleKeyDown);
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeVideo]);

  return (
    <div className="w-11/12 mx-auto bg-gray-900 py-16" style={{width: "100%"}}>
      <h2 className="text-center text-3xl font-bold mb-8 text-white">{t('title')}</h2>
      <Slider {...settings} ref={sliderRef}>
        {translatedVideos.map((video) => (
          <div key={video.id} className="p-4">
            <div
              className="relative cursor-pointer"
              onClick={() => openVideo(video)}
            >
              <img
                src={video.thumbnail}
                alt={video.title}
                className="w-full h-64 object-cover rounded-lg shadow-lg"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <svg
                  className="w-16 h-16 text-white opacity-75"
                  fill="currentColor"
                  viewBox="0 0 84 84"
                >
                  <circle cx="42" cy="42" r="42" fill="rgba(0,0,0,0.6)" />
                  <polygon points="33,25 33,59 59,42" fill="white" />
                </svg>
              </div>
              <h3 className="mt-2 text-center text-lg text-white">
                {video.title}
              </h3>
            </div>
          </div>
        ))}
      </Slider>

      <AnimatePresence>
        {activeVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
            onClick={handleOverlayClick} // Modal dışına tıklamayı algılar
            role="dialog"
            aria-modal="true"
            aria-labelledby="video-title"
          >
            <div
              className="relative w-11/12 max-w-3xl h-64 lg:h-[500px]"
              onClick={handleVideoClick} // Video alanına tıklamayı engeller
            >
              <ReactPlayer
                url={activeVideo.url}
                playing
                controls
                width="100%"
                height="100%"
                className="rounded-lg shadow-lg"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default VideoSlider;
