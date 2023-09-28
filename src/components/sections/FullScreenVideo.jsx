import styled from "@emotion/styled";
import React from "react";
const VideoSection = styled.section`
  margin-bottom: 60px;
`;

function FullScreenVideo({ videoUrl }) {
  return (
    <VideoSection>
      <div className="iframe-container">
        <iframe
          src={videoUrl}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
    </VideoSection>
  );
}

export default FullScreenVideo;
