"use client";

import bir from "../../../public/img/1.svg";
import iki from "../../../public/img/2.svg";
import uc from "../../../public/img/3.svg";
import dort from "../../../public/img/4.svg";


import { SlideIn } from "../../helpers/fade/SlideIn";
import Navbar from "../navbar/navbar";
import "../../index.css";
import Header from "../header/header";

export default function TRBrochure() {
  return (
    <>
      <Header name="Broşür" />
      <SlideIn delay={0.8} duration={0.3}>
        <div className="bg-zinc-900" style={{ transform: "translateY(-2rem)", paddingTop: "1rem" }}>

          <div className="flex justify-center mt-6">
            <button className="text-white font-bold py-2 px-4 rounded">
              <a
                className="inline-block bg-sky-900 duration-500  hover:bg-gray-800 text-white font-b py-3 px-6 rounded"
                href="/brochure/eng">
                View in English
              </a>
            </button>
          </div>
          <div className="bg-[#0F0F11] flex lg:flex-col justify-between lg:mx-36 m-5 rounded-xl  shadow-md shadow-black">
            <img
              src={bir}
              alt=""
              className="block lg:hidden rounded-t-xl w-86"
            />
          </div>
          <img
            src={bir}
            alt=""
            className="hidden lg:block rounded-r-xl w-[700px] mx-auto mb-0"
          />



          <div className="bg-[#0F0F11] flex lg:flex-col justify-between lg:mx-36 m-5 rounded-xl border-[1px] border-gray-500 shadow-md shadow-black">
            <img
              src={iki}
              alt=""
              className="block lg:hidden rounded-t-xl w-86"
            />
          </div>
          <img
            src={iki}
            alt=""
            className="hidden lg:block rounded-r-xl w-[700px] mx-auto mb-0"
          />

          <div className="bg-[#0F0F11] flex lg:flex-col justify-between lg:mx-36 m-5 rounded-xl border-[1px] border-gray-500 shadow-md shadow-black">
            <img
              src={uc}
              alt=""
              className="block lg:hidden rounded-t-xl w-86"
            />
          </div>
          <img
            src={uc}
            alt=""
            className="hidden lg:block rounded-r-xl w-[700px] mx-auto mb-0"
          />

          <div className="bg-[#0F0F11] flex lg:flex-col justify-between lg:mx-36 m-5 rounded-xl border-[1px] border-gray-500 shadow-md shadow-black">
            <img
              src={dort}
              alt=""
              className="block lg:hidden rounded-t-xl w-86"
            />
          </div>
          <img
            src={dort}
            alt=""
            className="hidden lg:block rounded-r-xl w-[700px] mx-auto mb-0"
          />
        </div>
      </SlideIn>
    </>
  );
}
