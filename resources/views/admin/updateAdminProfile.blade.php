@extends('admin.layouts.app')
@section('content')
<head>
    <title>PUBLIC HOME</title>
    
    <style type="text/css">
        *{
            text-decoration: none;
        }

        .box{
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background:white;
            text-align: center;
            border-radius: 10px;
           
        }

        .col-md-7{
            text-align: left;
        }
        .form-group{
            padding-top: 0%;
            text-align: left;
            margin-left: 20px;
            margin: 1%;
            background-color: black;
            border-radius: 30px;

            
        }
        .form-control{
            margin-left: 45px;
            box-shadow: 0px 3px red;

            
        }

        .id{
            margin-left: 45px;
        }
        .text-danger{
            margin-left: 45px;
        }
        a{
            color: white;
            text-decoration: none;
        }
        #btn:checked ~ .menu-btn{
        left: 100px;
        }
        .button{
            display: inline-block;
            margin-left: 60px;
            
        }
        .btn{
            width: 120px;
            align-items: center;
            margin-left: 20px;
            margin-bottom: 20px;
            margin-top: 10px;
        }
        img{
            margin-left: 30px;
        }
        .profile{
            margin-left: 40%;
            margin-top: 30px;
            height: 70px;
            border-radius: 40px;
        }
        .id{
            color: white;
        }






        

    </style>
</head>
<body>
    <div class="check">
    
    <table class="box" width="30%"  align="center"  height="20%">

        <tr>
        <td colspan="2">
        <fieldset>
           

<form action="{{route('updateAdminProfile')}}" class="form-group" method="post" align="center">
    <!-- Cross Site Request Forgery-->
    {{csrf_field()}}
     <img class="profile" src="image/index.png">
 <div class="col-md-9 form-group">
        <span class="id">Name</span>
        <input type="text" name="name" value="{{Session::get('user')}}" class="form-control">
        @error('name')
            <span class="text-danger">{{$message}}</span>
        @enderror
    </div>



    <div class="col-md-9 form-group">
        <span class="id">Date of Birth</span>
        <input type="date" name="dob" value="{{Session::get('dob')}}"class="form-control">
    </div>


    <div class="col-md-9 form-group">
        <span class="id">Email</span>
        <input type="text" name="email" value="{{Session::get('email')}}" class="form-control">
        @error('email')
            <span class="text-danger">{{$message}}</span>
        @enderror
    </div>

    <div class="col-md-9 form-group">
        <span class="id">Phone</span>
        <input type="text" name="phone" value="{{Session::get('phone')}}" class="form-control">
        @error('phone')
            <span class="text-danger">{{$message}}</span>
        @enderror
    </div>
        <div class="col-md-9 form-group">
        <span class="id">Password</span>
        <input type="password" name="password" value="{{Session::get('password')}}" class="form-control">
        @error('password')
            <span class="text-danger">{{$message}}</span>
        @enderror
    </div>
        <div class="col-md-9 form-group">
        <span class="id">Confirm Password</span>
        <input type="password" name="cpassword" value="{{Session::get('cpassword')}}" class="form-control">
       @error('cpassword')
            <span class="text-danger">{{$message}}</span>
        @enderror
    </div >
    <div class="button">
<input type="submit" class="btn btn-success"  value="Update"> 
<input type="submit" class="btn btn-success"  value="Upload"> 
    </div>
      

</form>
</fieldset>
</td>
</tr>
</table>
</div>
    
</body>
</html>
@endsection