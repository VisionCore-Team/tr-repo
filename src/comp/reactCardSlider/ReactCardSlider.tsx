import projectsData from "./project";
import ReactPlayer from "react-player";
import { useEffect, useRef, useState } from "react";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

interface Project {
  id: number;
  name: string;
  description: string;
  img: string;
  address: string;
  modalAdress: string;
}

const CardSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const projectRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedCard, setSelectedCard] = useState<Project | null>(null);

  

  const closeModal = () => {
    setIsOpen(false);
    setSelectedCard(null);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-slide-in");
          }
        });
      },
      { threshold: 0.1 }
    );

    projectRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      projectRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <div className="mx-0 lg:mx-24">
      <Slider {...settings}>
        {projectsData.map((item: Project, index: number) => (
          <div
            key={item.id}
            ref={(el) => (projectRefs.current[index] = el)}
            className="p-4"
          >
            <div
              className="border-[1px] border-gray-700 h-[600px] w-72 lg:w-86 sm:w-full lg:h-[606px] bg-[#172B45] text-white shadow-lg rounded-xl overflow-hidden transition-transform duration-500 flex flex-col justify-start items-center"
            >
              <div
                className="w-full h-40 rounded-t-2xl"
                style={{
                  backgroundImage: `url(${item.img})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
              <div className="p-4">
                <h2 className="text-lg font-semibold mb-2">{item.name}</h2>
                <p className="text-gray-400 text-sm">{item.description}</p>
                
              </div>
            </div>
          </div>
        ))}
      </Slider>

      {isOpen && selectedCard && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center transition-opacity duration-500 ease-in-out">
          <div className="bg-black rounded-lg shadow-lg w-full max-w-3xl relative">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-white hover:text-gray-400 z-10"
            >
              &#10005;
            </button>
            <ReactPlayer
              url={selectedCard.address}
              className="w-full h-full rounded-lg"
              playing={true}
              controls={true}
              width="100%"
              height="500px"
              config={{
                youtube: {
                  playerVars: { showinfo: 0, modestbranding: 1 },
                },
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default CardSlider;
