import { useRef } from "react";

import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

// Import StyledComponents
import styled from "@emotion/styled";

import IndexSlide from "./IndexSlide";

const Section = styled.section`
  margin-bottom: 50px;
`;

const SectionHead = styled.div`
  display: flex;
  padding: 0 25px;
  align-items: center;
  margin-bottom: 70px;
`;

const Link = styled.a``;

const LinkContent = styled.span`
  font-size: 12px;
  padding: 0 11px;
  text-transform: uppercase;
`;

const Separator = styled.div`
  /* position: relative;
  left: 0; */
  margin-top: 2px;
  border-left: 1px solid var(--light-font);
  height: 10px;
  width: 0;
`;

const SwiperContainer = styled.div`
  margin: auto;
  width: 100%;
  /* height: 500px; */
`;

const StyledSwiper = styled(Swiper)`
  padding: 0 96px;
`;

const SectionFooter = styled.div`
  display: flex;
  justify-content: center;
  font-size: 10px;
  margin-top: 20px;
  text-transform: uppercase;
`;

const IndexSwiper = () => {
  const handleSlideChange = (swiper) => {
    if (
      swiper.activeIndex + swiper.params.slidesPerView >=
      swiper.slides.length
    ) {
      swiper.slideTo(0);
    }
  };
  return (
    <Section id="section-slider">
      <SectionHead>
        <Link>
          <LinkContent>Shop fall RTW 2023</LinkContent>
        </Link>
        <Separator />
        <Link>
          <LinkContent>Shop fall RTW 2023</LinkContent>
        </Link>
      </SectionHead>

      <SwiperContainer>
        <StyledSwiper
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={5}
          navigation
          // pagination={{ clickable: true }}
          // scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={(swiper) => handleSlideChange(swiper)}
        >
          <SwiperSlide>
            <IndexSlide
              imgUrl="https://www.zimmermann.com/media/catalog/product/1/_/1.8442tf231.olch.olive-check.jpg?quality=100&bg-color=255,255,255&fit=bounds&height=300&width=240&canvas=240:300"
              imgText="Luminosity check bodice"
            />
          </SwiperSlide>

          <SwiperSlide>
            <IndexSlide
              imgUrl="https://www.zimmermann.com/media/catalog/product/1/_/1.4957f23.gld.gold_1.jpg?quality=100&bg-color=255,255,255&fit=bounds&height=300&width=240&canvas=240:300"
              imgText="Pebble medium earrings"
            />
          </SwiperSlide>

          <SwiperSlide>
            <IndexSlide
              imgUrl="https://www.zimmermann.com/media/catalog/product/1/_/1.8240sf231.olch.olive.jpg?quality=100&bg-color=255,255,255&fit=bounds&height=300&width=240&canvas=240:300"
              imgText="Luminosity tulip skirt"
            />
          </SwiperSlide>

          <SwiperSlide>
            <IndexSlide
              imgUrl="https://www.zimmermann.com/media/catalog/product/1/_/1.4967f23.gld.gold_1.jpg?quality=100&bg-color=255,255,255&fit=bounds&height=300&width=240&canvas=240:300"
              imgText="Paint stroke cuff"
            />
          </SwiperSlide>

          <SwiperSlide>
            <IndexSlide
              imgUrl="https://www.zimmermann.com/media/catalog/product/1/_/1.8250jf231.olch.olive.jpg?quality=100&bg-color=255,255,255&fit=bounds&height=300&width=240&canvas=240:300"
              imgText="Luminosity wool coat"
            />
          </SwiperSlide>

          <SwiperSlide>
            <IndexSlide
              imgUrl="https://www.zimmermann.com/media/catalog/product/1/_/1.4920f23.gld.gold.jpg?quality=100&bg-color=255,255,255&fit=bounds&height=300&width=240&canvas=240:300"
              imgText="Zimmerman Phantasy ballerinas"
            />
          </SwiperSlide>

          <SwiperSlide>
            <IndexSlide
              imgUrl="https://www.zimmermann.com/media/catalog/product/1/_/1.4920f23.gld.gold.jpg?quality=100&bg-color=255,255,255&fit=bounds&height=300&width=240&canvas=240:300"
              imgText="Zimmerman Phantasy ballerinas"
            />
          </SwiperSlide>

          <SwiperSlide>
            <IndexSlide
              imgUrl="https://www.zimmermann.com/media/catalog/product/1/_/1.4920f23.gld.gold.jpg?quality=100&bg-color=255,255,255&fit=bounds&height=300&width=240&canvas=240:300"
              imgText="Zimmerman Phantasy ballerinas"
            />
          </SwiperSlide>

          <SwiperSlide>
            <IndexSlide
              imgUrl="https://www.zimmermann.com/media/catalog/product/1/_/1.4920f23.gld.gold.jpg?quality=100&bg-color=255,255,255&fit=bounds&height=300&width=240&canvas=240:300"
              imgText="Zimmerman Phantasy ballerinas"
            />
          </SwiperSlide>

          <SwiperSlide>{/* Empty. Lenght control */}</SwiperSlide>
        </StyledSwiper>
      </SwiperContainer>
      <SectionFooter>
        <span>Shop the colection</span>
      </SectionFooter>
    </Section>
  );
};

export default IndexSwiper;
