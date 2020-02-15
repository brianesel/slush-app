import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';
import { EntertainmentComponent } from './entertainment/entertainment.component';
import { SigninComponent } from './signin/signin.component';
import { AuthGuardService} from './services/auth-guard.service';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    canActivate: [AuthGuardService],
    children: [
      {path: 'home', component: HomeComponent}
    ]
  },
  {
    path: 'signin',
    component: SigninComponent,
    children: [
    ]
  },
  {
    path: 'map/:mapCodeX/:mapCodeY',
    component: MapComponent,
    canActivate: [AuthGuardService],
    children: [
      
    ]
  },
  {
    path: 'presswhenyouarestress',
    component: EntertainmentComponent,
    canActivate: [AuthGuardService],
    children: [
      
    ]
  }   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
