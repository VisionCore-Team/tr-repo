import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { useTranslation } from "react-i18next";
import { Navigation } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/swiper-bundle.css";
import "swiper/css/navigation";

import './meattheteam_translate';
import teamData from "../../team/team_data";


const MeetTheTeam: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="p-8 bg-dark:bg-gray-900 mb-10">
      <motion.div
        className="text-center font-thin gradient-text"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.4 }}
      >
        <br />
        <span className=" text-5xl font-light mt-4 leading-none">
          {t('meetTeam')}
        </span>
        <br /> <br />
      </motion.div>
      <div className="relative">
        {/* Navigation buttons */}
        <div
          className="swiper-button-prev text-white active:scale-110"
          aria-label="Previous"
        />
        <div
          className="swiper-button-next text-white active:scale-110"
          aria-label="Next"
        />

        {/* Swiper slider */}
        <Swiper
          modules={[Navigation]}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          loop={true}
          spaceBetween={20}
          slidesPerView={3}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {teamData.map((member) => (
            <SwiperSlide key={member.id} className="flex flex-col items-center">
              <img
                src={member.image}
                alt={member.name}
                className="w-32 h-32 bg-white rounded-full object-cover mb-4 shadow-lg"
              />
              <h3 className="text-lg text-white font-semibold">{member.name}</h3>
              <p className="text-sm text-white">{t(`${member.position}`)}</p>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default MeetTheTeam;
