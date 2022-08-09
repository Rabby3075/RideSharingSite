import React, {useState, useEffect} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import "./CheckReq.css";
import NavBar from '../NavBar/NavBar';
import SideBar from '../SideBar/SideBar';
import Footer from '../Footer/Footer';


const  CheckReq = ()=>{


        const [posts, setPosts] = useState([]);
        axios.get("http://127.0.0.1:8000/api/CheckReqApi")
        .then(resp=>{
            console.log(resp.data);
            setPosts(resp.data);
        }).catch(err=>{
            console.log(err);
        });

return(
    <div>
<NavBar/>
    <div className="container-fluid mt-5">
	  <div className="row">
    <div className="col-lg-2">
    <SideBar/>
    </div>
    <div className="col-lg-10">
		<div className="jumbotron"></div>
<div>
<h2 className="d-flex justify-content-center text-secondary">Available Ride Request</h2>
<br /> <br />

<div className="table-responsive custom-table-responsive">
<table className="table custom-table" id="here">
<thead>
<tr>  
  <th scope="col">
    <label className="control control--checkbox">
      <div className="control__indicator"></div>
    </label>
  </th>
  <th scope="col">Customer Name</th>
  <th scope="col">Pickup Point</th>
  <th scope="col">Destination</th>
  <th scope="col">Distance</th>
  <th scope="col">Cost</th>
  <th scope="col">Action</th>
</tr>
</thead>


<tbody>
{posts.map(post=>(
                   <tr key={post.id} scope="row">
                       <th scope="row">
    <label className="control control--checkbox">
      <div className="control__indicator"></div>
    </label>
  </th>
                    <td className="text-primary">{post.customerName}</td>
                    <td >{post.pickupPoint}</td>
                    <td >{post.destination}</td>
                    <td >{post.length}</td>
                    <td >{post.cost}</td>
                    <td ><button className="btn-green">Approve</button></td>
                </tr>
                    ))}
</tbody>
</table>
</div>
</div>
</div>
	  </div>
    </div>
    <Footer/>
</div>

)
}
export default CheckReq;
