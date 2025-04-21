import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import List from '@/components/tailwind/list';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: '/dashboard',
    },
];

export default function Dashboard() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Dashboard" />
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
                <div className="grid auto-rows-min gap-4 md:grid-cols-3">
                    <div className="border-sidebar-border/70 dark:border-sidebar-border relative aspect-video overflow-hidden rounded-xl border flex flex-col justify-center items-center gap-4">
                        <h1 className="text-xl font-medium">Bookings</h1>
                        <h3 className="text-gray-600 text-4xl font-bold">0</h3>
                    </div>
                    <div className="border-sidebar-border/70 dark:border-sidebar-border relative aspect-video overflow-hidden rounded-xl border flex flex-col justify-center items-center gap-4">
                        <h1 className="text-xl font-medium">Savings</h1>
                        <h3 className="text-gray-600 text-4xl font-bold">£0</h3>
                    </div>
                    <div className="border-sidebar-border/70 dark:border-sidebar-border relative aspect-video overflow-hidden rounded-xl border flex flex-col justify-center items-center gap-4">
                        <h1 className="text-xl font-medium">Reviews</h1>
                        <h3 className="text-gray-600 text-4xl font-bold">0</h3>
                    </div>
                </div>
                <div className="border-sidebar-border/70 dark:border-sidebar-border relative h-156 overflow-y-auto rounded-xl border p-6">
                    <h1 className="text-xl font-bold mb-4">List of Bookings</h1>
                    <List/>
                </div>
            </div>
        </AppLayout>
    );
}
