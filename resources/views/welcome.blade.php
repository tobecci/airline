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
                  <a class="nav-link" href="/advantage">Peace Advantage</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/gallery">Gallery</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/about">About Us</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/careers">Careers</a>
                </li>
              </ul>
            </div>
          </nav>
          <div class="">
            <nav class="navbar navbar-expand-lg navbar-light" style="background-color: #e3f2fd;">
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
                 <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarColor03">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item active">
                         <a class="nav-link" href="/">Book a Flight <span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item">
                          <a class="nav-link" href="mybooking">Manage My Booking</a>
                        </li>
                        <li class="nav-item ">
                         <a class="nav-link" href="checkin">Online Check-in</a>
                        </li>
                    </ul>
                </div>
            </nav>
          </div>
          <br>
          <div class="container-fluid text-center" style="margin-right:auto; margin-left:auto; padding-left:15px; padding-right:15px; box-sizing:border-box">
            <div class="row" style="background-repeat:no-repeat; background-size:100% auto; background-image:url(/background.jpg); min-height:600px;>
              <p style="margin:0 0 30px;"></p>
              <div class="col-lg-offset-1 col-md-offset-1 col-lg-6 col-md-5 col-xs-offset-0 col-sm-offset-0 col-sm-6 col-x2-12>
                <div class="panel-group">
                  <div class="card md-4 shadow-sm" style="margin-top:5%; margin-bottom:5%;">
                    <div class="card-header">
                      <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-globe2" viewBox="0 0 16 16">
                        <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm7.5-6.923c-.67.204-1.335.82-1.887 1.855-.143.268-.276.56-.395.872.705.157 1.472.257 2.282.287V1.077zM4.249 3.539c.142-.384.304-.744.481-1.078a6.7 6.7 0 0 1 .597-.933A7.01 7.01 0 0 0 3.051 3.05c.362.184.763.349 1.198.49zM3.509 7.5c.036-1.07.188-2.087.436-3.008a9.124 9.124 0 0 1-1.565-.667A6.964 6.964 0 0 0 1.018 7.5h2.49zm1.4-2.741a12.344 12.344 0 0 0-.4 2.741H7.5V5.091c-.91-.03-1.783-.145-2.591-.332zM8.5 5.09V7.5h2.99a12.342 12.342 0 0 0-.399-2.741c-.808.187-1.681.301-2.591.332zM4.51 8.5c.035.987.176 1.914.399 2.741A13.612 13.612 0 0 1 7.5 10.91V8.5H4.51zm3.99 0v2.409c.91.03 1.783.145 2.591.332.223-.827.364-1.754.4-2.741H8.5zm-3.282 3.696c.12.312.252.604.395.872.552 1.035 1.218 1.65 1.887 1.855V11.91c-.81.03-1.577.13-2.282.287zm.11 2.276a6.696 6.696 0 0 1-.598-.933 8.853 8.853 0 0 1-.481-1.079 8.38 8.38 0 0 0-1.198.49 7.01 7.01 0 0 0 2.276 1.522zm-1.383-2.964A13.36 13.36 0 0 1 3.508 8.5h-2.49a6.963 6.963 0 0 0 1.362 3.675c.47-.258.995-.482 1.565-.667zm6.728 2.964a7.009 7.009 0 0 0 2.275-1.521 8.376 8.376 0 0 0-1.197-.49 8.853 8.853 0 0 1-.481 1.078 6.688 6.688 0 0 1-.597.933zM8.5 11.909v3.014c.67-.204 1.335-.82 1.887-1.855.143-.268.276-.56.395-.872A12.63 12.63 0 0 0 8.5 11.91zm3.555-.401c.57.185 1.095.409 1.565.667A6.963 6.963 0 0 0 14.982 8.5h-2.49a13.36 13.36 0 0 1-.437 3.008zM14.982 7.5a6.963 6.963 0 0 0-1.362-3.675c-.47.258-.995.482-1.565.667.248.92.4 1.938.437 3.008h2.49zM11.27 2.461c.177.334.339.694.482 1.078a8.368 8.368 0 0 0 1.196-.49 7.01 7.01 0 0 0-2.275-1.52c.218.283.418.597.597.932zm-.488 1.343a7.765 7.765 0 0 0-.395-.872C9.835 1.897 9.17 1.282 8.5 1.077V4.09c.81-.03 1.577-.13 2.282-.287z"/>
                      </svg>
                      <h4 class="my-0 font-weight-normal">Book Flight</h4>
                    </div>
                    <form action="/booking" method="post" id="bookingform">
                      <input type="hidden" name="_token" value="{{ csrf_token() }}" />
                      <div class="card-body">
                        <div>
                            <label for="currency">Currency</label>
                            <select class="custom-select d-block w-100" name="currency" id="currency" required="false">
                              <option value="">Choose...</option>
                              <option>Nigerian Naira </option>
                              <option>Ghana Cedis</option>
                              <option>US Dollar</option>
                              <option>Gambia Dalasi</option>
                              <option>South African Rand</option>
                              <option>Sierra Leonean leone</option>
                              <option>Senegalese OXF</option>
                              <option>UAE Dirhams</option>
                              <option>Liberian dollar</option>
                            </select>
                            <div class="invalid-feedback">
                              Please provide a valid currency.
                            </div>
                        </div>
                        <div class="row">
                            <div class="col">
                              <label for="from">From</label>
                              <select class="custom-select d-block w-100" name="from" id="from" required="">
                                <option value="">Choose...</option>
                                <option>Abuja (ABV)</option>
                                <option>Acrra (ACC)</option>
                                <option>Akure (AKR)</option>
                                <option>Asaba (ABB)</option>
                                <option>Banjul (BJL)</option>
                                <option>Benin (BNI)</option>
                                <option>Calabar (CBQ)</option>
                                <option>Dakar (DSS)</option>
                                <option>Dubai Bus Station (XNB)</option>
                                <option>Enugu (ENU)</option>
                                <option>Freetown (FNA)</option>
                                <option>Johannesburg (JNB)</option>
                                <option>Kanuda (KAD)</option>
                                <option>Kano (KAN)</option>
                                <option>Makurdi (MDI)</option>
                                <option>Owerri (QOW)</option>
                                <option>Port Harcourt (PHC)</option>
                                <option>Sharjah (SHJ)</option>
                                <option>Uyo (QUO)</option>
                                <option>Warri (QRW)</option>
                                <option>Yola (YOL)</option>
                              </select>
                              <div class="invalid-feedback">
                                Please select a valid from.
                              </div>
                            </div>
                            <div class="col-md-6 mb-3">
                              <label for="to">To</label>
                              <select class="custom-select d-block w-100" name="to" id="to" required="">
                                <option value="">Choose...</option>
                                <option>Abuja (ABV)</option>
                                <option>Acrra (ACC)</option>
                                <option>Akure (AKR)</option>
                                <option>Asaba (ABB)</option>
                                <option>Banjul (BJL)</option>
                                <option>Benin (BNI)</option>
                                <option>Calabar (CBQ)</option>
                                <option>Dakar (DSS)</option>
                                <option>Dubai Bus Station (XNB)</option>
                                <option>Enugu (ENU)</option>
                                <option>Freetown (FNA)</option>
                                <option>Johannesburg (JNB)</option>
                                <option>Kaduna (KAD) </option>
                                <option>Kano (KAN)</option>
                                <option>Makurdi (MDI)</option>
                                <option>Owerri (QOW)</option>
                                <option>Port Harcourt(PHC)</option>
                                <option>Sharjah (SHJ)</option>
                                <option>Uyo (QUO)</option>
                                <option>Warri (QRW)</option>
                                <option>Yola (YOL)</option>
                              </select>
                              <div class="invalid-feedback">
                                Please provide a valid to.
                              </div>
                            </div>
                        </div>
                        <div class="row">
                          <div class="col-md-3">
                            <button type="button" class=" return_btn btn btn-md btn-block btn-info">Return</button>
                          </div>
                          <div class="col-md-3">
                            <button type="button"  class=" one_btn btn btn-md btn-block btn-primary">One Way</button>
                          </div>
                        </div>
                        <br>
                        <div class="row">
                          <div class="col-md-6" id="dep">
                            <label for="datepicker">Departure</label>
                            <div class="input-group mb-2">
                              <div class="input-group-prepend">
                                <div class="input-group-text">
                                  <i class="fas fa-calendar"></i>
                                </div>
                              </div>
                              <input name="depart" type="text" class="form-control" id="datepicker" required="" placeholder="Departure">
                            </div>
                          </div>
                          <div class="col-md-6" id="arr">
                            <label for="datepicker2">Arrival</label>
                            <div class="input-group mb-2">
                              <div class="input-group-prepend">
                                <div class="input-group-text">
                                  <i class="fas fa-calendar"></i>
                                </div>
                              </div>
                              <input name="arrival" type="text" class="form-control" id="datepicker2" placeholder="Arrival">
                            </div>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col-md-4 mb-3">
                            <label for="adult">Adult (+12yrs)</label>
                            <select class="custom-select d-block w-100" name="adult_no" id="adult" required="">
                              <option value="">Choose...</option>
                              <option>1 Adult</option>
                              <option>2 Adults</option>
                              <option>3 Adults</option>
                              <option>4 Adults</option>
                              <option>5 Adults</option>
                              <option>6 Adults</option>
                              <option>7 Adults</option>
                              <option>8 Adults</option>
                              <option>9 Adults</option>
                            </select>
                            <div class="invalid-feedback">
                              Please select a valid number.
                            </div>
                          </div>
                          <div class="col-md-4 mb-3">
                            <label for="child">Children (2-11yrs)</label>
                            <select class="custom-select d-block w-100" name="child_no" id="child" required="">
                              <option value="">Choose...</option>
                              <option>0 Child</option>
                              <option>1 Child</option>
                              <option>2 Children</option>
                              <option>3 Children</option>
                              <option>4 Children</option>
                              <option>5 Children</option>
                              <option>6 Children</option>
                            </select>
                            <div class="invalid-feedback">
                              Please provide a valid number.
                            </div>
                          </div>
                          <div class="col-md-4 mb-3">
                            <label for="infants">Infants (<2yrs) </label>
                            <select class="custom-select d-block w-100" name="infants_no" id="infants" required="">
                              <option value="">Choose...</option>
                              <option>0 Infant</option>
                              <option>1 Infant</option>
                              <option>2 Infants</option>
                              <option>3 Infants</option>
                              <option>4 Infants</option>
                              <option>5 Infants</option>
                              <option>6 Infants</option>
                            </select>
                            <div class="invalid-feedback">
                              Please provide a valid number.
                            </div>
                          </div>
                        </div>
                        <hr>
                        <button type="submit" class="btn btn-md btn-block btn-info">Continue</button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="fotter-widget section-pad-md" style="background-color:#004296; color:#fff; font-size:14px; line-height:1.75;">
            <div class="container" style="padding-top:70px;" >
              <div class="row" style="; padding-right:;">
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
                          <li><a href="naoh.php">Home</a></li>
                          <li><a href="advantage.php">Peace Advantage</a></li>
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
<script src="/bootstrap/bootstrap-datepicker.js"></script>
<script>
  $('#datepicker').datepicker();
  $('#datepicker2').datepicker();
  $('.return_btn').click(function(){
    $('#arr').slideDown();
  });
  $('.one_btn').click(function(){
    $('#arr').slideUp();
    // $('<h1>hg</h1>').prependTo('#bookingform');
  });
</script>
</html>
