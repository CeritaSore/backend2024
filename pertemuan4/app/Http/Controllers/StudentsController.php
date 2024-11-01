<?php

namespace App\Http\Controllers;

use App\Models\Student;
use Illuminate\Http\Request;

class StudentsController extends Controller
{
    //
    public function index()
    {
        $students = Student::all();
        $data = [
            'message' => 'Get All Students',
            'data' => $students,
        ];
        return response()->json($data);
    }
    public function show($id)
    {
        $student = Student::find($id);
        if ($student) {
            $data = [
                'message' => 'query success with',
                'detail' => $student
            ];
            return response()->json($data);

        }else{
            return response()->json(['message'=> 'query success with error'],404);
        }
    }
    public function store(Request $request)
    {

        $input = [
            'nama' => $request->nama,
            'nim' => $request->nim,
            'email' => $request->email,
            'jurusan' => $request->jurusan,
        ];
        $student = Student::create($input);
        $data = [
            'message' => 'Get All Students',
            'data' => $student,
        ];
        return response()->json($data);

    }
    public function update(Request $request, $id)
    {
        $getId = Student::find($id);
        $getId->nama = $request->nama;
        $getId->nim = $request->nim;
        $getId->email = $request->email;
        $getId->jurusan = $request->jurusan;
        $getId->save();
        $data = [
            'message' => 'Students Updated',
            'data' => $getId,
        ];
        return response()->json($data);
        // dd($request);
    }
    public function destroy($id)
    {
        // dd('test');
        Student::find($id)->delete();
        $data = [
            'message' => 'Students Deleted',
        ];
        return response()->json($data);
    }

}
