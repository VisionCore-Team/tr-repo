
import Navbar from "./comp/navbar/navbar";
import Footer from "./comp/footer/footer";

import { ReactNode } from 'react';

function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <Navbar/>
      {children}
      <Footer/>
    </>
  );
}

export default Layout;
