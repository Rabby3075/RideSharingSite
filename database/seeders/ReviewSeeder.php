<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ReviewSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {

        \App\Models\Review::factory()->create([
            'by_id' => 'Abc',
            'to_id' => 'male',
            'message' => '2000-01-01',
            'rating' => '5'

        ]);
        //$table->timestamps();
    }
}
