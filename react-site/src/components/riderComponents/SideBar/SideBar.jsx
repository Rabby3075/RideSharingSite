import React, {useState, useEffect} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import "./SideBar.css";

const SideBar = ()=>{

return(
<div>

<div className="accordion mb-2" >
				<div className="card">
					<div className="card-header" id="headingOne">
						<h2 className="mb-0">									
								<span><i className="fa fa-user"></i> Account</span>
						</h2>
					</div>

						<div className="card-body">
							<ul className="list-group">
								<li className="list-group-item"><Link to="#"><i className="fa fa-pencil"></i> Edit Profile</Link></li>
								<li className="list-group-item"><Link to="#"><i className="fa fa-key"></i> Change Password</Link></li>
							</ul>
						</div>

				</div>
				<div className="card">
					<div className="card-header" id="headingTwo">
						<h2 className="mb-0">									

								<span><i className="fa fa-comments"></i> Messages</span>
							

						</h2>
					</div>
						<div className="card-body">
							<ul className="list-group">
								<li className="list-group-item"><Link to="#"><i className="fa fa-paper-plane"></i> Sent</Link></li>
								
							</ul>
						</div>
				</div>

				 <div className="card">
					<div className="card-header" id="headingThree">
						<h2 className="mb-0">									
								<span><i className="fa fa-bar-chart"></i> Reports</span>
								
						</h2>
					</div>
                    
						<div className="card-body">
							<ul className="list-group">									
								<li className="list-group-item"><Link to="/rideHistory"><i className="fa fa-table"></i> Ride history</Link></li>
							</ul>
						</div>
				</div>

				<div className="card">
					<div className="card-header" id="headingFour">
						<h2 className="mb-0">									
								<span><i className="fa fa-motorcycle"></i> Ride</span>
								
						</h2>
					</div>
						<div className="card-body">
							<ul className="list-group">										
								<li className="list-group-item"><Link to="#"><i className="fa fa-list-alt"></i> Check Request</Link></li>
								<li className="list-group-item"><Link to="#"><i className="fa fa-spinner"></i> Ride Progress </Link></li>		
							</ul>
						</div>
				</div>
              				
              	<div className="card">
					<div className="card-header" id="headingFive">
						<h2 className="mb-0">									
                        <span><i class="fa fa-money"></i> Payment</span>
						</h2>
					</div>
						<div className="card-body">
							<ul className="list-group">										
								<li className="list-group-item"><Link to="/RiderBal"><i className="fa fa-money"></i> Balance</Link></li>
								<li className="list-group-item"><Link to="/CashOut"><i className="fa fa-credit-card"></i> Cash-out</Link></li>
								<li className="list-group-item"><Link to="/Redeem"><i className="fa fa-star-half-o"></i> Rider Point</Link></li>			
							</ul>
						</div>
				</div>
	</div>

</div>
    )
}
export default SideBar;
