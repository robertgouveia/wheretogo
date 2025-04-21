import { MapPinIcon } from '@heroicons/react/24/solid';
import { Link } from '@inertiajs/react';

export default function AppLogo() {
    return (
        <Link href="/" className="flex items-center gap-2">
            <div className="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-md">
                <MapPinIcon className="size-5 fill-current text-white dark:text-black" />
            </div>
            <div className="ml-1 grid flex-1 text-left text-sm">
                <span className="mb-0.5 truncate leading-none font-semibold">Where to Go</span>
            </div>
        </Link>
    );
}
