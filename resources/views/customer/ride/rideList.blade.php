@extends('customer.dashboard.dashboard')
@section('content')

<div class="container mt-3">
  <h2 class="d-flex justify-content-center"><u>Your Ride History</u></h2>
  @if ($errors->any())
        <div class="alert alert-danger alert-dismissible">
            <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
                <ul>
                @foreach ($errors->all() as $error)
                    <li>{{ $error }}</li>
                @endforeach
                    </ul>
        </div>
     @endif
     @if (\Session::has('failed'))
                         <div class="alert alert-danger alert-dismissible">
                        <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
                        {!! \Session::get('failed') !!}
                        </div>
                        @endif

                        @if (\Session::has('success'))
                         <div class="alert alert-success alert-dismissible">
                        <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
                        {!! \Session::get('success') !!}
                        </div>
                        @endif
  <table class="table my-3" style="text-align: center" id="myTable">
    <thead>
      <tr>
        <th>Ride ID</th>
        <th>Rider Name</th>
        <th>Rider Phone Number</th>
        <th>Pickup Point</th>
        <th>Destination</th>
        <th>Total Distance</th>
        <th>Bill</th>
        <th>Status</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
    @foreach($rideList as $ride)


     <tr>

        <td>{{$ride->id}}</td>

        @if(empty($ride->riderName))
        <td>---</td>
        @else
        <td>{{$ride->riderName}}</td>
        @endif
        @if(empty($ride->riderName))
        <td>---</td>
        @else
        <td>{{$ride->riderPhone}}</td>
        @endif
        <td>{{$ride->pickupPoint}}</td>
        <td>{{$ride->destination}}</td>
        <td>{{$ride->length}} kilo</td>
        <td>{{$ride->cost}} BDT</td>
        @if($ride->customerStatus === "Waiting for rider...")
        <td ><span class="badge bg-warning text-dark me-2 cancel-btn">Wait for rider</span></td>

        @endif
        @if($ride->customerStatus === "Ride complete")
        <td ><span class="badge bg-success">{{$ride->customerStatus}}</span></td>
        @endif
        @if($ride->customerStatus === "Cancel")
        <td ><span class="badge bg-danger">Ride Cancel</span></td>
        @endif
        @if($ride->customerStatus === "Approve")
        <td ><span class="badge bg-info text-dark">Rider Approve</span> <a href="#" class = "btn btn-info"><i class="bi bi-chat-dots me-1 text-dark"></i>Chat</a></td>

        @endif

        @if($ride->customerStatus === "Waiting for rider..." )
        <td><a class="btn btn-danger text-white" id="cancel-ride" href="javascript:void(0)" data-url="{{ route('rideCancel', $ride->id) }}"><i class="bi bi-x-circle-fill"></i> Cancel Ride</a></td>
        @endif
        @if($ride->customerStatus === "Ride complete")
        <td><button type="button" class="btn btn-primary"><i class="bi bi-eye me-2 text-white"></i>View Details</button></td>
        @endif
        @if($ride->customerStatus === "Cancel")
        <td> <p class="text-danger"> Ride Cancel at <strong>{{$ride->cancelTime}}</strong></p></td>
        @endif
        @if($ride->customerStatus === "Approve")
        <td><button type="button" class="btn btn-primary"><i class="bi bi-eye me-2 text-white"></i>View Details</button></td>
        @endif
    </tr>
    @endforeach
    </tbody>
  </table>
</div>




<!-- Cancel Modal -->
<div class="modal fade" id="cancelModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title text-danger">Ride Cancel</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <form action="{{route('rideCancelSubmit')}}" class="form-group" method="post" enctype="multipart/form-data">
        {{csrf_field()}}
            <input type="hidden" id="ride-id" name="rideid">
        <span class="text-dark">Are you sure to cancel your ride From </span><span class="text-dark" id="ride-pick"></span><span class="text-dark"> To </span><span class="text-dark" id="ride-destination"></span>

      </div>
      <div class="modal-footer">
      <input type="submit" class="btn btn-danger" id="yes" value="Yes">
        <button type="button" class="btn btn-primary" data-bs-dismiss="modal" >No</button>

        </form>
      </div>
    </div>
  </div>
</div>

<!-- Details Modal -->
<div class="modal fade" id="detailsModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title text-danger">Ride Cancel</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <form action="{{route('rideCancelSubmit')}}" class="form-group" method="post" enctype="multipart/form-data">
        {{csrf_field()}}
            <input type="hidden" id="ride-id" name="rideid">
        <span class="text-dark">Are you sure to cancel your ride From </span><span class="text-dark" id="ride-pick"></span><span class="text-dark"> To </span><span class="text-dark" id="ride-destination"></span>

      </div>
      <div class="modal-footer">
      <input type="submit" class="btn btn-danger" id="yes" value="Yes">
        <button type="button" class="btn btn-primary" data-bs-dismiss="modal" >No</button>

        </form>
      </div>
    </div>
  </div>
</div>

</div>
<script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>



<script type="text/javascript">

    $(document).ready(function () {

        $('body').on('click', '#cancel-ride', function () {
          var userURL = $(this).data('url');
          $.get(userURL, function (data) {
              $('#cancelModal').modal('show');
              $('#ride-id').val(data.id);
              $('#ride-pick').text(data.pickupPoint);
              $('#ride-destination').text(data.destination);

          })
       });



    });

    $(document).ready( function () {
    $('#myTable').DataTable();
} );

</script>
@endsection

