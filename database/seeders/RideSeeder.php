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
            'pickupPoint' => 'Motijheel',
            'destination' => 'AIUB',
            'length' => '10',
            'cost' => '150',
            'riderId' => 1,
            'riderName' => 'Abc',
            'riderPhone' => '01711111111',
            'customerStatus' => 'Ride complete',
            'riderStatus' => 'Ride complete',
            'rideRequestTime' => '27 June 2022, 06:02:26 PM',
            'riderApprovalTime' => '27 June 2022, 06:02:27 PM',
            'reachedTime' => '27 June 2022, 06:40:21 PM'

        ]);
        \App\Models\Ride::factory()->create([
            'customerName' => 'Someone',
            'customerId' => 1,
            'customerPhone' => '01711111111',
            'pickupPoint' => 'AIUB',
            'destination' => 'Motijheel',
            'length' => '10',
            'cost' => '150',
            'riderId' => 1,
            'riderName' => 'Abc',
            'riderPhone' => '01711111111',
            'customerStatus' => 'Approve',
            'riderStatus' => 'Accept',
            'rideRequestTime' => '27 June 2022, 10:10:26 PM',
            'riderApprovalTime' => '27 June 2022, 10:10:29 PM'
        ]);
        \App\Models\Ride::factory()->create([
            'customerName' => 'Someone',
            'customerId' => 1,
            'customerPhone' => '01711111111',
            'pickupPoint' => 'SegunBagicha',
            'destination' => 'Dhanmondi',
            'length' => '1',
            'cost' => '60',
            'customerStatus' => 'Cancel',
            'rideRequestTime' => '28 June 2022, 10:00:00 AM',
            'cancelTime' => '28 June 2022, 10:02:00 AM'

        ]);
        \App\Models\Ride::factory()->create([
            'customerName' => 'Someone',
            'customerId' => 1,
            'customerPhone' => '01711111111',
            'pickupPoint' => 'SegunBagicha',
            'destination' => 'Dhanmondi',
            'length' => '1',
            'cost' => '60',
            'customerStatus' => 'Waiting for rider...',
            'rideRequestTime' => '28 June 2022, 10:10:26 AM'

        ]);
    }
}
