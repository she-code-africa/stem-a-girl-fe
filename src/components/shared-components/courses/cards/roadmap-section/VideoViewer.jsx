import React from "react";

const VideoViewer = ({ lesson }) => {
  // const formatDrivePreviewLink = (url) => {
  //   if (!url) return "";

  //   const match = url.match(/\/d\/([^/]+)/);

  //   if (!match) return url; // fallback if not a drive link

  //   const fileId = match[1];

  //   return `https://drive.google.com/file/d/${fileId}/preview`;
  // };

  return (
    <div className="w-full my-3">
      <iframe
        title={lesson.title}
        src={lesson.videoUrl}
        // src={formatDrivePreviewLink(lesson.videoUrl)}
        // src={"https://www.youtube.com/embed/h71dBFr1wsY?si=AqxfWQQXz1hfSfbV"}
        width="100%"
        height="600px"
        allow="autoplay"
        allowFullScreen
        style={{ border: "none" }}
      ></iframe>
    </div>
  );
};

export default VideoViewer;
