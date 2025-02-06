import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { SlideIn } from "../../helpers/fade/SlideIn";
import solutionsData from "./solutionsData";
import './solutions_translate';
import "../../index.css";
import "./solutions.css";


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
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              gap: 0,
              width: "100%",
              height: "500px",
            }}
          >
            <h1
              className="sm: text-center text-5xl"
              style={{ fontWeight: 600, maxWidth: "1300px", width: "80%" }}
            >
              {t(`${info?.title}`)}
            </h1>
            <p className="font-semibold mx-auto text-center text-white max-w-screen-md p-4 mt-1">
              {t(`${info?.titleText}`)}
            </p>
          </div>
        </div>
        {/* Project Sections */}

        {
          info?.paragraphTitle && (
            <div className="flex flex-col justify-center text-center mt-20 mx-24">
              <h1 className="text-4xl text-gray-100 mb-7 font-bold">
                {t(`${info?.paragraphTitle}`)}
              </h1>
              <p className="text-lg text-gray-400 mb-7">
                {t(`${info?.paragraph}`)}
              </p>
              <h2 className="text-4xl text-gray-100 mb-3 font-bold">
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
                <h4 className="text-white font-semibold text-2xl">
                  {t(`${el.title}`)}
                </h4>
                {
                  el.problem && (
                    <>
                      <h5 className="text-[#047857] font-semibold text-xl my-2">
                      {t('problem')}:
                      </h5>
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
                <h5 className="text-[#047857] font-semibold text-xl my-2">
                {t('solution')}:
                </h5>
                {el.solution?.map(infoEl => (
                  <div className="text-gray-400 mb-2">
                    {infoEl?.title && (
                      <span className="text-white font-semibold">
                        {t(`${infoEl?.title}`)}: {' '}
                      </span>
                    )}
                    <p>

                    {t(`${infoEl?.text}`)}
                    </p>
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
