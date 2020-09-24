import React from'react';
import { Component } from 'react'
import CanvasJSReact from'./canvasChart/canvasjs.react';
import StateData from '../currentData/stateData'
import axios from 'axios';

let CanvasJS = CanvasJSReact.CanvasJS;
let CanvasJSChart = CanvasJSReact.CanvasJSChart;

 
let dataPoints =[];
let stateSelected = "NC"

export default class StateChart extends Component {
    componentDidMount(){
		let chart = this.chart;
		axios.get('https://data.cdc.gov/resource/9mfq-cb36.json?state=' + stateSelected)
		.then(function(res) {
            console.log(res.data)
           
			for (let i = 41; i < res.data.length; i++) {
				dataPoints.push({
					x: new Date(res.data[i].submission_date),
					y: parseInt(res.data[i].new_case)
                });
               
            }
            
			chart.render();
		});
	}
 
	render() {	
		const options = {
			theme: "dark2",
			title: {
				text: stateSelected+ " Case Trend"
			},
			axisY: {
				title: "Cases",
				prefix: ""
			},
			data: [{
				type: "line",
				xValueFormatString: "MMMM DD YYYY",
				yValueFormatString: "",
				dataPoints: dataPoints
			}]
		}
		return (
			<>
			<div>
				<StateData state={this.stateSelected} />
			</div>
		<div>
			<CanvasJSChart options = {options}
				 onRef={ref => this.chart = ref}
			/>
			{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
		</div>
		</>
		);
	}
	
	
}
 
