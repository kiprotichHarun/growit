import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl} from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Validators, FormBuilder } from '@angular/forms';
import {LoadingController, AlertController } from '@ionic/angular'
import { Toast } from '@ionic-native/toast/ngx';


import {Router } from '@angular/router';
@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.page.html',
  styleUrls: ['./reset-password.page.scss'],
})
export class ResetPasswordPage implements OnInit {
  public resetPasswordForm: FormGroup;
  constructor(
private authService: AuthService,
private alertCtrl: AlertController,
private formBuilder: FormBuilder,

private router: Router
  ) { 
    this.resetPasswordForm = this.formBuilder.group({
      email: [
      '',
      Validators.compose([Validators.required, Validators.email]),
      ],
      });
  }

  ngOnInit() {
  }
  resetPassword(resetPasswordForm: FormGroup): void {
    if (!resetPasswordForm.valid) {
    console.log(
    'Form is not valid yet, current value:', resetPasswordForm.value
    );
    } else {
    const email: string = resetPasswordForm.value.email;
    this.authService.resetPassword(email).then(
    async () => {
    const alert = await this.alertCtrl.create({
    message: 'Check your email for a password reset link',
    buttons: [
    {
    text: 'Ok',
    role: 'cancel',
    handler: () => {
    this.router.navigateByUrl('login');
    },
    },
    ],
    });
    await alert.present();
    },
    async error => {
    const errorAlert = await this.alertCtrl.create({
    message: error.message, mode: 'ios',
    buttons: [{ text: 'Ok', role: 'cancel' }],
    });
    await errorAlert.present();
    }
    );
}
}
}