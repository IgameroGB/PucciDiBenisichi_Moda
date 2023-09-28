import styled from "@emotion/styled";

const HeroContainer = styled.section`
  position: relative;
  padding: 0;
`;

const Image = styled.img`
  width: 100%;
  cursor: pointer;
`;

const GoDownItemContainer = styled.div`
  width: 100%;
  /* height: 0px; */
  position: absolute;
  bottom: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const GoDownBox = styled.div`
  width: 33px;
  height: 33px;
  border-radius: 100%;
  border: 1px solid var(--white-color);

  &:before {
    cursor: pointer;
    position: relative;
    display: block;
    left: 26%;
    top: 15%;
    transform: rotate(45deg);
    content: "";
    width: 15px;
    height: 15px;
    border-right: 1px solid white;
    border-bottom: 1px solid white;
  }
`;

// const GoDownArrow = styled.div`
//   display: inline;
//   width: 20px;
//   height: 20px;
//   transform: rotate(45deg);
//   border-top: 1px solid var(--white-color);
//   border-left: 1px solid var(--white-color);
// `;

function MainImg({ imgUrl }) {
  return (
    <HeroContainer className="container">
      <Image src={imgUrl} alt="Banner principal" />
      <a href="#section-slider">
        <GoDownItemContainer>
          <GoDownBox></GoDownBox>
        </GoDownItemContainer>
      </a>
    </HeroContainer>
  );
}

export default MainImg;
