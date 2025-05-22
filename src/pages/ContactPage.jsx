import { Box, Typography, Link, Stack, Paper } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PhoneIcon from '@mui/icons-material/Phone';

function ContactPage() {
  return (
    <Box
    >
      <Paper elevation={3} sx={{ p: 4, borderRadius: 3, maxWidth: 500, width: '100%' }}>
        <Typography variant="h4" gutterBottom>
          Contact Me
        </Typography>

        <Stack spacing={2} mt={2}>
          <Stack direction="row" spacing={1} alignItems="center">
            <EmailIcon color="primary" />
            <Link href="irajule@yahoo.com" underline="hover">
              irajule@yahoo.com
            </Link>
          </Stack>

          <Stack direction="row" spacing={1} alignItems="center">
            <LinkedInIcon color="primary" />
            <Link href="https://www.linkedin.com/in/irabaruta-jules-a41679152/" target="_blank" rel="noopener" underline="hover">
              linkedin.com/in/yourprofile
            </Link>
          </Stack>

          <Stack direction="row" spacing={1} alignItems="center">
            <PhoneIcon color="primary" />
            <Typography>0738189536</Typography>
          </Stack>
        </Stack>
      </Paper>
    </Box>
  );
}

export default ContactPage;
