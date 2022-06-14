<?php

namespace App\Http\Controllers;

use App\Models\Admin;
use App\Http\Requests\StoreAdminRequest;
use App\Http\Requests\UpdateAdminRequest;
use Illuminate\Http\Request;

class AdminController extends Controller
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
     * @param  \App\Http\Requests\StoreAdminRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreAdminRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Admin  $admin
     * @return \Illuminate\Http\Response
     */
    public function show(Admin $admin)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Admin  $admin
     * @return \Illuminate\Http\Response
     */
    public function edit(Admin $admin)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateAdminRequest  $request
     * @param  \App\Models\Admin  $admin
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateAdminRequest $request, Admin $admin)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Admin  $admin
     * @return \Illuminate\Http\Response
     */
    public function destroy(Admin $admin)
    {
        //
    }


    public function adminlogin()
    {
        return view('admin.login');
    }

    public function loginSubmit(Request $request){
            $validate = $request->validate([        
            'email'=>'required',
            'password'=>'required',

        ],
        //['name.required'=>"Please put you name here"]
       // ['username.required'=>"Please put you username here"]

    );
        $admin = Admin::where('email',$request->email)
                            ->where('password',$request->password)
                            ->first();

        // return $teacher;
        if($admin){
            $request->session()->put('user',$admin->name);
            $request->session()->put('email',$admin->email);
            $request->session()->put('dob',$admin->dob);
            $request->session()->put('phone',$admin->phone);

            $request->session()->put('password',$admin->password);
            $request->session()->put('cpassword',$admin->cpassword);
          
            
            return redirect()->route('admindashboard');
            //echo session()->get('user');
        }
        else{
        $request->session()->flash('invalid','Invalid username and password');
       return back();
   }

       
    }
    public function dashboard(){
        return view('admin.adminDashboard');
    }
    public function updateAdminProfile(){
        return view('admin.updateAdminProfile');
    }

            
        public function updateSubmitted(Request $request){
        $student = Admin::where('email', $request->email)->first();
        // return  $student;
        $student->email = $request->email;
        $student->name = $request->name;
        $student->phone = $request->phone;
        $student->password = $request->password;
        $student->cpassword = $request->cpassword;
        $student->save();
        $request->session()->put('user',$admin->name);
        $request->session()->put('email',$admin->email);
        $request->session()->put('dob',$admin->dob);
        $request->session()->put('phone',$admin->phone);

        $request->session()->put('password',$admin->password);
        $request->session()->put('cpassword',$admin->cpassword);
        return redirect()->route('dashboard');

    }
}
