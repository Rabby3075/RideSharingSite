import React, {useState, useEffect} from "react";
import axios from "axios";
import CustomerNavbar from "../Navbar/CustomerNavbar";
import Footer from "../../../riderComponents/Footer/Footer";

const RideHistory = () =>{

    let user = JSON.parse(localStorage.getItem('user'));
    var obj = {token: user.access_token};
    const [rides, setRides] = useState([]);
    useEffect(()=>{
        axios.post("http://127.0.0.1:8000/api/rideHistory",obj)
    .then(resp=>{
        var response = resp.data;
        console.log(response);
        setRides(response);
    }).catch(err=>{
        console.log(err);
    });
    },[]);

    return(
        <div>
            <CustomerNavbar />
            <div className="container mt-3">
                <h2 className="d-flex justify-content-center"><u>Your Ride History</u></h2>



    <button type="button" id="export" className="btn btn-outline-success">Download</button>

 <div className="table-responsive custom-table-responsive">


  <table className="table my-3 bg-light" id="myTable">
    <thead>
      <tr>
        <th>Ride ID</th>
        <th>Rider Name</th>
        <th>Rider Phone Number</th>
        <th>Pickup Point</th>
        <th>Destination</th>
        <th>Total Distance</th>
        <th>Bill</th>
        <th>Status</th>
        <th>Action</th>
      </tr>
    </thead>

    <tbody>

{rides.map(ride=>(
     <tr key={ride.id}>

        <td>{ride.id}</td>
        <td>{ride.customerName}</td>
        <td>{ride.customerPhone}</td>
        <td>{ride.pickupPoint}</td>
        <td>{ride.destination}</td>
        <td>{ride.length} kilo</td>
        <td>{ride.cost} BDT</td>
        {
            ride.customerStatus === 'Waiting for rider...' && <td><span class="badge bg-warning text-dark me-2 cancel-btn">Wait for rider</span></td>
        }
        {
            ride.customerStatus === 'Ride complete' && <td><span class="badge bg-success">Wait for rider</span></td>
        }
        {
            ride.customerStatus === 'Cancel' && <td><span class="badge bg-danger">Ride Cancel</span></td>
        }
        {
            ride.customerStatus === 'Approve' && <td><span class="badge bg-info text-dark">Rider Approve</span></td>
        }
        {
            ride.customerStatus === 'ongoing' && <td><span class="badge bg-primary">Ride Ongoing</span></td>
        }

        <td>
            {
                ride.customerStatus === 'Waiting for rider...' &&<a class="btn btn-danger text-white" id="cancel-ride" href="javascript:void(0)" data-url="{{ route('rideView', $ride->id) }}"><i class="bi bi-x-circle-fill"></i> Cancel Ride</a>
            }
            {
                ride.customerStatus === 'Ride complete' &&<a href="javascript:void(0)" class="btn btn-primary"  id="viewRide" data-url="{{ route('rideView', $ride->id) }}"><i class="bi bi-eye me-2 text-white"></i>View Details</a>
            }
            {
                ride.customerStatus === 'Cancel' &&<p class="text-danger"> Ride Cancel at <strong>{ride.cancelTime}</strong></p>
            }
            {
               ride.customerStatus === 'Approve' && <a href="/chat/{{$ride->id}}" class = "btn btn-info "><i class="bi bi-chat-dots me-1 text-dark"></i>Chat</a>
            }
             {
               ride.customerStatus === 'Approve' && <a class="btn btn-danger text-white" id="cancel-ride" href="javascript:void(0)" data-url="{{ route('rideView', $ride->id) }}"><i class="bi bi-x-circle-fill"></i> Cancel Ride</a>
            }
        </td>


    </tr>
    ))}

    </tbody>

  </table>


  </div>

</div>
            <Footer />
        </div>
    )
}
export default RideHistory;
