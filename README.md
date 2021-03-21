Hello. There are basically two processes here. The index fine is the welcome.blade.php .
Inside, you see a form which accepts some data input. After clicking on submit button,
It takes you to booking view ('booking.blade.php')
Some of the data input from the index page form reflects basically at the side bar. This is being controlled by a Controller called Booking. Fine.
The issue is now, I created a Controller called AirpeaceSelectsControllers. I try to pass the the data array into booking view
but it fails. The same data shows on a different page that has not post route

The Booking and AirpeaceSelectsControllers talk to Route::get('/booking', [AirpeaceSelectTablesController::class, 'index']);
Route::post('/booking', [Booking::class, 'index']);
