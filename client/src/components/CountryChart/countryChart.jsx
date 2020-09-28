import React from'react';
import { Component } from 'react'
import CanvasJSReact from'../chart/canvasChart/canvasjs.react';
import axios from 'axios';

let CanvasJS = CanvasJSReact.CanvasJS;
let CanvasJSChart = CanvasJSReact.CanvasJSChart;

 
let dataPoints =[];
let stateSelected = "NC"

export default class StateChart extends Component {
    componentDidMount(){
		let chart = this.chart;
		axios.get('https://api.covidtracking.com/v1/us/daily.json')
		.then(function(res) {
			for (let i = 0; i < res.data.length; i++) {
				let dateStr = (res.data[i].date).toString();
				let formattedDate = dateStr.slice(0, 4) + "," + dateStr.slice(4, 6) + "," + dateStr.slice(6, 8);
				console.log(formattedDate)
				dataPoints.push({
					x: new Date(formattedDate),
					y: parseInt(res.data[i].positive)
                });
               
            }
            
			chart.render();
		});
	}
 
	render() {	
		const options = {
			theme: "dark2",
			title: {
				text: "US Case Trend"
			},
			axisY: {
				title: "Cases",
				prefix: ""
			},
			data: [{
				type: "line",
				xValueFormatString: "YYYY MM DD",
				yValueFormatString: "",
				dataPoints: dataPoints
			}]
		}
		return (
		<div>
			<CanvasJSChart options = {options} 
				 onRef={ref => this.chart = ref}
			/>
			{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
		</div>
		);
	}
	
	
}
 
