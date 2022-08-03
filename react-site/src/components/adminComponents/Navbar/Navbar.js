import React from "react";
import  "./navbarc.scss"
import SearchIcon from '@mui/icons-material/Search';
import ModeNightIcon from '@mui/icons-material/ModeNight';
import FullscreenIcon from '@mui/icons-material/Fullscreen';
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';


const Navbar = () => {
    return(
            <div className="navbar">
                <div className="wrapper">
                    <div className="search">
                        <input type="text" placeholder="Search..." ></input>
                        <SearchIcon/>
                        </div>
                        <div className="items">
                            <div className="item">
                                <ModeNightIcon className="icon"/>
                            </div>
                            <div>
                                <FullscreenIcon className="icon"/>
                            </div>
                            <div className="item">
                            <CircleNotificationsIcon className="icon"/>
                            <div className="container">1</div>
                            </div>
                            <div className="item">
                                <img src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aHVtYW58ZW58MHx8MHx8&w=1000&q=80"
                                alt="" className="avatar"

                                />
                               
                            </div>
                        
                    </div>
                    
                </div>
            </div>
    )
}


export default Navbar; 