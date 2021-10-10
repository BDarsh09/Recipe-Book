import { AuthResponseData, AuthService } from './auth.service';
import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  isLoginMode: boolean = true;
  showLoader: boolean = false;
  error: string = '';
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  switchMode() {
    this.isLoginMode = !this.isLoginMode;
  }

  onSubmit(form: NgForm) {
    const email = form.value.email;
    const password = form.value.password;
    let authObs:Observable<AuthResponseData>

    
    if (email && password) {
      this.showLoader = true;
      if (this.isLoginMode) {
        authObs = this.authService.login(email, password);
      }else {
        authObs = this.authService.signup(email, password);
      }
    }

    authObs.subscribe(resData => {
      this.showLoader = false;
      console.log(resData);
    }, errorMessage => {
      this.showLoader = false;
      this.error = errorMessage;
    });

    form.reset();
  }

}
