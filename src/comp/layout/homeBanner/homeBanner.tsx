import { useState, useEffect } from 'react';
import { TypeAnimation } from 'react-type-animation';
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';

import { FadeUp } from '../../../helpers/fade/FadeUp';
import { SlideIn } from '../../../helpers/fade/SlideIn';
import homeVideo from '../../../../public/video/siteBackgroundVideo.mp4'
import './homeBanner_translate';
import "./homeBanner.css";

function HomeBanner() {

  const { t } = useTranslation();

  const [sequences, setSequences] = useState<string[]>([]);

  const updateSequences = () => {
    const updatedSequences = Object.entries(i18next.getDataByLanguage(i18next.language)?.translation || {})
      .filter(([key]) => key.startsWith('homeAnimation_text'))
      .map(([, value]) => value);

    setSequences(updatedSequences as string[]);
  };
  useEffect(() => {
    updateSequences();
    i18next.on('languageChanged', updateSequences);
    return () => {
      i18next.off('languageChanged', updateSequences);
    };
  }, []);

  const generatedSequence = sequences.flatMap((text) => [text, 1000]);

  return (
    <div className='homeBanner-container lg:flex h-[100vh] lg:justify-between lg:items-center'>
      <div className='flex flex-col text-center md:translate-x-[+110px] lg:text-left'>
        <FadeUp delay={0.6} duration={1.0}>
          <h1 className=' text-gray-200 font-thin text-3xl pb-3 pt-2 mb-4 mt-8 sm:mt-0'>
            {t('homeBanner_text')}
          </h1>
        </FadeUp>
        <FadeUp delay={0.8} duration={1.2}>
          <TypeAnimation
            key={generatedSequence.join('')}
            sequence={[...generatedSequence, Infinity]}
            wrapper="span"
            speed={40}
            className='sm:text-md lg:text-xl font-light pb-3 text-white'
            style={{ display: 'inline-block' }}
            repeat={Infinity}
          />
        </FadeUp>
      </div>
      <div>
        <SlideIn delay={0.8} duration={1}>
          <video
            src={homeVideo} // video dosyasının yolu
            autoPlay
            loop
            muted
            preload="auto"
            className="w-[34rem] rounded-2xl shadow-2xl shadow-black transform md:translate-x-[-120px] mx-auto" // X ekseninde 20px sola kaydırma büyük ekranlarda olur
          />
        </SlideIn>
      </div>
    </div>
  );
}

export default HomeBanner;
