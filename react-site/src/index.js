import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import CustomerRegistration from './components/CustomerComponents/Authentication/CustomerRegistration';
import Navbar from './components/adminComponents/Navbar/Navbar';
import Sidebar from './components/adminComponents/Sidebar/Sidebar';
import Dashboard from './components/adminComponents/Dashboard/Dashboard';
import Login from './components/adminComponents/Login/Login';
import Addcustomer from './components/adminComponents/AddCustomer/Addcustomer';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import { Link } from "react-router-dom";
//rider
import "bootstrap/dist/css/bootstrap.min.css";
import RiderHis from './components/riderComponents/RiderHis/RiderHis';
import RiderBal from './components/riderComponents/RiderBal/RiderBal';
import Redeem from './components/riderComponents/Redeem/Redeem';
import CashOut from './components/riderComponents/CashOut/CashOut';
import NavBar from './components/riderComponents/NavBar/NavBar';
import SideBar from './components/riderComponents/SideBar/SideBar';
import Footer from './components/riderComponents/Footer/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Login/> */}

    <Router>
    {/* <Dashboard/> */}
    {/* <Login/> */}
    <Routes>

    <Route   path='/customerRegistration' element={<CustomerRegistration/>} />
    <Route   path='/adminlogin' element={<Login/>} />
    <Route   path='/admindashboard' element={<Dashboard/>} />

    <Route   path='/addcustomer' element={<Addcustomer/>} />


    </Routes>
    </Router>

    {/* rider start */}
    <Router>
    <NavBar/>
    <div className="container-fluid mt-5">
	  <div className="row">
    <div className="col-lg-2">
    <SideBar/>
    </div>
    <div className="col-lg-10">
		<div className="jumbotron">
    <Routes>

    <Route  exact path='/rideHistory' element={<RiderHis/>} />
    <Route  exact path='/RiderBal' element={<RiderBal/>} />
    <Route  exact path='/Redeem' element={<Redeem/>} />
    <Route  exact path='/CashOut' element={<CashOut/>} />
    

    </Routes>
    </div>
		</div>
	  </div>
    </div>
    <Footer/>
    </Router>
    {/* rider end */}

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
