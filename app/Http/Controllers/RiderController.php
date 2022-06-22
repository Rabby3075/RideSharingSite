<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Rider;

class RiderController extends Controller
{
    public function riderLoginSubmit(Request $request){
        $validate = $request->validate([
            'username'=>'required|min:8|max:15',
            'password'=>'required|min:8|max:15|regex:/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{5,20}$/'
        ]
    );
    $loginCheck = Rider::where('username',$request->username)->where( 'password',md5($request->password))->first();

    if($loginCheck){
        $request->session()->put('id',$loginCheck->id);
        $request->session()->put('name',$loginCheck->name);
        $request->session()->put('gender',$loginCheck->gender);
        $request->session()->put('phone',$loginCheck->phone);
        $request->session()->put('email',$loginCheck->email);
        $request->session()->put('username',$loginCheck->username);
        $request->session()->put('password',$loginCheck->password);
        $request->session()->put('image',$loginCheck->image);
        return  redirect()->route('riderRegistration');
    }
    else{
        return redirect()->back()->with('failed', 'Invalid username or password');
    }
    }

    public function riderCreateSubmit(Request $request){

        $validate = $request->validate([
              "fname"=>'required|max:20',
              "gender"=>"required",
              'dob'=>'required|date',
              "peraddress"=>"required",
              "preaddress"=>"required",
              'phone'=>'required|regex:/^([0-9\s\-\+\(\)]*)$/|digits:11',
              'email'=>'required|email',
              'nid'=>'required|numeric|digits:10',
              'dlic'=>'required|numeric|digits:10',
              'username'=>'required|min:5',
              'password'=>'required|min:8|max:15|regex:/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{5,20}$/',
              
          ],
          ['password.regex'=>"Please use atleast 1 uppercase, 1 lowercase, 1 special charactee, 1 number",
          'phone.regex'=>"Please use number or valid phone format",
          'nid.digits'=>"Please input your accurate 10 digit NID number",
          'dlic.digits'=>"Please input your accurate 10 digit Driving license number",
          'nid.required'=>"The NID NO. field is required.",
          'dlic.required'=>"The DRIVING LICENSE field is required."]
      );
      $status = "pending";
      $balance = 0;
      $rpoint = 0;
      $pass=$request->password;
      $cpass=$request->cpassword;

      if ($cpass == $pass)  
      {
  
      $userCheck = Rider::where('username',$request->username)->first();
      if($userCheck){
  
          return redirect()->back()->with('failed', 'Username already exist');
      }
      else{
        $image = $request->image;
        $nameImage = $image->getClientOriginalName();
  
        $rider = new Rider();
          $rider->name = $request->fname;
          $rider->gender = $request->gender;
          $rider->dob = $request->dob;
          $rider->peraddress = $request->peraddress;
          $rider->preaddress = $request->preaddress;
          $rider->phone = $request->digit.$request->phone;
          $rider->email = $request->email;
          $rider->nid = $request->nid;
          $rider->dlic = $request->dlic;
          $rider->status = $status;
          $rider->rpoint = $rpoint;
          $rider->balance = $balance;
          $rider->username = $request->username;
          $rider->password = md5($request->password);
          $rider->image = $nameImage;
          $result = $rider->save();
          if($result){
              $image->storeAs('public/images',$nameImage);
              return redirect()->route('riderLogin');
          }
          else{
              return redirect()->back()->with('failed', 'Registration Failed');
          }
      }
  
      }
      else{
        return redirect()->back()->with('failed', 'Confirm Password doesnt match with password');
    }
    }
}
