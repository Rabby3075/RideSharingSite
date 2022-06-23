
<head>
  <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">

<title>Bootstrap Dropdowns within Buttons</title>
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet">
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"></script>
 <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css">
 <link href="https://mdbootstrap.com/docs/standard/content-styles/icons/">

<style type="text/css">
	#btn:checked ~ .menu-btn{
  left: 100px;
}
a{
	color: white;
	text-decoration: none;
}
div.b{
	margin-right: 800px;
	margin-left: 500px;
	margin-top: 200px;
}
table.table{
	margin-top: 0%;
	margin-left: 60%;
	
}

col-lg-8{
	margin-top: 30%;
}

.cards{
  display: grid;
  width: 85%;
  padding: 20px 70px;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 50px;
  margin-left: 15%;


}
.card{
  background: linear-gradient(45deg, #47cebe,#ef4a82);
  display: flex;
  padding: 20px;
}
.m-4{
        background: :blue;
        border-radius: 10px;
        box-shadow: 5px 7px 10px rgba(0, 0, 1, 1);
        width: 200px;
        position: absolute;
        top: 0px;
        bottom: 0;
        border: solid;
        

      }

         .head a {
        color: White;
        margin-top: 5px;
  
        font-size: 30px;
       
        text-decoration: none;
        
      }

       img{
        height: 40px;
        margin-top: 0px;
        margin-left: 50%;
        border-radius: 20px;
      }
      span{
        color: White;
        font-size: 25px;
        text-transform: capitalize;
      }
      .btn-group{
        width: 100%;
       
      
       

      }
      div.btn{
        margin-left: 85%;
        display: block;

      }
      button{
        
        color: white;
      }
       .btn-group:hover span{
        background: rgba(0, 0, 0, 0.7);
        color: white;
       
        border-radius: 3px;
  
      }
      a.home{
        margin-left: 20%;
        font-size: 25px;
        text-decoration: none;
        color: white;
      }
    h1{
    margin-right: 15%;
    display: inline-block;
   }
   div.head h1{
    margin-left: 18%;
    color: red;
    
   }



</style>
</head>
<body style="background: black;">
   <div class="head"><h1 style="font-style: italic;">Dashboard</h1><a style="text-align: center;" href="{{route('updateAdminProfile')}}">Welcome, {{Session::get('user')}}
    </a></div>
 <div class="btn">
    <img src="img/{{Session::get('picture')}}" >
        <button type="button" class="btn btn-none dropdown-toggle" data-bs-toggle="dropdown" style="background:linear-gradient(45deg, #47cebe,#ef4a82);"><span></span></button>
        <div class="dropdown-menu">
            <a href="{{route('adminProfile')}}" class="dropdown-item">About Your Profile</a>
            <a href="{{route('updateAdminProfile')}}" class="dropdown-item"></i>Update Profile</a>
            <a href="#" class="dropdown-item">change password</a>
            <div class="dropdown-divider"></div>
            <a href="{{route('logout')}}" class="dropdown-item">Logout</a>
        </div>
    </div>
<div class="m-4" style="background: linear-gradient(45deg, #47cebe,#ef4a82);">

    <div class="btn-group">
      <a class="home" href="{{route('admindashboard')}}">Dashboard</a>
        
    </div>

    <br>
    <div class="btn-group">
        <button type="button" class="btn btn-none dropdown-toggle mt-2" data-bs-toggle="dropdown"><span>Add</span></button>
        <div class="dropdown-menu">
            <a href="{{route('addAdmin')}}" class="dropdown-item">Add admin</a>
            <a href="{{route('addCustomer')}}" class="dropdown-item">Add Custmer</a>
            <a href="#" class="dropdown-item">Add Rider</a>
            <div class="dropdown-divider"></div>
           
        </div>
    </div><br>
    <div class="btn-group">
        <button type="button" class="btn btn-none dropdown-toggle mt-2" data-bs-toggle="dropdown"><span>View</span></button>
        <div class="dropdown-menu">
            <a href="#" class="dropdown-item">Admin</a>
            <a href="#" class="dropdown-item">Customer</a>
            <a href="#" class="dropdown-item">Rider</a>
            <div class="dropdown-divider"></div>
            <a href="#" class="dropdown-item">Separated link</a>
        </div>
    </div><br>
    <div class="btn-group">
        <button type="button" class="btn btn-none dropdown-toggle mt-2" data-bs-toggle="dropdown" ><span>Home</span></button>
        <div class="dropdown-menu">
            <a href="#" class="dropdown-item">Action</a>
            <a href="#" class="dropdown-item">Another action</a>
            <div class="dropdown-divider"></div>
            <a href="#" class="dropdown-item">Separated link</a>
        </div>
    </div><br>
    <div class="btn-group">
        <button type="button" class="btn btn-none dropdown-toggle mt-2" data-bs-toggle="dropdown"><span>Home</span></button>
        <div class="dropdown-menu">
            <a href="#" class="dropdown-item">Action</a>
            <a href="#" class="dropdown-item">Another action</a>
            <div class="dropdown-divider"></div>
            <a href="#" class="dropdown-item">Separated link</a>
        </div>
    </div><br>
    <div class="btn-group">
        <button type="button" class="btn btn-none dropdown-toggle mt-2" data-bs-toggle="dropdown"><span>Home</span></button>
        <div class="dropdown-menu">
            <a href="#" class="dropdown-item">Action</a>
            <a href="#" class="dropdown-item">Another action</a>
            <div class="dropdown-divider"></div>
            <a href="#" class="dropdown-item">Separated link</a>
        </div>
    </div>
</div>














  <div class="cards">
    <div class="card pb-5" >
      <div class="card-content">
        
       <span><i class="bi bi-cash" style="font-size: 3rem;" ></i> Total earn</span>
        <div class="card-name">huraiya</div>
        
      </div>
    </div>
        <div class="card">
      <div class="card-content">
        <span><i class="bi bi-people-fill" style="font-size: 3rem;"></i>  Total user</span>
       <h2>huraiya</h2>
        <div class="card-name"></div>
        
      </div>
    </div>
        <div class="card">
      <div class="card-content">
        
        <span><i class='bi bi-bicycle' style="font-size: 3rem;"> </i>Total rider</span>
        <h2>huraiya</h2>

        <div class="card-name"></div>
        
      </div>
    </div>
        <div class="card">
      <div class="card-content">
        <div class="number">87</div>
        <div class="card-name">huraiya</div>
        
      </div>
    </div>
  </div>



<div  class="col col-lg-4 mt-4"> 
	<div class="container2">
	<table class="table table-hover table-dark" border="1">
    <tr style="color: #D2B48C; text-align: center;">
        <th>Name</th>
        <th>ID</th>
        <th  style="vertical-align: middle;">Action</th>
    </tr>

    <tr style="text-align: center;">
        <td>huraiya</td>
        <td>5</td>
        <td>
          <button type="button" class="btn btn-primary"><i class="bi bi-eye" ></i></button>
          <button type="button" class="btn btn-success"><i class="bi bi-check"></i></button>
          <button type="button" class="btn btn-danger"><i class="bi bi-trash"></i></button>
          </td>
    </tr>

</table>
</div>
</div>


    <div>
      <canvas id="pieChart" style="max-width: 500px;"></canvas>
    </div>


</body>

