import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { EllipsisVerticalIcon } from '@heroicons/react/20/solid'
import { formatHour, getOrdinal, padZero } from '@/lib/utils';

const statuses: { [key: string]: string } = {
    Upcoming: 'text-green-600 bg-green-50 ring-green-500/10',
    Archived: 'text-gray-800 bg-gray-50 ring-gray-600/20',
}

const bookings = [
    {
        id: 1,
        name: "Roberto's Pizza",
        href: '#',
        dueDateTime: '2025-04-25T09:00Z',
    },
    {
        id: 2,
        name: 'Comic Con 2025',
        href: '#',
        dueDateTime: '2025-02-05T09:00Z',
    },
]

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

export default function List() {
    return (
        <ul role="list" className="divide-y divide-gray-100">
            {bookings.map((booking) => {
                const date = new Date(booking.dueDateTime);

                return (
                    <li key={booking.id} className="flex items-center justify-between gap-x-6 py-5">
                        <div className="min-w-0">
                            <div className="flex items-start gap-x-3">
                                <p className="text-sm/6 font-semibold text-gray-900">{booking.name}</p>
                                <p
                                    className={classNames(
                                        statuses[booking.dueDateTime < new Date().toISOString() ? 'Archived' : 'Upcoming'],
                                        'mt-0.5 rounded-md px-1.5 py-0.5 text-xs font-medium whitespace-nowrap ring-1 ring-inset',
                                    )}
                                >
                                    {booking.dueDateTime < new Date().toISOString() ? 'Archived' : 'Upcoming'}
                                </p>
                            </div>
                            <div className="mt-1 flex items-center gap-x-2 text-xs/5 text-gray-500">
                                <p className="whitespace-nowrap">
                                    Due on <time dateTime={booking.dueDateTime}>
                                    {date.getDate()}
                                    {getOrdinal(date.getDate())} {date.toLocaleString('default', { month: 'long' })} {date.getFullYear()} {' '}
                                    {formatHour(date)}:{padZero(date.getMinutes())} {date.getHours() >= 12 ? 'PM' : 'AM'}
                                </time>
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-none items-center gap-x-4">
                            <a
                                href={booking.href}
                                className="hidden rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-xs ring-1 ring-gray-300 ring-inset hover:bg-gray-50 sm:block"
                            >
                                Call
                            </a>
                            <Menu as="div" className="relative flex-none">
                                <MenuButton className="-m-2.5 block p-2.5 text-gray-500 hover:text-gray-900">
                                    <span className="sr-only">Open options</span>
                                    <EllipsisVerticalIcon aria-hidden="true" className="size-5" />
                                </MenuButton>
                                <MenuItems
                                    transition
                                    className="absolute right-0 z-10 mt-2 w-32 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
                                >
                                    <MenuItem>
                                        <a
                                            href="#"
                                            className="block px-3 py-1 text-sm/6 text-gray-900 data-focus:bg-gray-50 data-focus:outline-hidden"
                                        >
                                            Change
                                        </a>
                                    </MenuItem>
                                    <MenuItem>
                                        <a
                                            href="#"
                                            className="block px-3 py-1 text-sm/6 text-gray-900 data-focus:bg-gray-50 data-focus:outline-hidden"
                                        >
                                            Cancel
                                        </a>
                                    </MenuItem>
                                </MenuItems>
                            </Menu>
                        </div>
                    </li>
                )
            })}
        </ul>
    )
}
