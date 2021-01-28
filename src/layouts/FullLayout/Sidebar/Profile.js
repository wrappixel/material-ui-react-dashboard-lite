import React, {useState} from 'react';
import { NavLink } from 'react-router-dom';
import { Avatar, Box, Typography,  makeStyles, Menu, MenuItem  } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const userProfile = {
    avatar: '/static/images/users/user_1.png',
    jobTitle: 'Senior Developer',
    name: 'Jonathan Deo',
    href:"/"
}; 


const useStyles = makeStyles((theme) => ({
    piclarge:{
        width: theme.spacing(6),
        height: theme.spacing(6),
    },
    profileBg: {
        backgroundImage: `url('/static/images/backgrounds/user-info.png')`,
        backgroundPosition: 'center', 
        backgroundSize: 'cover', 
        backgroundRepeat: 'no-repeat' 
    },
    profileTextBg: {
        cursor:'pointer',
        backgroundColor: 'rgba(0, 0, 0,0.5)',
        padding:'5px 10px',
        display: 'flex'
    },
    pwidth: {
        width: 200
    }
}));

const Profile = () => {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
    return ( 
        <Box className={classes.profileBg} color="white">
                <Box p={3}>
                    <Avatar component={NavLink} className={classes.piclarge} src={userProfile.avatar}  to={userProfile.href}/>
                </Box>
                <Typography  variant="h6"  className={classes.profileTextBg} onClick={handleClick}>
                    {userProfile.name}
                    <Box flexGrow={1}  />
                    <ExpandMoreIcon  fontSize="small"/>
                </Typography>
                <Menu
                    
                    anchorEl={anchorEl}
                    getContentAnchorEl={null}
                    anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
                    transformOrigin={{ vertical: "top", horizontal: "center" }}
                    
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                >
                    <MenuItem onClick={handleClose} className={classes.pwidth}>Profile</MenuItem>
                    <MenuItem onClick={handleClose}>My account</MenuItem>
                    <MenuItem onClick={handleClose}>Logout</MenuItem>
                </Menu>
            </Box>
     );
}
 
export default Profile;