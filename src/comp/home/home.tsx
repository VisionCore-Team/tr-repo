import { TypeAnimation } from 'react-type-animation';
import "./home.css";
import { FadeUp } from '../fade/FadeUp';
import BackgroundVideo from './homeVideo';

function Home() {
  return (
    <div className='home-container lg:flex-row lg:justify-between'>
<div className='block lg:hidden'>
<BackgroundVideo></BackgroundVideo>
</div>
      <div className='flex flex-col text-center md:translate-x-[+110px] lg:text-left'>
        <FadeUp delay={0.6} duration={1.0}>
          <h1 className=' text-gray-200 font-thin text-3xl pb-3 pt-2 mb-4 mt-8 sm:mt-0'>
            Let the VisionCore revolution begin!
          </h1>
        </FadeUp>
        <FadeUp delay={0.8} duration={1.2}>
          <TypeAnimation
            sequence={[
              'Computer Vision Solutions For Enterprises',
              1000,
              'Computer Vision Engineering',
              1000,
              'Industrial Automation Solutions',
              1000,
              'Quality Control and Inspection Systems',
              1000,
              'Dataset Development',
              1000
            ]}
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
