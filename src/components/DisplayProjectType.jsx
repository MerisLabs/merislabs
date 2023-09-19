import React from "react";

export const DisplayProjectType = ({ project }) => {
  if (!project?.video) {
    return null;
  }

  const videoType = project?.video.split(".")[1];
  const imageSrc = `/images/${projec?.video}`;
  const videoSrc = `${project?.video}`;

  const imageStyle = {
    borderRadius: "10px",
    padding: "0 40px",
    borderRadius: "10px",
  };

  switch (videoType) {
    case "png":
    case "jpg":
    case "jpeg":
      return (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={imageSrc}
          alt={project.name}
          width="300px"
          height="auto"
          style={imageStyle}
        />
      );
    default:
      if (
        project.video?.startsWith("https://") ||
        project.video?.startsWith("http://") ||
        project.video?.startsWith("www.")
      ) {
        return (
          <iframe
            src={videoSrc}
            width="700px"
            height="auto"
            style={imageStyle}
          />
        );
      }
  }
};
