import React, { useState } from "react";
import {
  Box,
  Typography,
  Button,
  Menu,
  MenuItem,
  Divider,
  List,
  ListItem,
  ListItemText,
  ListItemIcon
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleIcon from "@mui/icons-material/People";
import IntegrationInstructionsIcon from "@mui/icons-material/IntegrationInstructions";
import SettingsIcon from "@mui/icons-material/Settings";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ErrorIcon from "@mui/icons-material/Error";


const Overview = () => <span>Overview</span>;
const Customers = () => <span>Customers</span>;
const Integrations = () => <span>Integrations</span>;
const Settings = () => <span>Settings</span>;
const Account = () => <span>Account</span>;
const Error = () => <span>Error</span>;

const SideBar = () => {
    const menuItems = [
        { key: "Overview", component: <Overview />, icon: <DashboardIcon /> },
        { key: "Customers", component: <Customers />, icon: <PeopleIcon /> },
        { key: "Integrations", component: <Integrations />, icon: <IntegrationInstructionsIcon /> },
        { key: "Settings", component: <Settings />, icon: <SettingsIcon /> },
        { key: "Account", component: <Account />, icon: <AccountCircleIcon /> },
        { key: "Error", component: <Error />, icon: <ErrorIcon /> },
      ];
  const [anchorEl, setAnchorEl] = useState(null);
  const [activeItem, setActiveItem] = useState("Overview");


  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box
      sx={{
        width: "250px",
        height: "100vh",
        backgroundColor: "#121621",
        color: "white",
        padding: 2,
      }}
    >
      <Box
        component="img"
        alt="homelogo"
        src="images/logo-home.svg"
        sx={{ width: "100px", color: "white" ,paddingBlock:'30px', paddingInlineStart:'40px', objectFit:'contain'}}
      ></Box>

      <Box
        sx={{
          backgroundColor: "#1a1a2e",
          color: "#fff",
          border: "1px solid rgba(255, 255, 255, 0.3)",
          borderRadius: "8px",
          padding: "12px 16px",
          width: "200px",
          marginBottom: 2, 
        }}
      >
        <Typography
          variant="body2"
          sx={{
            color: "rgba(255, 255, 255, 0.6)",
            fontWeight: 400,
            marginBottom: "4px",
          }}
        >
          Workspace
        </Typography>
        <Button
          endIcon={<ExpandMoreIcon />}
          onClick={handleClick}
          sx={{
            color: "#fff",
            fontSize: "16px",
            fontWeight: 500,
            textTransform: "none",
            padding: 0,
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          Devias
        </Button>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleClose}
          PaperProps={{
            sx: {
              backgroundColor: "#1a1a2e",
              color: "#fff",
            },
          }}
        >
          <MenuItem onClick={handleClose}>Option 1</MenuItem>
          <MenuItem onClick={handleClose}>Option 2</MenuItem>
        </Menu>
      </Box>

      
      <Divider sx={{ backgroundColor: "gray" }} />

      <List>
        {menuItems.map((item, index) => (
          <ListItem
            button
            key={index}
            onClick={() => setActiveItem(item.key)} 
            sx={{
              backgroundColor: activeItem === item.key ? "#6C63FF" : "transparent",
              color: activeItem === item.key ? "white" : "rgba(255, 255, 255, 0.7)",
              "&:hover": {
                backgroundColor: activeItem === item.key
                  ? "#574dff"
                  : "rgba(255, 255, 255, 0.1)",
              },
              borderRadius: "8px",
              marginBottom: 1,
            }}
          >
            <ListItemIcon
              sx={{
                color: activeItem === item.key ? "white" : "rgba(255, 255, 255, 0.7)",
              }}
            >
              {item.icon}
            </ListItemIcon>
            <ListItemText primary={item.component} />
          </ListItem>
        ))}
      </List>
      <Divider sx={{ backgroundColor: "gray" }} />

    </Box>
  );
};

export default SideBar;
