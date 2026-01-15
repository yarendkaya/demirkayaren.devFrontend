import { Box, Container, Typography, Stack, IconButton, Divider } from '@mui/material';
import { GitHub, LinkedIn, Email, KeyboardArrowUp } from '@mui/icons-material';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Box
      component="footer"
      sx={{
        py: 6,
        backgroundColor: 'background.paper',
        borderTop: '1px solid',
        borderColor: 'rgba(255, 255, 255, 0.1)',
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ display: 'flex', justifyContent: 'center', mb: 4 }}>
          <IconButton
            onClick={scrollToTop}
            sx={{
              backgroundColor: 'background.default',
              border: '1px solid',
              borderColor: 'rgba(255, 255, 255, 0.1)',
              '&:hover': {
                borderColor: 'primary.main',
                backgroundColor: 'rgba(0, 217, 255, 0.1)',
              },
            }}
          >
            <KeyboardArrowUp sx={{ color: 'primary.main' }} />
          </IconButton>
        </Box>

        <Stack
          direction="row"
          spacing={2}
          justifyContent="center"
          sx={{ mb: 4 }}
        >
          <IconButton
            href="https://github.com/yourusername"
            target="_blank"
            sx={{
              color: 'text.secondary',
              '&:hover': { color: 'primary.main' },
            }}
          >
            <GitHub />
          </IconButton>
          <IconButton
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            sx={{
              color: 'text.secondary',
              '&:hover': { color: 'primary.main' },
            }}
          >
            <LinkedIn />
          </IconButton>
          <IconButton
            href="mailto:your.email@example.com"
            sx={{
              color: 'text.secondary',
              '&:hover': { color: 'primary.main' },
            }}
          >
            <Email />
          </IconButton>
        </Stack>

        <Divider sx={{ borderColor: 'rgba(255, 255, 255, 0.1)', mb: 4 }} />

        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          justifyContent="space-between"
          alignItems="center"
          spacing={2}
        >
          <Typography variant="body2" color="text.secondary">
            {new Date().getFullYear()} Yaren Demirkaya. All rights reserved.
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Built with React & Material-UI
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
