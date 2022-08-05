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
import CustomerLogin from './components/CustomerComponents/Authentication/CustomerLogin';
import Addcustomer from './components/adminComponents/AddCustomer/Addcustomer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Link } from "react-router-dom";
<<<<<<< HEAD
import AddRider from './components/adminComponents/AddRider/AddRider';
import RiderList from './components/adminComponents/RiderList/RiderList';
=======
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.css";
import Popper from '@popperjs/core';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap-icons/font/bootstrap-icons.css';

>>>>>>> e52f11d7a0cd08d9c34cc3aaa7c111fa5349a273

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Login/> */}

    <Router>
      {/* <Dashboard/> */}
      {/* <Login/> */}
      <Routes>

        <Route path='/customerRegistration' element={<CustomerRegistration />} />
        <Route path='/adminlogin' element={<Login />} />
        <Route path='/admindashboard' element={<Dashboard />} />

<<<<<<< HEAD

        <Route path='/addcustomer' element={<Addcustomer />} />
        <Route path='/addRider' element={<AddRider></AddRider>} />
        <Route path='/riderList' element={<RiderList></RiderList>} />
      </Routes>
=======
    <Route  path='/customerRegistration' element={<CustomerRegistration/>} />
    <Route  path='/customerLogin' element={<CustomerLogin/>} />
    <Route  path='/adminlogin' element={<Login/>} />
    <Route  path='/admindashboard' element={<Dashboard/>} />



    <Route  path='/addcustomer' element={<Addcustomer/>} />

    </Routes>
>>>>>>> e52f11d7a0cd08d9c34cc3aaa7c111fa5349a273
    </Router>



  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
