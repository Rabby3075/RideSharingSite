import React, {useState, useEffect} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import "./Redeem.css";
import NavBar from '../NavBar/NavBar';
import SideBar from '../SideBar/SideBar';
import Footer from '../Footer/Footer';

const Redeem = ()=>{
    const [points, setPoints] = useState([]);
    let user = JSON.parse(localStorage.getItem('user'));
    var userid = {token: user.access_token};

    useEffect(()=>{
        axios.post("http://127.0.0.1:8000/api/riderBalance",userid)
        .then(resp=>{
            console.log(resp.data);
            setPoints(resp.data);
        }).catch(err=>{
            console.log(err);
        });
    },[]);

    const [counts, setCounts] = useState([]);

    useEffect(()=>{
        axios.post("http://127.0.0.1:8000/api/riderCount",userid)
        .then(resp=>{
            console.log(resp.data);
            setCounts(resp.data);
        }).catch(err=>{
            console.log(err);
        });
    },[]);

    const submit= ()=>{
        if((points.rpoint)>30)
        {
        axios.post("http://127.0.0.1:8000/api/redeem",userid)
        .then(function (response) {
            console.log(response);
            window.location.reload();
          })
          .catch(function (error) {
            console.log(error);
        });
       }
    else{
        alert("Doesnt have sufficient point to Redeem!");
    }


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
		<div className="jumbotron">
<div className="row">
       <div className="col-md-4 col-xl-12">
          <div className="card bg-c-pink order-card cd">
               <div className="card-block">
                   <h6 className="m-b-20">Ride Point</h6>
                   <h2 className="text-right"><span className="f-left h1 fnt">{points.rpoint} point</span><img src="https://www.svgrepo.com/show/89912/coin.svg" alt=""  className="f-right im"/></h2>
               </div>
               <h6 className="text-left hleft">Completed Rides : {counts}</h6>
           </div>
       </div>


           <br /><br /><br />
           <div className="heading">
           <h1>Terms and Conditions</h1>
           </div>
           <br /><br /><br /><br />

           <div className="row d-flex justify-content-center">
           <div className="col d-flex justify-content-center">
           <ul className="list-timeline list-timeline-primary">
           <li className="list-timeline-item p-0 pb-3 pb-lg-4 d-flex flex-wrap flex-column">
           <p className="my-0 text-dark flex-fw text-sm text-uppercase"><b>A RIDER EARNS 3 PTS PER RIDE</b></p>
           </li>
           <li className="list-timeline-item p-0 pb-3 pb-lg-4 d-flex flex-wrap flex-column">
           <p className="my-0 text-dark flex-fw text-sm text-uppercase"><b>A RIDER CAN EARN 1TK PER POINT</b></p>
           </li>
           <li className="list-timeline-item p-0 pb-3 pb-lg-4 d-flex flex-wrap flex-column">
           <p className="my-0 text-dark flex-fw text-sm text-uppercase"><b>RIDER CAN REDEEM ALL POINTS AND ADD TO BALANCE</b></p>
           </li>
           <li className="list-timeline-item p-0 pb-3 pb-lg-4 d-flex flex-wrap flex-column">
           <p className="my-0 text-dark flex-fw text-sm text-uppercase"><b>REDEEMING POINTS ABOVE 30 IS ALLOWED</b></p>
           </li>
           </ul>
           </div>
           </div>

         
         <div className="form-group d-flex justify-content-center">
         <button className="in" onClick={submit}>Redeem</button>
         </div>    

</div>
<br /><br /><br /><br />
</div>
		</div>
	  </div>
    </div>
    <Footer/>
</div>
    )
}
export default Redeem;