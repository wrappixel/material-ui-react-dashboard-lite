import React from 'react';
import Chart from "react-apexcharts";
import {
    Card,
    CardContent,
    CardHeader,
  } from '@material-ui/core';
const ChartPage = () => {
    const optionssalesoverview = {
        grid: {
          show: true,
          borderColor: "rgba(0,0,0,.08)",
          strokeDashArray: 2,
          padding: {
            left: 0,
            right: 0,
            bottom: 0,
          },
        },
        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: "15%",
            endingShape: "flat",
          },
        },
        
        colors: ["#0b70fb", "#6ac3fd"],
        fill: {
          type: "solid",
          opacity: 1,
        },
        chart: {
          toolbar: {
            show: false,
          },
          fontFamily: 'poppins',
          sparkline: {
            enabled: false,
          },
        },
        dataLabels: {
          enabled: false,
        },
        markers: {
          size: 0,
        },
        legend: {
          show: true,
        },
        xaxis: {
          type: "category",
          categories: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
          labels: {
            style: {
              cssClass: "grey--text lighten-2--text fill-color",
            },
          },
        },
        yaxis: {
          show: true,
          labels: {
            style: {
              cssClass: "grey--text lighten-2--text fill-color",
            },
          },
        },
        stroke: {
          show: true,
          width: 5,
          lineCap: 'butt',
          colors: ['transparent']
        },
        tooltip: {
          theme: "dark",
        },
      };
      const seriessalesoverview = [
        {
          name: "Ample",
          data: [9, 5, 3, 7, 5, 10, 3],
        },
        {
          name: "Pixel",
          data: [6, 3, 9, 5, 4, 6, 4],
        },
      ];

    return (
        <Card elevation={1}>
                    <CardHeader titleTypographyProps={{variant:'h4' }} title="Chart Example" subheader="Product A Vs Product B"/>
                    <CardContent>
            <Chart
              options={optionssalesoverview}
              series={seriessalesoverview}
              type="bar"
              height="308px"
            />
           </CardContent>
        </Card>
    );
}
 
export default ChartPage;