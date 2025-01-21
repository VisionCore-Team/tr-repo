
import "./App.css";
import Home from "./comp/home/home";
import MacWinBar from "./comp/window/macWinbar";
import Navbar from "./comp/navbar/navbar";
import bg from "../public/bg/cardbg.jpg";
import contactBackground from "../public/bg/islemci.jpeg";
import { FadeUp } from "./comp/fade/FadeUp";
import { SlideIn } from "./comp/fade/SlideIn";
import { motion } from "framer-motion";
import Chart from "./comp/chartbar/chartbar";
import Footer from "./comp/footer/footer";
import VideoSlider from "./comp/reactVideoSlider/VideoSlider"; // .tsx uzantısını belirtmeye gerek yok

const Layout = () => {
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
                Always Have Eyes on Your Operations
              </h2>
            </div>
          </FadeUp>
          <p
            className="mx-auto max-w-6xl px-6 text-center text-base lg:text-xl"
            style={{ color: "#727374" }}
          >
            At VisionCore, we deeply understand the challenges faced by industries and develop the most suitable solutions collaboratively with our clients through our Enterprise AI solutions. With our proven track record, we position our partners as leaders in their industry and elevate industry standards with innovative technologies.
          </p>

          <SlideIn delay={0.2} duration={0.8}>
            <div className="mx-auto flex max-w-7xl flex-wrap flex-row justify-center gap-2 lg:gap-4">
              {[
                "Gain Visual Insights",
                "Improve Processes",
                "Drive More Revenue",
                "Enhance Safety",
              ].map((title, index) => (
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
                          src={
                            index === 0
                              ? "//images.ctfassets.net/zi2yef4nw297/55IgiMbZTUnzClTCNDDf8i/0d1dd19b845ae5bb3f553a9e3097dd1b/analytics.svg"
                              : index === 1
                              ? "//images.ctfassets.net/zi2yef4nw297/5yoHVAi7MbTb2l06IbU2yg/5a8046ae87cdc124f277267d225938dc/process.svg"
                              : index === 2
                              ? "//images.ctfassets.net/zi2yef4nw297/5kzRnOp98IPwkc8Kl6MlYk/b32e0787996f7cb7e7ef05320a5fde34/money.svg"
                              : "//images.ctfassets.net/zi2yef4nw297/1YgBcdR3qmWhI0eriJNK5H/37f1b3a4a597fa2e8c03c861f8ba3710/safety.svg"
                          }
                          alt={title}
                        />
                      </div>
                      <h4 style={{ wordBreak: "break-word" }}>{title}</h4>
                      <p className="text-base leading-6 opacity-80">
                        {index === 0 &&
                          "Capture more accurate, real-time visual data to better address productivity issues."}
                        {index === 1 &&
                          "Minimize delays and streamline operations by addressing issues as they happen."}
                        {index === 2 &&
                          "Identify choke points, security risks, delays, and staffing issues to cut costs."}
                        {index === 3 &&
                          "Assess safety compliance in real-time with immediate alerts to mitigate risks."}
                      </p>
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
            Can't See Your Industry?
            <br />
            Speak with an AI Expert
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
          Meet The Team
        </span>
        <br /> <br />
      </motion.div>

      <div
        style={{ backgroundImage: `url(${bg})` }}
        className=" mb-10 max-w-[1200px] lg:mx-auto mx-10 h-full about rounded-t-xl"
      >
        <MacWinBar />
     
      </div>
    <Footer/>
    </>
  );
};

export default Layout;
