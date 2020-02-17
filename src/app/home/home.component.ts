import { Component, OnInit, Input } from '@angular/core';
import {MapInfoService} from 'src/app/services/map-info.service'
import {MapInfo} from 'src/app/models/map-info.model'
import {UserInfo} from 'src/app/models/user-info.model'
import {Router} from '@angular/router'
import { UserService } from '../services/user.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  locationCode:Number;
  user: UserInfo;
  constructor(private mapService: MapInfoService,private userService: UserService, private router: Router, public auth: AuthService) { }

  locationCodeChange(value:Number){
    this.locationCode = value;
  }
  async locateMe(){
    await this.mapService.getMapInfo(this.locationCode.toString(),1);
  }
  async locateTarget(){
    await this.mapService.getMapInfo(this.locationCode.toString(),2);
  }

  ngOnInit(): void {
  }

}
