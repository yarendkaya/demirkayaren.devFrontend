import { Box, Container, Typography, Grid, Card, CardContent, Button, TextField, Stack } from '@mui/material';
import { Email, LinkedIn, GitHub, LocationOn, Send } from '@mui/icons-material';
import { useState } from 'react';

const contactInfo = [
  {
    icon: <Email sx={{ fontSize: 28 }} />,
    title: 'Email',
    value: 'your.email@example.com',
    link: 'mailto:your.email@example.com',
  },
  {
    icon: <LinkedIn sx={{ fontSize: 28 }} />,
    title: 'LinkedIn',
    value: 'linkedin.com/in/yourusername',
    link: 'https://linkedin.com/in/yourusername',
  },
  {
    icon: <GitHub sx={{ fontSize: 28 }} />,
    title: 'GitHub',
    value: 'github.com/yourusername',
    link: 'https://github.com/yourusername',
  },
  {
    icon: <LocationOn sx={{ fontSize: 28 }} />,
    title: 'Location',
    value: 'Istanbul, Turkey',
    link: null,
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission - you can integrate with a backend or email service
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <Box
      id="contact"
      sx={{
        py: 12,
        backgroundColor: 'background.default',
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography
            variant="overline"
            sx={{
              color: 'primary.main',
              letterSpacing: '0.2em',
              mb: 2,
              display: 'block',
            }}
          >
            Get In Touch
          </Typography>
          <Typography variant="h2" sx={{ mb: 3 }}>
            Contact Me
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: 'text.secondary',
              maxWidth: 600,
              mx: 'auto',
            }}
          >
            Have a project in mind or want to discuss DevOps solutions? Feel free to reach out!
          </Typography>
        </Box>

        <Grid container spacing={6}>
          <Grid size={{ xs: 12, md: 5 }}>
            <Stack spacing={3}>
              {contactInfo.map((info, index) => (
                <Card
                  key={index}
                  sx={{
                    backgroundColor: 'background.paper',
                    border: '1px solid',
                    borderColor: 'rgba(255, 255, 255, 0.1)',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      borderColor: 'primary.main',
                    },
                  }}
                >
                  <CardContent sx={{ p: 3 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <Box
                        sx={{
                          color: 'primary.main',
                          mr: 2,
                        }}
                      >
                        {info.icon}
                      </Box>
                      <Box>
                        <Typography variant="subtitle2" color="text.secondary">
                          {info.title}
                        </Typography>
                        {info.link ? (
                          <Typography
                            component="a"
                            href={info.link}
                            target={info.link.startsWith('http') ? '_blank' : undefined}
                            sx={{
                              color: 'text.primary',
                              textDecoration: 'none',
                              '&:hover': { color: 'primary.main' },
                            }}
                          >
                            {info.value}
                          </Typography>
                        ) : (
                          <Typography color="text.primary">{info.value}</Typography>
                        )}
                      </Box>
                    </Box>
                  </CardContent>
                </Card>
              ))}
            </Stack>
          </Grid>

          <Grid size={{ xs: 12, md: 7 }}>
            <Card
              sx={{
                backgroundColor: 'background.paper',
                border: '1px solid',
                borderColor: 'rgba(255, 255, 255, 0.1)',
              }}
            >
              <CardContent sx={{ p: 4 }}>
                <Typography variant="h5" sx={{ mb: 3 }}>
                  Send a Message
                </Typography>
                <Box component="form" onSubmit={handleSubmit}>
                  <Grid container spacing={3}>
                    <Grid size={{ xs: 12, sm: 6 }}>
                      <TextField
                        fullWidth
                        label="Your Name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        sx={{
                          '& .MuiOutlinedInput-root': {
                            '& fieldset': {
                              borderColor: 'rgba(255, 255, 255, 0.2)',
                            },
                            '&:hover fieldset': {
                              borderColor: 'primary.main',
                            },
                          },
                        }}
                      />
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6 }}>
                      <TextField
                        fullWidth
                        label="Your Email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        sx={{
                          '& .MuiOutlinedInput-root': {
                            '& fieldset': {
                              borderColor: 'rgba(255, 255, 255, 0.2)',
                            },
                            '&:hover fieldset': {
                              borderColor: 'primary.main',
                            },
                          },
                        }}
                      />
                    </Grid>
                    <Grid size={{ xs: 12 }}>
                      <TextField
                        fullWidth
                        label="Your Message"
                        name="message"
                        multiline
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        required
                        sx={{
                          '& .MuiOutlinedInput-root': {
                            '& fieldset': {
                              borderColor: 'rgba(255, 255, 255, 0.2)',
                            },
                            '&:hover fieldset': {
                              borderColor: 'primary.main',
                            },
                          },
                        }}
                      />
                    </Grid>
                    <Grid size={{ xs: 12 }}>
                      <Button
                        type="submit"
                        variant="contained"
                        size="large"
                        endIcon={<Send />}
                        sx={{
                          px: 4,
                          py: 1.5,
                          background: 'linear-gradient(90deg, #00d9ff 0%, #7c4dff 100%)',
                          '&:hover': {
                            background: 'linear-gradient(90deg, #00c4e6 0%, #6b3de6 100%)',
                          },
                        }}
                      >
                        Send Message
                      </Button>
                    </Grid>
                  </Grid>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Contact;
