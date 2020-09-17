import React from 'react';
import StateDropdown from './dropdown'
import {Line} from 'react-chartjs-2';
import axios from 'axios'

const state = {
  labels: ['January', 'February', 'March',
           'April', 'May'],
  datasets: [
    {
      label: 'Cases',
      fill: false,
      lineTension: 0.5,
      backgroundColor: 'rgba(75,192,192,1)',
      borderColor: 'rgba(0,0,0,1)',
      borderWidth: 2,
      data: [65, 59, 80, 81, 56]
    }
  ]
}

const stateSelected = ["NC"]


export default class Chart extends React.Component {

  componentDidMount() {

    axios.get("https://data.cdc.gov/resource/9mfq-cb36.json?state=" + stateSelected)
        .then(res => {

            console.log("NC DATA", res.data);
            this.setState({ datasets: res.data })

        })
};

  render() {
    return (
      <>
      <div className="col-3">
        put stats here
      </div>
      <div className="col-9">
        <StateDropdown />
        <Line
          data={state}
          options={{
            title:{
              display:true,
              text:{stateSelected},
              fontSize:20
            },
            legend:{
              display:true,
              position:'right'
            }
          }}
        />
      </div>
      </>
    );
  }
}