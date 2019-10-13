import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { File } from "@ionic-native/file/ngx";
import {FileTransfer,FileTransferObject} from "@ionic-native/file-transfer/ngx";
import { FileOpener } from "@ionic-native/file-opener/ngx";
import {DocumentViewer} from '@ionic-native/document-viewer/ngx'
import {Http} from '@angular/http';
import { SMS } from '@ionic-native/sms/ngx';
import { AlertController, } from '@ionic/angular';
import { firestore } from 'firebase/app';

@Component({
  selector: 'app-mfarm',
  templateUrl: './mfarm.page.html',
  styleUrls: ['./mfarm.page.scss'],
})
export class MfarmPage implements OnInit {

  fileTransfer: FileTransferObject;
  browser: any
  constructor( private router:Router,
    private sms: SMS,
  public http: Http,
    public alertController: AlertController,
    private fileOpener: FileOpener,
    private file: File,
    private ft: FileTransfer,
    private document: DocumentViewer,

   ) { }

    
  go(){
    this.router.navigateByUrl('/home')
  }

  ngOnInit() {
  }
  
  download(){
    let doownloadUrl ='https://firebasestorage.googleapis.com/v0/b/growit-1d290.appspot.com/o/angularjs_tutorial.pdf?alt=media&token=60b6644e-ade7-4409-be44-4e091d048c4c';
    let path = this.file.dataDirectory;
    const transfer = this.ft.create();
    
    transfer.download(doownloadUrl,`${path}myfile.pdf`).then(entry =>{
      let url = entry.toURL();
      this.fileOpener.open(url, 'application/pdf');
    });

  }
  dairycare(){
    let doownloadUrl ='https://firebasestorage.googleapis.com/v0/b/growit-1d290.appspot.com/o/dairy%20care.pdf?alt=media&token=46bea3ab-03e0-4731-9a1f-14e4d91dfdfb';
    let path = this.file.dataDirectory;
    const transfer = this.ft.create();
    
    transfer.download(doownloadUrl,`${path}myfile.pdf`).then(entry =>{
      let url = entry.toURL();
      this.fileOpener.open(url, 'application/pdf');
    })
  }

}

