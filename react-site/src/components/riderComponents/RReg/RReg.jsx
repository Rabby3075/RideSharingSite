import React, {useState, useEffect} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { useNavigate  } from "react-router-dom";
import { Link } from "react-router-dom";
import "./RReg.css";

const RReg = ()=>{

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
    let[cpassword, setCpassword] = useState("");
    let[image, setImage] = useState("");
    const navigate  = useNavigate("");


    const Rsub = (e) =>{

        if(password == cpassword)
        {
        e.preventDefault();
        var obj = {fname: fname,gender: gender,dob: dob,peraddress: peraddress,preaddress: preaddress,phone: phone,email: email,nid: nid,dlic: dlic,username: username,password: password,image: image};
        console.log(obj);
        axios.post("http://127.0.0.1:8000/api/RegApi",obj)
        .then(function (response) {
            console.log(response);
            navigate('/RLogin');
            alert("Registration Successfully Done!");
          })
          .catch(function (error) {
            console.log(error);
        });
        }
        else{
            alert("Confirm Password doesnt match with password!");
        }

        
    }

    return(
<div className="Reg">
<br /><br />
<div className="container">
<div className="card bg-light cdl">
<article className="card-body mx-auto cdn">
	<h4 className="card-title mt-3 text-center">Create Account</h4>
	<br />
	
	<form>

    <div className='input-group mb-3'>
		    <span className="input-group-text"> <i class="bi bi-person-fill"></i> </span>
        <input type="text" className='form-control' name="fname" placeholder="Full name" value={fname} onChange={(e)=>setFname(e.target.value)}></input>
    </div> 
 

    <div className='input-group mb-3'>
		    <span className="input-group-text"> <i class="bi bi-gender-ambiguous"></i> </span>
            
            <select className="custom-select cs" name="gender" value={gender} onChange={(e)=>setGender(e.target.value)}>
		    <option selected="">Gender</option>
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
		
        <textarea name="peraddress" className="form-control" placeholder="Permanent address" value={peraddress} onChange={(e)=>setPeraddress(e.target.value)}></textarea>
    </div> 

    
    <div className='input-group mb-3'>
		    <span className="input-group-text"> <i class="bi bi-geo-alt-fill"></i> </span>

        <textarea name="preaddress" className="form-control" placeholder="Present address" value={preaddress} onChange={(e)=>setPreaddress(e.target.value)}></textarea>
    </div> 



    <div className='input-group mb-3'>
		    <span className="input-group-text"> <i class="bi bi-telephone-plus-fill"></i> </span>

    	<input name="phone" className="form-control" placeholder="Phone number" type="text" value={phone} onChange={(e)=>setPhone(e.target.value)}/>
    </div> 


    <div className='input-group mb-3'>
		    <span className="input-group-text"> <i class="bi bi-envelope-fill"></i> </span>

        <input name="email" className="form-control" placeholder="Email address" type="email" value={email} onChange={(e)=>setEmail(e.target.value)} />
    </div>


    <div className='input-group mb-3'>
		    <span className="input-group-text"> <i class="bi bi-postcard-fill"></i> </span>

        <input name="nid" className="form-control" placeholder="NID no." type="text" value={nid} onChange={(e)=>setNid(e.target.value)} />
    </div> 


    <div className='input-group mb-3'>
		    <span className="input-group-text"> <i class="bi bi-credit-card-2-front-fill"></i> </span>
	
        <input name="dlic" className="form-control" placeholder="Driving license no." type="text" value={dlic} onChange={(e)=>setDlic(e.target.value)} />
    </div> 


    <div className='input-group mb-3'>
		    <span className="input-group-text"> <i class="bi bi-person-fill"></i> </span>
	
        <input name="username" className="form-control" placeholder="Username" type="text" value={username} onChange={(e)=>setUsername(e.target.value)}/>
    </div> 


    <div className='input-group mb-3'>
		    <span className="input-group-text"> <i class="bi bi-key-fill"></i> </span>

        <input className="form-control" name="password" placeholder="Create password" type="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
    </div> 


    <div className='input-group mb-3'>
		    <span className="input-group-text"> <i class="bi bi-key-fill"></i> </span>

        <input className="form-control" name="cpassword" placeholder="Repeat password" type="password" value={cpassword} onChange={(e)=>setCpassword(e.target.value)}/>
    </div>   

    
    <div className='input-group mb-3'>
		    <span className="input-group-text"> <i class="bi bi-image-fill"></i> </span>
	
        <input className="form-control" type="file" id="formFile" name="image" id="image" placeholder="Upload Image" value={image} onChange={(e)=>setImage(e.target.value)} />
    </div>  

     

    <div className="form-group">
        <button className="btn btn-primary btn-block container" onClick={Rsub}> Create Account</button>
    </div>    
    <p className="text-center">Have an account? <Link to="/RLogin" >Login</Link> </p>                                                                 
</form>
</article>
</div> 
</div> 
<br /><br />
</div>
)
}

export default RReg;