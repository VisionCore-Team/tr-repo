
import Navbar from "./comp/navbar/navbar";
import Footer from "./comp/footer/footer";

function Layout({children}) {
  return (
    <>
      <Navbar/>
      {children}
      <Footer/>
    </>
  );
}

export default Layout;
