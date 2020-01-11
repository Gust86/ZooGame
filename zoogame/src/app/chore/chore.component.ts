import { Component, OnInit, Input } from '@angular/core';

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

  constructor() { }

  ngOnInit() {
  }

}
