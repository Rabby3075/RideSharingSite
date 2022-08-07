import Navbar from "../Navbar/Navbar"
import Sidebar from "../Sidebar/Sidebar"
import React, {useState, useEffect} from "react";
import axios from "axios";
import Table from 'react-bootstrap/Table';

import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import EditIcon from '@mui/icons-material/Edit';
import  "./ridecomplete.scss"
import { Link } from "react-router-dom";





const RideComplete =() => {
    const [posts, setPosts] = useState([]);
    useEffect(()=>{
        axios.get("http://127.0.0.1:8000/api/customerView")
        .then(resp=>{
            console.log(resp.data);
            setPosts(resp.data);
        }).catch(err=>{
            console.log(err);
        });
    },[]);

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
      {posts.map(post=>(
                <tr key={post.id}>
                    <td >{post.id}</td>
                    <td >{post.name}</td>
                    <td><Link class="btn btn-primary" to={{pathname:"/formview/"+post.id}}><RemoveRedEyeIcon/>View</Link>&nbsp;
                    <Link  class="btn btn-success" to=""><EditIcon/>Edit</Link>&nbsp;
                    <Link class="btn btn-danger" to=""><RemoveRedEyeIcon/>Delete</Link></td>
                </tr>
                    ))}
      </tbody>
    </Table>
{/* 
    {
                posts.map(post=>(
                    <Customerviewprops name={post.name} phone={post.phone} key={post.id}></Customerviewprops>
                ))
            } */}
            </div>
            </div>
            </div>
        </div>
    )
}

export default RideComplete;