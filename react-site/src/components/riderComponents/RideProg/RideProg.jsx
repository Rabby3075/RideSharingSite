import React, {useState, useEffect} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import "./RideProg.css";
import NavBar from '../NavBar/NavBar';
import SideBar from '../SideBar/SideBar';
import Footer from '../Footer/Footer';


const  RideProg = ()=>{

 
        let user = JSON.parse(localStorage.getItem('user'));
        var userid = {token: user.access_token};
        const [posts, setPosts] = useState([]);
        let[button, setButton] =useState("");
        let[combutton, setCombutton] =useState("");
        let[bal, setBal] =useState("");
        let[approve, setApprove] =useState("");

        axios.post("http://127.0.0.1:8000/api/RideProgApi",userid)
        .then(resp=>{
            setPosts(resp.data);
        }).catch(err=>{
            console.log(err);
        });
        axios.post("http://127.0.0.1:8000/api/RideProgApi",userid)
        .then(resp=>{
            setButton(resp.data);
        }).catch(err=>{
            console.log(err);
        });
        axios.post("http://127.0.0.1:8000/api/RiderCombutton",userid)
        .then(resp=>{
            setCombutton(resp.data);
        }).catch(err=>{
            console.log(err);
        });




        const startApi= ()=>{

            axios.post("http://127.0.0.1:8000/api/RideStartApi",userid)
            .then(function (response) {
                console.log(response);
              })
              .catch(function (error) {
                console.log(error);
            });
        }
        
        
       const cancelApi= ()=>{

        axios.post("http://127.0.0.1:8000/api/RidecancelApi",userid)
        .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
        });
    }
        
    const completeApi= (e)=>{
        e.preventDefault();
        var reqid = {token: user.access_token};
        axios.post("http://127.0.0.1:8000/api/RidecompleteApi",userid)
        .then(function (response) {
            console.log(response);
            window.location.reload();

          })
          .catch(function (error) {
            console.log(error);
        });
    }
        

       if(button != 1)
       {
         var condi = "aprrove";
       }
       if(combutton != 1)
       {
         var condit = "ongoing";
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
<div>
<br /> <br />
{condi ? 
            <div className="row">
                            <div className="col-sm-12 mb-1">
                                <div className="form-group">
                                    <label for="cname">Customer Name</label>
                                    <input type="text" className="form-control" id="cname" name="cname" value={posts.customerName} disabled />
                                </div>
                            </div>
        
                            <div className="col-sm-12 mb-1">
                                <div className="form-group">
                                    <label for="phone">Customer Phone</label>
                                    <input type="text" className="form-control" id="phone" name="phone"  value={posts.customerPhone} disabled />
                                </div>
                            </div>
        
                            <div className="col-sm-12 mb-1">
                                <div className="form-group">
                                    <label for="pickpoint">Pick-Up Point</label>
                                    <input type="text" className="form-control" id="pickpoint" name="pickpoint"  value={posts.pickupPoint} disabled />
                                </div>
                            </div>
        
                            <div className="col-sm-12 mb-1">
                                <div className="form-group">
                                    <label for="destination">Final Destination</label>
                                    <input type="text" className="form-control" id="destination" name="destination" value={posts.destination} disabled />
                                </div>
                            </div>
    
                            <div className="col-sm-12 mb-1">
                                <div className="form-group">
                                    <label for="distance">Distance</label>
                                    <input type="text" className="form-control" id="distance" name="distance" value={posts.length} disabled />
                                </div>
                            </div>
    
                            <div className="col-sm-12 mb-1">
                                <div className="form-group">
                                    <label for="rate">Rate</label>
                                    <input type="text" className="form-control" id="rate" name="rate" value={posts.cost} disabled />
                                </div>
                            </div>
                            
                            <br /><br /><br />
                     
    
                            {condit ? 
                            <div>
                            <button className="btn btn-success"  onClick={startApi}> <i className="fa fa-check" aria-hidden="true"></i> Ride Start</button>
                            <br /><br />
                            <button className="btn btn-danger"  onClick={cancelApi}> <i className="fa fa-times" aria-hidden="true"></i> Ride Cancel</button>
                            </div>
                            :
                            <div>

                            <button className="btn btn-success"  onClick={completeApi}> <i className="fa fa-check" aria-hidden="true"></i> Ride Complete</button>
        
                            </div>

    
                            }
    
                        </div>
                    

               

        : 

        <button className="btn-pink d-flex justify-content-center pe-none">
        <span className="btn-gradientt">
        <i className="fa fa-exclamation-circle"></i>
        </span>
        <span className="btn-text">Currently No Ride Progress Available</span>
       </button>
      }
      </div> 
      </div>
</div>
	  </div>
    </div>
    <Footer/>
</div>

)
}
export default RideProg;
