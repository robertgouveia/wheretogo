import {
    BuildingStorefrontIcon,
    CalendarIcon,
    CameraIcon,
    ChevronDownIcon,
    PuzzlePieceIcon
} from '@heroicons/react/16/solid';

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

export default function TabMenu({ filter, search, setSearch }: { filter?: string, search: string, setSearch: (search: string) => void }) {
    type Tab = {
        name: string;
        href: string;
        current: boolean;
        icon: React.ElementType;
    }

    const tabs: Tab[] = [
        { icon: BuildingStorefrontIcon, name: 'Food', href: '?filter=food', current: filter === "food" || filter === "" },
        { icon: PuzzlePieceIcon, name: 'Activity', href: '?filter=activity', current: filter === "activity" },
        { icon: CameraIcon, name: 'Sights', href: '?filter=sights', current: filter === "sights" },
        { icon: CalendarIcon, name: 'Events', href: '?filter=events', current: filter === "events" },
    ]

    return (
        <div className="relative mx-auto mt-8 max-w-7xl border-b border-gray-200 pb-5 sm:pb-0">
            <div className="mt-4">
                <div className="grid grid-cols-1 sm:hidden">
                    <button
                        defaultValue={tabs.find((tab) => tab.current)?.name}
                        aria-label="Select a tab"
                        className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-2 pr-8 pl-3 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                    >
                        {tabs.map((tab) => {
                            return (
                                <a
                                    key={tab.name}
                                    href={tab.href}
                                    className={classNames(
                                        tab.current ? 'border-indigo-600 text-indigo-600' : 'border-transparent text-gray-500',
                                        'group inline-flex items-center border-b-2 px-1 py-4 text-sm font-medium',
                                    )}
                                >
                                    {tab.name}
                                </a>
                            );
                        })}
                    </button>
                    <ChevronDownIcon
                        aria-hidden="true"
                        className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end fill-gray-500"
                    />
                </div>
                <div className="hidden sm:block">
                    <nav className="-mb-px flex space-x-8">
                        {tabs.map((tab) => {
                            const Icon = tab.icon;
                            return (
                                <>
                                    <a
                                        key={tab.name}
                                        href={tab.href}
                                        aria-current={tab.current ? 'page' : undefined}
                                        className={classNames(
                                            tab.current
                                                ? 'border-indigo-500 text-indigo-600'
                                                : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700',
                                            'flex border-b-2 px-1 pb-4 text-sm font-medium whitespace-nowrap',
                                        )}
                                    >
                                        {Icon && <Icon className="mr-2 h-5 w-5" aria-hidden="true" />}
                                        {tab.name}
                                    </a>
                                </>
                            );
                        })}
                        <div className="ms-auto flex flex-shrink-0 items-center space-x-4">
                            <input
                                value={search}
                                onInput={(e) => setSearch(e.currentTarget.value)}
                                type="search"
                                className="mb-2 px-3 py-1 text-sm/6 text-gray-600 ring-1 ring-gray-900/10"
                                placeholder="Search"
                                aria-label="Search"
                            />
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    );
}
