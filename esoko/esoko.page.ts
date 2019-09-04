import { Component, OnInit, ViewChild } from '@angular/core';
import {Router} from '@angular/router';
//import { NavController } from '@ionic/angular';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
//storage module
import { Storage } from '@ionic/storage';
import { SMS } from '@ionic-native/sms/ngx';

import {Http} from '@angular/http'

import { firestore } from 'firebase/app';
import { UserService } from '../services/user.service';


import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';



@Component({
  selector: 'app-esoko',
  templateUrl: './esoko.page.html',
  styleUrls: ['./esoko.page.scss'],
})
export class EsokoPage implements OnInit {
  captureDataUrl: string;
  

  
  
  imageURL:string
  desc: string
  //child of the button file
  @ViewChild('fileButton') fileButton
  // define the “currentImage” variable and inject the Camera into this class via the constructor:
  currentImage: any;

  constructor(private sms: SMS ,private storage: Storage, private camera: Camera, 
    private router:Router,public http:Http,public afstore: AngularFirestore,public user: UserService) {
      
     }

 
  takePicture() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }

    this.camera.getPicture(options).then((imageData) => {
      this.currentImage = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
     // Handle error
     console.log("Camera issue:" + err);
    });
  }

  go(){
    this.router.navigateByUrl('/home')
  }

  fileChanged(event){
    const files= event.target.files
    
    const data = new FormData()
    data.append('file', files[0])
    data.append('UPLOADCARE_STORE','1')
    data.append('UPLOADCARE_PUB_KEY','7ff142cc450044903a91')

     this.http.post('https://upload.uploadcare.com/base/',data)
     .subscribe(event =>{
        console.log(event)
        this.imageURL =event.json().file
     })
  }
  
  
 
  ngOnInit() {
  }
createPost(){
const image = this.imageURL
const desc = this.desc
this.afstore.doc(`users/cEBynmz9ClXj66doTUaX`).update({
  posts:firestore.FieldValue.arrayUnion({
    image,
    desc
  })
})


}
//gives you access to the native functions of a button
uploadFile(){
  this.fileButton.nativeElement.click()
}
}
