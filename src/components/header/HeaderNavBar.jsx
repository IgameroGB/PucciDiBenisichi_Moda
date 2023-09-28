import { Link } from "react-router-dom";

import styled from "@emotion/styled";
import { handleDropdownAnimation } from "../../js/utilities";


function HeaderNavBar({
  setDropDownAnimation,
  setToggleDropDown,
  setCurrentNavSelection,
  setBlur,
}) {
  const NavContainer = styled.nav`
    /* margin: 0 50px; */
    /* padding: 9px 0 0; */

    position: relative;
    background: var(--white-color);
    width: 100%;
  `;

  const BreakDropDropDown = styled.div`
    width: 100%;
    height: 9px;
    /* background-color: red; */
  `;
  const NavList = styled.ul`
    margin: 0;
    /* padding: 0 0 16px; */
    list-style: none;
    display: flex;
    justify-content: center;
    align-items: center;

    text-transform: uppercase;

    font-size: 12px;
    font-family: var(--main-font-raleway);
  `;

  const NavLi = styled.li`
    padding: 0 0 16px;

    font-weight: 600;
  `;
  const StyledLink = styled(Link)`
    padding: 0 11px;
    cursor: pointer;
  `;

  const NavBarSeparator = styled.div`
    position: relative;
    top: -9px;
    left: 0;
    border-left: 1px solid var(--light-font);
    height: 10px;
    width: 0;
  `;

  const handleDropDown = (selected) => {
    setToggleDropDown(true);
    setTimeout(() => {
      handleDropdownAnimation(true);
    }, 100);
    setBlur(true);
    setCurrentNavSelection(selected);
  };

  return (
    <NavContainer>
      <BreakDropDropDown
        onMouseEnter={() => {
          handleDropdownAnimation(false);
          setTimeout(() => {
            setToggleDropDown(false);
            setBlur(false);
          }, 2000);
        }}
      />
      <NavList>
        <NavLi onMouseEnter={() => handleDropDown(0)}>
          <StyledLink to={"/NewArrivals"}>New arrivals</StyledLink>
        </NavLi>
        <NavBarSeparator />
        <NavLi onMouseEnter={() => handleDropDown(1)}>
          <StyledLink>Ready to wear</StyledLink>
        </NavLi>
        <NavBarSeparator />
        {/* <NavLi onMouseEnter={() => handleDropDown(2)}> */}
        <NavLi onMouseEnter={() => handleDropDown(-1)}>
          {/* <StyledLink>Swim & resort</StyledLink> */}
          <StyledLink>Section</StyledLink>
        </NavLi>
        <NavBarSeparator />
        {/* <NavLi onMouseEnter={() => handleDropDown(3)}> */}
        <NavLi onMouseEnter={() => handleDropDown(-1)}>
          {/* <StyledLink>Accesories</StyledLink> */}
          <StyledLink>Section</StyledLink>
        </NavLi>
        <NavBarSeparator />
        {/* <NavLi onMouseEnter={() => handleDropDown(4)}> */}
        <NavLi onMouseEnter={() => handleDropDown(-1)}>
          {/* <StyledLink>Jewellery</StyledLink> */}
          <StyledLink>Section</StyledLink>
        </NavLi>
        <NavBarSeparator />
        {/* <NavLi onMouseEnter={() => handleDropDown(5)}> */}
        <NavLi onMouseEnter={() => handleDropDown(-1)}>
          {/* <StyledLink>Shoes</StyledLink> */}
          <StyledLink>Section</StyledLink>
        </NavLi>
        <NavBarSeparator />
        {/* <NavLi onMouseEnter={() => handleDropDown(6)}> */}
        <NavLi onMouseEnter={() => handleDropDown(-1)}>
          {/* <StyledLink>Kids</StyledLink> */}
          <StyledLink>Empty</StyledLink>
        </NavLi>
        <NavBarSeparator />
        <NavLi onMouseEnter={() => handleDropDown(7)}>
          <StyledLink>Collections</StyledLink>
        </NavLi>
      </NavList>
    </NavContainer>
  );
}

export default HeaderNavBar;
