import Hero from '@/components/tailwind/hero';
import { Head } from '@inertiajs/react';
import TabMenu from '@/components/tailwind/tab-menu';
import Grid from '@/components/tailwind/grid';
import { useEffect, useState } from 'react';

export default function Welcome() {
    const [filter, setFilter] = useState<string>("");
    const [search, setSearch] = useState<string>("");

    useEffect(() => {
        const searchParams = new URLSearchParams(window.location.search);
        const filterParam = searchParams.get('filter')?.toLowerCase() || "";
        setFilter(filterParam);
    }, []);

    return (
        <>
            <Head title="Stoke" />
            <Hero/>
            <TabMenu filter={filter} search={search} setSearch={setSearch}/>
            <Grid search={search} filter={filter}/>
        </>
    )
}
