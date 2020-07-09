<?php

use Illuminate\Http\Request;

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

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});




Route::group(['prefix' => 'inventory'], function(){
    Route::get('/','InventoryController@index');
    Route::delete('/delete/{id}', 'InventoryController@destroy');
    Route::post('/create/','InventoryController@store');
    Route::delete('/deleteAll/{id}', 'InventoryController@destroyAll');
});

Route::group(['prefix' => 'auth'], function(){
    Route::post('register', 'UserController@register');
    Route::post('login', 'UserController@login');
});