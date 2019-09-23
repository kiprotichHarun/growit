import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

import { ActionSheetController } from '@ionic/angular';
import { SMS } from '@ionic-native/sms/ngx';
import { AlertController } from '@ionic/angular';



@Component({
  selector: 'app-mfarm',
  templateUrl: './mfarm.page.html',
  styleUrls: ['./mfarm.page.scss'],
})
export class MfarmPage implements OnInit {
  
  browser: any
  constructor( private router:Router,
    private sms: SMS,
    public alertController: AlertController) { }
  go(){
    this.router.navigateByUrl('/home')
  }

  ngOnInit() {
  }
  
 
}


