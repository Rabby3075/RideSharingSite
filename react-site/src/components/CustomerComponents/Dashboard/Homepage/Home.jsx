
import React, {useState, userEffect} from 'react';
import CustomerNavbar from '../Navbar/CustomerNavbar';

const Home = () =>{

    return(
        <div>
            <CustomerNavbar />
            <h1 class="text-center mt-2 text-uppercase text-dark">Welcome</h1>
            <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="true">
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                 <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div class="carousel-inner">
                    <div class="carousel-item active">
                    <img src="http://unb.com.bd/filemanager/photos/64/uber.jpg" class="d-block w-100" alt="1st pic" height="480"/>
                    </div>
                    <div class="carousel-item">
                    <img src="https://static.lightoj.com/images/problem-1446/ride-share-1613819543101.jpg?style=smallme,haveborder,rightme" class="d-block w-100" alt="2nd pic" height="480"/>
                    </div>
                    <div class="carousel-item">
                    <img src="https://startup.info/wp-content/uploads/2020/03/uber-e1586256549247.jpg" class="d-block w-100" alt="3rdpic" height="480"/>
                    </div>
                </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>


</div>

    )
}
export default Home;
