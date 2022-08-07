import Navbar from "../Navbar/Navbar"
import Sidebar from "../Sidebar/Sidebar"
import React, { useEffect, useState } from 'react';
import { useNavigate,useParams } from "react-router-dom"
import axios from "axios"




const Editcustomer =() => {
    const navigate = useNavigate();
    const { id } = useParams();


    const [customers, setCustomers] = useState([]);

    useEffect(() => {
          axios.get(`http://127.0.0.1:8000/api/customerView/${id}`)

                .then(resp => {
                      console.log(resp);
                      setCustomers(resp.data);
                }).catch(err => {
                      console.log(err);
                });


    }, []);

    const onSubmit = async event => {
          event.preventDefault();
          await axios.put(`http://127.0.0.1:8000/api/customerView/${id}`, customers);
    }
    return (
        <div className="add">
            <Sidebar/>
            <div className="addcontainer">
            <Navbar/>
            <div className="top">
                <h3>Update Customer Information</h3>
            </div>
            <div className="bottom">
                
                <div className="reg">
                <form action={`http://127.0.0.1:8000/api/customerView/${id}`} method="post">
                
                <div className="inputform"><label>Name</label><input name="name" type="text"  defaultValue={customers.name} required></input></div>
                <div className="inputform"><label>Date of birth</label><input name="dob" type="date"  defaultValue={customers.dob} required></input></div>
                <div className="inputform"><label>Phone</label><input name="phone" type="text"  defaultValue={customers.phone} required></input></div>
                <div className="inputform"><label>Address</label><input name="address" type="text"  defaultValue={customers.address} required></input></div>
                <div className="inputform"><label>Username</label><input name="username" type="text"  defaultValue={customers.username} required></input></div>
                <div className="inputform"><label>Email</label><input name="email" type="text"defaultValue={customers.email} required></input></div>
                

                &nbsp; 
                <div >
                <button className="btn btn-primary ba form-submit mt-3 w-64" type="submit"  >Submit</button>

                 </div>
                 </form>
                </div>

                
                
            </div>
            </div>

        </div>
    )
}

export default Editcustomer;