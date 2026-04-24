import React, { useEffect } from "react";
import { createPortal } from "react-dom";

const LessonModal = ({ children, onClose }) => {
  const modalRoot = document.getElementById("modal-root");
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => (document.body.style.overflow = "auto");
  }, []);
  return createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* backdrop */}
      <div
        className="absolute inset-0 backdrop-blur-md bg-black/80"
        onClick={onClose}
      />

      {/* modal content */}
      <div className="relative z-10 rounded-lg w-[90%] max-w-[1256px]">
        {children}
      </div>
    </div>,
    modalRoot,
  );
};

export default LessonModal;
