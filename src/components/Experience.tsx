import { Box, Container, Typography, Card, CardContent, Chip, Stack } from '@mui/material';
import { Work, School } from '@mui/icons-material';

const experiences = [
  {
    type: 'work',
    title: 'Senior DevOps Engineer',
    company: 'Tech Company',
    period: '2022 - Present',
    description: 'Leading infrastructure automation initiatives, managing Kubernetes clusters, and implementing CI/CD pipelines for microservices architecture.',
    technologies: ['Kubernetes', 'Terraform', 'AWS', 'GitHub Actions'],
  },
  {
    type: 'work',
    title: 'DevOps Engineer',
    company: 'Software Company',
    period: '2020 - 2022',
    description: 'Built and maintained CI/CD pipelines, containerized applications with Docker, and automated infrastructure provisioning using Terraform.',
    technologies: ['Docker', 'Jenkins', 'Azure', 'Ansible'],
  },
  {
    type: 'work',
    title: 'Systems Administrator',
    company: 'IT Services',
    period: '2018 - 2020',
    description: 'Managed Linux servers, implemented monitoring solutions, and automated routine tasks using shell scripts and Python.',
    technologies: ['Linux', 'Python', 'Bash', 'Nagios'],
  },
  {
    type: 'education',
    title: 'Bachelor of Computer Science',
    company: 'University',
    period: '2014 - 2018',
    description: 'Focused on software engineering, networking, and systems administration. Completed thesis on container orchestration.',
    technologies: ['Computer Science', 'Networking', 'Software Engineering'],
  },
];

const Experience = () => {
  return (
    <Box
      id="experience"
      sx={{
        py: 12,
        backgroundColor: 'background.paper',
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
            Career Path
          </Typography>
          <Typography variant="h2" sx={{ mb: 3 }}>
            Experience & Education
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: 'text.secondary',
              maxWidth: 600,
              mx: 'auto',
            }}
          >
            My professional journey in DevOps and infrastructure engineering.
          </Typography>
        </Box>

        <Box sx={{ maxWidth: 800, mx: 'auto' }}>
          {experiences.map((exp, index) => (
            <Box
              key={index}
              sx={{
                display: 'flex',
                mb: 4,
                position: 'relative',
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  left: 20,
                  top: 60,
                  bottom: index === experiences.length - 1 ? 'auto' : -32,
                  width: 2,
                  backgroundColor: 'rgba(0, 217, 255, 0.2)',
                },
              }}
            >
              <Box
                sx={{
                  width: 42,
                  height: 42,
                  borderRadius: '50%',
                  backgroundColor: exp.type === 'work' ? 'primary.main' : 'secondary.main',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  zIndex: 1,
                }}
              >
                {exp.type === 'work' ? (
                  <Work sx={{ color: 'background.default', fontSize: 20 }} />
                ) : (
                  <School sx={{ color: 'background.default', fontSize: 20 }} />
                )}
              </Box>

              <Card
                sx={{
                  ml: 3,
                  flexGrow: 1,
                  backgroundColor: 'background.default',
                  border: '1px solid',
                  borderColor: 'rgba(255, 255, 255, 0.1)',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    borderColor: exp.type === 'work' ? 'primary.main' : 'secondary.main',
                  },
                }}
              >
                <CardContent sx={{ p: 3 }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', mb: 1 }}>
                    <Typography variant="h6" sx={{ color: 'text.primary' }}>
                      {exp.title}
                    </Typography>
                    <Chip
                      label={exp.period}
                      size="small"
                      sx={{
                        backgroundColor: 'rgba(0, 217, 255, 0.1)',
                        color: 'primary.main',
                      }}
                    />
                  </Box>
                  <Typography
                    variant="subtitle2"
                    sx={{
                      color: exp.type === 'work' ? 'primary.main' : 'secondary.main',
                      mb: 2,
                    }}
                  >
                    {exp.company}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 2, lineHeight: 1.7 }}>
                    {exp.description}
                  </Typography>
                  <Stack direction="row" flexWrap="wrap" gap={1}>
                    {exp.technologies.map((tech, techIndex) => (
                      <Chip
                        key={techIndex}
                        label={tech}
                        size="small"
                        variant="outlined"
                        sx={{
                          borderColor: 'rgba(255, 255, 255, 0.2)',
                          color: 'text.secondary',
                          fontSize: '0.7rem',
                        }}
                      />
                    ))}
                  </Stack>
                </CardContent>
              </Card>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default Experience;
