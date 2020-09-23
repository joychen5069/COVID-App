import React from 'react';
import { Chart, Line } from 'react-chartjs-2';
import axios from 'axios'



export default class CountryChart extends React.Component {
    state = {
        labels: ['January', 'February', 'March',
            'April', 'May'],
        datasets: [
            {
                label: 'Rainfall',
                fill: false,
                lineTension: 0.5,
                backgroundColor: 'rgba(75,192,192,1)',
                borderColor: 'rgba(0,0,0,1)',
                borderWidth: 2,
                data: [65, 59, 80, 81, 56]
            }
        ]
    }


    componentDidMount() {

        axios.get("https://api.covidtracking.com/v1/us/daily.json")
            .then(res => {

                // console.log(res.data);
                this.setState({ datasets: res.data })

            })
    };

    render() {

        return (
            <div className="col-9">
                <Line
                    // data={api.positive}
                    // labels={api.date}
                    options={{
                        title: {
                            display: true,
                            text: 'United States Trend Chart',
                            fontSize: 20
                        },
                        legend: {
                            display: true,
                            position: 'right'
                        }
                    }}
                />
            </div>

        );

    }
}