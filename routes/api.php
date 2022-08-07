<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AdminController;
use App\Http\Controllers\CustomerController;
use App\Http\Controllers\RiderController;
use App\Http\Controllers\CustomerRatingController;
use App\Http\Controllers\RideController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
 Route::post('/adminlogin',[AdminController::class,'adminapilogin']);



 //Rider//
 Route::get('/rideHistory',[RiderController::class, 'rideHisApi'])->name('rideHis');
 Route::get('/riderCount',[RiderController::class, 'riderCountApi'])->name('riderCount');
 Route::get('/riderBalance',[RiderController::class, 'riderBalanceApi'])->name('riderBalance');
 Route::get('/totalPay',[RiderController::class, 'totalPayApi'])->name('totalPay');
 Route::post('/redeem',[RiderController::class, 'redeemApi'])->name('redeem');
 Route::post('/CashOut',[RiderController::class, 'cashoutApi'])->name('CashOut');

 Route::get('/customerView1',[AdminController::class,'customerView']);
 Route::get('/formcustomer',[AdminController::class,'formCustomer']);
 Route::post('/customerView',[AdminController::class,'CaddAPIPost']);
 Route::post('/adminView',[AdminController::class,'AaddAPIPost']);
 Route::get('/customerView/{id}',[AdminController::class,'Customerinfo']);
 Route::put('/customerView/{id}',[AdminController::class,'CustomerEdit']);
 Route::post('/customerView/{id}',[AdminController::class,'CustomerEdit']);
 Route::post('/customerdelete/{id}',[AdminController::class,'CustomerDeleteApi']);
 Route::get('/riderstatus',[AdminController::class,'riderStatusApi']);



////////////Rider List API////////////
 Route::get('/riderList',[AdminController::class,'RiderAPIList']);
 ////////////Rider add API////////////
 Route::post('/riderList',[AdminController::class,'RiderAPIPost']);
 ////////////Rider Update API////////////
 Route::put('/riderList/{id}',[AdminController::class,'RiderUpdateAPI']);
 Route::post('/riderList/{id}',[AdminController::class,'RiderUpdateAPI']);
  ////////////Rider Delete API////////////
  Route::get('/riderList/{id}',[AdminController::class,'RiderGetAPI']);
 Route::delete('/riderList/{id}',[AdminController::class,'RiderDeleteAPI']);
  ////////////Rider View API////////////
  Route::get('/riderList/{id}',[AdminController::class,'RiderViewAPI']);
  Route::get('/riderList/{key}',[AdminController::class,'RiderSearchAPI']);

//-------------------Customer APi---------------------------
Route::post('/customerRegistrationSubmit',[CustomerController::class, 'CustomerRegistrationApi'])->name('CustomerRegistrationApi');
Route::post('/customerLoginSubmit',[CustomerController::class, 'customerLoginSubmitApi'])->name('customerLoginSubmitApi')->middleware('api-session');
Route::get('/discountApi',[CustomerRatingController::class, 'discountListApi'])->name('discountListApi')->middleware('api-session');
Route::get('/locationList',[RideController::class, 'LocationList'])->name('locationList');
Route::post('/ridereq',[RideController::class, 'rideRequestSubmitApi'])->name('rideRequestSubmitApi')->middleware('api-session');
//-------------------Customer APi---------------------------




