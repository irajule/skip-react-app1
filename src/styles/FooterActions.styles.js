import { styled } from '@mui/material/styles';
import { Box, Button } from '@mui/material';

export const ActionsWrapper = styled(Box)(() => ({
  display: 'flex',
  gap: 16,
  flexWrap: 'wrap',
}));

export const BackButton = styled(Button)(() => ({
  paddingLeft: 24,
  paddingRight: 24,
  paddingTop: 6,
  paddingBottom: 6,
  borderRadius: 16,
  boxShadow: 2,
  fontWeight: 'bold',
  minHeight: '36px',
}));

export const ContinueButton = styled(Button)(() => ({
  paddingLeft: 16,
  paddingRight: 16,
  paddingTop: 6,
  paddingBottom: 6,
  borderRadius: 8,
  fontWeight: 'bold',
  borderWidth: 1,
  minHeight: '36px',
  '&:hover': {
    borderWidth: 1,
  },
}));
