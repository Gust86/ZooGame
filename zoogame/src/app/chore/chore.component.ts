import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-chore',
  templateUrl: './chore.component.html',
  styleUrls: ['./chore.component.css']
})
export class ChoreComponent implements OnInit {
  @Input() name: string;
  @Input() image: string;
  @Input() completionTime: number;
  @Input() complete: false;
  @Output() choreComplete = new EventEmitter();
  @Output() choreStart = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onChoreClicked() {
    this.choreStart.emit();
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
  }

}
