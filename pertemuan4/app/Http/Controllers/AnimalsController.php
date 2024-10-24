<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class AnimalsController extends Controller
{
    //
    private $animals = ['kucing', 'ayam', 'ikan'];
    public function index()
    {
        foreach ($this->animals as $animal) {
            echo ($animal . ',');

        }
        ;
    }
    public function store(Request $request)
    {
        array_push($this->animals, $request->nama);
        foreach ($this->animals as $animal) {
            echo ($animal . ',');

        }
    }
    public function update(Request $request, $id)
    {
        $this->animals[$id] = $request->nama;
        foreach ($this->animals as $animal) {
            echo ($animal . ',');

        }

    }
    public function destroy($id)
    {
        unset($this->animals[$id]);
        foreach ($this->animals as $animals) {
            echo ($animals . ',');
        }
    }
}
