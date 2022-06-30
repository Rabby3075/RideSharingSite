<!DOCTYPE html>
<html lang="en">
<head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Update password</title>

      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" crossorigin="anonymous">
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js" integrity="sha384-pprn3073KE6tl6bjs2QrFaJGz5/SUsLqktiwsUTF55Jfv3qYSDhgCecCxMW52nD2" crossorigin="anonymous"></script>


</head>
  
<body>        

@if(session('failed'))
<div class = "alert alert-danger alert-dismissible fade show" role="alert">
<strong>{{session('failed')}}</strong>
<button type="button" class="close" data-dismiss="alert" aria-label="Close">
<span aria-hidden="true">&times;</span>
</button>

</div>
@endif



    <div class="container">
    <h1>Change Password</h1>

<form action="{{route('passwordUpdate')}}" class="form-group" method="post">
    {{csrf_field()}}
    <div class="col-md-9 form-group">
        <span class="id">Current Password</span>
        <input type="password" name="oldPassword"  class="form-control" placeholder="Current password" id="current_password">
        @error('oldPassword')
            <span class="text-danger">{{$message}}</span>
        @enderror
    </div>
    <div class="col-md-9 form-group">
        <span class="id">New Password</span>
        <input type="password" name="newPassword"  class="form-control" placeholder="New password" id="newPassword">
        @error('newPassword')
            <span class="text-danger">{{$message}}</span>
        @enderror
    </div>
        <div class="col-md-9 form-group">
        <span class="id">Confirm Password</span>
        <input type="password" name="password_confirmation"  class="form-control" id="password_confirmation" placeholder="Confirm password">
       @error('password_confirmation')
            <span class="text-danger">{{$message}}</span>
        @enderror
    </div>

   
    <div class="mt-3 mx-auto">
            <input type="submit" class="btn btn-success" value="Change" >
    </div>
</div>

</form>


</div>

    
</body>
</html>
