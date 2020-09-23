import React from 'react';
import {Line} from 'react-chartjs-2';
import axios from 'axios'

const state = {
  labels: [],
  datasets: []
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
      <div>
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