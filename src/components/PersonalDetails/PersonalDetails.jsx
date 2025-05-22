import { Box, TextField, Typography, Stack } from '@mui/material';
import { useState, useEffect } from 'react';
import FooterActions from '../components/FooterActions'; // Adjust path if needed

function PersonalDetailsForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    occupation: '',
    address: '',
  });

  const [isFormValid, setIsFormValid] = useState(false);

  const handleChange = (e) => {
    const updatedData = {
      ...formData,
      [e.target.name]: e.target.value,
    };
    setFormData(updatedData);
  };

  useEffect(() => {
    const isValid = Object.values(formData).every((field) => field.trim() !== '');
    setIsFormValid(isValid);
  }, [formData]);

  return (
    <Box sx={{ maxWidth: 400, mx: 'auto', mt: 4 }}>
      <Typography variant="h5" gutterBottom>
        Personal Details
      </Typography>

      <Stack spacing={2}>
        <TextField
          label="Full Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          fullWidth
        />
        <TextField
          label="Email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          fullWidth
        />
        <TextField
          label="Occupation"
          name="occupation"
          value={formData.occupation}
          onChange={handleChange}
          fullWidth
        />
        <TextField
          label="Address"
          name="address"
          value={formData.address}
          onChange={handleChange}
          multiline
          rows={3}
          fullWidth
        />
      </Stack>

      {/* Footer Actions now handles navigation */}
      <FooterActions disableContinue={!isFormValid} />
    </Box>
  );
}

export default PersonalDetailsForm;
