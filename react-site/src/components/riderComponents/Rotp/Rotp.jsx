import React, {useState, userEffect} from 'react';
import axios from "axios";
import { Link, Navigate } from "react-router-dom";
import { useNavigate  } from "react-router-dom"


const Rotp = () =>{

    let[otp, setOtp] = useState("");

    const navigate  = useNavigate("");

    const CustomerOtpSubmit = () =>{
        let user = JSON.parse(localStorage.getItem('user'));
        var obj = {otp: otp,token: user.access_token};
        console.log(obj);
       axios.post("http://127.0.0.1:8000/api/Rotp",obj)
        .then(resp=>{
            var response = resp.data;
            console.log(response);
           if(response.message==="Login Successfully"){
            navigate('/RLogin');
           }
           else{
            document.getElementById('msg').innerHTML = response.message;
           }


        }).catch(err=>{
            console.log(err);
        });

    }

    return(

        <div className='container-fluid vh-100 bg-secondary'>
<br /><br /><br /><br /><br /><br /><br /><br />
            <div className='mt-100'>
            <div class="rounded d-flex justify-content-center rounded">
                    <div class="col-md-4 col-sm-12 shadow-lg bg-light rounded">
                        <div className='text-center'><br /><br />
                            <h3 className='text-warning '>OTP</h3>
                        </div>
                        <form className='form-group p-4 '>

                                    <input type="text" className='form-control' name="otp" id="otp" placeholder='otp' value={otp} onChange={(e)=>setOtp(e.target.value)}></input>

                         </form>
                                <div className="d-grid col-12 mx-auto p-4">
                                    <button type='submit' className="btn btn-warning" onClick={CustomerOtpSubmit}>Sign In</button>
                                </div>
                                <div className="d-grid col-12 mx-auto p-4">
                                <h1 id='msg'></h1>
                                </div>

                                <h1 id='msg' class='text-danger'></h1>

                    </div>
                </div>
            </div>
        </div>

    )
}
export default Rotp;
