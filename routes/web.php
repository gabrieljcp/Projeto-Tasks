<?php

use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;


Route::get('/', function () {
    return view('welcome');
});

Auth::routes();

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');

// Rota para exibir o formulário de login
Route::get('/login', 'App\Http\Controllers\Auth\LoginController@showLoginForm')->name('login');

// Rota para processar o login do usuário
Route::post('/login', 'App\Http\Controllers\Auth\LoginController@login');

// Rota para exibir o formulário de registro
Route::get('/register', 'App\Http\Controllers\Auth\RegisterController@showRegistrationForm')->name('register');

// Rota para processar o registro do usuário
Route::post('/register', 'App\Http\Controllers\Auth\RegisterController@register');

// Rota para exibir o perfil do usuário
Route::get('/perfil', 'App\Http\Controllers\UserProfileController@show')->name('perfil')->middleware('auth');

// Rota para fazer logout
Route::post('/logout', 'App\Http\Controllers\Auth\LoginController@logout')->name('logout');

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
