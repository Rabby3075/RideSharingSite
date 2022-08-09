import React from "react";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";

import "./dashboard.scss"
import Dropdownlist from "../Dropdownlist/Dropdownlist";
import Widget from "../Widget/Widget";



const Dashboard = () => {
    return(
            <div className="dashboard">
                <Sidebar/>
                <div className="dashboardContainer">
                    <Navbar/>
                    <div className="widgets">
                        <Widget/>
                    </div>

                </div>
            </div>
    )
}


export default Dashboard; 