import React, {useState, userEffect} from "react";
import axios from "axios";
import Dashboard from "../Dashboard/Dashboard";
import { Link } from "react-router-dom";
import { useNavigate  } from "react-router-dom"

const Login = ()=>{
    let[token, setToken]= useState("");
    let[email, setName] = useState("");
    let[password, setPassword] =useState("");
    const navigate  = useNavigate("");

    const loginSubmit= ()=>{
        var obj = {email: email, password: password};
        axios.post("http://127.0.0.1:8000/api/adminlogin",obj)
        .then(resp=>{
            var token = resp.data;
            console.log(token);
            var user = {userId: token.userid, access_token:token.token};
            localStorage.setItem('user',JSON.stringify(user));
            //  console.log(localStorage.getItem('user'))
            if(token == "No user found"){
            navigate('/adminlogin');

            }
            else{
                navigate('/admindashboard');
            }
        }).catch(err=>{
            console.log(err);
        });


    }
    return(
        <div>
            <form>
                <input type="text" value={email} onChange={(e)=>setName(e.target.value)}></input>
                <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)}></input>

            </form>
                <button onClick={loginSubmit}>Login</button>
                {/* <Dashboard/> */}
        </div>

    )
}
export default Login;  