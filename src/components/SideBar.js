import React, { useState } from "react";
import {
  Box,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Divider,
  Typography
} from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleIcon from "@mui/icons-material/People";
import IntegrationInstructionsIcon from "@mui/icons-material/IntegrationInstructions";
import SettingsIcon from "@mui/icons-material/Settings";

import DashBoard from "./DashBoard";
import Customers from "./Customers";
import Integrations from "./Integrations";
import Settings from "./Settings";
import Account from "./Account";

const SideBar = ({ setActiveView }) => {
  const [activeItem, setActiveItem] = useState("Dashboard");

  const menuItems = [
    { key: "Dashboard", icon: <DashboardIcon />, component: <DashBoard /> },
    { key: "Customers", icon: <PeopleIcon />, component: <Customers /> },
    {
      key: "Integrations",
      icon: <IntegrationInstructionsIcon />,
      component: <Integrations />,
    },
    { key: "Settings", icon: <SettingsIcon />, component: <Settings /> },
    { key: "Account", icon: <PeopleIcon />, component: <Account /> },

  ];

  return (
    <>
   
    <Box
      sx={{
        width: "250px",
        backgroundColor: "#121621",
        color: "white",
        height: "100vh",
        padding: 2,
        position: "fixed",
      }}
    >
      <Box sx={{ marginBottom: 2 }}>
      <Typography variant="h5" align="center" gutterBottom>
        DeviasKit
      </Typography>
      <Divider sx={{ backgroundColor: 'gray' }} />
      </Box>
      
      <List>
        {menuItems.map((item, index) => (
          <ListItem
            button
            key={index}
            onClick={() => {
              setActiveItem(item.key);
              setActiveView(item.component); 
            }}
            sx={{
              backgroundColor: activeItem === item.key ? "#6C63FF" : "transparent",
              color: activeItem === item.key ? "white" : "rgba(255, 255, 255, 0.7)",
              "&:hover": {
                backgroundColor:
                  activeItem === item.key
                    ? "#574dff"
                    : "rgba(255, 255, 255, 0.1)",
              },
              borderRadius: "8px",
              marginBottom: 1,
            }}
          >
            <ListItemIcon
              sx={{
                color:
                  activeItem === item.key ? "white" : "rgba(255, 255, 255, 0.7)",
              }}
            >
              {item.icon}
            </ListItemIcon>
            <ListItemText primary={item.key} />
          </ListItem>
        ))}
      </List>
    </Box>
    </>
  );
};

export default SideBar;
