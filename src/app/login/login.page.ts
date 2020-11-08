import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email = "";
  password = "";
  errorMessage = ''; // validation error handle
  error: { name: string, message: string } = { name: '', message: '' }; // for firbase error handle

  constructor(private authservice: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  clearErrorMessage() {
    this.errorMessage = '';
    this.error = { name: '', message: '' };
  }

  login()
  {
    this.clearErrorMessage();
    if (this.validateForm(this.email, this.password)) {
      this.authservice.loginWithEmail(this.email, this.password)
        .then(() => {
         this.router.navigate(['/home'])
        }).catch(_error => {
          this.error = _error
          this.router.navigate(['/login'])
        })
    }
  }

  validateForm(email:string, password:string) {
    if (email.length === 0) {
      this.errorMessage = "Por favor insira seu email";
      return false;
    }

    if (password.length === 0) {
      this.errorMessage = "Por favor insira sua senha";
      return false;
    }

    if (password.length < 6) {
      this.errorMessage = "Sua senha deve ter no mínimo 6 caracteres";
      return false;
    }

    this.errorMessage = '';
    return true;

  }

}
