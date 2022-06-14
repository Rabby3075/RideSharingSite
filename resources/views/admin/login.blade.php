<head>
    <title>PUBLIC HOME</title>
     <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css">
    <style type="text/css">
            body {
            background:#E5CCFF;
            margin:0;
            padding:0;
            font-family: sens-serif;
            
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
            
        }
        .form-control{
            margin-left: 45px;
            
        }
        .btn{
            margin-top: 6px;
            align-items: center;
            margin-left: 40%;
            width: 90px;
        }
            nav.link a.b,nav a:hover{
            color: red;
            border-style:outset ;
            transition: .8px;


        }
        .id{
            margin-left: 45px;
        }
        .text-danger{
            margin-left: 45px;
        }

        h1{
            text-align: center;

        }

        

    </style>
</head>
<body>

    <div class="check">
    
    <table class="box" width="25%"  align="center"  height="30%">

        <tr>
        <td colspan="2">
        <fieldset>
            <h1 class="badge rounded-pill bg-danger">{{Session::get('invalid')}}</h1>
            <legend>Login</legend>

<form action="{{route('adminlogin')}}" class="form-group" method="post" align="center">
    <!-- Cross Site Request Forgery-->
    {{csrf_field()}}

    <div class="col-md-9 form-group">
        <span class="id">Email</span>
        <input type="text" name="email" value="{{old('email')}}" class="form-control">
        @error('email')
            <span class="text-danger">{{$message}}</span>
        @enderror
    </div>



        <div class="col-md-9 form-group">
        <span class="id">Password</span>
        <input type="password" name="password" value="{{old('password')}}" class="form-control">
        @error('password')
            <span class="text-danger">{{$message}}</span>
        @enderror
    </div>

  
    <div>
    <input type="submit" class="btn btn-success"  value="login"> 
    </div>
      

</form>
</fieldset>
</td>
</tr>
</table>
</div>
    
</body>
</html>