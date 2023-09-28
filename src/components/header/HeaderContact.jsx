import styled from "@emotion/styled";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Link } from "react-router-dom";

function HeaderContact() {
  const ContactContainer = styled.div`
    width: 33%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
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
    <ContactContainer>
      <StyledLink className="link" to={"/404"}>
        <div>
          <Ico className="bi bi-geo-alt"></Ico>
        </div>
      </StyledLink>
      <StyledLink className="link" to={"/404"}>
        <MarginIco>
          <Ico className="bi bi-telephone"></Ico>
        </MarginIco>
      </StyledLink>
      <StyledLink className="link" to={"/404"}>
        <MarginIco>
          <Ico className="bi bi-envelope"></Ico>
        </MarginIco>
      </StyledLink>
    </ContactContainer>
  );
}

export default HeaderContact;
