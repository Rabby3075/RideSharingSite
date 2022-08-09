import React, {useState, useEffect} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import "./CheckReq.css";
import NavBar from '../NavBar/NavBar';
import SideBar from '../SideBar/SideBar';
import Footer from '../Footer/Footer';


const  CheckReq = ()=>{


    let[rid, setRid] = useState("");
    let user = JSON.parse(localStorage.getItem('user'));
    var userid = {token: user.access_token};
        const [posts, setPosts] = useState([]);
        let[ongo, setOngo] =useState("");
        let[approve, setApprove] =useState("");
        axios.get("http://127.0.0.1:8000/api/CheckReqApi")
        .then(resp=>{
            setPosts(resp.data);
        }).catch(err=>{
            console.log(err);
        });
        axios.post("http://127.0.0.1:8000/api/ongoingApi",userid)
        .then(resp=>{
            setOngo(resp.data);
        }).catch(err=>{
            console.log(err);
        });

        axios.post("http://127.0.0.1:8000/api/approveApi",userid)
        .then(resp=>{
            setApprove(resp.data);
        }).catch(err=>{
            console.log(err);
        });

       if(ongo != 1 && approve != 1)
       {
         var condi = "aprrove";
       }

       const submit= (e)=>{
        e.preventDefault();
        var reqid = {token: user.access_token, rid: 10};
        axios.post("http://127.0.0.1:8000/api/ReqApi",reqid)
        .then(function (response) {
            console.log(response);
            window.location.reload();
          })
          .catch(function (error) {
            console.log(error);
        });
    }
        

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
{condi ? 
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
                            
                            <td ><form><input type="text" name="id"  value={post.id} onChange={(e)=>setRid(e.target.value)} hidden/><button className="btn-green" onClick={submit}><span className="btn-gradient">
                            <i className="fa fa-check"></i>
                            </span>
                            <span className="btn-text">Approve</span></button></form></td>
                            
                        </tr>
                            ))}
        </tbody>
        </table>
        </div>
        : 
        <button className="btn-pink d-flex justify-content-center pe-none">
        <span className="btn-gradientt">
        <i className="fa fa-exclamation-circle"></i>
        </span>
        <span className="btn-text">Complete your incomplete ride</span>
       </button>
      }





</div>
</div>
	  </div>
    </div>
    <Footer/>
</div>

)
}
export default CheckReq;
