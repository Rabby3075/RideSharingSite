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
        let user = JSON.parse(localStorage.getItem('user'));
        var userid = {token: user.access_token};
        axios.post("http://127.0.0.1:8000/api/customerInfo",userid)
        .then(resp=>{
            var data = resp.data;
            console.log(data)
            document.getElementById('userPoint').innerHTML = data.rating + ' Point';

            //setPosts(resp.data);
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
                    <h2 className="text-right"><span className="f-left h1 fnt" id="userPoint"></span><img src="https://www.svgrepo.com/show/89912/coin.svg" alt="Picture"  className="f-right im"/></h2>
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
       

      </tr>
    </thead>
    <tbody>


    {posts.map(post=>(
     <tr key={post.id}>

        <td>{post.id}</td>
        <td >{post.point}</td>
        <td >{post.amount}</td>







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
