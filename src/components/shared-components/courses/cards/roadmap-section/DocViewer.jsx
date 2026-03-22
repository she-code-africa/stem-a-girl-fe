import React, { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";

import "react-pdf/dist/Page/TextLayer.css";
import "react-pdf/dist/Page/AnnotationLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

const DocViewer = ({ lesson, onComplete }) => {
  const [numPages, setNumPages] = useState(null);

  const onLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  return (
    <>
      <div className="w-full mt-3 h-[500px] lg:h-[600px] overflow-y-auto flex flex-col items-center gap-4 p-4">
        <Document
          file="https://mozilla.github.io/pdf.js/web/compressed.tracemonkey-pldi-09.pdf"
          onLoadSuccess={onLoadSuccess}
        >
          {Array.from(new Array(numPages), (_, index) => (
            <Page
              key={index}
              pageNumber={index + 1}
              width={500}
              className="shadow-md"
              onLoadSuccess={() => {
                // mark complete when last page renders
                if (index + 1 === numPages) {
                  onComplete(lesson);
          
                }
              }}
            />
          ))}
        </Document>
      </div>

    </>
  );
};

export default DocViewer;
