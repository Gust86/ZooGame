import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-animal',
  templateUrl: './animal.component.html',
  styleUrls: ['./animal.component.css']
})
export class AnimalComponent implements OnInit {
  // Δηλώνουμε τα properties της class(component) Animal
  // Όλα τα properties της classes τα δηλώνουμε ως Input διότι έχουμε αποφασίσει
  // πως το AnimalComponent είναι CHILD component του Zookeeper οπότε θα παίρνει τιμές από τον parent(zookeeper)
  // με τον μηχανισμό που δημιουργήσαμε στο zookeeper.component.html
  @Input() name: string;
  @Input() sound: string;
  @Input() image: string;
  @Input() stamina: number;
  @Input() staminaDecay: number;
  // Δηλώνουμε το event feint και του δίνουμε αμέσως μια τιμή.
  // Η τιμή είναι ένα καινούριο object τύπου EventEmitter. Δημιουργείται το object καλώντας τον constructor
  // της EventEmitter class με το keyword "new"
  // Όλοι οι EventEmitters έχουμε μια μέθοδο που λέγεται emit και παίρνει optional parameter/argument μια έξτρα
  // πληροφορία αν θέλει να την μεταφέρει σαν μήνυμα στον parent (zookeeper) -- στην περίπτωσή του feint,
  // η έξτρα πληροφορία θα είναι το όνομα του ζώου που λιποθύμησε.
  @Output() feint = new EventEmitter();


  constructor() { }

  // Καλούμε το staminaDrop method στην onInit διότι θέλουμε να ξεκινήσει ο μηχανισμός μείωσης stamina του ζώου
  // με το που δημιουργηθεί για πρώτη φορά το κάθε animal component
  ngOnInit() {
    this.staminaDrop();
  }

  // Handler για το click που κάνει ο user(player) πάνω στην εικόνα του ζώου
  // προσθέτει στο στο stamina του ζώου 1 stamina.
  // Χρησιμοποιούμε το this στο this.stamina διότι η μέθοδος πρέπει να γνωρίζει σε ποια μεταβλητή αναφερόμαστε
  // και από τη στιγμή που το stamina είναι δηλωμένο ως class-property τότε το this. αναφέρεται στην ίδια την animal class.
  onFeed() {
    this.stamina = this.stamina + 1;
  }


  // Μεθοδος που θα ξεκινήσει να τρέχει στην onInit
  // Ρίχνει το stamina του ζώου κάθε staminaDecay seconds. Το StaminaDecay το δίνει ο parent zookeeper όπως και όλα τα 
  // άλλα properties όταν δημιουργεί το animal component sto zookeeper.component.html
  // Η μέθοδος δεν παίρνει arguments/parameters και δεν επιστρέφει τίποτα.
  // Όταν το stamina θα γίνει 0, τότε το feint event θα κάνει trigger.
  staminaDrop(): void {
    let intervalId;
    // setInterval είναι μέθοδος της javascript. ctrl+left click για να δεις περισσότερες πληροφορίες
    intervalId = setInterval(() => {
      if(this.stamina > 0) {
        this.stamina = this.stamina - 10;
        if(this.stamina == 0) {
          clearInterval(intervalId);
          this.feint.emit(this.name);
          console.log('animal feinted');
        }
      }
    }, this.staminaDecay) 
  }
}
