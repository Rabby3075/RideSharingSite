
import React, {useState, userEffect} from 'react';
import '../Navbar/CustomerNavbar.css';

const CustomerNavbar = () =>{

    return(
        <div>
            <nav className="navbar navbar-expand-md bg-light navbar-light sticky-top shadow-sm">
<div className="container">
<a className="navbar-brand" href="">
   <h3 className="text-danger logo">Your</h3><h3 className="text-dark logo">Ride</h3>
</a>
<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
      <span className="navbar-toggler-icon"></span>
</button>
<div className="collapse navbar-collapse" id="collapsibleNavbar">
    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item me-4">
          <a className="nav-link" href=""><i className="fa-solid fa-house-chimney me-1"></i>Home</a>
        </li>
        <li className="nav-item me-4">
          <a className="nav-link" href=""><i className="fa-solid fa-car-on me-1"></i>Request for a ride</a>
        </li>
        <li className="nav-item me-4">
          <a className="nav-link" href=""><i className="bi bi-clipboard2-data-fill me-1"></i>Ride History</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" data-bs-target="#demo-drop" href="#"><img  src={process.env.PUBLIC_URL+"index.png"} alt="profile pic"  width="40" height="40"></img></a>
          <ul className="dropdown-menu" id="dot-drop">
          <li>
          <a className="dropdown-item" href=""><i className="fa-solid fa-user me-2"></i>View Profile</a>
         </li>
         <li>
          <a className="dropdown-item" href=""><i className="fa-solid fa-pen-to-square me-2"></i>Change Password</a>
         </li>
         <li>
          <a className="dropdown-item" href="/customer/discount"><i className="bi bi-cash-stack me-2"></i>Discount Details</a>
          
         </li>
         <div className="dropdown-divider"></div>
         <li className="logout">
          <a className="dropdown-item" href=""><i className="fa-solid fa-right-from-bracket me-2"></i>Logout</a>
         </li>
          </ul>
        </li>
    </ul>
</div>
</div>
</nav>
        </div>
    )
}
export default CustomerNavbar;
