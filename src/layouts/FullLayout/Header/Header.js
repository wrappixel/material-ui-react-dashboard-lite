import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Badge, Box,  Hidden, IconButton, Toolbar, makeStyles } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import MailIcon from '@material-ui/icons/Mail';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import NotificationsNoneIcon from '@material-ui/icons/Notifications';
import LogoIcon from './Logo/LogoIcon';
import LogoText from './Logo/LogoText';

const useStyles = makeStyles((theme) => ({
    root: {},
    Logo: {
        display: 'flex',
        alignItems: 'center',
    },
    logoText:{
       minWidth:200, 
       display:'flex'
    },
    menuButton: {
        marginLeft:theme.spacing(1),
        marginRight:theme.spacing(1),
    },
    button:{
        color:'white'
    }
}));

const Header = (props) => {
    const classes = useStyles();
    return (
        <AppBar>
            <Toolbar>
                {/* ------------ Logo ------------- */}
                <Link to="/" className={classes.Logo}>
                    <LogoIcon />
                    <Hidden mdDown><span className={classes.logoText}>&nbsp;<LogoText /></span></Hidden>
                </Link>
                {/* ------------ End Logo ------------- */}
                {/* ------------ Menu icon ------------- */}
                <Hidden mdDown>
                    <IconButton edge="start" color="inherit" aria-label="menu" onClick={props.toggleSidebar}>
                        <MenuIcon />
                    </IconButton>
                </Hidden>

                <Hidden lgUp>
                    <IconButton color="inherit" aria-label="menu" onClick={props.toggleMobileSidebar}>
                        <MenuIcon />
                    </IconButton>
                </Hidden>
                {/* ------------ End Menu icon ------------- */}
                
                <Box flexGrow={1} />
                
                <IconButton aria-label="show 4 new mails" color="inherit">
                <Badge variant="dot" color="secondary">
                    <MailIcon />
                </Badge>
                </IconButton>
            
            
                <IconButton aria-label="show 11 new notifications" color="inherit">
                    <Badge variant="dot" color="secondary">
                        <NotificationsNoneIcon />
                    </Badge>
                </IconButton>
                <Link to="/login">
                <IconButton className={classes.button} aria-label="menu">
                    <ExitToAppIcon />
                </IconButton>
                </Link>
            </Toolbar>
        </AppBar>
    );
}

export default Header;