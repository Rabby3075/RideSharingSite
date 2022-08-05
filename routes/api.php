<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AdminController;
use App\Http\Controllers\CustomerController;

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

 Route::get('/customerView',[AdminController::class,'customerView']);
 Route::get('/formcustomer/{id}',[AdminController::class,'formCustomer']);


 Route::get('/riderList',[AdminController::class,'RiderAPIList']);
 Route::post('/riderList',[AdminController::class,'RiderAPIPost']);

//-------------------Customer APi---------------------------
Route::post('/customerRegistrationSubmit',[CustomerController::class, 'CustomerRegistrationApi'])->name('CustomerRegistrationApi');
//-------------------Customer APi---------------------------
 Route::post('/adminlogin',[AdminController::class,'adminapilogin']);
