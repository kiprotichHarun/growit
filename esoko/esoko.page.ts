import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
//import { NavController } from '@ionic/angular';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
//storage module
import { Storage } from '@ionic/storage';
import { SMS } from '@ionic-native/sms/ngx';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';


@Component({
  selector: 'app-esoko',
  templateUrl: './esoko.page.html',
  styleUrls: ['./esoko.page.scss'],
})
export class EsokoPage implements OnInit {
  // define the “currentImage” variable and inject the Camera into this class via the constructor:
  currentImage: any;
  constructor(private sms: SMS ,private storage: Storage, private camera: Camera, private router:Router) { }
  sendSMS(){
    this.sms.send('0708108472','Hello world');
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
  
  //this is the send picture method
 
  ngOnInit() {
  }

}
