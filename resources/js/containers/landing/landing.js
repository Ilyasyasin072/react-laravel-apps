import React, { useEffect, useState, useRef } from 'react';
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
const Landing = (props) => {
  const [inven, setInven] = useState([]);
  const [chart, setChart] = useState([]);
  const chartContainer = useRef(null);
  const [chartInstance, setChartInstance] = useState(null);
  // const useStyles = makeStyles({
  //   table: {
  //     minWidth: 650,
  //   }
  // });

  // const classes = useStyles();

  console.log(chart);
  const chartConfig = {
    type: 'bar',
    data: {
      labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
      datasets: [{
        label: '# of Votes',
        data: chart,
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 1
      }]
    },
    options: {
      // ...
    }
  };

  useEffect(() => {
    let labels = [];
    let datas = [];
    axios.get('http://127.0.0.1:8000/api/inventory')
      .then(res => {
        // console.log(res.data);
        setInven(res.data);
        setChart(res.data);

        // let inv = res.data;
        for (let inv of res.data) {
          let created_at = inv.created_at;
          labels.push(created_at);
          datas.push(inv.id);
        }
        setChart({
          labels: labels,
          data: datas,
          datasets: [{
            label: 'Inventory',
            data: datas,
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)'
            ],
          }],
        })

        const chartConfig = {
          type: 'bar',
          data: {
            labels: labels,
            datasets: [{
              label: '# of Votes',
              data: datas,
              backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
              ],
              borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
              ],
              borderWidth: 1
            }]
          },
          options: {
            // ...
          }
        };
        if (chartContainer && chartContainer.current) {
          const newChartInstance = new Chartjs(chartContainer.current, chartConfig);
          setChartInstance(newChartInstance);
        }

      })
      .catch(erorr => {
        console.log(erorr);
      });
  }, [chartContainer]);

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
                    Share
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