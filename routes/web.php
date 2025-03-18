<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Laravel\WorkOS\Http\Middleware\ValidateSessionWithWorkOS;

Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');

Route::middleware([
    'auth',
    ValidateSessionWithWorkOS::class,
])->group(function () {
    Route::get('dashboard', function (\Illuminate\Http\Request $request) {
        return match ($request->user()->role) {
            'admin' => Inertia::render('dashboard'),
            'guru' => redirect()->route('ruangan'),
            'orangtua' => redirect()->route('home'),
            default => abort(403),
        };
    })->name('dashboard');

    Route::get('ruangan', function () {
        return Inertia::render('ruangan');
    })->name('ruangan');
});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
