<link rel="stylesheet" href="{{asset('css/customer/chat.css')}}">
@extends('customer.dashboard.dashboard')
@section('content')

<div class="container my-3">

<div class="header bg-light">

    <img class="rounded-circle mx-3" src="{{asset('/storage/image/')}}/{{$rider->image}}" alt="profile picture" width = 60 height = 60>
    <p>{{$rider->name}}</p>
</div>
  <div class="chat-body bg-light">

  </div>

  <div class="msg-input">
    <form class="form-group" action="" method="">
    <div class="input-group mb-3">

        <input type="text" class="form-control" name="name" id="name" value="{{old('name')}}" placeholder="Write your message in here...">
        <span class="input-group-text bg-primary"><i class="bi bi-send-fill text-white"></i></span>

    </div>
    </form>
  </div>

</div>
@endsection
