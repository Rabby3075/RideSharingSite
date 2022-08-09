import React, {useState, useEffect} from "react";
import axios from "axios";
import CustomerNavbar from "../Navbar/CustomerNavbar";
import Footer from "../../../riderComponents/Footer/Footer";
import './changePass.css';

const ChangePass = () =>{

    let[alertshow, setAlertshow] = useState(false);
    let[successshow, setSuccessshow] = useState(false);
    let[cpass, setCpass] = useState("");
    let[npass, setNpass] = useState("");
    let[rpass, setRpass] = useState("");
    let user = JSON.parse(localStorage.getItem('user'));

    const Click = () =>{
      /* setAlertshow(true);
      setSuccessshow(true); */
      console.log(user);
      var obj = {cpass: cpass,npass: npass,rpass: rpass,token: user.access_token};
      console.log(obj);
      axios.post("http://127.0.0.1:8000/api/customerpassChange",obj)
      .then(resp=>{
        var response = resp.data;
        console.log(response);
        if(response.status===1){

            document.getElementById('successArea').innerHTML = response.msg;
            setSuccessshow(true);

        }
        else if(response.status===0){
            setAlertshow(true);
            document.getElementById('errorArea').innerHTML = response.msg;


        }


    }).catch(err=>{
        console.log(err);
    });
    }


    return(
        <div>
            <CustomerNavbar />
            <section className="vh-100 gradient-custom ">
  <div className="container py-5 h-100 ">
    <div className="row d-flex justify-content-center align-items-center h-100 ">
      <div className="col-12 col-md-8 col-lg-6 col-xl-5 ">
        <div className="card bg-dark text-white ">
          <div className="card-body p-5 text-center ">

            <div className="mb-md-5 mt-md-4 pb-5">

              <h2 className="fw-bold mb-2 text-uppercase">Changing Password</h2>

                        <div className="p-4">




                        {
                            alertshow && <div className="alert alert-danger alert-dismissible">

                            <p id="errorArea"></p>
                            </div>
                        }
                        {
                            successshow && <div className="alert alert-success alert-dismissible" id="success">

                            <p id="successArea"></p>
                            </div>
                        }






            <form>

              <div className="form-outline form-white mb-4">
                <input type="password" id="cpass" name="cpass" className="form-control form-control-lg" value={cpass} onChange={(e)=>setCpass(e.target.value)} />
                <label className="form-label" for="cpass">Current Password</label>
                <span className="text-danger" id="cpassError"></span>
              </div>

              <div className="form-outline form-white mb-4">
                <input type="password" id="npass" name="npass" className="form-control form-control-lg" value={npass} onChange={(e)=>setNpass(e.target.value)} />
                <label className="form-label" for="npass">New Password</label>
                <span className="text-danger" id="npassError"></span>
              </div>

              <div className="form-outline form-white mb-4">
                <input type="password" id="rpass" name="rpass" className="form-control form-control-lg" value={rpass} onChange={(e)=>setRpass(e.target.value)} />
                <label className="form-label" for="rpass">Retype new password</label>
                <span className="text-danger" id="rpassError"></span>
              </div>
              </form>

                <button className="btn btn-outline-light btn-lg px-5" type="submit" onClick={Click}>Update Password</button>

            </div>


          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
</section>

        </div>
    )

}
export default ChangePass;
