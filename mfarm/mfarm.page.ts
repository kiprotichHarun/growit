import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-mfarm',
  templateUrl: './mfarm.page.html',
  styleUrls: ['./mfarm.page.scss'],
})
export class MfarmPage implements OnInit {

  constructor( private router:Router) { }
  go(){
    this.router.navigateByUrl('/home')
  }
  ngOnInit() {
  }

}
