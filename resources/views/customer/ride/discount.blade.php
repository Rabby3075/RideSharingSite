@extends('customer.dashboard.dashboard')
@section('content')


<div class="container mt-3">
  <h2 class="d-flex justify-content-center"><u>Discount Claim</u></h2>
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





 <div class="table-responsive custom-table-responsive">


  <table class="table my-3 bg-light" style="text-align: center" id="myTable">
    <thead>
      <tr>
        <th>ID</th>
        <th>Point</th>
        <th>Amount</th>
        <th>Action</th>

      </tr>
    </thead>
    <tbody>
    @foreach($discount as $discounts)


     <tr>

        <td>{{$discounts->id}}</td>


        <td>{{$discounts->point}}</td>


        <td>{{$discounts->amount}}</td>

        @if($user->rating >= $discounts->point)
        <td><a href="/customerDashboard/discountclaim/{{$discounts->id}}" class="btn btn-outline-primary"> <i class="bi bi-coin"></i> Claim</a></td>
        @else
        <td><button class="btn btn-outline-primary" disabled> <i class="bi bi-coin"></i> Claim</a></td>
        @endif

    </tr>
    @endforeach
    </tbody>
  </table>
  </div>

</div>








@endsection

