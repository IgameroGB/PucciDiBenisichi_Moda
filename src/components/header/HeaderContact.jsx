import styled from "@emotion/styled";
import "font-awesome/css/font-awesome.min.css";

function HeaderContact() {
  const ContactContainer = styled.div`
    width: 33%;
    display: flex;
    justify-content: flex-start;
  `;
  const MarginIco = styled.div`
    margin-left: 25px;
  `;

  const Ico = styled.i`
    cursor: pointer;
  `;

  return (
    <ContactContainer>
      <div>
        <Ico className="fa-solid fa-location-dot"></Ico>
      </div>
      <MarginIco>
        <Ico className="fa-solid fa-phone"></Ico>
      </MarginIco>
      <MarginIco>
        <Ico className="fa-regular fa-envelope"></Ico>
      </MarginIco>
    </ContactContainer>
  );
}

export default HeaderContact;
