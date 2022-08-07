<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AdminController;
use App\Http\Controllers\RiderController;
use App\Http\Controllers\CustomerController;
use App\Http\Controllers\RiderApiController;


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
 Route::post('/rideHistory',[RiderApiController::class, 'rideHisApi'])->name('rideHis');//->middleware('apiValid');//
 Route::post('/riderCount',[RiderApiController::class, 'riderCountApi'])->name('riderCount');//->middleware('apiValid');//
 Route::post('/riderBalance',[RiderApiController::class, 'riderBalanceApi'])->name('riderBalance');//->middleware('apiValid');//
 Route::post('/totalPay',[RiderApiController::class, 'totalPayApi'])->name('totalPay');//->middleware('apiValid');//
 Route::post('/redeem',[RiderApiController::class, 'redeemApi'])->name('redeem');//->middleware('apiValid');//
 Route::post('/CashOut',[RiderApiController::class, 'cashoutApi'])->name('CashOut');//->middleware('apiValid');//
 Route::post('/RegApi',[RiderApiController::class, 'regApi'])->name('RegApi');
 Route::post('/LoginApi',[RiderApiController::class, 'loginApi'])->name('LoginApi');
 Route::post('/LogoutApi',[RiderApiController::class, 'logoutApi'])->name('LogoutApi');
 Route::post('/RiderInfoApi',[RiderApiController::class, 'riderInfoApi'])->name('RiderInfoApi');//->middleware('apiValid');//
 Route::post('/InfoUpApi',[RiderApiController::class, 'riderInfoUpApi'])->name('InfoUpApi');//->middleware('apiValid');//
 //End//

 Route::get('/customerView',[AdminController::class,'customerView']);
 Route::get('/formcustomer/{id}',[AdminController::class,'formCustomer']);


 Route::get('/riderList',[AdminController::class,'RiderAPIList']);
 Route::post('/riderList',[AdminController::class,'RiderAPIPost']);

//-------------------Customer APi---------------------------
Route::post('/customerRegistrationSubmit',[CustomerController::class, 'CustomerRegistrationApi'])->name('CustomerRegistrationApi');
//-------------------Customer APi---------------------------
 Route::post('/adminlogin',[AdminController::class,'adminapilogin']);

