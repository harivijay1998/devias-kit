import React, { useState } from "react";
import { Box } from "@mui/material";
import SideBar from "./SideBar";
import Dashboard from "./DashBoard";

const Home = () => {
  const [activeView, setActiveView] = useState(<Dashboard/>);

  return (
    <Box sx={{ display: "flex", height: "100vh" }}>
      {/* Main Content Area */}
      <Box
        sx={{
          flexGrow: 1,
          marginInlineStart:'300px',
          overflowY: "auto",
          backgroundColor: "#f5f5f5",
        }}
      >
        {activeView} 
      </Box>

      {/* Sidebar on the right */}
      <SideBar setActiveView={setActiveView} />
    </Box>
  );
};

export default Home;
