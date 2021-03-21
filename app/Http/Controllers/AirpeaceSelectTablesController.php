<?php

namespace App\Http\Controllers;

use App\Models\AirpeaceSelectTables;
use Illuminate\Http\Request;

class AirpeaceSelectTablesController extends Controller
{
    public function index()
    {
        $data2 = [

            ['name' => 'yemi', 'age' => '28', 'school' => 'futa'],
            ['name' => 'yemi', 'age' => '28', 'school' => 'futa']


        ];
        
       return view('select',['data2' => $data2]);
    }
}
