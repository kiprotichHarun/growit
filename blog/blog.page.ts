import { Component, OnInit, ViewChild } from '@angular/core';
import { IonContent } from '@ionic/angular';
import {Router} from '@angular/router';
@Component({
  selector: 'app-blog',
  templateUrl: './blog.page.html',
  styleUrls: ['./blog.page.scss'],
})
export class BlogPage implements OnInit {
  messages =[
    {
      user: 'simon',
      createdAt:155490856000,
      msg:' which seed variety do you use when planing maize in riftvalley'
    },
    {
      user:'manuel',
      createdAt:1554090956000,
      msg: 'use the h614 brand anything else?'
    },
    {
      user: 'simon',
      createdAt:155490856000,
      msg:' what about the seed variety of beans'
    },
    {
      user: 'manuel',
      createdAt:155490856000,
      msg:'just try the rose-coco variety it works or even the red variety'
    }
  ];
  // we need to distinguish which user sent the message. in future we will need to pull this from the db that holds the info and user is logged in
  currentUser='simon'
  newMsg ='';
  @ViewChild(IonContent) content: IonContent;
  constructor( private router: Router) { }
  go(){
    this.router.navigateByUrl('/home')
  }
// this is the sndmessage function
  sendMessage(){
    this.messages.push({
      user:'simon',
      createdAt: new Date().getTime(),
      msg: this.newMsg
    });
    this.newMsg ='';
    // this is to endure that when you add the text itthe screen goes to the bottom where the chat is
    setTimeout(() => {
      this.content.scrollToBottom(200);
    });
    
  }
  ngOnInit() {
  }

}

 