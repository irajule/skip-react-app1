import React from 'react';
import {
  StyledAppBar,
  StyledToolbar,
  StyledContainer,
  NavItemsBox,
  NavItem,
} from '../../styles/Navbar.styles';

const Navbar = () => {
  return (
    <StyledAppBar position="sticky">
      <StyledToolbar disableGutters>
        <StyledContainer maxWidth="lg">
          <NavItemsBox>
            <NavItem>Postcode</NavItem>
            <NavItem>Waste Type</NavItem>
            <NavItem>Select Type</NavItem>
            <NavItem style={{ color: '#666' }}>Permit Check</NavItem>  {/* Make them a bit gray as the original app. However, more logic would need to be added when user navigates to the next page. */}
            <NavItem style={{ color: '#666' }}>Payment</NavItem>
          </NavItemsBox>
        </StyledContainer>
      </StyledToolbar>
    </StyledAppBar>
  );
};

export default Navbar;
