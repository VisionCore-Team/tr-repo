import { useEffect, useRef, useState } from 'react';
import ReactPlayer from 'react-player';
import projectsData from './project';

interface Project {
  id: number;
  name: string;
  img: string;
  address: string;
  modalAdress: string;
}

function Projects() {
  const projectRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedCard, setSelectedCard] = useState<Project | null>(null);

  // Function to open modal
  const openModal = (card: Project) => {
    setSelectedCard(card);
    setIsOpen(true);
  };

  // Function to close modal
  const closeModal = () => {
    setIsOpen(false);
    setSelectedCard(null);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-slide-in');
            entry.target.classList.remove('opacity-0', 'translate-x-full');
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
    <section
      id="project"
      className="p-6 shadow-md mt-6 sm:mx-14 md:mx-14 lg:grid lg:grid-cols-4 gap-4 h-full"
    >
      {projectsData.map((item: Project, index: number) => (
        <div
          key={item.id}
          ref={(el) => (projectRefs.current[index] = el)}
          className="relative flex flex-col justify-start items-center  lg:m-5 rounded-xl
           bg-gray-900 text-white shadow-lg mt-6
           transition-transform transform duration-500
           opacity-0 translate-x-full overflow-hidden mx-auto  max-w-[1280]"

        >
          {/* Desktop View */}
          <div
  className="block w-full h-24 md:h-64 sm:h-52 lg:h-52 rounded-t-2xl  "
            style={{
              backgroundImage: `url(${item.img})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
            }}
          />

          {/* Mobile View */} 
<div className="lg:mb-8 h-66 h-100 p-3"> {/* h-60 -> h-80 for larger container in mobile view, increased padding */}
  <h2 className="lg:text-lg ml-8 text-base text-gray-300 lg:mt-8 ">{item.name}</h2>
  <div className="lg:min-h-48 ">
  </div>
  <a
    className="text-sm lg:text-[13px] text-blue-500 font-extralight after:bg-blue-600 after:absolute after:h-1 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-500 pb-2 cursor-pointer absolute mb-4 ml-4 bottom-0 left-0"
    onClick={() => openModal(item)}
  >
    Check Project Details   </a>
</div>
<p className='hidden mt-4'>{item.address}</p> 
</div>

      ))}
      {/* Modal Component */}
      {isOpen && selectedCard && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center transition-opacity duration-500 ease-in-out opacity-100">
          <div className="bg-black rounded-lg shadow-lg w-full max-w-3xl relative p-0 transform scale-100 transition-transform duration-500 ease-in-out">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-white hover:text-gray-400 z-10"
            >
              &#10005;
            </button>
            {/* Video from YouTube using ReactPlayer */}
            <ReactPlayer
              url={selectedCard.address}
              className="w-full h-full rounded-lg"
              playing={true}
              controls={true}
              width="100%"
              height="500px"
              config={{
                youtube: {
                  playerVars: { showinfo: 0, modestbranding: 1 }
                }
              }}
            />
          </div>
        </div>
      )}
    </section>
  );
}

export default Projects;
