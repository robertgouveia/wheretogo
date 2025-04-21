import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export function getOrdinal(day: number) {
    if (day > 3 && day < 21) return 'th';
    switch (day % 10) {
        case 1: return 'st';
        case 2: return 'nd';
        case 3: return 'rd';
        default: return 'th';
    }
}

export function padZero(n: number) {
    return n < 10 ? '0' + n : n;
}

export function formatHour(date: Date) {
    const hour = date.getHours() % 12 || 12; // Convert 0 to 12 for 12-hour clock
    return padZero(hour);
}
