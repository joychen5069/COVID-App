import React from "react";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Navbar from "../components/navigation/Navbar";
import Chart from "../components/chart/chart";
import CountryChart from "../components/CountryChart/countryChart";
import StateData from "../components/currentData/stateData";
// import StateDropdown from "../components/currentData/dropdown"
import "../components/newsComponent/news.css";

const ChartComp = (props) => {
  return (
    <>
      <div className="container mainWrapper">
        <Header />
        <Navbar logout={props.logout} />

        <h3 className="text-center pageTitle">Country and State Trends</h3>
        {/* <StateDropdown /> */}
        <div className="row">
          <div className="col-4">
            <StateData />
          </div>
          <div className="col-8">
            <Chart />
          </div>

        </div>
        <CountryChart />
        <Footer />
      </div>
    </>
  );
};
export default ChartComp;
