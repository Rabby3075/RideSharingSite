<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ChatSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        \App\Models\Chat::factory()->create([
            'customerId' => 1,
            'riderId' => 1,
            'message' => 'hi',
            'created_at' => '2022-06-23 02:24:08',
            'updated_at' => '2022-06-23 02:24:08'

        ]);
    }
}
