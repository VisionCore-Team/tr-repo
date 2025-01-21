// src/comp/solutions/health-solutions.tsx
"use client";
import "../../index.css";
import { SlideIn } from "../fade/SlideIn";
import Navbar from "../navbar/navbar";

// Import images from the public directory
import Glomeru from "../../../public/project/p3.jpeg";
import BrainSeg from "../../../public/project/p5.png";
import WBCImage from "../../../public/project/p1.jpeg";
import LungLesImage from "../../../public/project/p2.jpeg";
import Footer from "../footer/footer";

export default function Health() {
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
              Solutions For Better Treatments{" "}
              <span>
                {" "}
                <br />
                by VisionCore AI Labs
              </span>
            </h1>

            <br />
            <p className="font-semibold mx-auto text-center text-gray-300 max-w-screen-md mb-8">
              VisionCore leverages computer vision for healthcare with real-time
              monitoring, object recognition, process automation, and
              comprehensive end-to-end solutions.
            </p>
            <div className="flex justify-center mt-6">
              <button className="text-white font-bold py-2 px-4 rounded">
                <a
                  href="tel:+31614946511"
                  className="inline-block bg-emerald-600 duration-500 hover:bg-gray-800 text-white font-b py-3 px-6 rounded"
                >
                  Speak With an AI expert
                </a>
              </button>
            </div>
          </div>
        </div>

        {/* Project Sections */}
        <div className="flex flex-col justify-center text-center mt-20 mx-24">
          <h1 className="text-4xl text-gray-100 mb-7 font-bold">
            {" "}
            Efficiency and Safety in Healthcare with VisionCore
          </h1>
          <h3 className="text-lg text-gray-400 mb-7">
            Computer vision technology introduces a new dimension to healthcare
            processes, enhancing efficiency and safety from patient admission to
            treatment. By leveraging your existing camera systems, it allows you
            to quickly and accurately detect objects and situations in the
            physical environment. This enables you to automate processes with
            real-time, customized data, maximizing operational effectiveness. We
            provide a comprehensive solution that addresses the most challenging
            problems faced by healthcare organizations."
          </h3>
          <h2 className="text-4xl text-gray-100 mb-7 font-bold">
            Healthcare Use Cases
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
                Automated Segmentation System:
              </span>{" "}
              Developed an automated system using MRI images to precisely
              segment various brain regions.
              <br />
              <br />
              <span className="text-white font-semibold">
                Real-Time Tumor Detection:
              </span>{" "}
              Utilized deep learning algorithms and computer vision techniques
              to identify and segment tumors from healthy tissue in real-time.
            </div>
          </div>
          <img
            src={BrainSeg}
            alt=""
            className=" hidden lg:block rounded-r-xl w-[450px]"
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
              Al-Based Lung Segmentation and Lesion Detection for COVlD-19
              Diagnosis
            </h1>
            <h3 className="text-[#047857] font-semibold text-xl my-2">
              Problem:
            </h3>
            <div className="text-gray-400 mb-2">
              <span className="text-white font-semibold"></span> Accurate
              segmentation and volume planning of the lungs and lesions are
              critical in cases where urgent intervention is required, but
              timely intervention cannot be performed because traditional
              methods are slow and inefficient.{" "}
            </div>
            <h3 className="text-[#047857] font-semibold text-xl my-2">
              Solution:
            </h3>
            <div className="text-gray-400">
              <span className="text-white font-semibold"></span> We developed an
              AI-powered tool that uses deep learning techniques to segment the
              left and right lungs and lesions and accurately calculate their
              volumes. This automated and accelerated the diagnostic process,
              helping the medical team to respond quickly and plan effective
              treatment. <br />
              <br />
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
              AI-Powered Automated Glomeruli Detection in Kidney Tissue
            </h1>
            <h3 className="text-[#047857] font-semibold text-xl my-2">
              Problem:
            </h3>
            <div className="text-gray-400 mb-2">
              <span className="text-white font-semibold"></span> Medical centres
              in Europe face the challenge of correctly recognising and counting
              glomeruli in kidney tissue. This manual and time-consuming process
              leads to inefficiencies and potential errors, negatively impacting
              the diagnosis and follow-up of kidney diseases.
            </div>
            <h3 className="text-[#047857] font-semibold text-xl my-2">
              Solution:
            </h3>
            <div className="text-gray-400">
              <span className="text-white font-semibold"></span>We have
              developed an artificial intelligence tool that uses deep learning
              techniques to automate the recognition and counting of glomeruli.
              This system speeds up the analysis process by increasing the
              efficiency and accuracy of glomerulus detection. This enables
              medical professionals to provide faster and more precise
              interventions, improving patient outcomes.{" "}
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
