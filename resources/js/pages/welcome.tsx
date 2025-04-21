import Hero from '@/components/tailwind/hero';
import { Head } from '@inertiajs/react';
import TabMenu from '@/components/tailwind/tab-menu';

export default function Welcome() {
    //const { auth } = usePage<SharedData>().props;

    return (
        <>
            <Head title="Stoke" />
            <Hero/>
            <TabMenu/>
        </>
    )
}
