import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Chore } from '../models/chore';


@Component({
  selector: 'app-chore',
  templateUrl: './chore.component.html',
  styleUrls: ['./chore.component.css']
})
export class ChoreComponent implements OnInit, Chore {
  @Input() name: string;
  @Input() image: string;
  @Input() completionTime: number;
  @Input() complete: false;
  @Output() choreComplete = new EventEmitter();
  @Output() choreStart = new EventEmitter();
  choreCountdownStarted: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  onChoreClicked() {
    this.choreStart.emit();
    
    if(!this.choreCountdownStarted) {
      let intervalId;
      intervalId = setInterval(() => {
        if(this.completionTime > 0) {
          this.completionTime = this.completionTime - 1000;
          if(this.completionTime <= 0) {
            clearInterval(intervalId);
            this.choreComplete.emit(this.name);
            console.log('start completing the chore');
          }
        }
      },1000)
      this.choreCountdownStarted = true;
    }
  }

}
