import styled from "@emotion/styled";
import { handleDropdownAnimation } from "../../js/utilities";

import Content0 from "./dropdown/Content0";
import Content1 from "./dropdown/Content1";
import Content2 from "./dropdown/Content2";
import Content3 from "./dropdown/Content3";
import Content4 from "./dropdown/Content4";
import Content5 from "./dropdown/Content5";
import Content6 from "./dropdown/Content6";
import Content7 from "./dropdown/Content7";
import ContentEmpty from "./dropdown/ContentEmpty";

function HeaderDropdown({
  dropDownAnimation,
  setToggleDropDown,
  currentNavSelection,
  setBlur,
}) {
  const HeaderDropdownContainer = styled.div`
    position: fixed;
    top: 90px;
    width: 100%;
    background-color: var(--white-color);
    transition: 500ms ease;
    opacity: 0;
  `;

  const Container = styled.div`
    width: 100%;
  `;

  const BreakDropDropDown = styled.div`
    width: 100%;
    height: 20px;
    /* background-color: red; */
  `;

  return (
    <HeaderDropdownContainer
      id="drop-down"
      className={`${dropDownAnimation ? "animate" : ""}`}
      // onMouseOut={() => {
      //     setToggleDropDown(true);
      //     console.log("fuera");
      //     {
      //         /* RECUPERAR FUNCIONALIDAD poner "false" */
      //     }
      //     setBlur(false);
      // }}
    >
      <Container>
        {currentNavSelection == 0 && <Content0 />} {/* New Arrivals */}
        {currentNavSelection == 1 && <Content1 />} {/* Ready to wear */}
        {currentNavSelection == 2 && <Content2 />} {/* Swim & Resort */}
        {currentNavSelection == 3 && <Content3 />} {/* Accesories */}
        {currentNavSelection == 4 && <Content4 />} {/* jewellery */}
        {currentNavSelection == 5 && <Content5 />} {/* Shoes */}
        {currentNavSelection == 6 && <Content6 />} {/* Kids */}
        {currentNavSelection == 7 && <Content7 />} {/* Collections */}
        {currentNavSelection == -1 && <ContentEmpty />} {/* Empty */}
      </Container>
      <BreakDropDropDown
        onMouseEnter={() => {
          handleDropdownAnimation(false);
          setTimeout(() => {
            setToggleDropDown(false);
            setBlur(false);
          }, 2000);
        }}
      />
    </HeaderDropdownContainer>
  );
}

export default HeaderDropdown;
