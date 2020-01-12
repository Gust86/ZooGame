import { Animal } from './models/animal';

// Δηλώνουμε μια const variable τύπου Animal[] (δηλαδή μια λίστα με objects τύπου Animal)
// Δίνουμε τιμές στο κάθε object μέσα στη λίστα για τις ανάγκες του παιχνιδιού ίσα ίσα για να έχουμε κάτι να χρησιμοποιήσουμε/εμφανίσουμε
export const animals: Animal[] = [
    {
        name: 'tiger',
        sound: '',
        image: './assets/tiger.jfif',
        stamina: 100,
        staminaDecay: 2000   
    },
    {
        name: 'monkey',
        sound: '',
        image: './assets/monkey.jfif',
        stamina: 60,
        staminaDecay: 2000
    },
    {
        name: 'elephant',
        sound: '',
        image: './assets/elephant.jpeg',
        stamina: 150,
        staminaDecay: 2000
    }
]