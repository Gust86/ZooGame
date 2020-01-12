// Interface για τον τύπο Animal.
// Δηλώνουμε τα properties και τους τύπους τους
// Τα interface τα χρησιμοποιούμε ώστε να μπορούμε να δηλώνουμε μεταβλητές με custom Types (πέραν δηλαδή από τα basic data types eg. string, number, boolean etc.)
// Παράδειγμα στο zookeeper component δηλώνουμε property animalList: Animal[] = animals;
// Αυτό διαβάζεται ως εξής: Το Zookeeper component έχει για property μια μεταβλητή τύπου Animal array... δηλαδή είναι μια λίστα με objects τύπου Animal
// δηλαδή που έχουν τα χαρακτηριστικά που είναι δηλωμένα στο παρρόν interface
export interface Animal {
    name: string;
    sound: string;
    image: string;
    stamina: number;
    staminaDecay: number;
}
