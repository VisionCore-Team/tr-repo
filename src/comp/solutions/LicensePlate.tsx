"use client";
import "../../index.css";

import { SlideIn } from "../../helpers/fade/SlideIn";
import Navbar from "../navbar/navbar";
import Merc from "../../../public/project/Mercedes2.png";
import Footer from "../footer/footer";

export default function LicensePlate() {
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
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/project/car.png')`,
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
                VisionCore for <br />{" "}
              </span>{" "}
              Control & Security in Your Service
            </h1>

            <br />
            <p className="font-semibold mx-auto text-center text-white max-w-screen-md p-4 mt-4">
              Control and Security Combined in Your Service with License Plate
              Recognition{" "}
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
        {/* PCB*/}
        {/* PCB */}
        <div className="bg-[#0F0F11] flex-auto lg:flex-col justify-between lg:mx-36 m-5 rounded-xl border-[1px] border-gray-500 shadow-md shadow-black">
          <img
            src={Merc}
            alt=""
            className="block lg:hidden rounded-t-xl w-86 mx-auto mb-0"
          />
          <div className="m-6">
            <h1 className="text-white font-semibold text-2xl">
              Car Tracking and Plate Recognition
            </h1>
            <h3 className="text-[#047857] font-semibold text-xl my-2">
              Problem:
            </h3>
            <div className="text-gray-400 mb-2">
              <span className="text-white font-semibold">
                Operational Inefficiency:
              </span>{" "}
              Mercedes-Benz authorized service centers were experiencing a
              decline in profitability due to challenges in vehicle tracking and
              staff communication. Inefficient monitoring of vehicles within the
              service area led to delays in repair and delivery processes,
              negatively impacting operational efficiency and customer
              satisfaction. <br />
              <br />
              Additionally, inadequate communication among different staff
              levels caused operational disruptions and increased costs, further
              reducing the company's profitability.
            </div>
            <h3 className="text-[#047857] font-semibold text-xl my-2">
              Solution:
            </h3>
            <div className="text-gray-400">
              <span className="text-white font-semibold"></span>We developed an
              advanced real-time vehicle tracking system to ensure instant and
              efficient monitoring of vehicles within the service area. This
              system enabled immediate tracking of vehicle locations and
              statuses. Our user-friendly interface allowed all personnel to
              easily access real-time information, accelerating operational
              processes and enhancing efficiency.
              <br />
              <br />
              Furthermore, we improved communication and collaboration by
              ensuring seamless data flow between departments. As a result of
              these enhancements, we increased operational efficiency and
              security while maximizing customer satisfaction. Most importantly,
              these improvements led to up to a 40% increase in profitability.
            </div>
          </div>
          <img
            src={Merc}
            alt=""
            className="hidden lg:block rounded-r-xl w-[900px] mx-auto mb-0"
          />
        </div>
        <Footer />
      </div>
    </SlideIn>
  );
}
