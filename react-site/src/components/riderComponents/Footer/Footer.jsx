import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
const Footer = () => {
    return(
        <>
<footer className="bg-dark text-center text-white footer">

  <div className="container p-4 pb-0">

    <h1><span className="text-danger">Follow</span><span class="text-white">Us</span></h1>
  </div>
  <div className="text-center p-3 text-light">
    © 2022 Copyright:
    <span className="text-white">Your Ride Team</span>
  </div>
</footer>

        </>
    )
}
export default Footer;