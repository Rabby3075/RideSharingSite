<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;



return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('rides', function (Blueprint $table) {
            $table->id();
            $table->string('customerName');
            $table->unsignedBigInteger('customerId');
            $table->string('customerPhone');
            $table->string('pickupPoint');
            $table->string('destination');
            $table->string('length');
            $table->string('cost');
            $table->unsignedBigInteger('riderId')->nullable();
            $table->string('riderName')->nullable();
            $table->string('riderPhone')->nullable();
            $table->string('customerStatus')->nullable();
            $table->string('riderStatus')->nullable();

            $table->foreign('customerId')->references('id')->on('customers');
            $table->foreign('riderId')->references('id')->on('riders');

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
        Schema::dropIfExists('rides');
    }
};
