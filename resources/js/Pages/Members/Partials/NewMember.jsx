import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import RadioButton from '@/Components/RadioButton';
import TextInput from '@/Components/TextInput';
import { useForm } from '@inertiajs/react';
import React from 'react'

function NewMember({className = ''}) {
    const {data, setData, post, processing, errors, clearErrors} = useForm({
        name: '',
        last_name: '',
        gender: 'm',
        birth_date: '',
        town: '',
        photo: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        clearErrors();
        post(route('members.store'));
    }

    return (
        <section className={className}>
            <header>
                <h2 className="text-lg font-medium text-gray-900">Profile Information</h2>

                <p className="mt-1 text-sm text-gray-600">
                    Update your account's profile information and email address.
                </p>
            </header>

            <form onSubmit={handleSubmit} className="mt-6 space-y-6">
                <div>
                    <InputLabel htmlFor="name" value="Nom" />

                    <TextInput
                        id="name"
                        className="mt-1 block w-full"
                        value={data.name}
                        onChange={e => setData('name', e.target.value)}
                        required
                        isFocused
                    />

                    <InputError className="mt-2" message={errors.name} />
                </div>
                
                <div>
                    <InputLabel htmlFor="last_name" value="Post-nom" />

                    <TextInput
                        id="last_name"
                        className="mt-1 block w-full"
                        value={data.last_name}
                        onChange={e => setData('last_name', e.target.value)}
                    />

                    <InputError className="mt-2" message={errors.last_name} />
                </div>
                
                <div>
                    <InputLabel value="Sexe" />

                    <label className="mt-1 flex items-center">
                        <RadioButton
                            name="gender"
                            checked={data.gender === 'm'}
                            onChange={() => setData('gender', 'm')}
                        />
                        <span className="ms-2 text-sm text-gray-600">Masculin</span>
                    </label>

                    <label className="mt-1 flex items-center">
                        <RadioButton
                            name="gender"
                            checked={data.gender === 'f'}
                            onChange={() => setData('gender', 'f')}
                        />
                        <span className="ms-2 text-sm text-gray-600">Féminin</span>
                    </label>

                    <InputError className="mt-2" message={errors.gender} />
                </div>
                
                <div>
                    <InputLabel htmlFor="birth_date" value="Date de naissance" />

                    <TextInput
                        id="birth_date"
                        type="date"
                        className="mt-1 block w-full"
                        value={data.birth_date}
                        onChange={e => setData('birth_date', e.target.value)}
                        required
                    />

                    <InputError className="mt-2" message={errors.birth_date} />
                </div>
                
                <div>
                    <InputLabel htmlFor="town" value="Ville d'appartenance" />

                    <TextInput
                        id="town"
                        className="mt-1 block w-full"
                        value={data.town}
                        onChange={e => setData('town', e.target.value)}
                        required
                    />

                    <InputError className="mt-2" message={errors.town} />
                </div>
                
                <div>
                    <InputLabel htmlFor="photo" value="Photo" />

                    <TextInput
                        id="photo"
                        type="file"
                        className="mt-1 block w-full"
                        onChange={e => setData('photo', e.target.files[0])}
                        required
                    />

                    <InputError className="mt-2" message={errors.photo} />
                </div>

                <div className="flex items-center gap-4">
                    <PrimaryButton disabled={data.processing}>Save</PrimaryButton>
                </div>
            </form>
        </section>
    );
}

export default NewMember