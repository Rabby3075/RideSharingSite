import React, {useState, useEffect} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "./ProfEdit.css";
import NavBar from '../NavBar/NavBar';
import SideBar from '../SideBar/SideBar';
import Footer from '../Footer/Footer';


const  ProfEdit = ()=>{

        let[fname, setFname] = useState("");
        let[gender, setGender] = useState("");
        let[dob, setDob] = useState("");
        let[peraddress, setPeraddress] = useState("");
        let[preaddress, setPreaddress] = useState("");
        let[phone, setPhone] = useState("");
        let[email, setEmail] = useState("");
        let[nid, setNid] = useState("");
        let[dlic, setDlic] = useState("");
        let[username, setUsername] = useState("");
        let[password, setPassword] = useState("");
        const navigate  = useNavigate();

        let user = JSON.parse(localStorage.getItem('user'));
        const [posts, setPosts] = useState([]);

        var userid = {token: user.access_token};
        axios.post("http://127.0.0.1:8000/api/RiderInfoApi",userid)
        .then(resp=>{
            console.log(resp.data);
            setPosts(resp.data);
        }).catch(err=>{
            console.log(err);
        });

        const Edit = (e) =>{
        e.preventDefault();
        var obj = {fname: fname,gender: gender,dob: dob,peraddress: peraddress,preaddress: preaddress,phone: phone,email: email,nid: nid,dlic: dlic,username: username,password: password,token: user.access_token};
        axios.post("http://127.0.0.1:8000/api/InfoUpApi",obj)
        .then(resp=>{
            var data = resp.data;
            console.log(data);
            navigate('/RProfile');
            alert("Profile Update Successfully Done!");
        }).catch(err=>{
            console.log(err);
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
    <br /><br />
    <article className="card-body mx-auto cdn">
        <h4 className="card-title mt-3 text-center">Create Account</h4>
        <br />
        
        <form>
    
        <div className='input-group mb-3'>
                <span className="input-group-text"> <i class="bi bi-person-fill"></i> </span>
            <input type="text" className='form-control' name="fname" placeholder={posts.name} value={fname} onChange={(e)=>setFname(e.target.value)}></input>
        </div> 
     
    
        <div className='input-group mb-3'>
                <span className="input-group-text"> <i class="bi bi-gender-ambiguous"></i> </span>
                
                <select className="custom-select cs" name="gender" value={gender} onChange={(e)=>setGender(e.target.value)}>
                <option selected="">{posts.gender}</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Others">Others</option>
            </select>
        </div> 
    
    
        <div className='input-group mb-3'>
                <span className="input-group-text"> <i className='bi bi-calendar text-dark'></i> </span>
            <input type="date" name="dob" className="form-control" value={dob} onChange={(e)=>setDob(e.target.value)}/>
        </div> 
    
    
        <div className='input-group mb-3'>
                <span className="input-group-text"> <i class="bi bi-geo-alt-fill"></i> </span>
            
            <textarea name="peraddress" className="form-control" placeholder={posts.peraddress} value={peraddress} onChange={(e)=>setPeraddress(e.target.value)}></textarea>
        </div> 
    
        
        <div className='input-group mb-3'>
                <span className="input-group-text"> <i class="bi bi-geo-alt-fill"></i> </span>
    
            <textarea name="preaddress" className="form-control" placeholder={posts.preaddress} value={preaddress} onChange={(e)=>setPreaddress(e.target.value)}></textarea>
        </div> 
    
    
    
        <div className='input-group mb-3'>
                <span className="input-group-text"> <i class="bi bi-telephone-plus-fill"></i> </span>
    
            <input name="phone" className="form-control" placeholder={posts.phone} type="text" value={phone} onChange={(e)=>setPhone(e.target.value)}/>
        </div> 
    
    
        <div className='input-group mb-3'>
                <span className="input-group-text"> <i class="bi bi-envelope-fill"></i> </span>
    
            <input name="email" className="form-control" placeholder={posts.email} type="email" value={email} onChange={(e)=>setEmail(e.target.value)} />
        </div>
    
    
        <div className='input-group mb-3'>
                <span className="input-group-text"> <i class="bi bi-postcard-fill"></i> </span>
    
            <input name="nid" className="form-control" placeholder={posts.nid} type="text" value={nid} onChange={(e)=>setNid(e.target.value)} />
        </div> 
    
    
        <div className='input-group mb-3'>
                <span className="input-group-text"> <i class="bi bi-credit-card-2-front-fill"></i> </span>
        
            <input name="dlic" className="form-control" placeholder={posts.dlic} type="text" value={dlic} onChange={(e)=>setDlic(e.target.value)} />
        </div> 
    
    
        <div className='input-group mb-3'>
                <span className="input-group-text"> <i class="bi bi-person-fill"></i> </span>
        
            <input name="username" className="form-control" placeholder={posts.username}  type="text" value={username} onChange={(e)=>setUsername(e.target.value)}/>
        </div> 
    
    
        <div className='input-group mb-3'>
                <span className="input-group-text"> <i class="bi bi-key-fill"></i> </span>
    
            <input className="form-control" name="password" placeholder="Update password" type="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
        </div> 
    
        <div className="form-group">
            <button className="btn btn-primary btn-block container" onClick={Edit}> Update Account</button>
        </div>    
                                                           
    </form>
    </article>


    <br /><br />
    </div> 
    </div>
	  </div>
    </div>
    <Footer/>
</div>
    )
}
export default ProfEdit;
