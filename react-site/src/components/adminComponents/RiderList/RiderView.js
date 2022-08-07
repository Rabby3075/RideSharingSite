import React from 'react';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import './RiderView.css';

const RiderView = () => {


      const { id } = useParams();

      const [riders, setRiders] = useState([]);

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
            <div className="d-flex justify-content-center align-items-center box" style={{ height: '83vh' }}>

                  <h1 className='me-4'>Rider<span className='ride-info-text'> Information</span> </h1>
                  <div className='rounded fs-6 rider-info-text' >

                        <br />
                        <div className="d-flex justify-content-center align-items-center">
                              <div>
                                    <p >UserID: {id}</p>
                                    <p>Rider Name: {riders.name}</p>
                                    <p>Gender: {riders.gender}</p>

                                    <p>Date of Birth: {riders.dob}</p>
                                    <p>Email: {riders.email}</p>
                                    <p>Phone: {riders.phone}</p>
                                    <p>Permanent Address: {riders.peraddress}</p>
                              </div>
                              <div>

                                    <p>Present Address: {riders.preaddress}</p>
                                    <p>NID No: {riders.nid}</p>
                                    <p>Driving License No: {riders.dlic}</p>
                                    <p>Status: {riders.status}</p>
                                    <p>Rider Point: {riders.rpoint}</p>
                                    <p>Rider Balance: {riders.balance}</p>
                                    <p>Username: {riders.username}</p>
                                    <p>Picture: {riders.image}</p>
                              </div>
                        </div>
                  </div>


            </div>
      );
};

export default RiderView;