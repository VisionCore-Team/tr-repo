import image1 from "/img/classification.webp";
import image2 from "/img/object_detection.webp";
import image3 from "/img/semantic.webp";
import image4 from "/img/instance.webp";

export interface CoreData {
  id: string;
  image: string;
  title: string;
  text: string;
}

export interface CoreLabelData {
  id: string;
  label: string;
}

export const coreData: CoreData[] = [
  {
    id: "classification",
    image: image1,
    title: "core1_title",
    text: "core1_text",
  },
  {
    id: "object-detection",
    image: image2,
    title: "core2_title",
    text: "core2_text",
  },
  {
    id: "semantic-segmentation",
    image: image3,
    title: "core3_title",
    text: "core3_text",
  },
  {
    id: "instance-segmentation",
    image: image4,
    title: "core4_title",
    text: "core4_text",
  },
];

export const coreLabelData: CoreLabelData[] = [
  {
    id: "classification",
    label: "core1_title",
  },
  {
    id: "object-detection",
    label: "core2_title",
  },
  {
    id: "semantic-segmentation",
    label: "core3_title",
  },
  {
    id: "instance-segmentation",
    label: "core4_title",
  },
];

export default coreData;
