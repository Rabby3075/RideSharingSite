import React, { useState, userEffect } from "react";
import axios from "axios";
import Dashboard from "../Dashboard/Dashboard";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom"
import './Login.css';

const Login = () => {
    let [token, setToken] = useState("");
    let [email, setName] = useState("");
    let [password, setPassword] = useState("");
    const navigate = useNavigate("");

    const loginSubmit = () => {
        var obj = { email: email, password: password };
        axios.post("http://127.0.0.1:8000/api/adminlogin", obj)
            .then(resp => {
                var token = resp.data;
                console.log(token);
                var user = { userId: token.userid, access_token: token.token };
                localStorage.setItem('user', JSON.stringify(user));
                //  console.log(localStorage.getItem('user'))
                navigate('/admindashboard');


            }).catch(err => {
                console.log(err);
            });


    }
    return (

        //         <div class="hero min-h-screen bg-base-200">
        //   <div class="hero-content flex-col lg:flex-row-reverse">
        //     <div class="text-center lg:text-left">
        //       <h1 class="text-5xl font-bold text-white">Login now!</h1>
        //       <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
        //     </div>
        //     <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        //       <div class="card-body">
        //         <div class="form-control">
        //           <label class="label">
        //             <span class="label-text">Email</span>
        //           </label>
        //           <input type="text" placeholder="email" class="input input-bordered" />
        //         </div>
        //         <div class="form-control">
        //           <label class="label">
        //             <span class="label-text">Password</span>
        //           </label>
        //           <input type="text" placeholder="password" class="input input-bordered" />
        //           <label class="label">
        //             <a href="#" class="label-text-alt link link-hover">Forgot password?</a>
        //           </label>
        //         </div>
        //         <div class="form-control mt-6">
        //           <button class="btn btn-primary">Login</button>
        //         </div>
        //       </div>
        //     </div>
        //   </div>
        // </div>
        <div >
            <div className="log-box rider-back  d-flex justify-content-center">
                <div>

                    <h1 className="log-text m-5">Login</h1>
                </div>
                <div>
                    <div>
                        <div className="d-flex justify-content-center">
                            <form >
                                <div>

                                    <input className="log-container mb-3 ms-5 input-group-text" placeholder="Email" type="text" value={email} onChange={(e) => setName(e.target.value)}></input>
                                </div>
                                <div>
                                    <input className="log-container input-group-text ms-5" type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}></input>

                                </div>
                            </form>
                        </div>
                    </div>
                    <button onClick={loginSubmit} className='Rider_btn_form-submit ms-3 mt-3 ms-5'>Login</button>
                    {/* <Dashboard/> */}
                </div>

            </div>
        </div>

    )
}
export default Login;  