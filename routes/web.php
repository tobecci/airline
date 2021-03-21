<?php

use App\Http\Controllers\AirpeaceSelectTablesController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Registration;
use App\Http\Controllers\Dashboard;
use App\Http\Controllers\Booking;


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

Route::get('/', function () {
    return view('welcome');
});
Route::get('/logout', function () {
    return view('welcome');
});
Route::get('/login', function () {
    return view('login');
});
Route::get('/naomi', function () {
    return view('naoh');
});
Route::get('/payment', function () {
    return view('payment');
});
Route::get('/advantage', function () {
    return view('advantage');
}); 
Route::get('/careers', function () {
    return view('careers');
});
Route::get('/about', function () {
    return view('about');
});
Route::get('/gallery', function () {
    return view('gallery');
});
Route::get('/mybooking', function () {
    return view('mybooking');
});
Route::get('/checkin', function () {
    return view('checkin');
});
Route::get('/select', function () {
    return view('select');
});
Route::get('/dashboard', [Dashboard::class, 'index']);
Route::get('/booking', [AirpeaceSelectTablesController::class, 'index']);
Route::post('/booking', [Booking::class, 'index']);
Route::get('/register', [Registration::class, 'register']);
Route::post('/register', [Registration::class, 'register_me']);

