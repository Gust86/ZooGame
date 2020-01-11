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
  }

}
