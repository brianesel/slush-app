import { Component, OnInit } from '@angular/core';
import { Template } from '@angular/compiler/src/render3/r3_ast';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  me = {
    currentLocationX:0,
    currentLocationY:0
  }
  you = {
    currentLocationX:0,
    currentLocationY:0
  }

  user : Number = 1;
  constructor(private route : ActivatedRoute) {
    
  }
  
  ngOnInit(): void {
    this.route.params.subscribe(params=>{
      
      if(params["me"]==1){
        this.me.currentLocationX = +params['mapCodeX'];
        this.me.currentLocationY = +params['mapCodeY'];
        localStorage.setItem('locationMeX', this.me.currentLocationX.toString());
        localStorage.setItem('locationMeY', this.me.currentLocationX.toString());
        this.you.currentLocationX = +localStorage.getItem('locationYouX');
        this.you.currentLocationY = +localStorage.getItem('locationYouY');
      } else {
        this.you.currentLocationX = +params['mapCodeX'];
        this.you.currentLocationY = +params['mapCodeY'];
        localStorage.setItem('locationYouX', this.you.currentLocationX.toString());
        localStorage.setItem('locationYouY', this.you.currentLocationX.toString());
        this.me.currentLocationX = +localStorage.getItem('locationMeX');
        this.me.currentLocationY = +localStorage.getItem('locationMeY');
      }
    });
    // console.log(this.currentLocationX,this.currentLocationY);
  }

}
