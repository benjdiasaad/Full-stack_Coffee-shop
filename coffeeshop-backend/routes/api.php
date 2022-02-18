<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ContactApiController;
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


Route::get('contacts', [ContactApiController::class, 'index']);

Route::post('contact', [ContactApiController::class, 'store']);

Route::put('/contact/{contact}', [ContactApiController::class, 'update']);

Route::delete('/contact/{contact}', [ContactApiController::class, 'delete']);

