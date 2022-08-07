import React, {useState, userEffect} from 'react';
import axios from "axios";
import { Link, Navigate } from "react-router-dom";
import { useNavigate  } from "react-router-dom"


const CustomerLogin = () =>{
    let[token, setToken]= useState("");
    let[username, setUsername] = useState("");
    let[password, setPassword] = useState("");
    const navigate  = useNavigate("");

    const CustomerLoginSubmit = () =>{
        var obj = {username: username, password: password};
        console.log(obj);
        axios.post("http://127.0.0.1:8000/api/customerLoginSubmit",obj)
        .then(resp=>{
            var response = resp.data;
            console.log(response);

            if(response.message === "Login Failed"){

                    document.getElementById('msg').innerHTML = response.message;
            }
            else{
                var user = {userId: response.token.userid, access_token:response.token.token};
                localStorage.setItem('user',JSON.stringify(user));
                console.log(localStorage.getItem('user'))
                navigate('/customer/home');
        }

        }).catch(err=>{
            console.log(err);
        });
    }

    return(

        <div className='container-fluid vh-100 '>

            <div className='mt-100'>
                <div className='rounded d-flex justify-content-center mt-10'>
                    <div className='col-md-4 col-sm-12 shadow-lg bg-light'>
                        <div className='text-center'>
                            <h3 className='text-primary '>Login</h3>
                        </div>
                        <form className='form-group p-4 '>



                                <div className='input-group mb-3'>
                                    <span className='input-group-text bg-primary'>
                                        <i className='bi bi-person-plus-fill text-white'></i>
                                    </span>
                                    <input type="text" className='form-control' name="username" id="username" placeholder='Username' value={username} onChange={(e)=>setUsername(e.target.value)}></input>
                                </div>



                                <div className='input-group mb-3'>
                                    <span className='input-group-text bg-primary'>
                                        <i className='bi bi-key-fill text-white'></i>
                                    </span>
                                    <input type="password" className='form-control' name="password" id="password" placeholder='Password' value={password} onChange={(e)=>setPassword(e.target.value)}></input>
                                </div>




                         </form>
                                <div className="d-grid col-12 mx-auto p-4">
                                    <button type='submit' className="btn btn-primary" onClick={CustomerLoginSubmit}>Sign In</button>
                                </div>
                                <div className="d-grid col-12 mx-auto p-4">
                                <h1 id='msg'></h1>
                                </div>

                                <h1 id='msg' class='text-danger'></h1>

                                <p className="text-center mt-3">Do not have any account?
                                    <span className="text-primary"><Link to='/customerRegistration'>Sign up</Link></span>
                                </p>




                    </div>
                </div>
            </div>
        </div>

    )
}
export default CustomerLogin;
