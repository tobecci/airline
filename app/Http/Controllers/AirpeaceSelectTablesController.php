<?php

namespace App\Http\Controllers;

use App\Models\AirpeaceSelectTables;
use Illuminate\Http\Request;

class AirpeaceSelectTablesController extends Controller
{
    public function index(Request $request)
    {
        $userInput = session('user_input');
        // dump($request->session->all());
        $data2 = [

            ['name' => 'yemi', 'age' => '28', 'school' => 'futa'],
            ['name' => 'yemi', 'age' => '28', 'school' => 'futa']
        ];
        // dump($request->session()->all(),$userInput);
        return view('booking',['data2' => $data2, 'userInput' => $userInput]);
    }

    public function payment(Request $request)
    {
        $form_input = $request->input();
        $filtered_input = [];
        $temp_array = [];
        foreach($form_input as $index => $val){
            if($index != "_token" && $val != "0"){
                $index_exploded = explode("-",$index);
                $temp_array[$index_exploded[0]] = $val;
            }
            if($val == "0"){
                $temp_array["ticketId"] = "ticket-".uniqid();
                array_push($filtered_input,$temp_array);
                $temp_array = [];
            }
        }

        $userInput = session('user_input');
        $userInput["formDeparture"] = $form_input["formDeparture"];
        $userInput["formArrival"] = $form_input["formArrival"];
        $userInput["formFlightType"] = $form_input["formFlightType"];
        $userInput["formPrice"] = $form_input["formPrice"];
        $userInput["formTax"] = $form_input["formTax"];
        $userInput["formTotal"] = $form_input["formTotal"];
        $userInput["flightNo"] = $form_input["flightNo"];
        $userInput["flightDuration"] = $form_input["flightDuration"];
        $userInput["passengers"] = $filtered_input;
        $userInput["paymentId"] = "PAY-".uniqid();
        $userInput["orderId"] = "ORDER-".uniqid();
        $request->session()->put("user_input",$userInput);

        // dd("payment page");
        // dump($request->input(),$filtered_input,$userInput);
        return view('payment',["data" => $userInput]);
    }

    public function summary(Request $request)
    {
        $userInput = $request->session()->get('user_input');
        // dump("summary page",$userInput);
        return view('summary',['userInput' => $userInput]);
    }
}


