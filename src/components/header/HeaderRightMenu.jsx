import { Link } from "react-router-dom";

import styled from "@emotion/styled";
import "bootstrap-icons/font/bootstrap-icons.css";

function HeaderRightMenu() {
  const RightMenuContainer = styled.div`
    width: 33%;
    display: flex;
    justify-content: flex-end;
    height: 100%;
  `;

  const MarginIco = styled.div`
    margin-left: 25px;
  `;

  const StyledLink = styled(Link)`
    height: 100%;
    display: flex;
    align-items: center;
  `;

  const Ico = styled.i`
    cursor: pointer;
  `;

  return (
    <RightMenuContainer>
      <StyledLink  className="link" to={"/404"}>
        <MarginIco>
          <Ico className="bi bi-person-circle"></Ico>
        </MarginIco>
      </StyledLink>
      <StyledLink  className="link" to={"/404"}>
        <MarginIco>
          <Ico className="bi bi-star"></Ico>
        </MarginIco>
      </StyledLink>
      <StyledLink  className="link" to={"/404"}>
        <MarginIco>
          <Ico className="bi bi-bag"></Ico>
        </MarginIco>
      </StyledLink>
      <StyledLink  className="link" to={"/404"}>
        <MarginIco>
          <Ico className="bi bi-search"></Ico>
        </MarginIco>
      </StyledLink>
    </RightMenuContainer>
  );
}

export default HeaderRightMenu;
