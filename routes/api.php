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

//Route::middleware('auth:api')->get('/user', function (Request $request) {
//    return $request->user();
//});

Route::group(['prefix' => 'v1'], function () {
    Route::group(['middleware' => []], function () {
        Route::post('/authentication', 'AuthController@postAuthentication');
    });

    Route::group(['middleware' => 'jwt.auth'], function () {
        Route::get('/authorization', 'AuthController@getAuthorization');

        Route::group(['middleware' => 'product', 'prefix' => 'products'], function () {
            Route::get('/', 'ProductController@getReadAll');
            Route::get('/{id}', 'ProductController@getReadOne');
            Route::post('/', 'ProductController@postCreateOne');
            Route::put('/', 'ProductController@putUpdateOne');
            Route::patch('/', 'ProductController@patchDeactivateOne');
            Route::delete('/{id}', 'ProductController@deleteDeleteOne');
            Route::get('/page/{page}/{pageSize}', 'ProductController@getReadAllWithPage');
        });
    });
});
