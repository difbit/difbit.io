import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
} from './NavbarElements';

const Navbar = () => {
  return (
    <>
      <Nav>
        <Bars />

        <NavMenu>
          <NavLink to='/about' activeStyle>
            About 2
          </NavLink>
          <NavLink to='/finnish' activeStyle>
            Finnish 2
          </NavLink>
          <NavLink to='/pictures' activeStyle>
            Pictures 2
          </NavLink>
          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>
      </Nav>
    </>
  );
};

//export default Navbar;
