import styled from "@emotion/styled";
import React from "react";

function FullScreenVideo({ videoUrl, title, width }) {
  const VideoSection = styled.section`
    /* margin: auto; */
    padding: 0;
    ${width && `width: ${width};`};
  `;
  return (
    <VideoSection className="container">
      <div className="iframe-container">
        <iframe
          src={videoUrl}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
    </VideoSection>
  );
}

export default FullScreenVideo;
