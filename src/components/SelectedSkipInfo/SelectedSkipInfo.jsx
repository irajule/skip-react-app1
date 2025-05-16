import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Typography, Box, IconButton, Tooltip } from '@mui/material';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { selectSkip } from '../../redux/skips/skipsSlice';
import {selectSelectedSkip } from '../../redux/skips/skipsSelectors';
  const SelectedSkipInfo = () => {
  const selected = useSelector(selectSelectedSkip);
  const dispatch = useDispatch();

  if (!selected) return null;

  const handleClear = () => {
    dispatch(selectSkip(null));
  };

  const totalPrice = selected.price_before_vat + (selected.price_before_vat * selected.vat) / 100;

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        gap: 2,
        ml:8
        
      }}
    >
      <Typography variant="subtitle1" fontWeight="bold">
        Selected: {selected.size} Yard Skip
      </Typography>

      <Typography variant="body2" color="text.secondary">
        £{totalPrice.toFixed(2)} Inc VAT for {selected.hire_period_days} day{selected.hire_period_days > 1 ? 's' : ''} hire period.
      </Typography>

      <Tooltip title="Remove selection">
        <IconButton onClick={handleClear} color="error">
          <DeleteForeverIcon />
        </IconButton>
      </Tooltip>
    </Box>
  );
};

export default SelectedSkipInfo;
