import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from '../NavBar/NavBar';
import SideBar from '../SideBar/SideBar';
import Footer from '../Footer/Footer';

const Rdash = ()=>{


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
        <div className="-deck">
        <div class="container">
  <div class="row">
    <div class="col-sm">
    <div className="card">
    <img src="https://prod-media-eng.dhakatribune.com/uploads/2020/06/ride-sharing-obhai-zakir-1592750284918.jpg" className=" rounded mx-auto d-block w-75 p-3" alt="..."/>
    <div className="card-body">
    <img src="https://www.tripsavvy.com/thmb/rIHw29ll5F95RZs09hwnXt8IcZM=/2121x1414/filters:fill(auto,1)/GettyImages-1050146084-1f58e25cdab445b996e5896ee6e4cbe0.jpg" className=" rounded mx-auto d-block w-75 p-3" alt="..."/>
    </div>
  </div>
    </div>
    <div class="col-sm">
    <div className="card">
  <img src="https://codeit.us/storage/LW0GiX0PV7DRuMmW8x0SE0CLFq3nIfOEhoOhcgJ6.png" className=" rounded mx-auto d-block w-75 p-3" alt="..."/>
    <div className="card-body">
    <img src="https://cdn.pastemagazine.com/www/articles/uber%20safeher.jpg" className=" rounded mx-auto d-block w-75 p-3" alt="..."/>
    </div>
  </div>
    </div>
  </div>
</div>


</div>
		</div>
	  </div>
    </div>
    <Footer/>
</div>
</div>
    )
}
export default Rdash;