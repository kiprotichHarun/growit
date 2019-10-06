import { NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
//this is for the local storage
import { IonicStorageModule } from '@ionic/storage';
//module for sms
import { SMS } from '@ionic-native/sms/ngx';
import { AutosizeModule } from 'ngx-autosize';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
//this is the camera plugin
import { Camera } from '@ionic-native/camera/ngx';
// file opening
import {File} from '@ionic-native/file/ngx';
import{FileOpener} from '@ionic-native/file-opener/ngx';
import {FileTransfer} from '@ionic-native/file-transfer/ngx'
import {DocumentViewer} from '@ionic-native/document-viewer/ngx'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import{Contacts} from '@ionic-native/contacts/ngx';
import{CallNumber} from '@ionic-native/call-number/ngx'

import {HttpModule} from '@angular/http'
//grants us access to basic firebase functionality
import {AngularFirestoreModule} from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth'; //helps with authentication in firebase
import { environment } from '../environments/environment';
import * as firebase from 'firebase/app';
import { UserService } from './services/user.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//import firebaseConfig from './firebase'
firebase.initializeApp(environment.firebase);

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, 
    IonicModule.forRoot(),
    AutosizeModule,
     AppRoutingModule,
     IonicStorageModule.forRoot(),
     AngularFirestoreModule,
     ReactiveFormsModule,
     FormsModule,
     
    AngularFireModule.initializeApp(environment.firebase,'GROWIT'),
    HttpModule,
  AngularFireAuthModule],

  providers: [
    StatusBar,
    SMS,
    SplashScreen,
    Camera,
    Contacts,
    CallNumber,
    UserService,
    FileOpener,
    File,
    FileTransfer,
   DocumentViewer,
    
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
