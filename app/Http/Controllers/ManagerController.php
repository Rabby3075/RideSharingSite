<?php

namespace App\Http\Controllers;

use App\Models\Manager;
use App\Http\Requests\StoreManagerRequest;
use App\Http\Requests\UpdateManagerRequest;
use Illuminate\Http\Request;


class ManagerController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\StoreManagerRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreManagerRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Manager  $manager
     * @return \Illuminate\Http\Response
     */
    public function show(Manager $manager)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Manager  $manager
     * @return \Illuminate\Http\Response
     */
    public function edit(Manager $manager)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateManagerRequest  $request
     * @param  \App\Models\Manager  $manager
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateManagerRequest $request, Manager $manager)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Manager  $manager
     * @return \Illuminate\Http\Response
     */
    public function destroy(Manager $manager)
    {
        //
    }

    public function managerRegistration(){
        return view('manager.registration');
    }
    public function managerRegistrationSubmitted(Request $request){
        $validate = $request->validate([
            "name"=>"required|max:20|string",
            'username'=>'required|min:7',
            'dob'=>'required|date',
            'email'=>'required|email|string',
            'phone'=>'required|min:11|max:11|regex:/^([0-9\s\-\+\(\)]*)$/',
            'password'=>'required|min:8',
            'confirmPassword'=>'required|min:8',


        ],
        ['name.required'=>"Please put you name here",
         'string'=>"Values must be string"
        ]
    );
    $status = "pending";
    $pass=$request->password;
    $cpass=$request->cpassword;

    if ($cpass == $pass)  
    {

    $userCheck = Manager::where('username',$request->username)->first();
    if($userCheck){

        return redirect()->back()->with('failed', 'Username already exist');
    }
    else{
      $image = $request->image;
      $nameImage = $image->getClientOriginalName();


        $manager = new Manager();
        $manager->name= $request->name;
        $manager->username= $request->username;
        $manager->dob= $request->dob;
        $manager->email= $request->email;
        $manager->phone= $request->phone;
        $manager->password = $request->password;
        $manager->confirmPassword = $request->confirmPassword;
        $manager->picture = $request->nameImage;
        //$manager->save();
       // return redirect()->route('manager.login');

        $result = $manager->save();
          if($result){
              $image->storeAs('public/images',$nameImage);
              return redirect()->route('managerLogin');
          }
          else{
              return redirect()->back()->with('failed', 'Registration Failed');
          }
    }


    }
   
    }
public function managerLogin(){
        return view('manager.login');
    }



 public function managerLoginSubmitted(Request $request){
        $validate = $request->validate([
            'username'=>'required|min:7',
            'password'=>'required|min:8'

        ],
    );
         
    $manager = Manager::where('username',$request->username)
    ->where('password',$request->password)
    ->first();
/*
if($manager){
$request->session()->put('user',$manager->username);
return redirect()->route('customerDash');
}
 else{
    return redirect()->route('failedLogin');
 }

*/

    }




    


}
