import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-animal',
  templateUrl: './animal.component.html',
  styleUrls: ['./animal.component.css']
})
export class AnimalComponent implements OnInit {
  @Input() name: string;
  @Input() sound: string;
  @Input() image: string;
  @Input() stamina: number;
  @Input() staminaDecay: number;
  @Output() feint = new EventEmitter();


  constructor() { }

  ngOnInit() {
    this.staminaDrop();
  }

  onFeed() {
    this.stamina = this.stamina + 1;
  }

  staminaDrop(): void {
    let intervalId;
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
