
import React, {useState, userEffect} from 'react';
import '../Navbar/CustomerNavbar.css';
import { Link } from "react-router-dom";
import axios from 'axios';
import { useNavigate  } from "react-router-dom";

const CustomerNavbar = () =>{

    const navigate  = useNavigate();
        let user = JSON.parse(localStorage.getItem('user'));

        const logout = () =>{
        var obj = {token: user.access_token};
        axios.post("http://127.0.0.1:8000/api/customer/logout",obj)
        .then(resp=>{
            var data = resp.data;
            console.log(data);
            if(data === "Logout"){
                localStorage.clear();
                navigate('/customerLogin')
            }
            //navigate('/RLogin');
        }).catch(err=>{
            console.log(err);
        });
    }

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
          <Link className="nav-link" to={"/customer/home"}><i className="bi bi-house-fill me-1"></i>Home</Link>
        </li>
        <li className="nav-item me-4">
          <Link className="nav-link" to={"/customer/riderequest"}><i className="bi bi-truck-front-fill me-1"></i>Request for a ride</Link>
        </li>
        <li className="nav-item me-4">
          <Link className="nav-link" to="/customer/ridehistory"><i className="bi bi-clipboard2-data-fill me-1"></i>Ride History</Link>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" data-bs-target="#demo-drop" href="#"><img src={process.env.PUBLIC_URL+"index.png"} alt="profile pic"  width="40" height="40"></img></a>
          <ul className="dropdown-menu" id="dot-drop">
          <li>
          <a className="dropdown-item" href="/customer/viewprofile"><i className="bi bi-file-earmark-person-fill me-2"></i>View Profile</a>
         </li>
         <li>
          <a className="dropdown-item" href="/customer/changepassword"><i className="bi bi-key-fill me-2"></i>Change Password</a>
         </li>
         <li>
          <a className="dropdown-item" href="/customer/discount"><i className="bi bi-cash-stack me-2"></i>Discount Details</a>

         </li>
         <div className="dropdown-divider"></div>
         <li className="logout">
          <button className="dropdown-item" onClick={logout}><i className="bi bi-box-arrow-left me-2"></i>Logout</button>
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
