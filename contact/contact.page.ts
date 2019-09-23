import { Component, OnInit } from '@angular/core';
import {SMS} from '@ionic-native/sms/ngx';
import { AlertController } from '@ionic/angular';
import {Router} from '@angular/router'
import { ActionSheetController } from '@ionic/angular';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
})
export class ContactPage implements OnInit {
heartType: string
  constructor(
    private sms: SMS,
    public alertController: AlertController,
    private router: Router,
    public actionSheetController: ActionSheetController
  ) { }

  ngOnInit() {
  }
  // veterinanry farmers
  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      header: 'Confirm!',
      mode:'ios',
      message: '<strong>did you know you can notify a veterinanry officer that you are in need of thier services by just the touch of a button <strong><br>would you like to continue',
      buttons: [
        {
          text: 'okay',
          // role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            this.sms.send('0705527213', 'code 100: hello there i would like to invite you to visit our area and expound more on veterinary services !');
          }
        }, {
          text: 'cancel',
          handler: () => {
            console.log('Confirm cancel');
          }
        }
      ]
    });

    await alert.present();
  }

// goes to extension services
  async extension() {
    const alert = await this.alertController.create({
      header: 'Confirm!',
      mode:'ios',
      message: '<strong>Are you in need of help in areas pertaining crop growing and cultivation <strong><br>get the help you need by the touch of a button',
      buttons: [
        {
          text: 'okay',
          // role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            this.sms.send('0705527213', 'code 100: hello there i would like to invite you to visit our area and offer extension services !');
          }
        }, {
          text: 'cancel',
          handler: () => {
            console.log('Confirm cancel');
          }
        }
      ]
    });

    await alert.present();
  }

  // goes to fishing
  async fishing() {
    const alert = await this.alertController.create({
      header: 'Confirm!',
      mode:'ios',
      message: '<strong>stuck with fishing and in need of help? you can get the help you need through the our sms service<strong><br>would you like to continue',
      buttons: [
        {
          text: 'okay',
          // role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            this.sms.send('0705527213', 'code 100: hello there i would like to invite you to visit our area and offer your services pertaining to fish farming!');
          }
        }, {
          text: 'cancel',
          handler: () => {
            console.log('Confirm cancel');
          }
        }
      ]
    });

    await alert.present();
  }


  // action sheet
  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'not satisfied with the messages sent or want to more options',
      mode:'ios',
      buttons: [{
        text: 'appreciate officers work',
        role: 'destructive',
        icon: 'ios-mail',
        handler: () => {
          this.sms.send('0705527213', 'good job you guys are doing welldone!');
        }
      
      }, {
        text: 'not happy with the services offered',
        icon: 'sad',
        handler: () => {
          this.sms.send('0705527213', 'im not happy with the services offered, alot more could be done to improve it!');
        }
      
      }, {
        text: 'Cancel',
        icon: 'ios-close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
  }
  toggleHeart(){
    this.heartType = this.heartType == "heart" ? "heart-empty" : "heart"
    this.sms.send('0705527213', 'Thanks alot for the help given i appreciate the good work!');
  }
}
