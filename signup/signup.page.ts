import { Component, OnInit } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth'
import { FormGroup, FormControl } from '@angular/forms';
import { AuthService } from '../services/auth.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  //this picks the values for the username and password
  public registerForm: FormGroup;

  constructor(public authService: AuthService) {
    this.registerForm = new FormGroup({
      email: new FormControl(),
      password: new FormControl(),
      fullname: new FormControl(),
    });
  }

  ngOnInit() {
  }

  async register() {
    await this.authService.signup(this.registerForm.value["email"], this.registerForm.value["password"]).then((value) => {

    });
  }

}
