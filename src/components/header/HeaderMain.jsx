import { useEffect, useState } from "react";

import styled from "@emotion/styled";

import HeaderContact from "./HeaderContact";
import HeaderLogo from "./HeaderLogo";
import HeaderRightMenu from "./HeaderRightMenu";
import HeaderNavBar from "./HeaderNavBar";
import HeaderDropdown from "./HeaderDropdown";

function HeaderMain({ setBlur }) {
  const [toggleDropDown, setToggleDropDown] = useState(false);
  const [currentNavSelection, setCurrentNavSelection] = useState(0);
  const [backHeight, setBackHeight] = useState(0);

  const HeaderContainer = styled.header`
    z-index: 99999;
    position: fixed;
    width: 100%;
  `;

  const HeaderTop = styled.div`
    background-color: var(--white-color);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 25px;
  `;

  const HeaderBottom = styled.div``;

  const HeaderBackElem = styled.div`
    width: 100%;
  `;

  // Modificar dinamicamente Height background
  useEffect(() => {
    const header = document.getElementById("header");
    const height = header.clientHeight;
    setBackHeight(height);
  }, [HeaderContainer]);

  // Evento window
  useEffect(() => {
    window.addEventListener("mouseout", (event) => {
      // Verificar si el evento sale de la ventana del navegador
      if (
        event.clientY <= 0 ||
        event.clientX <= 0 ||
        event.clientX >= window.innerWidth ||
        event.clientY >= window.innerHeight
      ) {
        setToggleDropDown(false);
        setBlur(false);
      }
    });
  }, []);

  return (
    <>
      <HeaderContainer id="header">
        <HeaderTop>
          {/* Botones izquierda header */}
          <HeaderContact />
          {/* Logo header */}
          <HeaderLogo />
          {/* Botones derecha header */}
          <HeaderRightMenu />
        </HeaderTop>
        <HeaderBottom>
          <HeaderNavBar
            setToggleDropDown={setToggleDropDown}
            setCurrentNavSelection={setCurrentNavSelection}
            setBlur={setBlur}
            // setBtnHover={setBtnHover}
          />
        </HeaderBottom>
        {toggleDropDown && (
          <HeaderDropdown
            setToggleDropDown={setToggleDropDown}
            currentNavSelection={currentNavSelection}
            setBlur={setBlur}
          />
        )}
      </HeaderContainer>
      <HeaderBackElem style={{ height: `${backHeight}px` }} />
    </>
  );
}

export default HeaderMain;
