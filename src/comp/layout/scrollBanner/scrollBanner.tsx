import { useTranslation } from "react-i18next";

import contactBackground from "../../../../public/bg/islemci.jpeg";
import './scrollBanner_translate';

const ScrollBanner: React.FC = () => {
    const { t } = useTranslation();

return (
    <div
        className="text-white mt-16 rounded-md bg-black shadow-lg text-center flex flex-col justify-center items-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${contactBackground})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <h2 className=" text-2xl leading-6 tracking-widest font-medium my-8 ">
          <a
            href="tel:+905436771863"
            className="text-white hover:text-gray-400 duration-500 "
          >
            {t('banner_text1')}
            <br />
            {t('banner_text2')}
          </a>
        </h2>
      </div>
)
};

export default ScrollBanner;