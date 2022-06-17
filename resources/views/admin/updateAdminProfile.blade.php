@extends('admin.layouts.app')
@section('content')
<head>
    <title>PUBLIC HOME</title>
    
    <style type="text/css">
        *{
            text-decoration: none;
        }

 

        .col-md-9{
            text-align: left;
        }
        form.form-group{
            padding-top: 3%;
            text-align: left;
            margin-left: 40%;
            margin-right: 25%;
            border-radius: 30px;
            margin-top: 0%;
            box-shadow: 5px 7px 10px rgba(0, 0, 0, .5);

            
        }
        .form-control{
            margin-left: 45px;
           box-shadow: 5px 7px 10px rgba(0, 0, 0, .5);

            
        }

        .id{
            margin-left: 45px;
        }
        .text-danger{
            margin-left: 45px;
        }
        .edit{
            color: red;
           
            font: bold;
            font-size: 25px;
        }

 
        }


        div.pro{
            
            margin-top: 40px;
            height: 80px;
            border-radius: 40px;
        }
        .id{
            color: black;
            font-size: 18px;
        }




        .p{
            margin-top: 10px;
        }




        

    </style>
</head>
<body>        

    <div class="container">

    <table class="table" width="30%"  align="center"  height="20%">

        <tr>
        <td colspan="2">
        <fieldset>
          

<form action="{{route('updateAdminProfile')}}" class="form-group" method="post" align="center">
    <!-- Cross Site Request Forgery-->
    {{csrf_field()}}
    <div>
     <img class="pro" src="image/index.png"><a class="edit" href="{{route('changePicture')}}">Edit</a>
 </div>
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
    <div class="p">
    <div class="d-grid col-12 mx-auto">
            <input type="submit" class="btn btn-primary" value="Update" >
    </div>
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