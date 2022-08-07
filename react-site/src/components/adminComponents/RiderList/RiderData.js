import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const RiderData = (props) => {

      const { id, name, email, dob, phone, image } = props.riders;
      const [riders, setRiders] = useState([]);
      useEffect(() => {
            loadRider();
      }, [])


      const deleteRider = (id) => {
            axios.delete(`http://127.0.0.1:8000/api/riderList/${id}`);

            loadRider();
      };
      const loadRider = async () => {
            const result = await axios.get("http://127.0.0.1:8000/api/riderList");
            result = await result.json();
            setRiders(result);
      }

      return (


            <div class="overflow-x-auto w-full">
                  <table class="table w-full ">
                        <thead>

                              <th>ID</th>
                              <th>Name</th>
                              <th>Phone</th>
                              <th>Email</th>
                              {/* <th>picture</th> */}


                        </thead>
                        <tbody>

                              <td>{id}</td>
                              <td> {name}</td>
                              <td> {phone}</td>
                              <td>{email}</td>
                              {/* <td>
                                    <div class="flex items-center space-x-3">
                                          <div class="avatar">
                                                <div class="mask mask-squircle w-12 h-12">
                                                      {image}
                                                </div>
                                          </div>



                                    </div>


                              </td> */}
                              <th>
                                    <Link className="btn btn-sm btn-secondary text-dark mt-4" to={`/riderView/${id}`}> View</Link >
                              </th>




                              <th>

                                    <Link className="btn btn-sm btn-secondary text-dark mt-4" to={`/riderUpdate/${id}`} > Update</Link >


                              </th>
                              <th>
                                    <button className="btn btn-sm btn-secondary text-dark mt-4" onClick={() => deleteRider(id)}>Delete</button>

                              </th>
                        </tbody>



                  </table>
            </div >
      );
};

export default RiderData;