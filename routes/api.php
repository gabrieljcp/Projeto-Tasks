<?php

use App\Http\Controllers\TasksController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/Tasks/all',  [TasksController::class, 'getAllTasks']);
Route::get('/Tasks/get/{id}',  [TasksController::class, 'getTasks']);
Route::post('/Tasks/add',  [TasksController::class, 'createTasks']);
Route::delete('/Tasks/delete/{id}',  [TasksController::class, 'deleteTasks']);
Route::put('/Tasks/update/{id}',  [TasksController::class, 'updateTasks']);

