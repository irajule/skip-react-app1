import { styled } from '@mui/material/styles';
import { Card, Box, Button } from '@mui/material';

export const StyledCard = styled(Card)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  backgroundColor: theme.palette.background.paper,
  color: theme.palette.text.primary,
  transition: 'transform 0.3s ease',
  '&:hover': {
    transform: 'scale(1.05)',
  },
}));

// Image styling
export const SkipImage = styled('img')(() => ({
  width: '100%',
  height: '150px',
  objectFit: 'cover',
  borderTopLeftRadius: '4px',
  borderTopRightRadius: '4px',
}));

//for badge
export const Badge = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: 8,
  right: 8,
  backgroundColor: theme.palette.mode === 'dark' ? 'green' : 'red',
  color: 'white',
  borderRadius: '16px',
  padding: '4px 8px',
  fontSize: '0.75rem',
  fontWeight: 'bold',
}));

// Tag for "Not allowed on the road"
export const NotAllowedTag = styled(Box)(() => ({
  position: 'absolute',
  bottom: 10,
  left: 15,
  backgroundColor: 'rgba(0, 0, 0, 0.8)',
  color: '#FFD700',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '4px 8px',
  fontSize: '0.75rem',
}));

// Container for buttons
export const ActionArea = styled(Box)(() => ({
  display: 'flex',
  justifyContent: 'space-around',
  gap: 8,
  marginBottom: 16,
}));

// Select/Unselect button with dynamic style
export const SelectButton = styled(Button, {
  shouldForwardProp: (prop) => prop !== 'selected',
})(({ theme, selected }) => ({
  backgroundColor: selected ? theme.palette.primary.main : 'transparent',
  color: selected ? theme.palette.primary.contrastText : theme.palette.text.primary,
  borderColor: theme.palette.text.primary,
  padding: '6px 8px',
  fontSize: '0.85rem',
  height: 'auto', // Let height adjust based on content
  minWidth: 0, // Remove rigid minimum width
  maxWidth: '100%', // Prevent overflow
  whiteSpace: 'normal',
  textAlign: 'center', 
  wordBreak: 'break-word',

  '&:hover': {
    backgroundColor: selected
      ? theme.palette.primary.dark
      : theme.palette.action.hover,
  },

  [theme.breakpoints.down('sm')]: {
    fontSize: '0.75rem',
    padding: '4px 6px',
  },
}));

// View details button
export const ViewButton = styled(Button)(({ theme }) => ({
  color: theme.palette.info.main,
  textTransform: 'none',
  fontWeight: 500,
  fontSize: '0.9rem',
}));
