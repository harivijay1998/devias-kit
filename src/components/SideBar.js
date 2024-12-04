import React, { useState } from "react";
import {
  Box,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Divider,
  Typography,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
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
  const [workspace, setWorkspace] = useState("Devias");

  const menuItems = [
    { key: "Overview", icon: <DashboardIcon />, component: <DashBoard /> },
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
        <Box 
         component="img"
         src="images/logo-home.svg"
        alt="logohome"
        sx={{height:'33',
            width:'122px',
            paddingBlock:'40px',
            marginInlineStart:'30px'
        }}
        ></Box>

        <FormControl fullWidth variant="outlined" size="small">
          <InputLabel sx={{ color: "rgba(255, 255, 255, 0.7)" }}>Workspace</InputLabel>
          <Select
            value={workspace}
            onChange={(e) => setWorkspace(e.target.value)}
            sx={{
              backgroundColor: "#1c1f2b",
              color: "white",
              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: "rgba(255, 255, 255, 0.23)",
              },
              "&:hover .MuiOutlinedInput-notchedOutline": {
                borderColor: "white",
              },
            }}
          >
            <MenuItem value="Devias">Devias</MenuItem>
            <MenuItem value="Workspace 2">Workspace 2</MenuItem>
            <MenuItem value="Workspace 3">Workspace 3</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Divider sx={{ backgroundColor: "gray", marginBottom: 2 }} />
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
              backgroundColor:
                activeItem === item.key ? "#1565c0" : "transparent",
              color:
                activeItem === item.key
                  ? "white"
                  : "rgba(255, 255, 255, 0.7)",
              "&:hover": {
                backgroundColor:
                  activeItem === item.key
                    ? "#1565c0"
                    : "rgba(255, 255, 255, 0.1)",
              },
              borderRadius: "8px",
              marginBottom: 1,
            }}
          >
            <ListItemIcon
              sx={{
                color:
                  activeItem === item.key
                    ? "white"
                    : "rgba(255, 255, 255, 0.7)",
              }}
            >
              {item.icon}
            </ListItemIcon>
            <ListItemText primary={item.key} />
          </ListItem>
        ))}
      </List>
      <Divider sx={{backgroundColor:'#aaa'}}/>
    </Box>
  );
};

export default SideBar;
