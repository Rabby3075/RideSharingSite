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
            'customerName' => 'Mr.x',
            'customerId' => 1,
            'customerPhone' => '01711111111',
            'pickupPoint' => 'Motijheel',
            'destination' => 'AIUB',
            'length' => '15',
            'cost' => '200',
            'riderId' => 1,
            'riderName' => 'Abc',
            'riderPhone' => '01711111111',
            'customerStatus' => 'Ride complete',
            'riderStatus' => 'Ride complete',
            'rideRequestTime' => '2022-06-26 12:33:08',
            'riderApprovalTime' => '2022-06-26 12:34:08',
            'reachedTime' => '2022-06-26 01:34:08'

        ]);
    }
}
