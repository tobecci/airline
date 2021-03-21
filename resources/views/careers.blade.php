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
        <nav class="navbar navbar-expand-lg navbar-light" style="background-color: #e3f2fd;">
            <a class="navbar-brand" href="/"><img src="1536056986logo.png" width="50%;"></a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarColor03">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item">
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
                    <li class="nav-item active">
                     <a class="nav-link" href="/careers">Carrers</a>
                    </li>
                </ul>
            </div>
        </nav>
        <br>
        <div class="banner banner-static banner-small has-bg lighter-filter bg-light has-bg-image">
            <div class="banner-cpn" style="position:absolute; width:100%; left:0; top:40%; z-index:5; transform:translateY(-50%); padding-left:450px;">
                <div class="container" style="position:static;">
                    <div class="content row" style="position=relative; margin-right:-15px; margin-left:-15px;">
                        <div class="banner-text light style-modern" style="color:black;">
                            <h1 class="page-title"> Careers @ Airpeace </h1>
                            <p>Come and join our ever expanding team of professionals</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="banner-bg imagebg bg-image-loaded" style="background-image:url(career.jpg); background-repeat:no-repeat; margin-left:23px;;">
                <img src="career.jpg" alt="">
            </div>
        </div>
        <br>
        <div class="container">
            <div class="row">
                <div class="col-md-8 col-sm-6 pad-r">
                    <h2 style="font-family:Poppins, sans-serif; font-weight:400; light-height:1.3;">Career</h2>
                    <br>
                    <hr>
                    <p>Welcome to Air Peace Careers. We recruit employees who are driven, have the team spirit and
                    share our<br> values. We foster a supportive and productive work place and strive to provide an 
                    environment where<br> personal and professional growth and career objectives are developed and
                    achieved. At the heart of<br> everything we do is our unrelenting drive to provide better customer
                    experiences.</p>
                    <br>
                    <p>You will work with some of the finest Pilots, Engineers, Ground Operations and support staff.
                    Our<br> employees are committed to changing how Business works and have a positive can do attitude.
                    We <br>think globally, stand outside the box and see our workmates as friends</p>
                    <br>
                    <p>We aspire to become a dependable employer that offers its employees opportunities, relevant 
                    trainings<br> and a safe working environment</p>
                    <br>
                    <p>At Air Peace Limited, You have the opportunity to advance your career beyond your imagination.</p>
                </div>
                <div class="col-md-4">
                    <div class="p-4 mb-3 bg-light rounded" style="border:8px solid blue; padding-top:20px; margin-top:150px;">
                        <h5 class="fst-italic" style="font-weight:600;">Call Centre</h5>
                        <p>A team of dedicated call agents who are<br> there when you need them,Just call.<br>
                            0700FLYAIRPEACE OR 0700-35924-773223</p>
                    </div>
                </div>
            </div>
        </div>
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
