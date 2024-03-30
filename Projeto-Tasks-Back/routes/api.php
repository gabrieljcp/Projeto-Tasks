<?php

use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\Auth\RegisterController;
use App\Http\Controllers\TasksController;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Route;

Route::middleware('jwt.auth')->get('/user', function (Request $request) {
    return $request->user();
});
Route::post('/loginAPI', [LoginController::class, 'login']);
Route::post('/registerAPI', [RegisterController::class, 'register']);

Route::middleware(['jwt.auth'])->group(function () {

    Route::get('/tasks/all',  [TasksController::class, 'getAllTasks']);
    Route::get('/tasks/get/{id}',  [TasksController::class, 'getTasks']);
    Route::post('/tasks/add',  [TasksController::class, 'createTasks']);
    Route::delete('/tasks/delete/{id}',  [TasksController::class, 'deleteTasks']);
    Route::put('/tasks/update/{id}',  [TasksController::class, 'updateTasks']);

});

