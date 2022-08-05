import React from 'react';
import { Link } from 'react-router-dom';

const RiderData = (props) => {

      const { id, name, email, phone, image } = props.riders;

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
                              {/* <th>
                                    <Link className="btn btn-sm btn-secondary text-dark mt-4" to={"/RiderDetails" + "/" + id + "/" + name + "/" + dob + "/" + email + "/" + phone} > </Link >
                              </th> */}


                              <th>View </th>

                              <th>Update</th>
                              <th>Delete</th>
                        </tbody>



                  </table>
            </div>
      );
};

export default RiderData;