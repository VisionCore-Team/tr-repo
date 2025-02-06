import HomeBanner from "./homeBanner/homeBanner";
import VideoSlider from "./reactVideoSlider/VideoSlider";
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
