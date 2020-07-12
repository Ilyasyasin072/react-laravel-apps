import React, { useEffect, useState, useRef, useContext } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Bar } from 'react-chartjs-2';
import { Container, Card, CardContent, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Typography } from "@material-ui/core";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Chartjs from 'chart.js';
import { LandingContext, ChartContext } from '../../context/LandingContext';
const Landing = (props) => {

  const [chartContainer, chartInstance, setChartInstance, inven, setInvent] = useContext(LandingContext);
  const [chart, setChart] = useContext(ChartContext);

  var chartOptions = {
    showScale: true,
    pointDot: true,
    showLines: false,

    title: {
      display: true,
      text: 'Chart Inventory'
    },

    legend: {
      display: true,
      labels: {
        boxWidth: 50,
        fontSize: 10,
        fontColor: '#bbb',
        padding: 5,
      }
    },

    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true,
          min: 0,
          max: 100
        }
      }]
    }
  }


  return (

    <div style={{ marginTop: '10px' }}>
      <CssBaseline />
      <Grid container spacing={3}>
        <Grid item xs={6} >
          <Card>
            <CardContent>
              <canvas ref={chartContainer} />

            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={6} >
          <Card>
            <CardContent>

              <Bar
                data={chart}
                // width={50}
                // height={50}
                options={chartOptions}
              />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <div style={{ marginTop: 20, padding: 30 }}>

        <Grid container spacing={3} justify="center">
          {inven.map(row => (
            <Grid item xs key={row.id}>
              <Card>
                <CardActionArea>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      {row.inventory_categories}
                    </Typography>
                    <Typography component="p">{row.inventory_name}</Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button size="small" color="primary">
                    Btton
                  </Button>
                  <Button size="small" color="primary">
                    Learn More
                </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>
    </div>

  )
}

export default Landing;