<?php

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

//Route::get('/', function () {
//    return view('welcome');
//});

Route::group(['middleware' => []], function () {

    // Route::any('{slug}', function () {
    //     return "Hello World Xinh";
    // })->where('slug', '([A-z\d-\/_.]+)?');

    Route::get('/{any}', function ($any) {
        return File::get(public_path() . '/home/index.html');
    })->where('any', '.*');
});
