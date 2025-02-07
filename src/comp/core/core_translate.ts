import { addTranslation } from "../../translate/Translate";

interface Translation {
    [language: string]: {
      [key: string]: string;
    };
  }
  
  const translations: Translation = {
    tr:{
        core_title: "Bilgisayarla Görme Modellerini Keşfedin",
        core1_title: "",
        core1_text: "",
        core2_title: "",
        core2_text: "",
        core3_title: "",
        core3_text: "",
        core4_title: "",
        core4_text: "",
    },
    en:{
        core_title: "Explore Core Computer Vision Models",
        core1_title: "Classification",
        core1_text: "Classification is fundamental to computer vision and requires classifying each object in an image with an identifying label or tag (i.e. cat, dog, bicycle). Classification does not localize objects in an image but rather simply identifies objects in the image. It’s like holding up a flash card and asking the model if there is a dog in the image. Of the four primary computer vision models, classification requires the least amount of processing and is ideal for use cases like room occupancy where you simply need to know if a person is in the frame.",
        core2_title: "Object Detection",
        core2_text: "Object detection adds another layer of sophistication to classification models. Like classification, object detection also requires each object in an image to be labeled; however, object detection locates the object(s) within the image and provides detailed spatial information – typically through the use of an annotated bounding box. For example, object detection could identify a hard hat on a construction worker’s head. Object detection results in more specific analysis, and has wide ranging use cases.",
        core3_title: "Semantic Segmentation",
        core3_text: "Semantic segmentation is even more specific than object detection in that it assigns every pixel to a class (a defined object) in an image. Semantic segmentation is a more detailed way to identify objects in an image. Whereas a bounding box might include details in the background of the image (not just the annotated object), semantic segmentation more closely masks the object in a net. Analyzing details at the pixel level allows for extremely precise object identification and the reason why semantic segmentation is useful in detecting defects and anomalies. When pixels are off within the same object (like bottle cap), it indicates a defect.",
        core4_title: "Instance Segmentation",
        core4_text: "Instance segmentation provides the highest level of detail in identifying objects in an image. Like semantic segmentation, instance segmentation assigns every pixel to a class (object mask) except background pixels in an image. However, instance segmentation goes a step further to distinguish separate instances of one class in one image (i.e. 4 different dogs in the same image). To do this, it uses both object detection and semantic segmentation techniques. Because of this sophisticated level of detail, instance segmentation is often used in the medical industry.",
    }
};

addTranslation(translations);