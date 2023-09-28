import styled from "@emotion/styled";

const Slide = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const SlideImage = styled.img`
  width: 197px;
`;

const SlideText = styled.span`
  font-size: 9px;
  text-transform: uppercase;
  text-align: center;
  line-height: 15px;
`;

function IndexSlide({ imgUrl, imgText }) {
  return (
    <Slide>
      <SlideImage src={imgUrl} alt="" />
      <SlideText>{imgText}</SlideText>
    </Slide>
  );
}

export default IndexSlide;
