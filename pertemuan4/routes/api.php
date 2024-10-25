<?php

use App\Http\Controllers\AnimalsController;
use App\Http\Controllers\StudentsController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::get('/students', [StudentsController::class,'index']);
Route::post('/students', [StudentsController::class,'store']);
Route::put('/students/{id}',[StudentsController::class,'update']);
Route::delete('/students/{id}',[StudentsController::class,'destroy']);