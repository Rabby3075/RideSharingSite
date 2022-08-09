import Navbar from "../Navbar/Navbar"
import Sidebar from "../Sidebar/Sidebar"
import React, {useState, useEffect} from "react";
import axios from "axios";
import Table from 'react-bootstrap/Table';

import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import EditIcon from '@mui/icons-material/Edit';

import { Link } from "react-router-dom";
import Adminviewprops from "./Adminviewprops";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';





const Adminview =(props) =>  {
   const [admins, setAdmins] = useState([]);

      useEffect(() => {
            axios.get("http://127.0.0.1:8000/api/adminView1")

                  .then(resp => {
                        console.log(resp);
                        setAdmins(resp.data);
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
                        admins.map(admins =>
                              <tr key={admins.id}>
                    <td >{admins.id}</td>
                    <td >{admins.name}</td>
                    <td><Link  class="btn btn-primary" to={`/admininfo/${admins.id}`}> <RemoveRedEyeIcon/> View</Link >&nbsp;
                    <Link  class="btn btn-success" to={`/editadmin/${admins.id}`}> <EditIcon/> Edit</Link >&nbsp;
                    <Link  class="btn btn-danger" to={`/customerinfo/${admins.id}`}> <DeleteForeverIcon/> Delete</Link >
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



export default Adminview;