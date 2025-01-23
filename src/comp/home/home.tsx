import { useState, useEffect } from 'react';
import { TypeAnimation } from 'react-type-animation';
import "./home.css";
import { FadeUp } from '../fade/FadeUp';
import BackgroundVideo from './homeVideo';
import { useTranslation } from 'react-i18next';
import './home_translate';
import i18next from 'i18next';


function Home() {

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
    <div className='home-container lg:flex-row lg:justify-between'>
      <div className='block lg:hidden'>
        <BackgroundVideo></BackgroundVideo>
      </div>
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
      <div className='hidden lg:block align-center mb-40 mr-6'>
        <BackgroundVideo></BackgroundVideo>
      </div>
    </div>
  );
}

export default Home;
