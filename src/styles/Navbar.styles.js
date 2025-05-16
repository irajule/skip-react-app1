import { styled } from '@mui/material/styles';
import { AppBar, Toolbar, Typography, Box, Container } from '@mui/material';

export const StyledAppBar = styled(AppBar)(() => ({
  backgroundColor: '#121212',
  color: '#fff',
  boxShadow: 'none',
}));

export const StyledToolbar = styled(Toolbar)(() => ({
  paddingLeft: 0,
  paddingRight: 0,
}));

export const StyledContainer = styled(Container)(() => ({
  display: 'flex',
  justifyContent: 'space-between',
}));

export const NavItemsBox = styled(Box)(() => ({
  display: 'flex',
  gap: 120,
  alignItems: 'center',
  color: '#fff',
}));

export const NavItem = styled(Typography)(() => ({
  cursor: 'pointer',
}));
