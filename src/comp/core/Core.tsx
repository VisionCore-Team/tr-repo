"use client";

import Navbar from "../navbar/navbar";
import image1 from "../../../public/img/classification.webp";
import image2 from "../../../public/img/object_detection.webp";
import image3 from "../../../public/img/semantic.webp";
import image4 from "../../../public/img/instance.webp";
import contactBackground from "../../../public/bg/islemci.jpeg";
import { SlideIn } from "../../helpers/fade/SlideIn";
import Header from "../header/header";

const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
  e.preventDefault();
  const targetElement = document.querySelector(`#${sectionId}`);
  if (targetElement) {
    targetElement.scrollIntoView({ behavior: "smooth" });
  }
};

export default function Blog() {
  const sections = [
    { id: "classification", label: "Classification" },
    { id: "object-detection", label: "Object Detection" },
    { id: "semantic-segmentation", label: "Semantic Segmentation" },
    { id: "instance-segmentation", label: "Instance Segmentation" },
  ];

  return (
    <div className="blog-page">
      <Header name="Explore Core Computer Vision Models" />
      <div style={{ display: "flex", flexDirection: "column", gap: "1rem", justifyContent: "center", alignItems: "center" }}>
        <div className="container" style={{paddingTop: "2rem"}}>
          <div className="bg-gray-900 bg-opacity-80 p-4 mb-8 rounded-md mx-4 md:mx-0 sm:mx-0">
            <ul className="flex justify-center space-x-4 md:space-x-8">
              {sections.map((section) => (
                <li key={section.id}>
                  <a
                    href={`#${section.id}`}
                    onClick={(e) => handleClick(e, section.id)}
                    className="text-white font-medium hover:text-orange-400 transition-colors"
                  >
                    {section.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Blog Entry Container */}
          <SlideIn delay={0.2} duration={0.8}>
            <div id="classification" className="flex flex-col lg:flex-row mb-8 mt-16 border-[1px] border-gray-500 bg-gray-800 bg-opacity-70 p-6 rounded-lg shadow-md">
              <img
                src={image1}
                alt="Classification model illustrating fundamental computer vision concepts"
                className="rounded-lg h-96 w-full lg:w-1/2 object-cover"
              />
              <div className="lg:ml-6 mt-4 text-gray-100">
                <h3 className="font-semibold text-2xl">Classification</h3>
                <hr className="bg-orange-400 h-1 w-16 mb-4" />
                <p className="font-light mt-2">
                  Classification is fundamental to computer vision and requires
                  classifying each object in an image with an identifying label or
                  tag (i.e. cat, dog, bicycle). Classification does not localize
                  objects in an image but rather simply identifies objects in the
                  image. It’s like holding up a flash card and asking the model if
                  there is a dog in the image. Of the four primary computer vision
                  models, classification requires the least amount of processing and
                  is ideal for use cases like room occupancy where you simply need
                  to know if a person is in the frame.
                </p>
              </div>
            </div>
          </SlideIn>

          {/* Blog Entry Container */}
          <SlideIn delay={0.3} duration={0.8}>


            <div id="object-detection" className="flex flex-col lg:flex-row mt-16 border-[1px]  border-gray-500 bg-gray-800 bg-opacity-70 p-6 rounded-lg shadow-md">
              <div className="lg:mr-6 mt-4 lg:text-right text-gray-100">
                <img
                  src={image2}
                  alt="Object detection model with bounding boxes for identifying objects in images"
                  className="block lg:hidden rounded-lg h-96 w-full lg:w-1/2 object-cover"
                />
                <h3 className="font-semibold mt-4 text-2xl">Object Detection</h3>
                <p className="font-light mt-2">
                  Object detection adds another layer of sophistication to
                  classification models. Like classification, object detection also
                  requires each object in an image to be labeled; however, object
                  detection locates the object(s) within the image and provides
                  detailed spatial information – typically through the use of an
                  annotated bounding box. For example, object detection could
                  identify a hard hat on a construction worker’s head. Object
                  detection results in more specific analysis, and has wide ranging
                  use cases.
                </p>
              </div>
              <img
                src={image2}
                alt="Object detection model with bounding boxes for identifying objects in images"
                className="hidden lg:block rounded-lg h-96 w-full lg:w-1/2 object-cover"
              />
            </div>
          </SlideIn>

          {/* Blog Entry Container */}
          <SlideIn delay={0.4} duration={0.8}>
            <div id="semantic-segmentation" className="flex flex-col lg:flex-row mb-8 mt-16 border-[1px]  border-gray-500 bg-gray-800 bg-opacity-70 p-6 rounded-lg shadow-md">
              <img
                src={image3}
                alt="Semantic segmentation model showcasing pixel-wise classification"
                className="rounded-lg h-96 w-full lg:w-1/2 object-cover"
              />
              <div className="lg:ml-6 text-gray-100">
                <h3 className="font-semibold mt-4 text-2xl">Semantic Segmentation</h3>
                <hr className="bg-orange-400 h-1 w-16 mb-4" />
                <p className="font-light mt-2">
                  Semantic segmentation is even more specific than object detection
                  in that it assigns every pixel to a class (a defined object) in an
                  image. Semantic segmentation is a more detailed way to identify
                  objects in an image. Whereas a bounding box might include details
                  in the background of the image (not just the annotated object),
                  semantic segmentation more closely masks the object in a net.
                  Analyzing details at the pixel level allows for extremely precise
                  object identification and the reason why semantic segmentation is
                  useful in detecting defects and anomalies. When pixels are off
                  within the same object (like bottle cap), it indicates a defect.
                </p>
              </div>
            </div>
          </SlideIn>

          {/* Blog Entry Container */}
          <SlideIn delay={0.5} duration={0.8}>
            <div id="instance-segmentation" className="flex flex-col lg:flex-row mt-16 border-[1px] border-gray-500 bg-gray-800 bg-opacity-70 p-6 rounded-lg shadow-md">
              <div className="lg:mr-6 lg:text-right text-gray-100">
                <img
                  src={image4}
                  alt="Instance segmentation model distinguishing separate instances of objects"
                  className="block lg:hidden rounded-lg h-96 w-full lg:w-1/2 object-cover"
                />
                <h3 className="font-semibold mt-4 text-2xl">Instance Segmentation</h3>
                <p className="font-light mt-2">
                  Instance segmentation provides the highest level of detail in
                  identifying objects in an image. Like semantic segmentation,
                  instance segmentation assigns every pixel to a class (object mask)
                  except background pixels in an image. However, instance
                  segmentation goes a step further to distinguish separate instances
                  of one class in one image (i.e. 4 different dogs in the same
                  image). To do this, it uses both object detection and semantic
                  segmentation techniques. Because of this sophisticated level of
                  detail, instance segmentation is often used in the medical
                  industry.
                </p>
              </div>
              <img
                src={image4}
                alt="Instance segmentation model distinguishing separate instances of objects"
                className="hidden lg:block rounded-lg h-96 w-full lg:w-1/2 object-cover"
              />
            </div>
          </SlideIn>

        </div>
      </div>
    </div>
  );
}
