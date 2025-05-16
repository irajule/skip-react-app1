import { styled } from '@mui/material/styles';
import { Box, FormControl } from '@mui/material';

export const PageWrapper = styled(Box)(({ theme }) => ({
  position: 'relative',
  minHeight: '100vh',
  paddingTop: 32,
  paddingBottom: 80,
  [theme.breakpoints.down('sm')]: {
    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom: 100, // allow room for sticky footer
  },
}));

export const ThemeToggleWrapper = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: 16,
  right: 150,
  zIndex: 10,

  [theme.breakpoints.down('md')]: {
    right: 16, // bring it in on medium and smaller screens
  },

  [theme.breakpoints.down('sm')]: {
    position: 'relative',
    top: 0,
    right: 0,
    marginBottom: 16,
    alignSelf: 'flex-end',
  },
}));

export const CenteredTitleBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
  marginBottom: 24,
  [theme.breakpoints.down('sm')]: {
    marginBottom: 16,
  },
}));

export const SortControlsBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: 16,
  marginTop: 24,
  marginBottom: 32,
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
    alignItems: 'stretch',
    gap: 12,
  },
}));

export const StyledFormControl = styled(FormControl)(({ theme }) => ({
  minWidth: 180,
  [theme.breakpoints.down('sm')]: {
    width: '100%',
  },
}));

export const LoadingSpinnerWrapper = styled(Box)(() => ({
  display: 'flex',
  justifyContent: 'center',
  marginTop: 32,
}));

export const FooterWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  backgroundColor: theme.palette.background.paper,
  padding: 16,
  position: 'sticky',
  bottom: 0,
  left: 0,
  right: 0,
  zIndex: 20,
  boxShadow: '0 -2px 8px rgba(0, 0, 0, 0.1)',
  flexWrap: 'wrap',
  rowGap: 8,
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
    alignItems: 'stretch',
    textAlign: 'center',
  },
}));

export const SkipListWrapper = styled(Box)(({ theme }) => ({
  paddingLeft: 45,
  [theme.breakpoints.down('sm')]: {
    paddingLeft: 0,
  },
}));
