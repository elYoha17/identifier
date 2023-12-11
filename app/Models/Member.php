<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Storage;

class Member extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'name',
        'last_name',
        'gender',
        'birth_date',
        'town',
        'photo_path',
    ];

    protected $appends = [
        'fullname',
        'photo_link',
    ];

    public function fullname(): Attribute
    {
        return Attribute::get(function () {
            return trim("{$this->name} {$this->last_name}");
        });
    }

    public function photoLink(): Attribute
    {
        return Attribute::get(fn () => Storage::url($this->photo_path));
    }
}
