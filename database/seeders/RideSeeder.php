<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class RideSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        \App\Models\Ride::factory()->create([
            'customerName' => 'Someone',
            'customerId' => 1,
            'customerPhone' => '01711111111',
            'pickupPoint' => 'somewhere,earth',
            'destination' => 'anywhere,earth',
            'length' => '3 kilo',
            'cost' => '100 tk',
            'riderId' => 1,
            'riderName' => 'Abc',
            'riderPhone' => '01711111111',
            'customerStatus' => 'Ride complete',
            'riderStatus' => 'Ride complete',
            'created_at' => '2022-06-23 02:24:08',
            'updated_at' => '2022-06-23 03:00:00',

        ]);
    }
}
