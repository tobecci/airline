<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Naomi Air Peace</title>

        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap" rel="stylesheet">
        <link href="/bootstrap/bootstrap-datepicker.css" rel="stylesheet">
        <link href="/bootstrap.css" rel="stylesheet">
        <link href="/all.css" rel="stylesheet">
        <link href="/fontawesome.css" rel="stylesheet">


        <!-- Styles -->
        <style>
            /*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */html{line-height:1.15;-webkit-text-size-adjust:100%}body{margin:0}a{background-color:transparent}[hidden]{display:none}html{font-family:system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;line-height:1.5}*,:after,:before{box-sizing:border-box;border:0 solid #e2e8f0}a{color:inherit;text-decoration:inherit}svg,video{display:block;vertical-align:middle}video{max-width:100%;height:auto}.bg-white{--bg-opacity:1;background-color:#fff;background-color:rgba(255,255,255,var(--bg-opacity))}.bg-gray-100{--bg-opacity:1;background-color:#f7fafc;background-color:rgba(247,250,252,var(--bg-opacity))}.border-gray-200{--border-opacity:1;border-color:#edf2f7;border-color:rgba(237,242,247,var(--border-opacity))}.border-t{border-top-width:1px}.flex{display:flex}.grid{display:grid}.hidden{display:none}.items-center{align-items:center}.justify-center{justify-content:center}.font-semibold{font-weight:600}.h-5{height:1.25rem}.h-8{height:2rem}.h-16{height:4rem}.text-sm{font-size:.875rem}.text-lg{font-size:1.125rem}.leading-7{line-height:1.75rem}.mx-auto{margin-left:auto;margin-right:auto}.ml-1{margin-left:.25rem}.mt-2{margin-top:.5rem}.mr-2{margin-right:.5rem}.ml-2{margin-left:.5rem}.mt-4{margin-top:1rem}.ml-4{margin-left:1rem}.mt-8{margin-top:2rem}.ml-12{margin-left:3rem}.-mt-px{margin-top:-1px}.max-w-6xl{max-width:72rem}.min-h-screen{min-height:100vh}.overflow-hidden{overflow:hidden}.p-6{padding:1.5rem}.py-4{padding-top:1rem;padding-bottom:1rem}.px-6{padding-left:1.5rem;padding-right:1.5rem}.pt-8{padding-top:2rem}.fixed{position:fixed}.relative{position:relative}.top-0{top:0}.right-0{right:0}.shadow{box-shadow:0 1px 3px 0 rgba(0,0,0,.1),0 1px 2px 0 rgba(0,0,0,.06)}.text-center{text-align:center}.text-gray-200{--text-opacity:1;color:#edf2f7;color:rgba(237,242,247,var(--text-opacity))}.text-gray-300{--text-opacity:1;color:#e2e8f0;color:rgba(226,232,240,var(--text-opacity))}.text-gray-400{--text-opacity:1;color:#cbd5e0;color:rgba(203,213,224,var(--text-opacity))}.text-gray-500{--text-opacity:1;color:#a0aec0;color:rgba(160,174,192,var(--text-opacity))}.text-gray-600{--text-opacity:1;color:#718096;color:rgba(113,128,150,var(--text-opacity))}.text-gray-700{--text-opacity:1;color:#4a5568;color:rgba(74,85,104,var(--text-opacity))}.text-gray-900{--text-opacity:1;color:#1a202c;color:rgba(26,32,44,var(--text-opacity))}.underline{text-decoration:underline}.antialiased{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.w-5{width:1.25rem}.w-8{width:2rem}.w-auto{width:auto}.grid-cols-1{grid-template-columns:repeat(1,minmax(0,1fr))}@media (min-width:640px){.sm\:rounded-lg{border-radius:.5rem}.sm\:block{display:block}.sm\:items-center{align-items:center}.sm\:justify-start{justify-content:flex-start}.sm\:justify-between{justify-content:space-between}.sm\:h-20{height:5rem}.sm\:ml-0{margin-left:0}.sm\:px-6{padding-left:1.5rem;padding-right:1.5rem}.sm\:pt-0{padding-top:0}.sm\:text-left{text-align:left}.sm\:text-right{text-align:right}}@media (min-width:768px){.md\:border-t-0{border-top-width:0}.md\:border-l{border-left-width:1px}.md\:grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}}@media (min-width:1024px){.lg\:px-8{padding-left:2rem;padding-right:2rem}}@media (prefers-color-scheme:dark){.dark\:bg-gray-800{--bg-opacity:1;background-color:#2d3748;background-color:rgba(45,55,72,var(--bg-opacity))}.dark\:bg-gray-900{--bg-opacity:1;background-color:#1a202c;background-color:rgba(26,32,44,var(--bg-opacity))}.dark\:border-gray-700{--border-opacity:1;border-color:#4a5568;border-color:rgba(74,85,104,var(--border-opacity))}.dark\:text-white{--text-opacity:1;color:#fff;color:rgba(255,255,255,var(--text-opacity))}.dark\:text-gray-400{--text-opacity:1;color:#cbd5e0;color:rgba(203,213,224,var(--text-opacity))}}
        </style>

        <style>
            body {
                font-family: 'Nunito';
            }
			.form-signin {
			margin-top:10%;
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
         
        @foreach($data2 as $data3)
        <p>{{ $data3['name']}}</p>
        @endforeach

        @foreach ($collection as $item)
            
        @endforeach
          <nav class="navbar navbar-expand-lg navbar-light" style="background-color: #e3f2fd;">
                <a class="navbar-brand" href="/"><img src="1536056986logo.png" width="50%;"></a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarColor03">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item active">
                    <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="/advantage">Peace Advantage</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="/gallery">Gallery</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="/about">About Us</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="/carrers">Carrers</a>
                    </li>
                </ul>
                </div>
          </nav>

          @php
            //   dd($data2);
          @endphp
          <div class="">
            <nav class="navbar navbar-expand-lg navbar-light" style="background-color: #e3f2fd;">
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
                 <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarColor03">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item">
                         <a class="nav-link active" href="#">Book a Flight <span class="sr-only">(current)</span></a>
                        </li>
                    </ul>
                </div>
            </nav>
          </div>  
          <br>
        <div class="container-fluid text-center" style="margin-right:auto; margin-left:auto; padding-left:15px; padding-right:15px; box-sizing:border-box">
                <div class="card-body">
                    <main role="main">
                        <div class="flights-header"style="box-shadow:0 3px 10px rgba(0 0 0 0.2); float:left; font-weight:400; font-size:1.6rem; width:99%; display:block; color:#fff; margin:0; padding:0; ">
                            <div class="row">
                                <div class="info-header col-lg-6 col-md-6 col-sm-6 col-xs-12" style="padding: 13px 0px 13px 15px; min-height:48px; background:gray; border-left:1px solid #ededed; border-right:1px solid #ededed; padding:3px; width:50%;">
                                    <span class="flight-information" style="margin-left:15px; box-sizing: inherit; color: #fff;font-weight: 400;font-size: 1.6rem;">Flight Information</span>
                                </div>
                                <div class="fare-info col-lg-6 col-md-6 col-sm-6 " style="text-align:center; background:gray; min-height:48px; width:50%;">
                                    <div class="row">
                                        <div class="fare-info col-lg-4 col-md-4 col-sm-4 col-xs-4  ECONOMYNONFLEXIFARE-CLASS" style="border-left:1px solid #ededed; border-right:1px solid #ededed; padding:3px;">
                                            <a href="ECOMONYNONFLEXY modal" data-toggle="modal" style="text-decoration: none; background: 0 0;outline: none; text-align:center;">
                                                <span style="box-sizing: inherit; color: #fff; font-weight: 400; font-size: 1.6rem; text-align: center;font-size-adjust: 0.5;">Economy Non Flexi Regional</span>
                                                <sup style="font-family: 'Open Sans', sans-serif; font-weight:400;font-size-adjust: 0.5">
                                                    <i class="glyphicon glyphicon-info-sign" style="position:relative; top:1px; margin-right:3px; display:inline-block; font-family:'Glyphicons Halflings';font-style:normal; font-weight:400; line-height:1;font-size-adjust: 0.5; color: #fff;text-align: center;"></i>
                                                </sup>
                                            </a> 
                                        </div>
                                        <div class="fare-info col-lg-4 col-md-4 col-sm-4  ECONOMYFLEXIFARE-CLASS" style="border-left:1px solid #ededed; border-right:1px solid #ededed; padding:3px;">
                                            <a href="ECONOMYFLEXY modal" data-toggle="modal" style="text-decoration: none;background: 0 0;outline: none;">
                                                <span>Economy Flexi Regional</span>
                                                <sup style="top: -8px;margin: 0 4px 0 -2px;position: relative;font-size: 75%;line-height: 0;vertical-align: baseline;">
                                                    <i class="glyphicon glyphicon-info-sign" style="font-size: 1.3rem; position: relative;top: 1px;margin-right: 3px;display: inline-block;font-family: 'Glyphicons Halflings';font-style: normal;font-weight: 400;line-height: 1;"></i>
                                                </sup>
                                            </a>
                                        </div>
                                        <div class="fare-info col-lg-4 col-md-4 col-sm-4  BUSINESSFARE-CLASS" style="border-left:1px solid #ededed; border-right:1px solid #ededed; padding:3px;">
                                         <a href="#BUSINESS modal" data-toggle="modal" style="text-decoration: none;background: 0 0;outline: none;">
                                                <span>Business</span>
                                                <sup style="top: -8px;margin: 0 4px 0 -2px;position: relative;font-size: 75%;line-height: 0;vertical-align: baseline;">
                                                    <i class="glyphicon glyphicon-info-sign" style="font-size: 1.3rem; position: relative;top: 1px;margin-right: 3px;display: inline-block;font-family: 'Glyphicons Halflings';font-style: normal;font-weight: 400;line-height: 1;"></i>
                                                </sup>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="flightID_0_3_0" class="fight-details false">
                            <div class="info col-lg-4 col-md-4 col-sm-4 col-xs-6" style="margin-top:25px; width: 50%; float: left;">
                                <div class="row">
                                    <div class="col-lg-4 col-md-4 col-sm-4 col-xs-5 departure-info" style="text-align:center; width: 41.66666667%; float: left; ">
                                        <span class="departure-time" style="font-family: 'Open Sans', sans-serif; color: #0d3f84; box-sizing: inherit; font-weight: 500;font-size: 2.5rem;">10:50</span>
                                        <br>
                                        <div class="departure-airport" style="text-align: center; font-family: 'Open Sans', sans-serif;  color: #0d3f84;font-size: 1.5rem;font-weight: 500;line-height: 100%;">Lagos</div>
                                    </div>
                                    <div class="col-lg-4 col-md-4 col-sm-4 col-xs2 divider" style="padding: 0;margin-top: 15px; width: 16.66666667%; float: left;">
                                        <div class="plane-icon-container" style="background-color: #0d3f84;width: 32px;height: 32px;padding: 5px 7px;margin: 0 auto;border-radius: 30px;">
                                            <div class="plane-icon-image" style="color: #fff;background-image:url('../../img/plane-icon.png');background-repeat: no-repeat;height: 20px;width: 20px;">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-4 col-md-4 col-sm-4 col-xs-5 arrival-info" style="text-align: center; width: 41.66666667%; float: left;">
                                        <span class="arrival-time"style="font-family: 'Open Sans', sans-serif; color: #0d3f84; box-sizing: inherit; font-weight: 500;font-size: 2.5rem;">08:15</span>
                                        <div class="arrival-airport" style="font-family: 'Open Sans', sans-serif; color: #0d3f84;font-size: 1.5rem;font-weight: 500;line-height: 100%;">Abuja</div>
                                    </div>
                                </div>
                                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 modal-side" style="margin-top: 15px;color: #a94442; width: 100%; float: left;">
                                    <a href="#flightID 0 3 0 0 modal" data-toggle="modal">
                                        <span class="modal-side-links" style="color: #a94442; box-sizing: inherit;">
                                            <i class="glyphicon glyphicon-info-sign" style="position: relative;top: 1px;margin-right: 3px;display: inline-block;font-family: 'Glyphicons Halflings';font-style: normal;font-weight: 400;line-height: 1;"></i>
                                            Travel Duration: 1 hour(s) 15 minute(s) (non-stop)
                                        </span>
                                    </a>
                                </div>
                                <div class="flightID_0_3_0 modal" class="modal flight-details modal" data-backup="static" data-keyboard="false">
                                    <div class="modal-dialog">
                                        <div class="modal-content">
                                        <div class="modal-haeder">
                                            <button class="close" type="button" data-dismiss="modal" aria-hidden="true">x</button>
                                            <h4 class="modal-title">Flight Information</h4>
                                        </div>
                                        <div class="modal-body">
                                            <div class="flight">
                                                <div class="flight-modal-title">
                                                    Flight: Lagos >> Abuja
                                                </div>
                                                <div class="flight-modal-body">
                                                    <table>
                                                        <tbody style="font-family: 'Open Sans', sans-serif;font-size: 1.6rem; color: #434a54;">
                                                            <tr style="border-spacing: 0;border-collapse: collapse; background-color: #ecf0f1; box-sizing: border-box;">
                                                                <td>Flight Number</td>
                                                                <td>W3-720</td>
                                                            </tr>
                                                            <tr>
                                                                <td>From</td>
                                                                <td>Lagos</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Departing</td>
                                                                <td>10/03/2018 07:00</td>
                                                            </tr>
                                                            <tr>
                                                                <td>To</td>
                                                                <td>Abuja</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Arrival Date</td>
                                                                <td>10/03/2018 08:15 </td>
                                                            </tr>
                                                            <tr>
                                                                <td>Flight Duration</td>
                                                                <td>1 hour(s) 15 minute(s)</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Aircraft Type</td>
                                                                <td>B737-700 - 49Y</td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 flight-extras">
                                </div>
                            </div>
                            <div class="prices col-lg-6 col-md-6 col-sm-6 col-xs-12" style="margin-top:25px; margin-left:180px; width:50%; float: left;line-height: 1.42857143; box-sizing: inherit;font-size: 1.4rem; position: relative;min-height: 1px;padding: 0px;">
                                <div class="row">
                                    <div class="button-fare-price col-lg-4 col-sm-4 col-md-4 false fare-link">
                                        <div class="inner-price selectable-inner false" style="min-height:126px; height:26px; border: 1px solid #ebebeb; box-sizing: inherit;font-weight:200;border-radius:5px; text-align:center; padding-left:80px; padding-right:100px; margin-left:30px;margin-right:20px; color:#0d3f84; background-color:#fff; display:flex; flex-direction:column; justify-content:center;">
                                            <a id="j_idt3903:0:j_idt4025" href="#" onclick="mojarra.ab(this,event,'click',0,'fightsGridbasket');return false" style="color:#404040; font-size:1.3rem; font-weight:400; text-decoration:none;background:0 0; outline:none; text-align:center; box-sizing:inherit;">
                                            <div class="row">
                                                    <div class="mobile-tag col-xs-4 col-md-12 col-sm-12 col-lg-12" style="display: none; width: 100%; float: left;">Economy</div>
                                                    <div class="mobile-price col-xs-4 col-md-12 col-sm-12 col-lg-12 true">
                                                        <span class="col-xs-12 col-md-12 col-sm-12 col-lg-12" style="width: 100%; float: left;">64,237.00</span>
                                                        <span class="col-lg-12 col-xs-12" style="width: 100%; float: left; position: relative;min-height: 1px;padding-right: 15px;padding-left: 15px;">NGN</span>
                                                    </div>
                                                    <div class="price-button col-xs-4 col-md-12 col-sm-12 col-lg-12" style="padding: 5px; width: 100%; float: left;">
                                                        <button class="price-button-inside false" style="font-family: inherit;font-size: inherit;line-height: inherit; border: 1px solid #34000D;border-radius: 5px;background-color: #fff;color: #34000D;padding: 5px 10px;text-align: center;text-decoration: none;display: inline-block;cursor: pointer;margin-top: 10px;">SELECT</button>
                                                    </div>
                                                    <div class="clearfix" style="color: #404040; text-align: center;">
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                    </div>    
                                    <div class="not-selectable price col-lg-4 col-lg-4 col-md-4 col-sm-4 col-xs-4" style="font-size: 1.8rem; width: 50%; float:left; font-weight:400;display: block;color: #646464; box-sizing;inherit;">
                                        <div class="inner-price not-selectable-inner false" style="min-height:126px; height:26px; border:1px solid #ebebeb; font-size: 1.8rem; font-weight: 400;border-radius:5px; padding-left:80px; padding-right:100px; margin-left:20px; text-align:center;">
                                            <span style="box-sizing: inherit; color: #bdc3c7; margin-left:0px; font-size: 1.8rem; font-weight:200;">Sold Out</span>
                                        </div>
                                    </div>
                                    <div class="button-fare-price col-lg-4 col-sm-4 col-md-4 false fare-link">
                                        <div class="inner-price selectable-inner false" style="min-height:126px; height:26px; border: 1px solid #ebebeb; box-sizing: inherit;font-weight:200;border-radius:5px; text-align:center; padding-left:80px; padding-right:100px; margin-left:10px; color:#0d3f84; background-color:#fff; display:flex; flex-direction:column; justify-content:center;">
                                            <a id="j_idt3903:0:j_idt4025" href="#" onclick="mojarra.ab(this,event,'click',0,'fightsGridbasket');return false" style="color:#404040; font-size:1.3rem; font-weight:400; text-decoration:none;background:0 0; outline:none; text-align:center; box-sizing:inherit;">
                                            <div class="row">
                                                    <div class="mobile-tag col-xs-4 col-md-12 col-sm-12 col-lg-12" style="display: none; width: 100%; float: left;">Economy</div>
                                                    <div class="mobile-price col-xs-4 col-md-12 col-sm-12 col-lg-12 true">
                                                        <span class="col-xs-12 col-md-12 col-sm-12 col-lg-12" style="width: 100%; float: left;">64,237.00</span>
                                                        <span class="col-lg-12 col-xs-12" style="width: 100%; float: left; position: relative;min-height: 1px;padding-right: 15px;padding-left: 15px;">NGN</span>
                                                    </div>
                                                    <div class="price-button col-xs-4 col-md-12 col-sm-12 col-lg-12" style="padding: 5px; width: 100%; float: left;">
                                                        <button class="price-button-inside false" style="font-family: inherit;font-size: inherit;line-height: inherit; border: 1px solid #34000D;border-radius: 5px;background-color: #fff;color: #34000D;padding: 5px 10px;text-align: center;text-decoration: none;display: inline-block;cursor: pointer;margin-top: 10px;">SELECT</button>
                                                    </div>
                                                    <div class="clearfix" style="color: #404040; text-align: center;">
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                    </div> 
                                </div>
                            </div>
                        </div>
                        <br>
                        <hr>
                        <br>
                        <div id="flightID_0_3_0" class="fight-details false">
                            <div class="info col-lg-4 col-md-4 col-sm-4 col-xs-6" style="margin-top:25px; width: 50%; float: left;">
                                <div class="row">
                                    <div class="col-lg-4 col-md-4 col-sm-4 col-xs-5 departure-info" style="text-align:center; width: 41.66666667%; float: left; ">
                                        <span class="departure-time" style="font-family: 'Open Sans', sans-serif; color: #0d3f84; box-sizing: inherit; font-weight: 500;font-size: 2.5rem;">10:50</span>
                                        <br>
                                        <div class="departure-airport" style="text-align: center; font-family: 'Open Sans', sans-serif;  color: #0d3f84;font-size: 1.5rem;font-weight: 500;line-height: 100%;">Lagos</div>
                                    </div>
                                    <div class="col-lg-4 col-md-4 col-sm-4 col-xs2 divider" style="padding: 0;margin-top: 15px; width: 16.66666667%; float: left;">
                                        <div class="plane-icon-container" style="background-color: #0d3f84;width: 32px;height: 32px;padding: 5px 7px;margin: 0 auto;border-radius: 30px;">
                                            <div class="plane-icon-image" style="color: #fff;background-image:url('../../img/plane-icon.png');background-repeat: no-repeat;height: 20px;width: 20px;">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-4 col-md-4 col-sm-4 col-xs-5 arrival-info" style="text-align: center; width: 41.66666667%; float: left;">
                                        <span class="arrival-time"style="font-family: 'Open Sans', sans-serif; color: #0d3f84; box-sizing: inherit; font-weight: 500;font-size: 2.5rem;">08:15</span>
                                        <div class="arrival-airport" style="font-family: 'Open Sans', sans-serif; color: #0d3f84;font-size: 1.5rem;font-weight: 500;line-height: 100%;">Abuja</div>
                                    </div>
                                </div>
                                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 modal-side" style="margin-top: 15px;color: #a94442; width: 100%; float: left;">
                                    <a href="#flightID 0 3 0 0 modal" data-toggle="modal">
                                        <span class="modal-side-links" style="color: #a94442; box-sizing: inherit;">
                                            <i class="glyphicon glyphicon-info-sign" style="position: relative;top: 1px;margin-right: 3px;display: inline-block;font-family: 'Glyphicons Halflings';font-style: normal;font-weight: 400;line-height: 1;"></i>
                                            Travel Duration: 1 hour(s) 15 minute(s) (non-stop)
                                        </span>
                                    </a>
                                </div>
                                <div class="flightID_0_3_0 modal" class="modal flight-details modal" data-backup="static" data-keyboard="false">
                                    <div class="modal-dialog">
                                        <div class="modal-content">
                                        <div class="modal-haeder">
                                            <button class="close" type="button" data-dismiss="modal" aria-hidden="true">x</button>
                                            <h4 class="modal-title">Flight Information</h4>
                                        </div>
                                        <div class="modal-body">
                                            <div class="flight">
                                                <div class="flight-modal-title">
                                                    Flight: Lagos >> Abuja
                                                </div>
                                                <div class="flight-modal-body">
                                                    <table>
                                                        <tbody style="font-family: 'Open Sans', sans-serif;font-size: 1.6rem; color: #434a54;">
                                                            <tr style="border-spacing: 0;border-collapse: collapse; background-color: #ecf0f1; box-sizing: border-box;">
                                                                <td>Flight Number</td>
                                                                <td>W3-720</td>
                                                            </tr>
                                                            <tr>
                                                                <td>From</td>
                                                                <td>Lagos</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Departing</td>
                                                                <td>10/03/2018 07:00</td>
                                                            </tr>
                                                            <tr>
                                                                <td>To</td>
                                                                <td>Abuja</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Arrival Date</td>
                                                                <td>10/03/2018 08:15 </td>
                                                            </tr>
                                                            <tr>
                                                                <td>Flight Duration</td>
                                                                <td>1 hour(s) 15 minute(s)</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Aircraft Type</td>
                                                                <td>B737-700 - 49Y</td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 flight-extras">
                                </div>
                            </div>
                            <div class="prices col-lg-6 col-md-6 col-sm-6 col-xs-12" style="margin-top:25px; margin-left:180px; width:50%; float: left;line-height: 1.42857143; box-sizing: inherit;font-size: 1.4rem; position: relative;min-height: 1px;padding: 0px;">
                                <div class="row">
                                    <div class="button-fare-price col-lg-4 col-sm-4 col-md-4 false fare-link">
                                        <div class="inner-price selectable-inner false" style="min-height:126px; height:26px; border: 1px solid #ebebeb; box-sizing: inherit;font-weight:200;border-radius:5px; text-align:center; padding-left:100px; padding-right:80px; margin-left:30px;margin-right:10px; color:#0d3f84; background-color:#fff; display:flex; flex-direction:column; justify-content:center;">
                                            <a id="j_idt3903:0:j_idt4025" href="#" onclick="mojarra.ab(this,event,'click',0,'fightsGridbasket');return false" style="color:#404040; font-size:1.3rem; font-weight:400; text-decoration:none;background:0 0; outline:none; text-align:center; box-sizing:inherit;">
                                            <div class="row">
                                                    <div class="mobile-tag col-xs-4 col-md-12 col-sm-12 col-lg-12" style="display: none; width: 100%; float: left;">Economy</div>
                                                    <div class="mobile-price col-xs-4 col-md-12 col-sm-12 col-lg-12 true">
                                                        <span class="col-xs-12 col-md-12 col-sm-12 col-lg-12" style="width: 100%; float: left;">64,237.00</span>
                                                        <span class="col-lg-12 col-xs-12" style="width: 100%; float: left; position: relative;min-height: 1px;padding-right: 15px;padding-left: 15px;">NGN</span>
                                                    </div>
                                                    <div class="price-button col-xs-4 col-md-12 col-sm-12 col-lg-12" style="padding: 5px; width: 100%; float: left;">
                                                        <button class="price-button-inside false" style="font-family: inherit;font-size: inherit;line-height: inherit; border: 1px solid #34000D;border-radius: 5px;background-color: #fff;color: #34000D;padding: 5px 10px;text-align: center;text-decoration: none;display: inline-block;cursor: pointer;margin-top: 10px;">SELECT</button>
                                                    </div>
                                                    <div class="clearfix" style="color: #404040; text-align: center;">
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                    </div>    
                                    <div class="not-selectable price col-lg-4 col-lg-4 col-md-4 col-sm-4 col-xs-4" style="font-size: 1.8rem; width: 50%; float:left; font-weight:400;display: block;color: #646464; box-sizing;inherit;">
                                        <div class="inner-price not-selectable-inner false" style="min-height:126px; height:26px; border:1px solid #ebebeb; font-size: 1.8rem; font-weight: 400;border-radius:5px; padding-left:100px; padding-right:80px; margin-left:20px; text-align:center;">
                                            <span style="box-sizing: inherit; color: #bdc3c7; margin-left:0px; font-size: 1.8rem; font-weight:200;">Sold Out</span>
                                        </div>
                                    </div>
                                    <div class="button-fare-price col-lg-4 col-sm-4 col-md-4 false fare-link">
                                        <div class="inner-price selectable-inner false" style="min-height:126px; height:26px; border: 1px solid #ebebeb; box-sizing: inherit;font-weight:200;border-radius:5px; text-align:center; padding-left:80px; padding-right:10px; margin-left:10px; color:#0d3f84; background-color:#fff; display:flex; flex-direction:column; justify-content:center;">
                                            <a id="j_idt3903:0:j_idt4025" href="#" onclick="mojarra.ab(this,event,'click',0,'fightsGridbasket');return false" style="color:#404040; font-size:1.3rem; font-weight:400; text-decoration:none;background:0 0; outline:none; text-align:center; box-sizing:inherit;">
                                            <div class="row">
                                                    <div class="mobile-tag col-xs-4 col-md-12 col-sm-12 col-lg-12" style="display: none; width: 100%; float: left;">Economy</div>
                                                    <div class="mobile-price col-xs-4 col-md-12 col-sm-12 col-lg-12 true">
                                                        <span class="col-xs-12 col-md-12 col-sm-12 col-lg-12" style="width: 100%; float: left;">64,237.00</span>
                                                        <span class="col-lg-12 col-xs-12" style="width: 100%; float: left; position: relative;min-height: 1px;padding-right: 15px;padding-left: 15px;">NGN</span>
                                                    </div>
                                                    <div class="price-button col-xs-4 col-md-12 col-sm-12 col-lg-12" style="padding: 5px; width: 100%; float: left;">
                                                        <button class="price-button-inside false" style="font-family: inherit;font-size: inherit;line-height: inherit; border: 1px solid #34000D;border-radius: 5px;background-color: #fff;color: #34000D;padding: 5px 10px;text-align: center;text-decoration: none;display: inline-block;cursor: pointer;margin-top: 10px;">SELECT</button>
                                                    </div>
                                                    <div class="clearfix" style="color: #404040; text-align: center;">
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                    </div> 
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
        </div>



            <br>
            <br>
            <br>
            <br>
            <br><br><br><br>
            <div class="flights-header"style="box-shadow:0 3px 10px rgba(0 0 0 0.2); float:left; font-weight:400; font-size:1.6rem; width:99%; display:block; color:black; margin:0; padding:0; ">
                <div class="row">
                    <div class="info-header col-lg-6 col-md-6 col-sm-6 col-xs-12" style="padding: 13px 0px 13px 15px; min-height:48px; background:white; color:black; border-left:1px solid #ededed; border-top:1px solid #ededed border-right:1px solid #ededed; padding:3px; width:50%;">
                        <span class="flight-information" style="margin-left:15px; box-sizing: inherit; color:black;font-weight: 400;font-size: 1.6rem;">Flight Information</span>
                    </div>
                    <div class="fare-info col-lg-6 col-md-6 col-sm-6 " style="text-align:center; background:white; color:black; min-height:48px; width:50%;">
                        <div class="row">
                            <div class="fare-info col-lg-4 col-md-4 col-sm-4 col-xs-4  ECONOMYNONFLEXIFARE-CLASS" style="border-left:1px solid #ededed; border-right:1px solid #ededed; color:black; padding:3px;">
                                <a href="ECOMONYNONFLEXY modal" data-toggle="modal" style="text-decoration: none; background: 0 0;outline: none; text-align:center;">
                                    <span style="box-sizing: inherit; color:black; font-weight: 400; font-size:90%; text-align: center;font-size-adjust: 0.5;">Economy Non Flexi Regional</span>
                                    <sup style="font-family: 'Open Sans', sans-serif; font-weight:400;font-size-adjust: 0.5">
                                        <i class="glyphicon glyphicon-info-sign" style="position:relative; top:1px; margin-right:3px; display:inline-block; font-family:'Glyphicons Halflings';font-style:normal; font-weight:400; line-height:1;font-size-adjust: 0.5; color: #fff;text-align: center;"></i>
                                    </sup>
                                </a> 
                            </div>
                            <div class="fare-info col-lg-4 col-md-4 col-sm-4  ECONOMYFLEXIFARE-CLASS" style="border-left:1px solid #ededed; border-right:1px solid #ededed; padding:3px;">
                                <a href="ECONOMYFLEXY modal" data-toggle="modal" style="text-decoration: none;background: 0 0;outline: none;">
                                    <span>Economy Flexi Regional</span>
                                    <sup style="top: -8px;margin: 0 4px 0 -2px;position: relative;font-size: 75%;line-height: 0;vertical-align: baseline;">
                                        <i class="glyphicon glyphicon-info-sign" style="font-size: 1.3rem; position: relative;top: 1px;margin-right: 3px;display: inline-block;font-family: 'Glyphicons Halflings';font-style: normal;font-weight: 400;line-height: 1;"></i>
                                    </sup>
                                </a>
                            </div>
                            <div class="fare-info col-lg-4 col-md-4 col-sm-4  BUSINESSFARE-CLASS" style="border-left:1px solid #ededed; border-right:1px solid #ededed; padding:3px;">
                                <a href="#BUSINESS modal" data-toggle="modal" style="text-decoration: none;background: 0 0;outline: none;">
                                    <span>Business</span>
                                    <sup style="top: -8px;margin: 0 4px 0 -2px;position: relative;font-size: 75%;line-height: 0;vertical-align: baseline;">
                                        <i class="glyphicon glyphicon-info-sign" style="font-size: 1.3rem; position: relative;top: 1px;margin-right: 3px;display: inline-block;font-family: 'Glyphicons Halflings';font-style: normal;font-weight: 400;line-height: 1;"></i>
                                    </sup>
                                </a>
                            </div>
                        </div>
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
                                    <h5>6:30 am</h5>
                                    <h6>Monday 11 Dec</h6>
                                    <h5>Lagos</h5>
                                </th>
                                <td>
                                    <h5>1hr 15min</h5>
                                    <p><i class="fas fa-map-marker-alt"></i> <i class="fas fa-arrow-right"></i> <i class="fas fa-plane"></i> Non-stop </p>
                                    <h6>PA47120</h6>
                                </td>
                                <td>
                                    <h5>7:30 am</h5>
                                    <h6>Monday 11 Dec</h6>
                                    <h5>Abuja</h5>
                                </td>
                                <td>
                                    <h6 style="font-weight:bold;">64,237.00</h6>
                                    <h5>NGN</h5>
                                    <button class="price-button-inside false" style="font-family: inherit;font-size: inherit;line-height: inherit; border: 1px solid #34000D;border-radius: 5px;background-color: #fff;color: #34000D;padding: 5px 10px;text-align: center;text-decoration: none;display: inline-block;cursor: pointer;margin-top: 10px;">SELECT</button>
                                </td>
                                <td>
                                    <br>
                                    <br>
                                    <h6 style="font-weight:bold;">Sold Out</h6>
                                </td>
                                <td>
                                    <h6 style="font-weight:bold;">89,000.00</h6>
                                    <h5>NGN</h5>
                                    <button class="price-button-inside false" style="font-family: inherit;font-size: inherit;line-height: inherit; border: 1px solid #34000D;border-radius: 5px;background-color: #fff;color: #34000D;padding: 5px 10px;text-align: center;text-decoration: none;display: inline-block;cursor: pointer;margin-top: 10px;">SELECT</button>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">
                                    <h5>9:30 am</h5>
                                    <h6>Monday 11 Dec</h6>
                                    <h5>Lagos</h5>
                                </th>
                                <td>
                                    <h5>1hr 15min</h5>
                                    <p><i class="fas fa-map-marker-alt"></i> <i class="fas fa-arrow-right"></i> <i class="fas fa-plane"></i> Non-stop </p>
                                    <h6>PA47120</h6>
                                </td>
                                <td>
                                    <h5>10:45 am</h5>
                                    <h6>Monday 11 Dec</h6>
                                    <h5>Abuja</h5>
                                </td>
                                <td>
                                    <h6 style="font-weight:bold;">42,400.00</h6>
                                    <h5>NGN</h5>
                                    <button class="price-button-inside false" style="font-family: inherit;font-size: inherit;line-height: inherit; border: 1px solid #34000D;border-radius: 5px;background-color: #fff;color: #34000D;padding: 5px 10px;text-align: center;text-decoration: none;display: inline-block;cursor: pointer;margin-top: 10px;">SELECT</button>
                                </td>
                                <td>
                                    <h6 style="font-weight:bold;">55,500.00</h6>
                                    <h5>NGN</h5>
                                    <button class="price-button-inside false" style="font-family: inherit;font-size: inherit;line-height: inherit; border: 1px solid #34000D;border-radius: 5px;background-color: #fff;color: #34000D;padding: 5px 10px;text-align: center;text-decoration: none;display: inline-block;cursor: pointer;margin-top: 10px;">SELECT</button>
                                </td>    
                                <td>
                                    <h6 style="font-weight:bold;">60,000.00</h6>
                                    <h5>NGN</h5>
                                    <h6>2 Seats Available</h6>
                                    <button class="price-button-inside false" style="font-family: inherit;font-size: inherit;line-height: inherit; border: 1px solid #34000D;border-radius: 5px;background-color: #fff;color: #34000D;padding: 5px 10px;text-align: center;text-decoration: none;display: inline-block;cursor: pointer;margin-top: 10px;">SELECT</button>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">
                                    <h5>8:15 pm</h5>
                                    <h6>Monday 11 Dec</h6>
                                    <h5>Lagos</h5>
                                </th>
                                <td>
                                    <h5>1hr 15min</h5>
                                    <p><i class="fas fa-map-marker-alt"></i> <i class="fas fa-arrow-right"></i> <i class="fas fa-plane"></i> Non-stop </p>
                                    <h6>PA47120</h6>
                                </td>
                                <td>
                                    <h5>9:30 pm</h5>
                                    <h6>Monday 11 Dec</h6>
                                    <h5>Abuja</h5>
                                </td>
                                <td>
                                    <br>
                                    <br>
                                    <h6 style="font-weight:bold;">Sold Out</h6>
                                </td>
                                <td>
                                    <h6 style="font-weight:bold;">35,700.00</h6>
                                    <h5>NGN</h5>
                                    <h6>4 Seats Available</h6>
                                    <button class="price-button-inside false" style="font-family: inherit;font-size: inherit;line-height: inherit; border: 1px solid #34000D;border-radius: 5px;background-color: #fff;color: #34000D;padding: 5px 10px;text-align: center;text-decoration: none;display: inline-block;cursor: pointer;margin-top: 10px;">SELECT</button>
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
                                    <h5>9:00 am</h5>
                                    <h6>Tuesday 12 Dec</h6>
                                    <h5>Lagos</h5>
                                </th>
                                <td>
                                    <h5>1hr 15min</h5>
                                    <p><i class="fas fa-map-marker-alt"></i> <i class="fas fa-arrow-right"></i> <i class="fas fa-plane"></i> Non-stop </p>
                                    <h6>P47004</h6>
                                </td>
                                <td>
                                    <h5>10:15 am</h5>
                                    <h6>Tuesday 12 Dec</h6>
                                    <h5>Abuja</h5>
                                </td>
                                <td>
                                    <h6 style="font-weight:bold;">47,500.00</h6>
                                    <h5>NGN</h5>
                                    <h6>5 Seats Available</h6>
                                    <button class="price-button-inside false" style="font-family: inherit;font-size: inherit;line-height: inherit; border: 1px solid #34000D;border-radius: 5px;background-color: #fff;color: #34000D;padding: 5px 10px;text-align: center;text-decoration: none;display: inline-block;cursor: pointer;margin-top: 10px;">SELECT</button>
                                </td>
                                <td>
                                    <h6 style="font-weight:bold;">53,000.00</h6>
                                    <h5>NGN</h5>
                                    <button class="price-button-inside false" style="font-family: inherit;font-size: inherit;line-height: inherit; border: 1px solid #34000D;border-radius: 5px;background-color: #fff;color: #34000D;padding: 5px 10px;text-align: center;text-decoration: none;display: inline-block;cursor: pointer;margin-top: 10px;">SELECT</button>
                                </td>
                                <td>
                                    <h6 style="font-weight:bold;">60,000.00</h6>
                                    <h5>NGN</h5>
                                    <button class="price-button-inside false" style="font-family: inherit;font-size: inherit;line-height: inherit; border: 1px solid #34000D;border-radius: 5px;background-color: #fff;color: #34000D;padding: 5px 10px;text-align: center;text-decoration: none;display: inline-block;cursor: pointer;margin-top: 10px;">SELECT</button>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">
                                    <h5>2:30 pm</h5>
                                    <h6>Tuesday 12 Dec</h6>
                                    <h5>Lagos</h5>
                                </th>
                                <td>
                                    <h5>1hr 15min</h5>
                                    <p><i class="fas fa-map-marker-alt"></i> <i class="fas fa-arrow-right"></i> <i class="fas fa-plane"></i> Non-stop </p>
                                    <h6>P47004</h6>
                                </td>
                                <td>
                                    <h5>3:45 pm</h5>
                                    <h6>Tuesday 12 Dec</h6>
                                    <h5>Abuja</h5>
                                </td>
                                <td>
                                    <br>
                                    <br>
                                    <h6 style="font-weight:bold;">Sold Out</h6>
                                </td>
                                <td>
                                    <h6 style="font-weight:bold;">29,300.00</h6>
                                    <h5>NGN</h5>
                                    <h6>4 Seats Available</h6>
                                    <button class="price-button-inside false" style="font-family: inherit;font-size: inherit;line-height: inherit; border: 1px solid #34000D;border-radius: 5px;background-color: #fff;color: #34000D;padding: 5px 10px;text-align: center;text-decoration: none;display: inline-block;cursor: pointer;margin-top: 10px;">SELECT</button>
                                </td>
                                <td>
                                    <h6 style="font-weight:bold;">35,850.00</h6>
                                    <h5>NGN</h5>
                                    <h6>7 Seats Available</h6>
                                    <button class="price-button-inside false" style="font-family: inherit;font-size: inherit;line-height: inherit; border: 1px solid #34000D;border-radius: 5px;background-color: #fff;color: #34000D;padding: 5px 10px;text-align: center;text-decoration: none;display: inline-block;cursor: pointer;margin-top: 10px;">SELECT</button>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">
                                    <h5>8:30 pm</h5>
                                    <h6>Tuesday 12 Dec</h6>
                                    <h5>Lagos</h5>
                                </th>
                                <td>
                                    <h5>1hr 15min</h5>
                                    <p><i class="fas fa-map-marker-alt"></i> <i class="fas fa-arrow-right"></i> <i class="fas fa-plane"></i> Non-stop </p>
                                    <h6>P47004</h6>
                                </td>
                                <td>
                                    <h5>9:30 pm</h5>
                                    <h6>Tuesday 12 Dec</h6>
                                    <h5>Abuja</h5>
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
                                    <h5>8:40 am</h5>
                                    <h6>Wednesday 11 Dec</h6>
                                    <h5>Lagos</h5>
                                </th>
                                <td>
                                    <h5>1hr 15min</h5>
                                    <p><i class="fas fa-map-marker-alt"></i> <i class="fas fa-arrow-right"></i> <i class="fas fa-plane"></i> Non-stop </p>
                                    <h6>P47874</h6>
                                </td>
                                <td>
                                    <h5>9:55 am</h5>
                                    <h6>Wednesday 11 Dec</h6>
                                    <h5>Abuja</h5>
                                </td>
                                <td>
                                    <h6 style="font-weight:bold;">15,830.00</h6>
                                    <h5>NGN</h5>
                                    <button class="price-button-inside false" style="font-family: inherit;font-size: inherit;line-height: inherit; border: 1px solid #34000D;border-radius: 5px;background-color: #fff;color: #34000D;padding: 5px 10px;text-align: center;text-decoration: none;display: inline-block;cursor: pointer;margin-top: 10px;">SELECT</button>
                                </td>
                                <td>
                                    <h6 style="font-weight:bold;">35,850.00</h6>
                                    <h5>NGN</h5>
                                    <h6>2 Seats Available</h6>
                                    <button class="price-button-inside false" style="font-family: inherit;font-size: inherit;line-height: inherit; border: 1px solid #34000D;border-radius: 5px;background-color: #fff;color: #34000D;padding: 5px 10px;text-align: center;text-decoration: none;display: inline-block;cursor: pointer;margin-top: 10px;">SELECT</button>
                                </td>
                                <td>
                                    <h6 style="font-weight:bold;">50,200.00</h6>
                                    <h5>NGN</h5>
                                    <button class="price-button-inside false" style="font-family: inherit;font-size: inherit;line-height: inherit; border: 1px solid #34000D;border-radius: 5px;background-color: #fff;color: #34000D;padding: 5px 10px;text-align: center;text-decoration: none;display: inline-block;cursor: pointer;margin-top: 10px;">SELECT</button>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">
                                    <h5>12:15 pm</h5>
                                    <h6>Wednesday 11 Dec</h6>
                                    <h5>Lagos</h5>
                                </th>
                                <td>
                                    <h5>1hr 15min</h5>
                                    <p><i class="fas fa-map-marker-alt"></i> <i class="fas fa-arrow-right"></i> <i class="fas fa-plane"></i> Non-stop </p>
                                    <h6>P47874</h6>
                                </td>
                                <td>
                                    <h5>1:30 pm</h5>
                                    <h6>Wednesday 11 Dec</h6>
                                    <h5>Abuja</h5>
                                </td>
                                <td>
                                    <h6 style="font-weight:bold;">52,200.00</h6>
                                    <h5>NGN</h5>
                                    <button class="price-button-inside false" style="font-family: inherit;font-size: inherit;line-height: inherit; border: 1px solid #34000D;border-radius: 5px;background-color: #fff;color: #34000D;padding: 5px 10px;text-align: center;text-decoration: none;display: inline-block;cursor: pointer;margin-top: 10px;">SELECT</button>
                                </td>
                                <td>
                                    <h6 style="font-weight:bold;">52,850.00</h6>
                                    <h5>NGN</h5>
                                    <button class="price-button-inside false" style="font-family: inherit;font-size: inherit;line-height: inherit; border: 1px solid #34000D;border-radius: 5px;background-color: #fff;color: #34000D;padding: 5px 10px;text-align: center;text-decoration: none;display: inline-block;cursor: pointer;margin-top: 10px;">SELECT</button>
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
                                    <h5>Lagos</h5>
                                </th>
                                <td>
                                    <h5>1hr 15min</h5>
                                    <p><i class="fas fa-map-marker-alt"></i> <i class="fas fa-arrow-right"></i> <i class="fas fa-plane"></i> Non-stop </p>
                                    <h6>P47874</h6>
                                </td>
                                <td>
                                    <h5>9:30 pm</h5>
                                    <h6>Wednesday 11 Dec</h6>
                                    <h5>Abuja</h5>
                                </td>
                                <td>
                                    <br>
                                    <br>
                                    <h6 style="font-weight:bold;">Sold Out</h6>
                                </td>
                                <td>
                                    <h6 style="font-weight:bold;">32,610.00</h6>
                                    <h5>NGN</h5>
                                    <h6>3 Seats Available</h6>
                                    <button class="price-button-inside false" style="font-family: inherit;font-size: inherit;line-height: inherit; border: 1px solid #34000D;border-radius: 5px;background-color: #fff;color: #34000D;padding: 5px 10px;text-align: center;text-decoration: none;display: inline-block;cursor: pointer;margin-top: 10px;">SELECT</button>
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
                                    <h5>4:15 am</h5>
                                    <h6>Thursday 11 Dec</h6>
                                    <h5>Lagos</h5>``
                                </th>
                                <td>
                                    <h5>1hr 15min</h5>
                                    <p><i class="fas fa-map-marker-alt"></i> <i class="fas fa-arrow-right"></i> <i class="fas fa-plane"></i> Non-stop </p>
                                    <h6>P47103</h6>
                                </td>
                                <td>
                                    <h5>5:30 am</h5>
                                    <h6>Thursday 11 Dec</h6>
                                    <h5>Abuja</h5>
                                </td>
                                <td>
                                    <h6 style="font-weight:bold;">14,560.00</h6>
                                    <h5>NGN</h5>
                                    <button class="price-button-inside false" style="font-family: inherit;font-size: inherit;line-height: inherit; border: 1px solid #34000D;border-radius: 5px;background-color: #fff;color: #34000D;padding: 5px 10px;text-align: center;text-decoration: none;display: inline-block;cursor: pointer;margin-top: 10px;">SELECT</button>
                                </td>
                                <td>
                                    <h6 style="font-weight:bold;">23,000.00</h6>
                                    <h5>NGN</h5>
                                    <button class="price-button-inside false" style="font-family: inherit;font-size: inherit;line-height: inherit; border: 1px solid #34000D;border-radius: 5px;background-color: #fff;color: #34000D;padding: 5px 10px;text-align: center;text-decoration: none;display: inline-block;cursor: pointer;margin-top: 10px;">SELECT</button>
                                </td>
                                <td>
                                    <h6 style="font-weight:bold;">27,200.00</h6>
                                    <h5>NGN</h5>
                                    <button class="price-button-inside false" style="font-family: inherit;font-size: inherit;line-height: inherit; border: 1px solid #34000D;border-radius: 5px;background-color: #fff;color: #34000D;padding: 5px 10px;text-align: center;text-decoration: none;display: inline-block;cursor: pointer;margin-top: 10px;">SELECT</button>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">
                                    <h5>6:00 am</h5>
                                    <h6>Thursday 11 Dec</h6>
                                    <h5>Lagos</h5>
                                </th>
                                <td>
                                    <h5>1hr 15min</h5>
                                    <p><i class="fas fa-map-marker-alt"></i> <i class="fas fa-arrow-right"></i> <i class="fas fa-plane"></i> Non-stop </p>
                                    <h6>P47103</h6>
                                </td>
                                <td>
                                    <h5>7:00 am</h5>
                                    <h6>Thursday 11 Dec</h6>
                                    <h5>Abuja</h5>
                                </td>
                                <td>
                                    <h6 style="font-weight:bold;">21,220.00</h6>
                                    <h5>NGN</h5>
                                    <button class="price-button-inside false" style="font-family: inherit;font-size: inherit;line-height: inherit; border: 1px solid #34000D;border-radius: 5px;background-color: #fff;color: #34000D;padding: 5px 10px;text-align: center;text-decoration: none;display: inline-block;cursor: pointer;margin-top: 10px;">SELECT</button>
                                </td>
                                <td>
                                    <h6 style="font-weight:bold;">24,990.00</h6>
                                    <h5>NGN</h5>
                                    <button class="price-button-inside false" style="font-family: inherit;font-size: inherit;line-height: inherit; border: 1px solid #34000D;border-radius: 5px;background-color: #fff;color: #34000D;padding: 5px 10px;text-align: center;text-decoration: none;display: inline-block;cursor: pointer;margin-top: 10px;">SELECT</button>
                                </td>
                                <td>
                                    <h6 style="font-weight:bold;">25,420.00</h6>
                                    <h5>NGN</h5>
                                    <button class="price-button-inside false" style="font-family: inherit;font-size: inherit;line-height: inherit; border: 1px solid #34000D;border-radius: 5px;background-color: #fff;color: #34000D;padding: 5px 10px;text-align: center;text-decoration: none;display: inline-block;cursor: pointer;margin-top: 10px;">SELECT</button>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">
                                    <h5>8:45 pm</h5>
                                    <h6>Thursday 11 Dec</h6>
                                    <h5>Lagos</h5>
                                </th>
                                <td>
                                    <h5>1hr 15min</h5>
                                    <p><i class="fas fa-map-marker-alt"></i> <i class="fas fa-arrow-right"></i> <i class="fas fa-plane"></i> Non-stop </p>
                                    <h6>P47103</h6>
                                </td>
                                <td>
                                    <h5>10:00 pm</h5>
                                    <h6>Thursday 11 Dec</h6>
                                    <h5>Abuja</h5>
                                </td>
                                <td>
                                    <h6 style="font-weight:bold;">20,000.00</h6>
                                    <h5>NGN</h5>
                                    <button class="price-button-inside false" style="font-family: inherit;font-size: inherit;line-height: inherit; border: 1px solid #34000D;border-radius: 5px;background-color: #fff;color: #34000D;padding: 5px 10px;text-align: center;text-decoration: none;display: inline-block;cursor: pointer;margin-top: 10px;">SELECT</button>
                                </td>
                                <td>
                                    <h6 style="font-weight:bold;">22,220.00</h6>
                                    <h5>NGN</h5>
                                    <button class="price-button-inside false" style="font-family: inherit;font-size: inherit;line-height: inherit; border: 1px solid #34000D;border-radius: 5px;background-color: #fff;color: #34000D;padding: 5px 10px;text-align: center;text-decoration: none;display: inline-block;cursor: pointer;margin-top: 10px;">SELECT</button>
                                </td>
                                <td>
                                    <h6 style="font-weight:bold;">25,000.00</h6>
                                    <h5>NGN</h5>
                                    <h6>6 Seats Available</h6>
                                    <button class="price-button-inside false" style="font-family: inherit;font-size: inherit;line-height: inherit; border: 1px solid #34000D;border-radius: 5px;background-color: #fff;color: #34000D;padding: 5px 10px;text-align: center;text-decoration: none;display: inline-block;cursor: pointer;margin-top: 10px;">SELECT</button>
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
                                    <h5>1:30 am</h5>
                                    <h6>Friday 11 Dec</h6>
                                    <h5>Lagos</h5>
                                </th>
                                <td>
                                    <h5>1hr 15min</h5>
                                    <p><i class="fas fa-map-marker-alt"></i> <i class="fas fa-arrow-right"></i> <i class="fas fa-plane"></i> Non-stop </p>
                                    <h6>P47001</h6>
                                </td>
                                <td>
                                    <h5>2:45 am</h5>
                                    <h6>Friday 11 Dec</h6>
                                    <h5>Abuja</h5>
                                </td>
                                <td>
                                    <h6 style="font-weight:bold;">19,000.00</h6>
                                    <h5>NGN</h5>
                                    <h6>4 Seats Available</h6>
                                    <button class="price-button-inside false" style="font-family: inherit;font-size: inherit;line-height: inherit; border: 1px solid #34000D;border-radius: 5px;background-color: #fff;color: #34000D;padding: 5px 10px;text-align: center;text-decoration: none;display: inline-block;cursor: pointer;margin-top: 10px;">SELECT</button>
                                </td>
                                <td>
                                    <h6 style="font-weight:bold;">25,200.00</h6>
                                    <h5>NGN</h5>
                                    <h6>2 Seats Available</h6>
                                    <button class="price-button-inside false" style="font-family: inherit;font-size: inherit;line-height: inherit; border: 1px solid #34000D;border-radius: 5px;background-color: #fff;color: #34000D;padding: 5px 10px;text-align: center;text-decoration: none;display: inline-block;cursor: pointer;margin-top: 10px;">SELECT</button>
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
                                    <h5>Lagos</h5>
                                </th>
                                <td>
                                    <h5>1hr 15min</h5>
                                    <p><i class="fas fa-map-marker-alt"></i> <i class="fas fa-arrow-right"></i> <i class="fas fa-plane"></i> Non-stop </p>
                                    <h6>P47001</h6>
                                </td>
                                <td>
                                    <h5>8:30 am</h5>
                                    <h6>Friday 11 Dec</h6>
                                    <h5>Abuja</h5>
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
                                    <h6>2 Seats Available</h6>
                                    <button class="price-button-inside false" style="font-family: inherit;font-size: inherit;line-height: inherit; border: 1px solid #34000D;border-radius: 5px;background-color: #fff;color: #34000D;padding: 5px 10px;text-align: center;text-decoration: none;display: inline-block;cursor: pointer;margin-top: 10px;">SELECT</button>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">
                                    <h5>5:25 pm</h5>
                                    <h6>Friday 11 Dec</h6>
                                    <h5>Lagos</h5>
                                </th>
                                <td>
                                    <h5>1hr 15min</h5>
                                    <p><i class="fas fa-map-marker-alt"></i> <i class="fas fa-arrow-right"></i> <i class="fas fa-plane"></i> Non-stop </p>
                                    <h6>P47001</h6>
                                </td>
                                <td>
                                    <h5>6:40 pm</h5>
                                    <h6>Friday 11 Dec</h6>
                                    <h5>Abuja</h5>
                                </td>
                                <td>
                                    <h6 style="font-weight:bold;">15,550.00</h6>
                                    <h5>NGN</h5>
                                    <h6>2 Seats Available</h6>
                                    <button class="price-button-inside false" style="font-family: inherit;font-size: inherit;line-height: inherit; border: 1px solid #34000D;border-radius: 5px;background-color: #fff;color: #34000D;padding: 5px 10px;text-align: center;text-decoration: none;display: inline-block;cursor: pointer;margin-top: 10px;">SELECT</button>
                                </td>
                                <td>
                                    <br>
                                    <br>
                                    <h6 style="font-weight:bold;">Sold Out</h6>
                                </td>
                                <td>
                                    <h6 style="font-weight:bold;">25,900.00</h6>
                                    <h5>NGN</h5>
                                    <button class="price-button-inside false" style="font-family: inherit;font-size: inherit;line-height: inherit; border: 1px solid #34000D;border-radius: 5px;background-color: #fff;color: #34000D;padding: 5px 10px;text-align: center;text-decoration: none;display: inline-block;cursor: pointer;margin-top: 10px;">SELECT</button>
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
                                    <h5>3:00 am</h5>
                                    <h6>Saturday 11 Dec</h6>
                                    <h5>Lagos</h5>
                                </th>
                                <td>
                                    <h5>1hr 15min</h5>
                                    <p><i class="fas fa-map-marker-alt"></i> <i class="fas fa-arrow-right"></i> <i class="fas fa-plane"></i> Non-stop </p>
                                    <h6>P47863</h6>
                                </td>
                                <td>
                                    <h5>4:15 am</h5>
                                    <h6>Saturday 11 Dec</h6>
                                    <h5>Abuja</h5>
                                </td>
                                <td>
                                    <br>
                                    <br>
                                    <h6 style="font-weight:bold;">Sold Out</h6>
                                </td>
                                <td>
                                    <h6 style="font-weight:bold;">11,570.00</h6>
                                    <h5>NGN</h5>
                                    <h6>5 Seats Available</h6>
                                    <button class="price-button-inside false" style="font-family: inherit;font-size: inherit;line-height: inherit; border: 1px solid #34000D;border-radius: 5px;background-color: #fff;color: #34000D;padding: 5px 10px;text-align: center;text-decoration: none;display: inline-block;cursor: pointer;margin-top: 10px;">SELECT</button>
                                </td>
                                <td>
                                    <h6 style="font-weight:bold;">19,630.00</h6>
                                    <h5>NGN</h5>
                                    <button class="price-button-inside false" style="font-family: inherit;font-size: inherit;line-height: inherit; border: 1px solid #34000D;border-radius: 5px;background-color: #fff;color: #34000D;padding: 5px 10px;text-align: center;text-decoration: none;display: inline-block;cursor: pointer;margin-top: 10px;">SELECT</button>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">
                                    <h5>7:30 am</h5>
                                    <h6>Saturday 11 Dec</h6>
                                    <h5>Lagos</h5>
                                </th>
                                <td>
                                    <h5>1hr 15min</h5>
                                    <p><i class="fas fa-map-marker-alt"></i> <i class="fas fa-arrow-right"></i> <i class="fas fa-plane"></i> Non-stop </p>
                                    <h6>P47863</h6>
                                </td>
                                <td>
                                    <h5>8:45 am</h5>
                                    <h6>Saturday 11 Dec</h6>
                                    <h5>Abuja</h5>
                                </td>
                                <td>
                                    <h6 style="font-weight:bold;">13,570.00</h6>
                                    <h5>NGN</h5>
                                    <button class="price-button-inside false" style="font-family: inherit;font-size: inherit;line-height: inherit; border: 1px solid #34000D;border-radius: 5px;background-color: #fff;color: #34000D;padding: 5px 10px;text-align: center;text-decoration: none;display: inline-block;cursor: pointer;margin-top: 10px;">SELECT</button>
                                </td>
                                <td>
                                    <h6 style="font-weight:bold;">18,610.00</h6>
                                    <h5>NGN</h5>
                                    <button class="price-button-inside false" style="font-family: inherit;font-size: inherit;line-height: inherit; border: 1px solid #34000D;border-radius: 5px;background-color: #fff;color: #34000D;padding: 5px 10px;text-align: center;text-decoration: none;display: inline-block;cursor: pointer;margin-top: 10px;">SELECT</button>
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
                                    <h5>Lagos</h5>
                                </th>
                                <td>
                                    <h5>1hr 15min</h5>
                                    <p><i class="fas fa-map-marker-alt"></i> <i class="fas fa-arrow-right"></i> <i class="fas fa-plane"></i> Non-stop </p>
                                    <h6>P47863</h6>
                                </td>
                                <td>
                                    <h5>10:25 pm</h5>
                                    <h6>Saturday 11 Dec</h6>
                                    <h5>Abuja</h5>
                                </td>
                                <td>
                                    <br>
                                    <br>
                                    <h6 style="font-weight:bold;">Sold Out</h6>
                                </td>
                                <td>
                                    <h6 style="font-weight:bold;">14,520.00</h6>
                                    <h5>NGN</h5>
                                    <button class="price-button-inside false" style="font-family: inherit;font-size: inherit;line-height: inherit; border: 1px solid #34000D;border-radius: 5px;background-color: #fff;color: #34000D;padding: 5px 10px;text-align: center;text-decoration: none;display: inline-block;cursor: pointer;margin-top: 10px;">SELECT</button>
                                </td>
                                <td>
                                    <h6 style="font-weight:bold;">18,610.00</h6>
                                    <h5>NGN</h5>
                                    <h6>3 Seats Available<h6>
                                    <button class="price-button-inside false" style="font-family: inherit;font-size: inherit;line-height: inherit; border: 1px solid #34000D;border-radius: 5px;background-color: #fff;color: #34000D;padding: 5px 10px;text-align: center;text-decoration: none;display: inline-block;cursor: pointer;margin-top: 10px;">SELECT</button>
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
                                    <h5>1:50 am</h5>
                                    <h6>Sunday 11 Dec</h6>
                                    <h5>Lagos</h5>
                                </th>
                                <td>
                                    <h5>1hr 15min</h5>
                                    <p><i class="fas fa-map-marker-alt"></i> <i class="fas fa-arrow-right"></i> <i class="fas fa-plane"></i> Non-stop </p>
                                    <h6>P47173</h6>
                                </td>
                                <td>
                                    <h5>3:05 am</h5>
                                    <h6>Sunday 11 Dec</h6>
                                    <h5>Abuja</h5>
                                </td>
                                <td>
                                    <h6 style="font-weight:bold;">18,610.00</h6>
                                    <h5>NGN</h5>
                                    <button class="price-button-inside false" style="font-family: inherit;font-size: inherit;line-height: inherit; border: 1px solid #34000D;border-radius: 5px;background-color: #fff;color: #34000D;padding: 5px 10px;text-align: center;text-decoration: none;display: inline-block;cursor: pointer;margin-top: 10px;">SELECT</button>
                                </td>
                                <td>
                                    <h6 style="font-weight:bold;">39,000.00</h6>
                                    <h5>NGN</h5>
                                    <button class="price-button-inside false" style="font-family: inherit;font-size: inherit;line-height: inherit; border: 1px solid #34000D;border-radius: 5px;background-color: #fff;color: #34000D;padding: 5px 10px;text-align: center;text-decoration: none;display: inline-block;cursor: pointer;margin-top: 10px;">SELECT</button>
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
                                    <h5>Lagos</h5>
                                </th>
                                <td>
                                    <h5>1hr 15min</h5>
                                    <p><i class="fas fa-map-marker-alt"></i> <i class="fas fa-arrow-right"></i> <i class="fas fa-plane"></i> Non-stop </p>
                                    <h6>P47173</h6>
                                </td>
                                <td>
                                    <h5>9:35 am</h5>
                                    <h6>Sunday 11 Dec</h6>
                                    <h5>Abuja</h5>
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
                                    <h6>5 Seats Available</h6>
                                    <button class="price-button-inside false" style="font-family: inherit;font-size: inherit;line-height: inherit; border: 1px solid #34000D;border-radius: 5px;background-color: #fff;color: #34000D;padding: 5px 10px;text-align: center;text-decoration: none;display: inline-block;cursor: pointer;margin-top: 10px;">SELECT</button>
                                </td> 
                            </tr>
                            <tr>
                                <th scope="row">
                                    <h5>8:30 pm</h5>
                                    <h6>Sunday 11 Dec</h6>
                                    <h5>Lagos</h5>
                                </th>
                                <td>
                                    <h5>1hr 15min</h5>
                                    <p><i class="fas fa-map-marker-alt"></i> <i class="fas fa-arrow-right"></i> <i class="fas fa-plane"></i> Non-stop </p>
                                    <h6>P47173</h6>
                                </td>
                                <td>
                                    <h5>9:30 pm</h5>
                                    <h6>Sunday 11 Dec</h6>
                                    <h5>Abuja</h5>
                                </td>
                                <td>
                                    <h6 style="font-weight:bold;">19,000.00</h6>
                                    <h5>NGN</h5>
                                    <button class="price-button-inside false" style="font-family: inherit;font-size: inherit;line-height: inherit; border: 1px solid #34000D;border-radius: 5px;background-color: #fff;color: #34000D;padding: 5px 10px;text-align: center;text-decoration: none;display: inline-block;cursor: pointer;margin-top: 10px;">SELECT</button>
                                </td>
                                <td>
                                    <h6 style="font-weight:bold;">28,700.00</h6>
                                    <h5>NGN</h5>
                                    <button class="price-button-inside false" style="font-family: inherit;font-size: inherit;line-height: inherit; border: 1px solid #34000D;border-radius: 5px;background-color: #fff;color: #34000D;padding: 5px 10px;text-align: center;text-decoration: none;display: inline-block;cursor: pointer;margin-top: 10px;">SELECT</button>
                                </td>
                                <td>
                                    <h6 style="font-weight:bold;">33,000.00</h6>
                                    <h5>NGN</h5>
                                    <button class="price-button-inside false" style="font-family: inherit;font-size: inherit;line-height: inherit; border: 1px solid #34000D;border-radius: 5px;background-color: #fff;color: #34000D;padding: 5px 10px;text-align: center;text-decoration: none;display: inline-block;cursor: pointer;margin-top: 10px;">SELECT</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>


            <br>
            <br>
            <br>
            <br>
            <br>
            <br><br><br>
            <br>
            <br><br><br><br>
            <div class="fotter-widget section-pad-md" style="background-color:#004296; color:#fff; font-size:14px; line-height:1.75;">
                <div class="container" style="padding-top:70px; margin-left:10px;" >
                    <div class="row" style="padding-left:150px;">
                        <div class="widget-row row">
                        <div class="footer-col col-md-3 col-sm-6 res-m-bttm" style="width:100%">
                            <div class="wgs wgs-footer wgs-menu" style="margin-bottom:0;"> 
                            <h5 class="wgs-title">AIR PEACE APP</h5>
                            <div class="wgs-content grow">
                                <a href="https://play.goggle.com/store/apps/details?id=com.flyairpeace.app.airpeace">
                                    <img alt= "Air Peace" src="applestore.png" target="_blank" width="120" height="37" border="0">  
                                </a>
                            </div>
                            <div class="row" style="margin-left:5px; margin-right:5px;">
                                <br>
                            </div>
                            <br>
                            <div class="wgs-content grow">
                                <a href="https://apps.apple.com/ng/app/airpeace/id1491685731">
                                    <img alt="Air Peace" src="playstore.png" target="_blank" style="padding-left:0px;" width="120"; height="37"; border="20">
                                </a>
                            </div>
                            <div class="row" style="margin-left:15px; margin-right:15px;">
                                <br>
                            </div>
                            <br>
                            <div class="wgs-content-grow" style="margin-left:1px; margin-right:15px;">
                                <ul class="menu">
                                    <a href="https://www.flyairpeace.com/termsandconditions.php">Terms and Conditions</a>
                                </ul>
                            </div>
                            </div>
                        </div>
                        <div class="footer-col col-md-2 col-sm-6 res-m-bttm" style="width:25%;">
                            <div class="wgs wgs-footer wgs-menu" style="margin-botton:0;">
                                <h5 class="wgs-title">MENU</h5>
                                <div class="wgs-content">
                                    <ul class="menu" style="list-style:none; margin:0;">
                                        <li><a href="./">Home</a></li>
                                        <li><a href="peace-advantage-login.php">Peace Advantage</a></li>
                                        <li><a href="gallery.php">Gallery</a></li>
                                        <li> <a href="contact.php">Contact Us</a></li>
                                        <li><a href="career.php">Careers</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="footer-col col-md-4 col-sm-6 res-m-bttm" style="width:25%;">
                            <div class="wgs wgs-footer" style="margin-bottom:0;">
                                <h5 class="wgs-title" style="font-size:16px; font-weight:600; text-transformation:uppercase; margin:0 0 12px;">COMPANY INFORMATION</h5>
                            </div>
                            <div class="wgs-content" style="font-size:14px; line-height:1.75;">
                            <ul class="contact-info" style="margin-bottom:15px; list-style:none; padding-right:10px; min-width:70px; display:inline-block; font-weight:400;">
                                <li style="padding-bottom:10px;">
                                    <span>Phone</span>
                                    :0700FLYAIRPEACE
                                    <br>
                                    <span style="padding-right:10px; min-width:70px; display:inline-block; font weight:400; list-style:none;"></span>
                                    :0700-35924-773223
                                </li>
                                <li style="padding-bottom:10px;">
                                    25 Sobo Abiodu Street GRA, Ikeja, Lagos, Nigeria. 
                                </li>
                                <li>
                                IOSA Certified. Best Domestic Airline of the Year.
                                </li>
                            </ul>
                            <ul class="social social-v2" style="list-style:none; margin:0;">
                                <li style="border-color:#014FB4">
                                    <a href="http://www.facebook.com/flyairpeace" target="_blank">
                                        <em class="fa fa-facebook" aria-hidden="true"></em>
                                    </a>
                                </li>
                                <li>
                                    <a href="http://www.twitter.com/flyairpeace" target="_blank">
                                        <em class="fa fa-twitter" aria-hidden="true"></em>
                                    </a>
                                </li>
                                <li>
                                    <a href="http://www.linkedin.com/AirPeaceLimited" target="_blank">
                                        <em class="fa fa-linkedin" aria-hidden="true"></em>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.youtube.com/channel/UCXn1X6Yt7B6J99yhBc9WGQQ" target="_blank">
                                        <em class="fa fa-youtube" aria-hidden="true"></em>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.instagram.com/flyairpeace/" target="_blank">
                                        <em class="fa fa-instagram" aria-hidden="true"></em>
                                    </a>
                                </li>
                            </ul>
                            </div>
                        </div>
                        <div class="footer-col col-md-3 col-sm-6">
                            <div class="wgs wgs-footer">
                                <div class="wgs-content">
                                    <div class="footer-logo" margin-bottom="15px;">
                                        <image src="footer-logo-white.png" srcset="image/logo-white 2x.png 2x" alt="" max-height="50px;" max-width="100%;" vertical-align="top">
                                    </div>
                                    <br>
                                    <div class="partner-ref" over-flow="hidden" box-sizing="border-box;">
                                        <div class="partner-logo half" float="left;" margin="10px 0;" text-align="center" width="20%">
                                            <img src="iosa.jpg" alt="" width="50%;" height="50%;" vertical-align="top">
                                        </div>
                                        <br>
                                        <div class="partner-logo half" float="left;" margin="10px 0;" text-align="center;" max-width="20%">
                                            <img src="iata.jpg" alt="" width="50%;" height="50%" vertical-align="top;">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            <footer style=" padding:3px; background-color:#cd5b45; color:white;">
                <div class="row">
                    <div class="col-sm-7">
                        <p style="text-align:left; margin:3px;">Copyright © 2020 Air Peace Limited. All Rights Reserved.</p>
                    </div>
                    <div class="col-sm-5">
                        <p style="text-align:right;">Powered by <a href="./" target="_blank"> Air Peace</a></p>
                    </div>
                </div>  
            </footer>
    </body>
<script src="/bootstrap/jquery.js"></script>
<script src="/bootstrap/bootstrap.js"></script>
<script src="/bootstrap/bootstrap-datepicker.js"></script>
<script>
  $('#datepicker').datepicker();
  $('#datepicker2').datepicker();
</script>
</html>
