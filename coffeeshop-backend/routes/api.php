<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ContactApiController;
use App\Http\Controllers\UserApiController;
use App\Http\Controllers\ProductApiController;
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

// API for Contact
Route::get('contacts', [ContactApiController::class, 'index']);
Route::post('contact', [ContactApiController::class, 'store']);
Route::put('/contact/{contact}', [ContactApiController::class, 'update']);
Route::delete('/contact/{contact}', [ContactApiController::class, 'delete']);

// API For users
Route::get('users', [UserApiController::class, 'index']);
Route::post('user', [UserApiController::class, 'store']);
Route::put('/user/{user}', [UserApiController::class, 'update']);
Route::delete('/user/{user}', [UserApiController::class, 'delete']);

//API For products
Route::get('products', [ProductApiController::class, 'index']);
Route::post('product', [ProductApiController::class, 'store']);
Route::put('/product/{product}', [ProductApiController::class, 'update']);
Route::delete('/product/{product}', [ProductApiController::class, 'delete']);
