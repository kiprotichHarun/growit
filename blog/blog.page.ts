import { Component, OnInit, ViewChild } from '@angular/core';
import { IonContent } from '@ionic/angular';
import {Router} from '@angular/router';
import{ AngularFireAuth} from '@angular/fire/auth';
import {AngularFirestore} from '@angular/fire/firestore';
import {SMS} from '@ionic-native/sms/ngx';
import{ToastController} from '@ionic/angular'
import{CallNumber} from '@ionic-native/call-number/ngx';
import { Contact, Contacts, ContactName, ContactField } from '@ionic-native/contacts/ngx';
import { ActionSheetController } from '@ionic/angular';
import { Socket } from 'ngx-socket-io';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.page.html',
  styleUrls: ['./blog.page.scss'],
})
export class BlogPage implements OnInit {
  message = '';
  messages = [];
  currentUser = '';
  myContacts: Contact[] =[];

  // we need to distinguish which user sent the message. in future we will need to pull this from the db that holds the info and user is logged in

  //@ViewChild(IonContent) content: IonContent;
  constructor( private router: Router, public af: AngularFireAuth, public fs: AngularFirestore,
     private contacts: Contacts,private socket: Socket,
     private callNumber:CallNumber,private sms: SMS, private toastCtrl: ToastController,public actionSheetController: ActionSheetController) {


}


// this is the sndmessage function

  ngOnInit() {
    this.socket.connect();
   
    let name = `user-${new Date().getTime()}`;
    this.currentUser = name;
    
    this.socket.emit('set-name', name);
 
    this.socket.fromEvent('users-changed').subscribe(data => {
      let user = data['user'];
      if (data['event'] === 'left') {
        this.showToast('User left: ' + user);
      } else {
        this.showToast('User joined: ' + user);
      }
    });
 
    this.socket.fromEvent('message').subscribe(message => {
      this.messages.push(message);
    });
  }

 
  sendMessage() {
    this.socket.emit('send-message', { text: this.message });
    this.message = '';
    
  }
 
  ionViewWillLeave() {
    this.socket.disconnect();
  }
 
  async showToast(msg) {
    let toast = await this.toastCtrl.create({
      message: msg,
      position: 'top',
      duration: 2000
    });
    toast.present();
  }
    
   

 

 

}


 