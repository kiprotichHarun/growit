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
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//grants us access to basic firebase functionality
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth'; //helps with authentication in firebase
import { environment } from '../environments/environment';
//import firebaseConfig from './firebase'
//firebase.initializeApp(environment.firebase);

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, 
    IonicModule.forRoot(),
    AutosizeModule,
     AppRoutingModule,
     IonicStorageModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebase,'GROWIT'),
  AngularFireAuthModule],

  providers: [
    StatusBar,
    SMS,
    SplashScreen,
    Camera,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
