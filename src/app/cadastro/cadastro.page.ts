import { Component, ElementRef, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { UsuarioService } from '../services/usuario.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFireUploadTask, AngularFireStorage } from '@angular/fire/storage';

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

  //para upload da foto
  @ViewChild('inputFile',	{	static:	true	})	inputFile:	ElementRef;
  uploadPercent:	Observable<number>;
  downloadURL:	Observable<string>;
  task:	AngularFireUploadTask;
  complete:	boolean;
  
  constructor(private	storage:	AngularFireStorage,
    private authservice: AuthService,
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
      senha: new FormControl('', Validators.required),
      foto: new FormControl()
    })
  }

  register() {
    this.clearErrorMessage();
    if (this.validateForm(this.form.controls['email'].value, this.form.controls['senha'].value)) {
      this.authservice.registerWithEmail(
        this.form.controls['email'].value,
        this.form.controls['senha'].value)
        .then(() => {
          this.message = "Cadastrado no app com sucesso!"
          this.usuarioService.createOrUpdate(this.form.value);
          this.form.reset();
        }).catch(_error => {
          this.error = _error
          this.message = "Não foi possível realizar seu cadastro"
          this.router.navigate(['/cadastro'])
        })
    }
  }

  validateForm(email: string, password: string) {

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

  async upload(event) {
    this.complete = false;
    const file = event.target.files[0];
    const path = `usuarios/${new Date().getTime().toString()}`;
    const fileRef = this.storage.ref(path);
    this.task = this.storage.upload(path, file);
    this.task.then(up => {
      fileRef.getDownloadURL().subscribe(url => {
        this.complete = true;
        this.form.patchValue({
          foto: url
        })
      });
    });
    this.uploadPercent = this.task.percentageChanges();
    this.inputFile.nativeElement.value = '';
  }


}
