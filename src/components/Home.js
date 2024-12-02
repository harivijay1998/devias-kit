import React from 'react'
import { Box, Grid } from '@mui/material'
import SideBar from './SideBar'
import DashBoard from './DashBoard'
const Home = () => {
  return (
    <Box sx={{display:'flex'}}>
        <SideBar/>
        <Box sx={{flexGrow:1}}>
            <DashBoard/>
        </Box>
    </Box>
    
  )
}

export default Home
