<?php

use App\Http\Controllers\CustomerController;
use App\Http\Controllers\AdminController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
// --- Customer route ---
Route::get('/customerRegistration',[CustomerController::class, 'customerCreate'])->name('customerRegistration');
Route::post('/customerRegistrationSubmit',[CustomerController::class, 'customerCreateSubmit'])->name('customerCreateSubmit');
Route::get('/customerLogin', function () {return view('customer.login');})->name('customerLogin');
Route::post('/customerLoginSubmit',[CustomerController::class, 'customerLoginSubmit'])->name('customerLoginSubmit');
//--Customer route end ---


//--Admin route--
Route::get('/adminlogin',[AdminController::class, 'adminlogin'])->name('adminlogin');
Route::post('/adminlogin',[AdminController::class, 'loginSubmit'])->name('adminlogin');
Route::get('/adminDashboard',[AdminController::class, 'dashboard'])->name('admindashboard');
Route::get('/updateAdminProfile',[AdminController::class, 'updateAdminProfile'])->name('updateAdminProfile');
Route::post('/updateAdminProfile',[AdminController::class, 'updateSubmitted'])->name('updateProfile');

//--Admin route end--