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
      <HomeBanner />
      <Operations/>
      <VideoSlider />
    </>
  );
};

export default Layout;
