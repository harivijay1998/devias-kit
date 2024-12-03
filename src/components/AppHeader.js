import React, { useState, useRef } from 'react';
import {
  AppBar,
  Toolbar,
  Box,
  IconButton,
  InputBase,
  Avatar,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import PeopleIcon from '@mui/icons-material/People';
import NotificationsIcon from '@mui/icons-material/Notifications';

const AppHeader = ({ onSearchToggle }) => {
  const [isOpen, setIsOpen] = useState(false);
  const inputRef = useRef(null);

  const handleSearch = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      inputRef.current.focus();
    }
    onSearchToggle(isOpen);  // Passing the state to parent
  };

  return (
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
            sx={{ display: isOpen ? 'inline-block' : 'none', width: isOpen ? '200px' : '0' }}
          />
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <IconButton color="inherit">
            <PeopleIcon />
          </IconButton>
          <IconButton color="inherit">
            <NotificationsIcon />
          </IconButton>
          <Avatar src="https://randomuser.me/api/portraits/women/68.jpg" alt="User Avatar" sx={{ width: 36, height: 36 }} />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default AppHeader;
