import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";


const SearchRiders = () => {
      const [riders, setRiders] = useState([]);


      useEffect(() => {
            axios.get("http://127.0.0.1:8000/api/riderList")

                  .then(resp => {
                        console.log(resp);
                        setRiders(resp.data);
                  }).catch(err => {
                        console.log(err);
                  });
      }, []);
      async function search(key) {

            console.warn(key);
            const result = await axios.get(`http://127.0.0.1:8000/api/riderList/${key}`);
            result = await result.json();
            console.warn(result);

            setRiders(result);
      }
      return (
            <div className=' RiderDataTable-boox '>
                  <h1>Search Rider</h1>
                  <br></br>
                  <input type="text" onChange={(e) => search(e.target.value)} className="form-control" placeholder='Search Rider' />
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



                                    </tr>
                              ))}
                        </tbody>
                  </table>
            </div>
      );
};

export default SearchRiders;