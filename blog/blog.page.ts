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
@Component({
  selector: 'app-blog',
  templateUrl: './blog.page.html',
  styleUrls: ['./blog.page.scss'],
})
export class BlogPage implements OnInit {
  text: string;
  chatRef: any;
  uid: string
  myContacts: Contact[] =[];
  messages =[
 
  ];
  // we need to distinguish which user sent the message. in future we will need to pull this from the db that holds the info and user is logged in
  currentUser='simon'
  newMsg ='';
  @ViewChild(IonContent) content: IonContent;
  constructor( private router: Router, public af: AngularFireAuth, public fs: AngularFirestore,
     private contacts: Contacts,
     private callNumber:CallNumber,private sms: SMS, private toastCtrl: ToastController,public actionSheetController: ActionSheetController) {

  this.uid = localStorage.getItem('userid');
  this.chatRef = this.fs.collection('chats').valueChanges(); 
}

  go(){
    this.router.navigateByUrl('/home')
  }
// this is the sndmessage function
  sendMessage(){
    this.messages.push({
      user:'simon',
      createdAt: new Date().getTime(),
      msg: this.newMsg
    });
    this.newMsg ='';
    // this is to endure that when you add the text itthe screen goes to the bottom where the chat is
    setTimeout(() => {
      this.content.scrollToBottom(200);
    });
    
  }
  ngOnInit() {
  }

  send(){
    if (this.text !='') {
      this.fs.collection('chats').add({
        Name: this.af.auth.currentUser.displayName,
        Message: this.text,
        UserID: this.af.auth.currentUser.uid,
      });
      this.text='';
    }
    //the send message and load contacts function
  }
  loadContacts(){
    let options = {
      filter:'',
      multiple:true,
      hasPhoneNumber:true
    };

    
   
    this.contacts.find(['*'], options).then((contacts: Contact[]) => {
      this.myContacts = contacts;
    });
  }
 
  createContact() {
    let contact: Contact = this.contacts.create();
 
    contact.name = new ContactName(null, 'Albus', 'Ape');
    contact.phoneNumbers = [ new ContactField('mobile', '12345678') ];
    contact.save().then(
      async () => {
        let toast = await this.toastCtrl.create({
          message: 'Contact added!'
        });
        toast.present();
      },
      (error: any) => console.error('Error saving contact.', error)
    );
  }
 
  sendSms(contact: Contact) {
    this.sms.send('0726100423', 'This is my predefined message to you!');
  }
 
  call(contact: Contact) {
    this.callNumber.callNumber(contact.phoneNumbers[ 0 ].value, true);
  }
  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'would you like to contact a field officer',
      mode:'ios',
      buttons: [{
        text: 'appreciate thier work',
        role: 'destructive',
        icon: 'happy',
        handler: () => {
          this.sms.send('0711331782', 'good work on the topic being discussed!');
        }
      }, {
        text: 'expound more on the topic being discussed',
        icon: 'ios-create',
        handler: () => {
          this.sms.send('0705527213', 'code 123:would you please expound more on the topic of discussion!');
        }
      
      
      }, {
        text: 'Cancel',
        icon: 'ios-trash',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
  }

}


 