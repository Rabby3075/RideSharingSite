<?php

use App\Http\Controllers\CustomerController;
use App\Http\Controllers\AdminController;
use App\Http\Controllers\RiderController;
use Illuminate\Support\Facades\Route;


// --- Customer route ---

//login & registration
Route::get('/customerRegistration',[CustomerController::class, 'customerCreate'])->name('customerRegistration');
Route::post('/customerRegistrationSubmit',[CustomerController::class, 'customerCreateSubmit'])->name('customerCreateSubmit');
Route::get('/customerLogin', function () {return view('customer.login');})->name('customerLogin');
Route::post('/customerLoginSubmit',[CustomerController::class, 'customerLoginSubmit'])->name('customerLoginSubmit');

//dashboard
Route::get('/customerDashboard/home', function () {return view('customer.home');})->name('customerDash')->middleware('customerValid');
Route::get('/customerDashboard/logout',[CustomerController::class, 'logout'])->name('customerLogout')->middleware('customerValid');
Route::get('/customerDashboard/viewProfile', function () {return view('customer.updateProfile');})->name('customerProfile')->middleware('customerValid');
Route::post('/customerEdit',[CustomerController::class, 'customerEdit'])->name('customerEdit')->middleware('customerValid');
Route::get('/customerDashboard/changePassword', function () {return view('customer.changePass');})->name('passwordChanging')->middleware('customerValid');
Route::post('/customerPasswordChange',[CustomerController::class, 'cpass'])->name('passwordChangingRequest')->middleware('customerValid');
//--Customer route end ---


//--Admin route--
Route::get('/adminlogin',[AdminController::class, 'adminlogin'])->name('adminlogin');
Route::post('/adminlogin',[AdminController::class, 'loginSubmit'])->name('adminlogin');
Route::get('/adminDashboard',[AdminController::class, 'admindashboard'])->name('admindashboard');
Route::get('/updateAdminProfile',[AdminController::class, 'updateAdminProfile'])->name('updateAdminProfile');
Route::post('/updateAdminProfile',[AdminController::class, 'updateSubmitted'])->name('updateProfile');
Route::get ('/adminProfile',[AdminController::class,'adminProfile'])->name('adminProfile');
Route::get ('/addAdmin',[AdminController::class,'addAdmin'])->name('addAdmin');
Route::get ('changePicture',[AdminController::class,'changePicture'])->name('changePicture');

//--Admin route end--

//--Manager rout--
Route::get('/managerRegistration', function () {
      return view('manager.registration');
  });
Route::get('/managerLogin', function () {
      return view('manager.login');
  });

//--Manager rout end--

//--Rider route--
Route::get('/riderLogin', function () {return view('rider.login');})->name('riderLogin');
Route::post('/riderLogin',[RiderController::class, 'riderLoginSubmit'])->name('riderLogin');
Route::get('/riderRegistration', function () {return view('rider.registration');})->name('riderRegistration');
Route::post('/riderRegistration',[RiderController::class, 'riderCreateSubmit'])->name('riderRegistration');

//--Rider route end--

