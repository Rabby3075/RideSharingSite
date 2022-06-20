<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class AdminSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {    
        \App\Models\Admin::factory()->create([
            'name' => 'Laboni',
            'dob' => '1999-03-06',
            'email' => 'Laboni@gmail.com',
            'phone'=> '01767876546',
            'password' => '123456',
            'cpassword'=>'123456',
            'picture' => 'user.png',
           
        ]);
    }
    
}
