@extends('customer.dashboard.dashboard')
@section('content')
<div class="container mt-3">
  <h2><u>Your Ride History</u></h2>

  <table class="table">
    <thead>
      <tr>
        <th>Ride ID</th>
        <th>Rider Name</th>
        <th>Rider Phone Number</th>
        <th>Pickup Point</th>
        <th>Destination</th>
        <th>Total Distance</th>
        <th>Bill</th>
        <th>Ride Status</th>
      </tr>
    </thead>
    <tbody>
    @foreach($rideList as $ride)
     <tr>
        <td>{{$ride->id}}</td>
        <td>{{$ride->riderName}}</td>
        <td>{{$ride->riderPhone}}</td>
        <td>{{$ride->pickupPoint}}</td>
        <td>{{$ride->destination}}</td>
        <td>{{$ride->length}}</td>
        <td>{{$ride->cost}}</td>
        @if($ride->customerStatus === "Waiting for rider...")
        <td ><span class="badge bg-warning text-dark me-2">Wait for rider</span><a href=""><button type="button" class="btn btn-danger"><i class="bi bi-x-circle-fill"></i></button></a></td>

        @endif
        @if($ride->customerStatus === "Ride complete")
        <td ><span class="badge bg-success">{{$ride->customerStatus}}</span></td>
        @endif
        @if($ride->customerStatus === "cancel")
        <td ><span class="badge bg-danger">{{$ride->customerStatus}}</span></td>
        @endif
    </tr>
    @endforeach
    </tbody>
  </table>
</div>
@endsection
