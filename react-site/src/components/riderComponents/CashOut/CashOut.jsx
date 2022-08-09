import React, {useState, useEffect} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { useNavigate  } from "react-router-dom";
import NavBar from '../NavBar/NavBar';
import SideBar from '../SideBar/SideBar';
import Footer from '../Footer/Footer';
import "./CashOut.css";

const CashOut = ()=>{

   
    let user = JSON.parse(localStorage.getItem('user'));
    var userid = {token: user.access_token};

    let[amount, setAmount] = useState("");
    const navigate  = useNavigate("");

    const [balnc, setBalnc] = useState([]);

    useEffect(()=>{
        axios.post("http://127.0.0.1:8000/api/riderBalance",userid)
        .then(resp=>{
            console.log(resp.data);
            setBalnc(resp.data);
        }).catch(err=>{
            console.log(err);
        });
    },[]);
   

        const submit= ()=>{
            if(amount<(balnc.balance))
            {
            var obj = {amount: amount,token: user.access_token};
            axios.post("http://127.0.0.1:8000/api/CashOut",obj)
            .then(function (response) {
                console.log(response);
                window.location.reload();
                alert("Transaction request is accepted. Please wait for 24 hours.!");
              })
              .catch(function (error) {
                console.log(error);
            });
           }
        else{
            alert("Doesnt have sufficient balance to cashout!");
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
<br /><br /><br />
<div className="container">

<div className="card ccd">
<article className="card-body mx-auto art">
<div className="numberCircle"></div>	
	<br />
	
<form>
<br /><br /><br />
            <div className="form-group input-group">
            <input type="text" value={amount} onChange={(e)=>setAmount(e.target.value)} placeholder="Enter Amount" className="form-control" />
            </div> 
            <br />

   
        <h6 for="pmethod">Payment Method:</h6> 
        <input type="radio" name="payment" id="bkash" value="bkash" className="input-hidden" />
        <label for="bkash">
        <img src="https://www.logo.wine/a/logo/BKash/BKash-bKash-Logo.wine.svg" />
        </label>
        <input type="radio" name="payment"  id="nagad" value="nagad" className="input-hidden" />
        <label for="nagad">
        <img src="https://www.logo.wine/a/logo/Nagad/Nagad-Vertical-Logo.wine.svg" />
        </label>
        <input type="radio" name="payment"  id="paytm" value="paytm" className="input-hidden" />
        <label for="paytm">
        <img src="https://www.logo.wine/a/logo/Paytm/Paytm-Logo.wine.svg" />
        </label>
        <br />
		
   
            <div id="phn">
            <br />
            <div className="form-group input-group" >
            <input type="tel" name="phone" placeholder="Enter Banking Number" className="form-control" />
     <br />
    </div> 
    </div>
    <br /><br />
</form>
<div className="form-group">
<button className="in container" onClick={submit}>Request</button>
</div>    
<br />     
</article>
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

export default CashOut;
