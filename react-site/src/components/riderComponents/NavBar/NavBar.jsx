import React, {useState, useEffect} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "./NavBar.css";



const  NavBar = ()=>{

        const navigate  = useNavigate();
        let user = JSON.parse(localStorage.getItem('user'));

        const logout = () =>{
        var obj = {token: user.access_token};
        axios.post("http://127.0.0.1:8000/api/LogoutApi",obj)
        .then(resp=>{
            var data = resp.data;
            console.log(data);
            navigate('/RLogin');
        }).catch(err=>{
            console.log(err);
        });
    }

return(
<div>
<nav className="navbar navbar-expand-md bg-light navbar-light sticky-top shadow-sm">
<div className="container">
<Link to="/RDash" className="navbar-brand"><span className="text-danger  h4">Your</span><span className="text-dark logo h4" >Ride</span></Link>
<div class="d-flex justify-content-end">
        <img  src={process.env.PUBLIC_URL+"index.png"} alt="profile pic"  width="40" height="40" className="rounded-circle" /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button type="button" class="btn btn-primary" onClick={logout}>Logout</button>
        </div>
</div>
</nav>
</div>
    )
}
export default NavBar;
