import Navbar from "../Navbar/Navbar"
import Sidebar from "../Sidebar/Sidebar"
// import "./addadmin.scss"
import React, { useEffect, useState } from 'react';
import { useNavigate,useParams } from "react-router-dom"
import axios from "axios"



const Editadmin =() => {

    const navigate = useNavigate();
    const { id } = useParams();


    const [admins, setAdmins] = useState([]);

    useEffect(() => {
          axios.get(`http://127.0.0.1:8000/api/adminView/${id}`)

                .then(resp => {
                      console.log(resp);
                      setAdmins(resp.data);
                }).catch(err => {
                      console.log(err);
                });


    }, []);

    const onSubmit = async event => {
          event.preventDefault();
          await axios.put(`http://127.0.0.1:8000/api/adminView/${id}`,admins);
    }

    return (
        <div className="add">
            <Sidebar/>
            <div className="addcontainer">
            <Navbar/>
            <div className="top">
                <h3>Add New Admin</h3>
            </div>
            <div className="bottom">
                
                <div className="reg">
                <form action={`http://127.0.0.1:8000/api/adminView/${id}`} method="post">
                
                <div className="inputform"><label>Name</label><input type="text" name="name" defaultValue={admins.name} required></input></div>
                <div className="inputform"><label>Date of birth</label><input type="date" name="dob" defaultValue={admins.dob} required></input></div>
                <div className="inputform"><label>Email</label><input type="text" name="email" defaultValue={admins.email} required></input></div>
                <div className="inputform"><label>Phone</label><input type="text" name="phone" defaultValue={admins.phone} required></input></div>
  
                 <button>Submit</button>
                
                </form>
                </div>
                
            </div>
            </div>

        </div>
    )
}

export default Editadmin;