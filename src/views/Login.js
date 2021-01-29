import React from 'react';
import {
  Box,
  Container,
  TextField, 
  Typography,
  Button,
  Avatar,
  makeStyles
} from '@material-ui/core';
import {Link} from 'react-router-dom';
import { useNavigate } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    height: '100vh',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  },
  fonts: {
    fontSize:40
  },
  badge:{
    margin:'0 auto',
    backgroundColor: theme.palette.primary.main,
    width: theme.spacing(7),
    height: theme.spacing(7),
    marginBottom:30
  }
}));

const Login = () => {
  const classes = useStyles();
  const [field, setField] = React.useState('')
  const [pass, setPass] = React.useState('')
  const navigate = useNavigate();
  const handleSubmit  = (event) =>{
    event.preventDefault();
    return navigate('/home')
  } 
  const handleInput  = (event) =>{
    setField(event.target.value)
    
  }
  const handleInputPass  = (event) =>{
    setPass(event.target.value)
  }  
  
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
        <Container maxWidth="sm">
        
          <Avatar className={classes.badge}>M</Avatar>
          <Typography
            align="center"
            color="textPrimary"
            variant="h1" 
            className={classes.fonts}
          >
            Login
          </Typography>
          
             
          <Box p={3}>
            <form noValidate autoComplete="off" onSubmit={handleSubmit}>
                <Box p={2}><TextField fullWidth id="username" onChange={handleInput} value={field} required label="Username" variant="outlined" /></Box>
                <Box p={2}><TextField fullWidth id="password" onChange={handleInputPass} value={pass} required label="Password" variant="outlined" type="password"/></Box>
                <Box p={2}><Button fullWidth size="large" disabled={!field || !pass} type="submit" color="secondary" variant="contained" disableElevation>Login</Button></Box>
            </form>
            <Box p={2}>
            <Typography color="textSecondary" variant="body1" >
                  Don&apos;t have an account?  
                <Link to="/app/home" variant="h6" >
                    Sign up
                  </Link>
            </Typography>
            </Box>
          </Box>
          
          
          
        </Container>
      </Box>
    </div>
  );
};

export default Login;
