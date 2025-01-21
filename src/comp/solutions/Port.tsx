"use client";
import "../../index.css";
import { SlideIn } from "../fade/SlideIn";
import Navbar from "../navbar/navbar";
import Footer from "../footer/footer";
// Import images from the public directory
import containerAssetTracking from "../../../public/project/Container and Asset Tracking.png";
import containerDamageDetection from "../../../public/project/Container Damage Detection.jpeg";
import hazardousMaterialDetection from "../../../public/project/HAZARDOUS MATERIAL IDENTIFICATION.webp";
import LicensePlateAndContainerTrackingSystens from "../../../public/project/License Plate and Container Tracking Systems.webp";
import securityAndSurveillance from "../../../public/project/Security and Surveillance.jpeg";
import port from "../../../public/project/port.jpeg";

export default function Port() {
  const cards = [
    {
      id: 1,
      title: "Security and Surveillance",
      img: securityAndSurveillance,
      description: "Real-time Monitoring: AI-powered cameras monitor port areas 24/7, detecting unauthorized access and suspicious activities. These systems identify risks at an early stage through image processing and motion analysis, promptly alerting security personnel. Additionally, real-time monitoring systems help prevent in-port and workplace accidents, enhancing worker safety and reducing operational disruptions",
    },
    {
        id: 2,
        title: "Container and Asset Tracking",
        img: containerAssetTracking,
        description: "VisionCore's advanced AI solutions bring efficiency and innovation to the logistics and transportation industry. The system offers a specialized technology capable of recognizing shipping container identification numbers with 99% accuracy, adhering to international standards such as ISO 6346 (BIC) and ILU codes. Customizable code reading capabilities allow for the expansion of operations and utilization in various scenarios.",
      },
    {
      id: 3,
      title: "License Plate Detection & Tracking",
      img: LicensePlateAndContainerTrackingSystens,
      description: "Automatic License Plate and Container Recognition: These systems instantly recognize and record vehicles and cargo entering and exiting port areas. Powered by artificial intelligence, these systems quickly and accurately detect license plates and container numbers, eliminating manual data entry errors. They facilitate the tracking of cargo and vehicle flow, optimize traffic management within the port, and prevent potential bottlenecks.",
    },
    
    {
      id: 4,
      title: "Container Damage Detection",
      img: containerDamageDetection,
      description: "In the logistics and transportation industry, container integrity is crucial for operational continuity and customer satisfaction. Traditional, manual damage inspection methods are time-consuming, labor-intensive, and prone to human error. This is where the AI-powered Automated Container Damage Detection Model comes into play. This model enables the detection of container damage, identifying damage types such as holes, dents, and rust.",
    },
    {
      id: 5,
      title: "Hazardous Material Detection",
      img: hazardousMaterialDetection,
      description: " Safety is paramount during the transportation of hazardous materials. AI-powered systems enable rapid identification of hazardous substances, ensuring the correct implementation of safety measures and compliance with international regulations. These systems reduce human error, strengthen risk management, and facilitate quick action in emergencies. AI-based data analytics is crucial for the efficient management of port operations. These systems rapidly analyze operational data, providing real-time reports and customizable dashboards. By analyzing historical data, they forecast future trends, supporting strategic decision-making and increasing efficiency.",
    },
  ];
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
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('${port}')`,
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
              Maximum Efficiency in Port Operations with Artificial Intelligence
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
        {/* Project Sections */}
        <div className="flex flex-col justify-center text-center mt-20 mx-24">
          <h1 className="text-4xl text-gray-100 mb-7 font-bold">
            {" "}
            Maximum Efficiency in Port Operations with Artificial Intelligence
          </h1>
          <h3 className="text-lg text-gray-400 mb-7">
            At VisionCore, we're passionate about helping industries overcome
            their biggest challenges with our enterprise AI solutions. By
            partnering with our clients, we co-create innovative solutions that
            drive growth and set new industry standards.
          </h3>
          <h2 className="text-4xl text-gray-100 mb-7 font-bold">
            {" "}
            Use Cases on Port Operations
          </h2>
        </div>
        {cards.map((card) => (
            <div
              key={card.id}
                className="bg-[#0F0F11] flex lg:flex-row flex-col justify-between lg:mx-36 m-5 rounded-xl border-[1px] border-gray-500 shadow-md shadow-black"
            >

                <img
                    src={card.img}
                    alt=""
                    className="block lg:hidden rounded-t-xl w-86 "
                />
                <div className="m-6 my-auto">
                    <h1 className="text-white mt-4 font-semibold text-2xl">
                    {card.title}
                    </h1>
                    <div className="text-gray-400 mb-2 mt-6">
                    {card.description}
                    </div>
                </div>
                <img
                    src={card.img}
                    alt=""
                    className=" hidden lg:block rounded-r-xl w-[450px]"
                />
            </div>
        ))}


        <Footer />
      </div>
    </SlideIn>
  );
}
