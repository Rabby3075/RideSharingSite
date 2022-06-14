@extends('customer.dashboard.dashboard')
@section('content')
<link rel="stylesheet" href="{{asset('css/customer/updateProfile.css')}}">
<div class="container rounded bg-light shadow mt-5 mb-5">
    <div class="row">
        <div class="col-md-3 border-right">
     <div class="d-flex flex-column align-items-center text-center p-3 py-5">
        <img class="rounded-circle mt-5" width="150px" src="{{asset('/storage/images/')}}/{{Session::get('image')}}">
        <span class="font-weight-bold"> ID: {{Session::get('id')}}</span>
        <span class="text-black-50"> Rating: {{Session::get('rating')}} star</span>
        
        <span> </span>
    </div>
        </div>
        <div class="col-md-5 border-right">
            <form action="" method="post">
            <div class="p-3 py-5">
                <div class="d-flex justify-content-between align-items-center mb-3">
                    <h4 class="text-right">Profile</h4>
                </div>
                <div class="row">
                    <div class="col-md-12">
                        <label class="labels">Name</label>
                        <input type="text" class="form-control" placeholder="Full Name" value="{{Session::get('name')}}">

                </div>
                <div class="row">
                    <div class="col-md-12">
                        <label class="labels">Date of Birth</label>
                        <input type="date" class="form-control" value="{{Session::get('dob')}}">
                    </div>
                    <div class="col-md-12">
                        <label class="labels">Phone number</label>
                        <input type="tel" class="form-control" placeholder="enter 11 digit number" value="{{Session::get('phone')}}">
                    </div>
                    <div class="col-md-12">
                        <label class="labels">Email</label>
                        <input type="email" class="form-control" placeholder="enter address line 2" value="{{Session::get('email')}}">
                    </div>

                </div>
                <div class="mt-5 text-center">
                    <input class="btn btn-outline-success" type="submit" value = "Update Profile"></input>
                </div>
            </div>
            </form>
        </div>

    </div>
</div>
</div>
</div>
@endsection
