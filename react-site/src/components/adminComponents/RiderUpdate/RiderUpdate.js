import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './RiderUpdate.css';

const RiderUpdate = () => {
      const navigate = useNavigate();
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

      const onSubmit = async event => {
            event.preventDefault();
            await axios.put(`http://127.0.0.1:8000/api/riderList/${id}`, riders);
      }
      return (
            <div className="hero min-h-screen bg-slate-300 ">

                  <div className='box'>
                        <div className="text-center lg:text-left px-8">


                              <h1 className='text-5xl font-extrabold text-dark '>Update<span className='text'> Rider</span> </h1>


                        </div>
                        <div >
                              <div >

                                    <form action={`http://127.0.0.1:8000/api/riderList/${id}`} method="post">

                                          <div className='d-flex justify-center '>
                                                <div className='m-8'>
                                                      <div className="input-container">

                                                            <input name="name" type="text" placeholder="Name" className="input input-bordered w-64 mt-2 " defaultValue={riders.name} required />
                                                      </div>
                                                      <div className="input-container">
                                                            <input name="gender" type="text" placeholder="Gender" className="input input-bordered w-64 mt-2 " defaultValue={riders.gender} required />

                                                      </div>
                                                      <div className="input-container" >

                                                            <input name="dob" type="date" placeholder="Date of Birth" className="mt-2 input input-bordered  w-64" defaultValue={riders.dob} required />
                                                      </div>
                                                      <div className="input-container">

                                                            <input name="peraddress" type="text" placeholder="Permanent Address" className="input input-bordered w-64 mt-2" defaultValue={riders.peraddress} required />
                                                      </div>
                                                      <div className="input-container">

                                                            <input name="preaddress" type="text" placeholder="Present Address" className="input input-bordered  w-64 mt-2" defaultValue={riders.preaddress} required />
                                                      </div>
                                                      <div className="input-container">

                                                            <input name="phone" type="text" placeholder="Phone Number" className="input input-bordered  w-64 mt-2" defaultValue={riders.phone} required />

                                                      </div>

                                                </div>

                                                <div>

                                                      <div className='mt-8 input-container'>

                                                            <input name="email" type="text" placeholder="Email" className="input input-bordered w-64 mt-2 input-container" defaultValue={riders.email} required />
                                                      </div>
                                                      <div className="input-container">

                                                            <input name="nid" type="text" placeholder="NID No" className="input input-bordered  w-64 mt-2" defaultValue={riders.nid} required />

                                                      </div>
                                                      <div className="input-container">

                                                            <input name="dlic" type="text" placeholder="Driving License No" className="input input-bordered  w-64 mt-2" defaultValue={riders.dlic} required />

                                                      </div>
                                                      <div className="input-container">

                                                            <input name="username" type="text" placeholder="Username" className="input input-bordered  w-64 mt-2" defaultValue={riders.username} required />

                                                      </div>
                                                      <div className="input-container">

                                                            <input name="password" type="text" placeholder="Password" className="input input-bordered  w-64 mt-2" defaultValue={riders.password} required />

                                                      </div>

                                                      {/* <div >

                                                      <input name="image" type="file" placeholder="Upload Image" className="w-64 mt-2" required />

                                                </div> */}
                                                      <div >
                                                            <button className=" form-submit mt-3 w-64" type="submit" >Update</button>
                                                      </div>
                                                </div>
                                          </div>
                                    </form>
                              </div>
                        </div>
                  </div >


            </div >
      );
};

export default RiderUpdate;