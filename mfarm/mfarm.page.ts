import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { PdfViewerService } from "./../services/pdf-viewer.service";
import { ActionSheetController } from '@ionic/angular';
@Component({
  selector: 'app-mfarm',
  templateUrl: './mfarm.page.html',
  styleUrls: ['./mfarm.page.scss'],
})
export class MfarmPage implements OnInit {
  browser: any
  constructor( private router:Router,private pdf: PdfViewerService,public actionSheetController: ActionSheetController) { }
  go(){
    this.router.navigateByUrl('/home')
  }
  download(url: string, title: string) {
    this.pdf.download(url, title);
  }

  ngOnInit() {
  }
  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Navigate to other sites',
      mode:'ios',
      buttons: [{
        text: 'poultry',
        icon: 'bulb',
        handler: () => {
          this.router.navigateByUrl('/https://www.roysfarm.com/poultry-farming-in-kenya/');
        }
      }, {
        text: 'Share',
        icon: 'share',
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'Play (open modal)',
        icon: 'arrow-dropright-circle',
        handler: () => {
          console.log('Play clicked');
        }
      }, {
        text: 'Favorite',
        icon: 'heart',
        handler: () => {
          console.log('Favorite clicked');
        }
      }, {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
  }
}
