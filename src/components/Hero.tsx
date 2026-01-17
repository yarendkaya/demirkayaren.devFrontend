import { Box, Container, Typography, Button, Stack } from '@mui/material';
import { GitHub, LinkedIn, Email, CloudQueue } from '@mui/icons-material';

const Hero = () => {
  return (
    <Box
      id="home"
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        background: 'linear-gradient(135deg, #0a0a0f 0%, #1a1a2e 50%, #0a0a0f 100%)',
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: '20%',
          left: '10%',
          width: '300px',
          height: '300px',
          background: 'radial-gradient(circle, rgba(0, 217, 255, 0.1) 0%, transparent 70%)',
          borderRadius: '50%',
        },
        '&::after': {
          content: '""',
          position: 'absolute',
          bottom: '20%',
          right: '10%',
          width: '400px',
          height: '400px',
          background: 'radial-gradient(circle, rgba(124, 77, 255, 0.1) 0%, transparent 70%)',
          borderRadius: '50%',
        },
      }}
    >
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Box sx={{ maxWidth: 800 }}>
          <Stack direction="row" alignItems="center" spacing={1} sx={{ mb: 2 }}>
            <CloudQueue sx={{ color: 'primary.main', fontSize: 28 }} />
            <Typography
              variant="body1"
              sx={{
                color: 'primary.main',
                fontWeight: 500,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
              }}
            >
              DevOps Engineer
            </Typography>
          </Stack>

          <Typography
            variant="h1"
            sx={{
              mb: 3,
              background: 'linear-gradient(90deg, #ffffff 0%, #00d9ff 50%, #7c4dff 100%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              fontSize: { xs: '2.5rem', sm: '3rem', md: '4rem' },
            }}
          >
            Hi, I'm Yaren Demirkaya
          </Typography>

          <Typography
            variant="h5"
            sx={{
              mb: 4,
              color: 'text.secondary',
              maxWidth: 600,
              lineHeight: 1.8,
            }}
          >
            Building scalable infrastructure, automating everything, and bridging the gap between development and operations. Passionate about cloud-native technologies and continuous delivery.
          </Typography>

          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ mb: 4 }}>
            <Button
              variant="contained"
              size="large"
              href="#contact"
              sx={{
                px: 4,
                py: 1.5,
                background: 'linear-gradient(90deg, #00d9ff 0%, #7c4dff 100%)',
                '&:hover': {
                  background: 'linear-gradient(90deg, #00c4e6 0%, #6b3de6 100%)',
                },
              }}
            >
              Get In Touch
            </Button>
            <Button
              variant="outlined"
              size="large"
              href="#projects"
              sx={{
                px: 4,
                py: 1.5,
                borderColor: 'primary.main',
                color: 'primary.main',
                '&:hover': {
                  borderColor: 'primary.light',
                  backgroundColor: 'rgba(0, 217, 255, 0.1)',
                },
              }}
            >
              View Projects
            </Button>
          </Stack>

          <Stack direction="row" spacing={2}>
            <Button
              href="https://github.com/yarendkaya"
              target="_blank"
              sx={{
                minWidth: 'auto',
                p: 1.5,
                color: 'text.secondary',
                '&:hover': { color: 'primary.main' },
              }}
            >
              <GitHub />
            </Button>
            <Button
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              sx={{
                minWidth: 'auto',
                p: 1.5,
                color: 'text.secondary',
                '&:hover': { color: 'primary.main' },
              }}
            >
              <LinkedIn />
            </Button>
            <Button
              href="mailto:your.email@example.com"
              sx={{
                minWidth: 'auto',
                p: 1.5,
                color: 'text.secondary',
                '&:hover': { color: 'primary.main' },
              }}
            >
              <Email />
            </Button>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};

export default Hero;
