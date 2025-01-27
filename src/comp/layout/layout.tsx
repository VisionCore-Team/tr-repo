import HomeBanner from "./homeBanner/homeBanner";
import MeetTheTeam from "./teammembers/meettheteam";
import Navbar from "../navbar/navbar";
import ScrollBanner from "./scrollBanner/scrollBanner";
import Footer from "../footer/footer";
import VideoSlider from "./reactVideoSlider/VideoSlider"; // .tsx uzantısını belirtmeye gerek yok
import Operations from "./operations/operations";
import "../../App.css";

const Layout = () => {
  return (
    <>
      <Navbar />
      <HomeBanner />
      <Operations/>
      <VideoSlider />
      <ScrollBanner />
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
