import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavigatorComponent } from './navigator/navigator.component';
import { MapComponent } from './map/map.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { AdminMapComponent } from './admin-map/admin-map.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFirestore, AngularFirestoreModule } from '@angular/fire/firestore';
import { EntertainmentComponent } from './entertainment/entertainment.component';
import { InfoCardComponent } from './info-card/info-card.component';
import { AngularFireAuth } from '@angular/fire/auth';
import { AlertModule } from 'ngx-bootstrap';
import { AuthGuardService} from './services/auth-guard.service';
import { HashLocationStrategy, LocationStrategy  } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavigatorComponent,
    MapComponent,
    SigninComponent,
    SignupComponent,
    AdminMapComponent,
    EntertainmentComponent,
    InfoCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule.enablePersistence(),
    AngularFireDatabaseModule,
    AlertModule.forRoot()
  ],
  providers: [AngularFirestore,AngularFireAuth,AuthGuardService,
    {provide : LocationStrategy , useClass: HashLocationStrategy}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
