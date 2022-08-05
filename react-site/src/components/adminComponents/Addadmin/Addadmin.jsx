import Navbar from "../Navbar/Navbar"
import Sidebar from "../Sidebar/Sidebar"
import "./addadmin.scss"



const Addadmin =() => {
    return (
        <div className="add">
            <Sidebar/>
            <div className="addcontainer">
            <Navbar/>
            <div className="top">
                <h3>Add New Admin</h3>
            </div>
            <div className="bottom">
                
                <div className="reg">
                <form>
                
                <div className="inputform"><label>Name</label><input type="text" placeholder="Enter name"></input></div>
                <div className="inputform"><label>Date of birth</label><input type="date" placeholder="Enter date of birth"></input></div>
                <div className="inputform"><label>Email</label><input type="text" placeholder="Enter Email"></input></div>
                <div className="inputform"><label>Phone</label><input type="text" placeholder="Enter phone number"></input></div>
                <div className="inputform"><label>Password</label><input type="text" placeholder="Enter a password"></input></div>
                <div className="inputform"><label>Confirm Password</label><input type="text" placeholder=""></input></div>
                 <button>Submit</button>
                
                </form>
                </div>
                
            </div>
            </div>

        </div>
    )
}

export default Addadmin;