import React, {useState, useEffect} from "react";
import axios from "axios";
//import axiosConfig from './axiosConfig';
import CustomerNavbar from "../Navbar/CustomerNavbar";
const Discount = ()=>{
    const [posts, setPosts] = useState([]);

    useEffect(()=>{
        axios.get("http://127.0.0.1:8000/api/discountApi")
        .then(resp=>{
            console.log(resp.data);
            setPosts(resp.data);
        }).catch(err=>{
            console.log(err);
        });
    },[]);

    return(
        <div>
<CustomerNavbar />


        <div className="container mt-3">

  <h2 className="d-flex justify-content-center"><u>Discount Claim</u></h2>


        <div className="col-md-4 col-xl-12">
           <div className="card bg-c-pink order-card cd">
                <div className="card-block">
                    <h6 className="m-b-20">User Point</h6>
                    <h2 className="text-right"><span className="f-left h1 fnt"> point</span><img src="https://www.svgrepo.com/show/89912/coin.svg" alt="Picture"  className="f-right im"/></h2>
                </div>

            </div>
        </div>

 <div className="table-responsive custom-table-responsive">


  <table className="table my-3 bg-light text-center"  id="myTable">
    <thead>
      <tr>
        <th>ID</th>
        <th>Point</th>
        <th>Amount</th>
        <th>Action</th>

      </tr>
    </thead>
    <tbody>


    {posts.map(post=>(
     <tr key={post.id}>

        <td>{post.id}</td>
        <td >{post.point}</td>
        <td >{post.amount}</td>


        <td><a href="" className="btn btn-outline-primary"> <i className="bi bi-coin"></i> Claim</a></td>




    </tr>
     ))}

    </tbody>
  </table>
  </div>


</div>
</div>
    )
}

export default Discount;
