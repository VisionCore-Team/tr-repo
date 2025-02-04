"use client";

import Navbar from "../navbar/navbar";
import { SlideIn } from "../../helpers/fade/SlideIn";

export default function EthicalValues() {
  return (
    <div>
      <div className="bg-black bg-opacity-50 w-full p-6 rounded">
        <h1 className="text-center text-5xl mt-10 mb-10 font-semibold text-white">
          Ethical Values
        </h1>
        <div className="flex flex-col lg:flex-row mb-24">
          <SlideIn delay={0.2} duration={0.8}>
            <div className="ml-0 lg:ml-6 lg:my-auto"> {/* Yalnızca büyük ekranlarda sol taraftan boşluk ekleyin */}
              <h3 className="text-left text-3xl font-semibold mt-5 text-white mb-4">
                We Know That Artificial Intelligence Is For Human and We Develop
                Artificial Intelligence For The Benefit Of Humanity
              </h3>
              <p style={{ fontSize: "20px" }} className="font-light text-lg text-sky-200">
                From drivers to autonomous vehicles; from surgeons to surgical
                robots, from pilots to autonomous aircraft; we are experiencing a
                transformation from a point where humans dominate technology to a
                point where technology dominates human. Artificial intelligence is
                the engine of this transformation. We develop innovative
                technologies and products in various artificial intelligence
                domains; however, we do this from a “human first” perspective. In
                this context, we develop decision support systems that make human
                life easier. In doing so, we aim to add value to human life.
              </p>
            </div>
            

            <h3 className="text-left text-4xl font-semibold text-white mb-4 mt-6 p-6">
            Our Approach
          </h3>
          <p style={{ fontSize: "20px" }} className="font-light text-lg text-sky-200 m-3">
            We believe that in order to develop ethical Artificial Intelligence applications, AI developers must have ethical values. We conduct all our activities within the boundaries of laws, rules, and moral values.
          </p>
          <p style={{ fontSize: "20px" }} className="font-light text-lg text-sky-200 m-3">
            We respect all kinds of personal and private data, and do our best for protecting such data with great sensitivity.
          </p>
          <p style={{ fontSize: "20px" }} className="font-light text-lg text-sky-200 m-3">
            We prioritize safety. In risky and delicate cases, we do not leave the control entirely to artificial intelligence. In such cases, control remains with human experts at all times.
          </p>
          <p style={{ fontSize: "20px" }} className="font-light text-lg text-sky-200 m-3">
            We offer reliable solutions that work in real life. In artificial intelligence systems, it might be possible to produce fake results that do not reflect reality but still impress the target audience. We always make clear what is technically achievable and what is not, and we never undertake tasks that are not technically possible for AI.
          </p>
          <p style={{ fontSize: "20px" }} className="font-light text-lg text-sky-200 m-3">
            By developing AI solutions, we aim to produce benefits for society in all aspects. We do not take part in projects that we deem problematic in terms of ethics.
          </p>
          </SlideIn>
        </div>
      </div>
      
          

    </div>
  );
}
