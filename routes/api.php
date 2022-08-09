<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AdminController;

use App\Http\Controllers\RiderController;
use App\Http\Controllers\CustomerController;
use App\Http\Controllers\RiderApiController;

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


 //Rider//


 Route::post('/rideHistory',[RiderController::class, 'rideHisApi'])->name('rideHis');//->middleware('apiValid');//
 Route::post('/riderCount',[RiderController::class, 'riderCountApi'])->name('riderCount');//->middleware('apiValid');//
 Route::post('/riderBalance',[RiderController::class, 'riderBalanceApi'])->name('riderBalance');//->middleware('apiValid');//
 Route::post('/totalPay',[RiderController::class, 'totalPayApi'])->name('totalPay');//->middleware('apiValid');//
 Route::post('/redeem',[RiderController::class, 'redeemApi'])->name('redeem');//->middleware('apiValid');//
 Route::post('/CashOut',[RiderController::class, 'cashoutApi'])->name('CashOut');//->middleware('apiValid');//
 Route::post('/RegApi',[RiderController::class, 'regApi'])->name('RegApi');
 Route::post('/RLoginApi',[RiderController::class, 'loginApi'])->name('LoginApi');
 Route::post('/CheckReqApi',[RiderController::class, 'checkReqApi'])->name('CheckReqApi');
 Route::post('/LogoutApi',[RiderController::class, 'logoutApi'])->name('LogoutApi');
 Route::post('/RiderInfoApi',[RiderController::class, 'riderInfoApi'])->name('RiderInfoApi');//->middleware('apiValid');//
 Route::post('/InfoUpApi',[RiderController::class, 'riderInfoUpApi'])->name('InfoUpApi');//->middleware('apiValid');//



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

 Route::get('/rideHistory',[RiderController::class, 'rideHisApi'])->name('rideHis');
 Route::get('/riderCount',[RiderController::class, 'riderCountApi'])->name('riderCount');
 Route::get('/riderBalance',[RiderController::class, 'riderBalanceApi'])->name('riderBalance');
 Route::get('/totalPay',[RiderController::class, 'totalPayApi'])->name('totalPay');

 Route::get('/customerView1',[AdminController::class,'customerView']);
Route::get('/adminView1',[AdminController::class,'adminView']);
Route::get('/adminView/{id}',[AdminController::class,'Admininfo']);
 Route::put('/adminView/{id}',[AdminController::class,'AdminEdit']);
 Route::post('/adminView/{id}',[AdminController::class,'AdminEdit']);
 Route::get('/formcustomer',[AdminController::class,'formCustomer']);
 Route::post('/customerView',[AdminController::class,'CaddAPIPost']);
 Route::post('/adminView',[AdminController::class,'AaddAPIPost']);
 Route::get('/customerView/{id}',[AdminController::class,'Customerinfo']);
 Route::put('/customerView/{id}',[AdminController::class,'CustomerEdit']);
 Route::post('/customerView/{id}',[AdminController::class,'CustomerEdit']);
 Route::post('/customerdelete/{id}',[AdminController::class,'CustomerDeleteApi']);
 Route::get('/riderstatusdelete/{id}',[AdminController::class,'StatusDeleteApi']);
 Route::post('/riderapprove/{id}',[AdminController::class,'RiderApprove']);
 Route::get('/riderstatus',[AdminController::class,'riderStatusApi']);
 Route::post('/AdminInfoApi',[AdminController::class, 'adminInfoApi']);
 Route::post('/AdminInfoUpApi',[AdminController::class, 'adminInfoUpApi']);



 
 Route::middleware(['auth:sanctum'])->group(function(){
  Route::post('/Logout',[AdminController::class, 'adminLogoutAPI']);

 });
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
  Route::get('/search/{key}',[AdminController::class,'RiderSearchAPI']);

//-------------------Customer APi---------------------------
Route::post('/customerRegistrationSubmit',[CustomerController::class, 'CustomerRegistrationApi'])->name('CustomerRegistrationApi');
Route::post('/customerLoginSubmit',[CustomerController::class, 'customerLoginSubmitApi'])->name('customerLoginSubmitApi')->middleware('api-session');
Route::get('/discountApi',[CustomerRatingController::class, 'discountListApi'])->name('discountListApi')->middleware('api-session');
Route::get('/locationList',[RideController::class, 'LocationList'])->name('locationList');
Route::post('/ridereq',[RideController::class, 'rideRequestSubmitApi'])->name('rideRequestSubmitApi')->middleware('api-session');
Route::post('/customerInfo',[CustomerController::class, 'CustomerInfoApi'])->name('CustomerInfoApi');
Route::post('/customerOtp',[CustomerController::class, 'OtpApi'])->name('OtpApi');
Route::post('/rideInfo',[RideController::class, 'RideStatus'])->name('RideStatus');
Route::post('/rideHistory',[RideController::class, 'RideHistory'])->name('RideHistory');
Route::post('/customerEdit',[CustomerController::class, 'CustomerEditApi'])->name('CustomerEditApi');
Route::post('/customerpassChange',[CustomerController::class, 'cpassApi'])->name('cpassApi');
Route::post('/rideInformation',[RideController::class, 'getRideInformation'])->name('rideView');
Route::post('/ride/cancel',[RideController::class, 'rideCancelApi'])->name('rideCancelApi');
//-------------------Customer APi---------------------------

 Route::post('/adminlogin',[AdminController::class,'adminapilogin']);




