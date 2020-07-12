import React, { useState, createContext, useEffect, useRef } from 'react';
import axios from 'axios';
import Chartjs from 'chart.js';

export const LandingContext = createContext();
export const ChartContext = createContext();

export const LandingProvider = props => {
    const [category, setCategory] = useState();
    const [chart, setChart] = useState();
    const chartContainer = useRef(null);
    const [chartInstance, setChartInstance] = useState(null);
    const [inven, setInven] = useState([]);

    const state =

        useEffect(() => {

            axios.get('http://127.0.0.1:8000/api/inventory')
                .then(res => {
                    let labels = [];
                    let datas = [];
                    // console.log(res.data);
                    setChart(res.data);
                    setInven(res.data);

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
    return (
        <LandingContext.Provider value={[
            chartContainer, chartInstance, setChartInstance
            , inven, setInven]}>
            <ChartContext.Provider value={[chart, setChart,]}>
                {props.children}
            </ChartContext.Provider>

        </LandingContext.Provider>
    )
}