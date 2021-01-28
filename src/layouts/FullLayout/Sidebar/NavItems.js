import React from 'react';
import { Button, ListItem, makeStyles,ListItemIcon, ListItemText } from '@material-ui/core';
import { NavLink } from 'react-router-dom';
import {infoColor} from '../../../assets/jss/Theme-variable';

const useStyles = makeStyles((theme) => ({
    icon: {
        marginRight: theme.spacing(1),
        marginLeft: theme.spacing(1),
        minWidth:'auto'
    },
    item: {
        display: 'flex',
        paddingTop: 0,
        paddingBottom: 5,
        
      },
    title: {
        marginRight: 'auto',
        fontWeight: '400'
    },
    active: {
        backgroundColor: infoColor,
        '&:hover' :{
            backgroundColor: infoColor,
        },
        '& $title': {
            color: "white"
        },
        '& $icon': {
            color: "white"
        }
    },
    button: {
        color: theme.palette.text.secondary,
        fontWeight: theme.typography.fontWeightMedium,
        justifyContent: 'flex-start',
        letterSpacing: 0,
        padding: '7px 6px',
        textTransform: 'none',
        width: '100%'
      },

}));

const Navitems = ({ className, href, icon:Icon, title, ...rest }) => {

    const classes = useStyles();

    return (
        <ListItem className={classes.item} disableGutters  {...rest}>
            <Button  activeClassName={classes.active} component={NavLink} to={href}  className={classes.button} >
                <ListItemIcon className={classes.icon}><Icon /></ListItemIcon>
                <ListItemText className={classes.title}>{title}</ListItemText>
            </Button>
        </ListItem>
        
    );
}

export default Navitems;