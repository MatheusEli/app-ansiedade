import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { UsuarioService } from '../services/usuario.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss']
})
export class CadastroPage implements OnInit {

  message = '';
  errorMessage = ''; // validation error handle
  error: { name: string, message: string } = { name: '', message: '' }; // for firbase error handle
  form: FormGroup;


  constructor(private authservice: AuthService,
    private router: Router,
    private usuarioService: UsuarioService,
    private fb: FormBuilder) { }

  ngOnInit(): void {
    this.configForm();
  }

  clearErrorMessage() {
    this.errorMessage = '';
    this.error = { name: '', message: '' };
  }

  configForm() {
    this.form = this.fb.group({
      id: new FormControl(),
      nome: new FormControl('', Validators.required),
      profissao: new FormControl('', Validators.required),
      sexo: new FormControl('', Validators.required),
      idade: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      senha: new FormControl('', Validators.required)
    })
  }

  register() {
    this.clearErrorMessage();
    if (this.validateForm(this.form.controls['email'].value, this.form.controls['senha'].value)) {
      this.authservice.registerWithEmail(
        this.form.controls['email'].value,
        this.form.controls['senha'].value)
        .then(() => {
          this.message = "you are register with data on firbase"
          this.usuarioService.createOrUpdate(this.form.value);
          this.form.reset();
        }).catch(_error => {
          this.error = _error
          this.router.navigate(['/cadastro'])
        })
    }
  }

  validateForm(email: string, password: string) {

    if (email.length === 0) {
      this.errorMessage = "please enter email id";
      return false;
    }

    if (password.length === 0) {
      this.errorMessage = "please enter password";
      return false;
    }

    if (password.length < 6) {
      this.errorMessage = "password should be at least 6 char";
      return false;
    }

    this.errorMessage = '';
    return true;

  }

}
