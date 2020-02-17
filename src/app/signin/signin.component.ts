import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { async } from '@angular/core/testing';
import { User } from 'firebase';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  
  offlineMode= false;
  constructor(public auth: AuthService, private router: Router){}
  ngOnInit(): void {
    if(this.auth.user$!=null){
      this.router.navigate(['/home']);
    }
  }
  onChange(){
    this.offlineMode= !this.offlineMode;
    this.offlineMode?console.log("You agree to store your data into cache storage"):console.log("You disagree to store your data into cache storage");
  }
  signin(){
    this.offlineMode?this.auth.googleSigninOffline():this.auth.googleSigninOnline();
  }
}
