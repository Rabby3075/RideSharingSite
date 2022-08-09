
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import Navbar from './components/adminComponents/Navbar/Navbar';
import Sidebar from './components/adminComponents/Sidebar/Sidebar';
import Dashboard from './components/adminComponents/Dashboard/Dashboard';
import Login from './components/adminComponents/Login/Login';

import Addcustomer from './components/adminComponents/AddCustomer/Addcustomer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Link } from "react-router-dom";

//-------Customer-------------
import CustomerRegistration from './components/CustomerComponents/Authentication/CustomerRegistration';
import CustomerLogin from './components/CustomerComponents/Authentication/CustomerLogin';
import CustomerNavbar from './components/CustomerComponents/Dashboard/Navbar/CustomerNavbar';
import RideReq from './components/CustomerComponents/Dashboard/RideRequest/RideReq';
import Discount from './components/CustomerComponents/Dashboard/Discount/Discount';
import Home from './components/CustomerComponents/Dashboard/Homepage/Home';
import Otp from './components/CustomerComponents/Dashboard/Otp/otp';
import RideHistory from './components/CustomerComponents/Dashboard/RideHistory/RideHistory';
import ViewProfile from './components/CustomerComponents/Dashboard/Profile/ViewProfile';
import ChangePass from './components/CustomerComponents/Dashboard/ChangePass/ChangePass';
import CustomerChat from './components/CustomerComponents/Dashboard/Chat/CustomerChat';
//rider
import "bootstrap/dist/css/bootstrap.min.css";
import RiderHis from './components/riderComponents/RiderHis/RiderHis';
import RiderBal from './components/riderComponents/RiderBal/RiderBal';
import Redeem from './components/riderComponents/Redeem/Redeem';
import CashOut from './components/riderComponents/CashOut/CashOut';
import Rdash from './components/riderComponents/dashboard/Rdash';
<<<<<<< HEAD
=======

>>>>>>> 16e792515f9e5364bbd19a12f3c818024f0989c0
import RLogin from './components/riderComponents/RLogin/RLogin';
import RReg from './components/riderComponents/RReg/RReg';
import Rotp from './components/riderComponents/Rotp/Rotp';
import ProfEdit from './components/riderComponents/ProfEdit/ProfEdit';
import CheckReq from './components/riderComponents/CheckReq/CheckReq';
import RideProg from './components/riderComponents/RideProg/RideProg';
//end

import NavBar from './components/riderComponents/NavBar/NavBar';
import SideBar from './components/riderComponents/SideBar/SideBar';
import Footer from './components/riderComponents/Footer/Footer';
<<<<<<< HEAD
=======

>>>>>>> 16e792515f9e5364bbd19a12f3c818024f0989c0

import Addadmin from './components/adminComponents/Addadmin/Addadmin';
import Dropdownlist from './components/adminComponents/Dropdownlist/Dropdownlist';
import Customerview from './components/adminComponents/Customerview/Customerview';
import Customerviewprops from './components/adminComponents/Customerview/Customerviewprops';

import Formview from './components/adminComponents/Form/Formview';
import AddRider from './components/adminComponents/AddRider/AddRider';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.css";
import Popper from '@popperjs/core';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap-icons/font/bootstrap-icons.css';
import RiderUpdate from './components/adminComponents/RiderUpdate/RiderUpdate';
import RiderView from './components/adminComponents/RiderList/RiderView';
import Pendingstatus from './components/adminComponents/Status/Pendingstatus';
import RideComplete from './components/adminComponents/Ridecomplete/RideComplete';

import Customerinfo from './components/adminComponents/Customerview/Customerinfo';
import Editcustomer from './components/adminComponents/Customerview/Editcustomer';
import Viewrider from './components/adminComponents/Status/Viewrider';

import Adminview from './components/adminComponents/Adminview/Adminview';
import Admininfo from './components/adminComponents/Adminview/Admininfo';
import Editadmin from './components/adminComponents/Adminview/Editadmin';



import LogOut from './components/adminComponents/LogOut/LogOut';
import Viewinfo from './components/adminComponents/Status/Viewinfo';
import RiderData from './components/adminComponents/RiderList/RiderData';
import RiderHistoty from './components/adminComponents/Charts/RiderHistoty';
import SearchRiders from './components/adminComponents/SearchRiders.js/SearchRiders';

import Editprofile from './components/adminComponents/Editprofile/Editprofile';





<<<<<<< HEAD
=======



>>>>>>> 16e792515f9e5364bbd19a12f3c818024f0989c0
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>

    {/* Admin start */}
    <Router>

<<<<<<< HEAD
    <Routes>
    <Route path='/admindashboard' element={<Dashboard/>} />
    <Route path='/addcustomer' element={<Addcustomer/>} />
    <Route path='/addadmin' element={<Addadmin/>}/>
    <Route path='/dropdown' element={<Dropdownlist/>}/>
    <Route path='/customerview' element={<Customerview/>}/>
    <Route path='/customerviewprops' element={<Customerviewprops/>}/>
    <Route path='/formview/:id' element={<Formview/>}/>
    <Route path='/adminlogin' element={<Login />} />

    <Route path='/customerdelete' element={<Customerview/>}/>
    {/* <Route path='/customerviewprops' element={<Customerviewprops/>}/> */}
    <Route path='/customerinfo/:id' element={<Customerinfo/>}/>
    <Route path='/riderstatus' element={<Viewrider/>}/>
    <Route path='/riderviewinfo/:id' element={<Viewinfo/>}/>

    <Route path='/editcustomer/:id' element={<Editcustomer />} />
    <Route path='/addRider' element={<AddRider></AddRider>} />
    <Route path='/riderList' element={<RiderData></RiderData>} />
    <Route path='/riderList' element={<RiderList></RiderList>} />
  
    <Route path='/riderUpdate/:id' element={<RiderUpdate></RiderUpdate>} />
    <Route path='/ridecomplete' element={<RideComplete />} />
    <Route path='/riderView/:id' element={<RiderView></RiderView>} />
    <Route path='/logout' element={<LogOut></LogOut>} />
    </Routes>
    </Router>
    {/* ADmin End */}


    {/* rider start */}
    <Router>
    <Routes>
    <Route  exact path='/rideHistory' element={<RiderHis/>} />
    <Route  exact path='/RiderBal' element={<RiderBal/>} />
    <Route  exact path='/Redeem' element={<Redeem/>} />
    <Route  exact path='/CashOut' element={<CashOut/>} />
    <Route  exact path='/RLogin' element={<RLogin/>} />
    <Route  exact path='/RReg' element={<RReg/>} />
    <Route  exact path='Rotp' element={<Rotp />} />
    <Route  exact path='/RProfile' element={<ProfEdit/>} />
    <Route  exact path='/RDash' element={<Rdash/>} />
    <Route  exact path='/CheckReq' element={<CheckReq/>} />
    <Route  exact path='/RideProg' element={<RideProg/>} />
    </Routes>
    </Router>
    {/* rider End */}

    <Router>
    <Routes>
        {/*------------------------ Customer ----------------- */}
=======
      <Routes>


        <Route path='/addadmin' element={<Addadmin />} />
        <Route path='/customerview' element={<Customerview />} />
        <Route path='/formview/:id' element={<Formview />} />
        <Route exact path='/editprofile' element={<Editprofile />} />


        {/* <Dashboard/> */}
        {/* <Login/> */}





        <Route path='/adminlogin' element={<Login />} />
        <Route path='/admindashboard' element={<Dashboard />} />
        <Route path='/addcustomer' element={<Addcustomer />} />
        <Route path='/dropdown' element={<Dropdownlist />} />
        <Route exact path='/adminview' element={<Adminview />} />


>>>>>>> 16e792515f9e5364bbd19a12f3c818024f0989c0

        <Route path='/customerdelete' element={<Customerview />} />
        {/* <Route path='/customerviewprops' element={<Customerviewprops/>}/> */}
        <Route path='/customerinfo/:id' element={<Customerinfo />} />
        <Route path='/admininfo/:id' element={<Admininfo />} />
        <Route path='/riderstatus' element={<Viewrider />} />
        <Route path='/ridecomplete' element={<RideComplete />} />
        <Route path='/riderviewinfo/:id' element={<Viewinfo />} />
        <Route path='/editcustomer/:id' element={<Editcustomer />} />
        <Route path='/customerLogin' element={<CustomerLogin />} />
        <Route path='/editadmin/:id' element={<Editadmin />} />
        {/*  rider  Admin Part start */}

        <Route path='/logout' element={<LogOut></LogOut>} />
        <Route path='/riderUpdate/:id' element={<RiderUpdate></RiderUpdate>} />
        <Route path='/riderView/:id' element={<RiderView></RiderView>} />
        <Route path='/addRider' element={<AddRider></AddRider>} />
        <Route path='/riderList' element={<RiderData></RiderData>} />
        <Route path='/riderHistoty' element={<RiderHistoty></RiderHistoty>} />
        <Route path='/search' element={<SearchRiders></SearchRiders>} />







        {/* ADmin End */}




        {/* <Dashboard/> */}
        {/* <Login/> */}











        {/* <Route path='/customerviewprops' element={<Customerviewprops/>}/> */}






      </Routes>
      {/* ADmin End */}

      <Routes>





        {/* rider start */}


        <Route exact path='/rideHistory' element={<RiderHis />} />
        <Route exact path='/RiderBal' element={<RiderBal />} />
        <Route exact path='/Redeem' element={<Redeem />} />
        <Route exact path='/CashOut' element={<CashOut />} />
        <Route exact path='/RLogin' element={<RLogin />} />
        <Route exact path='/RReg' element={<RReg />} />
        <Route exact path='/RProfile' element={<ProfEdit />} />
        <Route exact path='/RDash' element={<Rdash />} />
        <Route exact path='/CheckReq' element={<CheckReq />} />




        {/* rider End */}



        {/*------------------------ Customer ----------------- */}

        <Route path='/customerviewprops' element={<Customerviewprops />} />
        <Route path='/customerRegistration' element={<CustomerRegistration />} />
        <Route path='/customerLogin' element={<CustomerLogin />} />
        <Route path='/customer/home' element={<Home />} />
        <Route path='/customer/discount' element={<Discount />} />
        <Route path='/customer/riderequest' element={<RideReq />} />
        <Route path='/customer/otp' element={<Otp />} />
        <Route path='/customer/ridehistory' element={<RideHistory />} />
        <Route path='/customer/viewprofile' element={<ViewProfile />} />
        <Route path='/customer/changepassword' element={<ChangePass />} />
        <Route path='/customer/chat/:id' element={<CustomerChat />} />

<<<<<<< HEAD
=======

        {/*------------------------ Customer ----------------- */}






        {/* rider start */}



        {/* <NavBar/>
    <div className="container-fluid mt-5">
	  <div className="row">
    <div className="col-lg-2">
    <SideBar/>
    </div>
    <div className="col-lg-10">
		<div className="jumbotron"> */}





      </Routes>


    </Router>





    {/* </div>
		</div>
	  </div>
    </div> */}
    {/* <Footer/>
    {/* <Router>
      <NavBar />
      <div className="container-fluid mt-5">
        <div className="row">
          <div className="col-lg-2">
            <SideBar />
          </div>
          <div className="col-lg-10">
            <div className="jumbotron">
              <Routes>
                <Route exact path='/rideHistory' element={<RiderHis />} />
                <Route exact path='/RiderBal' element={<RiderBal />} />
                <Route exact path='/Redeem' element={<Redeem />} />
                <Route exact path='/CashOut' element={<CashOut />} />
              </Routes>
            </div>
          </div>
        </div>
      </div>
      <Footer /> */}




    {/* rider end */}



>>>>>>> 16e792515f9e5364bbd19a12f3c818024f0989c0
  </React.StrictMode >
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
