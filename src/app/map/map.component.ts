import { Component, OnInit } from '@angular/core';
import { Template } from '@angular/compiler/src/render3/r3_ast';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  currentLocationX:Number=10;
  currentLocationY:Number=10;
  constructor(private route : ActivatedRoute) {
    
  }
  
  ngOnInit(): void {
    this.route.params.subscribe(params=>{
      this.currentLocationX = +params['mapCodeX'];
      this.currentLocationY = +params['mapCodeY'];
    });
    console.log(this.currentLocationX,this.currentLocationY);
  }

}
