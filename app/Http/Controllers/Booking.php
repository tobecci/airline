<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class Booking extends Controller
{
    //
     public function index(Type $var = null, Request $req)
    {
        # code...
        $userInput = $req->input();
        //$req->session()->get('user');
       //$userInput= $req->session()->all();
      //  print_r($userInput);
        //$userInput = $req->input();
        // $userInput = json_encode($userInput);
        // dd($userInput);

        return view('booking',  ['userInput' => $userInput]);
    }
}
