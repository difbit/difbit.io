import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
} from './NavbarElements';

export default function Navbar() {
    return (<>
        <Nav>
            <Bars />
            <NavMenu>

            <NavLink to='/about' activeStyle>
                About
            </NavLink>

            <NavLink to='/finnish' activeStyle>
                Finnish
            </NavLink>

            <NavLink to='/pictures' activeStyle>
                Pictures
            </NavLink>
            {/* Second Nav */}
            {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}

            </NavMenu>
        </Nav>
    </>);
};
