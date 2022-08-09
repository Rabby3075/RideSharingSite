import Navbar from "../Navbar/Navbar"
import Sidebar from "../Sidebar/Sidebar"
import React, { useEffect, useState } from 'react';
import { useNavigate,useParams } from "react-router-dom"
import axios from "axios"
import"./pp.scss"



const Editprofile =() => {

   
    let[name, setName] = useState("");
    let[dob, setDob] = useState("");
    let[phone, setPhone] = useState("");
    let[email, setEmail] = useState("");
    const navigate  = useNavigate();

    let user = JSON.parse(localStorage.getItem('user'));
    const [posts, setPosts] = useState([]);

    var userid = {token: user.access_token};
    axios.post("http://127.0.0.1:8000/api/AdminInfoApi",userid)
    .then(resp=>{
        console.log(resp.data);
        setPosts(resp.data);
    }).catch(err=>{
        console.log(err);
    });

    const Edit = (e) =>{
    e.preventDefault();
    var obj = {name: name,dob: dob,phone: phone,email: email,token: user.access_token};
    axios.post("http://127.0.0.1:8000/api/AdminInfoUpApi",obj)
    .then(resp=>{
        var data = resp.data;
        console.log(data);
        navigate('/editprofile');
        alert("Profile Update Successfully Done!");
    }).catch(err=>{
        console.log(err);
    });
}


    return (
        <div className="add">
            <Sidebar/>
            <div className="addcontainer">
            <Navbar/>
            <div className="top">
                <h3>Update profile</h3>
            </div>
            <div className="bottom">
                
                <div className="reg">
                <form >
                
                <div className="inputform"><label>Name</label><input type="text" name="name"  placeholder={posts.name} value={name} onChange={(e)=>setName(e.target.value)}></input></div>
                <div className="inputform"><label>Date of birth</label><input type="date" name="dob"  placeholder={posts.dob} value={dob} onChange={(e)=>setDob(e.target.value)}></input></div>
                <div className="inputform"><label>Email</label><input type="text" name="email"  placeholder={posts.email} value={email} onChange={(e)=>setEmail(e.target.value)}></input></div>
                <div className="inputform"><label>Phone</label><input type="text" name="phone" placeholder={posts.phone}  value={phone} onChange={(e)=>setPhone(e.target.value)}></input></div>
  
                <div className="form-group">
            <button className="btn btn-primary btn-block container" onClick={Edit}> Update Account</button>
        </div>
                
                </form>
               
                
                </div>
                
                
            </div>
            </div>

        </div>
    )
}

export default Editprofile;