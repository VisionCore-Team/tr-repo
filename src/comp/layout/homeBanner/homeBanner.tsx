import { useState, useEffect } from "react";
import { TypeAnimation } from "react-type-animation";
import { useTranslation } from "react-i18next";
import i18next from "i18next";

import { FadeUp } from "../../../helpers/fade/FadeUp";
import homeVideo from "/video/siteBackgroundVideo.mp4";
import "./homeBanner_translate";
import "./homeBanner.css";

function HomeBanner() {
  const { t } = useTranslation();

  const [sequences, setSequences] = useState<string[]>([]);

  const updateSequences = () => {
    const updatedSequences = Object.entries(
      i18next.getDataByLanguage(i18next.language)?.translation || {}
    )
      .filter(([key]) => key.startsWith("homeAnimation_text"))
      .map(([, value]) => value);

    setSequences(updatedSequences as string[]);
  };
  useEffect(() => {
    const videoElement = document.querySelector("video");
    if (videoElement) {
      videoElement.load();
    }
  }, []);
  useEffect(() => {
    updateSequences();
    i18next.on("languageChanged", updateSequences);
    return () => {
      i18next.off("languageChanged", updateSequences);
    };
  }, []);

  const generatedSequence = sequences.flatMap((text) => [text, 1000]);

  return (
    <div className="homeBanner-container lg:flex h-[100vh] lg:justify-between lg:items-center">
      <div className="homeSlider">
        <video
          src={homeVideo}
          autoPlay
          loop
          muted
          playsInline
          disablePictureInPicture
          preload="metaData"
          className="mainSlider"
        />
        <div className="gradient" />
        <div className="blurArea flex flex-col" style={{ zIndex: 10 }}>
          <FadeUp delay={0.6} duration={1.0}>
            <h1
              className=" text-gray-200 mb-5 font-thin text-5xl sm:mt-0"
              style={{ fontWeight: "bold" }}
            >
              {t("homeBanner_text")}
            </h1>
          </FadeUp>
          <FadeUp delay={0.8} duration={1.2}>
            <TypeAnimation
              key={generatedSequence.join("")}
              sequence={[...generatedSequence, Infinity]}
              wrapper="span"
              speed={40}
              className="sm:text-md lg:text-3xl font-light pb-3 text-white"
              style={{ display: "inline-block" }}
              repeat={Infinity}
            />
          </FadeUp>
        </div>
      </div>
    </div>
  );
}

export default HomeBanner;
