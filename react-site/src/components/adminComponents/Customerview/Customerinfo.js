import React from 'react';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from "../Navbar/Navbar"
import Sidebar from "../Sidebar/Sidebar"
import"./customerinfo.scss"


const Customerinfo = () => {


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



      return (
            
            <div className="add">
            <Sidebar/>
            <div className="addcontainer">
                <Navbar/>

               



                  <div className='mid' >
                        <h1>{customers.name}</h1>
                        <br />
                        <p>ID: {id}</p>
                        <p>Name: {customers.name}</p>
                        <p>phone Number:{customers.phone}</p>
                        <p>Email:{customers.email}</p>
                        <p>Address:{customers.address}</p>
                        <p>Username:{customers.username}</p>



            </div>
            </div>
        </div>


           
      );
};

export default Customerinfo;