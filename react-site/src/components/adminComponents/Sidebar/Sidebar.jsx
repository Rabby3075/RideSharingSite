import React from "react";
import "./sidebar.scss";
import DashboardIcon from '@mui/icons-material/Dashboard';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import DirectionsBikeIcon from '@mui/icons-material/DirectionsBike';
import PersonIcon from '@mui/icons-material/Person';
import VisibilityIcon from '@mui/icons-material/Visibility';

import { Link } from "react-router-dom";


const Sidebar = () => {
    return (

        <div className="sidebar">
            <div className="top">
                <span className="logo">Your Ride</span>
            </div>
            <hr />
            <div className="center">
                <ul>
                    <li>
                        <DashboardIcon />
                        <span>Dashboard</span>
                    </li>

                    <p className="title">ADD</p>
                    <Link to="/adminlogin" style={{ textDecoration: "none" }}>
                        <li>
                            <SupervisorAccountIcon className="icon" />
                            <span>Admin</span>
                        </li>
                    </Link>
                    <Link to="/addRider" style={{ textDecorate: "none" }}>
                        <li>
                            <DirectionsBikeIcon className="icon" />
                            <span>Rider</span>
                        </li>
                    </Link>
                    <Link to="/addcustomer" style={{ textDecoration: "none" }}>
                        <li>
                            <PersonIcon className="icon" />
                            <span>Customer</span>
                        </li>
                    </Link>
                    <p className="title">View</p>
                    
                    <li>
                        
                        <VisibilityIcon className="icon" />
                        <span>Admin</span>
                    </li>
                    <Link to="/riderList" style={{ textDecoration: "none" }}>

                        <li>

                            <VisibilityIcon className="icon" />
                            <span>Rider</span>
                        </li>
                    </Link>
                    <Link to="/customerview" style={{ textDecoration: "none" }}>
                    <li>
                        <VisibilityIcon className="icon" />
                        <span>Customer</span>
                    </li>
                    </Link>
                </ul>


            </div>
            <div className="foot"> color option </div>
        </div>


    )
}


export default Sidebar; 