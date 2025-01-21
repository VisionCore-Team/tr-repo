"use client";
import "../../index.css";

import { SlideIn } from "../fade/SlideIn";
import Navbar from "../navbar/navbar";
// Import images from the public directory
import bitki from "../../../public/project/sprey.png";
import Footer from "../footer/footer";

export default function Agriculture() {
  return (
    <SlideIn>
      <div className="health-page min-h-screen bg-neutral-800">
        <div className="navbar-container bg-zinc-950 ">
          <Navbar />
        </div>
        <div>
          <div
            className="home-container h-24"
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/project/agriculture.jpeg')`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              width: "100%",
              height: "500px", // İhtiyacınıza göre ayarlayın
            }}
          >
            <h1
              className="sm: text-center text-5xl"
              style={{ fontSize: 45, fontWeight: 600 }}
            >
              <span>
                VisionCore For <br />{" "}
              </span>{" "}
              Less Chemicals, More Yield
            </h1>

            <br />
            <p className="font-semibold mx-auto text-center text-white max-w-screen-md p-4 mt-4">
              VisionCore leverages computer vision for healthcare with real-time
              monitoring, object recognition, process automation, and
              comprehensive end-to-end solutions.
            </p>
            <div className="flex justify-center mt-6">
              <button className="text-white font-bold py-2 px-4 rounded">
                <a
                  href="tel:+31614946511"
                  className="inline-block  bg-emerald-600 hover:bg-gray-800 text-white duration-500 font-b py-3 px-6 rounded"
                >
                  Speak With an AI expert
                </a>
              </button>
            </div>
          </div>
        </div>

        {/* Project Sections */}
        {/* PCB*/}
        <div className="bg-[#0F0F11] flex lg:flex-col justify-between lg:mx-36 m-5 rounded-xl border-[1px] border-gray-500 shadow-md shadow-black">
          <img
            src={bitki}
            alt=""
            className="block lg:hidden rounded-t-xl w-86"
          />
          <div className="m-6">
            <h1 className="text-white font-semibold text-2xl">
              Sugar Beets and Weeds Segmentation and Classification
            </h1>
            <h3 className="text-[#047857] font-semibold text-xl my-2">
              Problem:
            </h3>
            <div className="text-gray-400 mb-2">
              <span className="text-white font-semibold"></span> In precision
              agriculture, accurately distinguishing sugar beets from weeds is
              essential for maximizing crop yields and minimizing chemical
              usage. Traditional weed control methods rely on widespread
              herbicide application, which is inefficient, costly, and
              environmentally harmful. <br />
              <br />
            </div>
            <h3 className="text-[#047857] font-semibold text-xl my-2">
              Solution:
            </h3>
            <div className="text-gray-400">
              <span className="text-white font-semibold"></span> We developed an
              AI-driven system using deep learning to precisely segment and
              classify sugar beets and weeds. By accurately identifying weed
              locations, the system enables targeted interventions such as laser
              weeding or selective spraying, achieving up to 90% reduction in
              pesticide use. This enhances operational efficiency, lowers costs,
              and promotes sustainable farming practices.
              <br />
              <br />
            </div>
          </div>
          <img
            src={bitki}
            alt=""
            className="hidden lg:block rounded-r-xl w-[700px] mx-auto mb-0"
          />
        </div>

        <Footer />
      </div>
    </SlideIn>
  );
}
