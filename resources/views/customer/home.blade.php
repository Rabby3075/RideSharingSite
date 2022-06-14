@extends('customer.dashboard.dashboard')
@section('content')

<h1 class="text-center mt-2 text-uppercase text-dark">Welcome, {{Session::get('name')}}</h1>

<div id="carouselExampleFade" class="carousel slide carousel-fade mt-3" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="http://unb.com.bd/filemanager/photos/64/uber.jpg" class="d-block w-100" alt="1st pic" width="480" height="480">
    </div>

    <div class="carousel-item">
      <img src="https://static.lightoj.com/images/problem-1446/ride-share-1613819543101.jpg?style=smallme,haveborder,rightme" class="d-block w-100" alt="..." width="480" height="480">
    </div>
    <div class="carousel-item">
      <img src="https://startup.info/wp-content/uploads/2020/03/uber-e1586256549247.jpg" class="d-block w-100" alt="..." width="480" height="480">
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
<h1 class="text-center mt-2 text-uppercase text-dark">How To request a rider</h1>

@endsection
