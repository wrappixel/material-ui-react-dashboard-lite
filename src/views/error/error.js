import React from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  Avatar,
  makeStyles
} from '@material-ui/core';
import {Link} from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    height: '100vh',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  },
  fonts: {
    fontSize:80
  },
  badge:{
    margin:'0 auto',
    backgroundColor: theme.palette.primary.main,
    width: theme.spacing(7),
    height: theme.spacing(7),
    marginBottom:30
  }
}));

const Error = () => {
  const classes = useStyles();

  return (
    <div
      className={classes.root}
    >
      <Box
        display="flex"
        flexDirection="column"
        height="100%"
        textAlign="center"
        justifyContent="center"
      >
        <Container maxWidth="md">
          <Avatar className={classes.badge}>M</Avatar>
          <Typography
            align="center"
            color="textPrimary"
            variant="h1" 
            className={classes.fonts}
          >
            OOps...
          </Typography>
          <Typography
            align="center"
            color="textPrimary"
            variant="subtitle2"
            
          ><Box p={2}>
            (404) The Page you are looking for is not available. kindly click on the back to home button
            </Box>
          </Typography>
          <Link to="/home" align="center"><Button color="secondary" variant="contained" disableElevation>Back to Home</Button></Link>
        </Container>
      </Box>
    </div>
  );
};

export default Error;
