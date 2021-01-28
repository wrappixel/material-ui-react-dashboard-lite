import React from 'react';
import {
    Grid,
    Card,
    CardContent,
    CardHeader,
  } from '@material-ui/core';
import SalesOverview from  '../Components/DashboardComponents/SalesOverview'  
import Visitors from  '../Components/DashboardComponents/Visitors'  
import InfoCards from '../Components/DashboardComponents/InfoCard';
import Contacts from '../Components/DashboardComponents/Contact';
import Table from './Table'
import BlogCard from '../Components/DashboardComponents/BlogCards'
const Home = () => {
    return (
        <Grid container spacing={3}>
            <Grid item lg={3} md={12} xs={12}>
                <InfoCards heading="Total Profit" text="P" style={{background: '#fdaeae'}} cost="$23500"/>
            </Grid>
            <Grid item lg={3} md={12} xs={12}>
                <InfoCards heading="Monthly Cost" text="M" style={{background: '#89c9f3'}} cost="$3500"/>
            </Grid>
            <Grid item lg={3} md={12} xs={12}>
                <InfoCards heading="Yearly Expense" text="Y" style={{background: '#f1cc65'}} cost="$63500"/>
            </Grid>
            <Grid item lg={3} md={12} xs={12}>
                <InfoCards heading="Todays Production" text="T" style={{background: '#97e8b0'}} cost="3600"/>
            </Grid>

            <Grid item lg={8} md={12} xs={12}>
                <Card elevation={1}>
                    <CardHeader titleTypographyProps={{variant:'h4' }} title="Sales Overview" subheader="Ample Admin Vs Pixel Admin"/>
                    <CardContent>
                        <SalesOverview/>
                    </CardContent>
                </Card>
            </Grid>

            <Grid item lg={4} md={12} xs={12}>
                <Card>
                    <CardHeader titleTypographyProps={{variant:'h4' }} title="Visitors" subheader="Different Devices Used to Visit"/>
                    <CardContent>
                        <Visitors/>
                    </CardContent>
                </Card>
            </Grid>

            

            <Grid item lg={3} md={12} xs={12}>
                <Contacts/>
            </Grid>
            <Grid item lg={9} md={12} xs={12}>
                <Table/>
            </Grid>

            <Grid item lg={3} md={12} xs={12}>
                <BlogCard image="/static/images/backgrounds/u1.jpg" title="So Exited to watch"/>
            </Grid>
            <Grid item lg={3} md={12} xs={12}>
                <BlogCard image="/static/images/backgrounds/u2.jpg" title="So Exited to watch"/>
            </Grid>
            <Grid item lg={3} md={12} xs={12}>
                <BlogCard image="/static/images/backgrounds/u3.jpg" title="So Exited to watch"/>
            </Grid>
            <Grid item lg={3} md={12} xs={12}>
                <BlogCard image="/static/images/backgrounds/u4.jpg" title="So Exited to watch"/>
            </Grid>
        </Grid>
        
    );
}
 
export default Home;