import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import './RiderData.css';

const RiderData = () => {
      const navigate = useNavigate();
      // const { id, name, email, dob, phone, image } = props.riders;
      const [riders, setRiders] = useState([]);
      useEffect(() => {
            loadRider();
      }, [])


      const deleteRider = (id) => {
            axios.delete(`http://127.0.0.1:8000/api/riderList/${id}`);
            navigate('/admindashboard');
            // loadRider();
      };
      const loadRider = async () => {
            const result = await axios.get("http://127.0.0.1:8000/api/riderList");
            result = await result.json();
            setRiders(result);
      }

      useEffect(() => {
            axios.get("http://127.0.0.1:8000/api/riderList")

                  .then(resp => {
                        console.log(resp);
                        setRiders(resp.data);
                  }).catch(err => {
                        console.log(err);
                  });
      }, []);

      return (

            <div className=' RiderDataTable-boox '>
                  <table class="table table-striped w-full">
                        <thead>
                              <tr className='bg-dark text-white'>
                                    <th scope="col">#</th>
                                    <th scope="col">ID</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Phone</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Action</th>
                              </tr>
                        </thead>
                        <tbody>
                              {riders.map((rider, index) => (
                                    <tr>
                                          <th scope="row">{index + 1} </th>
                                          <td>{rider.id}</td>
                                          <td>{rider.name}</td>
                                          <td>{rider.phone}</td>
                                          <td>{rider.email}</td>
                                          <td>

                                                <Link className="btn btn-outline-secondary  m-1 text-dark mt-4" to={`/riderView/${rider.id}`}><i class="fa fa-eye"></i></Link >

                                                <Link className="btn btn-secondary  text-dark mt-4" to={`/riderUpdate/${rider.id}`} > <i className="fa fa-edit text-white fs-2xl"></i></Link >

                                                <button className="btn btn-outline-dark m-1  text-white mt-4" onClick={() => deleteRider(rider.id)}><i class="fa fa-trash-o text-danger"></i></button>
                                          </td>


                                    </tr>
                              ))}
                        </tbody>
                  </table>
            </div>

      );
};

export default RiderData;