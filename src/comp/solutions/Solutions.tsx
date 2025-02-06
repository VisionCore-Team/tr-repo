import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { SlideIn } from "../../helpers/fade/SlideIn";
import Navbar from "../navbar/navbar";
import Footer from "../footer/footer";

import solutionsData from "./solutionsData";
import './solutions_translate';
import "../../index.css";


export default function Solutions() {
  const { id } = useParams();
  const { t } = useTranslation();
  const info = solutionsData.find(el => el.id === id);

  return (
    <SlideIn>
      <div className="health-page pb-5 min-h-screen bg-gray-900">
        <div>
          <div
            className="home-container h-24"
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${info?.titleImage})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              width: "100%",
              height: "500px", // İhtiyacınıza göre ayarlayın
            }}
          >
            <h1
              className="sm: text-center text-5xl"
              style={{ fontSize: 45, fontWeight: 600 }}
            >
              {t(`${info?.title}`)}
            </h1>

            <br />
            <p className="font-semibold mx-auto text-center text-white max-w-screen-md p-4 mt-4">
              {t(`${info?.titleText}`)}
            </p>
            <div className="flex justify-center mt-6">
              <button className="text-white font-bold py-2 px-4 rounded">
                <a
                  href="tel:+31614946511"
                  className="inline-block duration-500 bg-emerald-600 hover:bg-gray-800 text-white font-b py-3 px-6 rounded"
                >
                  {t('speakAI')}
                </a>
              </button>
            </div>
          </div>
        </div>
        {/* Project Sections */}

        {
          info?.paragraphTitle && (
            <div className="flex flex-col justify-center text-center mt-20 mx-24">
              <h1 className="text-4xl text-gray-100 mb-7 font-bold">
                {t(`${info?.paragraphTitle}`)}
              </h1>
              <h3 className="text-lg text-gray-400 mb-7">
                {t(`${info?.paragraph}`)}
              </h3>
              <h2 className="text-4xl text-gray-100 mb-7 font-bold">
                {t(`${info?.solutionTitle}`)}
              </h2>
            </div>
          )
        }

        {/* Project Sections */}

        {
          info?.solutions.map(el => (
            <div className="bg-[#0F0F11] flex lg:flex-row flex-col justify-between lg:mx-36 m-5 rounded-xl border-[1px] border-gray-500 shadow-md shadow-black">
              <div className="m-6">
                <h1 className="text-white font-semibold text-2xl">
                  {t(`${el.title}`)}
                </h1>
                {
                  el.problem && (
                    <>
                      <h3 className="text-[#047857] font-semibold text-xl my-2">
                      {t('problem')}:
                      </h3>
                      {el.problem?.map(infoEl => (
                        <div className="text-gray-400 mb-2">
                          {infoEl?.title && (
                            <span className="text-white font-semibold">
                              {t(`${infoEl?.title}`)}: {' '}
                            </span>
                          )}
                          {t(`${infoEl?.text}`)}
                        </div>
                      ))}
                    </>
                  )
                }
                <h3 className="text-[#047857] font-semibold text-xl my-2">
                {t('solution')}:
                </h3>
                {el.solution?.map(infoEl => (
                  <div className="text-gray-400 mb-2">
                    {infoEl?.title && (
                      <span className="text-white font-semibold">
                        {t(`${infoEl?.title}`)}: {' '}
                      </span>
                    )}
                    {t(`${infoEl?.text}`)}
                  </div>
                ))}
                
              </div>
              <img
                  src={el?.image}
                  alt={t(`${el.title}`)}
                  className="hidden lg:block rounded-r-xl w-[450px] object-cover"
                />
            </div>
          ))
        }
      </div>
    </SlideIn>
  );
}
