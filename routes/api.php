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
<<<<<<< HEAD
 Route::post('/adminlogin',[AdminController::class,'adminapilogin']); 

 Route::get('/riderList',[AdminController::class,'RiderAPIList']);
 Route::post('/riderList',[AdminController::class,'RiderAPIPost']);
=======
//-------------------Customer APi---------------------------
Route::post('/customerRegistrationSubmit',[CustomerController::class, 'CustomerRegistrationApi'])->name('CustomerRegistrationApi');
//-------------------Customer APi---------------------------
 Route::post('/adminlogin',[AdminController::class,'adminapilogin']);
>>>>>>> e52f11d7a0cd08d9c34cc3aaa7c111fa5349a273
