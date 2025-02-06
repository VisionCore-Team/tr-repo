"use client";
import { useState } from 'react';
import { pdfjs, Document, Page } from 'react-pdf';
import { useTranslation } from 'react-i18next';

import { SlideIn } from "../../helpers/fade/SlideIn";
import "../../index.css";
import Header from "../header/header";
import './brochure_translate';

pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.6.347/pdf.worker.min.js`;

export default function Brochure() {
  const { t } = useTranslation();
  const [numPages, setNumPages] = useState<number>(0);
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [brochureLang, setBrochureLang] = useState<boolean>(false);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }): void {
    setNumPages(numPages);
  }

  // Handlers for the page navigation
  const goToNextPage = () => {
    if (pageNumber < numPages) setPageNumber(prevPage => prevPage + 1);
  };
  
  const goToPrevPage = () => {
    if (pageNumber > 1) setPageNumber(prevPage => prevPage - 1);
  };

  return (
    <>
      <Header name={t('brochure')} />
      <SlideIn delay={0.8} duration={0.3}>
        <div className=" flex items-center flex-col py-5 gap-5">
          <button 
            className='bg-white text-black py-2 px-4 rounded-lg active:bg-black active:text-white'
            onClick={() => setBrochureLang(!brochureLang)}
            >
              {brochureLang ? t('english') : t('turkish')}
          </button>
          <div className="pdf-container">
            <Document
              file={brochureLang ? "/brochures/brochure_tr.pdf" : "/brochures/brochure_eng.pdf"}
              onLoadSuccess={onDocumentLoadSuccess}
            >
              {Array.from(new Array(numPages), (el, index) => (
                <div
                  key={`page_${index + 1}`}
                  style={{ display: pageNumber === index + 1 ? 'block' : 'none' }}
                >
                  <Page pageNumber={index + 1} />
                </div>
              ))}
            </Document>
          </div>
          {/* Navigation buttons */}
          <div className="flex items-center gap-5">
            <button
              className="bg-white text-black py-2 px-4 rounded-lg active:bg-black active:text-white"
              onClick={goToPrevPage}
              disabled={pageNumber === 1}
            >
              {t('previous')}
            </button>
            <p className="text-white">
              {t('page')} {pageNumber} / {numPages}
            </p>
            <button
              className="bg-white text-black py-2 px-4 rounded-lg active:bg-black active:text-white"
              onClick={goToNextPage}
              disabled={pageNumber === numPages}
            >
              {t('next')}
            </button>
          </div>
        </div>
      </SlideIn>
    </>
  );
}
