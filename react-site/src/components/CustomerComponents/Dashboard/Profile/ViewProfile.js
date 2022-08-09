import React, {useState, useEffect} from "react";
import axios from "axios";
import CustomerNavbar from "../Navbar/CustomerNavbar";
import Footer from "../../../riderComponents/Footer/Footer";
const ViewProfile = () =>{
    let[name, setName] = useState("");
    let[dob, setDob] = useState("");
    let[phone, setPhone] = useState("");
    let[address, setAddress] = useState("");
    let[email, setEmail] = useState("");
    let user = JSON.parse(localStorage.getItem('user'));
    var obj = {token: user.access_token};
    useEffect(()=>{
        axios.post("http://127.0.0.1:8000/api/customerInfo",obj)
    .then(resp=>{
        var response = resp.data;
        console.log(response);
        setName(response.name);
        setDob(response.dob);
        setPhone(response.phone);
        setAddress(response.address);
        setEmail(response.email);
        document.getElementById('id').innerHTML = 'ID: '+response.id;
        document.getElementById('point').innerHTML = 'Point: '+response.rating +' points';
        document.getElementById('ppic').src = 'process.env.PUBLIC_URL'+response.image;
    }).catch(err=>{
        console.log(err);
    });
    },[]);

    const Submit = () =>{

        var obj = {name: name, dob: dob, phone: phone, address: address, email: email, token: user.access_token};
        console.log(obj);
        axios.post("http://127.0.0.1:8000/api/customerEdit",obj)
        .then(resp=>{
            var response = resp.data;
            console.log(response);
            if(response.status === 1){
                document.getElementById('success').innerHTML = response.success;
            }
            else if(response.status === 0){
                document.getElementById('error').innerHTML = response.error;
            }

        }).catch(err=>{
            console.log(err);
        });

    }

    return(
        <div>
            <CustomerNavbar />
        <div className="container rounded bg-light shadow mt-5 mb-5">
    <div className="row">
        <div className="col-md-3 border-right">
     <div className="d-flex flex-column align-items-center text-center p-3 py-5">
        <img className="rounded-circle mt-5" id="ppic"  width="150px" src="" alt="Profile Pic" />
        <span className="font-weight-bold" id="id"></span>
        <span className="text-black-50" id="point"> Point:  point</span>


        <span> </span>
    </div>
        </div>
        <div className="col-md-5 border-right">
            <form>
                <h1 className="text-success" id="success"></h1>
                <h1 className="text-danger" id="error"></h1>

            <div className="p-3 py-5">
                </div>

                <div className="row">
                    <div className="col-md-12">
                        <label className="labels">Name</label>
                        <input type="text" className="form-control" placeholder="Full Name" name="name" id="name" value={name} onChange={(e)=>setName(e.target.value)} />

                </div>
                <div className="row">
                    <div className="col-md-12">
                        <label className="labels">Date of Birth</label>
                        <input type="date" className="form-control" name="dob" id="dob" value={dob} onChange={(e)=>setDob(e.target.value)} />
                    </div>
                    <div className="col-md-12">
                        <label className="labels">Phone number</label>
                        <input type="tel" className="form-control" name="phone" id="phone" placeholder="enter 11 digit number" value={phone} onChange={(e)=>setPhone(e.target.value)} />
                    </div>
                    <div className="col-md-12">
                        <label className="labels">Address</label>
                        <input type="tel" className="form-control" name="address" id="address" placeholder="Address" value={address} onChange={(e)=>setAddress(e.target.value)} />
                    </div>
                    <div className="col-md-12">
                        <label className="labels">Email</label>
                        <input type="email" className="form-control" name="email" id="email" placeholder="someone@gmail.com" value={email} onChange={(e)=>setEmail(e.target.value)} />
                    </div>


                </div>

            </div>
            </form>
            <div className="mt-5 text-center">
                    <button className="btn btn-outline-success" type="submit" onClick={Submit}>Update Profile</button>
                </div>
        </div>

    </div>
</div>
<Footer />
</div>


    )

}
export default ViewProfile;
