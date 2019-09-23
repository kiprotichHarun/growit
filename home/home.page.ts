import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import { ActionSheetController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { Platform } from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

    constructor(private router:Router, public actionSheetController: ActionSheetController,public alertController: AlertController) { }

   
    async presentAlertConfirm() {
      const alert = await this.alertController.create({
        header: 'Confirm!',
        mode:'ios',
        message: '<strong>would you like to exit the app<strong>',
        buttons: [
          {
            text: 'okay',
            // role: 'cancel',
            cssClass: 'secondary',
            handler: (blah) => {
              this.router.navigateByUrl('');
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
  
  

    go(){
      this.router.navigateByUrl('/mfarm');
    }
    ngOnInit() {
    }
    goto(){
      this.router.navigateByUrl('/');
    }
    goTo(){
      this.router.navigateByUrl('/esoko');
    }
    openblog(){
      this.router.navigateByUrl('/blog')
    }
    
    async openContacts() {
      const alert = await this.alertController.create({
        header: 'Confirm!',
        mode:'ios',
        message: '<strong>this service enables you to directly contact an extension officer using mesaging service so that you can have your poblems handled by proffesional. Standard charges may apply<strong>',
        buttons: [
          {
            text: 'proceed',
            // role: 'cancel',
            cssClass: 'secondary',
            handler: (blah) => {
              this.router.navigateByUrl('/contact');
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
}
