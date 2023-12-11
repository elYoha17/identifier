import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function Index({ auth, members }) {
    const items = members.map(member => <Item member={member} key={member.id} />)
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Liste des membres</h2>}
        >
            <Head title="Liste des membres" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-4">
                    <div className="grid grid-cols-3 gap-8">
                        {items}
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}

function Item({member}) {
    return (
        <div className="flex items-center gap-4 p-4 bg-white hover:bg-indigo-200 overflow-hidden shadow-lg rounded-lg transition duration-150">
            <img src={member.photo_link} alt={`Photo de ${member.fullname}`} className="w-12 h-12 rounded-full" />
            <div>
                <div className="text-lg font-semibold text-gray-900">{member.fullname}</div>
                <div className="text-xs text-gray-700">{member.town}</div>
            </div>
        </div>
    )
}
