import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import {UserInfo} from 'src/app/models/user-info.model'

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private firestore: AngularFirestore) {
    
  }
  getUserInfo(userCode: string){
    return this.firestore.collection('userInfo').doc(userCode).valueChanges().subscribe(data=>{
      return data;
    });   
  }
  // createUser(user: UserInfo){
  //   return this.firestore.collection('userInfo').add(user);
  // }
  // deleteUser(mapInfoId: string){
  //   this.firestore.doc('mapInfo/' + mapInfoId).delete();
  // }
}
