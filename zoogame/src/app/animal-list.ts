import { Animal } from './models/animal';

export const elephant: Animal = {
    name: 'elephant',
    sound: '',
    image: './assets/elephant.jpeg',
    stamina: 150,
    staminaDecay: 2000
}
export const tiger: Animal = {
    name: 'tiger',
    sound: '',
    image: './assets/tiger.jfif',
    stamina: 100,
    staminaDecay: 2000   
}
export const monkey: Animal = {
    name: 'monkey',
    sound: '',
    image: './assets/monkey.jfif',
    stamina: 60,
    staminaDecay: 2000
}
// Δηλώνουμε μια const variable τύπου Animal[] (δηλαδή μια λίστα με objects τύπου Animal)
// Δίνουμε τιμές στο κάθε object μέσα στη λίστα για τις ανάγκες του παιχνιδιού ίσα ίσα για να έχουμε κάτι να χρησιμοποιήσουμε/εμφανίσουμε
export const animals: Animal[] = [
    elephant, tiger, monkey
]



