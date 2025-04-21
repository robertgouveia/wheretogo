import { ChevronDownIcon } from '@heroicons/react/16/solid'
import { useEffect, useState } from 'react';

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

export default function TabMenu() {
    // Use the correct type for usePage
    const [filter, setFilter] = useState<string>("");

    useEffect(() => {
        // Get the current URL search params
        const searchParams = new URLSearchParams(window.location.search);
        // Get the filter parameter or default to empty string
        const filterParam = searchParams.get('filter')?.toLowerCase() || "";
        setFilter(filterParam);
    }, []); // Re-run when URL changes

    const tabs = [
        { name: 'Food', href: '?filter=food', current: filter === "food" || filter === "" },
        { name: 'Activity', href: '?filter=activity', current: filter === "activity" },
        { name: 'Sights', href: '?filter=sights', current: filter === "sights" },
        { name: 'Events', href: '?filter=events', current: filter === "events" },
    ]

    return (
        <div className="relative border-b border-gray-200 pb-5 sm:pb-0 max-w-7xl mx-auto mt-8">
            <div className="mt-4">
                <div className="grid grid-cols-1 sm:hidden">
                    <select
                        defaultValue={tabs.find((tab) => tab.current)?.name}
                        aria-label="Select a tab"
                        className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-2 pr-8 pl-3 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                    >
                        {tabs.map((tab) => (
                            <option key={tab.name}>{tab.name}</option>
                        ))}
                    </select>
                    <ChevronDownIcon
                        aria-hidden="true"
                        className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end fill-gray-500"
                    />
                </div>
                <div className="hidden sm:block">
                    <nav className="-mb-px flex space-x-8">
                        {tabs.map((tab) => (
                            <a
                            key={tab.name}
                            href={tab.href}
                            aria-current={tab.current ? 'page' : undefined}
                            className={classNames(
                            tab.current
                            ? 'border-indigo-500 text-indigo-600'
                            : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700',
                            'border-b-2 px-1 pb-4 text-sm font-medium whitespace-nowrap',
                            )}
                            >
                        {tab.name}
                            </a>
                            ))}
                        <div className="ms-auto flex-shrink-0 flex items-center space-x-4">
                            <input type='search' className='px-3 py-1 mb-2 text-sm/6 text-gray-600 ring-1 ring-gray-900/10' placeholder='Search' aria-label='Search' />
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    )
}
