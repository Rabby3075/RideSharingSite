import Navbar from "../Navbar/Navbar"
import Sidebar from "../Sidebar/Sidebar"
import React, {useState, useEffect} from "react";
import axios from "axios";
import Table from 'react-bootstrap/Table';

import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import EditIcon from '@mui/icons-material/Edit';

import { Link } from "react-router-dom";
import Customerviewprops from "./Customerviewprops";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';





const Customerview =(props) =>  {
   const [customers, setCustomers] = useState([]);

      useEffect(() => {
            axios.get("http://127.0.0.1:8000/api/customerView1")

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
                <div className="bottom">
                <div className="reg">
                <Table striped bordered hover>
                  <thead>
                  <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Action</th>
                  </tr>
                  </thead>
                  <tbody>

            

                  {
                        customers.map(customers =>
                              <tr key={customers.id}>
                    <td >{customers.id}</td>
                    <td >{customers.name}</td>
                    <td><Link  class="btn btn-primary" to={`/customerinfo/${customers.id}`}> <RemoveRedEyeIcon/> View</Link >&nbsp;
                    <Link  class="btn btn-success" to={`/editcustomer/${customers.id}`}> <EditIcon/> Edit</Link >&nbsp;
                    <Link  class="btn btn-danger" to={`/customerinfo/${customers.id}`}> <DeleteForeverIcon/> Delete</Link >
                 </td>
                </tr>
                              // <Customerviewprops
                              //       key={customers.id}
                              //       customers={customers}
                              // ></Customerviewprops>
                        )
                  }
                        </tbody>
    </Table>


</div>
            </div>
            </div>
        </div>

           
      );
};



export default Customerview;