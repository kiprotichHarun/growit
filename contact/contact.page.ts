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
message: string
taarifa: string
ujumbe: string
barua: string

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
    const Message = this.message
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
            this.sms.send('0708108472', 'code 100:' + this.taarifa +  'thanks in advance for you help !');
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
            this.sms.send('0708108472', 'code 100:' + this.message + 'any assistance given will be highly appreciated!');
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
            this.sms.send('0708108472', 'code 100:' + this.ujumbe + 'thankyou in advance  for your help!');
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
 
  // goes to tea farming

  async chai() {
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
            this.sms.send('0708108472', 'code 100:' + this.barua + 'thankyou in advance  for your help!');
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
          this.sms.send('0708108472', 'good job you guys are doing welldone!');
        }
      
      }, {
        text: 'not happy with the services offered',
        icon: 'sad',
        handler: () => {
          this.sms.send('0708108472', 'im not happy with the services offered, alot more could be done to improve it!');
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
  
}
