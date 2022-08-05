import React, {useState, userEffect} from 'react';
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate  } from "react-router-dom"


const CustomerRegistration = () =>{

    let[name, setName] = useState("");
    let[dob, setDob] = useState("");
    let[phone, setPhone] = useState("");
    let[address, setAddress] = useState("");
    let[username, setUsername] = useState("");
    let[email, setEmail] = useState("");
    let[password, setPassword] = useState("");
    let[image, setImage] = useState("");

    /*const handleChange = (file)=>{
        setImage(file[0]);
    };*/

    const RegistrationSubmit = (e) =>{
        e.preventDefault();
        /*var fd = new FormData();
        fd.append("name",name);
        fd.append("dob",dob);
        fd.append("phone",phone);
        fd.append("address",address);
        fd.append("username",username);
        fd.append("email",email);
        fd.append("password",password);
        fd.append("image",image);*/
        var obj = {name: name, dob: dob, phone: phone, address: address, username: username, email: email, password: password, image: image};
        console.log(obj);
        axios.post("http://127.0.0.1:8000/api/customerRegistrationSubmit",obj)
        .then(resp=>{
            var token = resp.data;
            console.log(token);
            var user = {name: token.name, email:token.email};
            localStorage.setItem('user',JSON.stringify(user));
            document.getElementById('msg').innerHTML = token.message;
        }).catch(err=>{
            console.log(err);
        });
    }


    return(

        <div className='container-fluid vh-100'>

            <div>
                <div className='rounded d-flex justify-content-center'>
                    <div className='col-md-4 col-sm-12 shadow-lg bg-light'>
                        <div className='text-center'>
                            <h3 className='text-primary'>Create Account</h3>
                        </div>
                        <form className='form-group p-4'>

                                <div className='input-group mb-3'>
                                    <span className='input-group-text bg-primary'>
                                        <i className='bi bi-person text-white'></i>
                                    </span>
                                    <input type="text" className='form-control' name="name" id="name" placeholder="Name" value={name} onChange={(e)=>setName(e.target.value)}></input>
                                </div>

                                <div className='input-group mb-3'>
                                    <span className='input-group-text bg-primary'>
                                        <i className='bi bi-calendar text-white'></i>
                                    </span>
                                    <input type="date" className='form-control' name="dob" id="dob" value={dob} onChange={(e)=>setDob(e.target.value)}></input>
                                </div>

                                <div className='input-group mb-3'>
                                    <span className='input-group-text bg-primary'>
                                        <i className='bi bi-telephone text-white'></i>
                                    </span>
                                    <input type="tel" className='form-control' name="phone" id="phone" placeholder='Phone Number' value={phone} onChange={(e)=>setPhone(e.target.value)}></input>
                                </div>

                                <div className='input-group mb-3'>
                                    <span className='input-group-text bg-primary'>
                                        <i className='bi bi-geo-alt text-white'></i>
                                    </span>
                                    <input type="text" className='form-control' name="address" id="address" placeholder='Address' value={address} onChange={(e)=>setAddress(e.target.value)}></input>
                                </div>

                                <div className='input-group mb-3'>
                                    <span className='input-group-text bg-primary'>
                                        <i className='bi bi-person-plus-fill text-white'></i>
                                    </span>
                                    <input type="text" className='form-control' name="username" id="username" placeholder='Username' value={username} onChange={(e)=>setUsername(e.target.value)}></input>
                                </div>

                                <div className='input-group mb-3'>
                                    <span className='input-group-text bg-primary'>
                                        <i className='bi bi-envelope text-white'></i>
                                    </span>
                                    <input type="email" className='form-control' name="email" id="email" placeholder='Email Address' value={email} onChange={(e)=>setEmail(e.target.value)}></input>
                                </div>

                                <div className='input-group mb-3'>
                                    <span className='input-group-text bg-primary'>
                                        <i className='bi bi-key-fill text-white'></i>
                                    </span>
                                    <input type="password" className='form-control' name="password" id="password" placeholder='Password' value={password} onChange={(e)=>setPassword(e.target.value)}></input>
                                </div>

                                <div className="input-group mb-3">
                                    <span className="input-group-text bg-primary"><i
                                    className="bi bi-file-earmark-arrow-up text-white"></i></span>
                                    <input className="form-control" type="file"  name="image" id="image"  onChange={(e)=>setImage(e.target.value)}></input><br></br>

                                </div>


                         </form>
                                <div className="d-grid col-12 mx-auto p-4">
                                    <button type='submit' className="btn btn-primary" onClick={RegistrationSubmit}>Sign Up</button>
                                </div>
                                <div className="d-grid col-12 mx-auto p-4">
                                <h1 id='msg'></h1>
                                </div>

                                <h1 id='msg'></h1>

                                <p className="text-center mt-3">Already have an account?
                                    <span className="text-primary"><Link to='/customerLogin'>Sign in</Link></span>
                                </p>




                    </div>
                </div>
            </div>
        </div>

    )
}
export default CustomerRegistration;
