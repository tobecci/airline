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
            <nav id="sidebarMenu" class="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
                <div>
                    <form action="/booking" method="post" id="bookingform">
                    @csrf
                        <h4 class="my-0 font-weight-normal">Refine Search</h4>
                        <input type="hidden" name="_token" value="{{ csrf_token() }}" />
                        <div>
                            <label for="state">Currency</label>
                            <select class="custom-select d-block w-100" name="currency" id="currency" required="">
                                <option value="">Choose...</option>
                                <option <?php echo ($userInput['currency'] == 'Nigerian Naira') ? "selected" : ""; ?>>Nigerian Naira </option>
                                <option <?php echo ($userInput['currency'] == 'Ghana Cedis') ? "selected" : ""; ?>>Ghana Cedis</option>
                                <option <?php echo ($userInput['currency'] == 'US Dollar') ? "selected" : ""; ?>>US Dollar</option>
                                <option <?php echo ($userInput['currency'] == 'Gambia Dalasi') ? "selected" : ""; ?>>Gambia Dalasi</option>
                                <option <?php echo ($userInput['currency'] == 'South African Rand') ? "selected" : ""; ?>>South African Rand</option>
                                <option <?php echo ($userInput['currency'] == 'Sierra Leonean leone') ? "selected" : ""; ?>>Sierra Leonean leone</option>
                                <option <?php echo ($userInput['currency'] == 'Senegalese OXF') ? "selected" : ""; ?>>Senegalese OXF</option>
                                <option <?php echo ($userInput['currency'] == 'UAE Dirhams') ? "selected" : ""; ?>>UAE Dirhams</option>
                                <option <?php echo ($userInput['currency'] == 'Liberian dollar') ? "selected" : ""; ?>>Liberian dollar</option>
                            </select>
                        </div>
                        <div class="">
                            <label for="from">From</label>
                            <select class="custom-select d-block w-100" name="from" id="from" required="">
                                <option value="">Choose...</option>
                                <option <?php echo ($userInput['from'] == 'Abuja (ABV)') ? "selected" : ""; ?>>Abuja (ABV)</option>
                                <option <?php echo ($userInput['from'] == 'Acrra (ACC)') ? "selected" : ""; ?>>Acrra (ACC)</option>
                                <option <?php echo ($userInput['from'] == 'Akure (AKR)') ? "selected" : ""; ?>>Akure (AKR)</option>
                                <option <?php echo ($userInput['from'] == 'Asaba (ABB)') ? "selected" : ""; ?>>Asaba (ABB)</option>
                                <option <?php echo ($userInput['from'] == 'Banjul (BJL)') ? "selected" : ""; ?>>Banjul (BJL)</option>
                                <option <?php echo ($userInput['from'] == 'Benin (BNI)') ? "selected" : ""; ?>>Benin (BNI)</option>
                                <option <?php echo ($userInput['from'] == 'Calabar (CBQ)') ? "selected" : ""; ?>>Calabar (CBQ)</option>
                                <option <?php echo ($userInput['from'] == 'Dakar (DSS)') ? "selected" : ""; ?>>Dakar (DSS)</option>
                                <option <?php echo ($userInput['from'] == 'Dubai Bus Station (XNB)') ? "selected" : ""; ?>>Dubai Bus Station (XNB)</option>
                                <option <?php echo ($userInput['from'] == 'Enugu (ENU)') ? "selected" : ""; ?>>Enugu (ENU)</option>
                                <option <?php echo ($userInput['from'] == 'Freetown (FNA)') ? "selected" : ""; ?>>Freetown (FNA)</option>
                                <option <?php echo ($userInput['from'] == 'Johannesburg (JNB)') ? "selected" : ""; ?>>Johannesburg (JNB)</option>
                                <option <?php echo ($userInput['from'] == 'Kanuda (KAD)') ? "selected" : ""; ?>>Kanuda (KAD)</option>
                                <option <?php echo ($userInput['from'] == 'Kano (KAN)') ? "selected" : ""; ?>>Kano (KAN)</option>
                                <option <?php echo ($userInput['from'] == 'Lagos (LOS)') ? "selected" : ""; ?>>Lagos (LOS)</option>
                                <option <?php echo ($userInput['from'] == 'Makurdi (MDI)') ? "selected" : ""; ?>>Makurdi (MDI)</option>
                                <option <?php echo ($userInput['from'] == 'Owerri (QOW)') ? "selected" : ""; ?>>Owerri (QOW)</option>
                                <option <?php echo ($userInput['from'] == 'Port Harcourt (PHC)') ? "selected" : ""; ?>>Port Harcourt (PHC)</option>
                                <option <?php echo ($userInput['from'] == 'Sharjah (SHJ)') ? "selected" : ""; ?>>Sharjah (SHJ)</option>
                                <option <?php echo ($userInput['from'] == 'Uyo (QUO)') ? "selected" : ""; ?>>Uyo (QUO)</option>
                                <option <?php echo ($userInput['from'] == 'Warri (QRW)') ? "selected" : ""; ?>>Warri (QRW)</option>
                                <option <?php echo ($userInput['from'] == 'Yola (YOL)') ? "selected" : ""; ?>>Yola (YOL)</option>
                            </select>
                            <div class="invalid-feedback">
                                Please select a valid country.
                            </div>
                        </div>
                        <br>
                        <div class="">
                            <label for="state">To</label>
                            <select class="custom-select d-block w-100" name="to" id="to" required="">
                                <option value="">Choose...</option>
                                <option <?php echo ($userInput['to'] == 'Abuja (ABV)') ? "selected" : ""; ?>>Abuja (ABV)</option>
                                <option <?php echo ($userInput['to'] == 'Acrra (ACC)') ? "selected" : ""; ?>>Acrra (ACC)</option>
                                <option <?php echo ($userInput['to'] == 'Akure (AKR)') ? "selected" : ""; ?>>Akure (AKR)</option>
                                <option <?php echo ($userInput['to'] == 'Asaba (ABB)') ? "selected" : ""; ?>>Asaba (ABB)</option>
                                <option <?php echo ($userInput['to'] == 'Banjul (BJL)') ? "selected" : ""; ?>>Banjul (BJL)</option>
                                <option <?php echo ($userInput['to'] == 'Benin (BNI)') ? "selected" : ""; ?>>Benin (BNI)</option>
                                <option <?php echo ($userInput['to'] == 'Calabar (CBQ)') ? "selected" : ""; ?>>Calabar (CBQ)</option>
                                <option <?php echo ($userInput['to'] == 'Dakar (DSS)') ? "selected" : ""; ?>>Dakar (DSS)</option>
                                <option <?php echo ($userInput['to'] == 'Dubai Bus Station (XNB)') ? "selected" : ""; ?>>Dubai Bus Station (XNB)</option>
                                <option <?php echo ($userInput['to'] == 'Enugu (ENU)') ? "selected" : ""; ?>>Enugu (ENU)</option>
                                <option <?php echo ($userInput['to'] == 'Freetown (FNA)') ? "selected" : ""; ?>>Freetown (FNA)</option>
                                <option <?php echo ($userInput['to'] == 'Johannesburg (JNB)') ? "selected" : ""; ?>>Johannesburg (JNB)</option>
                                <option <?php echo ($userInput['to'] == 'Kaduna (KAD)') ? "selected" : ""; ?>>Kaduna (KAD) </option>
                                <option <?php echo ($userInput['to'] == 'Kano (KAN)') ? "selected" : ""; ?>>Kano (KAN)</option>
                                <option <?php echo ($userInput['to'] == 'Lagos (LOS)') ? "selected" : ""; ?>>Lagos (LOS)</option>
                                <option <?php echo ($userInput['to'] == 'Makurdi (MDI)') ? "selected" : ""; ?>>Makurdi (MDI)</option>
                                <option <?php echo ($userInput['to'] == 'Owerri (QOW)') ? "selected" : ""; ?>>Owerri (QOW)</option>
                                <option <?php echo ($userInput['to'] == 'Port Harcourt(PHC)') ? "selected" : ""; ?>>Port Harcourt(PHC)</option>
                                <option <?php echo ($userInput['to'] == 'Sharjah (SHJ)') ? "selected" : ""; ?>>Sharjah (SHJ)</option>
                                <option <?php echo ($userInput['to'] == 'Uyo (QUO)') ? "selected" : ""; ?>>Uyo (QUO)</option>
                                <option <?php echo ($userInput['to'] == 'Warri (QRW)') ? "selected" : ""; ?>>Warri (QRW)</option>
                                <option <?php echo ($userInput['to'] == 'Yola (YOL)') ? "selected" : ""; ?>>Yola (YOL)</option>
                            </select>
                            <div class="invalid-feedback">
                                Please provide a valid state.
                            </div>
                        </div>
                        <br>
                        <div class="">
                            <div class="">
                                <button type="button" id="returnButton" class="btn btn-md btn-block btn-info">Return</button>
                            </div>
                            <br>
                            <div class="">
                                <button type="button" id="oneWayButton" class="btn btn-md btn-block btn-primary">One Way</button>
                            </div>
                        </div>
                        <br>
                        <div>
                            <div>
                                <div class="input-group mb-2">
                                    <div class="input-group-prepend">
                                        <div class="input-group-text">
                                            <i class="fas fa-calendar"></i>
                                        </div>
                                    </div>
                                    <input type="text" class="form-control" name="depart" value="{{$userInput['depart']}}" id="datepicker" placeholder="Departure">
                                </div>
                            </div>
                            <div>
                                <div class="input-group mb-2" id="arrival-input">
                                    <div class="input-group-prepend">
                                        <div class="input-group-text">
                                            <i class="fas fa-calendar"></i>
                                        </div>
                                    </div>
                                    <input type="text" class="form-control" name="arrival" value="{{$userInput['arrival']}}" id="datepicker2" placeholder="Arrival">
                                </div>
                            </div>
                        </div>
                        <div>
                            <div>
                                <label for="adult">Adult (+12yrs)</label>
                                <select class="custom-select d-block w-100" id="adult" name="adult_no" required="">
                                    <option value="">Choose...</option>
                                    <option @if($userInput["adult_no"] == "0") selected @endif  value="0">0 Adult</option>
                                    <option @if($userInput["adult_no"] == "1") selected @endif value="1">1 Adult</option>
                                    <option @if($userInput["adult_no"] == "2") selected @endif  value="2">2 Adults</option>
                                    <option @if($userInput["adult_no"] == "3") selected @endif  value="3">3 Adults</option>
                                    <option @if($userInput["adult_no"] == "4") selected @endif  value="4">4 Adults</option>
                                    <option @if($userInput["adult_no"] == "5") selected @endif  value="5">5 Adults</option>
                                    <option @if($userInput["adult_no"] == "6") selected @endif  value="6">6 Adults</option>
                                    <option @if($userInput["adult_no"] == "7") selected @endif  value="7">7 Adults</option>
                                    <option @if($userInput["adult_no"] == "8") selected @endif  value="8">8 Adults</option>
                                    <option @if($userInput["adult_no"] == "9") selected @endif  value="9">9 Adults</option>
                                </select>
                                <div class="invalid-feedback">
                                    Please select a valid country.
                                </div>
                            </div>
                            <div>
                                <label for="child_no">Children (2-11yrs)</label>
                                <select class="custom-select d-block w-100" id="child_no" name="child_no">
                                    <option value="">Choose...</option>
                                    <option <?php echo ($userInput['child_no'] == '0') ? "selected" : ""; ?> value="0">0 Child</option>
                                    <option <?php echo ($userInput['child_no'] == '1') ? "selected" : ""; ?> value="1">1 Child</option>
                                    <option <?php echo ($userInput['child_no'] == '2') ? "selected" : ""; ?> value="2">2 Children</option>
                                    <option <?php echo ($userInput['child_no'] == '3') ? "selected" : ""; ?> value="3">3 Children</option>
                                    <option <?php echo ($userInput['child_no'] == '4') ? "selected" : ""; ?> value="4">4 Children</option>
                                    <option <?php echo ($userInput['child_no'] == '5') ? "selected" : ""; ?> value="5">5 Children</option>
                                    <option <?php echo ($userInput['child_no'] == '6') ? "selected" : ""; ?> value="6">6 Children</option>
                                </select>
                                <div class="invalid-feedback">
                                    Please provide a valid state.
                                </div>
                            </div>
                            <div>
                                <label for="state">Infants(<2yrs)</label> <select class="custom-select d-block w-100" id="state" name="infants_no">
                                        <option value="">Choose...</option>
                                        <option <?php echo ($userInput['infants_no'] == '0') ? "selected" : ""; ?> value="0">0 Infant</option>
                                        <option <?php echo ($userInput['infants_no'] == '1') ? "selected" : ""; ?> value="1">1 Infant</option>
                                        <option <?php echo ($userInput['infants_no'] == '2') ? "selected" : ""; ?> value="2">2 Infants</option>
                                        <option <?php echo ($userInput['infants_no'] == '3') ? "selected" : ""; ?> value="3">3 Infants</option>
                                        <option <?php echo ($userInput['infants_no'] == '4') ? "selected" : ""; ?> value="4">4 Infants</option>
                                        <option <?php echo ($userInput['infants_no'] == '5') ? "selected" : ""; ?> value="5">5 Infants</option>
                                        <option <?php echo ($userInput['infants_no'] == '6') ? "selected" : ""; ?> value="6">6 Infants</option>
                                        </select>
                                        <div class="invalid-feedback">
                                            Please provide a valid state.
                                        </div>
                            </div>
                        </div>
                        <hr>
                        <button type="submit" class="btn btn-md btn-block btn-info">Search Again</button>
                    </form>
                </div>
                <div>
                </div>
                <div>
                    <br>
                    <h4 class="my-0 font-weight-normal">Basket</h4>
                    <p><strong>No of Adults:</strong> 
                    {{ $userInput['adult_no'] }}
                    </p>
                    <p><strong>No of Children:</strong> 
                    {{ $userInput['child_no'] }}
                    </p>
                    <p><strong>No of Infants:</strong> 
                    {{ $userInput['infants_no'] }}
                    </p>
                    <hr>
                    
                    <div class="outbound">
                        <h4 class="my-2 font-weight-normal">OUTBOUND</h4>
                        <p><strong>{{$userInput['from']}} to {{$userInput['to']}} Flight No:</strong> <span id="sidebar--flightNo">P47126</span> </p>
                        <p><strong>Departure Time: </strong><span id="sidebar--departure">{{$userInput['depart']}}</span></p>
                        @if($userInput['arrival'] !='')
                        <p><strong>Arrival Time: </strong><span id="sidebar--arrival">{{$userInput['arrival']}}</span></p>
                        @elseif($userInput['arrival'] =='')
                        <p><strong>Arrival Time: </strong><span id="sidebar--arrival"></span></p>
                        @endif
                        <p><strong>Fare Type: </strong><span id="sidebar--fare-type">Economy Flexi Domestic</span></p>
                        <p><strong>Duration: </strong><span id="sidebar--duration">1hr 30mins</span></p>
                        <p><strong>Net Fare: </strong><span id="sidebar--price">37,000.00</span>NGN</p>
                        <p><strong>Inc Tax: </strong><span id="sidebar--tax">23,000.00</span>NGN</p>
                        <p><strong>Total Fare: </strong><span id="sidebar--total">60,000.00</span>NGN</p>
                        <hr>
                        <h4>Summary:</h4>
                        <p><strong>Flights Total: </strong><span id="sidebar--total1">140,000</span>NGN</p>
                        <br>
                    </div>

                    @if ($userInput["arrival"])
                    <div id="inbound-flight" class="inbound">
                        <h4 class="my-2 font-weight-normal">INBOUND</h4>
                        <p><strong>{{$userInput['to']}} to {{$userInput['from']}} Flight No:</strong> <span id="sidebar--inbound--flightNo">P47126</span> </p>
                        <p><strong>Departure Time: </strong><span id="sidebar--inbound--departure">{{$userInput['depart']}}</span></p>
                        @if($userInput['arrival'] !='')
                        <p><strong>Arrival Time: </strong><span id="sidebar--inbound--arrival">{{$userInput['arrival']}}</span></p>
                        @elseif($userInput['arrival'] =='')
                        <p><strong>Arrival Time: </strong><span id="sidebar--inbound--arrival"></span></p>
                        @endif
                        <p><strong>Fare Type: </strong><span id="sidebar--inbound--fare-type">Economy Flexi Domestic</span></p>
                        <p><strong>Duration: </strong><span id="sidebar--inbound--duration">1hr 30mins</span></p>
                        <p><strong>Net Fare: </strong><span id="sidebar--inbound--price">37,000.00</span>NGN</p>
                        <p><strong>Inc Tax: </strong><span id="sidebar--inbound--tax">23,000.00</span>NGN</p>
                        <p><strong>Total Fare: </strong><span id="sidebar--inbound--total">60,000.00</span>NGN</p>
                        <hr>
                        <h4>Summary:</h4>
                        <p><strong>Flights Total: </strong><span id="sidebar--inbound--total1">140,000</span>NGN</p>
                        <br>
                    </div>
                    @endif
                </div>
                <div>
                    <br>
                    <h4 class="my-0 font-weight-normal">Rules</h4>
                    <p>Journey 1: {{$userInput['from']}} to {{$userInput['to']}} (Economy Flexi Domestic)</p>
                    <ul>
                        <li>1 year validity</li>
                        <li>Allowed baggage 20kg</li>
                        <li>Refundable</li>
                    </ul>
                    <br>
                </div>
                <div>
                </div>
            </nav>
            <div role="main" class="col-md-9 ml-sm-auto col-lg-10 px-md-4">
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
                        <li><a href="#tabs-1">Select</a></li>
                        <li><a href="#tabs-2">Option</a></li>
                        <li><a href="#tabs-3">Pay</a></li>

                    </ul>

                    <div id="tabs-1">
                        <div class="tab-pane fade  show active" id="nav-select" role="tabpanel" aria-labelledby="nav-select-tab">
                            <div class="card">
                                <h5 class="card-header">Outbound: {{$userInput['from']}} to {{$userInput['to']}}</h5>
                                <div class="card-body">
                                    <div class="container">
                                        <div class="row">
                                            <div class="col">
                                            </div>
                                            <div class="col-md-9">
                                                <nav>
                                                    <div class="nav nav-tabs" id="nav-tab" role="tablist">
                                                        <a class="nav-link active" id="nav-mon-tab" data-toggle="tab" href="#nav-mon" role="tab" aria-controls="nav-mon" aria-selected="true">Mon</a>
                                                        <a class="nav-link" id="nav-tue-tab" data-toggle="tab" href="#nav-tue" role="tab" aria-controls="nav-tue" aria-selected="false">Tue</a>
                                                        <a class="nav-link" id="nav-wed-tab" data-toggle="tab" href="#nav-wed" role="tab" aria-controls="nav-wed" aria-selected="false">Wed</a>
                                                        <a class="nav-link" id="nav-thurs-tab" data-toggle="tab" href="#nav-thurs" role="tab" aria-controls="nav-thurs" aria-selected="false">Thurs</a>
                                                        <a class="nav-link" id="nav-fri-tab" data-toggle="tab" href="#nav-fri" role="tab" aria-controls="nav-fri" aria-selected="false">Fri</a>
                                                        <a class="nav-link" id="nav-sat-tab" data-toggle="tab" href="#nav-sat" role="tab" aria-controls="nav-sat" aria-selected="false">Sat</a>
                                                        <a class="nav-link" id="nav-sun-tab" data-toggle="tab" href="#nav-sun" role="tab" aria-controls="nav-sun" aria-selected="false">Sun</a>
                                                    </div>
                                                </nav>
                                            </div>
                                            <div class="col">
                                            </div>
                                        </div>
                                    </div>

                                   

                                    <div class="tab-content" id="nav-tabContent">
                                        <div class="tab-pane fade show active" id="nav-mon" role="tabpanel" aria-labelledby="nav-mon-tab">
                                            <br>
                                            <table class="table table-striped">
                                                <tbody>
                                                    <tr>
                                                        <th scope="row">
                                                            <h5>Flight Information</h5>
                                                        </th>

                                                        <th>
                                                        </th>

                                                        <th>
                                                        </th>

                                                        <th>
                                                            <h5>Economy Non Flexi Regional</h5>
                                                        </th>

                                                        <th>
                                                            <h5>Economy Flexi Regional</h5>
                                                        </th>

                                                        <th>
                                                            <h5>Business</h5>
                                                        </th>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">
                                                            <h5>4:30 am</h5>
                                                            <h6>Monday 11 Dec</h6>
                                                            <h5>{{$userInput['from']}}</h5>
                                                        </th>
                                                        <td>
                                                            <h5>1hr 15min</h5>
                                                            <p><i class="fas fa-map-marker-alt"></i> <i class="fas fa-arrow-right"></i> <i class="fas fa-plane"></i> Non-stop </p>
                                                            <h6>PA47120</h6>
                                                        </td>
                                                        <td>
                                                            <h5>5:45 am</h5>
                                                            <h6>Monday 11 Dec</h6>
                                                            <h5>{{$userInput['to']}}</h5>
                                                        </td>
                                                        <td>
                                                            <h6 style="font-weight:bold;">64,237.00</h6>
                                                            <h5>NGN</h5>
                                                            <button class="priceButton price-button-inside false" style="font-family: inherit;font-size: inherit;line-height: inherit; border: 1px solid #34000D;border-radius: 5px;background-color: #fff;color: #34000D;padding: 5px 10px;text-align: center;text-decoration: none;display: inline-block;cursor: pointer;margin-top: 10px;">SELECT</button>
                                                        </td>
                                                        <td>
                                                            <input type="text" value="30" class="amt">
                                                            <h6 style="font-weight:bold;">89,000.00</h6>
                                                            <h5>NGN</h5>
                                                            <button class="priceButton price-button-inside false" style="font-family: inherit;font-size: inherit;line-height: inherit; border: 1px solid #34000D;border-radius: 5px;background-color: #fff;color: #34000D;padding: 5px 10px;text-align: center;text-decoration: none;display: inline-block;cursor: pointer;margin-top: 10px;">SELECT</button>
                                                        </td>
                                                        <td>
                                                            <br>
                                                            <br>
                                                            <h6 style="font-weight:bold;">Sold Out</h6>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">
                                                            <h5>10:30 am</h5>
                                                            <h6>Monday 11 Dec</h6>
                                                            <h5>{{$userInput['from']}}</h5>
                                                        </th>
                                                        <td>
                                                            <h5>1hr 15min</h5>
                                                            <p><i class="fas fa-map-marker-alt"></i> <i class="fas fa-arrow-right"></i> <i class="fas fa-plane"></i> Non-stop </p>
                                                            <h6>PA47120</h6>
                                                        </td>
                                                        <td>
                                                            <h5>11:45 am</h5>
                                                            <h6>Monday 11 Dec</h6>
                                                            <h5>{{$userInput['to']}}</h5>
                                                        </td>
                                                        <td>
                                                            <h6 style="font-weight:bold;">52,400.00</h6>
                                                            <h5>NGN</h5>
                                                            <button class="priceButton price-button-inside false" style="font-family: inherit;font-size: inherit;line-height: inherit; border: 1px solid #34000D;border-radius: 5px;background-color: #fff;color: #34000D;padding: 5px 10px;text-align: center;text-decoration: none;display: inline-block;cursor: pointer;margin-top: 10px;">SELECT</button>
                                                        </td>
                                                        <td>
                                                            <h6 style="font-weight:bold;">75,500.00</h6>
                                                            <h5>NGN</h5>
                                                            <button class="priceButton price-button-inside false" style="font-family: inherit;font-size: inherit;line-height: inherit; border: 1px solid #34000D;border-radius: 5px;background-color: #fff;color: #34000D;padding: 5px 10px;text-align: center;text-decoration: none;display: inline-block;cursor: pointer;margin-top: 10px;">SELECT</button>
                                                        </td>
                                                        <td>
                                                            <h6 style="font-weight:bold;">80,000.00</h6>
                                                            <h5>NGN</h5>
                                                            <button class="priceButton price-button-inside false" style="font-family: inherit;font-size: inherit;line-height: inherit; border: 1px solid #34000D;border-radius: 5px;background-color: #fff;color: #34000D;padding: 5px 10px;text-align: center;text-decoration: none;display: inline-block;cursor: pointer;margin-top: 10px;">SELECT</button>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">
                                                            <h5>9:15 pm</h5>
                                                            <h6>Monday 11 Dec</h6>
                                                            <h5>{{$userInput['from']}}</h5>
                                                        </th>
                                                        <td>
                                                            <h5>1hr 15min</h5>
                                                            <p><i class="fas fa-map-marker-alt"></i> <i class="fas fa-arrow-right"></i> <i class="fas fa-plane"></i> Non-stop </p>
                                                            <h6>PA47120</h6>
                                                        </td>
                                                        <td>
                                                            <h5>10:30 pm</h5>
                                                            <h6>Monday 11 Dec</h6>
                                                            <h5>{{$userInput['to']}}</h5>
                                                        </td>
                                                        <td>
                                                            <br>
                                                            <br>
                                                            <h6 style="font-weight:bold;">Sold Out</h6>
                                                        </td>
                                                        <td>
                                                            <h6 style="font-weight:bold;">39,400.00</h6>
                                                            <h5>NGN</h5>
                                                            <button class="priceButton price-button-inside false" style="font-family: inherit;font-size: inherit;line-height: inherit; border: 1px solid #34000D;border-radius: 5px;background-color: #fff;color: #34000D;padding: 5px 10px;text-align: center;text-decoration: none;display: inline-block;cursor: pointer;margin-top: 10px;">SELECT</button>
                                                        </td>
                                                        <td>
                                                            <br>
                                                            <br>
                                                            <h6 style="font-weight:bold;">Sold Out</h6>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                        <div class="tab-pane fade" id="nav-tue" role="tabpanel" aria-labelledby="nav-tue-tab">
                                            <br>
                                            <table class="table table-striped">
                                                <tbody>
                                                    <tr>
                                                        <th scope="row">
                                                            <h5>Flight Information</h5>
                                                        </th>
                                                        <th>
                                                        </th>
                                                        <th>
                                                        </th>
                                                        <th>
                                                            <h5>Economy Non Flexi Regional</h5>
                                                        </th>
                                                        <th>
                                                            <h5>Economy Flexi Regional</h5>
                                                        </th>
                                                        <th>
                                                            <h5>Business</h5>
                                                        </th>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">
                                                            <h5>10:00 am</h5>
                                                            <h6>Tuesday 12 Dec</h6>
                                                            <h5>{{$userInput['from']}}</h5>
                                                        </th>
                                                        <td>
                                                            <h5>1hr 15min</h5>
                                                            <p><i class="fas fa-map-marker-alt"></i> <i class="fas fa-arrow-right"></i> <i class="fas fa-plane"></i> Non-stop </p>
                                                            <h6>P47004</h6>
                                                        </td>
                                                        <td>
                                                            <h5>11:15 am</h5>
                                                            <h6>Tuesday 12 Dec</h6>
                                                            <h5>{{$userInput['to']}}</h5>
                                                        </td>
                                                        <td>
                                                            <h6 style="font-weight:bold;">49,400.00</h6>
                                                            <h5>NGN</h5>
                                                            <button class="priceButton price-button-inside false" style="font-family: inherit;font-size: inherit;line-height: inherit; border: 1px solid #34000D;border-radius: 5px;background-color: #fff;color: #34000D;padding: 5px 10px;text-align: center;text-decoration: none;display: inline-block;cursor: pointer;margin-top: 10px;">SELECT</button>
                                                        </td>
                                                        <td>
                                                            <h6 style="font-weight:bold;">58,000.00</h6>
                                                            <h5>NGN</h5>
                                                            <button class="priceButton price-button-inside false" style="font-family: inherit;font-size: inherit;line-height: inherit; border: 1px solid #34000D;border-radius: 5px;background-color: #fff;color: #34000D;padding: 5px 10px;text-align: center;text-decoration: none;display: inline-block;cursor: pointer;margin-top: 10px;">SELECT</button>
                                                        </td>
                                                        <td>
                                                            <h6 style="font-weight:bold;">61,000.00</h6>
                                                            <h5>NGN</h5>
                                                            <button class="priceButton price-button-inside false" style="font-family: inherit;font-size: inherit;line-height: inherit; border: 1px solid #34000D;border-radius: 5px;background-color: #fff;color: #34000D;padding: 5px 10px;text-align: center;text-decoration: none;display: inline-block;cursor: pointer;margin-top: 10px;">SELECT</button>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">
                                                            <h5>1:30 pm</h5>
                                                            <h6>Tuesday 12 Dec</h6>
                                                            <h5>{{$userInput['from']}}</h5>
                                                        </th>
                                                        <td>
                                                            <h5>1hr 15min</h5>
                                                            <p><i class="fas fa-map-marker-alt"></i> <i class="fas fa-arrow-right"></i> <i class="fas fa-plane"></i> Non-stop </p>
                                                            <h6>P47004</h6>
                                                        </td>
                                                        <td>
                                                            <h5>2:45 pm</h5>
                                                            <h6>Tuesday 12 Dec</h6>
                                                            <h5>{{$userInput['to']}}</h5>
                                                        </td>
                                                        <td>
                                                            <br>
                                                            <br>
                                                            <h6 style="font-weight:bold;">Sold Out</h6>
                                                        </td>
                                                        <td>
                                                            <h6 style="font-weight:bold;">28,700.00</h6>
                                                            <h5>NGN</h5>
                                                            <button class="priceButton price-button-inside false" style="font-family: inherit;font-size: inherit;line-height: inherit; border: 1px solid #34000D;border-radius: 5px;background-color: #fff;color: #34000D;padding: 5px 10px;text-align: center;text-decoration: none;display: inline-block;cursor: pointer;margin-top: 10px;">SELECT</button>
                                                        </td>
                                                        <td>
                                                            <h6 style="font-weight:bold;">33,830.00</h6>
                                                            <h5>NGN</h5>
                                                            <button class="priceButton price-button-inside false" style="font-family: inherit;font-size: inherit;line-height: inherit; border: 1px solid #34000D;border-radius: 5px;background-color: #fff;color: #34000D;padding: 5px 10px;text-align: center;text-decoration: none;display: inline-block;cursor: pointer;margin-top: 10px;">SELECT</button>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">
                                                            <h5>7:30 pm</h5>
                                                            <h6>Tuesday 12 Dec</h6>
                                                            <h5>{{$userInput['from']}}</h5>
                                                        </th>
                                                        <td>
                                                            <h5>1hr 15min</h5>
                                                            <p><i class="fas fa-map-marker-alt"></i> <i class="fas fa-arrow-right"></i> <i class="fas fa-plane"></i> Non-stop </p>
                                                            <h6>P47004</h6>
                                                        </td>
                                                        <td>
                                                            <h5>8:45 pm</h5>
                                                            <h6>Tuesday 12 Dec</h6>
                                                            <h5>{{$userInput['to']}}</h5>
                                                        </td>
                                                        <td>
                                                            <br>
                                                            <br>
                                                            <h6 style="font-weight:bold;">Sold Out</h6>
                                                        </td>
                                                        <td>
                                                            <br>
                                                            <br>
                                                            <h6 style="font-weight:bold;">Sold Out</h6>
                                                        </td>
                                                        <td>
                                                            <br>
                                                            <br>
                                                            <h6 style="font-weight:bold;">Sold Out</h6>
                                                        <td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                        <div class="tab-pane fade" id="nav-wed" role="tabpanel" aria-labelledby="nav-wed-tab">
                                            <br>
                                            <table class="table table-striped">
                                                <tbody>
                                                    <tr>
                                                        <th scope="row">
                                                            <h5>Flight Information</h5>
                                                        </th>
                                                        <th>
                                                        </th>
                                                        <th>
                                                        </th>
                                                        <th>
                                                            <h5>Economy Non Flexi Regional</h5>
                                                        </th>
                                                        <th>
                                                            <h5>Economy Flexi Regional</h5>
                                                        </th>
                                                        <th>
                                                            <h5>Business</h5>
                                                        </th>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">
                                                            <h5>9:40 am</h5>
                                                            <h6>Wednesday 11 Dec</h6>
                                                            <h5>{{$userInput['from']}}</h5>
                                                        </th>
                                                        <td>
                                                            <h5>1hr 15min</h5>
                                                            <p><i class="fas fa-map-marker-alt"></i> <i class="fas fa-arrow-right"></i> <i class="fas fa-plane"></i> Non-stop </p>
                                                            <h6>P47874</h6>
                                                        </td>
                                                        <td>
                                                            <h5>10:55 am</h5>
                                                            <h6>Wednesday 11 Dec</h6>
                                                            <h5>{{$userInput['to']}}</h5>
                                                        </td>
                                                        <td>
                                                            <h6 style="font-weight:bold;">16,720.00</h6>
                                                            <h5>NGN</h5>
                                                            <button class="priceButton price-button-inside false" style="font-family: inherit;font-size: inherit;line-height: inherit; border: 1px solid #34000D;border-radius: 5px;background-color: #fff;color: #34000D;padding: 5px 10px;text-align: center;text-decoration: none;display: inline-block;cursor: pointer;margin-top: 10px;">SELECT</button>
                                                        </td>
                                                        <td>
                                                            <h6 style="font-weight:bold;">26,840.00</h6>
                                                            <h5>NGN</h5>
                                                            <button class="priceButton price-button-inside false" style="font-family: inherit;font-size: inherit;line-height: inherit; border: 1px solid #34000D;border-radius: 5px;background-color: #fff;color: #34000D;padding: 5px 10px;text-align: center;text-decoration: none;display: inline-block;cursor: pointer;margin-top: 10px;">SELECT</button>
                                                        </td>
                                                        <td>
                                                            <h6 style="font-weight:bold;">30,100.00</h6>
                                                            <h5>NGN</h5>
                                                            <button class="priceButton price-button-inside false" style="font-family: inherit;font-size: inherit;line-height: inherit; border: 1px solid #34000D;border-radius: 5px;background-color: #fff;color: #34000D;padding: 5px 10px;text-align: center;text-decoration: none;display: inline-block;cursor: pointer;margin-top: 10px;">SELECT</button>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">
                                                            <h5>1:15 pm</h5>
                                                            <h6>Wednesday 11 Dec</h6>
                                                            <h5>{{$userInput['from']}}</h5>
                                                        </th>
                                                        <td>
                                                            <h5>1hr 15min</h5>
                                                            <p><i class="fas fa-map-marker-alt"></i> <i class="fas fa-arrow-right"></i> <i class="fas fa-plane"></i> Non-stop </p>
                                                            <h6>P47874</h6>
                                                        </td>
                                                        <td>
                                                            <h5>2:30 pm</h5>
                                                            <h6>Wednesday 11 Dec</h6>
                                                            <h5>{{$userInput['to']}}</h5>
                                                        </td>
                                                        <td>
                                                            <h6 style="font-weight:bold;">32,200.00</h6>
                                                            <h5>NGN</h5>
                                                            <button class="priceButton price-button-inside false" style="font-family: inherit;font-size: inherit;line-height: inherit; border: 1px solid #34000D;border-radius: 5px;background-color: #fff;color: #34000D;padding: 5px 10px;text-align: center;text-decoration: none;display: inline-block;cursor: pointer;margin-top: 10px;">SELECT</button>
                                                        </td>
                                                        <td>
                                                            <h6 style="font-weight:bold;">40,850.00</h6>
                                                            <h5>NGN</h5>
                                                            <button class="priceButton price-button-inside false" style="font-family: inherit;font-size: inherit;line-height: inherit; border: 1px solid #34000D;border-radius: 5px;background-color: #fff;color: #34000D;padding: 5px 10px;text-align: center;text-decoration: none;display: inline-block;cursor: pointer;margin-top: 10px;">SELECT</button>
                                                        </td>
                                                        <td>
                                                            <br>
                                                            <br>
                                                            <h6 style="font-weight:bold;">Sold Out</h6>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">
                                                            <h5>7:30 pm</h5>
                                                            <h6>Wednesday 11 Dec</h6>
                                                            <h5>{{$userInput['from']}}</h5>
                                                        </th>
                                                        <td>
                                                            <h5>1hr 15min</h5>
                                                            <p><i class="fas fa-map-marker-alt"></i> <i class="fas fa-arrow-right"></i> <i class="fas fa-plane"></i> Non-stop </p>
                                                            <h6>P47874</h6>
                                                        </td>
                                                        <td>
                                                            <h5>8:30 pm</h5>
                                                            <h6>Wednesday 11 Dec</h6>
                                                            <h5>{{$userInput['to']}}</h5>
                                                        </td>
                                                        <td>
                                                            <br>
                                                            <br>
                                                            <h6 style="font-weight:bold;">Sold Out</h6>
                                                        </td>
                                                        <td>
                                                            <h6 style="font-weight:bold;">27,610.00</h6>
                                                            <h5>NGN</h5>
                                                            <button class="priceButton price-button-inside false" style="font-family: inherit;font-size: inherit;line-height: inherit; border: 1px solid #34000D;border-radius: 5px;background-color: #fff;color: #34000D;padding: 5px 10px;text-align: center;text-decoration: none;display: inline-block;cursor: pointer;margin-top: 10px;">SELECT</button>
                                                        </td>
                                                        <td>
                                                            <br>
                                                            <br>
                                                            <h6 style="font-weight:bold;">Sold Out</h6>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                        <div class="tab-pane fade" id="nav-thurs" role="tabpanel" aria-labelledby="nav-thurs-tab">
                                            <br>
                                            <table class="table table-striped">
                                                <tbody>
                                                    <tr>
                                                        <th scope="row">
                                                            <h5>Flight Information</h5>
                                                        </th>
                                                        <th>
                                                        </th>
                                                        <th>
                                                        </th>
                                                        <th>
                                                            <h5>Economy Non Flexi Regional</h5>
                                                        </th>
                                                        <th>
                                                            <h5>Economy Flexi Regional</h5>
                                                        </th>
                                                        <th>
                                                            <h5>Business</h5>
                                                        </th>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">
                                                            <h5>5:15 am</h5>
                                                            <h6>Thursday 11 Dec</h6>
                                                            <h5>{{$userInput['from']}}</h5>
                                                        </th>
                                                        <td>
                                                            <h5>1hr 15min</h5>
                                                            <p><i class="fas fa-map-marker-alt"></i> <i class="fas fa-arrow-right"></i> <i class="fas fa-plane"></i> Non-stop </p>
                                                            <h6>P47103</h6>
                                                        </td>
                                                        <td>
                                                            <h5>6:30 am</h5>
                                                            <h6>Thursday 11 Dec</h6>
                                                            <h5>{{$userInput['to']}}</h5>
                                                        </td>
                                                        <td>
                                                            <h6 style="font-weight:bold;">13,560.00</h6>
                                                            <h5>NGN</h5>
                                                            <button class="priceButton price-button-inside false" style="font-family: inherit;font-size: inherit;line-height: inherit; border: 1px solid #34000D;border-radius: 5px;background-color: #fff;color: #34000D;padding: 5px 10px;text-align: center;text-decoration: none;display: inline-block;cursor: pointer;margin-top: 10px;">SELECT</button>
                                                        </td>
                                                        <td>
                                                            <h6 style="font-weight:bold;">21,000.00</h6>
                                                            <h5>NGN</h5>
                                                            <button class="priceButton price-button-inside false" style="font-family: inherit;font-size: inherit;line-height: inherit; border: 1px solid #34000D;border-radius: 5px;background-color: #fff;color: #34000D;padding: 5px 10px;text-align: center;text-decoration: none;display: inline-block;cursor: pointer;margin-top: 10px;">SELECT</button>
                                                        </td>
                                                        <td>
                                                            <h6 style="font-weight:bold;">28,200.00</h6>
                                                            <h5>NGN</h5>
                                                            <button class="priceButton price-button-inside false" style="font-family: inherit;font-size: inherit;line-height: inherit; border: 1px solid #34000D;border-radius: 5px;background-color: #fff;color: #34000D;padding: 5px 10px;text-align: center;text-decoration: none;display: inline-block;cursor: pointer;margin-top: 10px;">SELECT</button>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">
                                                            <h5>6:00 am</h5>
                                                            <h6>Thursday 11 Dec</h6>
                                                            <h5>{{$userInput['from']}}</h5>
                                                        </th>
                                                        <td>
                                                            <h5>1hr 15min</h5>
                                                            <p><i class="fas fa-map-marker-alt"></i> <i class="fas fa-arrow-right"></i> <i class="fas fa-plane"></i> Non-stop </p>
                                                            <h6>P47103</h6>
                                                        </td>
                                                        <td>
                                                            <h5>7:00 am</h5>
                                                            <h6>Thursday 11 Dec</h6>
                                                            <h5>{{$userInput['to']}}</h5>
                                                        </td>
                                                        <td>
                                                            <h6 style="font-weight:bold;">21,220.00</h6>
                                                            <h5>NGN</h5>
                                                            <button class="priceButton price-button-inside false" style="font-family: inherit;font-size: inherit;line-height: inherit; border: 1px solid #34000D;border-radius: 5px;background-color: #fff;color: #34000D;padding: 5px 10px;text-align: center;text-decoration: none;display: inline-block;cursor: pointer;margin-top: 10px;">SELECT</button>
                                                        </td>
                                                        <td>
                                                            <h6 style="font-weight:bold;">24,990.00</h6>
                                                            <h5>NGN</h5>
                                                            <button class="priceButton price-button-inside false" style="font-family: inherit;font-size: inherit;line-height: inherit; border: 1px solid #34000D;border-radius: 5px;background-color: #fff;color: #34000D;padding: 5px 10px;text-align: center;text-decoration: none;display: inline-block;cursor: pointer;margin-top: 10px;">SELECT</button>
                                                        </td>
                                                        <td>
                                                            <h6 style="font-weight:bold;">25,420.00</h6>
                                                            <h5>NGN</h5>
                                                            <button class="priceButton price-button-inside false" style="font-family: inherit;font-size: inherit;line-height: inherit; border: 1px solid #34000D;border-radius: 5px;background-color: #fff;color: #34000D;padding: 5px 10px;text-align: center;text-decoration: none;display: inline-block;cursor: pointer;margin-top: 10px;">SELECT</button>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">
                                                            <h5>8:45 pm</h5>
                                                            <h6>Thursday 11 Dec</h6>
                                                            <h5>{{$userInput['from']}}</h5>
                                                        </th>
                                                        <td>
                                                            <h5>1hr 15min</h5>
                                                            <p><i class="fas fa-map-marker-alt"></i> <i class="fas fa-arrow-right"></i> <i class="fas fa-plane"></i> Non-stop </p>
                                                            <h6>P47103</h6>
                                                        </td>
                                                        <td>
                                                            <h5>10:00 pm</h5>
                                                            <h6>Thursday 11 Dec</h6>
                                                            <h5>{{$userInput['to']}}</h5>
                                                        </td>
                                                        <td>
                                                            <h6 style="font-weight:bold;">20,000.00</h6>
                                                            <h5>NGN</h5>
                                                            <button class="priceButton price-button-inside false" style="font-family: inherit;font-size: inherit;line-height: inherit; border: 1px solid #34000D;border-radius: 5px;background-color: #fff;color: #34000D;padding: 5px 10px;text-align: center;text-decoration: none;display: inline-block;cursor: pointer;margin-top: 10px;">SELECT</button>
                                                        </td>
                                                        <td>
                                                            <h6 style="font-weight:bold;">22,220.00</h6>
                                                            <h5>NGN</h5>
                                                            <button class="priceButton price-button-inside false" style="font-family: inherit;font-size: inherit;line-height: inherit; border: 1px solid #34000D;border-radius: 5px;background-color: #fff;color: #34000D;padding: 5px 10px;text-align: center;text-decoration: none;display: inline-block;cursor: pointer;margin-top: 10px;">SELECT</button>
                                                        </td>
                                                        <td>
                                                            <h6 style="font-weight:bold;">25,000.00</h6>
                                                            <h5>NGN</h5>
                                                            <button class="priceButton price-button-inside false" style="font-family: inherit;font-size: inherit;line-height: inherit; border: 1px solid #34000D;border-radius: 5px;background-color: #fff;color: #34000D;padding: 5px 10px;text-align: center;text-decoration: none;display: inline-block;cursor: pointer;margin-top: 10px;">SELECT</button>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                        <div class="tab-pane fade" id="nav-fri" role="tabpanel" aria-labelledby="nav-fri-tab">
                                            <br>
                                            <table class="table table-striped">
                                                <tbody>
                                                    <tr>
                                                        <th scope="row">
                                                            <h5>Flight Information</h5>
                                                        </th>
                                                        <th>
                                                        </th>
                                                        <th>
                                                        </th>
                                                        <th>
                                                            <h5>Economy Non Flexi Regional</h5>
                                                        </th>
                                                        <th>
                                                            <h5>Economy Flexi Regional</h5>
                                                        </th>
                                                        <th>
                                                            <h5>Business</h5>
                                                        </th>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">
                                                            <h5>2:30 am</h5>
                                                            <h6>Friday 11 Dec</h6>
                                                            <h5>{{$userInput['from']}}</h5>
                                                        </th>
                                                        <td>
                                                            <h5>1hr 15min</h5>
                                                            <p><i class="fas fa-map-marker-alt"></i> <i class="fas fa-arrow-right"></i> <i class="fas fa-plane"></i> Non-stop </p>
                                                            <h6>P47001</h6>
                                                        </td>
                                                        <td>
                                                            <h5>3:45 am</h5>
                                                            <h6>Friday 11 Dec</h6>
                                                            <h5>{{$userInput['to']}}</h5>
                                                        </td>
                                                        <td>
                                                            <h6 style="font-weight:bold;">19,500.00</h6>
                                                            <h5>NGN</h5>
                                                            <button class="priceButton price-button-inside false" style="font-family: inherit;font-size: inherit;line-height: inherit; border: 1px solid #34000D;border-radius: 5px;background-color: #fff;color: #34000D;padding: 5px 10px;text-align: center;text-decoration: none;display: inline-block;cursor: pointer;margin-top: 10px;">SELECT</button>
                                                        </td>
                                                        <td>
                                                            <h6 style="font-weight:bold;">26,200.00</h6>
                                                            <h5>NGN</h5>
                                                            <button class="priceButton price-button-inside false" style="font-family: inherit;font-size: inherit;line-height: inherit; border: 1px solid #34000D;border-radius: 5px;background-color: #fff;color: #34000D;padding: 5px 10px;text-align: center;text-decoration: none;display: inline-block;cursor: pointer;margin-top: 10px;">SELECT</button>
                                                        </td>
                                                        <td>
                                                            <br>
                                                            <br>
                                                            <h6 style="font-weight:bold;">Sold Out</h6>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">
                                                            <h5>7:15 am</h5>
                                                            <h6>Friday 11 Dec</h6>
                                                            <h5>{{$userInput['from']}}</h5>
                                                        </th>
                                                        <td>
                                                            <h5>1hr 15min</h5>
                                                            <p><i class="fas fa-map-marker-alt"></i> <i class="fas fa-arrow-right"></i> <i class="fas fa-plane"></i> Non-stop </p>
                                                            <h6>P47001</h6>
                                                        </td>
                                                        <td>
                                                            <h5>8:30 am</h5>
                                                            <h6>Friday 11 Dec</h6>
                                                            <h5>{{$userInput['to']}}</h5>
                                                        </td>
                                                        <td>
                                                            <br>
                                                            <br>
                                                            <h6 style="font-weight:bold;">Sold Out</h6>
                                                        </td>
                                                        <td>
                                                            <br>
                                                            <br>
                                                            <h6 style="font-weight:bold;">Sold Out</h6>
                                                        </td>
                                                        <td>
                                                            <h6 style="font-weight:bold;">15,800.00</h6>
                                                            <h5>NGN</h5>
                                                            <button class="priceButton price-button-inside false" style="font-family: inherit;font-size: inherit;line-height: inherit; border: 1px solid #34000D;border-radius: 5px;background-color: #fff;color: #34000D;padding: 5px 10px;text-align: center;text-decoration: none;display: inline-block;cursor: pointer;margin-top: 10px;">SELECT</button>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">
                                                            <h5>5:25 pm</h5>
                                                            <h6>Friday 11 Dec</h6>
                                                            <h5>{{$userInput['from']}}</h5>
                                                        </th>
                                                        <td>
                                                            <h5>1hr 15min</h5>
                                                            <p><i class="fas fa-map-marker-alt"></i> <i class="fas fa-arrow-right"></i> <i class="fas fa-plane"></i> Non-stop </p>
                                                            <h6>P47001</h6>
                                                        </td>
                                                        <td>
                                                            <h5>6:40 pm</h5>
                                                            <h6>Friday 11 Dec</h6>
                                                            <h5>{{$userInput['to']}}</h5>
                                                        </td>
                                                        <td>
                                                            <h6 style="font-weight:bold;">15,550.00</h6>
                                                            <h5>NGN</h5>
                                                            <button class="priceButton price-button-inside false" style="font-family: inherit;font-size: inherit;line-height: inherit; border: 1px solid #34000D;border-radius: 5px;background-color: #fff;color: #34000D;padding: 5px 10px;text-align: center;text-decoration: none;display: inline-block;cursor: pointer;margin-top: 10px;">SELECT</button>
                                                        </td>
                                                        <td>
                                                            <br>
                                                            <br>
                                                            <h6 style="font-weight:bold;">Sold Out</h6>
                                                        </td>
                                                        <td>
                                                            <h6 style="font-weight:bold;">25,900.00</h6>
                                                            <h5>NGN</h5>
                                                            <button class="priceButton price-button-inside false" style="font-family: inherit;font-size: inherit;line-height: inherit; border: 1px solid #34000D;border-radius: 5px;background-color: #fff;color: #34000D;padding: 5px 10px;text-align: center;text-decoration: none;display: inline-block;cursor: pointer;margin-top: 10px;">SELECT</button>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                        <div class="tab-pane fade" id="nav-sat" role="tabpanel" aria-labelledby="nav-sat-tab">
                                            <br>
                                            <table class="table table-striped">
                                                <tbody>
                                                    <tr>
                                                        <th scope="row">
                                                            <h5>Flight Information</h5>
                                                        </th>
                                                        <th>
                                                        </th>
                                                        <th>
                                                        </th>
                                                        <th>
                                                            <h5>Economy Non Flexi Regional</h5>
                                                        </th>
                                                        <th>
                                                            <h5>Economy Flexi Regional</h5>
                                                        </th>
                                                        <th>
                                                            <h5>Business</h5>
                                                        </th>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">
                                                            <h5>4:00 am</h5>
                                                            <h6>Saturday 11 Dec</h6>
                                                            <h5>{{$userInput['from']}}</h5>
                                                        </th>
                                                        <td>
                                                            <h5>1hr 15min</h5>
                                                            <p><i class="fas fa-map-marker-alt"></i> <i class="fas fa-arrow-right"></i> <i class="fas fa-plane"></i> Non-stop </p>
                                                            <h6>P47863</h6>
                                                        </td>
                                                        <td>
                                                            <h5>5:15 am</h5>
                                                            <h6>Saturday 11 Dec</h6>
                                                            <h5>{{$userInput['to']}}</h5>
                                                        </td>
                                                        <td>
                                                            <br>
                                                            <br>
                                                            <h6 style="font-weight:bold;">Sold Out</h6>
                                                        </td>
                                                        <td>
                                                            <h6 style="font-weight:bold;">11,630.00</h6>
                                                            <h5>NGN</h5>
                                                            <button class="priceButton price-button-inside false" style="font-family: inherit;font-size: inherit;line-height: inherit; border: 1px solid #34000D;border-radius: 5px;background-color: #fff;color: #34000D;padding: 5px 10px;text-align: center;text-decoration: none;display: inline-block;cursor: pointer;margin-top: 10px;">SELECT</button>
                                                        </td>
                                                        <td>
                                                            <h6 style="font-weight:bold;">18,270.00</h6>
                                                            <h5>NGN</h5>
                                                            <button class="priceButton price-button-inside false" style="font-family: inherit;font-size: inherit;line-height: inherit; border: 1px solid #34000D;border-radius: 5px;background-color: #fff;color: #34000D;padding: 5px 10px;text-align: center;text-decoration: none;display: inline-block;cursor: pointer;margin-top: 10px;">SELECT</button>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">
                                                            <h5>7:30 am</h5>
                                                            <h6>Saturday 11 Dec</h6>
                                                            <h5>{{$userInput['from']}}</h5>
                                                        </th>
                                                        <td>
                                                            <h5>1hr 15min</h5>
                                                            <p><i class="fas fa-map-marker-alt"></i> <i class="fas fa-arrow-right"></i> <i class="fas fa-plane"></i> Non-stop </p>
                                                            <h6>P47863</h6>
                                                        </td>
                                                        <td>
                                                            <h5>8:45 am</h5>
                                                            <h6>Saturday 11 Dec</h6>
                                                            <h5>{{$userInput['to']}}</h5>
                                                        </td>
                                                        <td>
                                                            <h6 style="font-weight:bold;">13,570.00</h6>
                                                            <h5>NGN</h5>
                                                            <button class="priceButton price-button-inside false" style="font-family: inherit;font-size: inherit;line-height: inherit; border: 1px solid #34000D;border-radius: 5px;background-color: #fff;color: #34000D;padding: 5px 10px;text-align: center;text-decoration: none;display: inline-block;cursor: pointer;margin-top: 10px;">SELECT</button>
                                                        </td>
                                                        <td>
                                                            <h6 style="font-weight:bold;">18,610.00</h6>
                                                            <h5>NGN</h5>
                                                            <button class="priceButton price-button-inside false" style="font-family: inherit;font-size: inherit;line-height: inherit; border: 1px solid #34000D;border-radius: 5px;background-color: #fff;color: #34000D;padding: 5px 10px;text-align: center;text-decoration: none;display: inline-block;cursor: pointer;margin-top: 10px;">SELECT</button>
                                                        </td>
                                                        <td>
                                                            <br>
                                                            <br>
                                                            <h6 style="font-weight:bold;">Sold Out</h6>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">
                                                            <h5>10:10 pm</h5>
                                                            <h6>Saturday 11 Dec</h6>
                                                            <h5>{{$userInput['from']}}</h5>
                                                        </th>
                                                        <td>
                                                            <h5>1hr 15min</h5>
                                                            <p><i class="fas fa-map-marker-alt"></i> <i class="fas fa-arrow-right"></i> <i class="fas fa-plane"></i> Non-stop </p>
                                                            <h6>P47863</h6>
                                                        </td>
                                                        <td>
                                                            <h5>11:25 pm</h5>
                                                            <h6>Saturday 11 Dec</h6>
                                                            <h5>{{$userInput['to']}}</h5>
                                                        </td>
                                                        <td>
                                                            <br>
                                                            <br>
                                                            <h6 style="font-weight:bold;">Sold Out</h6>
                                                        </td>
                                                        <td>
                                                            <h6 style="font-weight:bold;">15,520.00</h6>
                                                            <h5>NGN</h5>
                                                            <button class="priceButton price-button-inside false" style="font-family: inherit;font-size: inherit;line-height: inherit; border: 1px solid #34000D;border-radius: 5px;background-color: #fff;color: #34000D;padding: 5px 10px;text-align: center;text-decoration: none;display: inline-block;cursor: pointer;margin-top: 10px;">SELECT</button>
                                                        </td>
                                                        <td>
                                                            <h6 style="font-weight:bold;">18,500.00</h6>
                                                            <h5>NGN</h5>
                                                                    <button class="priceButton price-button-inside false" style="font-family: inherit;font-size: inherit;line-height: inherit; border: 1px solid #34000D;border-radius: 5px;background-color: #fff;color: #34000D;padding: 5px 10px;text-align: center;text-decoration: none;display: inline-block;cursor: pointer;margin-top: 10px;">SELECT</button>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                        <div class="tab-pane fade" id="nav-sun" role="tabpanel" aria-labelledby="nav-sun-tab">
                                            <br>
                                            <table class="table table-striped">
                                                <tbody>
                                                    <tr>
                                                        <th scope="row">
                                                            <h5>Flight Information</h5>
                                                        </th>
                                                        <th>
                                                        </th>
                                                        <th>
                                                        </th>
                                                        <th>
                                                            <h5>Economy Non Flexi Regional</h5>
                                                        </th>
                                                        <th>
                                                            <h5>Economy Flexi Regional</h5>
                                                        </th>
                                                        <th>
                                                            <h5>Business</h5>
                                                        </th>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">
                                                            <h5>2:50 am</h5>
                                                            <h6>Sunday 11 Dec</h6>
                                                            <h5>{{$userInput['from']}}</h5>
                                                        </th>
                                                        <td>
                                                            <h5>1hr 15min</h5>
                                                            <p><i class="fas fa-map-marker-alt"></i> <i class="fas fa-arrow-right"></i> <i class="fas fa-plane"></i> Non-stop </p>
                                                            <h6>P47173</h6>
                                                        </td>
                                                        <td>
                                                            <h5>4:05 am</h5>
                                                            <h6>Sunday 11 Dec</h6>
                                                            <h5>{{$userInput['to']}}</h5>
                                                        </td>
                                                        <td>
                                                            <h6 style="font-weight:bold;">20,610.00</h6>
                                                            <h5>NGN</h5>
                                                            <button class="priceButton price-button-inside false" style="font-family: inherit;font-size: inherit;line-height: inherit; border: 1px solid #34000D;border-radius: 5px;background-color: #fff;color: #34000D;padding: 5px 10px;text-align: center;text-decoration: none;display: inline-block;cursor: pointer;margin-top: 10px;">SELECT</button>
                                                        </td>
                                                        <td>
                                                            <h6 style="font-weight:bold;">27,000.00</h6>
                                                            <h5>NGN</h5>
                                                            <button class="priceButton price-button-inside false" style="font-family: inherit;font-size: inherit;line-height: inherit; border: 1px solid #34000D;border-radius: 5px;background-color: #fff;color: #34000D;padding: 5px 10px;text-align: center;text-decoration: none;display: inline-block;cursor: pointer;margin-top: 10px;">SELECT</button>
                                                        </td>
                                                        <td>
                                                            <br>
                                                            <br>
                                                            <h6 style="font-weight:bold;">Sold Out</h6>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">
                                                            <h5>9:20 am</h5>
                                                            <h6>Sunday 11 Dec</h6>
                                                            <h5>{{$userInput['from']}}</h5>
                                                        </th>
                                                        <td>
                                                            <h5>1hr 15min</h5>
                                                            <p><i class="fas fa-map-marker-alt"></i> <i class="fas fa-arrow-right"></i> <i class="fas fa-plane"></i> Non-stop </p>
                                                            <h6>P47173</h6>
                                                        </td>
                                                        <td>
                                                            <h5>10:35 am</h5>
                                                            <h6>Sunday 11 Dec</h6>
                                                            <h5>{{$userInput['to']}}</h5>
                                                        </td>
                                                        <td>
                                                            <br>
                                                            <br>
                                                            <h6 style="font-weight:bold;">Sold Out</h6>
                                                        </td>
                                                        <td>
                                                            <br>
                                                            <br>
                                                            <h6 style="font-weight:bold;">Sold Out</h6>
                                                        </td>
                                                        <td>
                                                            <h6 style="font-weight:bold;">25,000.00</h6>
                                                            <h5>NGN</h5>
                                                            <button class="priceButton price-button-inside false" style="font-family: inherit;font-size: inherit;line-height: inherit; border: 1px solid #34000D;border-radius: 5px;background-color: #fff;color: #34000D;padding: 5px 10px;text-align: center;text-decoration: none;display: inline-block;cursor: pointer;margin-top: 10px;">SELECT</button>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">
                                                            <h5>9:30 pm</h5>
                                                            <h6>Sunday 11 Dec</h6>
                                                            <h5>{{$userInput['from']}}</h5>
                                                        </th>
                                                        <td>
                                                            <h5>1hr 15min</h5>
                                                            <p><i class="fas fa-map-marker-alt"></i> <i class="fas fa-arrow-right"></i> <i class="fas fa-plane"></i> Non-stop </p>
                                                            <h6>P47173</h6>
                                                        </td>
                                                        <td>
                                                            <h5>10:30 pm</h5>
                                                            <h6>Sunday 11 Dec</h6>
                                                            <h5>{{$userInput['to']}}</h5>
                                                        </td>
                                                        <td>
                                                            <h6 style="font-weight:bold;">20,500.00</h6>
                                                            <h5>NGN</h5>
                                                            <button class="priceButton price-button-inside false" style="font-family: inherit;font-size: inherit;line-height: inherit; border: 1px solid #34000D;border-radius: 5px;background-color: #fff;color: #34000D;padding: 5px 10px;text-align: center;text-decoration: none;display: inline-block;cursor: pointer;margin-top: 10px;">SELECT</button>
                                                        </td>
                                                        <td>
                                                            <h6 style="font-weight:bold;">28,900.00</h6>
                                                            <h5>NGN</h5>
                                                            <button class="priceButton price-button-inside false" style="font-family: inherit;font-size: inherit;line-height: inherit; border: 1px solid #34000D;border-radius: 5px;background-color: #fff;color: #34000D;padding: 5px 10px;text-align: center;text-decoration: none;display: inline-block;cursor: pointer;margin-top: 10px;">SELECT</button>
                                                        </td>
                                                        <td>
                                                            <h6 style="font-weight:bold;">34,000.00</h6>
                                                            <h5>NGN</h5>
                                                            <button class="priceButton price-button-inside false" style="font-family: inherit;font-size: inherit;line-height: inherit; border: 1px solid #34000D;border-radius: 5px;background-color: #fff;color: #34000D;padding: 5px 10px;text-align: center;text-decoration: none;display: inline-block;cursor: pointer;margin-top: 10px;">SELECT</button>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <br>

                            @if($userInput['arrival'] !='')
                            <div class="tab-content inbound" id="nav-tabContent">
                                <div class="tab-pane fade  show active" id="nav-select" role="tabpanel" aria-labelledby="nav-select-tab">
                                    <div class="card">
                                        <h5 class="card-header">Inbound: {{$userInput['to']}} to {{$userInput['from']}}</h5>
                                        <div class="card-body">
                                            <div class="container">
                                                <div class="row">
                                                    <div class="col">
                                                    </div>
                                                    <div class="col-md-9">
                                                        <nav>
                                                            <div class="nav nav-tabs" id="nav-tab" role="tablist">
                                                                <a class="nav-link active" id="nav-mond-tab" data-toggle="tab" href="#nav-mond" role="tab" aria-controls="nav-mond" aria-selected="true">Mon</a>
                                                                <a class="nav-link" id="nav-tues-tab" data-toggle="tab" href="#nav-tues" role="tab" aria-controls="nav-tues" aria-selected="false">Tue</a>
                                                                <a class="nav-link" id="nav-wedn-tab" data-toggle="tab" href="#nav-wedn" role="tab" aria-controls="nav-wedn" aria-selected="false">Wed</a>
                                                                <a class="nav-link" id="nav-thur-tab" data-toggle="tab" href="#nav-thur" role="tab" aria-controls="nav-thur" aria-selected="false">Thurs</a>
                                                                <a class="nav-link" id="nav-frid-tab" data-toggle="tab" href="#nav-frid" role="tab" aria-controls="nav-frid" aria-selected="false">Fri</a>
                                                                <a class="nav-link" id="nav-satu-tab" data-toggle="tab" href="#nav-satu" role="tab" aria-controls="nav-saut" aria-selected="false">Sat</a>
                                                                <a class="nav-link" id="nav-sund-tab" data-toggle="tab" href="#nav-sund" role="tab" aria-controls="nav-sund" aria-selected="false">Sun</a>
                                                            </div>
                                                        </nav>
                                                    </div>
                                                    <div class="col">
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="tab-content" id="nav-tabContent">
                                                <div class="tab-pane fade show active" id="nav-mond" role="tabpanel" aria-labelledby="nav-mond-tab">
                                                    <br>
                                                    <table class="table table-striped">
                                                        <tbody>
                                                            <tr>
                                                                <th scope="row">
                                                                    <h5>Flight Information</h5>
                                                                </th>
                                                                <th>
                                                                </th>
                                                                <th>
                                                                </th>
                                                                <th>
                                                                    <h5>Economy Non Flexi Regional</h5>
                                                                </th>
                                                                <th>
                                                                    <h5>Economy Flexi Regional</h5>
                                                                </th>
                                                                <th>
                                                                    <h5>Business</h5>
                                                                </th>
                                                            </tr>
                                                            <tr>
                                                                <th scope="row">
                                                                    <h5>6:30 am</h5>
                                                                    <h6>Monday 11 Dec</h6>
                                                                    <h5>{{$userInput['to']}}</h5>
                                                                </th>
                                                                <td>
                                                                    <h5>1hr 15min</h5>
                                                                    <p><i class="fas fa-map-marker-alt"></i> <i class="fas fa-arrow-right"></i> <i class="fas fa-plane"></i> Non-stop </p>
                                                                    <h6>PA47120</h6>
                                                                </td>
                                                                <td>
                                                                    <h5>7:30 am</h5>
                                                                    <h6>Monday 11 Dec</h6>
                                                                    <h5>{{$userInput['from']}}</h5>
                                                                </td>
                                                                <td>
                                                                    <h6 style="font-weight:bold;">64,237.00</h6>
                                                                    <h5>NGN</h5>
                                                                    <button class="priceButton price-button-inside false" style="font-family: inherit;font-size: inherit;line-height: inherit; border: 1px solid #34000D;border-radius: 5px;background-color: #fff;color: #34000D;padding: 5px 10px;text-align: center;text-decoration: none;display: inline-block;cursor: pointer;margin-top: 10px;">SELECT</button>
                                                                </td>
                                                                <td>
                                                                    <br>
                                                                    <br>
                                                                    <h6 style="font-weight:bold;">Sold Out</h6>
                                                                </td>
                                                                <td>
                                                                    <h6 style="font-weight:bold;">89,000.00</h6>
                                                                    <h5>NGN</h5>
                                                                    <button class="priceButton price-button-inside false" style="font-family: inherit;font-size: inherit;line-height: inherit; border: 1px solid #34000D;border-radius: 5px;background-color: #fff;color: #34000D;padding: 5px 10px;text-align: center;text-decoration: none;display: inline-block;cursor: pointer;margin-top: 10px;">SELECT</button>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <th scope="row">
                                                                    <h5>9:30 am</h5>
                                                                    <h6>Monday 11 Dec</h6>
                                                                    <h5>{{$userInput['to']}}</h5>
                                                                </th>
                                                                <td>
                                                                    <h5>1hr 15min</h5>
                                                                    <p><i class="fas fa-map-marker-alt"></i> <i class="fas fa-arrow-right"></i> <i class="fas fa-plane"></i> Non-stop </p>
                                                                    <h6>PA47120</h6>
                                                                </td>
                                                                <td>
                                                                    <h5>10:45 am</h5>
                                                                    <h6>Monday 11 Dec</h6>
                                                                    <h5>{{$userInput['from']}}</h5>
                                                                </td>
                                                                <td>
                                                                    <h6 style="font-weight:bold;">42,400.00</h6>
                                                                    <h5>NGN</h5>
                                                                    <button class="priceButton price-button-inside false" style="font-family: inherit;font-size: inherit;line-height: inherit; border: 1px solid #34000D;border-radius: 5px;background-color: #fff;color: #34000D;padding: 5px 10px;text-align: center;text-decoration: none;display: inline-block;cursor: pointer;margin-top: 10px;">SELECT</button>
                                                                </td>
                                                                <td>
                                                                    <h6 style="font-weight:bold;">55,500.00</h6>
                                                                    <h5>NGN</h5>
                                                                    <button class="priceButton price-button-inside false" style="font-family: inherit;font-size: inherit;line-height: inherit; border: 1px solid #34000D;border-radius: 5px;background-color: #fff;color: #34000D;padding: 5px 10px;text-align: center;text-decoration: none;display: inline-block;cursor: pointer;margin-top: 10px;">SELECT</button>
                                                                </td>
                                                                <td>
                                                                    <h6 style="font-weight:bold;">60,000.00</h6>
                                                                    <h5>NGN</h5>
                                                                    <button class="priceButton price-button-inside false" style="font-family: inherit;font-size: inherit;line-height: inherit; border: 1px solid #34000D;border-radius: 5px;background-color: #fff;color: #34000D;padding: 5px 10px;text-align: center;text-decoration: none;display: inline-block;cursor: pointer;margin-top: 10px;">SELECT</button>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <th scope="row">
                                                                    <h5>8:15 pm</h5>
                                                                    <h6>Monday 11 Dec</h6>
                                                                    <h5>{{$userInput['to']}}</h5>
                                                                </th>
                                                                <td>
                                                                    <h5>1hr 15min</h5>
                                                                    <p><i class="fas fa-map-marker-alt"></i> <i class="fas fa-arrow-right"></i> <i class="fas fa-plane"></i> Non-stop </p>
                                                                    <h6>PA47120</h6>
                                                                </td>
                                                                <td>
                                                                    <h5>9:30 pm</h5>
                                                                    <h6>Monday 11 Dec</h6>
                                                                    <h5>{{$userInput['from']}}</h5>
                                                                </td>
                                                                <td>
                                                                    <br>
                                                                    <br>
                                                                    <h6 style="font-weight:bold;">Sold Out</h6>
                                                                </td>
                                                                <td>
                                                                    <h6 style="font-weight:bold;">35,700.00</h6>
                                                                    <h5>NGN</h5>
                                                                    <button class="priceButton price-button-inside false" style="font-family: inherit;font-size: inherit;line-height: inherit; border: 1px solid #34000D;border-radius: 5px;background-color: #fff;color: #34000D;padding: 5px 10px;text-align: center;text-decoration: none;display: inline-block;cursor: pointer;margin-top: 10px;">SELECT</button>
                                                                </td>
                                                                <td>
                                                                    <br>
                                                                    <br>
                                                                    <h6 style="font-weight:bold;">Sold Out</h6>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                                <div class="tab-pane fade" id="nav-tues" role="tabpanel" aria-labelledby="nav-tues-tab">
                                                    <br>
                                                    <table class="table table-striped">
                                                        <tbody>
                                                            <tr>
                                                                <th scope="row">
                                                                    <h5>Flight Information</h5>
                                                                </th>
                                                                <th>
                                                                </th>
                                                                <th>
                                                                </th>
                                                                <th>
                                                                    <h5>Economy Non Flexi Regional</h5>
                                                                </th>
                                                                <th>
                                                                    <h5>Economy Flexi Regional</h5>
                                                                </th>
                                                                <th>
                                                                    <h5>Business</h5>
                                                                </th>
                                                            </tr>
                                                            <tr>
                                                                <th scope="row">
                                                                    <h5>9:00 am</h5>
                                                                    <h6>Tuesday 12 Dec</h6>
                                                                    <h5>{{$userInput['to']}}</h5>
                                                                </th>
                                                                <td>
                                                                    <h5>1hr 15min</h5>
                                                                    <p><i class="fas fa-map-marker-alt"></i> <i class="fas fa-arrow-right"></i> <i class="fas fa-plane"></i> Non-stop </p>
                                                                    <h6>P47004</h6>
                                                                </td>
                                                                <td>
                                                                    <h5>10:15 am</h5>
                                                                    <h6>Tuesday 12 Dec</h6>
                                                                    <h5>{{$userInput['from']}}</h5>
                                                                </td>
                                                                <td>
                                                                    <h6 style="font-weight:bold;">47,500.00</h6>
                                                                    <h5>NGN</h5>
                                                                    <button class="priceButton price-button-inside false" style="font-family: inherit;font-size: inherit;line-height: inherit; border: 1px solid #34000D;border-radius: 5px;background-color: #fff;color: #34000D;padding: 5px 10px;text-align: center;text-decoration: none;display: inline-block;cursor: pointer;margin-top: 10px;">SELECT</button>
                                                                </td>
                                                                <td>
                                                                    <h6 style="font-weight:bold;">53,000.00</h6>
                                                                    <h5>NGN</h5>
                                                                    <button class="priceButton price-button-inside false" style="font-family: inherit;font-size: inherit;line-height: inherit; border: 1px solid #34000D;border-radius: 5px;background-color: #fff;color: #34000D;padding: 5px 10px;text-align: center;text-decoration: none;display: inline-block;cursor: pointer;margin-top: 10px;">SELECT</button>
                                                                </td>
                                                                <td>
                                                                    <h6 style="font-weight:bold;">60,000.00</h6>
                                                                    <h5>NGN</h5>
                                                                    <button class="priceButton price-button-inside false" style="font-family: inherit;font-size: inherit;line-height: inherit; border: 1px solid #34000D;border-radius: 5px;background-color: #fff;color: #34000D;padding: 5px 10px;text-align: center;text-decoration: none;display: inline-block;cursor: pointer;margin-top: 10px;">SELECT</button>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <th scope="row">
                                                                    <h5>2:30 pm</h5>
                                                                    <h6>Tuesday 12 Dec</h6>
                                                                    <h5>{{$userInput['to']}}</h5>
                                                                </th>
                                                                <td>
                                                                    <h5>1hr 15min</h5>
                                                                    <p><i class="fas fa-map-marker-alt"></i> <i class="fas fa-arrow-right"></i> <i class="fas fa-plane"></i> Non-stop </p>
                                                                    <h6>P47004</h6>
                                                                </td>
                                                                <td>
                                                                    <h5>3:45 pm</h5>
                                                                    <h6>Tuesday 12 Dec</h6>
                                                                    <h5>{{$userInput['from']}}</h5>
                                                                </td>
                                                                <td>
                                                                    <br>
                                                                    <br>
                                                                    <h6 style="font-weight:bold;">Sold Out</h6>
                                                                </td>
                                                                <td>
                                                                    <h6 style="font-weight:bold;">29,300.00</h6>
                                                                    <h5>NGN</h5>
                                                                    <button class="priceButton price-button-inside false" style="font-family: inherit;font-size: inherit;line-height: inherit; border: 1px solid #34000D;border-radius: 5px;background-color: #fff;color: #34000D;padding: 5px 10px;text-align: center;text-decoration: none;display: inline-block;cursor: pointer;margin-top: 10px;">SELECT</button>
                                                                </td>
                                                                <td>
                                                                    <h6 style="font-weight:bold;">35,850.00</h6>
                                                                    <h5>NGN</h5>
                                                                    <button class="priceButton price-button-inside false" style="font-family: inherit;font-size: inherit;line-height: inherit; border: 1px solid #34000D;border-radius: 5px;background-color: #fff;color: #34000D;padding: 5px 10px;text-align: center;text-decoration: none;display: inline-block;cursor: pointer;margin-top: 10px;">SELECT</button>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <th scope="row">
                                                                    <h5>8:30 pm</h5>
                                                                    <h6>Tuesday 12 Dec</h6>
                                                                    <h5>{{$userInput['to']}}</h5>
                                                                </th>
                                                                <td>
                                                                    <h5>1hr 15min</h5>
                                                                    <p><i class="fas fa-map-marker-alt"></i> <i class="fas fa-arrow-right"></i> <i class="fas fa-plane"></i> Non-stop </p>
                                                                    <h6>P47004</h6>
                                                                </td>
                                                                <td>
                                                                    <h5>9:30 pm</h5>
                                                                    <h6>Tuesday 12 Dec</h6>
                                                                    <h5>{{$userInput['from']}}</h5>
                                                                </td>
                                                                <td>
                                                                    <br>
                                                                    <br>
                                                                    <h6 style="font-weight:bold;">Sold Out</h6>
                                                                </td>
                                                                <td>
                                                                    <br>
                                                                    <br>
                                                                    <h6 style="font-weight:bold;">Sold Out</h6>
                                                                </td>
                                                                <td>
                                                                    <br>
                                                                    <br>
                                                                    <h6 style="font-weight:bold;">Sold Out</h6>
                                                                <td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                                <div class="tab-pane fade" id="nav-wedn" role="tabpanel" aria-labelledby="nav-wedn-tab">
                                                    <br>
                                                    <table class="table table-striped">
                                                        <tbody>
                                                            <tr>
                                                                <th scope="row">
                                                                    <h5>Flight Information</h5>
                                                                </th>
                                                                <th>
                                                                </th>
                                                                <th>
                                                                </th>
                                                                <th>
                                                                    <h5>Economy Non Flexi Regional</h5>
                                                                </th>
                                                                <th>
                                                                    <h5>Economy Flexi Regional</h5>
                                                                </th>
                                                                <th>
                                                                    <h5>Business</h5>
                                                                </th>
                                                            </tr>
                                                            <tr>
                                                                <th scope="row">
                                                                    <h5>8:40 am</h5>
                                                                    <h6>Wednesday 11 Dec</h6>
                                                                    <h5>{{$userInput['to']}}</h5>
                                                                </th>
                                                                <td>
                                                                    <h5>1hr 15min</h5>
                                                                    <p><i class="fas fa-map-marker-alt"></i> <i class="fas fa-arrow-right"></i> <i class="fas fa-plane"></i> Non-stop </p>
                                                                    <h6>P47874</h6>
                                                                </td>
                                                                <td>
                                                                    <h5>9:55 am</h5>
                                                                    <h6>Wednesday 11 Dec</h6>
                                                                    <h5>{{$userInput['from']}}</h5>
                                                                </td>
                                                                <td>
                                                                    <h6 style="font-weight:bold;">15,830.00</h6>
                                                                    <h5>NGN</h5>
                                                                    <button class="priceButton price-button-inside false" style="font-family: inherit;font-size: inherit;line-height: inherit; border: 1px solid #34000D;border-radius: 5px;background-color: #fff;color: #34000D;padding: 5px 10px;text-align: center;text-decoration: none;display: inline-block;cursor: pointer;margin-top: 10px;">SELECT</button>
                                                                </td>
                                                                <td>
                                                                    <h6 style="font-weight:bold;">35,850.00</h6>
                                                                    <h5>NGN</h5>
                                                                    <button class="priceButton price-button-inside false" style="font-family: inherit;font-size: inherit;line-height: inherit; border: 1px solid #34000D;border-radius: 5px;background-color: #fff;color: #34000D;padding: 5px 10px;text-align: center;text-decoration: none;display: inline-block;cursor: pointer;margin-top: 10px;">SELECT</button>
                                                                </td>
                                                                <td>
                                                                    <h6 style="font-weight:bold;">50,200.00</h6>
                                                                    <h5>NGN</h5>
                                                                    <button class="priceButton price-button-inside false" style="font-family: inherit;font-size: inherit;line-height: inherit; border: 1px solid #34000D;border-radius: 5px;background-color: #fff;color: #34000D;padding: 5px 10px;text-align: center;text-decoration: none;display: inline-block;cursor: pointer;margin-top: 10px;">SELECT</button>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <th scope="row">
                                                                    <h5>12:15 pm</h5>
                                                                    <h6>Wednesday 11 Dec</h6>
                                                                    <h5>{{$userInput['to']}}</h5>
                                                                </th>
                                                                <td>
                                                                    <h5>1hr 15min</h5>
                                                                    <p><i class="fas fa-map-marker-alt"></i> <i class="fas fa-arrow-right"></i> <i class="fas fa-plane"></i> Non-stop </p>
                                                                    <h6>P47874</h6>
                                                                </td>
                                                                <td>
                                                                    <h5>1:30 pm</h5>
                                                                    <h6>Wednesday 11 Dec</h6>
                                                                    <h5>{{$userInput['from']}}</h5>
                                                                </td>
                                                                <td>
                                                                    <h6 style="font-weight:bold;">52,200.00</h6>
                                                                    <h5>NGN</h5>
                                                                    <button class="priceButton price-button-inside false" style="font-family: inherit;font-size: inherit;line-height: inherit; border: 1px solid #34000D;border-radius: 5px;background-color: #fff;color: #34000D;padding: 5px 10px;text-align: center;text-decoration: none;display: inline-block;cursor: pointer;margin-top: 10px;">SELECT</button>
                                                                </td>
                                                                <td>
                                                                    <h6 style="font-weight:bold;">52,850.00</h6>
                                                                    <h5>NGN</h5>
                                                                    <button class="priceButton price-button-inside false" style="font-family: inherit;font-size: inherit;line-height: inherit; border: 1px solid #34000D;border-radius: 5px;background-color: #fff;color: #34000D;padding: 5px 10px;text-align: center;text-decoration: none;display: inline-block;cursor: pointer;margin-top: 10px;">SELECT</button>
                                                                </td>
                                                                <td>
                                                                    <br>
                                                                    <br>
                                                                    <h6 style="font-weight:bold;">Sold Out</h6>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <th scope="row">
                                                                    <h5>8:30 pm</h5>
                                                                    <h6>Wednesday 11 Dec</h6>
                                                                    <h5>{{$userInput['to']}}</h5>
                                                                </th>
                                                                <td>
                                                                    <h5>1hr 15min</h5>
                                                                    <p><i class="fas fa-map-marker-alt"></i> <i class="fas fa-arrow-right"></i> <i class="fas fa-plane"></i> Non-stop </p>
                                                                    <h6>P47874</h6>
                                                                </td>
                                                                <td>
                                                                    <h5>9:30 pm</h5>
                                                                    <h6>Wednesday 11 Dec</h6>
                                                                    <h5>{{$userInput['from']}}</h5>
                                                                </td>
                                                                <td>
                                                                    <br>
                                                                    <br>
                                                                    <h6 style="font-weight:bold;">Sold Out</h6>
                                                                </td>
                                                                <td>
                                                                    <h6 style="font-weight:bold;">32,610.00</h6>
                                                                    <h5>NGN</h5>
                                                                    <button class="priceButton price-button-inside false" style="font-family: inherit;font-size: inherit;line-height: inherit; border: 1px solid #34000D;border-radius: 5px;background-color: #fff;color: #34000D;padding: 5px 10px;text-align: center;text-decoration: none;display: inline-block;cursor: pointer;margin-top: 10px;">SELECT</button>
                                                                </td>
                                                                <td>
                                                                    <br>
                                                                    <br>
                                                                    <h6 style="font-weight:bold;">Sold Out</h6>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                                <div class="tab-pane fade" id="nav-thur" role="tabpanel" aria-labelledby="nav-thur-tab">
                                                    <br>
                                                    <table class="table table-striped">
                                                        <tbody>
                                                            <tr>
                                                                <th scope="row">
                                                                    <h5>Flight Information</h5>
                                                                </th>
                                                                <th>
                                                                </th>
                                                                <th>
                                                                </th>
                                                                <th>
                                                                    <h5>Economy Non Flexi Regional</h5>
                                                                </th>
                                                                <th>
                                                                    <h5>Economy Flexi Regional</h5>
                                                                </th>
                                                                <th>
                                                                    <h5>Business</h5>
                                                                </th>
                                                            </tr>
                                                            <tr>
                                                                <th scope="row">
                                                                    <h5>4:15 am</h5>
                                                                    <h6>Thursday 11 Dec</h6>
                                                                    <h5>{{$userInput['to']}}</h5>
                                                                </th>
                                                                <td>
                                                                    <h5>1hr 15min</h5>
                                                                    <p><i class="fas fa-map-marker-alt"></i> <i class="fas fa-arrow-right"></i> <i class="fas fa-plane"></i> Non-stop </p>
                                                                    <h6>P47103</h6>
                                                                </td>
                                                                <td>
                                                                    <h5>5:30 am</h5>
                                                                    <h6>Thursday 11 Dec</h6>
                                                                    <h5>{{$userInput['from']}}</h5>
                                                                </td>
                                                                <td>
                                                                    <h6 style="font-weight:bold;">14,560.00</h6>
                                                                    <h5>NGN</h5>
                                                                    <button class="priceButton price-button-inside false" style="font-family: inherit;font-size: inherit;line-height: inherit; border: 1px solid #34000D;border-radius: 5px;background-color: #fff;color: #34000D;padding: 5px 10px;text-align: center;text-decoration: none;display: inline-block;cursor: pointer;margin-top: 10px;">SELECT</button>
                                                                </td>
                                                                <td>
                                                                    <h6 style="font-weight:bold;">23,000.00</h6>
                                                                    <h5>NGN</h5>
                                                                    <button class="priceButton price-button-inside false" style="font-family: inherit;font-size: inherit;line-height: inherit; border: 1px solid #34000D;border-radius: 5px;background-color: #fff;color: #34000D;padding: 5px 10px;text-align: center;text-decoration: none;display: inline-block;cursor: pointer;margin-top: 10px;">SELECT</button>
                                                                </td>
                                                                <td>
                                                                    <h6 style="font-weight:bold;">27,200.00</h6>
                                                                    <h5>NGN</h5>
                                                                    <button class="priceButton price-button-inside false" style="font-family: inherit;font-size: inherit;line-height: inherit; border: 1px solid #34000D;border-radius: 5px;background-color: #fff;color: #34000D;padding: 5px 10px;text-align: center;text-decoration: none;display: inline-block;cursor: pointer;margin-top: 10px;">SELECT</button>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <th scope="row">
                                                                    <h5>6:00 am</h5>
                                                                    <h6>Thursday 11 Dec</h6>
                                                                    <h5>{{$userInput['to']}}</h5>
                                                                </th>
                                                                <td>
                                                                    <h5>1hr 15min</h5>
                                                                    <p><i class="fas fa-map-marker-alt"></i> <i class="fas fa-arrow-right"></i> <i class="fas fa-plane"></i> Non-stop </p>
                                                                    <h6>P47103</h6>
                                                                </td>
                                                                <td>
                                                                    <h5>7:00 am</h5>
                                                                    <h6>Thursday 11 Dec</h6>
                                                                    <h5>{{$userInput['from']}}</h5>
                                                                </td>
                                                                <td>
                                                                    <h6 style="font-weight:bold;">21,220.00</h6>
                                                                    <h5>NGN</h5>
                                                                    <button class="priceButton price-button-inside false" style="font-family: inherit;font-size: inherit;line-height: inherit; border: 1px solid #34000D;border-radius: 5px;background-color: #fff;color: #34000D;padding: 5px 10px;text-align: center;text-decoration: none;display: inline-block;cursor: pointer;margin-top: 10px;">SELECT</button>
                                                                </td>
                                                                <td>
                                                                    <h6 style="font-weight:bold;">24,990.00</h6>
                                                                    <h5>NGN</h5>
                                                                    <button class="priceButton price-button-inside false" style="font-family: inherit;font-size: inherit;line-height: inherit; border: 1px solid #34000D;border-radius: 5px;background-color: #fff;color: #34000D;padding: 5px 10px;text-align: center;text-decoration: none;display: inline-block;cursor: pointer;margin-top: 10px;">SELECT</button>
                                                                </td>
                                                                <td>
                                                                    <h6 style="font-weight:bold;">25,420.00</h6>
                                                                    <h5>NGN</h5>
                                                                    <button class="priceButton price-button-inside false" style="font-family: inherit;font-size: inherit;line-height: inherit; border: 1px solid #34000D;border-radius: 5px;background-color: #fff;color: #34000D;padding: 5px 10px;text-align: center;text-decoration: none;display: inline-block;cursor: pointer;margin-top: 10px;">SELECT</button>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <th scope="row">
                                                                    <h5>8:45 pm</h5>
                                                                    <h6>Thursday 11 Dec</h6>
                                                                    <h5>{{$userInput['to']}}</h5>
                                                                </th>
                                                                <td>
                                                                    <h5>1hr 15min</h5>
                                                                    <p><i class="fas fa-map-marker-alt"></i> <i class="fas fa-arrow-right"></i> <i class="fas fa-plane"></i> Non-stop </p>
                                                                    <h6>P47103</h6>
                                                                </td>
                                                                <td>
                                                                    <h5>10:00 pm</h5>
                                                                    <h6>Thursday 11 Dec</h6>
                                                                    <h5>{{$userInput['from']}}</h5>
                                                                </td>
                                                                <td>
                                                                    <h6 style="font-weight:bold;">20,000.00</h6>
                                                                    <h5>NGN</h5>
                                                                    <button class="priceButton price-button-inside false" style="font-family: inherit;font-size: inherit;line-height: inherit; border: 1px solid #34000D;border-radius: 5px;background-color: #fff;color: #34000D;padding: 5px 10px;text-align: center;text-decoration: none;display: inline-block;cursor: pointer;margin-top: 10px;">SELECT</button>
                                                                </td>
                                                                <td>
                                                                    <h6 style="font-weight:bold;">22,220.00</h6>
                                                                    <h5>NGN</h5>
                                                                    <button class="priceButton price-button-inside false" style="font-family: inherit;font-size: inherit;line-height: inherit; border: 1px solid #34000D;border-radius: 5px;background-color: #fff;color: #34000D;padding: 5px 10px;text-align: center;text-decoration: none;display: inline-block;cursor: pointer;margin-top: 10px;">SELECT</button>
                                                                </td>
                                                                <td>
                                                                    <h6 style="font-weight:bold;">25,000.00</h6>
                                                                    <h5>NGN</h5>
                                                                    <button class="priceButton price-button-inside false" style="font-family: inherit;font-size: inherit;line-height: inherit; border: 1px solid #34000D;border-radius: 5px;background-color: #fff;color: #34000D;padding: 5px 10px;text-align: center;text-decoration: none;display: inline-block;cursor: pointer;margin-top: 10px;">SELECT</button>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                                <div class="tab-pane fade" id="nav-frid" role="tabpanel" aria-labelledby="nav-frid-tab">
                                                    <br>
                                                    <table class="table table-striped">
                                                        <tbody>
                                                            <tr>
                                                                <th scope="row">
                                                                    <h5>Flight Information</h5>
                                                                </th>
                                                                <th>
                                                                </th>
                                                                <th>
                                                                </th>
                                                                <th>
                                                                    <h5>Economy Non Flexi Regional</h5>
                                                                </th>
                                                                <th>
                                                                    <h5>Economy Flexi Regional</h5>
                                                                </th>
                                                                <th>
                                                                    <h5>Business</h5>
                                                                </th>
                                                            </tr>
                                                            <tr>
                                                                <th scope="row">
                                                                    <h5>1:30 am</h5>
                                                                    <h6>Friday 11 Dec</h6>
                                                                    <h5>{{$userInput['to']}}</h5>
                                                                </th>
                                                                <td>
                                                                    <h5>1hr 15min</h5>
                                                                    <p><i class="fas fa-map-marker-alt"></i> <i class="fas fa-arrow-right"></i> <i class="fas fa-plane"></i> Non-stop </p>
                                                                    <h6>P47001</h6>
                                                                </td>
                                                                <td>
                                                                    <h5>2:45 am</h5>
                                                                    <h6>Friday 11 Dec</h6>
                                                                    <h5>{{$userInput['from']}}</h5>
                                                                </td>
                                                                <td>
                                                                    <h6 style="font-weight:bold;">19,000.00</h6>
                                                                    <h5>NGN</h5>
                                                                    <button class="priceButton price-button-inside false" style="font-family: inherit;font-size: inherit;line-height: inherit; border: 1px solid #34000D;border-radius: 5px;background-color: #fff;color: #34000D;padding: 5px 10px;text-align: center;text-decoration: none;display: inline-block;cursor: pointer;margin-top: 10px;">SELECT</button>
                                                                </td>
                                                                <td>
                                                                    <h6 style="font-weight:bold;">25,200.00</h6>
                                                                    <h5>NGN</h5>
                                                                    <button class="priceButton price-button-inside false" style="font-family: inherit;font-size: inherit;line-height: inherit; border: 1px solid #34000D;border-radius: 5px;background-color: #fff;color: #34000D;padding: 5px 10px;text-align: center;text-decoration: none;display: inline-block;cursor: pointer;margin-top: 10px;">SELECT</button>
                                                                </td>
                                                                <td>
                                                                    <br>
                                                                    <br>
                                                                    <h6 style="font-weight:bold;">Sold Out</h6>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <th scope="row">
                                                                    <h5>7:15 am</h5>
                                                                    <h6>Friday 11 Dec</h6>
                                                                    <h5>{{$userInput['to']}}</h5>
                                                                </th>
                                                                <td>
                                                                    <h5>1hr 15min</h5>
                                                                    <p><i class="fas fa-map-marker-alt"></i> <i class="fas fa-arrow-right"></i> <i class="fas fa-plane"></i> Non-stop </p>
                                                                    <h6>P47001</h6>
                                                                </td>
                                                                <td>
                                                                    <h5>8:30 am</h5>
                                                                    <h6>Friday 11 Dec</h6>
                                                                    <h5>{{$userInput['from']}}</h5>
                                                                </td>
                                                                <td>
                                                                    <br>
                                                                    <br>
                                                                    <h6 style="font-weight:bold;">Sold Out</h6>
                                                                </td>
                                                                <td>
                                                                    <br>
                                                                    <br>
                                                                    <h6 style="font-weight:bold;">Sold Out</h6>
                                                                </td>
                                                                <td>
                                                                    <h6 style="font-weight:bold;">15,800.00</h6>
                                                                    <h5>NGN</h5>
                                                                    <button class="priceButton price-button-inside false" style="font-family: inherit;font-size: inherit;line-height: inherit; border: 1px solid #34000D;border-radius: 5px;background-color: #fff;color: #34000D;padding: 5px 10px;text-align: center;text-decoration: none;display: inline-block;cursor: pointer;margin-top: 10px;">SELECT</button>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <th scope="row">
                                                                    <h5>5:25 pm</h5>
                                                                    <h6>Friday 11 Dec</h6>
                                                                    <h5>{{$userInput['to']}}</h5>
                                                                </th>
                                                                <td>
                                                                    <h5>1hr 15min</h5>
                                                                    <p><i class="fas fa-map-marker-alt"></i> <i class="fas fa-arrow-right"></i> <i class="fas fa-plane"></i> Non-stop </p>
                                                                    <h6>P47001</h6>
                                                                </td>
                                                                <td>
                                                                    <h5>6:40 pm</h5>
                                                                    <h6>Friday 11 Dec</h6>
                                                                    <h5>{{$userInput['from']}}</h5>
                                                                </td>
                                                                <td>
                                                                    <h6 style="font-weight:bold;">15,550.00</h6>
                                                                    <h5>NGN</h5>
                                                                    <button class="priceButton price-button-inside false" style="font-family: inherit;font-size: inherit;line-height: inherit; border: 1px solid #34000D;border-radius: 5px;background-color: #fff;color: #34000D;padding: 5px 10px;text-align: center;text-decoration: none;display: inline-block;cursor: pointer;margin-top: 10px;">SELECT</button>
                                                                </td>
                                                                <td>
                                                                    <br>
                                                                    <br>
                                                                    <h6 style="font-weight:bold;">Sold Out</h6>
                                                                </td>
                                                                <td>
                                                                    <h6 style="font-weight:bold;">25,900.00</h6>
                                                                    <h5>NGN</h5>
                                                                    <button class="priceButton price-button-inside false" style="font-family: inherit;font-size: inherit;line-height: inherit; border: 1px solid #34000D;border-radius: 5px;background-color: #fff;color: #34000D;padding: 5px 10px;text-align: center;text-decoration: none;display: inline-block;cursor: pointer;margin-top: 10px;">SELECT</button>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                                <div class="tab-pane fade" id="nav-satu" role="tabpanel" aria-labelledby="nav-satu-tab">
                                                    <br>
                                                    <table class="table table-striped">
                                                        <tbody>
                                                            <tr>
                                                                <th scope="row">
                                                                    <h5>Flight Information</h5>
                                                                </th>
                                                                <th>
                                                                </th>
                                                                <th>
                                                                </th>
                                                                <th>
                                                                    <h5>Economy Non Flexi Regional</h5>
                                                                </th>
                                                                <th>
                                                                    <h5>Economy Flexi Regional</h5>
                                                                </th>
                                                                <th>
                                                                    <h5>Business</h5>
                                                                </th>
                                                            </tr>
                                                            <tr>
                                                                <th scope="row">
                                                                    <h5>3:00 am</h5>
                                                                    <h6>Saturday 11 Dec</h6>
                                                                    <h5>{{$userInput['to']}}</h5>
                                                                </th>
                                                                <td>
                                                                    <h5>1hr 15min</h5>
                                                                    <p><i class="fas fa-map-marker-alt"></i> <i class="fas fa-arrow-right"></i> <i class="fas fa-plane"></i> Non-stop </p>
                                                                    <h6>P47863</h6>
                                                                </td>
                                                                <td>
                                                                    <h5>4:15 am</h5>
                                                                    <h6>Saturday 11 Dec</h6>
                                                                    <h5>{{$userInput['from']}}</h5>
                                                                </td>
                                                                <td>
                                                                    <br>
                                                                    <br>
                                                                    <h6 style="font-weight:bold;">Sold Out</h6>
                                                                </td>
                                                                <td>
                                                                    <h6 style="font-weight:bold;">11,570.00</h6>
                                                                    <h5>NGN</h5>
                                                                    <button class="priceButton price-button-inside false" style="font-family: inherit;font-size: inherit;line-height: inherit; border: 1px solid #34000D;border-radius: 5px;background-color: #fff;color: #34000D;padding: 5px 10px;text-align: center;text-decoration: none;display: inline-block;cursor: pointer;margin-top: 10px;">SELECT</button>
                                                                </td>
                                                                <td>
                                                                    <h6 style="font-weight:bold;">19,630.00</h6>
                                                                    <h5>NGN</h5>
                                                                    <button class="priceButton price-button-inside false" style="font-family: inherit;font-size: inherit;line-height: inherit; border: 1px solid #34000D;border-radius: 5px;background-color: #fff;color: #34000D;padding: 5px 10px;text-align: center;text-decoration: none;display: inline-block;cursor: pointer;margin-top: 10px;">SELECT</button>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <th scope="row">
                                                                    <h5>7:30 am</h5>
                                                                    <h6>Saturday 11 Dec</h6>
                                                                    <h5>{{$userInput['to']}}</h5>
                                                                </th>
                                                                <td>
                                                                    <h5>1hr 15min</h5>
                                                                    <p><i class="fas fa-map-marker-alt"></i> <i class="fas fa-arrow-right"></i> <i class="fas fa-plane"></i> Non-stop </p>
                                                                    <h6>P47863</h6>
                                                                </td>
                                                                <td>
                                                                    <h5>8:45 am</h5>
                                                                    <h6>Saturday 11 Dec</h6>
                                                                    <h5>{{$userInput['from']}}</h5>
                                                                </td>
                                                                <td>
                                                                    <h6 style="font-weight:bold;">13,570.00</h6>
                                                                    <h5>NGN</h5>
                                                                    <button class="priceButton price-button-inside false" style="font-family: inherit;font-size: inherit;line-height: inherit; border: 1px solid #34000D;border-radius: 5px;background-color: #fff;color: #34000D;padding: 5px 10px;text-align: center;text-decoration: none;display: inline-block;cursor: pointer;margin-top: 10px;">SELECT</button>
                                                                </td>
                                                                <td>
                                                                    <h6 style="font-weight:bold;">18,610.00</h6>
                                                                    <h5>NGN</h5>
                                                                    <button class="priceButton price-button-inside false" style="font-family: inherit;font-size: inherit;line-height: inherit; border: 1px solid #34000D;border-radius: 5px;background-color: #fff;color: #34000D;padding: 5px 10px;text-align: center;text-decoration: none;display: inline-block;cursor: pointer;margin-top: 10px;">SELECT</button>
                                                                </td>
                                                                <td>
                                                                    <br>
                                                                    <br>
                                                                    <h6 style="font-weight:bold;">Sold Out</h6>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <th scope="row">
                                                                    <h5>9:10 pm</h5>
                                                                    <h6>Saturday 11 Dec</h6>
                                                                    <h5>{{$userInput['to']}}</h5>
                                                                </th>
                                                                <td>
                                                                    <h5>1hr 15min</h5>
                                                                    <p><i class="fas fa-map-marker-alt"></i> <i class="fas fa-arrow-right"></i> <i class="fas fa-plane"></i> Non-stop </p>
                                                                    <h6>P47863</h6>
                                                                </td>
                                                                <td>
                                                                    <h5>10:25 pm</h5>
                                                                    <h6>Saturday 11 Dec</h6>
                                                                    <h5>{{$userInput['from']}}</h5>
                                                                </td>
                                                                <td>
                                                                    <br>
                                                                    <br>
                                                                    <h6 style="font-weight:bold;">Sold Out</h6>
                                                                </td>
                                                                <td>
                                                                    <h6 style="font-weight:bold;">14,520.00</h6>
                                                                    <h5>NGN</h5>
                                                                    <button class="priceButton price-button-inside false" style="font-family: inherit;font-size: inherit;line-height: inherit; border: 1px solid #34000D;border-radius: 5px;background-color: #fff;color: #34000D;padding: 5px 10px;text-align: center;text-decoration: none;display: inline-block;cursor: pointer;margin-top: 10px;">SELECT</button>
                                                                </td>
                                                                <td>
                                                                    <h6 style="font-weight:bold;">18,610.00</h6>
                                                                    <h5>NGN</h5>
                                                                            <button class="priceButton price-button-inside false" style="font-family: inherit;font-size: inherit;line-height: inherit; border: 1px solid #34000D;border-radius: 5px;background-color: #fff;color: #34000D;padding: 5px 10px;text-align: center;text-decoration: none;display: inline-block;cursor: pointer;margin-top: 10px;">SELECT</button>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                                <div class="tab-pane fade" id="nav-sund" role="tabpanel" aria-labelledby="nav-sund-tab">
                                                    <br>
                                                    <table class="table table-striped">
                                                        <tbody>
                                                            <tr>
                                                                <th scope="row">
                                                                    <h5>Flight Information</h5>
                                                                </th>
                                                                <th>
                                                                </th>
                                                                <th>
                                                                </th>
                                                                <th>
                                                                    <h5>Economy Non Flexi Regional</h5>
                                                                </th>
                                                                <th>
                                                                    <h5>Economy Flexi Regional</h5>
                                                                </th>
                                                                <th>
                                                                    <h5>Business</h5>
                                                                </th>
                                                            </tr>
                                                            <tr>
                                                                <th scope="row">
                                                                    <h5>1:50 am</h5>
                                                                    <h6>Sunday 11 Dec</h6>
                                                                    <h5>{{$userInput['to']}}</h5>
                                                                </th>
                                                                <td>
                                                                    <h5>1hr 15min</h5>
                                                                    <p><i class="fas fa-map-marker-alt"></i> <i class="fas fa-arrow-right"></i> <i class="fas fa-plane"></i> Non-stop </p>
                                                                    <h6>P47173</h6>
                                                                </td>
                                                                <td>
                                                                    <h5>3:05 am</h5>
                                                                    <h6>Sunday 11 Dec</h6>
                                                                    <h5>{{$userInput['from']}}</h5>
                                                                </td>
                                                                <td>
                                                                    <h6 style="font-weight:bold;">18,610.00</h6>
                                                                    <h5>NGN</h5>
                                                                    <button class="priceButton price-button-inside false" style="font-family: inherit;font-size: inherit;line-height: inherit; border: 1px solid #34000D;border-radius: 5px;background-color: #fff;color: #34000D;padding: 5px 10px;text-align: center;text-decoration: none;display: inline-block;cursor: pointer;margin-top: 10px;">SELECT</button>
                                                                </td>
                                                                <td>
                                                                    <h6 style="font-weight:bold;">39,000.00</h6>
                                                                    <h5>NGN</h5>
                                                                    <button class="priceButton price-button-inside false" style="font-family: inherit;font-size: inherit;line-height: inherit; border: 1px solid #34000D;border-radius: 5px;background-color: #fff;color: #34000D;padding: 5px 10px;text-align: center;text-decoration: none;display: inline-block;cursor: pointer;margin-top: 10px;">SELECT</button>
                                                                </td>
                                                                <td>
                                                                    <br>
                                                                    <br>
                                                                    <h6 style="font-weight:bold;">Sold Out</h6>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <th scope="row">
                                                                    <h5>8:20 am</h5>
                                                                    <h6>Sunday 11 Dec</h6>
                                                                    <h5>{{$userInput['to']}}</h5>
                                                                </th>
                                                                <td>
                                                                    <h5>1hr 15min</h5>
                                                                    <p><i class="fas fa-map-marker-alt"></i> <i class="fas fa-arrow-right"></i> <i class="fas fa-plane"></i> Non-stop </p>
                                                                    <h6>P47173</h6>
                                                                </td>
                                                                <td>
                                                                    <h5>9:35 am</h5>
                                                                    <h6>Sunday 11 Dec</h6>
                                                                    <h5>{{$userInput['from']}}</h5>
                                                                </td>
                                                                <td>
                                                                    <br>
                                                                    <br>
                                                                    <h6 style="font-weight:bold;">Sold Out</h6>
                                                                </td>
                                                                <td>
                                                                    <br>
                                                                    <br>
                                                                    <h6 style="font-weight:bold;">Sold Out</h6>
                                                                </td>
                                                                <td>
                                                                    <h6 style="font-weight:bold;">22,000.00</h6>
                                                                    <h5>NGN</h5>
                                                                    <button class="priceButton price-button-inside false" style="font-family: inherit;font-size: inherit;line-height: inherit; border: 1px solid #34000D;border-radius: 5px;background-color: #fff;color: #34000D;padding: 5px 10px;text-align: center;text-decoration: none;display: inline-block;cursor: pointer;margin-top: 10px;">SELECT</button>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <th scope="row">
                                                                    <h5>8:30 pm</h5>
                                                                    <h6>Sunday 11 Dec</h6>
                                                                    <h5>{{$userInput['to']}}</h5>
                                                                </th>
                                                                <td>
                                                                    <h5>1hr 15min</h5>
                                                                    <p><i class="fas fa-map-marker-alt"></i> <i class="fas fa-arrow-right"></i> <i class="fas fa-plane"></i> Non-stop </p>
                                                                    <h6>P47173</h6>
                                                                </td>
                                                                <td>
                                                                    <h5>9:30 pm</h5>
                                                                    <h6>Sunday 11 Dec</h6>
                                                                    <h5>{{$userInput['from']}}</h5>
                                                                </td>
                                                                <td>
                                                                    <h6 style="font-weight:bold;">19,000.00</h6>
                                                                    <h5>NGN</h5>
                                                                    <button class="priceButton price-button-inside false" style="font-family: inherit;font-size: inherit;line-height: inherit; border: 1px solid #34000D;border-radius: 5px;background-color: #fff;color: #34000D;padding: 5px 10px;text-align: center;text-decoration: none;display: inline-block;cursor: pointer;margin-top: 10px;">SELECT</button>
                                                                </td>
                                                                <td>
                                                                    <h6 style="font-weight:bold;">28,700.00</h6>
                                                                    <h5>NGN</h5>
                                                                    <button class="priceButton price-button-inside false" style="font-family: inherit;font-size: inherit;line-height: inherit; border: 1px solid #34000D;border-radius: 5px;background-color: #fff;color: #34000D;padding: 5px 10px;text-align: center;text-decoration: none;display: inline-block;cursor: pointer;margin-top: 10px;">SELECT</button>
                                                                </td>
                                                                <td>
                                                                    <h6 style="font-weight:bold;">33,000.00</h6>
                                                                    <h5>NGN</h5>
                                                                    <button class="priceButton price-button-inside false" style="font-family: inherit;font-size: inherit;line-height: inherit; border: 1px solid #34000D;border-radius: 5px;background-color: #fff;color: #34000D;padding: 5px 10px;text-align: center;text-decoration: none;display: inline-block;cursor: pointer;margin-top: 10px;">SELECT</button>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            @elseif($userInput['arrival'] =='')

                            @endif




                            <br>

                        </div>
                    </div>
                    <div id="tabs-2">

                        <div>
                            <div class="card-deck mb-3">
                                <div class="card mb-4 shadow-sm">
                                    <div class="card-header">
                                        <h4 class="my-0 font-weight-normal" style="text-align:left; font-size:20px;">General Flight info</h4>
                                    </div>
                                    <div class="card-body">
                                        <h6>No of adults: {{$userInput["adult_no"]}}</h6>
                                        <h6>No of Children: {{$userInput["child_no"]}}</h6>
                                        <h6>No of Infants: {{$userInput["infants_no"]}}</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div class="card mb-4 shadow-sm">
                            <div class="card-header">
                                <h4 class="my-0 font-weight-normal">OUTBOUND</h4>
                            </div>
                            
                            <div class="card-body">
                                <p><strong>{{$userInput['from']}} to {{$userInput['to']}} Flight No:</strong> <span id="option--flightNo">P47126</span> </p>
                                            <p><strong>Departure Time: </strong><span id="option--departure">{{$userInput['depart']}}</span></p>
                                            @if($userInput['arrival'] !='')
                                            <p><strong>Arrival Time: </strong><span id="option--arrival">{{$userInput['arrival']}}</span></p>
                                            @elseif($userInput['arrival'] =='')
                                            <p><strong>Arrival Time: </strong><span id="option--arrival"></span></p>
                                            @endif
                                            <p><strong>Fare Type: </strong><span id="option--fare-type">Economy Flexi Domestic</span></p>
                                            <p><strong>Duration: </strong><span id="option--duration">1hr 30mins</span></p>
                                            <p><strong>Net Fare: </strong><span id="option--price">37,000.00</span>NGN</p>
                                            <p><strong>Inc Tax: </strong><span id="option--tax">23,000.00</span>NGN</p>
                                            <p><strong>Total Fare: </strong><span id="option--total">60,000.00</span>NGN</p>
                                            <hr>
                                            <h4>Summary:</h4>
                                            <p><strong>Flights Total: </strong><span id="option--total1">140,000</span>NGN</p>
                                            <br>
                            </div>
                        </div>

                        @if ($userInput["arrival"])
                        <div class="card mb-4 shadow-sm option--inbound">
                            <div class="card-header">
                                <h4 class="my-0 font-weight-normal">INBOUND</h4>
                            </div>
                            
                            <div class="card-body">
                                <p><strong>{{$userInput['to']}} to {{$userInput['from']}} Flight No:</strong> <span id="option--inbound--flightNo">P47126</span> </p>
                                            <p><strong>Departure Time: </strong><span id="option--inbound--departure">{{$userInput['depart']}}</span></p>
                                            @if($userInput['arrival'] !='')
                                            <p><strong>Arrival Time: </strong><span id="option--inbound--arrival">{{$userInput['arrival']}}</span></p>
                                            @elseif($userInput['arrival'] =='')
                                            <p><strong>Arrival Time: </strong><span id="option--inbound--arrival"></span></p>
                                            @endif
                                            <p><strong>Fare Type: </strong><span id="option--inbound--fare-type">Economy Flexi Domestic</span></p>
                                            <p><strong>Duration: </strong><span id="option--inbound--duration">1hr 30mins</span></p>
                                            <p><strong>Net Fare: </strong><span id="option--inbound--price">37,000.00</span>NGN</p>
                                            <p><strong>Inc Tax: </strong><span id="option--inbound--tax">23,000.00</span>NGN</p>
                                            <p><strong>Total Fare: </strong><span id="option--inbound--total">60,000.00</span>NGN</p>
                                            <hr>
                                            <h4>Summary:</h4>
                                            <p><strong>Flights Total: </strong><span id="option--inbound--total1">140,000</span>NGN</p>
                                            <br>
                            </div>
                        </div>
                        @endif


                    </div>
                    <div id="tabs-3">
                        <form action="{{url("/payment")}}" method="POST">
                            @csrf
                        @for ($i = 1; $i <= $userInput["adult_no"]; $i++)
                        <div class="card mb-4 shadow-sm">
                            <div class="card-header">
                                <h4 class="my-0 font-weight-normal">Adult {{$i}}
                                    @if ($i === 1)
                                    <span>(Lead Passenger)</span>
                                    @endif
                                </h4>
                            </div>
                            <div class="card-body">
                                    <h4>Mandatory Information</h4>
                                    <div class="row">
                                        <div class="col-md-3 mb-3">
                                            <label for="country">Title</label>
                                            <select class="custom-select d-block w-100" id="title" required="" name="title-{{$i}}">
                                                <option value="">Alh</option>
                                                <option>Barr</option>
                                                <option>Bro</option>
                                                <option>Chf</option>
                                                <option>Dr</option>
                                                <option>Gov</option>
                                                <option>Hon</option>
                                                <option>HRH</option>
                                                <option>Miss</option>
                                                <option selected>Mr</option>
                                                <option>Mrs</option>
                                                <option>Ms</option>
                                                <option>Mstr</option>
                                                <option>Pres</option>
                                                <option>Prof</option>
                                                <option>Rev</option>
                                                <option>Sen</option>
                                                <option>Sir</option>
                                                <option>Sis</option>
                                            </select>
                                            
                                        </div>
                                        <div class="col-md-4 mb-3">
                                            <label for="firstName">First name</label>
                                            <input type="text" class="form-control" id="firstName" name="first_name-{{$i}}" placeholder="First Name" value="" required>
                                           
                                        </div>
                                        <div class="col-md-5 mb-3">
                                            <label for="lastName">Last name</label>
                                            <input type="text" class="form-control" id="lastName" placeholder="Last Name" name="last_name-{{$i}}" value="" required="">
                                          
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-6 mb-3">
                                            <label for="gender">Gender</label>
                                            <select class="custom-select d-block w-100" id="gender" name="gender-{{$i}}" required="Male">
                                                <option>Male</option>
                                                <option>Female</option>
                                            </select>
                                           
                                        </div>
                                        <div class="col-md-6 mb-3">
                                            <label for="country">Country</label>
                                            <select id="passenger1countryofresidence" name="country-{{$i}}" class=" form-control  required  PassengerDetailsInput_country PassengerDetailsInput_countryofresidence">
                                                <option value="{ 'FaxValue':'United Kingdom', 'FaxCode':'CNTY' }">United Kingdom</option>
                                                <option value="{ 'FaxValue':'United States of America', 'FaxCode':'CNTY' }">United States of America</option>
                                                <option value="{ 'FaxValue':'Afghanistan', 'FaxCode':'CNTY' }">Afghanistan</option>
                                                <option value="{ 'FaxValue':'Aland Islands', 'FaxCode':'CNTY' }">Aland Islands</option>
                                                <option value="{ 'FaxValue':'Albania', 'FaxCode':'CNTY' }">Albania</option>
                                                <option value="{ 'FaxValue':'Algeria', 'FaxCode':'CNTY' }">Algeria</option>
                                                <option value="{ 'FaxValue':'American Samoa', 'FaxCode':'CNTY' }">American Samoa</option>
                                                <option value="{ 'FaxValue':'Andorra', 'FaxCode':'CNTY' }">Andorra</option>
                                                <option value="{ 'FaxValue':'Angola', 'FaxCode':'CNTY' }">Angola</option>
                                                <option value="{ 'FaxValue':'Anguilla', 'FaxCode':'CNTY' }">Anguilla</option>
                                                <option value="{ 'FaxValue':'Antarctica', 'FaxCode':'CNTY' }">Antarctica</option>
                                                <option value="{ 'FaxValue':'Antigua &amp; Barbuda', 'FaxCode':'CNTY' }">Antigua &amp; Barbuda</option>
                                                <option value="{ 'FaxValue':'Argentina', 'FaxCode':'CNTY' }">Argentina</option>
                                                <option value="{ 'FaxValue':'Armenia', 'FaxCode':'CNTY' }">Armenia</option>
                                                <option value="{ 'FaxValue':'Aruba', 'FaxCode':'CNTY' }">Aruba</option>
                                                <option value="{ 'FaxValue':'Australia', 'FaxCode':'CNTY' }">Australia</option>
                                                <option value="{ 'FaxValue':'Austria', 'FaxCode':'CNTY' }">Austria</option>
                                                <option value="{ 'FaxValue':'Azerbaijan', 'FaxCode':'CNTY' }">Azerbaijan</option>
                                                <option value="{ 'FaxValue':'Bahamas', 'FaxCode':'CNTY' }">Bahamas</option>
                                                <option value="{ 'FaxValue':'Bahrain', 'FaxCode':'CNTY' }">Bahrain</option>
                                                <option value="{ 'FaxValue':'Bangladesh', 'FaxCode':'CNTY' }">Bangladesh</option>
                                                <option value="{ 'FaxValue':'Barbados', 'FaxCode':'CNTY' }">Barbados</option>
                                                <option value="{ 'FaxValue':'Belarus', 'FaxCode':'CNTY' }">Belarus</option>
                                                <option value="{ 'FaxValue':'Belgium', 'FaxCode':'CNTY' }">Belgium</option>
                                                <option value="{ 'FaxValue':'Belize', 'FaxCode':'CNTY' }">Belize</option>
                                                <option value="{ 'FaxValue':'Benin', 'FaxCode':'CNTY' }">Benin</option>
                                                <option value="{ 'FaxValue':'Bermuda', 'FaxCode':'CNTY' }">Bermuda</option>
                                                <option value="{ 'FaxValue':'Bhutan', 'FaxCode':'CNTY' }">Bhutan</option>
                                                <option value="{ 'FaxValue':'Bolivia', 'FaxCode':'CNTY' }">Bolivia</option>
                                                <option value="{ 'FaxValue':'Bonaire, Sint Eustatius &amp; Saba', 'FaxCode':'CNTY' }">Bonaire, Sint Eustatius &amp; Saba</option>
                                                <option value="{ 'FaxValue':'Bosnia &amp; Herzegovina', 'FaxCode':'CNTY' }">Bosnia &amp; Herzegovina</option>
                                                <option value="{ 'FaxValue':'Botswana', 'FaxCode':'CNTY' }">Botswana</option>
                                                <option value="{ 'FaxValue':'Bouvet Island', 'FaxCode':'CNTY' }">Bouvet Island</option>
                                                <option value="{ 'FaxValue':'Brazil', 'FaxCode':'CNTY' }">Brazil</option>
                                                <option value="{ 'FaxValue':'British Indian Ocean Territory', 'FaxCode':'CNTY' }">British Indian Ocean Territory</option>
                                                <option value="{ 'FaxValue':'Brunei Darussalam', 'FaxCode':'CNTY' }">Brunei Darussalam</option>
                                                <option value="{ 'FaxValue':'Bulgaria', 'FaxCode':'CNTY' }">Bulgaria</option>
                                                <option value="{ 'FaxValue':'Burkina Faso', 'FaxCode':'CNTY' }">Burkina Faso</option>
                                                <option value="{ 'FaxValue':'Burundi', 'FaxCode':'CNTY' }">Burundi</option>
                                                <option value="{ 'FaxValue':'Cambodia', 'FaxCode':'CNTY' }">Cambodia</option>
                                                <option value="{ 'FaxValue':'Cameroon', 'FaxCode':'CNTY' }">Cameroon</option>
                                                <option value="{ 'FaxValue':'Canada', 'FaxCode':'CNTY' }">Canada</option>
                                                <option value="{ 'FaxValue':'Cape verde', 'FaxCode':'CNTY' }">Cape verde</option>
                                                <option value="{ 'FaxValue':'Cayman Islands', 'FaxCode':'CNTY' }">Cayman Islands</option>
                                                <option value="{ 'FaxValue':'Central African Republic', 'FaxCode':'CNTY' }">Central African Republic</option>
                                                <option value="{ 'FaxValue':'Chad', 'FaxCode':'CNTY' }">Chad</option>
                                                <option value="{ 'FaxValue':'Chile', 'FaxCode':'CNTY' }">Chile</option>
                                                <option value="{ 'FaxValue':'China', 'FaxCode':'CNTY' }">China</option>
                                                <option value="{ 'FaxValue':'Christmas Island', 'FaxCode':'CNTY' }">Christmas Island</option>
                                                <option value="{ 'FaxValue':'Cocos (Keeling)  Islands', 'FaxCode':'CNTY' }">Cocos (Keeling) Islands</option>
                                                <option value="{ 'FaxValue':'Colombia', 'FaxCode':'CNTY' }">Colombia</option>
                                                <option value="{ 'FaxValue':'Comoros', 'FaxCode':'CNTY' }">Comoros</option>
                                                <option value="{ 'FaxValue':'Congo', 'FaxCode':'CNTY' }">Congo</option>
                                                <option value="{ 'FaxValue':'Congo Democratic Republic of The', 'FaxCode':'CNTY' }">Congo Democratic Republic of The</option>
                                                <option value="{ 'FaxValue':'Cook Islands', 'FaxCode':'CNTY' }">Cook Islands</option>
                                                <option value="{ 'FaxValue':'Costa Rica', 'FaxCode':'CNTY' }">Costa Rica</option>
                                                <option value="{ 'FaxValue':'Cote D'Ivoire', 'FaxCode':'CNTY' }">Cote D'Ivoire</option>
                                                <option value="{ 'FaxValue':'Croatia', 'FaxCode':'CNTY' }">Croatia</option>
                                                <option value="{ 'FaxValue':'Cuba', 'FaxCode':'CNTY' }">Cuba</option>
                                                <option value="{ 'FaxValue':'Curacao', 'FaxCode':'CNTY' }">Curacao</option>
                                                <option value="{ 'FaxValue':'Cyprus', 'FaxCode':'CNTY' }">Cyprus</option>
                                                <option value="{ 'FaxValue':'Czech Republic', 'FaxCode':'CNTY' }">Czech Republic</option>
                                                <option value="{ 'FaxValue':'Denmark', 'FaxCode':'CNTY' }">Denmark</option>
                                                <option value="{ 'FaxValue':'Djibouti', 'FaxCode':'CNTY' }">Djibouti</option>
                                                <option value="{ 'FaxValue':'Dominica', 'FaxCode':'CNTY' }">Dominica</option>
                                                <option value="{ 'FaxValue':'Dominican Republic', 'FaxCode':'CNTY' }">Dominican Republic</option>
                                                <option value="{ 'FaxValue':'East Timor', 'FaxCode':'CNTY' }">East Timor</option>
                                                <option value="{ 'FaxValue':'Ecuador', 'FaxCode':'CNTY' }">Ecuador</option>
                                                <option value="{ 'FaxValue':'Egypt', 'FaxCode':'CNTY' }">Egypt</option>
                                                <option value="{ 'FaxValue':'El Salvador', 'FaxCode':'CNTY' }">El Salvador</option>
                                                <option value="{ 'FaxValue':'Equatorial Guinea', 'FaxCode':'CNTY' }">Equatorial Guinea</option>
                                                <option value="{ 'FaxValue':'Eritrea', 'FaxCode':'CNTY' }">Eritrea</option>
                                                <option value="{ 'FaxValue':'Estonia', 'FaxCode':'CNTY' }">Estonia</option>
                                                <option value="{ 'FaxValue':'Ethiopia', 'FaxCode':'CNTY' }">Ethiopia</option>
                                                <option value="{ 'FaxValue':'Falkland Islands', 'FaxCode':'CNTY' }">Falkland Islands</option>
                                                <option value="{ 'FaxValue':'Faroe Islands', 'FaxCode':'CNTY' }">Faroe Islands</option>
                                                <option value="{ 'FaxValue':'Fiji', 'FaxCode':'CNTY' }">Fiji</option>
                                                <option value="{ 'FaxValue':'Finland', 'FaxCode':'CNTY' }">Finland</option>
                                                <option value="{ 'FaxValue':'France', 'FaxCode':'CNTY' }">France</option>
                                                <option value="{ 'FaxValue':'French Guiana', 'FaxCode':'CNTY' }">French Guiana</option>
                                                <option value="{ 'FaxValue':'French Polynesia', 'FaxCode':'CNTY' }">French Polynesia</option>
                                                <option value="{ 'FaxValue':'French Southern Territories', 'FaxCode':'CNTY' }">French Southern Territories</option>
                                                <option value="{ 'FaxValue':'Gabon', 'FaxCode':'CNTY' }">Gabon</option>
                                                <option value="{ 'FaxValue':'Gambia', 'FaxCode':'CNTY' }">Gambia</option>
                                                <option value="{ 'FaxValue':'Georgia', 'FaxCode':'CNTY' }">Georgia</option>
                                                <option value="{ 'FaxValue':'Germany', 'FaxCode':'CNTY' }">Germany</option>
                                                <option value="{ 'FaxValue':'Ghana', 'FaxCode':'CNTY' }">Ghana</option>
                                                <option value="{ 'FaxValue':'Gibraltar', 'FaxCode':'CNTY' }">Gibraltar</option>
                                                <option value="{ 'FaxValue':'Greece', 'FaxCode':'CNTY' }">Greece</option>
                                                <option value="{ 'FaxValue':'Greenland', 'FaxCode':'CNTY' }">Greenland</option>
                                                <option value="{ 'FaxValue':'Grenada', 'FaxCode':'CNTY' }">Grenada</option>
                                                <option value="{ 'FaxValue':'Guadeloupe', 'FaxCode':'CNTY' }">Guadeloupe</option>
                                                <option value="{ 'FaxValue':'Guam', 'FaxCode':'CNTY' }">Guam</option>
                                                <option value="{ 'FaxValue':'Guatemala', 'FaxCode':'CNTY' }">Guatemala</option>
                                                <option value="{ 'FaxValue':'Guernsey', 'FaxCode':'CNTY' }">Guernsey</option>
                                                <option value="{ 'FaxValue':'Guinea', 'FaxCode':'CNTY' }">Guinea</option>
                                                <option value="{ 'FaxValue':'Guinea-Bissau', 'FaxCode':'CNTY' }">Guinea-Bissau</option>
                                                <option value="{ 'FaxValue':'Guyana', 'FaxCode':'CNTY' }">Guyana</option>
                                                <option value="{ 'FaxValue':'Haiti', 'FaxCode':'CNTY' }">Haiti</option>
                                                <option value="{ 'FaxValue':'Heard &amp; McDonald Islands', 'FaxCode':'CNTY' }">Heard &amp; McDonald Islands</option>
                                                <option value="{ 'FaxValue':'Honduras', 'FaxCode':'CNTY' }">Honduras</option>
                                                <option value="{ 'FaxValue':'Hong Kong', 'FaxCode':'CNTY' }">Hong Kong</option>
                                                <option value="{ 'FaxValue':'Hungary', 'FaxCode':'CNTY' }">Hungary</option>
                                                <option value="{ 'FaxValue':'Iceland', 'FaxCode':'CNTY' }">Iceland</option>
                                                <option value="{ 'FaxValue':'India', 'FaxCode':'CNTY' }">India</option>
                                                <option value="{ 'FaxValue':'Indonesia', 'FaxCode':'CNTY' }">Indonesia</option>
                                                <option value="{ 'FaxValue':'Iran', 'FaxCode':'CNTY' }">Iran</option>
                                                <option value="{ 'FaxValue':'Iraq', 'FaxCode':'CNTY' }">Iraq</option>
                                                <option value="{ 'FaxValue':'Ireland', 'FaxCode':'CNTY' }">Ireland</option>
                                                <option value="{ 'FaxValue':'Isle of Man', 'FaxCode':'CNTY' }">Isle of Man</option>
                                                <option value="{ 'FaxValue':'Israel', 'FaxCode':'CNTY' }">Israel</option>
                                                <option value="{ 'FaxValue':'Italy', 'FaxCode':'CNTY' }">Italy</option>
                                                <option value="{ 'FaxValue':'Jamaica', 'FaxCode':'CNTY' }">Jamaica</option>
                                                <option value="{ 'FaxValue':'Japan', 'FaxCode':'CNTY' }">Japan</option>
                                                <option value="{ 'FaxValue':'Jersey', 'FaxCode':'CNTY' }">Jersey</option>
                                                <option value="{ 'FaxValue':'Jordan', 'FaxCode':'CNTY' }">Jordan</option>
                                                <option value="{ 'FaxValue':'Kazakhstan', 'FaxCode':'CNTY' }">Kazakhstan</option>
                                                <option value="{ 'FaxValue':'Kenya', 'FaxCode':'CNTY' }">Kenya</option>
                                                <option value="{ 'FaxValue':'Kiribati', 'FaxCode':'CNTY' }">Kiribati</option>
                                                <option value="{ 'FaxValue':'Korea Democratic People's Republic of', 'FaxCode':'CNTY' }">Korea Democratic People's Republic of</option>
                                                <option value="{ 'FaxValue':'Korea Republic of', 'FaxCode':'CNTY' }">Korea Republic of</option>
                                                <option value="{ 'FaxValue':'Kuwait', 'FaxCode':'CNTY' }">Kuwait</option>
                                                <option value="{ 'FaxValue':'Kyrgyzstan', 'FaxCode':'CNTY' }">Kyrgyzstan</option>
                                                <option value="{ 'FaxValue':'Lao People's Democratic Republic', 'FaxCode':'CNTY' }">Lao People's Democratic Republic</option>
                                                <option value="{ 'FaxValue':'Latvia', 'FaxCode':'CNTY' }">Latvia</option>
                                                <option value="{ 'FaxValue':'Lebanon', 'FaxCode':'CNTY' }">Lebanon</option>
                                                <option value="{ 'FaxValue':'Lesotho', 'FaxCode':'CNTY' }">Lesotho</option>
                                                <option value="{ 'FaxValue':'Liberia', 'FaxCode':'CNTY' }">Liberia</option>
                                                <option value="{ 'FaxValue':'Libyan Arab Jamahiriya', 'FaxCode':'CNTY' }">Libyan Arab Jamahiriya</option>
                                                <option value="{ 'FaxValue':'Liechtenstein', 'FaxCode':'CNTY' }">Liechtenstein</option>
                                                <option value="{ 'FaxValue':'Lithuania', 'FaxCode':'CNTY' }">Lithuania</option>
                                                <option value="{ 'FaxValue':'Luxembourg', 'FaxCode':'CNTY' }">Luxembourg</option>
                                                <option value="{ 'FaxValue':'Macau', 'FaxCode':'CNTY' }">Macau</option>
                                                <option value="{ 'FaxValue':'Macedonia', 'FaxCode':'CNTY' }">Macedonia</option>
                                                <option value="{ 'FaxValue':'Madagascar', 'FaxCode':'CNTY' }">Madagascar</option>
                                                <option value="{ 'FaxValue':'Malawi', 'FaxCode':'CNTY' }">Malawi</option>
                                                <option value="{ 'FaxValue':'Malaysia', 'FaxCode':'CNTY' }">Malaysia</option>
                                                <option value="{ 'FaxValue':'Maldives', 'FaxCode':'CNTY' }">Maldives</option>
                                                <option value="{ 'FaxValue':'Mali', 'FaxCode':'CNTY' }">Mali</option>
                                                <option value="{ 'FaxValue':'Malta', 'FaxCode':'CNTY' }">Malta</option>
                                                <option value="{ 'FaxValue':'Marshall Islands', 'FaxCode':'CNTY' }">Marshall Islands</option>
                                                <option value="{ 'FaxValue':'Martinique', 'FaxCode':'CNTY' }">Martinique</option>
                                                <option value="{ 'FaxValue':'Mauritania', 'FaxCode':'CNTY' }">Mauritania</option>
                                                <option value="{ 'FaxValue':'Mauritius', 'FaxCode':'CNTY' }">Mauritius</option>
                                                <option value="{ 'FaxValue':'Mayotte', 'FaxCode':'CNTY' }">Mayotte</option>
                                                <option value="{ 'FaxValue':'Mexico', 'FaxCode':'CNTY' }">Mexico</option>
                                                <option value="{ 'FaxValue':'Micronesia', 'FaxCode':'CNTY' }">Micronesia</option>
                                                <option value="{ 'FaxValue':'Moldova', 'FaxCode':'CNTY' }">Moldova</option>
                                                <option value="{ 'FaxValue':'Monaco', 'FaxCode':'CNTY' }">Monaco</option>
                                                <option value="{ 'FaxValue':'Mongolia', 'FaxCode':'CNTY' }">Mongolia</option>
                                                <option value="{ 'FaxValue':'Montenegro', 'FaxCode':'CNTY' }">Montenegro</option>
                                                <option value="{ 'FaxValue':'Montserrat', 'FaxCode':'CNTY' }">Montserrat</option>
                                                <option value="{ 'FaxValue':'Morocco', 'FaxCode':'CNTY' }">Morocco</option>
                                                <option value="{ 'FaxValue':'Mozambique', 'FaxCode':'CNTY' }">Mozambique</option>
                                                <option value="{ 'FaxValue':'Myanmar', 'FaxCode':'CNTY' }">Myanmar</option>
                                                <option value="{ 'FaxValue':'Namibia', 'FaxCode':'CNTY' }">Namibia</option>
                                                <option value="{ 'FaxValue':'Nauru', 'FaxCode':'CNTY' }">Nauru</option>
                                                <option value="{ 'FaxValue':'Nepal', 'FaxCode':'CNTY' }">Nepal</option>
                                                <option value="{ 'FaxValue':'Netherlands', 'FaxCode':'CNTY' }">Netherlands</option>
                                                <option value="{ 'FaxValue':'Netherlands Antilles', 'FaxCode':'CNTY' }">Netherlands Antilles</option>
                                                <option value="{ 'FaxValue':'New Caledonia', 'FaxCode':'CNTY' }">New Caledonia</option>
                                                <option value="{ 'FaxValue':'New Zealand', 'FaxCode':'CNTY' }">New Zealand</option>
                                                <option value="{ 'FaxValue':'Nicaragua', 'FaxCode':'CNTY' }">Nicaragua</option>
                                                <option value="{ 'FaxValue':'Niger', 'FaxCode':'CNTY' }">Niger</option>
                                                <option value="{ 'FaxValue':'Nigeria', 'FaxCode':'CNTY' }" selected="">Nigeria</option>
                                                <option value="{ 'FaxValue':'Niue', 'FaxCode':'CNTY' }">Niue</option>
                                                <option value="{ 'FaxValue':'Norfolk Island', 'FaxCode':'CNTY' }">Norfolk Island</option>
                                                <option value="{ 'FaxValue':'Northern Mariana Islands', 'FaxCode':'CNTY' }">Northern Mariana Islands</option>
                                                <option value="{ 'FaxValue':'Norway', 'FaxCode':'CNTY' }">Norway</option>
                                                <option value="{ 'FaxValue':'Occupied Palestinian Territory', 'FaxCode':'CNTY' }">Occupied Palestinian Territory</option>
                                                <option value="{ 'FaxValue':'Oman', 'FaxCode':'CNTY' }">Oman</option>
                                                <option value="{ 'FaxValue':'Pakistan', 'FaxCode':'CNTY' }">Pakistan</option>
                                                <option value="{ 'FaxValue':'Palau', 'FaxCode':'CNTY' }">Palau</option>
                                                <option value="{ 'FaxValue':'Panama', 'FaxCode':'CNTY' }">Panama</option>
                                                <option value="{ 'FaxValue':'Papua New Guinea', 'FaxCode':'CNTY' }">Papua New Guinea</option>
                                                <option value="{ 'FaxValue':'Paraguay', 'FaxCode':'CNTY' }">Paraguay</option>
                                                <option value="{ 'FaxValue':'Peru', 'FaxCode':'CNTY' }">Peru</option>
                                                <option value="{ 'FaxValue':'Philippines', 'FaxCode':'CNTY' }">Philippines</option>
                                                <option value="{ 'FaxValue':'Pitcairn Island', 'FaxCode':'CNTY' }">Pitcairn Island</option>
                                                <option value="{ 'FaxValue':'Poland', 'FaxCode':'CNTY' }">Poland</option>
                                                <option value="{ 'FaxValue':'Portugal', 'FaxCode':'CNTY' }">Portugal</option>
                                                <option value="{ 'FaxValue':'Puerto Rico', 'FaxCode':'CNTY' }">Puerto Rico</option>
                                                <option value="{ 'FaxValue':'Qatar', 'FaxCode':'CNTY' }">Qatar</option>
                                                <option value="{ 'FaxValue':'Reunion', 'FaxCode':'CNTY' }">Reunion</option>
                                                <option value="{ 'FaxValue':'Romania', 'FaxCode':'CNTY' }">Romania</option>
                                                <option value="{ 'FaxValue':'Russian Federation', 'FaxCode':'CNTY' }">Russian Federation</option>
                                                <option value="{ 'FaxValue':'Rwanda', 'FaxCode':'CNTY' }">Rwanda</option>
                                                <option value="{ 'FaxValue':'Saint Barthélemy', 'FaxCode':'CNTY' }">Saint Barthélemy</option>
                                                <option value="{ 'FaxValue':'Saint Lucia', 'FaxCode':'CNTY' }">Saint Lucia</option>
                                                <option value="{ 'FaxValue':'Saint Martin (French)', 'FaxCode':'CNTY' }">Saint Martin (French)</option>
                                                <option value="{ 'FaxValue':'Saint Vincent &amp; the Grenadines', 'FaxCode':'CNTY' }">Saint Vincent &amp; the Grenadines</option>
                                                <option value="{ 'FaxValue':'San Marino', 'FaxCode':'CNTY' }">San Marino</option>
                                                <option value="{ 'FaxValue':'Sao Tome &amp; Principe', 'FaxCode':'CNTY' }">Sao Tome &amp; Principe</option>
                                                <option value="{ 'FaxValue':'Saudi Arabia', 'FaxCode':'CNTY' }">Saudi Arabia</option>
                                                <option value="{ 'FaxValue':'Senegal', 'FaxCode':'CNTY' }">Senegal</option>
                                                <option value="{ 'FaxValue':'Serbia', 'FaxCode':'CNTY' }">Serbia</option>
                                                <option value="{ 'FaxValue':'Seychelles', 'FaxCode':'CNTY' }">Seychelles</option>
                                                <option value="{ 'FaxValue':'Sierra Leone', 'FaxCode':'CNTY' }">Sierra Leone</option>
                                                <option value="{ 'FaxValue':'Singapore', 'FaxCode':'CNTY' }">Singapore</option>
                                                <option value="{ 'FaxValue':'Sint Maarten (Dutch)', 'FaxCode':'CNTY' }">Sint Maarten (Dutch)</option>
                                                <option value="{ 'FaxValue':'Slovakia', 'FaxCode':'CNTY' }">Slovakia</option>
                                                <option value="{ 'FaxValue':'Slovenia', 'FaxCode':'CNTY' }">Slovenia</option>
                                                <option value="{ 'FaxValue':'Solomon Islands', 'FaxCode':'CNTY' }">Solomon Islands</option>
                                                <option value="{ 'FaxValue':'Somalia', 'FaxCode':'CNTY' }">Somalia</option>
                                                <option value="{ 'FaxValue':'South Africa', 'FaxCode':'CNTY' }">South Africa</option>
                                                <option value="{ 'FaxValue':'South Georgia &amp; Sandwich Islands', 'FaxCode':'CNTY' }">South Georgia &amp; Sandwich Islands</option>
                                                <option value="{ 'FaxValue':'South Sudan', 'FaxCode':'CNTY' }">South Sudan</option>
                                                <option value="{ 'FaxValue':'Spain &amp; Canary Islands', 'FaxCode':'CNTY' }">Spain &amp; Canary Islands</option>
                                                <option value="{ 'FaxValue':'Sri Lanka', 'FaxCode':'CNTY' }">Sri Lanka</option>
                                                <option value="{ 'FaxValue':'St. Helena', 'FaxCode':'CNTY' }">St. Helena</option>
                                                <option value="{ 'FaxValue':'St. Kitts &amp; Nevis', 'FaxCode':'CNTY' }">St. Kitts &amp; Nevis</option>
                                                <option value="{ 'FaxValue':'St. Pierre &amp; Miquelon', 'FaxCode':'CNTY' }">St. Pierre &amp; Miquelon</option>
                                                <option value="{ 'FaxValue':'Sudan', 'FaxCode':'CNTY' }">Sudan</option>
                                                <option value="{ 'FaxValue':'Suriname', 'FaxCode':'CNTY' }">Suriname</option>
                                                <option value="{ 'FaxValue':'Svalbard &amp; Jan Mayen Island', 'FaxCode':'CNTY' }">Svalbard &amp; Jan Mayen Island</option>
                                                <option value="{ 'FaxValue':'Swaziland', 'FaxCode':'CNTY' }">Swaziland</option>
                                                <option value="{ 'FaxValue':'Sweden', 'FaxCode':'CNTY' }">Sweden</option>
                                                <option value="{ 'FaxValue':'Switzerland', 'FaxCode':'CNTY' }">Switzerland</option>
                                                <option value="{ 'FaxValue':'Syrian Arab Republic', 'FaxCode':'CNTY' }">Syrian Arab Republic</option>
                                                <option value="{ 'FaxValue':'Taiwan', 'FaxCode':'CNTY' }">Taiwan</option>
                                                <option value="{ 'FaxValue':'Tajikistan', 'FaxCode':'CNTY' }">Tajikistan</option>
                                                <option value="{ 'FaxValue':'Tanzania', 'FaxCode':'CNTY' }">Tanzania</option>
                                                <option value="{ 'FaxValue':'Thailand', 'FaxCode':'CNTY' }">Thailand</option>
                                                <option value="{ 'FaxValue':'Timor-Leste', 'FaxCode':'CNTY' }">Timor-Leste</option>
                                                <option value="{ 'FaxValue':'Togo', 'FaxCode':'CNTY' }">Togo</option>
                                                <option value="{ 'FaxValue':'Tokelau', 'FaxCode':'CNTY' }">Tokelau</option>
                                                <option value="{ 'FaxValue':'Tonga', 'FaxCode':'CNTY' }">Tonga</option>
                                                <option value="{ 'FaxValue':'Trinidad &amp; Tobago', 'FaxCode':'CNTY' }">Trinidad &amp; Tobago</option>
                                                <option value="{ 'FaxValue':'Tunisia', 'FaxCode':'CNTY' }">Tunisia</option>
                                                <option value="{ 'FaxValue':'Turkey', 'FaxCode':'CNTY' }">Turkey</option>
                                                <option value="{ 'FaxValue':'Turkmenistan', 'FaxCode':'CNTY' }">Turkmenistan</option>
                                                <option value="{ 'FaxValue':'Turks &amp; Caicos Islands', 'FaxCode':'CNTY' }">Turks &amp; Caicos Islands</option>
                                                <option value="{ 'FaxValue':'Tuvalu', 'FaxCode':'CNTY' }">Tuvalu</option>
                                                <option value="{ 'FaxValue':'Uganda', 'FaxCode':'CNTY' }">Uganda</option>
                                                <option value="{ 'FaxValue':'Ukraine', 'FaxCode':'CNTY' }">Ukraine</option>
                                                <option value="{ 'FaxValue':'United Arab Emirates', 'FaxCode':'CNTY' }">United Arab Emirates</option>
                                                <option value="{ 'FaxValue':'Uruguay', 'FaxCode':'CNTY' }">Uruguay</option>
                                                <option value="{ 'FaxValue':'US Minor Outlying Islands', 'FaxCode':'CNTY' }">US Minor Outlying Islands</option>
                                                <option value="{ 'FaxValue':'Uzbekistan', 'FaxCode':'CNTY' }">Uzbekistan</option>
                                                <option value="{ 'FaxValue':'Vanuatu', 'FaxCode':'CNTY' }">Vanuatu</option>
                                                <option value="{ 'FaxValue':'Vatican City', 'FaxCode':'CNTY' }">Vatican City</option>
                                                <option value="{ 'FaxValue':'Venezuela', 'FaxCode':'CNTY' }">Venezuela</option>
                                                <option value="{ 'FaxValue':'Vietnam', 'FaxCode':'CNTY' }">Vietnam</option>
                                                <option value="{ 'FaxValue':'Virgin Islands (British)', 'FaxCode':'CNTY' }">Virgin Islands (British)</option>
                                                <option value="{ 'FaxValue':'Virgin Islands (US)', 'FaxCode':'CNTY' }">Virgin Islands (US)</option>
                                                <option value="{ 'FaxValue':'Wallis &amp; Futuna Islands', 'FaxCode':'CNTY' }">Wallis &amp; Futuna Islands</option>
                                                <option value="{ 'FaxValue':'Western Sahara', 'FaxCode':'CNTY' }">Western Sahara</option>
                                                <option value="{ 'FaxValue':'Western Samoa', 'FaxCode':'CNTY' }">Western Samoa</option>
                                                <option value="{ 'FaxValue':'Yemen', 'FaxCode':'CNTY' }">Yemen</option>
                                                <option value="{ 'FaxValue':'Zambia', 'FaxCode':'CNTY' }">Zambia</option>
                                                <option value="{ 'FaxValue':'Zimbabwe', 'FaxCode':'CNTY' }">Zimbabwe</option>ss
                                            </select>
                                           
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-6 mb-3">
                                            <label for="cc-mobile_number">Mobile Number</label>
                                            <div class="row">
                                                <a class="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> +234
                                                </a>
                                                <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                                    <a href="#" class="dropdown-item" data-value="1">USA (1)</a>
                                                    <a href="#" class="dropdown-item" data-value="93">Afghanistan (93)</a>
                                                    <a href="#" class="dropdown-item" data-value="355">Albania (355)</a>
                                                    <a href="#" class="dropdown-item" data-value="213">Algeria (213)</a>
                                                    <a href="#" class="dropdown-item" data-value="684">American Samoa (684)</a>
                                                    <a href="#" class="dropdown-item" data-value="376">Andorra (376)</a>
                                                    <a href="#" class="dropdown-item" data-value="244">Angola (244)</a>
                                                    <a href="#" class="dropdown-item" data-value="1 264">Anguilla (1 264)</a>
                                                    <a href="#" class="dropdown-item" data-value="672">Antarctic Australian Territory (672)</a>
                                                    <a href="#" class="dropdown-item" data-value="1 268">Antigua and Barbuda (1 268)</a>
                                                    <a href="#" class="dropdown-item" data-value="54">Argentina (54)</a>
                                                    <a href="#" class="dropdown-item" data-value="374">Armenia (374)</a>
                                                    <a href="#" class="dropdown-item" data-value="297">Aruba (297)</a>
                                                    <a href="#" class="dropdown-item" data-value="247">Ascension Island (247)</a>
                                                    <a href="#" class="dropdown-item" data-value="61">Australia (incl Cocos Island) (61)</a>
                                                    <a href="#" class="dropdown-item" data-value="43">Austria (43)</a>
                                                    <a href="#" class="dropdown-item" data-value="994">Azerbaijan (994)</a>
                                                    <a href="#" class="dropdown-item" data-value="351">Azores (351)</a>
                                                    <a href="#" class="dropdown-item" data-value="1 242">Bahamas (1 242)</a>
                                                    <a href="#" class="dropdown-item" data-value="973">Bahrain (973)</a>
                                                    <a href="#" class="dropdown-item" data-value="34">Balearic Islands (34)</a>
                                                    <a href="#" class="dropdown-item" data-value="880">Bangladesh (880)</a>
                                                    <a href="#" class="dropdown-item" data-value="1 246">Barbados (1 246)</a>
                                                    <a href="#" class="dropdown-item" data-value="375">Belarus (Belorussia) (375)</a>
                                                    <a href="#" class="dropdown-item" data-value="32">Belgium (32)</a>
                                                    <a href="#" class="dropdown-item" data-value="501">Belize (501)</a>
                                                    <a href="#" class="dropdown-item" data-value="229">Benin (229)</a>
                                                    <a href="#" class="dropdown-item" data-value="1 441">Bermuda (1 441)</a>
                                                    <a href="#" class="dropdown-item" data-value="975">Bhutan (975)</a>
                                                    <a href="#" class="dropdown-item" data-value="591">Bolivia (591)</a>
                                                    <a href="#" class="dropdown-item" data-value="387">Bosnia-Herzegovina (387)</a>
                                                    <a href="#" class="dropdown-item" data-value="267">Botswana (267)</a>
                                                    <a href="#" class="dropdown-item" data-value="55">Brazil (55)</a>
                                                    <a href="#" class="dropdown-item" data-value="673">Brunei (673)</a>
                                                    <a href="#" class="dropdown-item" data-value="359">Bulgaria (359)</a>
                                                    <a href="#" class="dropdown-item" data-value="226">Burkina Faso (226)</a>
                                                    <a href="#" class="dropdown-item" data-value="95">Burma (95)</a>
                                                    <a href="#" class="dropdown-item" data-value="257">Burundi (257)</a>
                                                    <a href="#" class="dropdown-item" data-value="855">Cambodia (855)</a>
                                                    <a href="#" class="dropdown-item" data-value="237">Cameroon (237)</a>
                                                    <a href="#" class="dropdown-item" data-value="1">Canada (1)</a>
                                                    <a href="#" class="dropdown-item" data-value="34">Canary Islands (34)</a>
                                                    <a href="#" class="dropdown-item" data-value="238">Cape Verde (238)</a>
                                                    <a href="#" class="dropdown-item" data-value="1 345">Cayman Islands (1 345)</a>
                                                    <a href="#" class="dropdown-item" data-value="236">Central African Republic (236)</a>
                                                    <a href="#" class="dropdown-item" data-value="235">Chad (235)</a>
                                                    <a href="#" class="dropdown-item" data-value="64">Chatham Islands (64)</a>
                                                    <a href="#" class="dropdown-item" data-value="56">Chile (56)</a>
                                                    <a href="#" class="dropdown-item" data-value="86">China (86)</a>
                                                    <a href="#" class="dropdown-item" data-value="61">Christmas Island (61)</a>
                                                    <a href="#" class="dropdown-item" data-value="57">Colombia (57)</a>
                                                    <a href="#" class="dropdown-item" data-value="269">Comoros (269)</a>
                                                    <a href="#" class="dropdown-item" data-value="242">Congo (242)</a>
                                                    <a href="#" class="dropdown-item" data-value="682">Cook Islands (682)</a>
                                                    <a href="#" class="dropdown-item" data-value="506">Costa Rica (506)</a>
                                                    <a href="#" class="dropdown-item" data-value="385">Croatia (385)</a>
                                                    <a href="#" class="dropdown-item" data-value="53">Cuba (53)</a>
                                                    <a href="#" class="dropdown-item" data-value="357">Cyprus (357)</a>
                                                    <a href="#" class="dropdown-item" data-value="420">Czech Republic (420)</a>
                                                    <a href="#" class="dropdown-item" data-value="243">Democratic Republic of Congo (243)</a>
                                                    <a href="#" class="dropdown-item" data-value="45">Denmark (45)</a>
                                                    <a href="#" class="dropdown-item" data-value="246">Diego Garcia (246)</a>
                                                    <a href="#" class="dropdown-item" data-value="253">Djibouti (253)</a>
                                                    <a href="#" class="dropdown-item" data-value="1 767">Dominica (1 767)</a>
                                                    <a href="#" class="dropdown-item" data-value="1 809">Dominican Republic (1 809)</a>
                                                    <a href="#" class="dropdown-item" data-value="1 829">Dominican Republic (1 829)</a>
                                                    <a href="#" class="dropdown-item" data-value="670">East Timor (670)</a>
                                                    <a href="#" class="dropdown-item" data-value="593">Ecuador (593)</a>
                                                    <a href="#" class="dropdown-item" data-value="20">Egypt (20)</a>
                                                    <a href="#" class="dropdown-item" data-value="503">El Salvador (503)</a>
                                                    <a href="#" class="dropdown-item" data-value="240">Equatorial Guinea (240)</a>
                                                    <a href="#" class="dropdown-item" data-value="291">Eritrea (291)</a>
                                                    <a href="#" class="dropdown-item" data-value="372">Estonia (372)</a>
                                                    <a href="#" class="dropdown-item" data-value="251">Ethiopia (251)</a>
                                                    <a href="#" class="dropdown-item" data-value="500">Falkland Islands (500)</a>
                                                    <a href="#" class="dropdown-item" data-value="298">Faroe Islands (298)</a>
                                                    <a href="#" class="dropdown-item" data-value="679">Fiji (679)</a>
                                                    <a href="#" class="dropdown-item" data-value="358">Finland (358)</a>
                                                    <a href="#" class="dropdown-item" data-value="33">France (33)</a>
                                                    <a href="#" class="dropdown-item" data-value="594">French Guiana (594)</a>
                                                    <a href="#" class="dropdown-item" data-value="689">French Polynesia (689)</a>
                                                    <a href="#" class="dropdown-item" data-value="241">Gabon (241)</a>
                                                    <a href="#" class="dropdown-item" data-value="220">Gambia (220)</a>
                                                    <a href="#" class="dropdown-item" data-value="995">Georgia (995)</a>
                                                    <a href="#" class="dropdown-item" data-value="49">Germany (49)</a>
                                                    <a href="#" class="dropdown-item" data-value="233">Ghana (233)</a>
                                                    <a href="#" class="dropdown-item" data-value="350">Gibraltar (350)</a>
                                                    <a href="#" class="dropdown-item" data-value="30">Greece (30)</a>
                                                    <a href="#" class="dropdown-item" data-value="299">Greenland (299)</a>
                                                    <a href="#" class="dropdown-item" data-value="1 473">Grenada (incl Carriacou) (1 473)</a>
                                                    <a href="#" class="dropdown-item" data-value="590">Guadeloupe (590)</a>
                                                    <a href="#" class="dropdown-item" data-value="1 671">Guam (1 671)</a>
                                                    <a href="#" class="dropdown-item" data-value="502">Guatemala (502)</a>
                                                    <a href="#" class="dropdown-item" data-value="224">Guinea (224)</a>
                                                    <a href="#" class="dropdown-item" data-value="245">Guinea-Bissau (245)</a>
                                                    <a href="#" class="dropdown-item" data-value="592">Guyana (592)</a>
                                                    <a href="#" class="dropdown-item" data-value="509">Haiti (509)</a>
                                                    <a href="#" class="dropdown-item" data-value="31">Holland (31)</a>
                                                    <a href="#" class="dropdown-item" data-value="504">Honduras (504)</a>
                                                    <a href="#" class="dropdown-item" data-value="852">Hong Kong (852)</a>
                                                    <a href="#" class="dropdown-item" data-value="36">Hungary (36)</a>
                                                    <a href="#" class="dropdown-item" data-value="354">Iceland (354)</a>
                                                    <a href="#" class="dropdown-item" data-value="91">India (91)</a>
                                                    <a href="#" class="dropdown-item" data-value="62">Indonesia (62)</a>
                                                    <a href="#" class="dropdown-item" data-value="98">Iran (98)</a>
                                                    <a href="#" class="dropdown-item" data-value="964">Iraq (964)</a>
                                                    <a href="#" class="dropdown-item" data-value="353">Ireland, Republic of (353)</a>
                                                    <a href="#" class="dropdown-item" data-value="972">Israel (972)</a>
                                                    <a href="#" class="dropdown-item" data-value="39">Italy (incl Vatican City) (39)</a>
                                                    <a href="#" class="dropdown-item" data-value="225">Ivory Coast (Côte d'Ivoire) (225)</a>
                                                    <a href="#" class="dropdown-item" data-value="1 876">Jamaica (1 876)</a>
                                                    <a href="#" class="dropdown-item" data-value="81">Japan (81)</a>
                                                    <a href="#" class="dropdown-item" data-value="962">Jordan (962)</a>
                                                    <a href="#" class="dropdown-item" data-value="7">Kazakhstan (7)</a>
                                                    <a href="#" class="dropdown-item" data-value="254">Kenya (254)</a>
                                                    <a href="#" class="dropdown-item" data-value="686">Kiribati (686)</a>
                                                    <a href="#" class="dropdown-item" data-value="850">Korea (PDR North) (850)</a>
                                                    <a href="#" class="dropdown-item" data-value="82">Korea Republic (South) (82)</a>
                                                    <a href="#" class="dropdown-item" data-value="965">Kuwait (965)</a>
                                                    <a href="#" class="dropdown-item" data-value="996">Kyrgyz Republic (Kirghizia) (996)</a>
                                                    <a href="#" class="dropdown-item" data-value="856">Laos (856)</a>
                                                    <a href="#" class="dropdown-item" data-value="371">Latvia (371)</a>
                                                    <a href="#" class="dropdown-item" data-value="961">Lebanon (961)</a>
                                                    <a href="#" class="dropdown-item" data-value="266">Lesotho (266)</a>
                                                    <a href="#" class="dropdown-item" data-value="231">Liberia (231)</a>
                                                    <a href="#" class="dropdown-item" data-value="218">Libya (218)</a>
                                                    <a href="#" class="dropdown-item" data-value="423">Liechtenstein (423)</a>
                                                    <a href="#" class="dropdown-item" data-value="370">Lithuania (370)</a>
                                                    <a href="#" class="dropdown-item" data-value="352">Luxembourg (352)</a>
                                                    <a href="#" class="dropdown-item" data-value="853">Macao (853)</a>
                                                    <a href="#" class="dropdown-item" data-value="389">Macedonia (389)</a>
                                                    <a href="#" class="dropdown-item" data-value="261">Madagascar (261)</a>
                                                    <a href="#" class="dropdown-item" data-value="351">Madeira (351)</a>
                                                    <a href="#" class="dropdown-item" data-value="265">Malawi (265)</a>
                                                    <a href="#" class="dropdown-item" data-value="60">Malaysia (60)</a>
                                                    <a href="#" class="dropdown-item" data-value="960">Maldives (960)</a>
                                                    <a href="#" class="dropdown-item" data-value="223">Mali (223)</a>
                                                    <a href="#" class="dropdown-item" data-value="356">Malta (356)</a>
                                                    <a href="#" class="dropdown-item" data-value="692">Marshall Islands (692)</a>
                                                    <a href="#" class="dropdown-item" data-value="596">Martinique (596)</a>
                                                    <a href="#" class="dropdown-item" data-value="222">Mauritania (222)</a>
                                                    <a href="#" class="dropdown-item" data-value="230">Mauritius (incl Rodriguez Island) (230)</a>
                                                    <a href="#" class="dropdown-item" data-value="262">Mayotte (262)</a>
                                                    <a href="#" class="dropdown-item" data-value="52">Mexico (52)</a>
                                                    <a href="#" class="dropdown-item" data-value="691">Micronesia (691)</a>
                                                    <a href="#" class="dropdown-item" data-value="373">Moldova (Moldavia) (373)</a>
                                                    <a href="#" class="dropdown-item" data-value="377">Monaco (377)</a>
                                                    <a href="#" class="dropdown-item" data-value="976">Mongolia (976)</a>
                                                    <a href="#" class="dropdown-item" data-value="382">Montenegro (382)</a>
                                                    <a href="#" class="dropdown-item" data-value="1 664">Montserrat (1 664)</a>
                                                    <a href="#" class="dropdown-item" data-value="212">Morocco (212)</a>
                                                    <a href="#" class="dropdown-item" data-value="258">Mozambique (258)</a>
                                                    <a href="#" class="dropdown-item" data-value="95">Myanma (95)</a>
                                                    <a href="#" class="dropdown-item" data-value="264">Namibia (264)</a>
                                                    <a href="#" class="dropdown-item" data-value="674">Nauru (674)</a>
                                                    <a href="#" class="dropdown-item" data-value="977">Nepal (977)</a>
                                                    <a href="#" class="dropdown-item" data-value="31">Netherlands (31)</a>
                                                    <a href="#" class="dropdown-item" data-value="599">Netherlands Antilles (599)</a>
                                                    <a href="#" class="dropdown-item" data-value="687">New Caledonia (687)</a>
                                                    <a href="#" class="dropdown-item" data-value="64">New Zealand (incl Chatham Island) (64)</a>
                                                    <a href="#" class="dropdown-item" data-value="505">Nicaragua (505)</a>
                                                    <a href="#" class="dropdown-item" data-value="227">Niger (227)</a>
                                                    <a href="#" class="dropdown-item" data-value="234">Nigeria (234)</a>
                                                    <a href="#" class="dropdown-item" data-value="683">Niue (683)</a>
                                                    <a href="#" class="dropdown-item" data-value="672">Norfolk Island (672)</a>
                                                    <a href="#" class="dropdown-item" data-value="1 670">Northern Marianas (1 670)</a>
                                                    <a href="#" class="dropdown-item" data-value="47">Norway (47)</a>
                                                    <a href="#" class="dropdown-item" data-value="968">Oman (968)</a>
                                                    <a href="#" class="dropdown-item" data-value="92">Pakistan (92)</a>
                                                    <a href="#" class="dropdown-item" data-value="680">Palau (680)</a>
                                                    <a href="#" class="dropdown-item" data-value="970">Palestinian Authority (970)</a>
                                                    <a href="#" class="dropdown-item" data-value="507">Panama (507)</a>
                                                    <a href="#" class="dropdown-item" data-value="675">Papua New Guinea (675)</a>
                                                    <a href="#" class="dropdown-item" data-value="595">Paraguay (595)</a>
                                                    <a href="#" class="dropdown-item" data-value="51">Peru (51)</a>
                                                    <a href="#" class="dropdown-item" data-value="63">Philippines (63)</a>
                                                    <a href="#" class="dropdown-item" data-value="872">Pitcairn Islands (872)</a>
                                                    <a href="#" class="dropdown-item" data-value="48">Poland (48)</a>
                                                    <a href="#" class="dropdown-item" data-value="351">Portugal (incl Azores &amp; Madeira) (351)</a>
                                                    <a href="#" class="dropdown-item" data-value="1 787">Puerto Rico (1 787)</a>
                                                    <a href="#" class="dropdown-item" data-value="974">Qatar (974)</a>
                                                    <a href="#" class="dropdown-item" data-value="262">Réunion (262)</a>
                                                    <a href="#" class="dropdown-item" data-value="230">Rodriguez Island (230)</a>
                                                    <a href="#" class="dropdown-item" data-value="40">Romania (40)</a>
                                                    <a href="#" class="dropdown-item" data-value="7">Russian Federation (7)</a>
                                                    <a href="#" class="dropdown-item" data-value="250">Rwanda (250)</a>
                                                    <a href="#" class="dropdown-item" data-value="685">Samoa (Formerly known - Western Samoa) (685)</a>
                                                    <a href="#" class="dropdown-item" data-value="378">San Marino (378)</a>
                                                    <a href="#" class="dropdown-item" data-value="239">São Tomé and Principe (239)</a>
                                                    <a href="#" class="dropdown-item" data-value="966">Saudi Arabia (966)</a>
                                                    <a href="#" class="dropdown-item" data-value="221">Senegal (221)</a>
                                                    <a href="#" class="dropdown-item" data-value="381">Serbia (381)</a>
                                                    <a href="#" class="dropdown-item" data-value="248">Seychelles (248)</a>
                                                    <a href="#" class="dropdown-item" data-value="232">Sierra Leone (232)</a>
                                                    <a href="#" class="dropdown-item" data-value="65">Singapore (65)</a>
                                                    <a href="#" class="dropdown-item" data-value="421">Slovakia (421)</a>
                                                    <a href="#" class="dropdown-item" data-value="386">Slovenia (386)</a>
                                                    <a href="#" class="dropdown-item" data-value="677">Solomon Islands (677)</a>
                                                    <a href="#" class="dropdown-item" data-value="252">Somalia (252)</a>
                                                    <a href="#" class="dropdown-item" data-value="27">South Africa (27)</a>
                                                    <a href="#" class="dropdown-item" data-value="34">Spain (incl Canary &amp; Balearic Is.) (34)</a>
                                                    <a href="#" class="dropdown-item" data-value="94">Sri Lanka (94)</a>
                                                    <a href="#" class="dropdown-item" data-value="290">St. Helena (290)</a>
                                                    <a href="#" class="dropdown-item" data-value="1 869">St. Kitts and Nevis (1 869)</a>
                                                    <a href="#" class="dropdown-item" data-value="1 758">St. Lucia (1 758)</a>
                                                    <a href="#" class="dropdown-item" data-value="508">St. Pierre and Miquelon (508)</a>
                                                    <a href="#" class="dropdown-item" data-value="1 784">St. Vincent and the Grenadines (1 784)</a>
                                                    <a href="#" class="dropdown-item" data-value="249">Sudan (249)</a>
                                                    <a href="#" class="dropdown-item" data-value="597">SuriCountryName (597)</a>
                                                    <a href="#" class="dropdown-item" data-value="268">Swaziland (268)</a>
                                                    <a href="#" class="dropdown-item" data-value="46">Sweden (46)</a>
                                                    <a href="#" class="dropdown-item" data-value="41">Switzerland (41)</a>
                                                    <a href="#" class="dropdown-item" data-value="963">Syria (963)</a>
                                                    <a href="#" class="dropdown-item" data-value="886">Taiwan (886)</a>
                                                    <a href="#" class="dropdown-item" data-value="992">Tajikistan (992)</a>
                                                    <a href="#" class="dropdown-item" data-value="255">Tanzania (255)</a>
                                                    <a href="#" class="dropdown-item" data-value="66">Thailand (66)</a>
                                                    <a href="#" class="dropdown-item" data-value="228">Togo (228)</a>
                                                    <a href="#" class="dropdown-item" data-value="690">Tokelau (690)</a>
                                                    <a href="#" class="dropdown-item" data-value="676">Tonga (676)</a>
                                                    <a href="#" class="dropdown-item" data-value="1 868">Trinidad and Tobago (1 868)</a>
                                                    <a href="#" class="dropdown-item" data-value="216">Tunisia (216)</a>
                                                    <a href="#" class="dropdown-item" data-value="90">Turkey (90)</a>
                                                    <a href="#" class="dropdown-item" data-value="993">Turkmenistan (993)</a>
                                                    <a href="#" class="dropdown-item" data-value="1 649">Turks and Caicos Islands (1 649)</a>
                                                    <a href="#" class="dropdown-item" data-value="688">Tuvalu (688)</a>
                                                    <a href="#" class="dropdown-item" data-value="256">Uganda (256)</a>
                                                    <a href="#" class="dropdown-item" data-value="380">Ukraine (380)</a>
                                                    <a href="#" class="dropdown-item" data-value="971">United Arab Emirates (971)</a>
                                                    <a href="#" class="dropdown-item" data-value="44">United Kingdom (44)</a>
                                                    <a href="#" class="dropdown-item" data-value="598">Uruguay (598)</a>
                                                    <a href="#" class="dropdown-item" data-value="998">Uzbekistan (998)</a>
                                                    <a href="#" class="dropdown-item" data-value="678">Vanuatu (678)</a>
                                                    <a href="#" class="dropdown-item" data-value="39">Vatican City (39)</a>
                                                    <a href="#" class="dropdown-item" data-value="58">Venezuela (58)</a>
                                                    <a href="#" class="dropdown-item" data-value="84">Vietnam (84)</a>
                                                    <a href="#" class="dropdown-item" data-value="1 284">Virgin Islands (UK) (1 284)</a>
                                                    <a href="#" class="dropdown-item" data-value="1 340">Virgin Islands (US) (1 340)</a>
                                                    <a href="#" class="dropdown-item" data-value="681">Wallis and Futuna (681)</a>
                                                    <a href="#" class="dropdown-item" data-value="967">Yemen (967)</a>
                                                    <a href="#" class="dropdown-item" data-value="260">Zambia (260)</a>
                                                    <a href="#" class="dropdown-item" data-value="263">Zimbabwe (263)</a>
                                                </div>
                                                <input type="text" name="phone-{{$i}}" class="form-control col-md-6" aria-label="Text input with dropdown button">
                                            </div>
                                        </div>
                                        <div class="col-md-6 mb-3">
                                            <label for="cc-contact_email_address">Contact email address</label>
                                            <input type="text" class="form-control" id="cc-cvv" name="email_address-{{$i}}" placeholder="johndoe@gmail.com" required>
                                            <div class="invalid-feedback">
                                                Contact email required
                                            </div>
                                            <input type="text" name="end-adult-{{$i}}" value="0" hidden>
                                        </div>
                                    </div>
                                
                            </div>
                        </div>
                        @endfor

                        @for ($i = 1; $i <= $userInput["child_no"]; $i++)
                            <div class="card mb-4 shadow-sm">
                            <div class="card-header">
                                <h4 class="my-0 font-weight-normal">Child {{$i}}</h4>
                            </div>
                            <div class="card-body">
                                    <h4>Mandatory Information</h4>
                                    <div class="row">
                                        <div class="col-md-3 mb-3">
                                            <label for="country">Title</label>
                                            <select class="custom-select d-block w-100" id="title" required="" name="title-child-{{$i}}">
                                                <option value="">Mstr</option>
                                                <option>Barr</option>
                                                <option>Bro</option>
                                                <option>Chf</option>
                                                <option>Dr</option>
                                                <option>Gov</option>
                                                <option>Hon</option>
                                                <option>HRH</option>
                                                <option>Miss</option>
                                                <option selected>Mr</option>
                                                <option>Mrs</option>
                                                <option>Ms</option>
                                                <option>Mstr</option>
                                                <option>Pres</option>
                                                <option>Prof</option>
                                                <option>Rev</option>
                                                <option>Sen</option>
                                                <option>Sir</option>
                                                <option>Sis</option>
                                            </select>
                                            
                                        </div>
                                        <div class="col-md-4 mb-3">
                                            <label for="firstName">First name</label>
                                            <input type="text" class="form-control" id="firstName" name="first_name-child-{{$i}}" placeholder="" value="" required>
                                            
                                        </div>
                                        <div class="col-md-5 mb-3">
                                            <label for="lastName">Last name</label>
                                            <input type="text" class="form-control" id="lastName" placeholder="" name="last_name-child-{{$i}}" value="" required="">
                                            <div class="invalid-feedback">
                                                Valid last name is required.
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-6 mb-3">
                                            <label for="date_of_birth">Date of Birth</label>
                                            <input type="date" class="form-control" id="date_of_birth" name="date_of_birth-child-{{$i}}" placeholder="" value="" required>
                        
                                        </div>
                                        <div class="col-md-6 mb-3">
                                            <label for="gender">Gender</label>
                                            <select class="custom-select d-block w-100" id="gender" name="gender-child-{{$i}}" required="Male">
                                                <option>Male</option>
                                                <option>Female</option>
                                            </select>
                                            
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-6 mb-3">
                                            <label for="country">Country</label>
                                            <select id="passenger1countryofresidence" name="country-child-{{$i}}" class=" form-control  required  PassengerDetailsInput_country PassengerDetailsInput_countryofresidence">
                                                <option value="{ 'FaxValue':'United Kingdom', 'FaxCode':'CNTY' }">United Kingdom</option>
                                                <option value="{ 'FaxValue':'United States of America', 'FaxCode':'CNTY' }">United States of America</option>
                                                <option value="{ 'FaxValue':'Afghanistan', 'FaxCode':'CNTY' }">Afghanistan</option>
                                                <option value="{ 'FaxValue':'Aland Islands', 'FaxCode':'CNTY' }">Aland Islands</option>
                                                <option value="{ 'FaxValue':'Albania', 'FaxCode':'CNTY' }">Albania</option>
                                                <option value="{ 'FaxValue':'Algeria', 'FaxCode':'CNTY' }">Algeria</option>
                                                <option value="{ 'FaxValue':'American Samoa', 'FaxCode':'CNTY' }">American Samoa</option>
                                                <option value="{ 'FaxValue':'Andorra', 'FaxCode':'CNTY' }">Andorra</option>
                                                <option value="{ 'FaxValue':'Angola', 'FaxCode':'CNTY' }">Angola</option>
                                                <option value="{ 'FaxValue':'Anguilla', 'FaxCode':'CNTY' }">Anguilla</option>
                                                <option value="{ 'FaxValue':'Antarctica', 'FaxCode':'CNTY' }">Antarctica</option>
                                                <option value="{ 'FaxValue':'Antigua &amp; Barbuda', 'FaxCode':'CNTY' }">Antigua &amp; Barbuda</option>
                                                <option value="{ 'FaxValue':'Argentina', 'FaxCode':'CNTY' }">Argentina</option>
                                                <option value="{ 'FaxValue':'Armenia', 'FaxCode':'CNTY' }">Armenia</option>
                                                <option value="{ 'FaxValue':'Aruba', 'FaxCode':'CNTY' }">Aruba</option>
                                                <option value="{ 'FaxValue':'Australia', 'FaxCode':'CNTY' }">Australia</option>
                                                <option value="{ 'FaxValue':'Austria', 'FaxCode':'CNTY' }">Austria</option>
                                                <option value="{ 'FaxValue':'Azerbaijan', 'FaxCode':'CNTY' }">Azerbaijan</option>
                                                <option value="{ 'FaxValue':'Bahamas', 'FaxCode':'CNTY' }">Bahamas</option>
                                                <option value="{ 'FaxValue':'Bahrain', 'FaxCode':'CNTY' }">Bahrain</option>
                                                <option value="{ 'FaxValue':'Bangladesh', 'FaxCode':'CNTY' }">Bangladesh</option>
                                                <option value="{ 'FaxValue':'Barbados', 'FaxCode':'CNTY' }">Barbados</option>
                                                <option value="{ 'FaxValue':'Belarus', 'FaxCode':'CNTY' }">Belarus</option>
                                                <option value="{ 'FaxValue':'Belgium', 'FaxCode':'CNTY' }">Belgium</option>
                                                <option value="{ 'FaxValue':'Belize', 'FaxCode':'CNTY' }">Belize</option>
                                                <option value="{ 'FaxValue':'Benin', 'FaxCode':'CNTY' }">Benin</option>
                                                <option value="{ 'FaxValue':'Bermuda', 'FaxCode':'CNTY' }">Bermuda</option>
                                                <option value="{ 'FaxValue':'Bhutan', 'FaxCode':'CNTY' }">Bhutan</option>
                                                <option value="{ 'FaxValue':'Bolivia', 'FaxCode':'CNTY' }">Bolivia</option>
                                                <option value="{ 'FaxValue':'Bonaire, Sint Eustatius &amp; Saba', 'FaxCode':'CNTY' }">Bonaire, Sint Eustatius &amp; Saba</option>
                                                <option value="{ 'FaxValue':'Bosnia &amp; Herzegovina', 'FaxCode':'CNTY' }">Bosnia &amp; Herzegovina</option>
                                                <option value="{ 'FaxValue':'Botswana', 'FaxCode':'CNTY' }">Botswana</option>
                                                <option value="{ 'FaxValue':'Bouvet Island', 'FaxCode':'CNTY' }">Bouvet Island</option>
                                                <option value="{ 'FaxValue':'Brazil', 'FaxCode':'CNTY' }">Brazil</option>
                                                <option value="{ 'FaxValue':'British Indian Ocean Territory', 'FaxCode':'CNTY' }">British Indian Ocean Territory</option>
                                                <option value="{ 'FaxValue':'Brunei Darussalam', 'FaxCode':'CNTY' }">Brunei Darussalam</option>
                                                <option value="{ 'FaxValue':'Bulgaria', 'FaxCode':'CNTY' }">Bulgaria</option>
                                                <option value="{ 'FaxValue':'Burkina Faso', 'FaxCode':'CNTY' }">Burkina Faso</option>
                                                <option value="{ 'FaxValue':'Burundi', 'FaxCode':'CNTY' }">Burundi</option>
                                                <option value="{ 'FaxValue':'Cambodia', 'FaxCode':'CNTY' }">Cambodia</option>
                                                <option value="{ 'FaxValue':'Cameroon', 'FaxCode':'CNTY' }">Cameroon</option>
                                                <option value="{ 'FaxValue':'Canada', 'FaxCode':'CNTY' }">Canada</option>
                                                <option value="{ 'FaxValue':'Cape verde', 'FaxCode':'CNTY' }">Cape verde</option>
                                                <option value="{ 'FaxValue':'Cayman Islands', 'FaxCode':'CNTY' }">Cayman Islands</option>
                                                <option value="{ 'FaxValue':'Central African Republic', 'FaxCode':'CNTY' }">Central African Republic</option>
                                                <option value="{ 'FaxValue':'Chad', 'FaxCode':'CNTY' }">Chad</option>
                                                <option value="{ 'FaxValue':'Chile', 'FaxCode':'CNTY' }">Chile</option>
                                                <option value="{ 'FaxValue':'China', 'FaxCode':'CNTY' }">China</option>
                                                <option value="{ 'FaxValue':'Christmas Island', 'FaxCode':'CNTY' }">Christmas Island</option>
                                                <option value="{ 'FaxValue':'Cocos (Keeling)  Islands', 'FaxCode':'CNTY' }">Cocos (Keeling) Islands</option>
                                                <option value="{ 'FaxValue':'Colombia', 'FaxCode':'CNTY' }">Colombia</option>
                                                <option value="{ 'FaxValue':'Comoros', 'FaxCode':'CNTY' }">Comoros</option>
                                                <option value="{ 'FaxValue':'Congo', 'FaxCode':'CNTY' }">Congo</option>
                                                <option value="{ 'FaxValue':'Congo Democratic Republic of The', 'FaxCode':'CNTY' }">Congo Democratic Republic of The</option>
                                                <option value="{ 'FaxValue':'Cook Islands', 'FaxCode':'CNTY' }">Cook Islands</option>
                                                <option value="{ 'FaxValue':'Costa Rica', 'FaxCode':'CNTY' }">Costa Rica</option>
                                                <option value="{ 'FaxValue':'Cote D'Ivoire', 'FaxCode':'CNTY' }">Cote D'Ivoire</option>
                                                <option value="{ 'FaxValue':'Croatia', 'FaxCode':'CNTY' }">Croatia</option>
                                                <option value="{ 'FaxValue':'Cuba', 'FaxCode':'CNTY' }">Cuba</option>
                                                <option value="{ 'FaxValue':'Curacao', 'FaxCode':'CNTY' }">Curacao</option>
                                                <option value="{ 'FaxValue':'Cyprus', 'FaxCode':'CNTY' }">Cyprus</option>
                                                <option value="{ 'FaxValue':'Czech Republic', 'FaxCode':'CNTY' }">Czech Republic</option>
                                                <option value="{ 'FaxValue':'Denmark', 'FaxCode':'CNTY' }">Denmark</option>
                                                <option value="{ 'FaxValue':'Djibouti', 'FaxCode':'CNTY' }">Djibouti</option>
                                                <option value="{ 'FaxValue':'Dominica', 'FaxCode':'CNTY' }">Dominica</option>
                                                <option value="{ 'FaxValue':'Dominican Republic', 'FaxCode':'CNTY' }">Dominican Republic</option>
                                                <option value="{ 'FaxValue':'East Timor', 'FaxCode':'CNTY' }">East Timor</option>
                                                <option value="{ 'FaxValue':'Ecuador', 'FaxCode':'CNTY' }">Ecuador</option>
                                                <option value="{ 'FaxValue':'Egypt', 'FaxCode':'CNTY' }">Egypt</option>
                                                <option value="{ 'FaxValue':'El Salvador', 'FaxCode':'CNTY' }">El Salvador</option>
                                                <option value="{ 'FaxValue':'Equatorial Guinea', 'FaxCode':'CNTY' }">Equatorial Guinea</option>
                                                <option value="{ 'FaxValue':'Eritrea', 'FaxCode':'CNTY' }">Eritrea</option>
                                                <option value="{ 'FaxValue':'Estonia', 'FaxCode':'CNTY' }">Estonia</option>
                                                <option value="{ 'FaxValue':'Ethiopia', 'FaxCode':'CNTY' }">Ethiopia</option>
                                                <option value="{ 'FaxValue':'Falkland Islands', 'FaxCode':'CNTY' }">Falkland Islands</option>
                                                <option value="{ 'FaxValue':'Faroe Islands', 'FaxCode':'CNTY' }">Faroe Islands</option>
                                                <option value="{ 'FaxValue':'Fiji', 'FaxCode':'CNTY' }">Fiji</option>
                                                <option value="{ 'FaxValue':'Finland', 'FaxCode':'CNTY' }">Finland</option>
                                                <option value="{ 'FaxValue':'France', 'FaxCode':'CNTY' }">France</option>
                                                <option value="{ 'FaxValue':'French Guiana', 'FaxCode':'CNTY' }">French Guiana</option>
                                                <option value="{ 'FaxValue':'French Polynesia', 'FaxCode':'CNTY' }">French Polynesia</option>
                                                <option value="{ 'FaxValue':'French Southern Territories', 'FaxCode':'CNTY' }">French Southern Territories</option>
                                                <option value="{ 'FaxValue':'Gabon', 'FaxCode':'CNTY' }">Gabon</option>
                                                <option value="{ 'FaxValue':'Gambia', 'FaxCode':'CNTY' }">Gambia</option>
                                                <option value="{ 'FaxValue':'Georgia', 'FaxCode':'CNTY' }">Georgia</option>
                                                <option value="{ 'FaxValue':'Germany', 'FaxCode':'CNTY' }">Germany</option>
                                                <option value="{ 'FaxValue':'Ghana', 'FaxCode':'CNTY' }">Ghana</option>
                                                <option value="{ 'FaxValue':'Gibraltar', 'FaxCode':'CNTY' }">Gibraltar</option>
                                                <option value="{ 'FaxValue':'Greece', 'FaxCode':'CNTY' }">Greece</option>
                                                <option value="{ 'FaxValue':'Greenland', 'FaxCode':'CNTY' }">Greenland</option>
                                                <option value="{ 'FaxValue':'Grenada', 'FaxCode':'CNTY' }">Grenada</option>
                                                <option value="{ 'FaxValue':'Guadeloupe', 'FaxCode':'CNTY' }">Guadeloupe</option>
                                                <option value="{ 'FaxValue':'Guam', 'FaxCode':'CNTY' }">Guam</option>
                                                <option value="{ 'FaxValue':'Guatemala', 'FaxCode':'CNTY' }">Guatemala</option>
                                                <option value="{ 'FaxValue':'Guernsey', 'FaxCode':'CNTY' }">Guernsey</option>
                                                <option value="{ 'FaxValue':'Guinea', 'FaxCode':'CNTY' }">Guinea</option>
                                                <option value="{ 'FaxValue':'Guinea-Bissau', 'FaxCode':'CNTY' }">Guinea-Bissau</option>
                                                <option value="{ 'FaxValue':'Guyana', 'FaxCode':'CNTY' }">Guyana</option>
                                                <option value="{ 'FaxValue':'Haiti', 'FaxCode':'CNTY' }">Haiti</option>
                                                <option value="{ 'FaxValue':'Heard &amp; McDonald Islands', 'FaxCode':'CNTY' }">Heard &amp; McDonald Islands</option>
                                                <option value="{ 'FaxValue':'Honduras', 'FaxCode':'CNTY' }">Honduras</option>
                                                <option value="{ 'FaxValue':'Hong Kong', 'FaxCode':'CNTY' }">Hong Kong</option>
                                                <option value="{ 'FaxValue':'Hungary', 'FaxCode':'CNTY' }">Hungary</option>
                                                <option value="{ 'FaxValue':'Iceland', 'FaxCode':'CNTY' }">Iceland</option>
                                                <option value="{ 'FaxValue':'India', 'FaxCode':'CNTY' }">India</option>
                                                <option value="{ 'FaxValue':'Indonesia', 'FaxCode':'CNTY' }">Indonesia</option>
                                                <option value="{ 'FaxValue':'Iran', 'FaxCode':'CNTY' }">Iran</option>
                                                <option value="{ 'FaxValue':'Iraq', 'FaxCode':'CNTY' }">Iraq</option>
                                                <option value="{ 'FaxValue':'Ireland', 'FaxCode':'CNTY' }">Ireland</option>
                                                <option value="{ 'FaxValue':'Isle of Man', 'FaxCode':'CNTY' }">Isle of Man</option>
                                                <option value="{ 'FaxValue':'Israel', 'FaxCode':'CNTY' }">Israel</option>
                                                <option value="{ 'FaxValue':'Italy', 'FaxCode':'CNTY' }">Italy</option>
                                                <option value="{ 'FaxValue':'Jamaica', 'FaxCode':'CNTY' }">Jamaica</option>
                                                <option value="{ 'FaxValue':'Japan', 'FaxCode':'CNTY' }">Japan</option>
                                                <option value="{ 'FaxValue':'Jersey', 'FaxCode':'CNTY' }">Jersey</option>
                                                <option value="{ 'FaxValue':'Jordan', 'FaxCode':'CNTY' }">Jordan</option>
                                                <option value="{ 'FaxValue':'Kazakhstan', 'FaxCode':'CNTY' }">Kazakhstan</option>
                                                <option value="{ 'FaxValue':'Kenya', 'FaxCode':'CNTY' }">Kenya</option>
                                                <option value="{ 'FaxValue':'Kiribati', 'FaxCode':'CNTY' }">Kiribati</option>
                                                <option value="{ 'FaxValue':'Korea Democratic People's Republic of', 'FaxCode':'CNTY' }">Korea Democratic People's Republic of</option>
                                                <option value="{ 'FaxValue':'Korea Republic of', 'FaxCode':'CNTY' }">Korea Republic of</option>
                                                <option value="{ 'FaxValue':'Kuwait', 'FaxCode':'CNTY' }">Kuwait</option>
                                                <option value="{ 'FaxValue':'Kyrgyzstan', 'FaxCode':'CNTY' }">Kyrgyzstan</option>
                                                <option value="{ 'FaxValue':'Lao People's Democratic Republic', 'FaxCode':'CNTY' }">Lao People's Democratic Republic</option>
                                                <option value="{ 'FaxValue':'Latvia', 'FaxCode':'CNTY' }">Latvia</option>
                                                <option value="{ 'FaxValue':'Lebanon', 'FaxCode':'CNTY' }">Lebanon</option>
                                                <option value="{ 'FaxValue':'Lesotho', 'FaxCode':'CNTY' }">Lesotho</option>
                                                <option value="{ 'FaxValue':'Liberia', 'FaxCode':'CNTY' }">Liberia</option>
                                                <option value="{ 'FaxValue':'Libyan Arab Jamahiriya', 'FaxCode':'CNTY' }">Libyan Arab Jamahiriya</option>
                                                <option value="{ 'FaxValue':'Liechtenstein', 'FaxCode':'CNTY' }">Liechtenstein</option>
                                                <option value="{ 'FaxValue':'Lithuania', 'FaxCode':'CNTY' }">Lithuania</option>
                                                <option value="{ 'FaxValue':'Luxembourg', 'FaxCode':'CNTY' }">Luxembourg</option>
                                                <option value="{ 'FaxValue':'Macau', 'FaxCode':'CNTY' }">Macau</option>
                                                <option value="{ 'FaxValue':'Macedonia', 'FaxCode':'CNTY' }">Macedonia</option>
                                                <option value="{ 'FaxValue':'Madagascar', 'FaxCode':'CNTY' }">Madagascar</option>
                                                <option value="{ 'FaxValue':'Malawi', 'FaxCode':'CNTY' }">Malawi</option>
                                                <option value="{ 'FaxValue':'Malaysia', 'FaxCode':'CNTY' }">Malaysia</option>
                                                <option value="{ 'FaxValue':'Maldives', 'FaxCode':'CNTY' }">Maldives</option>
                                                <option value="{ 'FaxValue':'Mali', 'FaxCode':'CNTY' }">Mali</option>
                                                <option value="{ 'FaxValue':'Malta', 'FaxCode':'CNTY' }">Malta</option>
                                                <option value="{ 'FaxValue':'Marshall Islands', 'FaxCode':'CNTY' }">Marshall Islands</option>
                                                <option value="{ 'FaxValue':'Martinique', 'FaxCode':'CNTY' }">Martinique</option>
                                                <option value="{ 'FaxValue':'Mauritania', 'FaxCode':'CNTY' }">Mauritania</option>
                                                <option value="{ 'FaxValue':'Mauritius', 'FaxCode':'CNTY' }">Mauritius</option>
                                                <option value="{ 'FaxValue':'Mayotte', 'FaxCode':'CNTY' }">Mayotte</option>
                                                <option value="{ 'FaxValue':'Mexico', 'FaxCode':'CNTY' }">Mexico</option>
                                                <option value="{ 'FaxValue':'Micronesia', 'FaxCode':'CNTY' }">Micronesia</option>
                                                <option value="{ 'FaxValue':'Moldova', 'FaxCode':'CNTY' }">Moldova</option>
                                                <option value="{ 'FaxValue':'Monaco', 'FaxCode':'CNTY' }">Monaco</option>
                                                <option value="{ 'FaxValue':'Mongolia', 'FaxCode':'CNTY' }">Mongolia</option>
                                                <option value="{ 'FaxValue':'Montenegro', 'FaxCode':'CNTY' }">Montenegro</option>
                                                <option value="{ 'FaxValue':'Montserrat', 'FaxCode':'CNTY' }">Montserrat</option>
                                                <option value="{ 'FaxValue':'Morocco', 'FaxCode':'CNTY' }">Morocco</option>
                                                <option value="{ 'FaxValue':'Mozambique', 'FaxCode':'CNTY' }">Mozambique</option>
                                                <option value="{ 'FaxValue':'Myanmar', 'FaxCode':'CNTY' }">Myanmar</option>
                                                <option value="{ 'FaxValue':'Namibia', 'FaxCode':'CNTY' }">Namibia</option>
                                                <option value="{ 'FaxValue':'Nauru', 'FaxCode':'CNTY' }">Nauru</option>
                                                <option value="{ 'FaxValue':'Nepal', 'FaxCode':'CNTY' }">Nepal</option>
                                                <option value="{ 'FaxValue':'Netherlands', 'FaxCode':'CNTY' }">Netherlands</option>
                                                <option value="{ 'FaxValue':'Netherlands Antilles', 'FaxCode':'CNTY' }">Netherlands Antilles</option>
                                                <option value="{ 'FaxValue':'New Caledonia', 'FaxCode':'CNTY' }">New Caledonia</option>
                                                <option value="{ 'FaxValue':'New Zealand', 'FaxCode':'CNTY' }">New Zealand</option>
                                                <option value="{ 'FaxValue':'Nicaragua', 'FaxCode':'CNTY' }">Nicaragua</option>
                                                <option value="{ 'FaxValue':'Niger', 'FaxCode':'CNTY' }">Niger</option>
                                                <option value="{ 'FaxValue':'Nigeria', 'FaxCode':'CNTY' }" selected="">Nigeria</option>
                                                <option value="{ 'FaxValue':'Niue', 'FaxCode':'CNTY' }">Niue</option>
                                                <option value="{ 'FaxValue':'Norfolk Island', 'FaxCode':'CNTY' }">Norfolk Island</option>
                                                <option value="{ 'FaxValue':'Northern Mariana Islands', 'FaxCode':'CNTY' }">Northern Mariana Islands</option>
                                                <option value="{ 'FaxValue':'Norway', 'FaxCode':'CNTY' }">Norway</option>
                                                <option value="{ 'FaxValue':'Occupied Palestinian Territory', 'FaxCode':'CNTY' }">Occupied Palestinian Territory</option>
                                                <option value="{ 'FaxValue':'Oman', 'FaxCode':'CNTY' }">Oman</option>
                                                <option value="{ 'FaxValue':'Pakistan', 'FaxCode':'CNTY' }">Pakistan</option>
                                                <option value="{ 'FaxValue':'Palau', 'FaxCode':'CNTY' }">Palau</option>
                                                <option value="{ 'FaxValue':'Panama', 'FaxCode':'CNTY' }">Panama</option>
                                                <option value="{ 'FaxValue':'Papua New Guinea', 'FaxCode':'CNTY' }">Papua New Guinea</option>
                                                <option value="{ 'FaxValue':'Paraguay', 'FaxCode':'CNTY' }">Paraguay</option>
                                                <option value="{ 'FaxValue':'Peru', 'FaxCode':'CNTY' }">Peru</option>
                                                <option value="{ 'FaxValue':'Philippines', 'FaxCode':'CNTY' }">Philippines</option>
                                                <option value="{ 'FaxValue':'Pitcairn Island', 'FaxCode':'CNTY' }">Pitcairn Island</option>
                                                <option value="{ 'FaxValue':'Poland', 'FaxCode':'CNTY' }">Poland</option>
                                                <option value="{ 'FaxValue':'Portugal', 'FaxCode':'CNTY' }">Portugal</option>
                                                <option value="{ 'FaxValue':'Puerto Rico', 'FaxCode':'CNTY' }">Puerto Rico</option>
                                                <option value="{ 'FaxValue':'Qatar', 'FaxCode':'CNTY' }">Qatar</option>
                                                <option value="{ 'FaxValue':'Reunion', 'FaxCode':'CNTY' }">Reunion</option>
                                                <option value="{ 'FaxValue':'Romania', 'FaxCode':'CNTY' }">Romania</option>
                                                <option value="{ 'FaxValue':'Russian Federation', 'FaxCode':'CNTY' }">Russian Federation</option>
                                                <option value="{ 'FaxValue':'Rwanda', 'FaxCode':'CNTY' }">Rwanda</option>
                                                <option value="{ 'FaxValue':'Saint Barthélemy', 'FaxCode':'CNTY' }">Saint Barthélemy</option>
                                                <option value="{ 'FaxValue':'Saint Lucia', 'FaxCode':'CNTY' }">Saint Lucia</option>
                                                <option value="{ 'FaxValue':'Saint Martin (French)', 'FaxCode':'CNTY' }">Saint Martin (French)</option>
                                                <option value="{ 'FaxValue':'Saint Vincent &amp; the Grenadines', 'FaxCode':'CNTY' }">Saint Vincent &amp; the Grenadines</option>
                                                <option value="{ 'FaxValue':'San Marino', 'FaxCode':'CNTY' }">San Marino</option>
                                                <option value="{ 'FaxValue':'Sao Tome &amp; Principe', 'FaxCode':'CNTY' }">Sao Tome &amp; Principe</option>
                                                <option value="{ 'FaxValue':'Saudi Arabia', 'FaxCode':'CNTY' }">Saudi Arabia</option>
                                                <option value="{ 'FaxValue':'Senegal', 'FaxCode':'CNTY' }">Senegal</option>
                                                <option value="{ 'FaxValue':'Serbia', 'FaxCode':'CNTY' }">Serbia</option>
                                                <option value="{ 'FaxValue':'Seychelles', 'FaxCode':'CNTY' }">Seychelles</option>
                                                <option value="{ 'FaxValue':'Sierra Leone', 'FaxCode':'CNTY' }">Sierra Leone</option>
                                                <option value="{ 'FaxValue':'Singapore', 'FaxCode':'CNTY' }">Singapore</option>
                                                <option value="{ 'FaxValue':'Sint Maarten (Dutch)', 'FaxCode':'CNTY' }">Sint Maarten (Dutch)</option>
                                                <option value="{ 'FaxValue':'Slovakia', 'FaxCode':'CNTY' }">Slovakia</option>
                                                <option value="{ 'FaxValue':'Slovenia', 'FaxCode':'CNTY' }">Slovenia</option>
                                                <option value="{ 'FaxValue':'Solomon Islands', 'FaxCode':'CNTY' }">Solomon Islands</option>
                                                <option value="{ 'FaxValue':'Somalia', 'FaxCode':'CNTY' }">Somalia</option>
                                                <option value="{ 'FaxValue':'South Africa', 'FaxCode':'CNTY' }">South Africa</option>
                                                <option value="{ 'FaxValue':'South Georgia &amp; Sandwich Islands', 'FaxCode':'CNTY' }">South Georgia &amp; Sandwich Islands</option>
                                                <option value="{ 'FaxValue':'South Sudan', 'FaxCode':'CNTY' }">South Sudan</option>
                                                <option value="{ 'FaxValue':'Spain &amp; Canary Islands', 'FaxCode':'CNTY' }">Spain &amp; Canary Islands</option>
                                                <option value="{ 'FaxValue':'Sri Lanka', 'FaxCode':'CNTY' }">Sri Lanka</option>
                                                <option value="{ 'FaxValue':'St. Helena', 'FaxCode':'CNTY' }">St. Helena</option>
                                                <option value="{ 'FaxValue':'St. Kitts &amp; Nevis', 'FaxCode':'CNTY' }">St. Kitts &amp; Nevis</option>
                                                <option value="{ 'FaxValue':'St. Pierre &amp; Miquelon', 'FaxCode':'CNTY' }">St. Pierre &amp; Miquelon</option>
                                                <option value="{ 'FaxValue':'Sudan', 'FaxCode':'CNTY' }">Sudan</option>
                                                <option value="{ 'FaxValue':'Suriname', 'FaxCode':'CNTY' }">Suriname</option>
                                                <option value="{ 'FaxValue':'Svalbard &amp; Jan Mayen Island', 'FaxCode':'CNTY' }">Svalbard &amp; Jan Mayen Island</option>
                                                <option value="{ 'FaxValue':'Swaziland', 'FaxCode':'CNTY' }">Swaziland</option>
                                                <option value="{ 'FaxValue':'Sweden', 'FaxCode':'CNTY' }">Sweden</option>
                                                <option value="{ 'FaxValue':'Switzerland', 'FaxCode':'CNTY' }">Switzerland</option>
                                                <option value="{ 'FaxValue':'Syrian Arab Republic', 'FaxCode':'CNTY' }">Syrian Arab Republic</option>
                                                <option value="{ 'FaxValue':'Taiwan', 'FaxCode':'CNTY' }">Taiwan</option>
                                                <option value="{ 'FaxValue':'Tajikistan', 'FaxCode':'CNTY' }">Tajikistan</option>
                                                <option value="{ 'FaxValue':'Tanzania', 'FaxCode':'CNTY' }">Tanzania</option>
                                                <option value="{ 'FaxValue':'Thailand', 'FaxCode':'CNTY' }">Thailand</option>
                                                <option value="{ 'FaxValue':'Timor-Leste', 'FaxCode':'CNTY' }">Timor-Leste</option>
                                                <option value="{ 'FaxValue':'Togo', 'FaxCode':'CNTY' }">Togo</option>
                                                <option value="{ 'FaxValue':'Tokelau', 'FaxCode':'CNTY' }">Tokelau</option>
                                                <option value="{ 'FaxValue':'Tonga', 'FaxCode':'CNTY' }">Tonga</option>
                                                <option value="{ 'FaxValue':'Trinidad &amp; Tobago', 'FaxCode':'CNTY' }">Trinidad &amp; Tobago</option>
                                                <option value="{ 'FaxValue':'Tunisia', 'FaxCode':'CNTY' }">Tunisia</option>
                                                <option value="{ 'FaxValue':'Turkey', 'FaxCode':'CNTY' }">Turkey</option>
                                                <option value="{ 'FaxValue':'Turkmenistan', 'FaxCode':'CNTY' }">Turkmenistan</option>
                                                <option value="{ 'FaxValue':'Turks &amp; Caicos Islands', 'FaxCode':'CNTY' }">Turks &amp; Caicos Islands</option>
                                                <option value="{ 'FaxValue':'Tuvalu', 'FaxCode':'CNTY' }">Tuvalu</option>
                                                <option value="{ 'FaxValue':'Uganda', 'FaxCode':'CNTY' }">Uganda</option>
                                                <option value="{ 'FaxValue':'Ukraine', 'FaxCode':'CNTY' }">Ukraine</option>
                                                <option value="{ 'FaxValue':'United Arab Emirates', 'FaxCode':'CNTY' }">United Arab Emirates</option>
                                                <option value="{ 'FaxValue':'Uruguay', 'FaxCode':'CNTY' }">Uruguay</option>
                                                <option value="{ 'FaxValue':'US Minor Outlying Islands', 'FaxCode':'CNTY' }">US Minor Outlying Islands</option>
                                                <option value="{ 'FaxValue':'Uzbekistan', 'FaxCode':'CNTY' }">Uzbekistan</option>
                                                <option value="{ 'FaxValue':'Vanuatu', 'FaxCode':'CNTY' }">Vanuatu</option>
                                                <option value="{ 'FaxValue':'Vatican City', 'FaxCode':'CNTY' }">Vatican City</option>
                                                <option value="{ 'FaxValue':'Venezuela', 'FaxCode':'CNTY' }">Venezuela</option>
                                                <option value="{ 'FaxValue':'Vietnam', 'FaxCode':'CNTY' }">Vietnam</option>
                                                <option value="{ 'FaxValue':'Virgin Islands (British)', 'FaxCode':'CNTY' }">Virgin Islands (British)</option>
                                                <option value="{ 'FaxValue':'Virgin Islands (US)', 'FaxCode':'CNTY' }">Virgin Islands (US)</option>
                                                <option value="{ 'FaxValue':'Wallis &amp; Futuna Islands', 'FaxCode':'CNTY' }">Wallis &amp; Futuna Islands</option>
                                                <option value="{ 'FaxValue':'Western Sahara', 'FaxCode':'CNTY' }">Western Sahara</option>
                                                <option value="{ 'FaxValue':'Western Samoa', 'FaxCode':'CNTY' }">Western Samoa</option>
                                                <option value="{ 'FaxValue':'Yemen', 'FaxCode':'CNTY' }">Yemen</option>
                                                <option value="{ 'FaxValue':'Zambia', 'FaxCode':'CNTY' }">Zambia</option>
                                                <option value="{ 'FaxValue':'Zimbabwe', 'FaxCode':'CNTY' }">Zimbabwe</option>ss
                                            </select>
                                           
                                        </div>
                                    </div>
                                    <input type="text" hidden value="0" name="end-child-{{$i}}">
                            </div>
                        </div>
                        @endfor

                        @for ($i = 1; $i <= $userInput['infants_no']; $i++)
                        <div class="card mb-4 shadow-sm">
                            <div class="card-header">
                                <h4 class="my-0 font-weight-normal">Infant {{$i}}</h4>
                            </div>
                            <div class="card-body">
                                    <h4>Mandatory Information</h4>
                                    <div class="row">
                                        <div class="col-md-3 mb-3">
                                            <label for="country">Title</label>
                                            <select class="custom-select d-block w-100" id="title" required="" name="title-infant-{{$i}}">
                                                <option value="">Mstr</option>
                                                <option>Barr</option>
                                                <option>Bro</option>
                                                <option>Chf</option>
                                                <option>Dr</option>
                                                <option>Gov</option>
                                                <option>Hon</option>
                                                <option>HRH</option>
                                                <option>Miss</option>
                                                <option selected>Mr</option>
                                                <option>Mrs</option>
                                                <option>Ms</option>
                                                <option>Mstr</option>
                                                <option>Pres</option>
                                                <option>Prof</option>
                                                <option>Rev</option>
                                                <option>Sen</option>
                                                <option>Sir</option>
                                                <option>Sis</option>
                                            </select>
                                           
                                        </div>
                                        <div class="col-md-4 mb-3">
                                            <label for="firstName">First name</label>
                                            <input type="text" class="form-control" id="firstName" name="first_name-infant-{{$i}}" placeholder="" value="" required>
                                           
                                        </div>
                                        <div class="col-md-5 mb-3">
                                            <label for="lastName">Last name</label>
                                            <input type="text" class="form-control" id="lastName" placeholder="" name="last_name-infant-{{$i}}" value="" required="">
                                            
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-6 mb-3">
                                            <label for="date_of_birth">Date of Birth</label>
                                            <input type="date" class="form-control" id="date_of_birth" name="date_of_birth-infant-{{$i}}" placeholder="" value="" required>
                                            
                                        </div>
                                        <div class="col-md-6 mb-3">
                                            <label for="gender">Gender</label>
                                            <select class="custom-select d-block w-100" id="gender" name="gender-infant-{{$i}}" required="Male">
                                                <option>Male</option>
                                                <option>Female</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-6 mb-3">
                                            <label for="country">Country</label>
                                            <select id="passenger1countryofresidence" name="country-infant-{{$i}}" class=" form-control  required  PassengerDetailsInput_country PassengerDetailsInput_countryofresidence">
                                                <option value="{ 'FaxValue':'United Kingdom', 'FaxCode':'CNTY' }">United Kingdom</option>
                                                <option value="{ 'FaxValue':'United States of America', 'FaxCode':'CNTY' }">United States of America</option>
                                                <option value="{ 'FaxValue':'Afghanistan', 'FaxCode':'CNTY' }">Afghanistan</option>
                                                <option value="{ 'FaxValue':'Aland Islands', 'FaxCode':'CNTY' }">Aland Islands</option>
                                                <option value="{ 'FaxValue':'Albania', 'FaxCode':'CNTY' }">Albania</option>
                                                <option value="{ 'FaxValue':'Algeria', 'FaxCode':'CNTY' }">Algeria</option>
                                                <option value="{ 'FaxValue':'American Samoa', 'FaxCode':'CNTY' }">American Samoa</option>
                                                <option value="{ 'FaxValue':'Andorra', 'FaxCode':'CNTY' }">Andorra</option>
                                                <option value="{ 'FaxValue':'Angola', 'FaxCode':'CNTY' }">Angola</option>
                                                <option value="{ 'FaxValue':'Anguilla', 'FaxCode':'CNTY' }">Anguilla</option>
                                                <option value="{ 'FaxValue':'Antarctica', 'FaxCode':'CNTY' }">Antarctica</option>
                                                <option value="{ 'FaxValue':'Antigua &amp; Barbuda', 'FaxCode':'CNTY' }">Antigua &amp; Barbuda</option>
                                                <option value="{ 'FaxValue':'Argentina', 'FaxCode':'CNTY' }">Argentina</option>
                                                <option value="{ 'FaxValue':'Armenia', 'FaxCode':'CNTY' }">Armenia</option>
                                                <option value="{ 'FaxValue':'Aruba', 'FaxCode':'CNTY' }">Aruba</option>
                                                <option value="{ 'FaxValue':'Australia', 'FaxCode':'CNTY' }">Australia</option>
                                                <option value="{ 'FaxValue':'Austria', 'FaxCode':'CNTY' }">Austria</option>
                                                <option value="{ 'FaxValue':'Azerbaijan', 'FaxCode':'CNTY' }">Azerbaijan</option>
                                                <option value="{ 'FaxValue':'Bahamas', 'FaxCode':'CNTY' }">Bahamas</option>
                                                <option value="{ 'FaxValue':'Bahrain', 'FaxCode':'CNTY' }">Bahrain</option>
                                                <option value="{ 'FaxValue':'Bangladesh', 'FaxCode':'CNTY' }">Bangladesh</option>
                                                <option value="{ 'FaxValue':'Barbados', 'FaxCode':'CNTY' }">Barbados</option>
                                                <option value="{ 'FaxValue':'Belarus', 'FaxCode':'CNTY' }">Belarus</option>
                                                <option value="{ 'FaxValue':'Belgium', 'FaxCode':'CNTY' }">Belgium</option>
                                                <option value="{ 'FaxValue':'Belize', 'FaxCode':'CNTY' }">Belize</option>
                                                <option value="{ 'FaxValue':'Benin', 'FaxCode':'CNTY' }">Benin</option>
                                                <option value="{ 'FaxValue':'Bermuda', 'FaxCode':'CNTY' }">Bermuda</option>
                                                <option value="{ 'FaxValue':'Bhutan', 'FaxCode':'CNTY' }">Bhutan</option>
                                                <option value="{ 'FaxValue':'Bolivia', 'FaxCode':'CNTY' }">Bolivia</option>
                                                <option value="{ 'FaxValue':'Bonaire, Sint Eustatius &amp; Saba', 'FaxCode':'CNTY' }">Bonaire, Sint Eustatius &amp; Saba</option>
                                                <option value="{ 'FaxValue':'Bosnia &amp; Herzegovina', 'FaxCode':'CNTY' }">Bosnia &amp; Herzegovina</option>
                                                <option value="{ 'FaxValue':'Botswana', 'FaxCode':'CNTY' }">Botswana</option>
                                                <option value="{ 'FaxValue':'Bouvet Island', 'FaxCode':'CNTY' }">Bouvet Island</option>
                                                <option value="{ 'FaxValue':'Brazil', 'FaxCode':'CNTY' }">Brazil</option>
                                                <option value="{ 'FaxValue':'British Indian Ocean Territory', 'FaxCode':'CNTY' }">British Indian Ocean Territory</option>
                                                <option value="{ 'FaxValue':'Brunei Darussalam', 'FaxCode':'CNTY' }">Brunei Darussalam</option>
                                                <option value="{ 'FaxValue':'Bulgaria', 'FaxCode':'CNTY' }">Bulgaria</option>
                                                <option value="{ 'FaxValue':'Burkina Faso', 'FaxCode':'CNTY' }">Burkina Faso</option>
                                                <option value="{ 'FaxValue':'Burundi', 'FaxCode':'CNTY' }">Burundi</option>
                                                <option value="{ 'FaxValue':'Cambodia', 'FaxCode':'CNTY' }">Cambodia</option>
                                                <option value="{ 'FaxValue':'Cameroon', 'FaxCode':'CNTY' }">Cameroon</option>
                                                <option value="{ 'FaxValue':'Canada', 'FaxCode':'CNTY' }">Canada</option>
                                                <option value="{ 'FaxValue':'Cape verde', 'FaxCode':'CNTY' }">Cape verde</option>
                                                <option value="{ 'FaxValue':'Cayman Islands', 'FaxCode':'CNTY' }">Cayman Islands</option>
                                                <option value="{ 'FaxValue':'Central African Republic', 'FaxCode':'CNTY' }">Central African Republic</option>
                                                <option value="{ 'FaxValue':'Chad', 'FaxCode':'CNTY' }">Chad</option>
                                                <option value="{ 'FaxValue':'Chile', 'FaxCode':'CNTY' }">Chile</option>
                                                <option value="{ 'FaxValue':'China', 'FaxCode':'CNTY' }">China</option>
                                                <option value="{ 'FaxValue':'Christmas Island', 'FaxCode':'CNTY' }">Christmas Island</option>
                                                <option value="{ 'FaxValue':'Cocos (Keeling)  Islands', 'FaxCode':'CNTY' }">Cocos (Keeling) Islands</option>
                                                <option value="{ 'FaxValue':'Colombia', 'FaxCode':'CNTY' }">Colombia</option>
                                                <option value="{ 'FaxValue':'Comoros', 'FaxCode':'CNTY' }">Comoros</option>
                                                <option value="{ 'FaxValue':'Congo', 'FaxCode':'CNTY' }">Congo</option>
                                                <option value="{ 'FaxValue':'Congo Democratic Republic of The', 'FaxCode':'CNTY' }">Congo Democratic Republic of The</option>
                                                <option value="{ 'FaxValue':'Cook Islands', 'FaxCode':'CNTY' }">Cook Islands</option>
                                                <option value="{ 'FaxValue':'Costa Rica', 'FaxCode':'CNTY' }">Costa Rica</option>
                                                <option value="{ 'FaxValue':'Cote D'Ivoire', 'FaxCode':'CNTY' }">Cote D'Ivoire</option>
                                                <option value="{ 'FaxValue':'Croatia', 'FaxCode':'CNTY' }">Croatia</option>
                                                <option value="{ 'FaxValue':'Cuba', 'FaxCode':'CNTY' }">Cuba</option>
                                                <option value="{ 'FaxValue':'Curacao', 'FaxCode':'CNTY' }">Curacao</option>
                                                <option value="{ 'FaxValue':'Cyprus', 'FaxCode':'CNTY' }">Cyprus</option>
                                                <option value="{ 'FaxValue':'Czech Republic', 'FaxCode':'CNTY' }">Czech Republic</option>
                                                <option value="{ 'FaxValue':'Denmark', 'FaxCode':'CNTY' }">Denmark</option>
                                                <option value="{ 'FaxValue':'Djibouti', 'FaxCode':'CNTY' }">Djibouti</option>
                                                <option value="{ 'FaxValue':'Dominica', 'FaxCode':'CNTY' }">Dominica</option>
                                                <option value="{ 'FaxValue':'Dominican Republic', 'FaxCode':'CNTY' }">Dominican Republic</option>
                                                <option value="{ 'FaxValue':'East Timor', 'FaxCode':'CNTY' }">East Timor</option>
                                                <option value="{ 'FaxValue':'Ecuador', 'FaxCode':'CNTY' }">Ecuador</option>
                                                <option value="{ 'FaxValue':'Egypt', 'FaxCode':'CNTY' }">Egypt</option>
                                                <option value="{ 'FaxValue':'El Salvador', 'FaxCode':'CNTY' }">El Salvador</option>
                                                <option value="{ 'FaxValue':'Equatorial Guinea', 'FaxCode':'CNTY' }">Equatorial Guinea</option>
                                                <option value="{ 'FaxValue':'Eritrea', 'FaxCode':'CNTY' }">Eritrea</option>
                                                <option value="{ 'FaxValue':'Estonia', 'FaxCode':'CNTY' }">Estonia</option>
                                                <option value="{ 'FaxValue':'Ethiopia', 'FaxCode':'CNTY' }">Ethiopia</option>
                                                <option value="{ 'FaxValue':'Falkland Islands', 'FaxCode':'CNTY' }">Falkland Islands</option>
                                                <option value="{ 'FaxValue':'Faroe Islands', 'FaxCode':'CNTY' }">Faroe Islands</option>
                                                <option value="{ 'FaxValue':'Fiji', 'FaxCode':'CNTY' }">Fiji</option>
                                                <option value="{ 'FaxValue':'Finland', 'FaxCode':'CNTY' }">Finland</option>
                                                <option value="{ 'FaxValue':'France', 'FaxCode':'CNTY' }">France</option>
                                                <option value="{ 'FaxValue':'French Guiana', 'FaxCode':'CNTY' }">French Guiana</option>
                                                <option value="{ 'FaxValue':'French Polynesia', 'FaxCode':'CNTY' }">French Polynesia</option>
                                                <option value="{ 'FaxValue':'French Southern Territories', 'FaxCode':'CNTY' }">French Southern Territories</option>
                                                <option value="{ 'FaxValue':'Gabon', 'FaxCode':'CNTY' }">Gabon</option>
                                                <option value="{ 'FaxValue':'Gambia', 'FaxCode':'CNTY' }">Gambia</option>
                                                <option value="{ 'FaxValue':'Georgia', 'FaxCode':'CNTY' }">Georgia</option>
                                                <option value="{ 'FaxValue':'Germany', 'FaxCode':'CNTY' }">Germany</option>
                                                <option value="{ 'FaxValue':'Ghana', 'FaxCode':'CNTY' }">Ghana</option>
                                                <option value="{ 'FaxValue':'Gibraltar', 'FaxCode':'CNTY' }">Gibraltar</option>
                                                <option value="{ 'FaxValue':'Greece', 'FaxCode':'CNTY' }">Greece</option>
                                                <option value="{ 'FaxValue':'Greenland', 'FaxCode':'CNTY' }">Greenland</option>
                                                <option value="{ 'FaxValue':'Grenada', 'FaxCode':'CNTY' }">Grenada</option>
                                                <option value="{ 'FaxValue':'Guadeloupe', 'FaxCode':'CNTY' }">Guadeloupe</option>
                                                <option value="{ 'FaxValue':'Guam', 'FaxCode':'CNTY' }">Guam</option>
                                                <option value="{ 'FaxValue':'Guatemala', 'FaxCode':'CNTY' }">Guatemala</option>
                                                <option value="{ 'FaxValue':'Guernsey', 'FaxCode':'CNTY' }">Guernsey</option>
                                                <option value="{ 'FaxValue':'Guinea', 'FaxCode':'CNTY' }">Guinea</option>
                                                <option value="{ 'FaxValue':'Guinea-Bissau', 'FaxCode':'CNTY' }">Guinea-Bissau</option>
                                                <option value="{ 'FaxValue':'Guyana', 'FaxCode':'CNTY' }">Guyana</option>
                                                <option value="{ 'FaxValue':'Haiti', 'FaxCode':'CNTY' }">Haiti</option>
                                                <option value="{ 'FaxValue':'Heard &amp; McDonald Islands', 'FaxCode':'CNTY' }">Heard &amp; McDonald Islands</option>
                                                <option value="{ 'FaxValue':'Honduras', 'FaxCode':'CNTY' }">Honduras</option>
                                                <option value="{ 'FaxValue':'Hong Kong', 'FaxCode':'CNTY' }">Hong Kong</option>
                                                <option value="{ 'FaxValue':'Hungary', 'FaxCode':'CNTY' }">Hungary</option>
                                                <option value="{ 'FaxValue':'Iceland', 'FaxCode':'CNTY' }">Iceland</option>
                                                <option value="{ 'FaxValue':'India', 'FaxCode':'CNTY' }">India</option>
                                                <option value="{ 'FaxValue':'Indonesia', 'FaxCode':'CNTY' }">Indonesia</option>
                                                <option value="{ 'FaxValue':'Iran', 'FaxCode':'CNTY' }">Iran</option>
                                                <option value="{ 'FaxValue':'Iraq', 'FaxCode':'CNTY' }">Iraq</option>
                                                <option value="{ 'FaxValue':'Ireland', 'FaxCode':'CNTY' }">Ireland</option>
                                                <option value="{ 'FaxValue':'Isle of Man', 'FaxCode':'CNTY' }">Isle of Man</option>
                                                <option value="{ 'FaxValue':'Israel', 'FaxCode':'CNTY' }">Israel</option>
                                                <option value="{ 'FaxValue':'Italy', 'FaxCode':'CNTY' }">Italy</option>
                                                <option value="{ 'FaxValue':'Jamaica', 'FaxCode':'CNTY' }">Jamaica</option>
                                                <option value="{ 'FaxValue':'Japan', 'FaxCode':'CNTY' }">Japan</option>
                                                <option value="{ 'FaxValue':'Jersey', 'FaxCode':'CNTY' }">Jersey</option>
                                                <option value="{ 'FaxValue':'Jordan', 'FaxCode':'CNTY' }">Jordan</option>
                                                <option value="{ 'FaxValue':'Kazakhstan', 'FaxCode':'CNTY' }">Kazakhstan</option>
                                                <option value="{ 'FaxValue':'Kenya', 'FaxCode':'CNTY' }">Kenya</option>
                                                <option value="{ 'FaxValue':'Kiribati', 'FaxCode':'CNTY' }">Kiribati</option>
                                                <option value="{ 'FaxValue':'Korea Democratic People's Republic of', 'FaxCode':'CNTY' }">Korea Democratic People's Republic of</option>
                                                <option value="{ 'FaxValue':'Korea Republic of', 'FaxCode':'CNTY' }">Korea Republic of</option>
                                                <option value="{ 'FaxValue':'Kuwait', 'FaxCode':'CNTY' }">Kuwait</option>
                                                <option value="{ 'FaxValue':'Kyrgyzstan', 'FaxCode':'CNTY' }">Kyrgyzstan</option>
                                                <option value="{ 'FaxValue':'Lao People's Democratic Republic', 'FaxCode':'CNTY' }">Lao People's Democratic Republic</option>
                                                <option value="{ 'FaxValue':'Latvia', 'FaxCode':'CNTY' }">Latvia</option>
                                                <option value="{ 'FaxValue':'Lebanon', 'FaxCode':'CNTY' }">Lebanon</option>
                                                <option value="{ 'FaxValue':'Lesotho', 'FaxCode':'CNTY' }">Lesotho</option>
                                                <option value="{ 'FaxValue':'Liberia', 'FaxCode':'CNTY' }">Liberia</option>
                                                <option value="{ 'FaxValue':'Libyan Arab Jamahiriya', 'FaxCode':'CNTY' }">Libyan Arab Jamahiriya</option>
                                                <option value="{ 'FaxValue':'Liechtenstein', 'FaxCode':'CNTY' }">Liechtenstein</option>
                                                <option value="{ 'FaxValue':'Lithuania', 'FaxCode':'CNTY' }">Lithuania</option>
                                                <option value="{ 'FaxValue':'Luxembourg', 'FaxCode':'CNTY' }">Luxembourg</option>
                                                <option value="{ 'FaxValue':'Macau', 'FaxCode':'CNTY' }">Macau</option>
                                                <option value="{ 'FaxValue':'Macedonia', 'FaxCode':'CNTY' }">Macedonia</option>
                                                <option value="{ 'FaxValue':'Madagascar', 'FaxCode':'CNTY' }">Madagascar</option>
                                                <option value="{ 'FaxValue':'Malawi', 'FaxCode':'CNTY' }">Malawi</option>
                                                <option value="{ 'FaxValue':'Malaysia', 'FaxCode':'CNTY' }">Malaysia</option>
                                                <option value="{ 'FaxValue':'Maldives', 'FaxCode':'CNTY' }">Maldives</option>
                                                <option value="{ 'FaxValue':'Mali', 'FaxCode':'CNTY' }">Mali</option>
                                                <option value="{ 'FaxValue':'Malta', 'FaxCode':'CNTY' }">Malta</option>
                                                <option value="{ 'FaxValue':'Marshall Islands', 'FaxCode':'CNTY' }">Marshall Islands</option>
                                                <option value="{ 'FaxValue':'Martinique', 'FaxCode':'CNTY' }">Martinique</option>
                                                <option value="{ 'FaxValue':'Mauritania', 'FaxCode':'CNTY' }">Mauritania</option>
                                                <option value="{ 'FaxValue':'Mauritius', 'FaxCode':'CNTY' }">Mauritius</option>
                                                <option value="{ 'FaxValue':'Mayotte', 'FaxCode':'CNTY' }">Mayotte</option>
                                                <option value="{ 'FaxValue':'Mexico', 'FaxCode':'CNTY' }">Mexico</option>
                                                <option value="{ 'FaxValue':'Micronesia', 'FaxCode':'CNTY' }">Micronesia</option>
                                                <option value="{ 'FaxValue':'Moldova', 'FaxCode':'CNTY' }">Moldova</option>
                                                <option value="{ 'FaxValue':'Monaco', 'FaxCode':'CNTY' }">Monaco</option>
                                                <option value="{ 'FaxValue':'Mongolia', 'FaxCode':'CNTY' }">Mongolia</option>
                                                <option value="{ 'FaxValue':'Montenegro', 'FaxCode':'CNTY' }">Montenegro</option>
                                                <option value="{ 'FaxValue':'Montserrat', 'FaxCode':'CNTY' }">Montserrat</option>
                                                <option value="{ 'FaxValue':'Morocco', 'FaxCode':'CNTY' }">Morocco</option>
                                                <option value="{ 'FaxValue':'Mozambique', 'FaxCode':'CNTY' }">Mozambique</option>
                                                <option value="{ 'FaxValue':'Myanmar', 'FaxCode':'CNTY' }">Myanmar</option>
                                                <option value="{ 'FaxValue':'Namibia', 'FaxCode':'CNTY' }">Namibia</option>
                                                <option value="{ 'FaxValue':'Nauru', 'FaxCode':'CNTY' }">Nauru</option>
                                                <option value="{ 'FaxValue':'Nepal', 'FaxCode':'CNTY' }">Nepal</option>
                                                <option value="{ 'FaxValue':'Netherlands', 'FaxCode':'CNTY' }">Netherlands</option>
                                                <option value="{ 'FaxValue':'Netherlands Antilles', 'FaxCode':'CNTY' }">Netherlands Antilles</option>
                                                <option value="{ 'FaxValue':'New Caledonia', 'FaxCode':'CNTY' }">New Caledonia</option>
                                                <option value="{ 'FaxValue':'New Zealand', 'FaxCode':'CNTY' }">New Zealand</option>
                                                <option value="{ 'FaxValue':'Nicaragua', 'FaxCode':'CNTY' }">Nicaragua</option>
                                                <option value="{ 'FaxValue':'Niger', 'FaxCode':'CNTY' }">Niger</option>
                                                <option value="{ 'FaxValue':'Nigeria', 'FaxCode':'CNTY' }" selected="">Nigeria</option>
                                                <option value="{ 'FaxValue':'Niue', 'FaxCode':'CNTY' }">Niue</option>
                                                <option value="{ 'FaxValue':'Norfolk Island', 'FaxCode':'CNTY' }">Norfolk Island</option>
                                                <option value="{ 'FaxValue':'Northern Mariana Islands', 'FaxCode':'CNTY' }">Northern Mariana Islands</option>
                                                <option value="{ 'FaxValue':'Norway', 'FaxCode':'CNTY' }">Norway</option>
                                                <option value="{ 'FaxValue':'Occupied Palestinian Territory', 'FaxCode':'CNTY' }">Occupied Palestinian Territory</option>
                                                <option value="{ 'FaxValue':'Oman', 'FaxCode':'CNTY' }">Oman</option>
                                                <option value="{ 'FaxValue':'Pakistan', 'FaxCode':'CNTY' }">Pakistan</option>
                                                <option value="{ 'FaxValue':'Palau', 'FaxCode':'CNTY' }">Palau</option>
                                                <option value="{ 'FaxValue':'Panama', 'FaxCode':'CNTY' }">Panama</option>
                                                <option value="{ 'FaxValue':'Papua New Guinea', 'FaxCode':'CNTY' }">Papua New Guinea</option>
                                                <option value="{ 'FaxValue':'Paraguay', 'FaxCode':'CNTY' }">Paraguay</option>
                                                <option value="{ 'FaxValue':'Peru', 'FaxCode':'CNTY' }">Peru</option>
                                                <option value="{ 'FaxValue':'Philippines', 'FaxCode':'CNTY' }">Philippines</option>
                                                <option value="{ 'FaxValue':'Pitcairn Island', 'FaxCode':'CNTY' }">Pitcairn Island</option>
                                                <option value="{ 'FaxValue':'Poland', 'FaxCode':'CNTY' }">Poland</option>
                                                <option value="{ 'FaxValue':'Portugal', 'FaxCode':'CNTY' }">Portugal</option>
                                                <option value="{ 'FaxValue':'Puerto Rico', 'FaxCode':'CNTY' }">Puerto Rico</option>
                                                <option value="{ 'FaxValue':'Qatar', 'FaxCode':'CNTY' }">Qatar</option>
                                                <option value="{ 'FaxValue':'Reunion', 'FaxCode':'CNTY' }">Reunion</option>
                                                <option value="{ 'FaxValue':'Romania', 'FaxCode':'CNTY' }">Romania</option>
                                                <option value="{ 'FaxValue':'Russian Federation', 'FaxCode':'CNTY' }">Russian Federation</option>
                                                <option value="{ 'FaxValue':'Rwanda', 'FaxCode':'CNTY' }">Rwanda</option>
                                                <option value="{ 'FaxValue':'Saint Barthélemy', 'FaxCode':'CNTY' }">Saint Barthélemy</option>
                                                <option value="{ 'FaxValue':'Saint Lucia', 'FaxCode':'CNTY' }">Saint Lucia</option>
                                                <option value="{ 'FaxValue':'Saint Martin (French)', 'FaxCode':'CNTY' }">Saint Martin (French)</option>
                                                <option value="{ 'FaxValue':'Saint Vincent &amp; the Grenadines', 'FaxCode':'CNTY' }">Saint Vincent &amp; the Grenadines</option>
                                                <option value="{ 'FaxValue':'San Marino', 'FaxCode':'CNTY' }">San Marino</option>
                                                <option value="{ 'FaxValue':'Sao Tome &amp; Principe', 'FaxCode':'CNTY' }">Sao Tome &amp; Principe</option>
                                                <option value="{ 'FaxValue':'Saudi Arabia', 'FaxCode':'CNTY' }">Saudi Arabia</option>
                                                <option value="{ 'FaxValue':'Senegal', 'FaxCode':'CNTY' }">Senegal</option>
                                                <option value="{ 'FaxValue':'Serbia', 'FaxCode':'CNTY' }">Serbia</option>
                                                <option value="{ 'FaxValue':'Seychelles', 'FaxCode':'CNTY' }">Seychelles</option>
                                                <option value="{ 'FaxValue':'Sierra Leone', 'FaxCode':'CNTY' }">Sierra Leone</option>
                                                <option value="{ 'FaxValue':'Singapore', 'FaxCode':'CNTY' }">Singapore</option>
                                                <option value="{ 'FaxValue':'Sint Maarten (Dutch)', 'FaxCode':'CNTY' }">Sint Maarten (Dutch)</option>
                                                <option value="{ 'FaxValue':'Slovakia', 'FaxCode':'CNTY' }">Slovakia</option>
                                                <option value="{ 'FaxValue':'Slovenia', 'FaxCode':'CNTY' }">Slovenia</option>
                                                <option value="{ 'FaxValue':'Solomon Islands', 'FaxCode':'CNTY' }">Solomon Islands</option>
                                                <option value="{ 'FaxValue':'Somalia', 'FaxCode':'CNTY' }">Somalia</option>
                                                <option value="{ 'FaxValue':'South Africa', 'FaxCode':'CNTY' }">South Africa</option>
                                                <option value="{ 'FaxValue':'South Georgia &amp; Sandwich Islands', 'FaxCode':'CNTY' }">South Georgia &amp; Sandwich Islands</option>
                                                <option value="{ 'FaxValue':'South Sudan', 'FaxCode':'CNTY' }">South Sudan</option>
                                                <option value="{ 'FaxValue':'Spain &amp; Canary Islands', 'FaxCode':'CNTY' }">Spain &amp; Canary Islands</option>
                                                <option value="{ 'FaxValue':'Sri Lanka', 'FaxCode':'CNTY' }">Sri Lanka</option>
                                                <option value="{ 'FaxValue':'St. Helena', 'FaxCode':'CNTY' }">St. Helena</option>
                                                <option value="{ 'FaxValue':'St. Kitts &amp; Nevis', 'FaxCode':'CNTY' }">St. Kitts &amp; Nevis</option>
                                                <option value="{ 'FaxValue':'St. Pierre &amp; Miquelon', 'FaxCode':'CNTY' }">St. Pierre &amp; Miquelon</option>
                                                <option value="{ 'FaxValue':'Sudan', 'FaxCode':'CNTY' }">Sudan</option>
                                                <option value="{ 'FaxValue':'Suriname', 'FaxCode':'CNTY' }">Suriname</option>
                                                <option value="{ 'FaxValue':'Svalbard &amp; Jan Mayen Island', 'FaxCode':'CNTY' }">Svalbard &amp; Jan Mayen Island</option>
                                                <option value="{ 'FaxValue':'Swaziland', 'FaxCode':'CNTY' }">Swaziland</option>
                                                <option value="{ 'FaxValue':'Sweden', 'FaxCode':'CNTY' }">Sweden</option>
                                                <option value="{ 'FaxValue':'Switzerland', 'FaxCode':'CNTY' }">Switzerland</option>
                                                <option value="{ 'FaxValue':'Syrian Arab Republic', 'FaxCode':'CNTY' }">Syrian Arab Republic</option>
                                                <option value="{ 'FaxValue':'Taiwan', 'FaxCode':'CNTY' }">Taiwan</option>
                                                <option value="{ 'FaxValue':'Tajikistan', 'FaxCode':'CNTY' }">Tajikistan</option>
                                                <option value="{ 'FaxValue':'Tanzania', 'FaxCode':'CNTY' }">Tanzania</option>
                                                <option value="{ 'FaxValue':'Thailand', 'FaxCode':'CNTY' }">Thailand</option>
                                                <option value="{ 'FaxValue':'Timor-Leste', 'FaxCode':'CNTY' }">Timor-Leste</option>
                                                <option value="{ 'FaxValue':'Togo', 'FaxCode':'CNTY' }">Togo</option>
                                                <option value="{ 'FaxValue':'Tokelau', 'FaxCode':'CNTY' }">Tokelau</option>
                                                <option value="{ 'FaxValue':'Tonga', 'FaxCode':'CNTY' }">Tonga</option>
                                                <option value="{ 'FaxValue':'Trinidad &amp; Tobago', 'FaxCode':'CNTY' }">Trinidad &amp; Tobago</option>
                                                <option value="{ 'FaxValue':'Tunisia', 'FaxCode':'CNTY' }">Tunisia</option>
                                                <option value="{ 'FaxValue':'Turkey', 'FaxCode':'CNTY' }">Turkey</option>
                                                <option value="{ 'FaxValue':'Turkmenistan', 'FaxCode':'CNTY' }">Turkmenistan</option>
                                                <option value="{ 'FaxValue':'Turks &amp; Caicos Islands', 'FaxCode':'CNTY' }">Turks &amp; Caicos Islands</option>
                                                <option value="{ 'FaxValue':'Tuvalu', 'FaxCode':'CNTY' }">Tuvalu</option>
                                                <option value="{ 'FaxValue':'Uganda', 'FaxCode':'CNTY' }">Uganda</option>
                                                <option value="{ 'FaxValue':'Ukraine', 'FaxCode':'CNTY' }">Ukraine</option>
                                                <option value="{ 'FaxValue':'United Arab Emirates', 'FaxCode':'CNTY' }">United Arab Emirates</option>
                                                <option value="{ 'FaxValue':'Uruguay', 'FaxCode':'CNTY' }">Uruguay</option>
                                                <option value="{ 'FaxValue':'US Minor Outlying Islands', 'FaxCode':'CNTY' }">US Minor Outlying Islands</option>
                                                <option value="{ 'FaxValue':'Uzbekistan', 'FaxCode':'CNTY' }">Uzbekistan</option>
                                                <option value="{ 'FaxValue':'Vanuatu', 'FaxCode':'CNTY' }">Vanuatu</option>
                                                <option value="{ 'FaxValue':'Vatican City', 'FaxCode':'CNTY' }">Vatican City</option>
                                                <option value="{ 'FaxValue':'Venezuela', 'FaxCode':'CNTY' }">Venezuela</option>
                                                <option value="{ 'FaxValue':'Vietnam', 'FaxCode':'CNTY' }">Vietnam</option>
                                                <option value="{ 'FaxValue':'Virgin Islands (British)', 'FaxCode':'CNTY' }">Virgin Islands (British)</option>
                                                <option value="{ 'FaxValue':'Virgin Islands (US)', 'FaxCode':'CNTY' }">Virgin Islands (US)</option>
                                                <option value="{ 'FaxValue':'Wallis &amp; Futuna Islands', 'FaxCode':'CNTY' }">Wallis &amp; Futuna Islands</option>
                                                <option value="{ 'FaxValue':'Western Sahara', 'FaxCode':'CNTY' }">Western Sahara</option>
                                                <option value="{ 'FaxValue':'Western Samoa', 'FaxCode':'CNTY' }">Western Samoa</option>
                                                <option value="{ 'FaxValue':'Yemen', 'FaxCode':'CNTY' }">Yemen</option>
                                                <option value="{ 'FaxValue':'Zambia', 'FaxCode':'CNTY' }">Zambia</option>
                                                <option value="{ 'FaxValue':'Zimbabwe', 'FaxCode':'CNTY' }">Zimbabwe</option>ss
                                            </select>
                                        </div>
                                    </div>
                                    <input type="text" hidden value="0" name="end-infant-{{$i}}">
                                    
                            </div>
                        </div>

                        @endfor
                        {{-- carry relevant information --}}

                        {{-- outbound flight --}}
                        <input type="text" name="formDeparture" value="" hidden>
                        <input type="text" name="formArrival" value="" hidden>
                        <input type="text" name="formFlightType" value="" hidden>
                        <input type="text" name="formPrice" value="" hidden>
                        <input type="text" name="formTax" value="" hidden>
                        <input type="text" name="formTotal" value="" hidden>
                        <input type="text" name="flightNo" value="" hidden>
                        <input type="text" name="flightDuration" value="" hidden>
                        <input type="text" name="totalFare" value="" hidden>
                        {{-- <input type="text" name="orderID" value="" hidden> --}}

                        {{-- inbound flight --}}
                        <input type="text" name="formInboundDeparture" value="" hidden>
                        <input type="text" name="formInboundArrival" value="" hidden>
                        <input type="text" name="formInboundFlightType" value="" hidden>
                        <input type="text" name="formInboundPrice" value="" hidden>
                        <input type="text" name="formInboundTax" value="" hidden>
                        <input type="text" name="formInboundTotal" value="" hidden>
                        <input type="text" name="flightInboundNo" value="" hidden>
                        <input type="text" name="flightInboundDuration" value="" hidden>
                        <input type="text" name="totalInboundFare" value="" hidden>


                        <input type="text" name="accumulatedFare" value="" hidden>

                        <input type="submit" class="btn btn-info" value="Proceed To Payment">
                    </form>
                    </div>
                    
                    <div class="row">
                        <div class="col-md-2">
                            <button type="button" style="display:none" class="btn btn-success" id="btnPrevious">Previous <i class="fas fa-angle-left"></i></button>
                        </div>
                        <div class="col-md-8">
                        </div>
                        <div class="col-md-2">
                            <button type="button" class="btn btn-info" id="btnNext">Next <i class="fas fa-angle-right"></i></button>
                        </div>
                    </div>
                </div>


                <!--END OF PARENT TAB DIV-->
            </div>

        </div>
    </div>

    {{-- hidden fields for storing data --}}
    <input id="flightFrom" type="text" value="{{$userInput["from"]}}" hidden>
    <input id="flightTo" type="text" value="{{$userInput["to"]}}" hidden>
    <input id="totalPassengers" type="text" value="{{$userInput["adult_no"] + $userInput["child_no"] + $userInput["infants_no"]}}" hidden>
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
    const arrivalInput = document.getElementById("arrival-input");
    const oneWayButton = document.getElementById("oneWayButton");
    const returnButton = document.getElementById("returnButton");
    const priceButton = document.querySelectorAll(".priceButton");
    const flightTypes = {
        "3":"Economy Non Flexi Regional",
        "4":"Economy Flexi Regional",
        "5":"Business",
    };

    oneWayButton.addEventListener("click",(event)=> {
        let arrival = document.querySelector("#datepicker2");
        arrival.value = null;
        arrivalInput.style.display = "none";

    })
    returnButton.addEventListener("click",(event)=> {
        arrivalInput.style.display = "flex";
    })

    priceButton.forEach((btn,index)=>{
        btn.addEventListener("click",(event)=>{
            //find the price
            let from = document.querySelector("#flightFrom").value;
            let to = document.querySelector("#flightTo").value;
            let price = btn.previousElementSibling.previousElementSibling.innerHTML;
            let tax = currency(price,{"symbol":""}).multiply(10/100).format();
            let total = currency(tax,{"symbol":""}).add(price).format();
            let totalPassengers = document.querySelector("#totalPassengers").value;
            let totalFare = currency(total,{"symbol":""}).multiply(parseInt(totalPassengers)).format();
            let parentElement = btn.parentElement;
            let row = parentElement.parentElement;
            console.log(row);
            //find the type of flight
            var index = 0;
            while ( (parentElement = parentElement.previousElementSibling) ) {
            index++;
            }
            let flightType = flightTypes[index]
            let departure = row.children[0].children[0].innerHTML;
            let duration = row.children[1].children[0].innerHTML;
            let flightNo = row.children[1].children[2].innerHTML;
            let arrival = row.children[2].children[0].innerHTML;
            let origin = row.children[0].children[2].innerHTML;

            if(origin === from){
                console.log("flight is outbound");

                document.querySelector("#sidebar--departure").innerHTML = departure;
                document.querySelector("#sidebar--arrival").innerHTML = arrival;
                document.querySelector("#sidebar--fare-type").innerHTML = flightType;
                document.querySelector("#sidebar--flightNo").innerHTML = flightNo;
                document.querySelector("#sidebar--duration").innerHTML = duration;
                document.querySelector("#sidebar--price").innerHTML = price;
                document.querySelector("#sidebar--tax").innerHTML = tax;
                document.querySelector("#sidebar--total").innerHTML = total;
                document.querySelector("#sidebar--total1").innerHTML = totalFare;

                // set options
                document.querySelector("#option--departure").innerHTML = departure;
                document.querySelector("#option--arrival").innerHTML = arrival;
                document.querySelector("#option--fare-type").innerHTML = flightType;
                document.querySelector("#option--flightNo").innerHTML = flightNo;
                document.querySelector("#option--duration").innerHTML = duration;
                document.querySelector("#option--price").innerHTML = price;
                document.querySelector("#option--tax").innerHTML = tax;
                document.querySelector("#option--total").innerHTML = total;
                document.querySelector("#option--total1").innerHTML = totalFare;
                
                
                document.querySelector('[name="formDeparture"]').value = departure;
                document.querySelector('[name="formArrival"]').value = arrival;
                document.querySelector('[name="formFlightType"]').value = flightType;
                document.querySelector('[name="formPrice"]').value = price;
                document.querySelector('[name="formTax"]').value = tax;
                document.querySelector('[name="formTotal"]').value = total;
                document.querySelector('[name="flightNo"]').value = flightNo;
                document.querySelector('[name="flightDuration"]').value = duration;
                document.querySelector('[name="totalFare"]').value = totalFare;

            }

            if(origin === to){
                console.log("flight is inbound");

                document.querySelector("#sidebar--inbound--departure").innerHTML = departure;
                document.querySelector("#sidebar--inbound--arrival").innerHTML = arrival;
                document.querySelector("#sidebar--inbound--fare-type").innerHTML = flightType;
                document.querySelector("#sidebar--inbound--flightNo").innerHTML = flightNo;
                document.querySelector("#sidebar--inbound--duration").innerHTML = duration;
                document.querySelector("#sidebar--inbound--price").innerHTML = price;
                document.querySelector("#sidebar--inbound--tax").innerHTML = tax;
                document.querySelector("#sidebar--inbound--total").innerHTML = total;
                document.querySelector("#sidebar--inbound--total1").innerHTML = totalFare;

                //set options
                document.querySelector("#option--inbound--departure").innerHTML = departure;
                document.querySelector("#option--inbound--arrival").innerHTML = arrival;
                document.querySelector("#option--inbound--fare-type").innerHTML = flightType;
                document.querySelector("#option--inbound--flightNo").innerHTML = flightNo;
                document.querySelector("#option--inbound--duration").innerHTML = duration;
                document.querySelector("#option--inbound--price").innerHTML = price;
                document.querySelector("#option--inbound--tax").innerHTML = tax;
                document.querySelector("#option--inbound--total").innerHTML = total;
                document.querySelector("#option--inbound--total1").innerHTML = totalFare;
                
                
                // console.log(departure, arrival, flightType, flightNo, duration, price, tax, total);

                console.log({
                    departure: departure,
                    arrival: arrival,
                    flightType: flightType,
                    flightNo: flightNo,
                    duration: duration,
                    price: price,
                    tax: tax,
                    total: total,
                });
                
                document.querySelector('[name="formInboundDeparture"]').value = departure;
                document.querySelector('[name="formInboundArrival"]').value = arrival;
                document.querySelector('[name="formInboundFlightType"]').value = flightType;
                document.querySelector('[name="formInboundPrice"]').value = price;
                document.querySelector('[name="formInboundTax"]').value = tax;
                document.querySelector('[name="formInboundTotal"]').value = total;
                document.querySelector('[name="flightInboundNo"]').value = flightNo;
                document.querySelector('[name="flightInboundDuration"]').value = duration;
                document.querySelector('[name="totalInboundFare"]').value = totalFare;

            }

            // console.log(from,to,origin);

            // get the total of inbound and outbound
            if(document.querySelector("#inbound-flight")){
            let totalInboundFare = document.querySelector('[name="totalInboundFare"]').value;
            let totalOutboundFare = document.querySelector('[name="totalFare"]').value;
            let accumulatedFare = currency(totalInboundFare,{"symbol":""}).add(totalOutboundFare).format();
            document.querySelector('[name="accumulatedFare"]').value = accumulatedFare;
            
            console.log({accumulatedFare:accumulatedFare});
            } else{
            let accumulatedFare = document.querySelector('[name="totalFare"]').value;
            document.querySelector('[name="accumulatedFare"]').value = accumulatedFare;
            console.log({accumulatedFare:accumulatedFare});
            }
            console.log({from:from, to:to});
            
            
        });
    })

    function fillFlightInfo(){
            let departure = document.querySelector("#sidebar--departure").innerHTML;
            let arrival = document.querySelector("#sidebar--arrival").innerHTML;
            let flightType = document.querySelector("#sidebar--fare-type").innerHTML;
            let price = document.querySelector("#sidebar--price").innerHTML;
            let tax = document.querySelector("#sidebar--tax").innerHTML;
            let total = document.querySelector("#sidebar--total").innerHTML;
            let flightNo = document.querySelector("#sidebar--flightNo").innerHTML;
            let duration = document.querySelector("#sidebar--duration").innerHTML;

            document.querySelector('[name="formDeparture"]').value = departure
            document.querySelector('[name="formArrival"]').value = arrival
            document.querySelector('[name="formFlightType"]').value = flightType
            document.querySelector('[name="formPrice"]').value = price
            document.querySelector('[name="formTax"]').value = tax
            document.querySelector('[name="formTotal"]').value = total
            document.querySelector('[name="flightNo"]').value = flightNo;
            document.querySelector('[name="flightDuration"]').value = duration;
    }
    fillFlightInfo();
    console.log(uuidv4());

</script>

</html>