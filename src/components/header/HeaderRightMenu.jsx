import styled from "@emotion/styled";
import "font-awesome/css/font-awesome.min.css";

function HeaderRightMenu() {
  const RightMenuContainer = styled.div`
    width: 33%;
    display: flex;
    justify-content: flex-end;
  `;

  const MarginIco = styled.div`
    margin-left: 25px;
  `;

  const Ico = styled.i`
    cursor: pointer;
  `;
  return (
    <RightMenuContainer>
      <MarginIco>
        <Ico className="fa-regular fa-user"></Ico>
      </MarginIco>
      <MarginIco>
        <Ico className="fa-regular fa-star"></Ico>
      </MarginIco>
      <MarginIco>
        <Ico className="fa-solid fa-bag-shopping"></Ico>
      </MarginIco>
      <MarginIco>
        <Ico className="fa-solid fa-magnifying-glass"></Ico>
      </MarginIco>
    </RightMenuContainer>
  );
}

export default HeaderRightMenu;
