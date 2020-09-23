import React from 'react';
import StateDropdown from './dropdown';
// import './Current.css';
import axios from "axios";

export default class StateData extends React.Component {
    date = new Date().getDate() - 1;
    month = new Date().getMonth()+1;
    year = new Date().getFullYear();

    constructor() {
        super();
        this.state = {
          value: "",
          data: [],
        };
      }

    async getState(value) {
        // let stateSelected = this.props.state.province;
        let res = await axios.get("https://api.covidtracking.com/v1/states/" + value + "/current.json");
        console.log("value", value);
        console.log(res.data)
        this.setState({
          data: res.data,
          value: res.data.state
        });
      }

      stateCall = (value) => {
        this.setState({
          value: value,
        });
        this.getState(value);
        console.log(value)
      };

    render() {
        return (
            <>
            <StateDropdown value={this.state.value} />
                <div id="test">
                    <h5 className="dataTitle">{this.state.data.state} Data</h5>
                    <p>Total Tests: {this.state.data.totalTestResults}</p>
                    <p>Positive Cases: {this.state.data.positive}</p>
                    <p>Negative Tests: {this.state.data.negative}</p>
                    <p>Currently Hospitalized: {this.state.data.hospitalizedCurrently}</p>
                    <p>Deaths: {this.state.data.death}</p>
                </div>
                <p className="disclosure">Disclosure: All data is sourced from The COVID Tracking Project and is up-to-date as of {this.month}/{this.date}/{this.year}. Please note that not all testing is reported and numbers may slightly vary from CDC data. </p>
            </>
        )
    }
}