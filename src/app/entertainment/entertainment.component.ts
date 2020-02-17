import { Component, OnInit } from '@angular/core';
import { SlushThing } from '../models/slush-thing.model';

@Component({
  selector: 'app-entertainment',
  templateUrl: './entertainment.component.html',
  styleUrls: ['./entertainment.component.scss']
})
export class EntertainmentComponent implements OnInit {
  list: SlushThing[] = []
  emergency : SlushThing = {
    title:'Emergency',
    description: 'In case of emergency, call ... for ....',
    locationX: 'null',
    locationy: 'null',
    img:'null'
  }
  constructor() {
      this.list.push(this.emergency);
      this.list.push(this.emergency);
      this.list.push(this.emergency);
  }

  ngOnInit(): void {
    
  }

}
