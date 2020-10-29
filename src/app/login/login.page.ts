import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { Observable } from 'rxjs';
import { Usuario } from '../usuario/usuario';
import { UsuarioDataService } from '../usuario/usuario-data.service';
import { UsuarioService } from '../usuario/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  usuarios: Observable<any>;
  constructor(private usuarioService: UsuarioService, private usuarioDataService: UsuarioDataService) { }

  ngOnInit() {
    this.usuarios = this.usuarioService.getAll();
  }


  public user = {
    email: "",
    senha: ""
  }

  mostra() {

  }
}
