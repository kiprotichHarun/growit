import { Component, OnInit, ViewChild } from '@angular/core';
import {Router} from '@angular/router';
//import { NavController } from '@ionic/angular';

//storage module
import { Storage } from '@ionic/storage';
import { SMS } from '@ionic-native/sms/ngx';

import {Http} from '@angular/http';

import { firestore } from 'firebase/app';
import { UserService } from '../services/user.service';


import { AngularFirestore} from '@angular/fire/firestore';



@Component({
  selector: 'app-esoko',
  templateUrl: './esoko.page.html',
  styleUrls: ['./esoko.page.scss'],
})
export class EsokoPage implements OnInit {
  captureDataUrl: string;
  
  userPosts
  
  
  imageURL:string
  desc: string
  //child of the button file
  @ViewChild('fileButton',{static: false }) fileButton
  // define the “currentImage” variable and inject the Camera into this class via the constructor:
  currentImage: any;

  constructor(private sms: SMS ,private storage: Storage, 
    private router:Router, public http:Http, public afstore: AngularFirestore, public user: UserService, private afs: AngularFirestore ) {
      
      const posts = afs.doc(`users/cEBynmz9ClXj66doTUaX`)
      this.userPosts = posts.valueChanges()
     }

 


  go(){
    this.router.navigateByUrl('/home')
  }

  fileChanged(event){
    const files= event.target.files
    
    const data = new FormData()
    data.append('file', files[0])
    data.append('UPLOADCARE_STORE','1')
    data.append('UPLOADCARE_PUB_KEY','41b0ef5e4e9d516d8906')

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
//hardcode the collection id from firebase
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