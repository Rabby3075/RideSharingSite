import React from 'react';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from "../Navbar/Navbar"
import Sidebar from "../Sidebar/Sidebar"
// import"./customerinfo.scss"


const Admininfo = (props) => {


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



      return (
            
            <div className="add">
            <Sidebar/>
            <div className="addcontainer">
                <Navbar/>

               



                  <div className='mid' >
                        <h1>{admins.name}</h1>
                        <br />
                        <p>ID: {id}</p>
                        <p>Name: {admins.name}</p>
                        <p>phone Number:{admins.phone}</p>
                        <p>Email:{admins.email}</p>
                        <p>Dath of birth:{admins.dob}</p>
                       



            </div>
            </div>
        </div>


           
      );
};

export default Admininfo;