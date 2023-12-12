import PrimaryButton from '@/Components/PrimaryButton';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, useForm } from '@inertiajs/react';

export default function Index({ auth, member }) {
    const {data, post} = useForm({});

    const handleSubmit = () => {
        post(route('cards.store', {member_id: member.id}));
    }

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Membres</h2>}
        >
            <Head title="Membres" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-4">
                    <div className="flex items-start gap-8">
                        <img src={member.photo_link} alt={member.fullname} className="w-32   aspect-square rounded-full" />

                        <div>
                            <dl>
                                <div className="flex">
                                    <dt className="w-48 font-semibold text-gray-900 text-xl">Nom</dt>
                                    <dd className="text-xl">: {member.name}</dd>
                                </div>
                                <div className="flex">
                                    <dt className="w-48 font-semibold text-gray-900 text-xl">Post-nom</dt>
                                    <dd className="text-xl">: {member.last_name}</dd>
                                </div>
                                <div className="flex">
                                    <dt className="w-48 font-semibold text-gray-900 text-xl">Sexe</dt>
                                    <dd className="text-xl">: {member.gender}</dd>
                                </div>
                                <div className="flex">
                                    <dt className="w-48 font-semibold text-gray-900 text-xl">Date de naissance</dt>
                                    <dd className="text-xl">: {member.birth_date}</dd>
                                </div>
                                <div className="flex">
                                    <dt className="w-48 font-semibold text-gray-900 text-xl">Ville</dt>
                                    <dd className="text-xl">: {member.town}</dd>
                                </div>
                                <div className="flex">
                                    <dt className="w-48 font-semibold text-gray-900 text-xl">Date d'adhésion</dt>
                                    <dd className="text-xl">: {member.created_at}</dd>
                                </div>
                            </dl>
                            
                            <form onSubmit={handleSubmit} className="mt-6">
                                <PrimaryButton >Générer une carte</PrimaryButton>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
