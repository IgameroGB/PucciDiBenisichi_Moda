import styled from "@emotion/styled";

function BackBlur() {
  const BlurElem = styled.div`
    width: 100%;
    height: 100vh;
    z-index: 99;
    position: fixed;
    top: 0;
    left: 0;
    /* background-color: #ffffff66; */
    /* filter: blur(10px); */
    backdrop-filter: blur(20px);
  `;
  return <BlurElem>BackBlur</BlurElem>;
}

export default BackBlur;
