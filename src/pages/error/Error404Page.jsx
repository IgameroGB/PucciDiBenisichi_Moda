import React, { useEffect, useState } from "react";

import styled from "@emotion/styled";

const NotFound = () => {
  const [result, setResult] = useState(0);

  const responsiveSize = () => {
    const headerWidth = document.getElementById("header").offsetHeight;
    const footerWidth = document.getElementById("footer").offsetHeight;
    setResult(headerWidth + footerWidth);
  };

  useEffect(() => {
    responsiveSize();
  }, []);

  const Content = styled.div`
    margin: 0;
    padding: 0;
    background-color: #ffe8e8;
    width: 100%;
    height: calc(100vh - ${result}px);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  `;

  return (
    <Content>
      <div style={{ fontSize: "300px" }}>404</div>
      <span>La página a la que intentas aceder no existe...</span>
    </Content>
  );
};

export default NotFound;
