import { Link } from "react-router-dom";

import styled from "@emotion/styled";

function HeaderNavBar({ setToggleDropDown, setCurrentNavSelection, setBlur }) {
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
  const Link = styled.a`
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
    setBlur(true);
    setCurrentNavSelection(selected);
  };

  return (
    <NavContainer>
      <BreakDropDropDown
        onMouseEnter={() => {
          setToggleDropDown(false);
          setBlur(false);
        }}
      />
      <NavList>
        <NavLi onMouseEnter={() => handleDropDown(0)}>
          <Link>New arrivals</Link>
        </NavLi>
        <NavBarSeparator />
        <NavLi onMouseEnter={() => handleDropDown(1)}>
          <Link>Ready to wear</Link>
        </NavLi>
        <NavBarSeparator />
        {/* <NavLi onMouseEnter={() => handleDropDown(2)}> */}
        <NavLi onMouseEnter={() => handleDropDown(-1)}>
          {/* <Link>Swim & resort</Link> */}
          <Link>Section</Link>
        </NavLi>
        <NavBarSeparator />
        {/* <NavLi onMouseEnter={() => handleDropDown(3)}> */}
        <NavLi onMouseEnter={() => handleDropDown(-1)}>
          {/* <Link>Accesories</Link> */}
          <Link>Section</Link>
        </NavLi>
        <NavBarSeparator />
        {/* <NavLi onMouseEnter={() => handleDropDown(4)}> */}
        <NavLi onMouseEnter={() => handleDropDown(-1)}>
          {/* <Link>Jewellery</Link> */}
          <Link>Section</Link>
        </NavLi>
        <NavBarSeparator />
        {/* <NavLi onMouseEnter={() => handleDropDown(5)}> */}
        <NavLi onMouseEnter={() => handleDropDown(-1)}>
          {/* <Link>Shoes</Link> */}
          <Link>Section</Link>
        </NavLi>
        <NavBarSeparator />
        {/* <NavLi onMouseEnter={() => handleDropDown(6)}> */}
        <NavLi onMouseEnter={() => handleDropDown(-1)}>
          {/* <Link>Kids</Link> */}
          <Link>Empty</Link>
        </NavLi>
        <NavBarSeparator />
        <NavLi onMouseEnter={() => handleDropDown(7)}>
          <Link>Collections</Link>
        </NavLi>
      </NavList>
    </NavContainer>
  );
}

export default HeaderNavBar;
