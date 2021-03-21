<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;


class Registration extends Controller
{
    //
	public function index(){
		return view('reg');
	}
	public function register_data(Request $request){
		return view('reg');
	}
}
