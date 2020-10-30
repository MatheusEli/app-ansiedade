import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Subscription } from 'rxjs/internal/Subscription';
import { Usuario } from '../usuario/usuario';
import { UsuarioDataService } from '../usuario/usuario-data.service';
import { UsuarioService } from '../usuario/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  listaUsuarios: Usuario[] = new Array();
  usuarioListSubscription: Subscription;
  constructor(private usuarioService: UsuarioService, private usuarioDataService: UsuarioDataService) { }

  ngOnInit() {

  }


  public user = {
    email: "",
    senha: ""
  }

  async mostra() {

    this.listaUsuarios = await this.usuarioService.getAll().then(response => response);

    
    console.log(this.listaUsuarios);

    var verificaUsuario = false;
    this.listaUsuarios.forEach(element => {
      if (this.user.email == element.email && this.user.senha == element.senha) {
        console.log("USUÁRIO EXISTENTE");
        verificaUsuario = true;
      }
    });


  }
}
