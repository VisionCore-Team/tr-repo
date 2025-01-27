// src/comp/solutions/health-solutions.tsx
"use client";
import "../../index.css";
import { SlideIn } from "../../helpers/fade/SlideIn";
import Navbar from "../navbar/navbar";
// Import images from the public directory
import Glomeru from "../../../public/project/p3.jpeg";
import BrainSeg from "../../../public/project/p5.png";
import WBCImage from "../../../public/project/p1.jpeg";
import LungLesImage from "../../../public/project/p2.jpeg";
import Footer from "../footer/footer";

export default function MarketShelf() {
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
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/project/surgery.jpeg')`,
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
                VisionCore <br />{" "}
              </span>
              Solutions For Better Treatments
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
                  className="inline-block duration-500 bg-emerald-600 hover:bg-gray-800 text-white font-b py-3 px-6 rounded"
                >
                  Speak With an AI expert
                </a>
              </button>
            </div>
          </div>
        </div>

        {/* Project Sections */}
        {/* Project Sections */}
        <div className="flex flex-col justify-center text-center mt-20 mx-24">
          <h1 className="text-4xl text-gray-100 mb-7 font-bold">
            Monitor Production Lines in Real-Time With Vision AI
          </h1>
          <h3 className="text-lg text-gray-400 mb-7">
            Computer vision acts as a second set of eyes over your manufacturing
            processes to enhance productivity and safety across the entire value
            chain, from materials tracking to production and delivery. alwaysAI
            enables existing cameras to quickly identify and interpret objects
            in the physical world to automate processes with real-time data
            tailored for specific needs. We are an end-to-end solution that
            addresses manufacturers' most difficult challenges.
          </h3>
          <h2 className="text-4xl text-gray-100 mb-7 font-bold">
            Manufacturing Use Cases
          </h2>
        </div>

        {/* Brain*/}
        <div className="bg-[#0F0F11] flex lg:flex-row flex-col justify-between lg:mx-36 m-5 rounded-xl border-[1px] border-gray-500 shadow-md shadow-black">
          <img
            src={BrainSeg}
            alt=""
            className="block sm:hidden rounded-t-xl w-86 "
          />
          <div className="m-6 my-auto">
            <h1 className="text-white font-semibold text-2xl">
              Brain Region Segmentation and Tumor Recognition for Medical
              Imaging
            </h1>
            <h3 className="text-[#047857] font-semibold text-xl my-2">
              Problem:
            </h3>
            <div className="text-gray-400 mb-2">
              <span className="text-white font-semibold">
                Need for Accwate Segmentation:
              </span>{" "}
              In diagnosing and treating brain diseases, accurately delineating
              different brain regions and quantifying their sizes is critical.
            </div>
            <h3 className="text-[#047857] font-semibold text-xl my-2">
              Solution:
            </h3>
            <div className="text-gray-400">
              <span className="text-white font-semibold">
                AutomatedSegmentation System:
              </span>{" "}
              Developed an automated system using MRI images to precisely
              segment various brain regions.
              <br />
              <br />
              <span className="text-white font-semibold">
                Real-Time Tumor Detection:
              </span>{" "}
              TUtilized deep learning algorithms and computer vision techniques
              to identify and segment tumors from healthy tissue in real-time.
            </div>
          </div>
          <img
            src={BrainSeg}
            alt=""
            className=" hidden lg:block rounded-r-xl w-[700px]"
          />
        </div>

        {/* WBC*/}
        <div className="bg-[#0F0F11] flex lg:flex-row flex-col justify-between lg:mx-36 m-5 rounded-xl border-[1px] border-gray-500 shadow-md shadow-black">
          <img
            src={WBCImage}
            alt=""
            className="block lg:hidden rounded-t-xl w-86"
          />
          <div className="m-6">
            <h1 className="text-white font-semibold text-2xl">
              WBC Analysis Using Computer Vision
            </h1>
            <h3 className="text-[#047857] font-semibold text-xl my-2">
              Problem:
            </h3>
            <div className="text-gray-400 mb-2">
              <span className="text-white font-semibold">
                Accurate Cell Counting:
              </span>{" "}
              Manual counting of white blood cells is labor-intensive and
              subject to human error.
              <br />
              <br />
              <span className="text-white font-semibold">
                High Throughput Requirements:{" "}
              </span>{" "}
              Rapid analysis is needed to handle large volumes of samples
              efficiently.
            </div>
            <h3 className="text-[#047857] font-semibold text-xl my-2">
              Solution:
            </h3>
            <div className="text-gray-400">
              <span className="text-white font-semibold">
                Accurate Cell Counting:
              </span>{" "}
              Manual counting of white blood cells is labor-intensive and
              subject to human error.
              <br />
              <br />
              <span className="text-white font-semibold">
                High Throughput Requirements:{" "}
              </span>{" "}
              Rapid analysis is needed to handle large volumes of samples
              efficiently.
            </div>
          </div>
          <img
            src={WBCImage}
            alt=""
            className="hidden lg:block rounded-r-xl w-[450px]"
          />
        </div>

        {/* Lung Lesion Identification */}
        <div className="bg-[#0F0F11] flex lg:flex-row flex-col justify-between lg:mx-36 m-5 rounded-xl border-[1px] border-gray-500 shadow-md shadow-black">
          <img
            src={LungLesImage}
            alt=""
            className="block lg:hidden rounded-t-xl w-86"
          />
          <div className="m-6">
            <h1 className="text-white font-semibold text-2xl">
              WBC Analysis Using Computer Vision
            </h1>
            <h3 className="text-[#047857] font-semibold text-xl my-2">
              Problem:
            </h3>
            <div className="text-gray-400 mb-2">
              <span className="text-white font-semibold">
                Long Production Lines:
              </span>{" "}
              Long production lines are difficult to monitor at all times. But
              without visibility, it’s difficult to know where costly
              bottlenecks and delays occur.
            </div>
            <h3 className="text-[#047857] font-semibold text-xl my-2">
              Solution:
            </h3>
            <div className="text-gray-400">
              <span className="text-white font-semibold">
                24-Hour Visual Data:
              </span>{" "}
              Optimize processes with 24-hour visual data across your entire
              production line.
              <br />
              <br />
              <span className="text-white font-semibold">
                Unprecedented Insights:
              </span>{" "}
              Get unprecedented insights into machine use and labor productivity
              to maximize efficiency.
            </div>
          </div>
          <img
            src={LungLesImage}
            alt=""
            className="hidden lg:block rounded-r-xl w-[450px]    "
          />
        </div>

        {/* Glomerular Disease Detection */}

        <div className="bg-[#0F0F11] flex lg:flex-row flex-col justify-between lg:mx-36 m-5 rounded-xl border-[1px] border-gray-500 shadow-md shadow-black">
          <img
            src={Glomeru}
            alt=""
            className="block lg:hidden rounded-t-xl w-86 h-52"
          />
          <div className="m-6">
            <h1 className="text-white font-semibold text-2xl">
              WBC Analysis Using Computer Vision
            </h1>
            <h3 className="text-[#047857] font-semibold text-xl my-2">
              Problem:
            </h3>
            <div className="text-gray-400 mb-2">
              <span className="text-white font-semibold">
                Early Detection Challenges:
              </span>{" "}
              Detecting glomerular diseases at an early stage is challenging
              with traditional diagnostic methods.
              <br />
              <br />
              <span className="text-white font-semibold">
                Limited Diagnostic Tools:
              </span>{" "}
              Existing diagnostic tools lack the precision needed for accurate
              and timely diagnosis.
            </div>
            <h3 className="text-[#047857] font-semibold text-xl my-2">
              Solution:
            </h3>
            <div className="text-gray-400">
              <span className="text-white font-semibold">
                Advanced Imaging Techniques:
              </span>{" "}
              Advanced Imaging Techniques: Developed a computer vision system to
              detect glomerular diseases using high-resolution imaging
              techniques.
              <br />
              <br />
              <span className="text-white font-semibold">
                Enhanced Diagnostic Accuracy:
              </span>{" "}
              Leveraged machine learning algorithms to enhance the precision and
              accuracy of disease detection.
            </div>
          </div>
          <img
            src={Glomeru}
            alt=""
            className="hidden lg:block rounded-r-xl w-[450px]"
          />
        </div>
        <Footer />
      </div>
    </SlideIn>
  );
}
