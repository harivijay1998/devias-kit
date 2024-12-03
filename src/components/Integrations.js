import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import ImportExportIcon from '@mui/icons-material/ImportExport';
import Pagination from '@mui/material/Pagination';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import AppHeader from './AppHeader'; 
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography'; 

const IntegrationCard = ({ integration }) => {
  return (
    <Grid item xs={6} sm={4}>
      <Card sx={{ maxWidth: 345, height: '100%' }}>
        <CardMedia
          component="img"
          height="140"
          image={integration.iconUrl}
          alt={integration.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {integration.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {integration.description}
          </Typography>
        </CardContent>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', p: 2 }}>
          <Typography variant="body2" color="text.secondary">
            Updated: {integration.updatedAt}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {integration.installCount} Installs
          </Typography>
          <IconButton>
            <ImportExportIcon />
          </IconButton>
        </Box>
      </Card>
    </Grid>
  );
};

const Integrations = () => {
  const integrations = [
    {
      name: 'Dropbox',
      description: 'Dropbox is a file hosting service...',
      iconUrl: 'https://example.com/dropbox-icon.png',
      updatedAt: 'Mar 8, 2024',
      installCount: 594,
    },
    {
      name: 'Medium',
      description: 'Medium is an online publishing platform...',
      iconUrl: 'https://example.com/medium-icon.png',
      updatedAt: 'Mar 8, 2024',
      installCount: 625,
    },
    {
      name: 'Slack',
      description: 'Slack is a cloud-based set of team collaboration...',
      iconUrl: 'https://example.com/slack-icon.png',
      updatedAt: 'Mar 8, 2024',
      installCount: 857,
    },

    {
        name: 'Slack',
        description: 'Slack is a cloud-based set of team collaboration...',
        iconUrl: 'https://example.com/slack-icon.png',
        updatedAt: 'Mar 8, 2024',
        installCount: 857,
      },

      {
        name: 'Slack',
        description: 'Slack is a cloud-based set of team collaboration...',
        iconUrl: 'https://example.com/slack-icon.png',
        updatedAt: 'Mar 8, 2024',
        installCount: 857,
      },

      {
        name: 'Slack',
        description: 'Slack is a cloud-based set of team collaboration...',
        iconUrl: 'https://example.com/slack-icon.png',
        updatedAt: 'Mar 8, 2024',
        installCount: 857,
      },

      {
        name: 'Slack',
        description: 'Slack is a cloud-based set of team collaboration...',
        iconUrl: 'https://example.com/slack-icon.png',
        updatedAt: 'Mar 8, 2024',
        installCount: 857,
      },

      {
        name: 'Slack',
        description: 'Slack is a cloud-based set of team collaboration...',
        iconUrl: 'https://example.com/slack-icon.png',
        updatedAt: 'Mar 8, 2024',
        installCount: 857,
      },

      {
        name: 'Slack',
        description: 'Slack is a cloud-based set of team collaboration...',
        iconUrl: 'https://example.com/slack-icon.png',
        updatedAt: 'Mar 8, 2024',
        installCount: 857,
      },

      {
        name: 'Slack',
        description: 'Slack is a cloud-based set of team collaboration...',
        iconUrl: 'https://example.com/slack-icon.png',
        updatedAt: 'Mar 8, 2024',
        installCount: 857,
      },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const handlePageChange = (event, newPage) => {
    setCurrentPage(newPage);
  };

  const displayedIntegrations = integrations.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <>
      <AppHeader />
      <Box>
        <Grid container spacing={2}>
          {displayedIntegrations.map((integration, index) => (
            <IntegrationCard key={index} integration={integration} />
          ))}
        </Grid>
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
          <Pagination
            count={Math.ceil(integrations.length / itemsPerPage)}
            page={currentPage}
            onChange={handlePageChange}
          />
        </Box>
      </Box>
    </>
  );
};

export default Integrations;