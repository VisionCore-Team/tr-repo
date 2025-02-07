"use client";
import { useTranslation } from "react-i18next";

import { SlideIn } from "../../helpers/fade/SlideIn";
import Header from "../header/header";
import "./ethicalValues_translate";
import "./ethicalValues.css";

export default function EthicalValues() {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col gap-4 justify-center items-center">
      <Header name={t("ethicalValues_title")} />
      <div className="container">
        <div className="ethical bg-black bg-opacity-70 w-full p-6 rounded">
          <div className="flex flex-col lg:flex-row">
            <SlideIn delay={0.2} duration={0.8}>
              <div className="ml-0 lg:m-6 lg:my-auto">
                <h3 className="text-left text-4xl font-semibold mt-5 text-white mb-4">{t('paragraph1_title')}</h3>
                <p className="font-light text-lg text-sky-200">{t('paragraph1_text')}</p>
              </div>
              <h3 className="text-left text-4xl font-semibold mt-5 text-white mb-4 lg:m-6">{t('paragraph2_title')}</h3>
              <p className="font-light text-[20px] text-sky-200 m-6 whitespace-pre-line">{t('paragraph2_text')}</p>
            </SlideIn>
          </div>
        </div>
      </div>
    </div>
  );
}
