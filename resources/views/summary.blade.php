<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Air Peace</title>

    <!-- Fonts -->
    <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap" rel="stylesheet">
    <link href="/bootstrap/bootstrap-datepicker.css" rel="stylesheet">
    <link href="/bootstrap.css" rel="stylesheet">
    <link href="/all.css" rel="stylesheet">
    <link href="/fontawesome.css" rel="stylesheet">


    <!-- Styles -->
    <style>
        /*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */
        html {
            line-height: 1.15;
            -webkit-text-size-adjust: 100%
        }

        body {
            margin: 0
        }

        a {
            background-color: transparent
        }

        [hidden] {
            display: none
        }

        html {
            font-family: system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji;
            line-height: 1.5
        }

        *,
        :after,
        :before {
            box-sizing: border-box;
            border: 0 solid #e2e8f0
        }

        a {
            color: inherit;
            text-decoration: inherit
        }

        svg,
        video {
            display: block;
            vertical-align: middle
        }

        video {
            max-width: 100%;
            height: auto
        }

        .bg-white {
            --bg-opacity: 1;
            background-color: #fff;
            background-color: rgba(255, 255, 255, var(--bg-opacity))
        }

        .bg-gray-100 {
            --bg-opacity: 1;
            background-color: #f7fafc;
            background-color: rgba(247, 250, 252, var(--bg-opacity))
        }

        .border-gray-200 {
            --border-opacity: 1;
            border-color: #edf2f7;
            border-color: rgba(237, 242, 247, var(--border-opacity))
        }

        .border-t {
            border-top-width: 1px
        }

        .flex {
            display: flex
        }

        .grid {
            display: grid
        }

        .hidden {
            display: none
        }

        .items-center {
            align-items: center
        }

        .justify-center {
            justify-content: center
        }

        .font-semibold {
            font-weight: 600
        }

        .h-5 {
            height: 1.25rem
        }

        .h-8 {
            height: 2rem
        }

        .h-16 {
            height: 4rem
        }

        .text-sm {
            font-size: .875rem
        }

        .text-lg {
            font-size: 1.125rem
        }

        .leading-7 {
            line-height: 1.75rem
        }

        .mx-auto {
            margin-left: auto;
            margin-right: auto
        }

        .ml-1 {
            margin-left: .25rem
        }

        .mt-2 {
            margin-top: .5rem
        }

        .mr-2 {
            margin-right: .5rem
        }

        .ml-2 {
            margin-left: .5rem
        }

        .mt-4 {
            margin-top: 1rem
        }

        .ml-4 {
            margin-left: 1rem
        }

        .mt-8 {
            margin-top: 2rem
        }

        .ml-12 {
            margin-left: 3rem
        }

        .-mt-px {
            margin-top: -1px
        }

        .max-w-6xl {
            max-width: 72rem
        }

        .min-h-screen {
            min-height: 100vh
        }

        .overflow-hidden {
            overflow: hidden
        }

        .p-6 {
            padding: 1.5rem
        }

        .py-4 {
            padding-top: 1rem;
            padding-bottom: 1rem
        }

        .px-6 {
            padding-left: 1.5rem;
            padding-right: 1.5rem
        }

        .pt-8 {
            padding-top: 2rem
        }

        .fixed {
            position: fixed
        }

        .relative {
            position: relative
        }

        .top-0 {
            top: 0
        }

        .right-0 {
            right: 0
        }

        .shadow {
            box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .1), 0 1px 2px 0 rgba(0, 0, 0, .06)
        }

        .text-center {
            text-align: center
        }

        .text-gray-200 {
            --text-opacity: 1;
            color: #edf2f7;
            color: rgba(237, 242, 247, var(--text-opacity))
        }

        .text-gray-300 {
            --text-opacity: 1;
            color: #e2e8f0;
            color: rgba(226, 232, 240, var(--text-opacity))
        }

        .text-gray-400 {
            --text-opacity: 1;
            color: #cbd5e0;
            color: rgba(203, 213, 224, var(--text-opacity))
        }

        .text-gray-500 {
            --text-opacity: 1;
            color: #a0aec0;
            color: rgba(160, 174, 192, var(--text-opacity))
        }

        .text-gray-600 {
            --text-opacity: 1;
            color: #718096;
            color: rgba(113, 128, 150, var(--text-opacity))
        }

        .text-gray-700 {
            --text-opacity: 1;
            color: #4a5568;
            color: rgba(74, 85, 104, var(--text-opacity))
        }

        .text-gray-900 {
            --text-opacity: 1;
            color: #1a202c;
            color: rgba(26, 32, 44, var(--text-opacity))
        }

        .underline {
            text-decoration: underline
        }

        .antialiased {
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale
        }

        .w-5 {
            width: 1.25rem
        }

        .w-8 {
            width: 2rem
        }

        .w-auto {
            width: auto
        }

        .grid-cols-1 {
            grid-template-columns: repeat(1, minmax(0, 1fr))
        }

        @media (min-width:640px) {
            .sm\:rounded-lg {
                border-radius: .5rem
            }

            .sm\:block {
                display: block
            }

            .sm\:items-center {
                align-items: center
            }

            .sm\:justify-start {
                justify-content: flex-start
            }

            .sm\:justify-between {
                justify-content: space-between
            }

            .sm\:h-20 {
                height: 5rem
            }

            .sm\:ml-0 {
                margin-left: 0
            }

            .sm\:px-6 {
                padding-left: 1.5rem;
                padding-right: 1.5rem
            }

            .sm\:pt-0 {
                padding-top: 0
            }

            .sm\:text-left {
                text-align: left
            }

            .sm\:text-right {
                text-align: right
            }
        }

        @media (min-width:768px) {
            .md\:border-t-0 {
                border-top-width: 0
            }

            .md\:border-l {
                border-left-width: 1px
            }

            .md\:grid-cols-2 {
                grid-template-columns: repeat(2, minmax(0, 1fr))
            }
        }

        @media (min-width:1024px) {
            .lg\:px-8 {
                padding-left: 2rem;
                padding-right: 2rem
            }
        }

        @media (prefers-color-scheme:dark) {
            .dark\:bg-gray-800 {
                --bg-opacity: 1;
                background-color: #2d3748;
                background-color: rgba(45, 55, 72, var(--bg-opacity))
            }

            .dark\:bg-gray-900 {
                --bg-opacity: 1;
                background-color: #1a202c;
                background-color: rgba(26, 32, 44, var(--bg-opacity))
            }

            .dark\:border-gray-700 {
                --border-opacity: 1;
                border-color: #4a5568;
                border-color: rgba(74, 85, 104, var(--border-opacity))
            }

            .dark\:text-white {
                --text-opacity: 1;
                color: #fff;
                color: rgba(255, 255, 255, var(--text-opacity))
            }

            .dark\:text-gray-400 {
                --text-opacity: 1;
                color: #cbd5e0;
                color: rgba(203, 213, 224, var(--text-opacity))
            }
        }
    </style>

    <style>
        body {
            font-family: 'Nunito';
        }

        .form-signin {
            margin-top: 10%;
            ;
            // max-width: 330px;
            // padding: 15px;
        }

        .container {
            max-width: 960px;
        }

        .pricing-header {
            max-width: 700px;
        }

        .card-deck .card {
            min-width: 220px;
        }
    </style>
</head>

<body>
    <nav class="navbar navbar-expand-lg navbar-light" style="background-color: #e3f2fd;">
        <a class="navbar-brand" href="/"><img src="1536056986logo.png" width="50%;"></a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarColor03">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                    <a class="nav-link" href="/">Home <span class="sr-only">(current)</span></a>
                </li>
               

                <li class="nav-item">
                    <a class="nav-link" href="/login">Login</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="">Dashboard</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Help</a>
                </li>
            </ul>
        </div>
    </nav>
    {{-- @php
        dump($data2, $userInput, url("/js/currency.min.js"));
    @endphp --}}
    <div class="">
        <nav class="navbar navbar-expand-lg navbar-light" style="background-color: #e3f2fd;">
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarColor03">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item active">
                        <a class="nav-link" href="#">My booking <span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="">Advantage</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="">Career</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Gallery</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">About Us</a>
                    </li>
                </ul>
            </div>
        </nav>

    </div>

    <div class="container-fluid">
        
        <div class="row">
            <div role="main" class="col-md-12 ml-sm-auto col-lg-12 px-md-4">
                <div class="chartjs-size-monitor" style="position: absolute; left: 0px; top: 0px; right: 0px; bottom: 0px; overflow: hidden; pointer-events: none; visibility: hidden; z-index: -1;">
                    <div class="chartjs-size-monitor-expand" style="position:absolute;left:0;top:0;right:0;bottom:0;overflow:hidden;pointer-events:none;visibility:hidden;z-index:-1;">
                        <div style="position:absolute;width:1000000px;height:1000000px;left:0;top:0"></div>
                    </div>
                    <div class="chartjs-size-monitor-shrink" style="position:absolute;left:0;top:0;right:0;bottom:0;overflow:hidden;pointer-events:none;visibility:hidden;z-index:-1;">
                        <div style="position:absolute;width:200%;height:200%;left:0; top:0"></div>
                    </div>
                </div>
                <div class=" col-md-12 d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                    <div class="container">
                        <div class="row justify-content-md-center">
                            <div class="col">
                            </div>

                            <div class="col">
                            </div>
                        </div>
                    </div>
                </div>
                <!--START OF PARENT TAB DIV-->
                <div id="tabs">
                    <ul>
                        <li><a href="#tabs-4">Summary</a></li>

                    </ul>
                    <div id="tabs-4">

                        <div class="row">
                            <div class="col-md-8">
                                <div class="card mb-4 shadow-sm">
                                    <div class="card-header">
                                        <h4 class="my-0 font-weight-normal">Booking Summary</h4>
                                    </div>
                                    <div class="card-body">
                                        <div class="card-header">
                                            <div class="row">
                                                <div class="col-md-7 mb-3">
                                                    <h5>Lagos(LOS) - Abuja(ABJ)</h5>
                                                </div>
                                                <div class="col-md-5 mb-3">
                                                    <h5 style="text-align:right; color:green;">RESERVED</h5>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-md-6 mb-3">
                                                    <p><span>{{$userInput["depart"]}}</span> 
                                                    @if ($userInput["arrival"])
                                                    <span>- {{$userInput["arrival"]}}</span>
                                                    @endif
                                                    </p>
                                                </div>
                                                <div class="col-md-6 mb-3">
                                                    <p style="text-align:right;">
                                                        @php
                                                            echo(count($userInput["passengers"]))
                                                        @endphp 
                                                        
                                                        @if ($userInput["arrival"])
                                                        <span>Round Trip </span>
                                                        @endif
                                                        
                                                        
                                                        
                                                    @if (count($userInput["passengers"])>1)
                                                    Tickets
                                                    @else
                                                    Ticket
                                                    @endif
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-12 mb-3;">
                                                <h4>Traveller's Information</h4>
                                            </div>
                                        </div>

                                        @php
                                            $passengers = $userInput["passengers"];
                                        @endphp

                                        {{-- adult containers --}}
                                        @for ($i = 0; $i < $userInput["adult_no"]; $i++)
                                        @php
                                            $passenger = $passengers[$i];
                                        @endphp
                                        <div class="container">
                                            <div class="row">
                                                <div class="col" style="background-color:lightgray;">
                                                    <p>{{$passenger["first_name"]}}  {{$passenger["last_name"]}}</p>
                                                </div>
                                                <div class="col" style="background-color:lightgray;">
                                                    <p>Adult</p>
                                                </div>
                                                <div class="col" style="background-color:lightgray;">
                                                    <p>Ticket Number</p>
                                                    <p>{{$passenger["ticketId"]}}</p>
                                                </div>
                                                
                                            </div>
                                        </div>
                                        @endfor

                                        {{-- child containers --}}
                                        @for ($i = $userInput["adult_no"]; $i < $userInput["adult_no"] + $userInput["child_no"]; $i++)
                                        @php
                                            $passenger = $passengers[$i];
                                        @endphp
                                        <div class="container">
                                            <div class="row">
                                                <div class="col" style="background-color:lightgray;">
                                                    <p>{{$passenger["first_name"]}}  {{$passenger["last_name"]}}</p>
                                                </div>
                                                <div class="col" style="background-color:lightgray;">
                                                    <p>Child</p>
                                                </div>
                                                <div class="col" style="background-color:lightgray;">
                                                    <p>Ticket Number</p>
                                                    <p>{{$passenger["ticketId"]}}</p>
                                                </div>
                                                
                                            </div>
                                        </div>
                                        @endfor

                                        {{-- child containers --}}
                                        @for ($i = $userInput["adult_no"] + $userInput["child_no"]; $i < $userInput["adult_no"] + $userInput["child_no"] + $userInput["infants_no"] ; $i++)
                                        @php
                                            $passenger = $passengers[$i];
                                        @endphp
                                        <div class="container">
                                            <div class="row">
                                                <div class="col" style="background-color:lightgray;">
                                                    <p>{{$passenger["first_name"]}}  {{$passenger["last_name"]}}</p>
                                                </div>
                                                <div class="col" style="background-color:lightgray;">
                                                    <p>Infant</p>
                                                </div>
                                                <div class="col" style="background-color:lightgray;">
                                                    <p>Ticket Number</p>
                                                    <p>{{$passenger["ticketId"]}}</p>
                                                </div>
                                                
                                            </div>
                                        </div>
                                        @endfor
                                        
                                        {{-- <div class="container">
                                            <div class="row">
                                                <div class="col">
                                                    <p>Omotayo Chinwe</p>
                                                </div>
                                                <div class="col">
                                                    <p>Adult</p>
                                                </div>
                                                <div class="col">
                                                    <p>eTicket Number</p>
                                                    <p>0162600789356</p>
                                                </div>
                                                
                                            </div>
                                        </div>
                                        <div class="container">
                                            <div class="row">
                                                <div class="col" style="background-color:lightgray;">
                                                    <p>Omotayo Naomi</p>
                                                </div>
                                                <div class="col" style="background-color:lightgray;">
                                                    <p>Child</p>
                                                </div>
                                                <div class="col" style="background-color:lightgray;">
                                                    <p>eTicket Number</p>
                                                    <p>01678356271894</p>
                                                </div>
                                                
                                            </div>
                                        </div>
                                        <div class="container">
                                            <div class="row">
                                                <div class="col">
                                                    <p>Omotayo Othniel</p>
                                                </div>
                                                <div class="col">
                                                    <p>Infant</p>
                                                </div>
                                                <div class="col">
                                                    <p>eTicket Number</p>
                                                    <p>0162789345024</p>
                                                </div>
                                               
                                            </div>
                                        </div> --}}
                                        <hr>
                                        <div class="row">
                                            <div class="col-md-7 mb-3" style="background-color:lightgray; padding-top:20px;">
                                                <h4>{{$userInput["depart"]}} {{$userInput["formDeparture"]}} - Departure Non-Stop</h4>
                                            </div>
                                            <div class="col-md-5 mb-3" style="background-color:lightgray; padding-top:20px;">
                                                <h4>Travel Time: {{$userInput["flightDuration"]}}</h4>
                                            </div>
                                        </div>
                                        <hr>

                                        <div class="row">
                                            <div class="col-md-12 mb-3">
                                                <h6>{{$userInput["from"]}} - {{$userInput["to"]}}</h6>
                                                {{-- <h6>7:00am - 8:30am</h6> --}}
                                                <h6>Flight Number: {{$userInput["flightNo"]}}</h6>
                                                <h6>Fare Type: {{$userInput["formFlightType"]}}</h6>
                                            </div>
                                        </div>
                                        <hr>
                                        @if ($userInput["arrival"])
                                        <div id="arrival">
                                            <div class="row">
                                                <div class="col-md-7 mb-3" style="background-color:lightgray; padding-top:20px;">
                                                    <h4>{{$userInput["arrival"]}} {{$userInput["formInboundDeparture"]}} - Departure Non-Stop</h4>
                                                </div>
                                                <div class="col-md-5 mb-3" style="background-color:lightgray; padding-top:20px;">
                                                    <h4>Travel Time: {{$userInput["flightInboundDuration"]}}</h4>
                                                </div>
                                            </div>
                                            <hr>
                                            <div class="row">
                                                <div class="col-md-12 mb-3" style="padding-top:10px;">
                                                    <h6>{{$userInput["to"]}} - {{$userInput["from"]}}</h6>
                                                    
                                                    <h6>Flight Number: {{$userInput["flightInboundNo"]}}</h6>
                                                    <h6>Fare Type: {{$userInput["formInboundFlightType"]}}</h6>
                                                </div>
                                            </div>
                                        </div>
                                        @endif
                                    </div>
                                </div>
                            </div>
                            
                            <div class="col-md-4">
                                        
                                <div class="card mb-4 shadow-sm">
                                            <div class="card-header">
                                                <h4 class="my-0 font-weight-normal">Price Summary (Outbound)</h4>
                                            </div>
                                            <div class="card-body">
                                                <div class="container">
                                                    <div class="row">
                                                        {{-- adult containers --}}
                                                @for ($i = 0; $i < $userInput["adult_no"]; $i++)
                                                @php
                                                    $passenger = $passengers[$i];
                                                @endphp
                                                
                                                <div class="col-md-11">
                                                    <h6>Adult {{$i + 1}}</h6>
                                                    <h6>Total Fare: {{$userInput["formTotal"]}} NGN</h6>
                                                    <hr>
                                                </div>
                                                <hr>
                                                @endfor

                                                {{-- child containers --}}
                                                @for ($i = $userInput["adult_no"]; $i < $userInput["adult_no"] + $userInput["child_no"]; $i++)
                                                @php
                                                    $passenger = $passengers[$i];
                                                @endphp
                                                <div class="col-md-11">
                                                    <h6>Child {{($i - $userInput["adult_no"])  + 1}}</h6>
                                                    
                                                    <h6>Total Fare: {{$userInput["formTotal"]}} NGN</h6>
                                                    <hr>
                                                </div>
                                                <hr>
                                                @endfor

                                                {{-- infant containers --}}
                                                @for ($i = $userInput["adult_no"] + $userInput["child_no"]; $i < $userInput["adult_no"] + $userInput["child_no"] + $userInput["infants_no"] ; $i++)
                                                @php
                                                    $passenger = $passengers[$i];
                                                @endphp
                                                <div class="col-md-11">
                                                    <h6>Infant {{($i - ($userInput["adult_no"] + $userInput["child_no"]))  + 1}}</h6>
                                                    
                                                    <h6>Total Fare: {{$userInput["formTotal"]}} NGN</h6>
                                                    <hr>
                                                </div>
                                                <hr>
                                                @endfor   
                                                <div class="row">
                                                    <div class="col-md-12">
                                                        <h4>Total = 
                                                            <span id="formTotal">{{$userInput["totalFare"]}}</span> NGN</h4>
                                                    </div>
                                                    
                                                    <div class="col-md-12">
                                                        <button type="button" class="btn btn-lg btn-block btn-outline-primary">Print Ticket</button>
                                                    </div>
                                                </div>
                                        </div>
                                        </div>
                                    </div>
                            </div>

                            @if ($userInput["arrival"])
                            <div class="card mb-4 mt-5 shadow-sm">
                                <div class="card-header">
                                    <h4 class="my-0 font-weight-normal">Price Summary (Inbound)</h4>
                                </div>
                                <div class="card-body">
                                    <div class="container">
                                        <div class="row">
                                            {{-- adult containers --}}
                                    @for ($i = 0; $i < $userInput["adult_no"]; $i++)
                                    @php
                                        $passenger = $passengers[$i];
                                    @endphp
                                    
                                    <div class="col-md-11">
                                        <h6>Adult {{$i + 1}}</h6>
                                        <h6>Total Fare: {{$userInput["formInboundTotal"]}} NGN</h6>
                                        <hr>
                                    </div>
                                    <hr>
                                    @endfor
                            
                                    {{-- child containers --}}
                                    @for ($i = $userInput["adult_no"]; $i < $userInput["adult_no"] + $userInput["child_no"]; $i++)
                                    @php
                                        $passenger = $passengers[$i];
                                    @endphp
                                    <div class="col-md-11">
                                        <h6>Child {{($i - $userInput["adult_no"])  + 1}}</h6>
                                        
                                        <h6>Total Fare: {{$userInput["formInboundTotal"]}} NGN</h6>
                                        <hr>
                                    </div>
                                    <hr>
                                    @endfor
                            
                                    {{-- infant containers --}}
                                    @for ($i = $userInput["adult_no"] + $userInput["child_no"]; $i < $userInput["adult_no"] + $userInput["child_no"] + $userInput["infants_no"] ; $i++)
                                    @php
                                        $passenger = $passengers[$i];
                                    @endphp
                                    <div class="col-md-11">
                                        <h6>Infant {{($i - ($userInput["adult_no"] + $userInput["child_no"]))  + 1}}</h6>
                                        
                                        <h6>Total Fare: {{$userInput["formInboundTotal"]}} NGN</h6>
                                        <hr>
                                    </div>
                                    <hr>
                                    @endfor   
                                    <div class="row">
                                        <div class="col-md-12">
                                            <h4>Total = 
                                                <span id="formTotal">{{$userInput["totalInboundFare"]}}</span> NGN</h4>
                                        </div>
                                        
                                        <div class="col-md-12">
                                            <button type="button" class="btn btn-lg btn-block btn-outline-primary">Print Ticket</button>
                                        </div>
                                    </div>
                            </div>
                            @endif
                                        
                                </div>
            </div>
        </div>
    </div>
                                        

                                
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div class="row">
                        <div class="col-md-2">
                            <a href="{{url("/booking")}}">
                                <button type="button" style="" class="btn btn-success">Back to booking<i class=""></i></button>
                            </a>
                        </div>
                        <div class="col-md-8">
                        </div>
                        <div class="col-md-2">
                            {{-- <button type="button" class="btn btn-info" id="btnNext">Next <i class="fas fa-angle-right"></i></button> --}}
                        </div>
                    </div>
                </div>


                <!--END OF PARENT TAB DIV-->
            </div>

        </div>
    </div>
</body>
<script src="{{url("/js/currency.min.js")}}"></script>
<script src="{{url("/js/uuidv4.min.js")}}"></script>
<script src="/bootstrap/jquery.js"></script>
<script type="text/javascript" src="/bootstrap/js/popper.js"></script>
<script src="/bootstrap/bootstrap.js"></script>
<script src="/bootstrap/bootstrap-datepicker.js"></script>
<script>
    $('#datepicker').datepicker();
    $('#datepicker2').datepicker();

    $('#firstnexttab').click(function() {
        alert

    });
    
</script>
<link rel="stylesheet" href="http://code.jquery.com/ui/1.8.3/themes/base/jquery-ui.css" />
<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js"></script>
<script type="text/javascript" src="http://code.jquery.com/ui/1.8.3/jquery-ui.js"></script>
<script type="text/javascript">
    var currentTab = 0;
    $(function() {
        $("#tabs").tabs({
            select: function(e, i) {
                currentTab = i.index;
            }
        });
    });
    $("#btnNext").live("click", function() {
        var tabs = $('#tabs').tabs();
        var c = $('#tabs').tabs("length");
        currentTab = currentTab == (c - 1) ? currentTab : (currentTab + 1);
        tabs.tabs('select', currentTab);
        $("#btnPrevious").show();
        if (currentTab == (c - 1)) {
            $("#btnNext").hide();
        } else {
            $("#btnNext").show();
        }
    });
    $("#btnPrevious").live("click", function() {
        var tabs = $('#tabs').tabs();
        var c = $('#tabs').tabs("length");
        currentTab = currentTab == 0 ? currentTab : (currentTab - 1);
        tabs.tabs('select', currentTab);
        if (currentTab == 0) {
            $("#btnNext").show();
            $("#btnPrevious").hide();
        }
        if (currentTab < (c - 1)) {
            $("#btnNext").show();
        }
    });
</script>
<script>
    $(".price-button-inside1").click(function() {
        var amt = $(".amt").val();
        alert(amt);
    })
</script>

<script>
    // scripts added by tobecci
    // let formTotal = document.querySelector("#formTotal");
    // let totalPassengers = formTotal.getAttribute("data-count");
    // let totalPrice = formTotal.innerHTML;
    // totalPrice = currency(totalPrice,{"symbol":""}).multiply(totalPassengers).format();
    // formTotal.innerHTML = totalPrice;
    // console.log(uuidv4());

</script>

</html>