import { Component, OnInit } from '@angular/core';
import { Animal } from '../models/animal';
import { Chore } from '../models/chore';
import { animals } from '../animal-list';
import { chores } from '../chore-list';

@Component({
  selector: 'app-zookeeper',
  templateUrl: './zookeeper.component.html',
  styleUrls: ['./zookeeper.component.css']
})
export class ZookeeperComponent implements OnInit {
  animalList: Animal[] = animals;
  choreList: Chore[] = chores;
  resourses: number;
  

  constructor() { }

  ngOnInit() {
  }

  onFeint(name: string) {
    this.animalList = this.animalList.filter(x => x.name !== name)
    console.log(this.animalList);
    console.log(`OH NO! ${name} feinted`);
  }

}
