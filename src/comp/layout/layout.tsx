import { useTranslation } from "react-i18next";
import "../../App.css";
import Home from "../home/home";
import MeetTheTeam from "../teammembers/meettheteam";
import MacWinBar from "../window/macWinbar";
import Navbar from "../navbar/navbar";
import bg from "../../../public/bg/cardbg.jpg";
import contactBackground from "../../../public/bg/islemci.jpeg";
import { FadeUp } from "../fade/FadeUp";
import { SlideIn } from "../fade/SlideIn";
import { motion } from "framer-motion";
import Chart from "../chartbar/chartbar";
import Footer from "../footer/footer";
import VideoSlider from "../reactVideoSlider/VideoSlider"; // .tsx uzantısını belirtmeye gerek yok
import './layout_translate';


const Layout = () => {
  const { t } = useTranslation();
  const data = [
    {
      title: t('layout_element_title_1'),
      source: "//images.ctfassets.net/zi2yef4nw297/55IgiMbZTUnzClTCNDDf8i/0d1dd19b845ae5bb3f553a9e3097dd1b/analytics.svg",
      text:  t('layout_element_text_1')
    },
    {
      title: t('layout_element_title_2'),
      source: "//images.ctfassets.net/zi2yef4nw297/5yoHVAi7MbTb2l06IbU2yg/5a8046ae87cdc124f277267d225938dc/process.svg",
      text:  t('layout_element_text_2')
    },
    {
      title: t('layout_element_title_3'),
      source: "//images.ctfassets.net/zi2yef4nw297/5kzRnOp98IPwkc8Kl6MlYk/b32e0787996f7cb7e7ef05320a5fde34/money.svg",
      text:  t('layout_element_text_3')
    },
    {
      title: t('layout_element_title_4'),
      source: "//images.ctfassets.net/zi2yef4nw297/1YgBcdR3qmWhI0eriJNK5H/37f1b3a4a597fa2e8c03c861f8ba3710/safety.svg",
      text:  t('layout_element_text_4')
    },
  ]
  return (
    <>
      <Navbar />
      <div className="home">
        <Home />
      </div>
      <div
        className="project-container relative bg-cover"
        style={{ backgroundPosition: "center", scrollMarginTop: "124px" }}
      >
        <div
          className="z- space-y-2 lg:space-y-6"
          style={{ padding: "64px 0px 24px" }}
        >
          <FadeUp delay={0.2} duration={0.8}>
            <div>
              <h2
                className="mx-auto max-w-5xl px-6 text-center text-2xl lg:text-6xl"
                style={{ maxWidth: "80rem", color: "white" }}
              >
                {t('layout_heading')}
              </h2>
            </div>
          </FadeUp>
          <p
            className="mx-auto max-w-6xl px-6 text-center text-base lg:text-xl"
            style={{ color: "#727374" }}
          >
            {t('layout_text')}
          </p>

          <SlideIn delay={0.2} duration={0.8}>
            <div className="mx-auto flex max-w-7xl flex-wrap flex-row justify-center gap-2 lg:gap-4">
              {data.map((el, index) => (
                <div
                  key={index}
                  className="relative flex items-center justify-center p-2 w-full sm:w-1/2 lg:w-1/5"
                >
                  <div
                    className="z-10 flex h-full w-full flex-col rounded-lg transition-all"
                    style={{ backgroundColor: "#0D1225", color: "#ffffff" }}
                  >
                    <div
                      className="flex-1 items-center justify-center text-center flex w-full flex-col space-y-4"
                      style={{ padding: "16px" }}
                    >
                      <div className="flex items-center">
                        <img
                          src={ el.source }
                          alt={el.title}
                        />
                      </div>
                      <h4 style={{ wordBreak: "break-word" }}>{el.title}</h4>
                      <p className="text-base leading-6 opacity-80">{el.text}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </SlideIn>
        </div>
      </div>
      <Chart />




      <VideoSlider />



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

      <motion.div
        className="text-center font-thin gradient-text"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.4 }}
      >
        <br />
        <span className=" text-5xl font-light mt-4 leading-none">
          {t('meetTeam')}
        </span>
        <br /> <br />
      </motion.div>
      <MeetTheTeam/>
      {/* <div
        style={{ backgroundImage: `url(${bg})` }}
        className=" mb-10 max-w-[1200px] lg:mx-auto mx-10 h-full about rounded-t-xl"
      >
        <MacWinBar />
     
      </div> */}
    <Footer/>
    </>
  );
};

export default Layout;
