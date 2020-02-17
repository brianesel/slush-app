import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { MapInfo } from 'src/app/models/map-info.model';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class MapInfoService {
  map: MapInfo;
  constructor(private firestore: AngularFirestore, private router: Router) {
    
  }

  async getMapInfo(areaCode: string){
    this.firestore.collection('mapInfo').doc(areaCode).valueChanges().subscribe(data=>{
      this.updateMapInfo(data);
    })
  }
  updateMapInfo(data){
    let map: MapInfo = {
      name: data.name,
      coor: {
        _lat: data.coor._lat,
        _long: data.coor._long,
      }
    }
    this.router.navigate(['/map',map.coor._lat,map.coor._long,1]);
  }

  createMap(mapInfo: MapInfo){
    return this.firestore.collection('mapInfo').add(mapInfo);
  }
  deleteMap(mapInfoId: string){
    this.firestore.doc('mapInfo/' + mapInfoId).delete();
  }
}
