import { formatHour, padZero } from '@/lib/utils';
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { EllipsisHorizontalIcon } from '@heroicons/react/20/solid'
import { places } from '@/lib/test-db';

const statuses: Record<string, string> = {
    Open: 'text-green-700 bg-green-50 ring-green-600/20',
    Closed: 'text-gray-600 bg-gray-50 ring-gray-500/10',
}

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

export default function Grid({filter, search}: { filter: string, search?: string}) {
    return (
        <ul role="list" className="grid grid-cols-1 gap-x-6 gap-y-8 lg:grid-cols-3 xl:gap-x-8 pb-5 sm:pb-0 max-w-7xl mx-auto my-8">
            {places.map((place) => {
                if (filter && filter !== '' && place.category !== filter || place.tags.forEach(tag => tag.toLowerCase().includes(filter.toLowerCase()))) return null;
                console.log(place.category, filter);
                if (search && !place.name.toLowerCase().includes(search.toLowerCase())) return;

                const from = new Date(place.times.from);
                const to = new Date(place.times.to);
                const status = place.times.to < new Date().toISOString() && place.times.from > new Date().toISOString() ? 'Closed' : 'Open';

                return <li key={place.id} className="overflow-hidden rounded-xl border border-gray-200">
                    <div className="flex items-center gap-x-4 border-b border-gray-900/5 bg-gray-50 p-6">
                        <img
                            alt={place.name}
                            src={place.imageUrl}
                            className="size-12 flex-none rounded-lg bg-white object-cover ring-1 ring-gray-900/10"
                        />
                        <div className="text-sm/6 font-medium text-gray-900">{place.name}</div>
                        <Menu as="div" className="relative ml-auto">
                            <MenuButton className="-m-2.5 block p-2.5 text-gray-400 hover:text-gray-500">
                                <span className="sr-only">Open options</span>
                                <EllipsisHorizontalIcon aria-hidden="true" className="size-5 cursor-pointer" />
                            </MenuButton>
                            <MenuItems
                                transition
                                className="absolute right-0 z-10 mt-0.5 w-32 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
                            >
                                <MenuItem>
                                    <a
                                        target="_blank"
                                        href={place.website}
                                        className="block px-3 py-1 text-sm/6 text-gray-900 data-focus:bg-gray-50 data-focus:outline-hidden"
                                    >
                                        Website<span className="sr-only">, {place.name}</span>
                                    </a>
                                </MenuItem>
                                <MenuItem>
                                    <a
                                        target="_blank"
                                        href={place.location}
                                        className="block px-3 py-1 text-sm/6 text-gray-900 data-focus:bg-gray-50 data-focus:outline-hidden"
                                    >
                                        Location<span className="sr-only">, {place.name}</span>
                                    </a>
                                </MenuItem>
                            </MenuItems>
                        </Menu>
                    </div>
                    <dl className="-my-3 divide-y divide-gray-100 px-6 py-4 text-sm/6">
                        <div className="flex justify-between gap-x-4 py-3">
                            <dt className="text-gray-500">Times</dt>
                            <dd className="text-gray-700">
                                <time dateTime={place.times.from}>
                                    {formatHour(from)}:{padZero(from.getMinutes())} {from.getHours() >= 12 ? 'PM' : 'AM'}
                                </time>
                                {' '}-{' '}
                                <time dateTime={place.times.to}>
                                    {formatHour(to)}:{padZero(to.getMinutes())} {to.getHours() >= 12 ? 'PM' : 'AM'}
                                </time>
                            </dd>
                        </div>
                        <div className="flex justify-between gap-x-4 py-3">
                            <dt className="text-gray-500">Availability</dt>
                            <dd className="flex items-start gap-x-2">
                                <div
                                    className={classNames(
                                        statuses[status],
                                        'rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset',
                                    )}
                                >
                                    {status}
                                </div>
                            </dd>
                        </div>
                    </dl>
                </li>
            })}
        </ul>
    )
}
