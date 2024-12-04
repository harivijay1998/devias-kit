import React, { useState, useRef } from 'react';
import {
  AppBar,
  Toolbar,
  Box,
  IconButton,
  InputBase,
  Avatar,
  Modal,
  Backdrop,
  Fade,
  Typography,
  List,
  ListItem,
  ListItemText,
  Divider,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import PeopleIcon from '@mui/icons-material/People';
import NotificationsIcon from '@mui/icons-material/Notifications';

const storedUsers = JSON.parse(localStorage.getItem('users'))
const AppHeader = ({ onSearchToggle }) => {
  const [isOpen, setIsOpen] = useState(false);
  const inputRef = useRef(null);

  const [openAvatarModal, setOpenAvatarModal] = useState(false);

  const handleSearch = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      inputRef.current.focus();
    }
    onSearchToggle(isOpen); 
  };

  const handleOpenAvatarModal = () => setOpenAvatarModal(true);
  const handleCloseAvatarModal = () => setOpenAvatarModal(false);

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
          <Avatar src="https://randomuser.me/api/portraits/women/68.jpg" alt="User Avatar" sx={{ width: 36, height: 36, cursor: 'pointer' }} onClick={handleOpenAvatarModal} />
        </Box>
      </Toolbar>

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={openAvatarModal}
        onClose={handleCloseAvatarModal}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500, 
        }}
      >
        <Fade in={openAvatarModal}>
          <Box sx={{ bgcolor: 'background.paper', border: '1px solid #ccc', p: 4, position: 'absolute', top: '28%', right: '-5%', transform: 'translate(-50%, -50%)' ,borderRadius:'20px'}}>
            <List>
              <ListItem>
              <Divider sx={{ border: "1px solid #ccc" }}/>
                <ListItemText primary="Sofia Rivers" />
                <Divider sx={{backgroundColor:"#aaa"}}/>
              </ListItem>
              <ListItem>
                <ListItemText primary="SofiaRivers@example.com"/>
              </ListItem>
              <Divider />
              <ListItem>
                <ListItemText primary="Settings" />
              </ListItem>
              <ListItem>
                <ListItemText primary="Logout" />
              </ListItem>
            </List>
          </Box>
        </Fade>
      </Modal>
    </AppBar>
  );
};

export default AppHeader;