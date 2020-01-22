import { Component, OnInit } from '@angular/core';
import { Animal } from '../models/animal';
import { Chore } from '../models/chore';
// Κάνουμε import τις 2 λίστες με τα data που θα χρησιμοποιήσουμε για το game. Κανονικά αυτά μια εφαρμογή θα τα τραβούσε 
// από κάποιο server, όμως για δική μας ευκολία, τα δηλώσαμε σε 2 αρχεία στο front-end.
// Η μεταβλητή μέσα στα {} --> import { animals } ...... κρατάει το const variable που έχει το array με τα Animal objects
// και αυτήν την δίνουμε σαν τιμή στο animalList property, ώστε να μπορούμε να την χρησιμοποιούμε τοπικά μέσα στo component.
import { animals } from '../animal-list';
import { chores } from '../chore-list';
import { Zookeeper } from '../models/zookeeper';

// Annotation τμήμα της class Zookeeper component. Εδώ απλά δηλώνουμε κάποιες έξτρα πληροφορίες
// selector: το όνομα που θα χρησιμοποιούμε αν θέλουμε να δημιουργήσουμε ένα zookeeper component στο html
// templateUrl: το path που βρίσκεται το template του component
// styleUrls: το path που βρίσκονται τα styles του component
@Component({
  selector: 'app-zookeeper',
  templateUrl: './zookeeper.component.html',
  styleUrls: ['./zookeeper.component.css']
})
export class ZookeeperComponent implements OnInit, Zookeeper {
  // Δηλώνουμε τα properties της class(component) Zookeeper 
  animalList: Animal[] = animals;
  choreList: Chore[] = chores;
  resources: number;
 
  
  // O constructor είναι η μέθοδος που δημιουργείται σε κάθε component
  // ώστε να μπορούμε να δημιουργήσουμε νέα αντικείμενα τύπου ZookeeperComponent "new instances of this object"
  // Τώρα δεν τον χρησιμοποιούμε.
  constructor() { }

  // Lifecycle method onInit. Ο,τιδήποτε βάλουμε μέσα στη μέθοδο, θα τρέξει όταν δημιουργηθεί το component Zookeeper
  // για πρώτη φορά.
  ngOnInit() {
  }


  // Handler method. Αυτή η μέθοδος θα τρέξει όταν συμβεί το event feint (γίνει trigger)
  // Δέχεται 1 παράμετρο (argument/parameter) το όνομα του ζώου που λιποθύμησε
  // Αυτήν την παράμετρο θα την χρησιμοποιήσουμε για να φιλτράρουμε την λίστα animalList (property) της class Zookeeper
  // Η μέθοδος filter επιστρέφει μια νέα λίστα με τα ζώα των οποίων το όνομα δεν είναι αυτό που δώθηκε σαν παράμετρος στον handler
  // Τα console.logs αργότερα θα φύγουν. Τώρα τα βάλαμε μόνο για debbugging λόγους
  onFeint(name: string) {
    this.animalList = this.animalList.filter(x => x.name !== name)
    console.log(this.animalList);
    console.log(`OH NO! ${name} feinted`);
  }
  onChoreComplete(name: string) {
    this.choreList = this.choreList.filter(x => x.name !== name);
    console.log(this.choreList);
    console.log(`complete ${name} chore`);
  }

}
