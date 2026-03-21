import React, { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const DocViewer = ({ lesson, onComplete }) => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  // convert google drive link
  const fileUrl = lesson.link.replace("/view", "/preview");

  const onLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  const nextPage = () => {
    if (pageNumber < numPages) {
      const next = pageNumber + 1;
      setPageNumber(next);

      if (next === numPages) {
        onComplete(lesson);
      }
    }
  };

  const prevPage = () => {
    if (pageNumber > 1) {
      setPageNumber(pageNumber - 1);
    }
  };

  return (
    <div className="flex flex-col items-center">
      <Document file={fileUrl} onLoadSuccess={onLoadSuccess}>
        <Page pageNumber={pageNumber} />
      </Document>

      <div className="flex gap-4 mt-4">
        <button onClick={prevPage} disabled={pageNumber === 1}>
          Prev
        </button>

        <span>
          Page {pageNumber} of {numPages}
        </span>

        <button onClick={nextPage} disabled={pageNumber === numPages}>
          Next
        </button>
      </div>
    </div>
  );
};

export default DocViewer;
