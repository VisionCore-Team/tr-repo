"use client";
import "../../index.css";

import { SlideIn } from "../../helpers/fade/SlideIn";
import Navbar from "../navbar/navbar";
// Import images from the public directory
import Anomaly from "../../../public/project/anomaly.png";
import PCB from "../../../public/project/p6.png";
import Footer from "../footer/footer";
import robotics from "../../../public/img/pree.webp";
import helmet from "../../../public/project/helmet.webp";
import heatmap from "../../../public/project/heatmap.webp";

export default function Manufacturing() {
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
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/img/manufacturing.jpeg')`,
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
                VisionCore Solutions For <br />{" "}
              </span>{" "}
              Monitoring Production Lines in Real-Time{" "}
            </h1>

            <br />
            <p className="font-semibold mx-auto text-center text-white max-w-screen-md p-4 mt-4">
              Improve manufacturing throughput, minimize defects, and optimize
              labor delivery via real-time data to increase ROI.
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

        <div className="flex flex-col justify-center text-center mt-20 mx-24">
          <h1 className="text-4xl text-gray-100 mb-7 font-bold">
            Monitor Production Lines in Real-Time by VisionCore{" "}
          </h1>
          <h3 className="text-lg text-gray-400 mb-7">
            Computer vision acts as a second set of eyes over your manufacturing
            processes to enhance productivity and safety across the entire value
            chain, from materials tracking to production and delivery.
            VisionCore enables existing cameras to quickly identify and
            interpret objects in the physical world to automate processes with
            real-time data tailored for specific needs. We are an end-to-end
            solution that addresses manufacturers' most difficult challenges.
          </h3>
          <h2 className="text-4xl text-gray-100 mb-7 font-bold">
            Manufacturing Use Cases
          </h2>
        </div>

        {/* Project Sections */}

        {/* heatmap*/}
        <div className="bg-[#0F0F11] flex lg:flex-row flex-col justify-between lg:mx-36 m-5 rounded-xl border-[1px] border-gray-500 shadow-md shadow-black">
          <img
            src={heatmap}
            alt=""
            className="block lg:hidden rounded-t-xl w-86"
          />
          <div className="m-6">
            <h1 className="text-white font-semibold text-2xl">
              Safety Monitoring
            </h1>
            <h3 className="text-[#047857] font-semibold text-xl my-2">
              Problem:
            </h3>
            <div className="text-gray-400 mb-2">
              <span className="text-white font-semibold"></span>Managing
              employees, delivery personnel, materials, and equipment in large
              manufacturing facilities is challenging but essential to
              optimizing productivity.
            </div>
            <h3 className="text-[#047857] font-semibold text-xl my-2">
              Solution:
            </h3>
            <div className="text-gray-400">
              <span className="text-white font-semibold"></span> Get real-time
              visual data about movement and dwell time anywhere in your
              facility through heatmapping and foot traffic analytics to
              streamline operations and boost ROL{" "}
            </div>
          </div>
          <img
            src={heatmap}
            alt=""
            className="hidden lg:block rounded-r-xl w-[450px]"
          />
        </div>

        {/* PCB*/}
        <div className="bg-[#0F0F11] flex lg:flex-row flex-col justify-between lg:mx-36 m-5 rounded-xl border-[1px] border-gray-500 shadow-md shadow-black">
          <img src={PCB} alt="" className="block lg:hidden rounded-t-xl w-86" />
          <div className="m-6">
            <h1 className="text-white font-semibold text-2xl">
              PCB Defect Detection
            </h1>
            <h3 className="text-[#047857] font-semibold text-xl my-2">
              Problem:
            </h3>
            <div className="text-gray-400 mb-2">
              <span className="text-white font-semibold">
                Manual Quality Control:
              </span>{" "}
              PCB manufacturing processes rely on manual quality control methods
              that are time-consuming and prone to human error, reducing overall
              production efficiency.
              <br />
              <br />
              <span className="text-white font-semibold">
                High Production Costs:
              </span>{" "}
              The inefficiencies in manual inspection lead to increased
              production costs and customer dissatisfaction, especially in
              high-volume manufacturing environments.
            </div>
            <h3 className="text-[#047857] font-semibold text-xl my-2">
              Solution:
            </h3>
            <div className="text-gray-400">
              <span className="text-white font-semibold">
                Automated Defect Detection System:
              </span>{" "}
              Developed an AI-based system utilizing the YOLO (You Only Look
              Once) algorithm to identify and classify defects on PCBs in
              real-time.
              <br />
              <br />
              <span className="text-white font-semibold">
                Enhanced Production Efficiency:
              </span>{" "}
              This automated solution streamlines the quality control process,
              significantly reducing inspection time and improving defect
              detection accuracy, thereby lowering production costs and
              increasing customer satisfaction.
            </div>
          </div>
          <img
            src={PCB}
            alt=""
            className="hidden lg:block rounded-r-xl w-[450px]"
          />
        </div>
        {/* Anomaly and Defect Detection*/}
        <div className="bg-[#0F0F11] flex lg:flex-row flex-col justify-between lg:mx-36 m-5 rounded-xl border-[1px] border-gray-500 shadow-md shadow-black">
          <img
            src={Anomaly}
            alt=""
            className="block lg:hidden rounded-t-xl w-86"
          />
          <div className="m-6">
            <h1 className="text-white font-semibold text-2xl">
              Anomaly and Defect Detection
            </h1>
            <h3 className="text-[#047857] font-semibold text-xl my-2">
              Problem:
            </h3>
            <div className="text-gray-400 mb-2">
              <span className="text-white font-semibold"></span> Anomalies and
              defects are unavoidable and extremely costly in manufacturing. The
              average manufacturing company has a cost of poor quality at about
              20% of total sales.
            </div>
            <h3 className="text-[#047857] font-semibold text-xl my-2">
              Solution:
            </h3>
            <div className="text-gray-400">
              <span className="text-white font-semibold"></span> Automate
              anomaly and defect detection with unparalleled accuracy to
              minimize delays by catching issues as they arise.
              <br />
              <br />
              Get immediate alerts to avoid slowdowns and increase ROI.
              <br />
              <br />{" "}
            </div>
          </div>
          <img
            src={Anomaly}
            alt="PCB"
            className="hidden lg:block rounded-r-xl w-[450px]"
          />
        </div>
        {/* Robotic*/}
        <div className="bg-[#0F0F11] flex lg:flex-row flex-col justify-between lg:mx-36 m-5 rounded-xl border-[1px] border-gray-500 shadow-md shadow-black">
          <img src={PCB} alt="" className="block lg:hidden rounded-t-xl w-86" />
          <div className="m-6">
            <h1 className="text-white font-semibold text-2xl">
              Process Optimization
            </h1>
            <h3 className="text-[#047857] font-semibold text-xl my-2">
              Problem:
            </h3>
            <div className="text-gray-400 mb-2">
              <span className="text-white font-semibold"></span>Long production
              lines are difficult to monitor at all times. But without
              visibility, it’s difficult to know where costly bottlenecks and
              delays occur.
            </div>
            <h3 className="text-[#047857] font-semibold text-xl my-2">
              Solution:
            </h3>
            <div className="text-gray-400">
              <span className="text-white font-semibold"></span> Optimize
              processes with 24-hour visual data across your entire production
              line. Get unprecedented insights into machine use and labor
              productivity to maximize efficiency.
            </div>
          </div>
          <img
            src={robotics}
            alt=""
            className="hidden lg:block rounded-r-xl w-[450px]"
          />
        </div>

        {/* Safety*/}
        <div className="bg-[#0F0F11] flex lg:flex-row flex-col justify-between lg:mx-36 m-5 rounded-xl border-[1px] border-gray-500 shadow-md shadow-black">
          <img
            src={helmet}
            alt=""
            className="block lg:hidden rounded-t-xl w-86"
          />
          <div className="m-6">
            <h1 className="text-white font-semibold text-2xl">
              Safety Monitoring
            </h1>
            <h3 className="text-[#047857] font-semibold text-xl my-2">
              Problem:
            </h3>
            <div className="text-gray-400 mb-2">
              <span className="text-white font-semibold"></span>Manufacturing
              jobs have the highest rate of workplace injuries resulting in
              billions of dollars of lost revenue. Complex machinery with moving
              parts, Sharp edges, and hot surfaces makes them inherently
              dangerous.
            </div>
            <h3 className="text-[#047857] font-semibold text-xl my-2">
              Solution:
            </h3>
            <div className="text-gray-400">
              <span className="text-white font-semibold"></span> Easily monitor
              hazardous areas, track personal protective equipment compliance,
              and better manage machine usage in real-time. Get immediate alerts
              about safety issues so you can address them before or as they
              occur.{" "}
            </div>
          </div>
          <img
            src={helmet}
            alt=""
            className="hidden lg:block rounded-r-xl w-[450px]"
          />
        </div>

        <Footer />
      </div>
    </SlideIn>
  );
}
