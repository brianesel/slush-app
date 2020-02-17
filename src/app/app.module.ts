import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavigatorComponent } from './navigator/navigator.component';
import { MapComponent } from './map/map.component';
import { SigninComponent } from './signin/signin.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFirestore, AngularFirestoreModule } from '@angular/fire/firestore';
import { EntertainmentComponent } from './entertainment/entertainment.component';
import { AngularFireAuth, AngularFireAuthModule } from '@angular/fire/auth';
import { AlertModule } from 'ngx-bootstrap';
import { AuthGuardService} from './services/auth-guard.service';
import { HashLocationStrategy, LocationStrategy  } from '@angular/common';
import { UserLayoutComponent } from './user-layout/user-layout.component';
import { EmergencyComponent } from './emergency/emergency.component';
import { FilterPipe } from './emergency/personFilter.pipe';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavigatorComponent,
    MapComponent,
    SigninComponent,
    EntertainmentComponent,
    UserLayoutComponent,
    EmergencyComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule.enablePersistence(),
    AngularFireDatabaseModule,
    AlertModule.forRoot(),
    FormsModule
  ],
  providers: [AngularFirestore,AngularFireAuth,AuthGuardService,
    {provide : LocationStrategy , useClass: HashLocationStrategy}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
