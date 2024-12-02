import React, { useState, useRef } from 'react';
import {
  Box,
  Grid,
  Typography,
  Card,
  CardContent,
  AppBar,
  Toolbar,
  IconButton,
  Avatar,
  InputBase,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import PeopleIcon from '@mui/icons-material/People';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Chart from 'react-apexcharts';

const Dashboard = () => {
  const [isOpen, setIsOpen] = useState(false); // State to manage the visibility of input
  const inputRef = useRef(null); // Ref to focus on input when expanded

  // Handler for search icon click
  const handleSearch = () => {
    setIsOpen(!isOpen); // Toggle the state to show/hide the input
    if (!isOpen) {
      inputRef.current.focus(); // Focus input field when expanded
    }
  };

  const salesChartData = {
    series: [
      {
        name: 'Sales',
        data: [30, 40, 45, 50, 49, 60, 70, 91],
      },
    ],
    options: {
      chart: {
        type: 'bar',
        height: 200,
      },
      xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
      },
      colors: ['#556ee6'],
    },
  };

  const trafficChartData = {
    series: [44, 55, 41],
    options: {
      chart: {
        type: 'donut',
      },
      labels: ['Direct', 'Referral', 'Social'],
      colors: ['#556ee6', '#34c38f', '#f1b44c'],
    },
  };

  return (
    <>
      <AppBar position="static" color="transparent" elevation={0}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        
          <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
          
            <IconButton onClick={handleSearch}>
              <SearchIcon />
            </IconButton>

            
            <InputBase
              ref={inputRef}
              placeholder="Search..."
              inputProps={{ 'aria-label': 'search' }}
              sx={{
                display: isOpen ? 'inline-block' : 'none', // Show only when isOpen is true
                transition: 'width 0.3s ease', // Smooth transition for expanding
                width: isOpen ? '200px' : '0', // Expand width when open
                borderBottom: '1px solid lightgray',
              }}
            />
          </Box>

          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <IconButton color="inherit">
              <PeopleIcon />
            </IconButton>
            <IconButton color="inherit">
              <NotificationsIcon />
            </IconButton>
            <Avatar
              src="https://randomuser.me/api/portraits/women/68.jpg"
              alt="User Avatar"
              sx={{ width: 36, height: 36 }}
            />
          </Box>
        </Toolbar>
      </AppBar>

      
      <Box sx={{ p: 4, backgroundColor: '#f5f5f5', minHeight: '100vh' }}>
        <Grid container spacing={4}>
         
          {[{ label: 'Budget', value: '$24k', color: '#556ee6' }, { label: 'Total Customers', value: '1.6k', color: '#34c38f' }, { label: 'Task Progress', value: '75.5%', color: '#f1b44c' }, { label: 'Total Profit', value: '$15k', color: '#556ee6' }].map((item, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card>
                <CardContent>
                  <Typography variant="h6" color="textSecondary">
                    {item.label}
                  </Typography>
                  <Typography variant="h4" sx={{ color: item.color }}>
                    {item.value}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}

          {/* Sales Chart */}
          <Grid item xs={12} md={8}>
            <Card>
              <CardContent>
                <Typography variant="h6" color="textSecondary">
                  Sales
                </Typography>
                <Chart
                  options={salesChartData.options}
                  series={salesChartData.series}
                  type="bar"
                  height={350}
                />
              </CardContent>
            </Card>
          </Grid>

          {/* Traffic Source Chart */}
          <Grid item xs={12} md={4}>
            <Card>
              <CardContent>
                <Typography variant="h6" color="textSecondary">
                  Traffic Source
                </Typography>
                <Chart
                  options={trafficChartData.options}
                  series={trafficChartData.series}
                  type="donut"
                  height={350}
                />
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Dashboard;
