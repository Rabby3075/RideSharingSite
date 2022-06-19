<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ManagerSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //

        \App\Models\Manager::factory()->create([
            'name' => 'xyz',
            'username' => 'xyzuser',
            'dob' => '2022-06-08',
            'phone' => '12345678901',
            'email' => 'xyz@email.com',
            'password' => md5('43265478'),
            'image' => 'index.png',
            'status' => 'invalid'

        ]);
    }
}
