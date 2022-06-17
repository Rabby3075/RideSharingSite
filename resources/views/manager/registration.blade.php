<!DOCTYPE html>
<html lang="en">
<head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>
      <link href="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css">
<script src="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js"></script>
<script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<link rel="stylesheet" href="{{asset('ManagerCSS/registration.css')}}">

</head>
    
<div class="container register " >
                <div class="row ">
                    <div class="col-md-3 register-left">
                        <img src="https://image.ibb.co/n7oTvU/logo_white.png" alt=""/>
                        <h3>Welcome</h3>
                        <p>Manager and Employee Registration</p>
                        <input type="submit" name="" value="Login"/><br/>
                    </div>
                    <div class="col-md-9 register-right">
                       
                        <div class="tab-content" id="myTabContent">
                            <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                <h3 class="register-heading">Registration</h3>
                                <div class="row register-form">
                                    <div class="col-md-6">


                                        <div class="form-group">
                                         <input type="text" name="name" placeholder="Full Name *" value="{{old('name')}}" class="form-control">
                                           @error('name')
                                        <span class="text-danger">{{$message}}</span>
                                          @enderror
                                        </div>
                                        <div class="form-group">
                                            <input type="text" name="username" class="form-control" placeholder="Username *" value="{{old('username')}}" />
                                            @error('username')
                                        <span class="text-danger">{{$message}}</span>
                                          @enderror
                                        </div>
                                        <div class="form-group">
                                            <input type="date" name="dob" class="form-control" placeholder="Date of Birth *" value="{{old('dob')}}" />
                                            @error('dob')
                                        <span class="text-danger">{{$message}}</span>
                                          @enderror
                                        </div>
                                        <div class="form-group">
                                            <input type="email" name="email" class="form-control" placeholder="Email *" value="{{old('email')}}" />
                                            @error('email')
                                        <span class="text-danger">{{$message}}</span>
                                          @enderror
                                        </div>
                                        <div class="form-group">
                                            <input type="text" name="phone" class="form-control" placeholder="Phone *" value="{{old('phone')}}" />
                                            @error('phone')
                                        <span class="text-danger">{{$message}}</span>
                                          @enderror
                                        </div>
                                
                                    </div>

                                    
                                    <div class="col-md-6">
                                    <div class="form-group">
                                            <input type="password" name="password" class="form-control" placeholder="Password *" value="{{old('password')}}" />
                                            @error('password')
                                        <span class="text-danger">{{$message}}</span>
                                          @enderror
                                        </div>
                                    <div class="form-group">
                                            <input type="password" name="password" class="form-control" placeholder="Confirm Password *" value="{{old('password')}}" />
                                            @error('password')
                                        <span class="text-danger">{{$message}}</span>
                                          @enderror
                                        </div>


                                        <div class="form-group">
                                            <select class="form-control">
                                                <option class="hidden"  selected disabled>Enter your Status as Employee</option>
                                                <option>Valid</option>
                                                <option>Invalid</option>
                                            </select>
                                        </div>
                                        <div class="form-group ">
                                        <span>Upload Picture</span>
                                        <input class="mt-3" type="file" name="image" value="{{old('image')}}" placeholder="Upload Picture">
                                        @error('image')
                                        <span class="text-danger">{{$message}}</span>
                                          @enderror
                                        </div>
                                        <input type="submit" class="btnRegister"  value="Register"/>
                                    </div>
                                </div>
                            </div>
  
                        </div>
                    </div>
                </div>

            </div>
</body>
</html>