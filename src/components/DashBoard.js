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
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import PeopleIcon from '@mui/icons-material/People';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import GroupIcon from '@mui/icons-material/Group';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import Chart from 'react-apexcharts';
import AppHeader from './AppHeader';

const Dashboard = () => {
  const [isOpen, setIsOpen] = useState(false);
  const inputRef = useRef(null);

  const handleSearch = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      inputRef.current.focus();
    }
  };

  const statCards = [
    {
      label: 'Budget',
      value: '$24k',
      color: '#556ee6',
      icon: <AttachMoneyIcon />,
      percentage: '12%',
      trend: <ArrowUpwardIcon/>,
      description: 'Since last month',
    },
    {
      label: 'Total Customers',
      value: '1.6k',
      color: '#34c38f',
      icon: <GroupIcon />,
      percentage: '16%',
      trend: <ArrowDownwardIcon/>,
      description: 'Since last month',
    },
    {
      label: 'Task Progress',
      value: '75.5%',
      color: '#f1b44c',
      icon: <TrendingUpIcon />,
    },
    {
      label: 'Total Profit',
      value: '$15k',
      color: '#f46a6a',
      icon: <MonetizationOnIcon />,
    },
  ];

  const salesChartData = {
    series: [{ name: 'Sales', data: [30, 40, 45, 50, 49, 60, 70, 91] }],
    options: {
      chart: { type: 'bar', height: 200 },
      xaxis: { categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'] },
      colors: ['#556ee6'],
    },
  };

  const trafficChartData = {
    series: [44, 55, 41],
    options: {
      chart: { type: 'donut' },
      labels: ['Direct', 'Referral', 'Social'],
      colors: ['#556ee6', '#34c38f', '#f1b44c'],
    },
  };

  const products = [
    { name: 'Soja & Co. Eucalyptus', date: 'Updated Mar 8, 2024', img: 'https://via.placeholder.com/50' },
    { name: 'Necessaire Body Lotion', date: 'Updated Mar 8, 2024', img: 'https://via.placeholder.com/50' },
    { name: 'Necessaire Body Lotion', date: 'Updated Mar 8, 2024', img: 'https://via.placeholder.com/50' },
    { name: 'Necessaire Body Lotion', date: 'Updated Mar 8, 2024', img: 'https://via.placeholder.com/50' },


  ];

  const orders = [
    { order: 'ORD-007', customer: 'Ekaterina Tankova', date: 'Mar 8, 2024', status: 'Pending', color: '#f1b44c' },
    { order: 'ORD-006', customer: 'Cao Yu', date: 'Mar 8, 2024', status: 'Delivered', color: '#34c38f' },
    { order: 'ORD-006', customer: 'Cao Yu', date: 'Mar 8, 2024', status: 'Delivered', color: '#34c38f' },
    { order: 'ORD-006', customer: 'Cao Yu', date: 'Mar 8, 2024', status: 'Delivered', color: '#34c38f' },
    { order: 'ORD-006', customer: 'Cao Yu', date: 'Mar 8, 2024', status: 'Delivered', color: '#34c38f' },
    { order: 'ORD-007', customer: 'Ekaterina Tankova', date: 'Mar 8, 2024', status: 'Pending', color: '#f1b44c' }

  ];

  return (
    <>
      <AppHeader onSearchToggle={handleSearch}/>
      

      <Box sx={{ p: 4, backgroundColor: '#f5f5f5', minHeight: '100vh' }}>
        <Grid container spacing={4}>
          
          {statCards.map((item, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card sx={{ textAlign: 'left', p: 2, border:'1px solid gray', borderRadius:'20px' }}>
                <CardContent sx={{ display: 'flex', justifyContent: 'space-between' }}>
                  <Box>
                    <Typography variant="subtitle2" sx={{ color: 'text.secondary', fontWeight: 500 }}>
                      {item.label.toUpperCase()}
                    </Typography>
                    <Typography variant="h4" sx={{ fontWeight: '400' }}>
                      {item.value}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary', ml: 1 }}>
                      {item.trend}{item.percentage}{item.description}
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      width: 50,
                      height: 50,
                      backgroundColor: item.color,
                      color: 'white',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    {item.icon}
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}

          {/* Sales Chart */}
          <Grid item xs={12} md={8}>
            <Card sx={{border:'1px solid gray', borderRadius:'20px'}}>
              <CardContent>
                <Typography variant="h6">Sales</Typography>
                <Chart options={salesChartData.options} series={salesChartData.series} type="bar" height={350} />
              </CardContent>
            </Card>
          </Grid>

          {/* Traffic Source Chart */}
          <Grid item xs={12} md={4}>
          <Card sx={{border:'1px solid gray', borderRadius:'20px'}}>
              <CardContent>
                <Typography variant="h6">Traffic Source</Typography>
                <Chart options={trafficChartData.options} series={trafficChartData.series} type="donut" height={350} />
              </CardContent>
            </Card>
          </Grid>

          {/* Latest Products */}
          <Grid item xs={12} md={6}>
          <Card sx={{border:'1px solid gray', borderRadius:'20px'}}>
              <CardContent>
                <Typography variant="h6">Latest Products</Typography>
                <List>
                  {products.map((product, index) => (
                    <ListItem key={index}>
                      <ListItemAvatar>
                        <Avatar src={product.img} />
                      </ListItemAvatar>
                      <ListItemText primary={product.name} secondary={product.date} />
                    </ListItem>
                  ))}
                </List>
              </CardContent>
            </Card>
          </Grid>

          {/* Latest Orders */}
          <Grid item xs={12} md={6}>
          <Card sx={{border:'1px solid gray', borderRadius:'20px'}}>
              <CardContent>
                <Typography variant="h6">Latest Orders</Typography>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>Order</TableCell>
                      <TableCell>Customer</TableCell>
                      <TableCell>Date</TableCell>
                      <TableCell>Status</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {orders.map((order, index) => (
                      <TableRow key={index}>
                        <TableCell>{order.order}</TableCell>
                        <TableCell>{order.customer}</TableCell>
                        <TableCell>{order.date}</TableCell>
                        <TableCell style={{ color: order.color }}>{order.status}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Dashboard;
