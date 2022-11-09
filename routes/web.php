<?php

use App\Http\Controllers\EmployeeController;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\HomeController;

Auth::routes();

Route::get('/', function () {
	return view('welcome');
});

Route::get('/home', [HomeController::class, 'index'])
	->name('home');

Route::get('/about', function() {
	return view('example');
});

Route::resource('employees', EmployeeController::class);
Route::get('/api/employees', [EmployeeController::class, 'apiIndex']);
