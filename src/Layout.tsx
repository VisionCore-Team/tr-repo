import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from "./comp/navbar/navbar";
import Footer from "./comp/footer/footer";

function Layout({ children }: { children: React.ReactNode }) {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, [location.pathname]);

  return (
    <>
      <Navbar/>
      {children}
      <Footer/>
    </>
  );
}

export default Layout;