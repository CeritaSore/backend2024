<?php

use App\Http\Controllers\PatientsController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');
Route::get('/patients',[PatientsController::class,'index']);
Route::get('/patients/{id}',[PatientsController::class,'show']);
Route::get('/patients/search/{name}',[PatientsController::class,'showByName']);
Route::get('/patients/status/positive',[PatientsController::class,'showByPositiveStatus']);
Route::get('/patients/status/recovered',[PatientsController::class,'showByRecoveredStatus']);
Route::get('/patients/status/dead',[PatientsController::class,'showByDeadStatus']);



Route::put('/patients/{id}',[PatientsController::class,'update']);
Route::post('/patients',[PatientsController::class,'store']);
Route::delete('/patients/{id}',[PatientsController::class,'destroy']);