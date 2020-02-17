import { Component, OnInit } from '@angular/core';
import {persons} from './persons'

interface person {
  name: string,
  position: string,
  contact: string,
  ava: string
}

@Component({
  selector: 'app-emergency',
  templateUrl: './emergency.component.html',
  styleUrls: ['./emergency.component.scss']
})
export class EmergencyComponent implements OnInit {
  persons: person[] = persons;
  searchText: string;

  constructor() { }

  ngOnInit(): void {
  }

}
