import { useEffect, useState } from "react";

import styled from "@emotion/styled";

import MainImg from "../components/common/MainImg";
import IndexSwiper from "../components/Swiper/IndexSwiper";
import FullScreenVideo from "../components/sections/FullScreenVideo";
import ImagesBanner from "../components/sections/ImagesBanner";

function Index() {
  const [result, setResult] = useState(0);

  const responsiveSize = () => {
    const headerWidth = document.getElementById("header").offsetHeight;
    const footerWidth = document.getElementById("footer").offsetHeight;
    setResult(headerWidth + footerWidth);
  };

  useEffect(() => {
    responsiveSize();
  }, []);

  const Main = styled.div`
    min-height: calc(100vh - ${result}px);
    /* height: 100vh; */
    /* background-image: url("https://www.zimmermann.com/media/wysiwyg/7__Luminosity_Check_Bodice_Skirt__8442TF231_8240SF231.OLCH.Olive-Check.jpg"); */
  `;

  return (
    <Main>
      <MainImg imgUrl="https://www.zimmermann.com/media/wysiwyg/7__Luminosity_Check_Bodice_Skirt__8442TF231_8240SF231.OLCH.Olive-Check.jpg" />
      <IndexSwiper />
      <FullScreenVideo
        videoUrl="https://www.youtube.com/embed/ypD6nlc2PCg?si=NXoJJytuobm72Ugx"
        title="video 1"
        width="100%"
      />
      <ImagesBanner />
      <FullScreenVideo videoUrl="https://www.youtube.com/embed/izoihUGxQho?si=ZLSeC3Ddr57meDYY?autoplay=1&mute=1"></FullScreenVideo>
    </Main>
  );
}

export default Index;
