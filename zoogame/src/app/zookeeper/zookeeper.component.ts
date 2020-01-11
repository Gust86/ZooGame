import { Component, OnInit } from '@angular/core';
import { Animal } from '../models/animal';
import { Chore } from '../models/chore';

@Component({
  selector: 'app-zookeeper',
  templateUrl: './zookeeper.component.html',
  styleUrls: ['./zookeeper.component.css']
})
export class ZookeeperComponent implements OnInit {
  animalList: Animal[];
  choreList: Chore[];

  constructor() { }

  ngOnInit() {
  }

}
