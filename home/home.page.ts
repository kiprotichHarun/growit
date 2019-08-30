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

    constructor(private router:Router, public actionSheetController: ActionSheetController,public alertController: AlertController,) { }

   
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
              this.router.navigateByUrl('/login');
            }
          }, {
            text: 'cancel',
            handler: () => {
              console.log('Confirm Okay');
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
  }

