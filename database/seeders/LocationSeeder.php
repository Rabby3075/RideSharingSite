<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class LocationSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        \App\Models\Location::factory()->create([
            'location' => 'SegunBagicha',
            'latitude' => '23.733274',
            'longitude' => '90.407522'

        ]);
        \App\Models\Location::factory()->create([
            'location' => 'AIUB',
            'latitude' => '23.822047',
            'longitude' => '90.427600'

        ]);
        \App\Models\Location::factory()->create([
            'location' => 'Khilgaon',
            'latitude' => '23.751948',
            'longitude' => '90.424642'

        ]);
        \App\Models\Location::factory()->create([
            'location' => 'Mirpur',
            'latitude' => '23.820517',
            'longitude' => '90.364683'

        ]);
        \App\Models\Location::factory()->create([
            'location' => 'Uttara',
            'latitude' => '23.875033',
            'longitude' => '90.380962'

        ]);
        \App\Models\Location::factory()->create([
            'location' => 'Shanarpar',
            'latitude' => '23.688831',
            'longitude' => '90.484106'

        ]);
        \App\Models\Location::factory()->create([
            'location' => 'Motijheel',
            'latitude' => '23.734524',
            'longitude' => '90.418307'

        ]);
        \App\Models\Location::factory()->create([
            'location' => 'Dhanmondi',
            'latitude' => '23.739714',
            'longitude' => '90.381384'

        ]);
        \App\Models\Location::factory()->create([
            'location' => 'Bashundhara City Market',
            'latitude' => '23.751163',
            'longitude' => '90.390546'

        ]);
        \App\Models\Location::factory()->create([
            'location' => 'Hatirjheel',
            'latitude' => '23.773257',
            'longitude' => '90.416339',

        ]);
    }
}
