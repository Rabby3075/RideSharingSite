import React from "react";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import Login from "../Login/Login";
import "./dashboard.scss"



const Dashboard = () => {
    return(
            <div className="dashboard">
                <Sidebar/>
                <div className="dashboardContainer">
                    <Navbar/>
                    dashboard
                </div>
            </div>
    )
}


export default Dashboard; 