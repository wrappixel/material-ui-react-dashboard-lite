import React, {useState} from 'react';
import { Outlet } from 'react-router-dom';
import { makeStyles } from '@material-ui/core';
import Header from './Header/Header';
import Sidebar from  './Sidebar/Sidebar';
import {SidebarWidth} from '../../assets/jss/Theme-variable'

const useStyles = makeStyles((theme) => ({
    root: {
      backgroundColor: theme.palette.background.dark,
      display: 'flex',
      height: '100%',
      overflow: 'hidden',
      width: '100%'
    },
    wrapper: {
      display: 'flex',
      flex: '1 1 auto',
      overflow: 'hidden',
      paddingTop: 64,
    },
    hideFullSidebar: {
        [theme.breakpoints.up('lg')]: {
            paddingLeft: SidebarWidth
          }
    },
    contentContainer: {
      display: 'flex',
      flex: '1 1 auto',
      overflow: 'hidden'
    },
    content: {
      flex: '1 1 auto',
      padding:25,
      height: '100%',
      overflow: 'auto'
    }
  }));
const FullLayout = () => {
    const classes = useStyles();
    const [isSidebarOpen, setSidebarOpen] = useState(true);
    const [isMobileSidebarOpen, setMobileSidebarOpen] = useState(false);
    return ( 
    <div className={classes.root}>

        <Header toggleSidebar={() => setSidebarOpen(!isSidebarOpen)} toggleMobileSidebar={() => setMobileSidebarOpen(true)}/>
        <Sidebar 
            isSidebarOpen={isSidebarOpen} 
            isMobileSidebarOpen={isMobileSidebarOpen} 
            onSidebarClose={() => setMobileSidebarOpen(false)}/>
        
        <div className={isSidebarOpen ? classes.wrapper + ' ' + classes.hideFullSidebar : classes.wrapper}>
            <div className={classes.contentContainer}>
                <div className={classes.content}>
                    <Outlet />
                </div>
            </div>
        </div>
        
    </div>
    );
}
 
export default FullLayout;