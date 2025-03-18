<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\DB;

class DummyUsersSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $user = [
            [
            'name' => 'admin',
            'email' => 'admin@gmail.com',
            'role' => 'admin',
            'workos_id' => 'dummy_workos_'.Str::random(20),
            'avatar' => 'https://example.com/avatar.png'
            ],
            [
                'name' => 'admin',
                'email' => 'admin@gmail.com',
                'role' => 'admin',
                'workos_id' => 'dummy_workos_'.Str::random(20),
                'avatar' => 'https://example.com/avatar.png'
            ],
            [
                'name' => 'admin',
                'email' => 'admin@gmail.com',
                'role' => 'admin',
                'workos_id' => 'dummy_workos_'.Str::random(20),
                'avatar' => 'https://example.com/avatar.png'
            ],
        ];

        foreach ($user as $key => $value) {
            DB::table('users')->insert($value);
        }
    }
} 