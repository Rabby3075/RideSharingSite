<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AdminController;
<<<<<<< HEAD
use App\Http\Controllers\RiderController;
=======
use App\Http\Controllers\CustomerController;
>>>>>>> 972df8e60d96d4a0532ad953d9e2d02bc26536ce

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

<<<<<<< HEAD

 //Rider//
 Route::get('/rideHistory',[RiderController::class, 'rideHisApi'])->name('rideHis');
 Route::get('/riderCount',[RiderController::class, 'riderCountApi'])->name('riderCount');
 Route::get('/riderBalance',[RiderController::class, 'riderBalanceApi'])->name('riderBalance');
 Route::get('/totalPay',[RiderController::class, 'totalPayApi'])->name('totalPay');
 Route::post('/redeem',[RiderController::class, 'redeemApi'])->name('redeem');
 Route::post('/CashOut',[RiderController::class, 'cashoutApi'])->name('CashOut');
=======
 Route::get('/customerView',[AdminController::class,'customerView']);
 Route::get('/formcustomer/{id}',[AdminController::class,'formCustomer']);


 Route::get('/riderList',[AdminController::class,'RiderAPIList']);
 Route::post('/riderList',[AdminController::class,'RiderAPIPost']);

//-------------------Customer APi---------------------------
Route::post('/customerRegistrationSubmit',[CustomerController::class, 'CustomerRegistrationApi'])->name('CustomerRegistrationApi');
//-------------------Customer APi---------------------------
 Route::post('/adminlogin',[AdminController::class,'adminapilogin']);
>>>>>>> 972df8e60d96d4a0532ad953d9e2d02bc26536ce
