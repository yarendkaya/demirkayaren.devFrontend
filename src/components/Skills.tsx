import { Box, Container, Typography, Grid, Chip, Paper } from '@mui/material';
import { Cloud, Storage, Code, Settings, Monitor, Lock } from '@mui/icons-material';

const skillCategories = [
  {
    title: 'Cloud Platforms',
    icon: <Cloud />,
    skills: ['AWS', 'Azure'],
    color: '#FF9900',
  },
  {
    title: 'Containers & Orchestration',
    icon: <Storage />,
    skills: ['Docker', 'Kubernetes', 'Helm', 'Docker Compose', 'Podman', 'containerd'],
    color: '#2496ED',
  },
  {
    title: 'CI/CD Tools',
    icon: <Code />,
    skills: ['Jenkins', 'GitHub Actions', 'GitLab CI', 'ArgoCD', 'CircleCI', 'Azure DevOps'],
    color: '#00d9ff',
  },
  {
    title: 'Infrastructure as Code',
    icon: <Settings />,
    skills: ['Terraform', 'Ansible', 'Vagrant'],
    color: '#7B42BC',
  },
  {
    title: 'Monitoring & Observability',
    icon: <Monitor />,
    skills: ['Prometheus', 'Grafana', 'ELK Stack', 'Datadog', 'New Relic', 'Jaeger'],
    color: '#E6522C',
  },
  {
    title: 'Security & Networking',
    icon: <Lock />,
    skills: ['Vault', 'Nginx', 'HAProxy', 'Istio', 'Cert-Manager', 'Trivy'],
    color: '#7c4dff',
  },
];

const Skills = () => {
  return (
    <Box
      id="skills"
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
            Technical Skills
          </Typography>
          <Typography variant="h2" sx={{ mb: 3 }}>
            Tools & Technologies
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: 'text.secondary',
              maxWidth: 600,
              mx: 'auto',
            }}
          >
            A comprehensive toolkit for building, deploying, and maintaining modern cloud infrastructure.
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {skillCategories.map((category, index) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
              <Paper
                elevation={0}
                sx={{
                  p: 4,
                  height: '100%',
                  backgroundColor: 'background.default',
                  border: '1px solid',
                  borderColor: 'rgba(255, 255, 255, 0.1)',
                  borderRadius: 4,
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    borderColor: category.color,
                    boxShadow: `0 10px 30px ${category.color}20`,
                  },
                }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    mb: 3,
                    color: category.color,
                  }}
                >
                  {category.icon}
                  <Typography variant="h6" sx={{ ml: 1.5, color: 'text.primary' }}>
                    {category.title}
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                  {category.skills.map((skill, skillIndex) => (
                    <Chip
                      key={skillIndex}
                      label={skill}
                      size="small"
                      sx={{
                        backgroundColor: `${category.color}15`,
                        color: category.color,
                        border: `1px solid ${category.color}30`,
                        '&:hover': {
                          backgroundColor: `${category.color}25`,
                        },
                      }}
                    />
                  ))}
                </Box>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Skills;
