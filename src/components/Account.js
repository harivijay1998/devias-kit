import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { Divider } from '@mui/material';

const Account= () => {
  const [profileData, setProfileData] = useState({
    firstName: 'Sofia',
    lastName: 'Rivers',
    email: 'sofia@devias.io',
    phone: '',
    state: '',
    city: '',
  });

  const handleChange = (event) => {
    setProfileData({
      ...profileData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Profile data:', profileData);
  };

  return (
    <Grid container spacing={2} sx={{paddingInline:'50px',paddingBlock:'150px',gap:'20px'}}>
      <Grid item xs={12} md={5} sx={{border:'1px solid gray',paddingBlock:'0px',height:'350px',borderRadius:'20px'}}>
        <Box sx={{ display: 'flex', flexDirection:'column',alignItems: 'center', marginBottom: 2 ,paddingBlock:'50px' ,paddingInline:'50px' }}>
          <Avatar alt="Sofia Rivers" src="images/avatar.png" sx={{ width: 80, height: 80, marginRight: 2 }} />
          <div>
            <Typography variant="h5">Sofia Rivers</Typography>
            <Typography variant="body2">Los Angeles, USA</Typography>
            <Typography variant="body2">GMT-7</Typography>
          </div>
        </Box>
        <Button variant="contained" component="label" sx={{left:'140px',top:'-30px'}}>
          Upload picture
          <input type="file" hidden />
        </Button>
      </Grid>

      <Grid item xs={12} md={6} sx={{border:'1px solid gray', paddingInline:'20px', paddingBlock:'30px',borderRadius:'20px'}}>
        <Typography variant="h4">Profile</Typography>
        <Typography variant="body2" sx={{marginBottom:'10px'}}>The information can be edited</Typography>
        <Divider sx={{backgroundColor:'gray'}}></Divider>

        <form onSubmit={handleSubmit} >
          <Grid container spacing={2} sx={{marginTop:'20px'}}>
            <Grid item xs={6}>
              <TextField
                label="First name*"
                name="firstName"
                value={profileData.firstName}
                onChange={handleChange}
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="Last name*"
                name="lastName"
                value={profileData.lastName}
                onChange={handleChange}
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Email address*"
                name="email"
                value={profileData.email}
                onChange={handleChange}
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Phone number"
                name="phone"
                value={profileData.phone}
                onChange={handleChange}
                fullWidth
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="State"
                name="state"
                value={profileData.state}
                onChange={handleChange}
                fullWidth
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="City"
                name="city"
                value={profileData.city}
                onChange={handleChange}
                fullWidth
              />
            </Grid>
          </Grid>
          <Button variant="contained" type="submit" sx={{ marginTop: 2 }}>
            Save details
          </Button>
        </form>
      </Grid>
    </Grid>
  );
};

export default Account;