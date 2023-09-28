import { Link } from "react-router-dom";

import styled from "@emotion/styled";

const Section = styled.section`
  /* width: 100%; */
  padding: 0;
  margin-bottom: 60px;
`;

const ImagesContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledLink = styled(Link)`
  width: 32.8vw;
`;

const VerticalSeparator = styled.div`
  min-width: 3px;
  height: 100%;
`;

const Image = styled.img`
  width: 100%;
`;

const ImageText = styled.span`
  margin: 14px 0 7px;
  padding: 0 15px;
  font-size: 10px;
`;

function ImagesBanner() {
  return (
    <Section className="container">
      <ImagesContainer>
        <StyledLink>
          <Image
            src="https://www.zimmermann.com/media/wysiwyg/9_ZIM_F23_CAMPAIGN_HI-RES_8165SF232.BCBL.Book-Cover-Black_1.jpg"
            alt=""
          />
          <ImageText>Shop New Arrivals</ImageText>
        </StyledLink>

        <VerticalSeparator />

        <StyledLink>
          <Image
            src="https://www.zimmermann.com/media/wysiwyg/ZIM_barcelona-art_3.jpg"
            alt=""
          />
          <ImageText>Shop In store</ImageText>
        </StyledLink>

        <VerticalSeparator />

        <StyledLink>
          <Image
            src="https://www.zimmermann.com/media/wysiwyg/ZIM_Drop-13_Eyewear_Grid_2_3.jpg"
            alt=""
          />
          <ImageText>Shop Eyewear</ImageText>
        </StyledLink>
      </ImagesContainer>
    </Section>
  );
}

export default ImagesBanner;
