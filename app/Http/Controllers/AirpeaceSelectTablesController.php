<?php

namespace App\Http\Controllers;

use App\Models\AirpeaceSelectTables;
use Illuminate\Http\Request;

class AirpeaceSelectTablesController extends Controller
{
    public function index()
    {
        $userInput = session('user_input');
        $data2 = [

            ['name' => 'yemi', 'age' => '28', 'school' => 'futa'],
            ['name' => 'yemi', 'age' => '28', 'school' => 'futa']
        ];
        
        
        return view('booking',['data2' => $data2, 'userInput' => $userInput]);
    }
}
