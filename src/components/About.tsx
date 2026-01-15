import { Box, Container, Typography, Grid, Card, CardContent } from '@mui/material';
import { Speed, Security, AutoFixHigh, TrendingUp } from '@mui/icons-material';

const highlights = [
  {
    icon: <Speed sx={{ fontSize: 40 }} />,
    title: 'Fast Delivery',
    description: 'Implementing CI/CD pipelines that enable rapid, reliable software releases.',
  },
  {
    icon: <Security sx={{ fontSize: 40 }} />,
    title: 'Security First',
    description: 'Building secure infrastructure with DevSecOps practices and compliance in mind.',
  },
  {
    icon: <AutoFixHigh sx={{ fontSize: 40 }} />,
    title: 'Automation',
    description: 'Automating repetitive tasks to increase efficiency and reduce human error.',
  },
  {
    icon: <TrendingUp sx={{ fontSize: 40 }} />,
    title: 'Scalability',
    description: 'Designing systems that scale horizontally to handle growing demands.',
  },
];

const About = () => {
  return (
    <Box
      id="about"
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
            About Me
          </Typography>
          <Typography variant="h2" sx={{ mb: 3 }}>
            Passionate About DevOps
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: 'text.secondary',
              maxWidth: 700,
              mx: 'auto',
              lineHeight: 1.8,
            }}
          >
            I'm a DevOps Engineer with a passion for building and maintaining scalable,
            reliable infrastructure. With experience in cloud platforms, containerization,
            and automation tools, I help teams deliver software faster and more reliably.
            I believe in the power of collaboration between development and operations
            to create better products and happier teams.
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {highlights.map((item, index) => (
            <Grid size={{ xs: 12, sm: 6, md: 3 }} key={index}>
              <Card
                sx={{
                  height: '100%',
                  backgroundColor: 'background.paper',
                  border: '1px solid',
                  borderColor: 'rgba(255, 255, 255, 0.1)',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    borderColor: 'primary.main',
                    transform: 'translateY(-8px)',
                    boxShadow: '0 20px 40px rgba(0, 217, 255, 0.1)',
                  },
                }}
              >
                <CardContent sx={{ p: 4, textAlign: 'center' }}>
                  <Box
                    sx={{
                      color: 'primary.main',
                      mb: 2,
                    }}
                  >
                    {item.icon}
                  </Box>
                  <Typography variant="h6" sx={{ mb: 1 }}>
                    {item.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {item.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default About;
