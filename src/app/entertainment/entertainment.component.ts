import { Component, OnInit } from '@angular/core';
import { SlushThing } from '../models/slush-thing.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-entertainment',
  templateUrl: './entertainment.component.html',
  styleUrls: ['./entertainment.component.scss']
})
export class EntertainmentComponent implements OnInit {
  list: SlushThing[] = []
  colors: String[] = []
  emergency : SlushThing = {
    title:'Emergency',
    description: 'In case of emergency, call ... for ....',
    locationX: 23,
    locationy: 23,
    color: "",
    img:'null'
  }
  food : SlushThing = {
    title:'Food',
    description: 'Food culture inside Slush nation',
    locationX: 60,
    locationy: 23,
    color: "",
    img:'https://lh3.googleusercontent.com/proxy/nlo9C-lJAxoxFbGToOaA7uAUNKIrvM4q_GmNOI2XI0oIH6amme9lfjd9qfFIxzzdjSv2WTMjZy04q72rAZXBcCaFDgwvnZN_kpEoSV8zhlF3I68Q9Dvjzy51xASMVzgqOYQbhTWcnjPL'
  }
  foutainOfSlush : SlushThing = {
    title:'Slush secret garden',
    description: 'It is not that secret but it is a paradise',
    locationX: 31,
    locationy: 22,
    color: "",
    img:'https://www.goodnewsfinland.com/wp-content/uploads/2019/11/Main.jpg'
  }
  slushArcade : SlushThing = {
    title:'ARCADE GAME!',
    description: 'COMPETE, SMASH, KNOCK OUT',
    locationX: 75,
    locationy: 54,
    color: "",
    img:'null'
  }
  slushShop : SlushThing = {
    title:'Buy for the hype',
    description: 'Long term investment for a cute sock',
    locationX: 23,
    locationy: 25,
    color: "",
    img:'https://assets.slush.org/2017/11/07100213/News_header_store-1.jpg'
  }
  slushSlushAway : SlushThing = {
    title:'Slush things away',
    description: 'Slush like a Slush-er, create your own galaxy with the toilet',
    locationX: 22,
    locationy: 24,
    color: "",
    img:'https://image.shutterstock.com/image-vector/vector-handdrawn-cartoon-illustration-man-260nw-1070013416.jpg'
  }
  constructor( private router : Router) {
    this.list.push(this.emergency,this.food,this.foutainOfSlush,this.slushArcade,this.slushShop,this.slushSlushAway);
    this.colors.push("#007bff","#17a2b8","#99268E","#dc3545","#ffc107","#28a745");
  }

  ngOnInit(): void {
    this.list.forEach(item => {
      item.color = this.colors[Math.floor(Math.random() * this.colors.length)]
    });
  }
  sendMeThere(locX : number,locY : number){
    this.router.navigate(["/map",locX,locY,2]);
  }
  sendMeEmergency(){
    this.router.navigate(["/emergency"]);
  }

}
