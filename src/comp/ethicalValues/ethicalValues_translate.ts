import { addTranslation } from "../../translate/Translate";

interface Translation {
    [language: string]: {
      [key: string]: string;
    };
  }
  
  const translations: Translation = {
    tr:{
        ethicalValues_title: "Etik Değerler",
        paragraph1_title: "",
        paragraph1_text: "",
        paragraph2_title: "",
        paragraph2_text: "",
    },
    en:{
        ethicalValues_title: "Ethical Values",
        paragraph1_title: "We Know That Artificial Intelligence Is For Human and We Develop Artificial Intelligence For The Benefit Of Humanity",
        paragraph1_text: "From drivers to autonomous vehicles; from surgeons to surgical robots, from pilots to autonomous aircraft; we are experiencing a transformation from a point where humans dominate technology to a point where technology dominates human. Artificial intelligence is the engine of this transformation. We develop innovative technologies and products in various artificial intelligence domains; however, we do this from a “human first” perspective. In this context, we develop decision support systems that make human life easier. In doing so, we aim to add value to human life.",
        paragraph2_title: "Our Approach",
        paragraph2_text: `We believe that in order to develop ethical Artificial Intelligence applications, AI developers must have ethical values. We conduct all our activities within the boundaries of laws, rules, and moral values.
                
          We respect all kinds of personal and private data, and do our best for protecting such data with great sensitivity.
                
          We prioritize safety. In risky and delicate cases, we do not leave the control entirely to artificial intelligence. In such cases, control remains with human experts at all times.
                
          We offer reliable solutions that work in real life. In artificial intelligence systems, it might be possible to produce fake results that do not reflect reality but still impress the target audience. We always make clear what is technically achievable and what is not, and we never undertake tasks that are not technically possible for AI.
                
          By developing AI solutions, we aim to produce benefits for society in all aspects. We do not take part in projects that we deem problematic in terms of ethics.`,
    }
};

addTranslation(translations);