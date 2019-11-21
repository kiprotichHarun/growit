import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { File } from "@ionic-native/file/ngx";
import {FileTransfer,FileTransferObject} from "@ionic-native/file-transfer/ngx";
import { FileOpener } from "@ionic-native/file-opener/ngx";
import {DocumentViewer} from '@ionic-native/document-viewer/ngx'
import {Http} from '@angular/http';
import { SMS } from '@ionic-native/sms/ngx';
import { AlertController, } from '@ionic/angular';
import { VideoPlayer } from '@ionic-native/video-player/ngx';
import { StreamingMedia, StreamingVideoOptions } from '@ionic-native/streaming-media/ngx';

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
    // private videoPlayer: VideoPlayer,
    private streamingMedia: StreamingMedia

   ) { }

    
  go(){
    this.router.navigateByUrl('/home')
  }

  ngOnInit() {
  }
  
  dairycare(){
    let doownloadUrl ='https://firebasestorage.googleapis.com/v0/b/growit-1d290.appspot.com/o/the-life-of-dairy-cows.pdf?alt=media&token=8c543584-c48b-4cc0-943c-9b2c92abe407';
    let path = this.file.dataDirectory;
    const transfer = this.ft.create();
    
    transfer.download(doownloadUrl,`${path}myfile.pdf`).then(entry =>{
      let url = entry.toURL();
      this.fileOpener.open(url, 'application/pdf');
    })
  }
//pdf for cattle diseases
  dairydisase(){
    let doownloadUrl ='https://firebasestorage.googleapis.com/v0/b/growit-1d290.appspot.com/o/Diseases%20of%20Dairy%20Cows.ppt?alt=media&token=40850ad8-d038-41f8-b4d6-664d47d740de';
    let path = this.file.dataDirectory;
    const transfer = this.ft.create();
    
    transfer.download(doownloadUrl,`${path}mypdf.pdf`).then(entry =>{
      let url = entry.toURL();
      this.fileOpener.open(url, 'application/pdf');
    })
  }
// for dairy business
  dairybusiness(){
    let doownloadUrl ='https://firebasestorage.googleapis.com/v0/b/growit-1d290.appspot.com/o/naivasha.pdf?alt=media&token=2fa37ec8-5478-4940-9d03-4e6f282bee3b';
    let path = this.file.dataDirectory;
    const transfer = this.ft.create();
    
    transfer.download(doownloadUrl,`${path}mybook.pdf`).then(entry =>{
      let url = entry.toURL();
      this.fileOpener.open(url, 'application/pdf');
    })
  }
// tomato growing
Tomamtogr(){
  let doownloadUrl ='https://firebasestorage.googleapis.com/v0/b/growit-1d290.appspot.com/o/Crop%20Guide_%20Tomato1.pdf?alt=media&token=4c8e3333-c163-498a-a29d-b88633373672';
  let path = this.file.dataDirectory;
  const transfer = this.ft.create();
  
  transfer.download(doownloadUrl,`${path}mykitabu.pdf`).then(entry =>{
    let url = entry.toURL();
    this.fileOpener.open(url, 'application/pdf');
  })
} 
// tomamto care
tomatocare(){
  let doownloadUrl ='https://firebasestorage.googleapis.com/v0/b/growit-1d290.appspot.com/o/Crop%20Guide_%20How%20to%20Grow%20%26%20Growing%20Tomato2.pdf?alt=media&token=29abbb58-7834-48e8-8d54-18119644898a';
  let path = this.file.dataDirectory;
  const transfer = this.ft.create();
  
  transfer.download(doownloadUrl,`${path}myfile.pdf`).then(entry =>{
    let url = entry.toURL();
    this.fileOpener.open(url, 'application/pdf');
  })
} 

// potato care

potato(){
  let doownloadUrl ='https://firebasestorage.googleapis.com/v0/b/growit-1d290.appspot.com/o/Crops%20Extension%20Pocket%20Hand%20Book-1%20(1).pdf?alt=media&token=df2f429f-9907-4f41-88c2-23b247df728a';
  let path = this.file.dataDirectory;
  const transfer = this.ft.create();
  
  transfer.download(doownloadUrl,`${path}viazi.pdf`).then(entry =>{
    let url = entry.toURL();
    this.fileOpener.open(url, 'application/pdf');
  })
}

// maize farming

maize(){
  let doownloadUrl ='https://firebasestorage.googleapis.com/v0/b/growit-1d290.appspot.com/o/Crops%20Extension%20Pocket%20Hand%20Book-1%20(1).pdf?alt=media&token=df2f429f-9907-4f41-88c2-23b247df728a';
  let path = this.file.dataDirectory;
  const transfer = this.ft.create();
  
  transfer.download(doownloadUrl,`${path}mahindi.pdf`).then(entry =>{
    let url = entry.toURL();
    this.fileOpener.open(url, 'application/pdf');
  })
}

// fruits
fruits(){
  let doownloadUrl ='https://firebasestorage.googleapis.com/v0/b/growit-1d290.appspot.com/o/Crops%20Extension%20Pocket%20Hand%20Book-1%20(1).pdf?alt=media&token=df2f429f-9907-4f41-88c2-23b247df728a';
  let path = this.file.dataDirectory;
  const transfer = this.ft.create();
  
  transfer.download(doownloadUrl,`${path}myfile.pdf`).then(entry =>{
    let url = entry.toURL();
    this.fileOpener.open(url, 'application/pdf');
  })
}

playVideoLocal(){
  let options: StreamingVideoOptions = {
    successCallback: () => { console.log('Video played') },
    errorCallback: (e) => { console.log('Error streaming') },
    orientation: 'potrait',
    shouldAutoClose: true,
    controls: true
  };
  
  this.streamingMedia.playVideo('https://firebasestorage.googleapis.com/v0/b/growit-1d290.appspot.com/o/(1)%20IONIC%20VIDEO%20PLAYER%20TUTORIAL%209%20-%20YouTube.mp4?alt=media&token=a4d00c12-7b93-4a63-b953-29f8251f702e', options);
}

}
