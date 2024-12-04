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
import { TextField,Divider } from '@mui/material'; 
import { InputAdornment } from '@mui/material'; 
import SearchIcon from '@mui/icons-material/Search';
const IntegrationCard = ({ integration }) => {
  return (
    <Grid item xs={6} sm={4}>
      <Card sx={{
        maxWidth: 365, height: '100%', textAlign: 'center', display: 'flex',
        flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
        border: '1px solid #aaa', borderRadius: '20px'
      }}>
        <CardMedia
          component="img"
          height="40px"
          sx={{ textAlign: "center", width: '40px', paddingBlock: '20px' }}
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
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const integrations = [
    { name: 'Dropbox', description: 'Dropbox is a file hosting service...', iconUrl: 'images/logo-dropbox.png', updatedAt: 'Mar 8, 2024', installCount: 594 },
    { name: 'Medium', description: 'Medium is an online publishing platform...', iconUrl: 'images/logo-medium.png', updatedAt: 'Mar 8, 2024', installCount: 625 },
    { name: 'Slack', description: 'Slack is a cloud-based set of team collaboration...', iconUrl: 'images/logo-slack.png', updatedAt: 'Mar 8, 2024', installCount: 857 },
    { name: 'GitHub', description: 'GitHub is a code hosting platform...', iconUrl: 'images/logo-github.png', updatedAt: 'Mar 8, 2024', installCount: 1200 },
    { name: 'GitHub', description: 'GitHub is a code hosting platform...', iconUrl: 'images/logo-github.png', updatedAt: 'Mar 8, 2024', installCount: 1200 },
    { name: 'GitHub', description: 'GitHub is a code hosting platform...', iconUrl: 'images/logo-github.png', updatedAt: 'Mar 8, 2024', installCount: 1200 },

  ];

  const filteredIntegrations = integrations.filter((integration) =>
    integration.name.toLowerCase().includes(search.toLowerCase())
  );

  const handlePageChange = (event, newPage) => {
    setCurrentPage(newPage);
  };

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
    setCurrentPage(1); 
  };

  const displayedIntegrations = filteredIntegrations.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <>
      <AppHeader />
      <Divider sx={{ backgroundColor: "gray", marginBottom: 2 }} />
      <Typography variant='h3' color='black'>Integrations</Typography>
      <Box sx={{ padding: 2 }}>
        <TextField
          label="Search Integrations"
          variant="outlined"
          value={search}
          onChange={handleSearchChange}
          sx={{ marginBottom: 2 }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
      </Box>
      <Box>
        <Grid container spacing={2}>
          {displayedIntegrations.map((integration, index) => (
            <IntegrationCard key={index} integration={integration} />
          ))}
        </Grid>
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
          <Pagination
            count={Math.ceil(filteredIntegrations.length / itemsPerPage)}
            page={currentPage}
            onChange={handlePageChange}
          />
        </Box>
      </Box>
    </>
  );
};

export default Integrations;
