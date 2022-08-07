import React from 'react';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from "../Navbar/Navbar"
import Sidebar from "../Sidebar/Sidebar"
import Pendingstatus from './Pendingstatus';
import { useNavigate  } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css'
import"./viewinfo.scss"
import { Button } from 'react-bootstrap'

const Viewinfo= (props) => {

      const { id } = useParams();
      const navigate  = useNavigate("");
        
      const [riders, setRiders] = useState([]);
 
      

      const deleteRider = (id) => {
        axios.delete(`http://127.0.0.1:8000/api/riderList/${id}`);
    
        navigate('/riderstatus');
    };
    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/api/riderList/${id}`)

              .then(resp => {
                    console.log(resp);
                    setRiders(resp.data);
              }).catch(err => {
                    console.log(err);
              });
  }, []);




      return (
        <div className="add">
        <Sidebar/>
        <div className="addcontainer">
            <Navbar/>
            <div className="bottom">
            <div className="re">



                  <div className='middle' >
                        <h2>List of new pending status</h2>
                        <br />
                        <p>UserID: {id}</p>
                        <p>Rider Name: {riders.name}</p>
                        <p>Gender: {riders.gender}</p>

                        <p>Date of Birth: {riders.dob}</p>
                        <p>Email: {riders.email}</p>
                        <p>Phone: {riders.phone}</p>
                        <p>Permanent Address: {riders.peraddress}</p>
                        <p>Present Address: {riders.preaddress}</p>
                        <p>NID No: {riders.nid}</p>
                        <p>Driving License No: {riders.dlic}</p>
                        <p>Status: {riders.status}</p>
                        <p>Rider Point: {riders.rpoint}</p>
                        <p>Rider Balance: {riders.balance}</p>
                        <p>Username: {riders.username}</p>
                        <p>Picture: {riders.image}</p>
                        <div>
                        <button>Accept</button>
                        < Button color='danger' onClick={() => deleteRider(id)}>Delete</Button>
                        </div>
                        
                  </div>


            </div>
            </div>
            </div>
        </div>

      );
};

export default Viewinfo;