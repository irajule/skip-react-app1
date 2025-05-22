import React from 'react';
import { Link } from 'react-router-dom';
import {
  StyledAppBar,
  StyledToolbar,
  StyledContainer,
  NavItemsBox,
  NavItem,
} from '../../styles/Navbar.styles'; //uses styled components

const Navbar = () => {
  return (
    <StyledAppBar position="sticky">
      <StyledToolbar disableGutters>
        <StyledContainer maxWidth="lg">
          <NavItemsBox>
            <NavItem to="/personalDetails" component={Link}>
              Personal Details
            </NavItem>
            <NavItem to="/skips" component={Link}>
              Skips
            </NavItem>
            <NavItem to="/payment" component={Link}>
              Payment
            </NavItem>
            <NavItem to="/contact" component={Link}>
               Contact
            </NavItem>
          </NavItemsBox>
        </StyledContainer>
      </StyledToolbar>
    </StyledAppBar>
  );
};

export default Navbar;
