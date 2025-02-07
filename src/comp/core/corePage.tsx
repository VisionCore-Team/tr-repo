"use client";
import { useTranslation } from "react-i18next";

import { SlideIn } from "../../helpers/fade/SlideIn";
import Header from "../header/header";
import { coreData, coreLabelData } from "./core_data";
import "./core_translate";
import "./Core.css";

const handleClick = (
  e: React.MouseEvent<HTMLAnchorElement>,
  sectionId: string
) => {
  e.preventDefault();
  const targetElement = document.querySelector(`#${sectionId}`);
  if (targetElement) {
    targetElement.scrollIntoView({ behavior: "smooth" });
  }
};

export default function Core() {
  const { t } = useTranslation();
  return (
    <div className="blog-page">
      <Header name={t('core_title')} />
      <div className="flex flex-col gap-4 justify-center items-center">
        <div className="container pt-8">
          <div className="bg-gray-900 bg-opacity-80 p-4 mb-8 rounded-md mx-4 md:mx-0 sm:mx-0">
            <ul className="flex justify-center space-x-4 md:space-x-8">
              {coreLabelData.map((section) => (
                <li key={section.id}>
                  <a
                    href={`#${section.id}`}
                    onClick={(e) => handleClick(e, section.id)}
                    className="text-white font-medium hover:text-orange-400 transition-colors"
                  >
                    {t(`${section.label}`)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Blog Entry Container */}
          {coreData.map((core) => (
            <SlideIn key={core.id} delay={0.2} duration={0.8}>
              <div
                id={core.id}
                className="flex flex-col lg:flex-row mb-8 mt-16 border-[1px] border-gray-500 bg-gray-800 bg-opacity-70 p-6 rounded-lg shadow-md"
              >
                <img
                  src={core.image}
                  alt={t(`${core.title}`)}
                  className="rounded-lg h-96 w-full lg:w-1/2 object-cover"
                />
                <div className="lg:ml-6 mt-4 text-gray-100">
                  <h3 className="font-semibold text-2xl">
                    {t(`${core.title}`)}
                  </h3>
                  <p className="font-light mt-2">{t(`${core.text}`)}</p>
                </div>
              </div>
            </SlideIn>
          ))}
        </div>
      </div>
    </div>
  );
}
