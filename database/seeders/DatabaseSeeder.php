<?php

namespace Database\Seeders;

use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

        User::factory()->create([
          'name' => 'Admin',
            'email' => 'admin@gmail.com',
            'role' => 'admin',
            'workos_id' => 'dummy_workos_'.Str::random(20),
            'avatar' => 'https://example.com/admin.png'
        ]);

        User::factory()->create([
            'name' => 'Guru Matematika',
            'email' => 'guru@gmail.com',
            'role' => 'guru',
            'workos_id' => 'dummy_workos_'.Str::random(20),
            'avatar' => 'https://example.com/guru.png'
        ]);

        User::factory()->create([
            'name' => 'Orang Tua Ani',
            'email' => 'ortu@gmail.com',
            'role' => 'orangtua',
            'workos_id' => 'dummy_workos_'.Str::random(20),
            'avatar' => 'https://example.com/ortu.png'
        ]);

        User::factory()->create([
            'name' => 'Kepala Sekolah',
            'email' => 'kepsek@gmail.com',
            'role' => 'admin',
            'workos_id' => 'dummy_workos_'.Str::random(20),
            'avatar' => 'https://example.com/kepsek.png'
        ]);
    }
}
