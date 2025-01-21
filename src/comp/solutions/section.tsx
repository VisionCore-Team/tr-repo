// src/comp/solutions/Section.tsx
import React from 'react';


interface SectionProps {
  title: string;
  problem: React.ReactNode;
  solution: React.ReactNode;
  imageSrc: string; // Adjust if using imports (e.g., StaticImageData with Next.js)
  imageAlt: string;
  delay?: number;
  duration?: number;
  reverse?: boolean;
}

const Section: React.FC<SectionProps> = ({
  title,
  problem,
  solution,
  imageSrc,
  imageAlt,
}) => {
  return (
      <div className="text-white bg-zinc-950 bg-opacity-80  rounded-lg  shadow-2xl mt-8 p-6 mx-auto max-w-screen-xl justify-center ">
        <h1 className="text-center mb-8   font-bold text-white " style={{fontSize: 31}}>{title}</h1>

        <div
          className={`flex flex-col lg:flex-row items-center lg:items-start `}
        >
          {/* Metin Bölümü */}
          <div className="lg:w-1/2 lg:pr-4">
            <h2 className="text-2xl mb-2 font-semibold text-emerald-700 ">Problem:</h2>
            <p className="mb-6 text-gray-400  ">{problem}</p>

            <h2 className="text-2xl font-semibold text-emerald-700 mb-2">Solution:</h2>
            <p className='text-gray-400'>{solution}</p>
          </div>

          {/* Görsel Bölümü */}
          <div className="lg:w-1/2 lg:pl-4 mt-6 lg:mt-0">
            <img
              src={imageSrc}
              alt={imageAlt}
              className="rounded-lg h-96 w-full object-cover shadow-md"
            />
          </div>
        </div>
      </div>
    
  );
};

export default Section;
