<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;
class Student extends Model
{
    //
    protected $table = 'student';
    protected $fillable = ['nama','nim','email','jurusan'];
    public static function getAllStudent(){
        $student = Student::all();
        return $student;
    }
    public function index(){
        $students = Student::getAllStudent();
        echo $students;
    }

}
