import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { MapInfo } from 'src/app/models/map-info.model';

@Injectable({
  providedIn: 'root'
})
export class MapInfoService {
  
  dataX: MapInfo[];
  constructor(private firestore: AngularFirestore) {
    
  }
  getMapInfo(areaCode: string){
    return this.firestore.collection('mapInfo').doc(areaCode).valueChanges().subscribe(data=>{
      console.log(data);
    });   
  }
  createMap(mapInfo: MapInfo){
    return this.firestore.collection('mapInfo').add(mapInfo);
  }
  deleteMap(mapInfoId: string){
    this.firestore.doc('mapInfo/' + mapInfoId).delete();
  }
}
