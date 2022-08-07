import React, {useState, useEffect} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import "./Riderbal.css";
import NavBar from '../NavBar/NavBar';
import SideBar from '../SideBar/SideBar';
import Footer from '../Footer/Footer';

const RiderBal = ()=>{
    const [balncs, setBalncs] = useState([]);
    let user = JSON.parse(localStorage.getItem('user'));
    var userid = {token: user.access_token};

    useEffect(()=>{
        axios.post("http://127.0.0.1:8000/api/riderBalance",userid)
        .then(resp=>{
            console.log(resp.data);
            setBalncs(resp.data);
        }).catch(err=>{
            console.log(err);
        });
    },[]);

    const [totals, setTotals] = useState([]);

    useEffect(()=>{
        axios.post("http://127.0.0.1:8000/api/totalPay",userid)
        .then(resp=>{
            console.log(resp.data);
            setTotals(resp.data);
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

    const [historys, setHistorys] = useState([]);

    useEffect(()=>{
        axios.post("http://127.0.0.1:8000/api/rideHistory",userid)
        .then(resp=>{
            console.log(resp.data);
            setHistorys(resp.data);
        }).catch(err=>{
            console.log(err);
        });
    },[]);
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
            <div className="card bg-c-yellow order-card cd">
                <div className="card-block">
                    <h6 className="m-b-20">Balance</h6>
                    <h2 className="text-right"><span className="f-left h1 fnt">{balncs.balance} BDT</span><img src="https://isometric.online/wp-content/uploads/2019/08/Money_SVG.svg" alt=""  className="f-right im" /></h2>
                </div>
            </div>
        </div>      
        
	</div>

<div className="row">
        <div className="col-md-4 col-xl-6">
            <div className="card bg-c-green order-card cd">
                <div className="card-block">
                    <h6 className="m-b-20">Total Earning</h6>
                     <h2 className="text-right"><i className="fa fa-money f-left ic"></i><span>{totals} BDT</span></h2>
                    <h6 className="m-b-0 text-dark">Completed Rides<span className="f-right">{counts}</span></h6>
                </div>
            </div>
        </div>

        
    <div className="col-md-4 col-xl-6">
            <div className="card bg-c-pink order-card cd">
                <div className="card-block">
                    <h6 className="m-b-20">Company's Revenue</h6>
                    <h2 className="text-right"><i className="fa fa-money f-left ic"></i><span>{totals*0.10} BDT</span></h2>
                    <br/>
                </div>
            </div>
        </div> 
        
	</div>
    
    <br/><br/><br/>
            <div className="heading">
                <h1>Income Information</h1>
            </div>

            <br/> <br/>
            
      <div className="table-responsive custom-table-responsive container">

        <table className="table custom-table">
          <thead>
            <tr>  

              <th scope="col">
                <label className="control control--checkbox">
                  <div className="control__indicator"></div>
                </label>
              </th>
              <th scope="col">Ride ID.</th>
              <th scope="col">Distance</th>
              <th scope="col">Cost</th>
              
            </tr>
          </thead>
          <tbody>


          {historys.map(history=>(
                 
                <tr key={history.id} scope="row">
                  <th scope="row">
                      <label className="control control--checkbox">
                          <div className="control__indicator"></div>
                      </label>
                  </th>
                  <td>{history.id}</td>
                  <td>{history.length} KM</td>
                  <td>{history.cost} BDT</td>
              </tr>
                    ))}

          </tbody>
        </table>
  </div> 
  </div>
		</div>
	  </div>
    </div>
    <Footer/>
</div>
    )
}
export default RiderBal;
