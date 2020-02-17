import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';
import { EntertainmentComponent } from './entertainment/entertainment.component';
import { SigninComponent } from './signin/signin.component';
import { AuthGuardService} from './services/auth-guard.service';
import { UserLayoutComponent } from './user-layout/user-layout.component';
import { EmergencyComponent } from './emergency/emergency.component';


const routes: Routes = [
  {
    path: '',
    component: UserLayoutComponent,
    canActivate: [AuthGuardService],
    children: [
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'map/:mapCodeX/:mapCodeY/:me',
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
      },
      {
        path: 'emergency',
        component: EmergencyComponent,
        children: [
          
        ]
      }
    ]
  },
  {
    path: 'signin',
    component: SigninComponent,
    children: [
    ]
  }   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
