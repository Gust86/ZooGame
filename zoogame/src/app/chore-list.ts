import { Chore } from './models/chore';

export const chores: Chore[] = [
    {
        name: 'clean cages',
        image: './assets/zoocage.jpg',
        completionTime: 8000,
        complete: false
    },
    {
        name: 'clean toilets',
        image: './assets/toilet.jpg',
        completionTime: 5000,
        complete: false
    },
    {
        name: 'moan the grass',
        image: 'assets/grass.jfif',
        completionTime: 10000,
        complete: false
    }
];