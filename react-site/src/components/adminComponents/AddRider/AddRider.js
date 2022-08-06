import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const AddRider = () => {

      const [riders, setRiders] = useState([]);
      const navigate = useNavigate();
      //  const [file, setFile] = useState("");
      //const formData = new FormData();
      //formData.append('file', file);

      useEffect(() => {
            axios.post("http://127.0.0.1:8000/api/riderList")

                  .then(resp => {
                        console.log(resp);
                        setRiders(resp.data);
                        navigate('/riderList');
                  }).catch(err => {
                        console.log(err);
                  });
      }, []);

      return (

            <div className="hero min-h-screen bg-slate-300 ">

                  <div className="hero-content flex-col lg:flex-row-reverse w-auto">
                        <div className="text-center lg:text-left px-8">


                              <h1 className='text-5xl font-bold'>Add New Rider </h1>

                        </div>
                        <div >
                              <div >

                                    <form action="http://127.0.0.1:8000/api/riderList" method="post">

                                          <div className='d-flex justify-center '>
                                                <div className='m-8'>
                                                      <div >

                                                            <input name="name" type="text" placeholder="Name" className="input input-bordered ms-5 w-64 mt-2 " required />
                                                      </div>
                                                      <div >

                                                            <select class="select select-bordered ms-5 mt-2 w-64" name="gender">
                                                                  <option disabled selected>Gender</option>
                                                                  <option value="Male">Male</option>
                                                                  <option value="Female">Female</option>
                                                                  <option value="Others">Others</option>
                                                            </select>
                                                      </div>
                                                      <div >

                                                            <input name="dob" type="date" placeholder="Date of Birth" className="mt-2 input input-bordered ms-5 w-64" required />
                                                      </div>
                                                      <div >

                                                            <input name="peraddress" type="text" placeholder="Permanent Address" className="input input-bordered ms-5 w-64 mt-2" required />
                                                      </div>
                                                      <div >

                                                            <input name="preaddress" type="text" placeholder="Present Address" className="input input-bordered ms-5 w-64 mt-2" required />
                                                      </div>
                                                      <div  >

                                                            <input name="phone" type="text" placeholder="Phone Number" className="input input-bordered  ms-5 w-64 mt-2" required />

                                                      </div>

                                                </div>

                                                <div>

                                                      <div className='mt-8'>

                                                            <input name="email" type="text" placeholder="Email" className="input input-bordered w-64 mt-2" required />
                                                      </div>
                                                      <div >

                                                            <input name="nid" type="text" placeholder="NID No" className="input input-bordered  w-64 mt-2" required />

                                                      </div>
                                                      <div >

                                                            <input name="dlic" type="text" placeholder="Driving License No" className="input input-bordered  w-64 mt-2" required />

                                                      </div>
                                                      <div >

                                                            <input name="username" type="text" placeholder="Username" className="input input-bordered  w-64 mt-2" required />

                                                      </div>
                                                      <div >

                                                            <input name="password" type="text" placeholder="Password" className="input input-bordered  w-64 mt-2" required />

                                                      </div>

                                                      {/* <div >

                                                            <input name="image" type="file" placeholder="Upload Image" className="w-64 mt-2" required />

                                                      </div> */}
                                                      <div >
                                                            <button className="btn btn-primary ba form-submit mt-3 w-64" type="submit" >Add</button>
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

export default AddRider;