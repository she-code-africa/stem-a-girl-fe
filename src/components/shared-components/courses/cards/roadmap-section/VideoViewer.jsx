import React, { useRef, useState } from "react";
import ReactPlayer from "react-player";

const VideoViewer = ({ lesson, onComplete }) => {
  console.log(lesson);
  const playerRef = useRef(null);
  const [completed, setCompleted] = useState(false);

  const handleProgress = ({ played }) => {
    // mark complete at 90%
    if (played >= 0.9 && !completed) {
      setCompleted(true);
      onComplete(lesson);
    }
  };

  return (
    <div className="w-full my-3">
      <ReactPlayer
        ref={playerRef}
        src={lesson.link}
        controls={true}
        width="100%"
        height="450px"
        className=""
        onProgress={handleProgress}
      />

      {!completed && (
        <button
          className="mt-4 bg-primaryPink hover:bg-primaryBtnHover transition-all duration-300 text-white px-4 py-2 rounded"
          onClick={() => onComplete(lesson)}
        >
          Mark as Completed
        </button>
      )}
    </div>
  );
};

export default VideoViewer;
