import { Box, Container, Typography, Grid, Card, CardContent, CardActions, Button, Chip, Stack } from '@mui/material';
import { GitHub, Launch, Cloud, Storage, Code } from '@mui/icons-material';

const projects = [
  {
    title: 'Kubernetes Cluster Automation',
    description: 'Automated Kubernetes cluster provisioning using Terraform and Ansible. Includes monitoring stack with Prometheus and Grafana, and GitOps deployment with ArgoCD.',
    technologies: ['Terraform', 'Kubernetes', 'ArgoCD', 'Prometheus'],
    icon: <Storage />,
    github: 'https://github.com/yourusername/k8s-automation',
    demo: null,
  },
  {
    title: 'CI/CD Pipeline Framework',
    description: 'Reusable CI/CD pipeline templates for GitHub Actions with support for multiple languages, security scanning, and automated deployments to AWS.',
    technologies: ['GitHub Actions', 'Docker', 'AWS', 'Trivy'],
    icon: <Code />,
    github: 'https://github.com/yourusername/cicd-framework',
    demo: null,
  },
  {
    title: 'Cloud Infrastructure Templates',
    description: 'Production-ready Terraform modules for AWS infrastructure including VPC, EKS, RDS, and S3 with best practices for security and cost optimization.',
    technologies: ['Terraform', 'AWS', 'Python', 'Bash'],
    icon: <Cloud />,
    github: 'https://github.com/yourusername/aws-terraform',
    demo: null,
  },
  {
    title: 'Monitoring & Alerting Stack',
    description: 'Complete observability solution with Prometheus, Grafana, Loki, and custom alerting rules. Includes dashboards for Kubernetes and application metrics.',
    technologies: ['Prometheus', 'Grafana', 'Loki', 'AlertManager'],
    icon: <Storage />,
    github: 'https://github.com/yourusername/monitoring-stack',
    demo: null,
  },
  {
    title: 'Container Security Scanner',
    description: 'Automated container image scanning pipeline that integrates with CI/CD workflows to detect vulnerabilities before deployment.',
    technologies: ['Trivy', 'Docker', 'Python', 'Jenkins'],
    icon: <Code />,
    github: 'https://github.com/yourusername/container-scanner',
    demo: null,
  },
  {
    title: 'Infrastructure Cost Optimizer',
    description: 'Tool for analyzing and optimizing cloud infrastructure costs. Provides recommendations for right-sizing instances and identifying unused resources.',
    technologies: ['Python', 'AWS', 'Terraform', 'React'],
    icon: <Cloud />,
    github: 'https://github.com/yourusername/cost-optimizer',
    demo: 'https://cost-optimizer-demo.com',
  },
];

const Projects = () => {
  return (
    <Box
      id="projects"
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
            Portfolio
          </Typography>
          <Typography variant="h2" sx={{ mb: 3 }}>
            Featured Projects
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: 'text.secondary',
              maxWidth: 600,
              mx: 'auto',
            }}
          >
            A collection of DevOps projects showcasing infrastructure automation, CI/CD pipelines, and cloud solutions.
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {projects.map((project, index) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  backgroundColor: 'background.paper',
                  border: '1px solid',
                  borderColor: 'rgba(255, 255, 255, 0.1)',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    borderColor: 'primary.main',
                    transform: 'translateY(-8px)',
                    boxShadow: '0 20px 40px rgba(0, 217, 255, 0.15)',
                  },
                }}
              >
                <CardContent sx={{ flexGrow: 1, p: 3 }}>
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      mb: 2,
                      color: 'primary.main',
                    }}
                  >
                    {project.icon}
                    <Typography variant="h6" sx={{ ml: 1, color: 'text.primary' }}>
                      {project.title}
                    </Typography>
                  </Box>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ mb: 3, lineHeight: 1.7 }}
                  >
                    {project.description}
                  </Typography>
                  <Stack direction="row" flexWrap="wrap" gap={1}>
                    {project.technologies.map((tech, techIndex) => (
                      <Chip
                        key={techIndex}
                        label={tech}
                        size="small"
                        sx={{
                          backgroundColor: 'rgba(0, 217, 255, 0.1)',
                          color: 'primary.main',
                          fontSize: '0.75rem',
                        }}
                      />
                    ))}
                  </Stack>
                </CardContent>
                <CardActions sx={{ p: 3, pt: 0 }}>
                  <Button
                    size="small"
                    startIcon={<GitHub />}
                    href={project.github}
                    target="_blank"
                    sx={{ color: 'text.secondary', '&:hover': { color: 'primary.main' } }}
                  >
                    Code
                  </Button>
                  {project.demo && (
                    <Button
                      size="small"
                      startIcon={<Launch />}
                      href={project.demo}
                      target="_blank"
                      sx={{ color: 'text.secondary', '&:hover': { color: 'primary.main' } }}
                    >
                      Demo
                    </Button>
                  )}
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Projects;
