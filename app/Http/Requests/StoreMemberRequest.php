<?php

namespace App\Http\Requests;

use App\Enums\Gender;
use App\Models\Member;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\Rules\Enum;

class StoreMemberRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return Auth::check();
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'name' => ['required', 'string', 'max:32'],
            'last_name' => ['nullable', 'string', 'max:32'],
            'gender' => ['required', new Enum(Gender::class)],
            'birth_date' =>['required', 'date', 'before_or_equal:18years'],
            'town' => ['required', 'string', 'max:50'],
            'photo' => ['required', 'file', 'image'],
        ];
    }

    public function handle()
    {
        tap($this->storeProfilePhoto(), function ($photo_path) {
            Member::create([
                'user_id' => $this->user()->id,
                'photo_path' => $photo_path,
                ...$this->safe()->except(['photo']),
            ]);
        });
    }

    private function storeProfilePhoto() 
    {
        return $this->file('photo')->storePublicly();
    }
}
