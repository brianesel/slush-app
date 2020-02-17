import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { auth } from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';

import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { UserInfo } from '../models/user-info.model';

@Injectable({ providedIn: 'root' })
export class AuthService {

    user$: Observable<UserInfo>;

    constructor(
        private afAuth: AngularFireAuth,
        private afs: AngularFirestore,
        private router: Router
    ) {
      this.user$ = this.afAuth.authState.pipe(
        switchMap(user => {
            // Logged in
          if (user) {
            return this.afs.doc<UserInfo>(`users/${user.uid}`).valueChanges();
          } else {
            // Logged out
            return of(null);
          }
        })
      )
     }
    
    async googleSigninOffline() {
      this.afAuth.auth.setPersistence(auth.Auth.Persistence.LOCAL).then(async ()=>{
      this.googleSignin();
      }).catch((error) => {
        // Handle errors here.
        let errorCode = error.code;
        let errorMessage = error.message;
        console.error(errorCode, errorMessage);
        this.afAuth.auth.setPersistence(auth.Auth.Persistence.NONE);
      })
        // await console.log("you can use your app offline after succesfully login");
    }
    
    async googleSigninOnline() {
      this.googleSignin();
    }

    async googleSignin() {
      const provider = new auth.GoogleAuthProvider();
      const credential = await this.afAuth.auth.signInWithPopup(provider);
      // console.log(credential);
      // return
      this.updateUserData(credential.user);
      this.router.navigate(['/home']);
    }
    
    private updateUserData(user) {
      // Sets user data to firestore on login
      const userRef: AngularFirestoreDocument<UserInfo> = this.afs.doc(`users/${user.uid}`);
  
      const data = { 
        uid: user.uid, 
        email: user.email, 
        displayName: user.displayName, 
        photoURL: user.photoURL,
        phoneNumber: user.phoneNumber,
        // workingPlace: user.workingPlace,
        // workingPosition: user.workingPosition,
      }
      return userRef.set(data, { merge: true })
  
    }
  
    async signOut() {
      await this.afAuth.auth.signOut();
      this.router.navigate(['/signin']);
    }
  }