<?php

use App\Http\Controllers\CustomerController;
use App\Http\Controllers\AdminController;
use App\Http\Controllers\ManagerController;
use App\Http\Controllers\RiderController;
use Illuminate\Support\Facades\Route;


// --- Customer route ---

//login & registration
Route::get('/customerRegistration',[CustomerController::class, 'customerCreate'])->name('customerRegistration');
Route::post('/customerRegistrationSubmit',[CustomerController::class, 'customerCreateSubmit'])->name('customerCreateSubmit');
Route::get('/customerLogin', function () {return view('customer.authentication.login');})->name('customerLogin');
Route::post('/customerLoginSubmit',[CustomerController::class, 'customerLoginSubmit'])->name('customerLoginSubmit');

//dashboard
Route::get('/customerDashboard/home', function () {return view('customer.home');})->name('customerDash')->middleware('customerValid');
Route::get('/customerDashboard/logout',[CustomerController::class, 'logout'])->name('customerLogout')->middleware('customerValid');
Route::get('/customerDashboard/viewProfile', function () {return view('customer.profile.updateProfile');})->name('customerProfile')->middleware('customerValid');
Route::post('/customerEdit',[CustomerController::class, 'customerEdit'])->name('customerEdit')->middleware('customerValid');
Route::get('/customerDashboard/changePassword', function () {return view('customer.profile.changePass');})->name('passwordChanging')->middleware('customerValid');
Route::post('/customerPasswordChange',[CustomerController::class, 'cpass'])->name('passwordChangingRequest')->middleware('customerValid');
Route::get('/customerDashboard/rideRequest', function () {return view('customer.ride.rideRequest');})->name('rideRequest')->middleware('customerValid');
//--Customer route end ---


//--Admin route--
Route::get('/adminlogin',[AdminController::class, 'adminlogin'])->name('adminlogin');
Route::post('/adminlogin',[AdminController::class, 'loginSubmit'])->name('adminlogin');
Route::get('/logout',[AdminController::class, 'logout'])->name('logout');
Route::get('/adminDashboard',[AdminController::class, 'admindashboard'])->name('admindashboard')->middleware('Admin');
Route::get('/updateAdminProfile',[AdminController::class, 'updateAdminProfile'])->name('updateAdminProfile')->middleware('Admin');
Route::post('/updateAdminProfile',[AdminController::class, 'updateSubmitted'])->name('updateProfile')->middleware('Admin');
Route::get ('/adminProfile',[AdminController::class,'adminProfile'])->name('adminProfile')->middleware('Admin');
Route::get ('/addAdmin',[AdminController::class,'addAdmin'])->name('addAdmin')->middleware('Admin');
Route::get ('changePicture',[AdminController::class,'changePicture'])->name('changePicture')->middleware('Admin');
Route::post('changePicture',[AdminController::class,'changePictureSubmit'])->name('changePictureSubmit')->middleware('Admin');
Route::post('/addAdmin',[AdminController::class, 'Adminadd'])->name('Adminadd')->middleware('Admin');
Route::get ('/addCustomer',[AdminController::class,'addCustomer'])->name('addCustomer')->middleware('Admin');
Route::post ('/addCustomer',[AdminController::class,'customerAdd'])->name('customerAdd');


//--Admin route end--

//--Manager rout--
/*Route::get('/managerRegistration', function () {
      return view('manager.registration');
  });
*/

  Route::get('/managerRegistration',[ManagerController::class, 'managerRegistration'])->name('managerRegistration');
  Route::post('/managerRegistration',[ManagerController::class, 'managerRegistrationSubmitted'])->name('managerRegistration');


Route::get('/managerLogin',[ManagerController::class, 'managerLogin'])->name('managerLogin');
Route::post('/managerLogin',[ManagerController::class, 'managerLoginSubmitted'])->name('managerLogin');



/*Route::get('/managerLogin', function () {
      return view('manager.login');
  });
*/
//--Manager rout end--


//--Rider route--
Route::get('/riderLogin', function () {return view('rider.login');})->name('riderLogin');
Route::post('/riderLogin',[RiderController::class, 'riderLoginSubmit'])->name('riderLogin');
Route::get('/riderRegistration', function () {return view('rider.registration');})->name('riderRegistration');
Route::post('/riderRegistration',[RiderController::class, 'riderCreateSubmit'])->name('riderRegistration');

//--Rider route end--





