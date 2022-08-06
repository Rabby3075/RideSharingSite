import Navbar from "../Navbar/Navbar"
import Sidebar from "../Sidebar/Sidebar"
import "./addcustomer.scss"
import { useNavigate  } from "react-router-dom"




const Addcustomer =() => {
    return (
        <div className="add">
            <Sidebar/>
            <div className="addcontainer">
            <Navbar/>
            <div className="top">
                <h3>Add New Customer</h3>
            </div>
            <div className="bottom">
                
                <div className="reg">
                <form action="http://127.0.0.1:8000/api/customerView" method="post">
                
                <div className="inputform"><label>Name</label><input name="name" type="text" placeholder="Enter name"></input></div>
                <div className="inputform"><label>Date of birth</label><input name="dob" type="date" placeholder="Enter date of birth"></input></div>
                <div className="inputform"><label>Phone</label><input name="phone" type="text" placeholder="Enter phone number"></input></div>
                <div className="inputform"><label>Address</label><input name="address" type="text" placeholder="Enter address"></input></div>
                <div className="inputform"><label>Username</label><input name="username" type="text" placeholder="Enter a username"></input></div>
                <div className="inputform"><label>Email</label><input name="email" type="text" placeholder="Enter email"></input></div>
                <div className="inputform"><label>Password</label><input name="password" type="password" placeholder="Enter password"></input></div>

                
                <div>
                <button className="btn btn-primary ba form-submit mt-3 w-64" type="submit" >Submit</button>

                 </div>
                 </form>
                </div>

                
                
            </div>
            </div>

        </div>
    )
}

export default Addcustomer;