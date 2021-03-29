<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class Booking extends Controller
{
    //
     public function index(Type $var = null, Request $request)
    {
        # code...
        $userInput = $request->input();
        //$req->session()->get('user');
       //$userInput= $req->session()->all();
      //  print_r($userInput);
        //$userInput = $req->input();
        // $userInput = json_encode($userInput);
        // dd($userInput);
        // $airpeace_controller = new AirpeaceSelectTablesController();
        // $airpeace_controller->index($userInput);
        $request->session()->put('user_input', $userInput);
        return redirect('booking');
    }
}
