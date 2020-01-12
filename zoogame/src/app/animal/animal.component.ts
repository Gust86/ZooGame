import { Component, OnInit, Input } from '@angular/core';

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


  constructor() { }

  ngOnInit() {
    this.staminaDrop();
  }

  onFeed() {
    this.stamina = this.stamina + 1;
  }

  staminaDrop(): void {
    setInterval(() => {
      this.stamina = this.stamina - 10;
    }, this.staminaDecay ) 
  }

}
