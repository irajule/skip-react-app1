import React from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  Typography,
  Box,
  Divider,
} from '@mui/material';
import getSkipImageUrl from '../utils/getSkipImage';

const SkipDetailModal = ({ open, onClose, skip }) => {
  if (!skip) return null;

  const totalPrice = skip.price_before_vat + (skip.price_before_vat * skip.vat) / 100;

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle>{skip.size} Yard Skip Details</DialogTitle>
      <DialogContent dividers>
        <Box sx={{ mb: 2 }}>
          <img
            src={getSkipImageUrl(skip.size)}
            alt={`${skip.size} Yard Skip`}
            style={{ width: '100%', borderRadius: 4 }}
          />
        </Box>

        <Typography variant="body1"><strong>Size:</strong> {skip.size} yards</Typography>
        <Typography variant="body1"><strong>Hire Period:</strong> {skip.hire_period_days} days</Typography>
        <Typography variant="body1"><strong>Postcode:</strong> {skip.postcode}</Typography>
        <Typography variant="body1"><strong>Allowed on Road:</strong> {skip.allowed_on_road ? 'Yes' : 'No'}</Typography>
        <Typography variant="body1"><strong>Heavy Waste Allowed:</strong> {skip.allows_heavy_waste ? 'Yes' : 'No'}</Typography>
        <Typography variant="body1">
          <strong>Transport Cost:</strong> {skip.transport_cost !== null ? `£${skip.transport_cost}` : 'N/A'}
        </Typography>

        <Divider sx={{ my: 2 }} />

        <Typography variant="h6"><strong>Total Price (incl. VAT):</strong> £{totalPrice.toFixed(2)}</Typography>
      </DialogContent>
    </Dialog>
  );
};

export default SkipDetailModal;
