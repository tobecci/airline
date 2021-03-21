<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAirpeaceSelectTables extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('airpeaceselecttables', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('days');
            $table->string('bound');
            $table->string('time1');
            $table->string('time2');
            $table->string('flight_class');
            $table->string('flight_price');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('airpeace_select_tables');
    }
}
