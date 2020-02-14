import { Component, OnInit, Input } from '@angular/core';
import {MapInfoService} from 'src/app/services/map-info.service'
import {MapInfo} from 'src/app/models/map-info.model'
import {UserInfo} from 'src/app/models/user-info.model'
import {Router} from '@angular/router'
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  locationCode:Number;
  user: UserInfo;
  constructor(private mapService: MapInfoService,private userService: UserService, private router: Router) { }

  locationCodeChange(value:Number){
    this.locationCode = value;
  }
  locateMe(){
    let data=this.mapService.getMapInfo(this.locationCode.toString());
    this.router.navigate(['/map',15,30]);
  }
  

  ngOnInit(): void {
  }

}
