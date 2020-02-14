import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';
import { EntertainmentComponent } from './entertainment/entertainment.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {path: 'home', component: HomeComponent}
    ]
  },
  {
    path: 'map/:mapCodeX/:mapCodeY',
    component: MapComponent,
    children: [
      
    ]
  },
  {
    path: 'presswhenyouarestress',
    component: EntertainmentComponent,
    children: [
      
    ]
  }   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
