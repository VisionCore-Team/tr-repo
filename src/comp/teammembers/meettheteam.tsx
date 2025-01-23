import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/swiper-bundle.css";
import "swiper/css/navigation";
import { useTranslation } from "react-i18next";
import '../about/about_translate';
import caglarPhoto from '../../../public/img/caglarcakmak.jpeg';
import sirousPhoto from '../../../public/img/sirousbadali.jpeg';
import veyselPhoto from '../../../public/img/veyselselimozturk.jpg';


type TeamMember = {
  id: number;
  name: string;
  position: string;
  photo: string;
};

const MeetTheTeam: React.FC = () => {
  const { t } = useTranslation();

  const teamMembers: TeamMember[] = [
    {
      id: 1,
      name: "Çağlar Çakmak",
      position: t('caglar_position'),
      photo: caglarPhoto,
    },
    {
      id: 2,
      name: "Sirous Badali",
      position: t('sirous_position'),
      photo: sirousPhoto,
    },
    {
      id: 3,
      name: "Veysel Öztürk",
      position: t('veysel_position'),
      photo: veyselPhoto,
    }
  ];

  return (
    <div className="p-8 bg-white dark:bg-gray-900 mb-10">
      <div className="relative">
        {/* Кнопки навигации */}
        <div
          className="swiper-button-prev absolute top-1/2 left-0 -translate-y-1/2 z-10 w-10 h-10 bg-gray-800 text-white flex items-center justify-center rounded-full cursor-pointer shadow-lg"
          aria-label="Previous"
        />
        <div
          className="swiper-button-next absolute top-1/2 right-0 -translate-y-1/2 z-10 w-10 h-10 bg-gray-800 text-white flex items-center justify-center rounded-full cursor-pointer shadow-lg"
          aria-label="Next"
        />

        {/* Swiper слайдер */}
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
          {teamMembers.map((member) => (
            <SwiperSlide key={member.id} className="flex flex-col items-center">
              <img
                src={member.photo}
                alt={member.name}
                className="w-32 h-32 bg-white rounded-full object-cover mb-4 shadow-lg"
              />
              <h3 className="text-lg text-white font-semibold">{member.name}</h3>
              <p className="text-sm text-white">{member.position}</p>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default MeetTheTeam;
