import React, { useEffect, useState } from "react";

import styled from "@emotion/styled";

const NewArrivalsPage = () => {
  const [result, setResult] = useState(0);

  const responsiveSize = () => {
    const headerWidth = document.getElementById("header").offsetHeight;
    const footerWidth = document.getElementById("footer").offsetHeight;
    setResult(headerWidth + footerWidth);
  };

  const Main = styled.div`
    min-height: calc(100vh - ${result}px);
    /* height: 100vh; */
    /* background-image: url("https://www.zimmermann.com/media/wysiwyg/7__Luminosity_Check_Bodice_Skirt__8442TF231_8240SF231.OLCH.Olive-Check.jpg"); */
  `;

  useEffect(() => {
    responsiveSize();
  }, []);
  return <Main>NewArrivalsPage</Main>;
};

export default NewArrivalsPage;
