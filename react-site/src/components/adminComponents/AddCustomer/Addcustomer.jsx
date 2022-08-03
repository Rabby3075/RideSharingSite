import Navbar from "../Navbar/Navbar"
import Sidebar from "../Sidebar/Sidebar"
import "./addcustomer.scss"



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
                <form>
                
                <div className="inputform"><label>Name</label><input type="text" placeholder="Enter name"></input></div>
                <div className="inputform"><label>Date of birth</label><input type="date" placeholder="Enter date of birth"></input></div>
                <div className="inputform"><label>Phone</label><input type="text" placeholder="Enter phone number"></input></div>
                <div className="inputform"><label>Address</label><input type="text" placeholder="Enter address"></input></div>
                <div className="inputform"><label>Username</label><input type="text" placeholder="Enter a username"></input></div>
                <div className="inputform"><label>Email</label><input type="text" placeholder="Enter email"></input></div>
                <div className="inputform"><label>Password</label><input type="password" placeholder="Enter password"></input></div>
                 <button>Submit</button>
                
                </form>
                </div>
                
            </div>
            </div>

        </div>
    )
}

export default Addcustomer;