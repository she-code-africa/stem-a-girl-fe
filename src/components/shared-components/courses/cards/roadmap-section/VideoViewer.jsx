import React, { useRef, useState } from "react";
import ReactPlayer from "react-player";

const VideoViewer = ({ lesson, onComplete }) => {
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
    <div className="w-full">
      <ReactPlayer
        ref={playerRef}
        url={lesson.link}
        controls
        width="100%"
        height="400px"
        onProgress={handleProgress}
      />

      {!completed && (
        <button
          className="mt-4 bg-black text-white px-4 py-2 rounded"
          onClick={() => onComplete(lesson)}
        >
          Mark as Completed
        </button>
      )}
    </div>
  );
};

export default VideoViewer;
