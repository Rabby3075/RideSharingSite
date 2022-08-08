import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "./RLogin.css";

const RLogin = () => {

	let[token, setToken]= useState("");
    let[username, setUsername] = useState("");
    let[password, setPassword] =useState("");
    const navigate  = useNavigate("");

    const loginSubmit = (e) =>{
		e.preventDefault();
        var obj = {username: username, password: password};
        console.log(obj);
		axios.post("http://127.0.0.1:8000/api/LoginApi",obj)
        .then(resp=>{
            var token = resp.data;
            console.log(token);
            var user = {userId: token.userid, access_token:token.token};
            localStorage.setItem('user',JSON.stringify(user));
            if(token == "No user found"){
                navigate('/RLogin');
				alert("No User Found!");
            }else{
				
                navigate('/RDash');
            }
        }).catch(err=>{
            console.log(err);
        });


    }

	return (
		<div className="body">
			<div className="container">
				<div className="screen">
					<div className="screen__content">
						<br /><br />
						<h1 className="hl">Login</h1>
						<form>
							<div className="login__field">
							<input type="text" name="username" required="required" value={username} onChange={(e)=>setUsername(e.target.value)}  /><span>Username</span>
							</div>
							<div className="login__field">
							<input type="password" name="password" required="required" value={password} onChange={(e)=>setPassword(e.target.value)} /><span>Password</span>
							</div>
							<button className="button login__submit" onClick={loginSubmit}>Login
							</button>
						</form>
						<div className="social-login">
							<br /><br /><br />
							<Link to="/RReg" ><h3>Sign-Up?</h3></Link>
						</div>
					</div>
					<div className="screen__background">
						<span className="screen__background__shape screen__background__shape4"></span>
						<span className="screen__background__shape screen__background__shape3"></span>
						<span className="screen__background__shape screen__background__shape2"></span>
						<span className="screen__background__shape screen__background__shape1"></span>
					</div>
				</div>
			</div>
		</div>
	)
}

export default RLogin;