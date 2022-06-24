@extends('customer.dashboard.dashboard')
@section('content')

<link rel="stylesheet" href="{{asset('css/customer/ride.css')}}">
<script src="{{asset('js/customer/ride.js')}}"></script>
<div class="container-fluid">
    <!-- map setting -->
    <div id="map-container-google-3" class="z-depth-1-half map-container-3">
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d467336.5485682298!2d90.41932600000001!3d23.780636!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b087026b81%3A0x8fa563bbdd5904c2!2sDhaka!5e0!3m2!1sen!2sbd!4v1655535972265!5m2!1sen!2sbd" width=100% height="500" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
    <!-- Form -->

    <div class="rounded d-flex justify-content-center">
            <div class="col-md-5 col-sm-6 shadow-lg bg-white my-4">
                <div class="text-center col-sm-12 mt-2">
                    <h3>Request for a ride</h3>
                </div>
        <form action="" class="form-group" method="post" enctype="multipart/form-data">
                {{csrf_field()}}
            <div class="p-4">


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

                        <div class="input-group mb-3">
                            <span class="input-group-text bg-success"><i
                                class="bi bi-pin-map-fill text-white"></i>
                            </span>
                            <input class="form-control" list="datalistOptions" id="exampleDataList" placeholder="Choose Pickup point">
                            <datalist id="datalistOptions">
                            @foreach($locations as $location)
                                <option value="{{$location->location}}">
                                @endforeach
                            </datalist>

                        </div>

                        <div class="input-group mb-3">
                            <span class="input-group-text bg-success"><i
                                class="bi bi-geo-alt-fill text-white"></i>

                            </span>
                            <input class="form-control" list="datalistOptions" id="exampleDataList" placeholder="Choose Destination point">
                            <datalist id="datalistOptions">
                            @foreach($locations as $location)
                                <option value="{{$location->location}}">
                                @endforeach
                            </datalist>
                        </div>
                        <div class="mt-2 text-center">
                            <input class="btn btn-outline-success" type="submit" value = "Confirm Request">
                        </div>

                </div>
        </form>
            </div>
    </div>


</div>
@endsection
