<?php

namespace App\Http\Controllers;

use App\Models\Admin;
use App\Models\Customer;
use App\Models\Rider;
use App\Models\User;
use App\Http\Requests\StoreAdminRequest;
use App\Http\Requests\UpdateAdminRequest;
use Illuminate\Http\Request;
use DB;
use Auth;
use Illuminate\Support\Facades\Hash;

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
            $request->session()->put('id',$admin->id);
            $request->session()->put('user',$admin->name);
            $request->session()->put('email',$admin->email);
            $request->session()->put('dob',$admin->dob);
            $request->session()->put('phone',$admin->phone);
            $request->session()->put('password',$admin->password);
            $request->session()->put('cpassword',$admin->cpassword);
            $request->session()->put('picture',$admin->picture);
          
            
            return redirect()->route('admindashboard');
            //echo session()->get('id');
            //echo session()->get('user');
        }
        else{
        $request->session()->flash('invalid','Invalid username and password');
       return back();
   }
}

    public function logout(){
        session()->forget('user');
        session()->forget('email');
        session()->forget('dob');
        session()->forget('phone');

        return redirect()->route('adminlogin');
    }

       
    
    public function admindashboard(){
        return view('admin.adminDashboard');

       $customer = DB::table('customers')->count();
        $rider = DB::table('riders')->count();
        return view('admin.adminDashboard',compact('customer','rider'));

    }
    public function adminProfile(){
        return view('admin.adminProfile');
    }
    public function updateAdminProfile(){
        return view('admin.updateAdminProfile');
    }

            
    public function updateSubmitted(Request $request){
        $admin = Admin::where('email', $request->email)->first();
        // return  $student;
        $admin->email = $request->email;
        $admin->name = $request->name;
        $admin->phone = $request->phone;
        $admin->dob = $request->dob;
        $admin->password = $request->password;
        $admin->cpassword = $request->cpassword;
        $admin->save();
        $request->session()->put('user',$admin->name);
        $request->session()->put('email',$admin->email);
        $request->session()->put('dob',$admin->dob);
        $request->session()->put('phone',$admin->phone);
        $request->session()->put('password',$admin->password);
        $request->session()->put('cpassword',$admin->cpassword);
        return redirect()->route('admindashboard');

    }
    public function changePicture(){
        return view('admin.changePicture');
    }
    public function changePictureSubmit(Request $request){
        $file_name = $request->file('picture')->getClientOriginalName();
        //$f_name = $file_name.'.'.$req->file('pro_pic')->getClientOriginalExtension();
        $folder = $request->file('picture')->move(public_path('img').'/',$file_name);
        
        $value = session()->get('id');
        $admin = Admin::where('id', $value)
        ->first();
        $admin->picture = $file_name;
        $admin->save();
        $request->session()->put('picture', $file_name);




        //$request->session()->flash('change_picture', 'Profile picture uploaded successfully');

        return redirect()->route('changePicture');

    }

    /////////////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////
    ////////////////ADD ADMIN///////////////////////////////////////////
    public function addAdmin(){
        return view('admin.addAdmin');
    }
    public function Adminadd(Request $request){
         $admin = Admin::where('email',$request->email)
                            ->first();

            if($admin){
                $request->session()->flash('reg', 'This account already exists');
                return redirect()->route('addAdmin');
            }
            else{
                    $admin = new  Admin();
                    $admin->email = $request->email;
                    $admin->name = $request->name;
                    $admin->phone = $request->phone;
                    $admin->dob = $request->dob;
                    $admin->password = $request->password;
                    $admin->cpassword = $request->cpassword;
                    $admin->picture = 'user.jpg';
                    $admin->save();
                    return redirect()->route('adminTable');
            }
    }


    public function addCustomer(){
        return view('admin.add.addCustomer');
    }
        public function customerAdd(Request $request){
         $customer = Customer::where('email',$request->email)
                            ->first();

            if($customer){
                $request->session()->flash('cus', 'This account already exists');
                return redirect()->route('addCustomer');
            }
            else{
                    $customer = new  Customer();
                    $customer->email = $request->email;
                    $customer->name = $request->name;
                    $customer->phone = $request->phone;
                    $customer->dob = $request->dob;
                    $customer->address = $request->address;
                    $customer->username= $request->username;
                    $customer->password = md5($request->password);
                    $customer->rating='0';
                    $customer->image = 'index.png';
                    $customer->save();
            }
    }
    //////////////////////END////////////////////////////////////

    /////////////////VIEW_Page////////////////////////////////////////

    //public function adminTable(){
        //return view('admin.view.adminTable');
   // }
    public function adminTable(){
        $admins = Admin::paginate(1);
        return view('admin.view.adminTable')->with('admins', $admins);
    }

    public function adminDelete(Request $request){
        $admin = Admin::where('id', $request->id)->first();
        $admin->delete();

    return redirect()->route('adminTable');
    }
    public function viewAdmin(Request $request){
        $admins = Admin::where('id', $request->id)->first();
        //return $admin;
        return view('admin.view.viewAdmin')->with('admins', $admins);
        
    
      }
    public function adminUpdate(Request $request){
       $admins = Admin::where('id', $request->id)->first();
       return view('admin.view.adminUpdate')->with('admins', $admins); 
    }
    public function adminUpdateSubmitted(Request $request){
        $admins = Admin::where('id', $request->id)->first();
        $admins->email = $request->email;
        $admins->name = $request->name;
        $admins->phone = $request->phone;
        $admins->dob = $request->dob;
        $admins->save();
       return view('admin.view.viewadmin')->with('admins', $admins); 
    }

    public function search_btn(Request $request){
        $admins = Admin::where('name',$request->search)->get();
        //return $admins;
        return view('admin.view.adminTable')->with('admins', $admins);
    }
    ////////////////////CustomerView////////////////////

    public function customerTable(){
        $customers = Customer::paginate(2);
        return view('admin.view.customerTable')->with('customers', $customers);
    }
    public function viewCustomer(Request $request){
        $customers = Customer::where('id', $request->id)->first();
        //return $admin;
        return view('admin.view.viewCustomer')->with('customers', $customers);
      }
    public function customerDelete(Request $request){
        $customer = Customer::where('id', $request->id)->first();
        $customer->delete();

    return redirect()->route('customerTable');
    }

    public function customerUpdate(Request $request){
        $customer = Customer::where('id', $request->id)->first();
        return view('admin.view.customerUpdate')->with('customer',$customer);
    }
    public function customerUpdateSubmitted(Request $request){
        $customer = Customer::where('id', $request->id)->first();
        $customer->email = $request->email;
        $customer->name = $request->name;
        $customer->phone = $request->phone;
        $customer->dob = $request->dob;
        $customer->address = $request->address;
        $customer->save();
       return view('admin.view.viewCustomer')->with('customers', $customer); 
    }

    public function searchc_btn(Request $request){
        $customers = Customer::where('name',$request->search)->get();
        //return $admins;
        return view('admin.view.customerTable')->with('customers', $customers);
    }

    ////////////////////APPROVE///////////////
    public function riderStatus(){
        $riders = Rider::where('status','Pending')->get();
        return view('admin.status.riderStatus')->with('riders', $riders);
    }

    public function riderApproval(Request $request){
    $riders = Rider::where('id', $request->id)->first();
    //return $admin;
    return view('admin.status.riderApproval')->with('riders', $riders);
      }

    public function riderApproved(Request $request){
    $riders = Rider::where('id', $request->id)->first();
    $riders->status = "Approved";
    $riders->save();
    return redirect()->route('riderStatus')->with('riders', $riders); 
    }

    public function riderDenay(Request $request){
    $riders = Rider::where('id', $request->id)->first();
    $riders->delete();
    return redirect()->route('riderStatus')->with('riders', $riders);
    }
///Add rider///

    public function addRider(){
        return view('admin.add.addRider');
    }

    public function riderAdd(Request $request){
        $rider = Rider::where('email',$request->email)
      ->where('phone',$request->phone)
      ->first();

           if($rider){
               $request->session()->flash('rider', 'Already Exists or Added');
               return redirect()->route('addRider');
           }
           else{
            $rider = new Rider();
            $rider->name = $request->name;
            $rider->gender = $request->gender;
            $rider->dob = $request->dob;
            $rider->peraddress = $request->peraddress;
            $rider->preaddress = $request->preaddress;
            $rider->phone = $request->phone;
            $rider->email = $request->email;
            $rider->nid = $request->nid;
            $rider->dlic = $request->dlic;
            $rider->status = 'approved';
            $rider->rpoint = '0';
            $rider->balance = '0';
            $rider->username = $request->username;
            $rider->password = md5($request->password);
            if($request->hasfile('image'))
            {
                $file = $request->file('image');
                $extension = $file->getClientOriginalExtension();
                $filename = time().'.'.$extension;
                $file->move('uploads/pictures/',$filename);
                $rider->image = $filename;
            }
           
            $rider->save();

            return redirect()->route('riderList');
           }
   }


         public function viewRecord(){
                $customer = DB::table('customers')->count();
                $rider = DB::table('riders')->count();
               return view('admin.adminDashboard',compact('customer','rider'));
          }


          public function riderList(Request $request){

            $search = $request['search'] ?? "";
            if ($search != ""){

                $riders = Rider::where('name','LIKE',"%$search%")->orWhere('email','LIKE',"%$search%")->get();
            }
            else{
                $riders = Rider::all();
            }
           $data = compact('riders','search');
            return view('admin.view.riderList')->with('riders', $riders);
        }

        public function riderDelete(Request $request){
            $rider = Rider::where('id', $request->id)->first();
            $rider->delete();
    
            return redirect()->route('riderList');
        }
        

        
    public function updateRider(Request $request){
        $rider = Rider::where('id', $request->id)->first();
        
        return view('admin.update.updateRider')->with('rider', $rider);
        
    }
    public function updateRiderSubmitted(Request $request){
        $rider = Rider::where('id', $request->id)->first();

        $rider->name = $request->name;
        $rider->gender = $request->gender;
        $rider->dob = $request->dob;
        $rider->peraddress = $request->peraddress;
        $rider->preaddress = $request->preaddress;
        $rider->phone = $request->phone;
        $rider->email = $request->email;
        $rider->nid = $request->nid;
        $rider->dlic = $request->dlic;
        $rider->status = 'approved';
        $rider->rpoint = '0';
        $rider->balance = '0';
        $rider->username = $request->username;
        $rider->save();
        return redirect()->route('riderList');

    }


    public function viewRider(Request $request){
        $rider = Rider::where('id', $request->id)->first();
        
        return view('admin.view.viewRider')->with('rider', $rider);
        
    }
    public function CPassword(){
       
        return view('admin.changePassword');
        
    }
    public function updatePassword(Request $request){
        

       $validateData = $request->validate([
        'oldPassword' => 'required',
        'password' => 'required|confirmed',

       ]);

       $adminNewPass=$request->password;
       $adminConPass=$request->password_confirmation;
   


     //echo Admin::all()->password;

        //$hashedPassword = Auth::admin()->password;
    if($adminNewPass == $adminConPass){
            $user = Admin::where('password', md5($request->oldPassword))->first();
    //    if(Hash::check($request->oldPassword, Auth::admin()->password)){
    //          // dd("old password doesn't match");
    //    $user = Admin::find(Auth::id());

    $user->password = md5($request->password);
    $user->password = Hash::make($request->password);
   // $user->password = Hash::make($request->password);
    $user->save();
     Auth::logout();
     return redirect()->route('adminlogin')->with('success','Password is change successfully');

     }
       else{
         return redirect()->back()->with('error','Current Password invalid');

        }
    
     //dd($request->all());

        
    }

    public function charts(){
            
        return view('admin.charts');
    }


    public function chartInfo(){
  $result = DB::select(DB::raw("select count(*) as total_gender,gender from riders group by gender
  "));
  $chartData = "";
  foreach($result as $list){
    $chartData.="['".$list->gender."',".$list->total_gender."],";
  }
  $arr['chartData'] = rtrim($chartData,",");

   return view('admin.charts',$arr);

  }

   
}
