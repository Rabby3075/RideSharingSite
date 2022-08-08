import React, {useState, useEffect} from "react";
import axios from "axios";
import './RideReq.css';
import CustomerNavbar from "../Navbar/CustomerNavbar";
import Footer from "../../../riderComponents/Footer/Footer";

const RideReq = () =>{
    let[pickLocation, setpickLocation] = useState("");
    let[dropLocation, setdropLocation] = useState("");
    const [locations, setLocations] = useState([]);
    useEffect(()=>{
        axios.get("http://127.0.0.1:8000/api/locationList")
        .then(resp=>{
            console.log(resp.data);
            setLocations(resp.data);
        }).catch(err=>{
            console.log(err);
        });
    },[]);

    let user = JSON.parse(localStorage.getItem('user'));


   const rideSubmit = () =>{
    var obj = {pickLocation: pickLocation, dropLocation: dropLocation,token: user.access_token};
    console.log(obj);
    axios.post("http://127.0.0.1:8000/api/ridereq",obj)
    .then(resp=>{
        var response = resp.data;
        console.log(response);

        if(response.statusId === 200){
            document.getElementById('success').innerHTML = response.success;
            document.getElementById('destination').innerHTML = response.destination;
            document.getElementById('bill').innerHTML = response.price;
        }

    }).catch(err=>{
        console.log(err);
    });
   }


    return(
        <div>
            <CustomerNavbar />
        <div className="container-fluid">

            <div id="map-container-google-3" className="z-depth-1-half map-container-3">
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d467336.5485682298!2d90.41932600000001!3d23.780636!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b087026b81%3A0x8fa563bbdd5904c2!2sDhaka!5e0!3m2!1sen!2sbd!4v1655535972265!5m2!1sen!2sbd"  />
            </div>

            <div className="rounded d-flex justify-content-center">
            <div className="col-md-5 col-sm-6 shadow-lg bg-white my-4">
                <div className="text-center col-sm-12 mt-2">
                    <h3 id="hijibi">Request for a ride</h3>
                    <p id="success"></p>
                    <p id="distance"></p>
                    <p id="bill"></p>
                </div>
        <form>

            <div className="p-4">




                        <div className="input-group mb-3">
                            <span className="input-group-text bg-success"><i
                                className="bi bi-pin-map-fill text-white"></i>
                            </span>
                            <input className="form-control pickLocation" list="datalistOptions" name="pickLocation" id="pickLocation" placeholder="Choose Pickup point" value={pickLocation} onChange={(e)=>setpickLocation(e.target.value)}/>
                            <datalist id="datalistOptions">
                            {locations.map(location=>(
                                <option value={location.location}></option>
                                ))}


                            </datalist>

                            <span className="text-danger ms-2" id="pickError"></span>

                        </div>

                        <div className="input-group mb-3">
                            <span className="input-group-text bg-success"><i
                                className="bi bi-geo-alt-fill text-white"></i>
                            </span>
                            <input className="form-control droplocation" list="datalistOptions" name="dropLocation" id="dropLocation" placeholder="Choose Pickup point" value={dropLocation} onChange={(e)=>setdropLocation(e.target.value)}/>

                            <datalist id="datalistOptions">
                            {locations.map(location=>(
                                <option value={location.location}></option>
                                ))}


                            </datalist>

                            <span className="text-danger ms-2" id="destinationError"></span>

                        </div>





                </div>
        </form>
        <div className="mt-2 text-center">


                <button className="btn btn-outline-success" id="myBtn"  onClick={rideSubmit}>Confirm Request</button>
        </div>
            </div>
    </div>

        </div>
        <Footer />
        </div>
    )
}
export default RideReq;
