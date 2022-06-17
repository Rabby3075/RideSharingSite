<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class CustomerSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        \App\Models\Customer::factory()->create([
            'name' => 'Someone',
            'dob' => '2001-06-07',
            'phone' => '01711111111',
            'address' => 'somewhere,earth',
            'username' => 'somebash',
            'email' => 'someone@email.com',
            'password' => md5('12345678'),
            'image' => 'index.png',
            'rating' => '0'

        ]);
    }
}
