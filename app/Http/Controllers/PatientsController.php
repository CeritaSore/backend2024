<?php

namespace App\Http\Controllers;

use App\Models\Patients;
use Illuminate\Http\Request;

class PatientsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
{
    
    $patients = Patients::all();

    if ($patients->isEmpty()) {
        
        return response()->json([
            'message' => 'Data is Empty',
            'body' => [],
        ], 200);
    }

 
    return response()->json([
        'message' => 'Get All Resource',
        'body' => $patients,
    ], 200);
}


    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //

        $validation = $request->validate([
            'nama' => 'required|max:100',
            'nomor_telepon' => 'required|max:15',
            'alamat_pasien' => 'required|max:50',
            'status_pasien' => 'required',
            'tanggal_masuk' => 'required|date',
            'tanggal_keluar' => 'required|date',
        ]);
        $savedata = Patients::create([
            'name' => $validation['nama'],
            'phone' => $validation['nomor_telepon'],
            'address' => $validation['alamat_pasien'],
            'status' => $validation['status_pasien'],
            'in_date_at' => $validation['tanggal_masuk'],
            'out_date_at' => $validation['tanggal_keluar'],
        ]);
        $data = [
            'message' => 'Resource is added successfully',
            'body' => $savedata

        ];
        return response()->json($data, 201);

    }

    /**
     * Display the specified resource.
     */
    public function show(Patients $patients, $id)
    {
        //
        $findingData = Patients::find($id);
        if ($findingData) {
            $data = [
                'message' => 'Get Detail Resource',
                'data' => $findingData,
            ];
            return response()->json($data, 200);

        } else {

            return response()->json('Resource Not Found', 404);
        }
    }
    public function showByName(Patients $patients, $name)
    {
        //
        $findingData = Patients::where('name', $name)->get();
        if ($findingData->isEmpty()) {
            
            return response()->json('Resource Not Found', 404);
        }else {
            $data = [
                'message' => 'Get Searched Resource',
                'data' => $findingData,
            ];
            return response()->json($data, 200);
            
        }
    }
    public function showByPositiveStatus(Patients $patients)
    {
        //
        $findingData = Patients::where('status', 'positive')->first();
        $countData = Patients::where('status', 'positive')->count();
        $data = [
            'message' => 'Get Detail Resource',
            'total'=>$countData,
            'data' => $findingData,
        ];
        return response()->json($data, 200);
    }
    public function showByRecoveredStatus(Patients $patients)
    {
        //
        $findingData = Patients::where('status', 'recovered')->first();
        $countData= Patients::where('status', 'recovered')->count();
        $data = [
            'message' => 'Get Detail Resource',
            'total'=>$countData,
            'data' => $findingData,
        ];
        return response()->json($data, 200);
    }
    public function showByDeadStatus(Patients $patients)
    {
        //
        $findingData = Patients::where('status', 'dead')->first();
        $countData = Patients::where('status', 'dead')->count();
        $data = [
            'message' => 'Get Detail Resource',
            'total'=>$countData,
            'data' => $findingData,
        ];
        return response()->json($data, 200);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        // Validasi input
        $validatedData = $request->validate([
            'nama' => 'required|max:100',
            'nomor_telepon' => 'required|max:15',
            'alamat_pasien' => 'required|max:50',
            'status_pasien' => 'required',
            'tanggal_masuk' => 'required|date',
            'tanggal_keluar' => 'required|date',
        ]);

        
        $patient = Patients::find($id);
        if (!$patient) {
            
            return response()->json([
                'message' => 'Resource Not Found',
            ], 404);
        }
        // Update data pasien
        $patient->update([
            'name' => $validatedData['nama'],
            'phone' => $validatedData['nomor_telepon'],
            'address' => $validatedData['alamat_pasien'],
            'status' => $validatedData['status_pasien'],
            'in_date_at' => $validatedData['tanggal_masuk'],
            'out_date_at' => $validatedData['tanggal_keluar'],
        ]);

        
        return response()->json([
            'message' => 'Data pasien berhasil diperbarui.',
            'data' => $patient,
        ], 200);
    }


    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Patients $patients, $id)
    {
        //
        $patients = Patients::find($id);
        if (!$patients) {
            // Return error 404 jika resource tidak ditemukan
            return response()->json([
                'message' => 'Resource Not Found',
            ], 404);
        }
        $patients->delete();
        return response()->json('Resource is delete successfully', 200);
    }
}
