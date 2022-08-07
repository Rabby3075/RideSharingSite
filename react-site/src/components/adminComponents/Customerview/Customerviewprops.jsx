import axios from 'axios';
import React, { useEffect, useState } from 'react';
import RiderData from './Customerviewprops';
import { Link } from 'react-router-dom';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import  "./customerview.scss"
import Navbar from "../Navbar/Navbar"
import Sidebar from "../Sidebar/Sidebar"
import Table from 'react-bootstrap/Table';

const Customerviewprops = (props) => {
    
    const { id, name, email, dob, phone, image } = props.customers;
    const [riders, setRiders] = useState([]);
    useEffect(() => {
          loadRider();
    }, [])


    // const deleteRider = (id) => {
    //       axios.delete(`http://127.0.0.1:8000/api/customerView/${id}`);

    //       loadRider();
    // };
    const loadRider = async () => {
          const result = await axios.get("http://127.0.0.1:8000/api/customerView");
          result = await result.json();
          setRiders(result);
    }

    return (

        <div className="add">

                     {/* <Table striped bordered hover>
                    <thead>
                        <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Action</th>
                        </tr>
                    </thead>
                      <tbody>
                        <tr>

                            <td>{id}</td>
                            <td> {name}</td>
                            
       
                            <td>
                                  <Link  class="btn btn-primary" to={`/customerview/${id}`}> <RemoveRedEyeIcon/> View</Link >
                            </td>
                            </tr>




   
                      </tbody>

                      </Table> */}

            </div>

    );

    //   const [riders, setRiders] = useState([]);

    //   useEffect(() => {
    //         axios.get("http://127.0.0.1:8000/api/riderList")

    //               .then(resp => {
    //                     console.log(resp);
    //                     setRiders(resp.data);
    //               }).catch(err => {
    //                     console.log(err);
    //               });
    //   }, []);
    //   return (

    //         <div className="container" style={{ padding: "10px" }}>

    //               {
    //                     riders.map(riders =>
    //                           <RiderData
    //                                 key={riders.id}
    //                                 riders={riders}
    //                           ></RiderData>
    //                     )
    //               }




    //         </div>
    //   );
};

export default Customerviewprops;