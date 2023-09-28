import styled from "@emotion/styled";

import MainImg from "../components/common/MainImg";
import IndexSwiper from "../components/Swiper/IndexSwiper";
import FullScreenVideo from "../components/sections/FullScreenVideo";
import ImagesBanner from "../components/Sections/ImagesBanner";

function Index() {
  const Main = styled.div`
    min-height: 100px;
    /* height: 100vh; */
    /* background-image: url("https://www.zimmermann.com/media/wysiwyg/7__Luminosity_Check_Bodice_Skirt__8442TF231_8240SF231.OLCH.Olive-Check.jpg"); */
  `;

  return (
    <Main>
      <MainImg imgUrl="https://www.zimmermann.com/media/wysiwyg/7__Luminosity_Check_Bodice_Skirt__8442TF231_8240SF231.OLCH.Olive-Check.jpg" />
      <IndexSwiper />
      <FullScreenVideo videoUrl="https://www.youtube.com/embed/HG2v8W1Q5Z4?si=vZOhnaWdvW4lLUTL?autoplay=1&mute=1"></FullScreenVideo>
      <ImagesBanner />
      <FullScreenVideo videoUrl="https://www.youtube.com/embed/izoihUGxQho?si=ZLSeC3Ddr57meDYY?autoplay=1&mute=1"></FullScreenVideo>
    </Main>
  );
}

export default Index;
