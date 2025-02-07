"use client";
import { useState } from "react";
import { pdfjs, Document, Page } from "react-pdf";
import { useTranslation } from "react-i18next";

import { SlideIn } from "../../helpers/fade/SlideIn";
import Header from "../header/header";
import "./brochure_translate";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const brochureTr = "/brochures/brochure_tr.pdf";
const brochureEn = "/brochures/brochure_eng.pdf";

export default function Brochure() {
  const { t } = useTranslation();
  const [numPages, setNumPages] = useState<number>(0);
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [brochureLang, setBrochureLang] = useState<boolean>(false);

  const handleLoadError = (error: Error) => {
    console.error("PDF yükleme hatası:", error);
  };

  const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
    setNumPages(numPages);
    setPageNumber(1);
  };

  const goToFirstPage = () => setPageNumber(1);
  const goToLastPage = () => setPageNumber(numPages);
  const goToPrevPage = () => setPageNumber((prev) => Math.max(1, prev - 1));
  const goToNextPage = () =>
    setPageNumber((prev) => Math.min(numPages, prev + 1));

  return (
    <>
      <Header name={t("brochure")} />
      <SlideIn delay={0.8} duration={0.3}>
        <div className="flex items-center flex-col py-5 gap-5">
          <button
            className="bg-white text-black py-2 px-4 rounded-lg hover:bg-gray-100 active:bg-black active:text-white transition-colors"
            onClick={() => setBrochureLang(!brochureLang)}
          >
            {brochureLang ? t("english") : t("turkish")}
          </button>

          <div className="pdf-container ">
            <Document
              key={brochureLang ? "tr" : "en"}
              file={brochureLang ? brochureTr : brochureEn}
              onLoadSuccess={onDocumentLoadSuccess}
              onLoadError={handleLoadError}
            >
              {Array.from({ length: numPages }, (_, index) => (
                <div
                  key={`page_${index + 1}`}
                  className={`${pageNumber === index + 1 ? "block" : "hidden"}`}
                >
                  <Page
                    pageNumber={index + 1}
                    width={800}
                    renderTextLayer={false}
                    renderAnnotationLayer={false}
                  />
                </div>
              ))}
            </Document>
          </div>

          <div className="flex flex-col items-center gap-3">
            <div className="pdfbuttons flex items-center gap-2">
              <button
                className="bg-white text-black py-2 px-4 rounded-lg hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                onClick={goToFirstPage}
                disabled={pageNumber === 1}
              >
                {t("firstPage")}
              </button>
              <button
                className="bg-white text-black py-2 px-4 rounded-lg hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                onClick={goToPrevPage}
                disabled={pageNumber === 1}
              >
                {t("previous")}
              </button>
              <span className="bg-white text-black py-2 px-4 rounded-lg min-w-[120px] text-center">
                {t("page")} {pageNumber} / {numPages}
              </span>
              <button
                className="bg-white text-black py-2 px-4 rounded-lg hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                onClick={goToNextPage}
                disabled={pageNumber === numPages}
              >
                {t("next")}
              </button>
              <button
                className="bg-white text-black py-2 px-4 rounded-lg hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                onClick={goToLastPage}
                disabled={pageNumber === numPages}
              >
                {t("lastPage")}
              </button>
            </div>

            <div className="pdfGoButtons flex items-center gap-2">
              <input
                type="number"
                value={pageNumber}
                onChange={(e) => {
                  const newPage = Math.min(
                    Math.max(1, parseInt(e.target.value)),
                    numPages
                  );
                  setPageNumber(isNaN(newPage) ? 1 : newPage);
                }}
                className="w-20 px-3 py-2 rounded-lg text-center"
                min="1"
                max={numPages}
              />
              <button
                className="bg-white text-black py-2 px-4 rounded-lg hover:bg-gray-100 transition-colors"
                onClick={() =>
                  setPageNumber(Math.min(Math.max(1, pageNumber), numPages))
                }
              >
                {t("goToPage")}
              </button>
            </div>
          </div>
        </div>
      </SlideIn>
    </>
  );
}
