import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Pendingstatus from './Pendingstatus';
import Navbar from "../Navbar/Navbar"
import Sidebar from "../Sidebar/Sidebar"
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import EditIcon from '@mui/icons-material/Edit';
import  "./pendingstatus.scss"
import { Link } from "react-router-dom";
import Table from 'react-bootstrap/Table';

const Viewrider = (props) => {

      const [riders, setRiders] = useState([]);

      useEffect(() => {
            axios.get("http://127.0.0.1:8000/api/riderstatus")

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
            <div className="reg">
            <Table striped bordered hover>
                  <thead>
                  <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Status</th>
                  <th>View</th>
                  </tr>
                  </thead>
                  <tbody>

            

                  {
           riders.map(riders =>
            <tr key={riders.id}>
                <td >{riders.id}</td>
                <td >{riders.name}</td>
                <tb>{riders.status}</tb>
                <td><Link class="btn btn-primary" to={`/riderviewinfo/${riders.id}`}><RemoveRedEyeIcon/>View</Link></td>
            </tr>

  )
  
                  }
                  {/* 
    {
                posts.map(post=>(
                    <Customerviewprops name={post.name} phone={post.phone} key={post.id}></Customerviewprops>
                ))
            } */}
            
            </tbody>
    </Table>
            </div>
            </div>
        </div>




            </div>
      );
};

export default Viewrider;