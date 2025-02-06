"use client";
import { Viewer } from '@react-pdf-viewer/core';
import { pdfjs } from 'react-pdf';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

import { SlideIn } from "../../helpers/fade/SlideIn";
import "../../index.css";
import Header from "../header/header";

pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.10.111/pdf.worker.min.js`;

export default function Brochure() {
  const defaultLayoutPluginInstance = defaultLayoutPlugin();

  return (
    <>
      <Header name="Broşür" />
      <SlideIn delay={0.8} duration={0.3}>
        <Viewer fileUrl="../../../public/brochures/brochure_eng" plugins={[defaultLayoutPluginInstance]} />
      </SlideIn>
    </>
  );
}
