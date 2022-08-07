import React from "react";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";

import "./dashboard.scss"
import Dropdownlist from "../Dropdownlist/Dropdownlist";



const Dashboard = () => {
    return(
            <div className="dashboard">
                <Sidebar/>
                <div className="dashboardContainer">
                    <Navbar/>
                    dashboard
                    <Dropdownlist/>
                </div>
            </div>
    )
}


export default Dashboard; 