import React from 'react';
import { Box, Typography, Button } from '@material-ui/core';

const UpgradeToPro = () => {
    return (
        <Box p={2} m={2} bgcolor="background.dark">
            <Typography
            align="center"
            gutterBottom
            variant="h4"
            >
            Want More?
            </Typography>
            <Typography
            align="center"
            variant="body2"
            >
            Upgrade to PRO version to get tons of Feature
            </Typography>
            <Box
            display="flex"
            justifyContent="center"
            mt={2}
            >
            <Button
                color="primary"
                component="a"
                href="https://www.wrappixel.com"
                disableElevation
                variant="contained"
            >
                Check Premium
            </Button>
            </Box>
        </Box> 
    );
}
 
export default UpgradeToPro;