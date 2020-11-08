import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Usuario } from 'src/app/models/usuario';
import { AuthService } from 'src/app/services/auth.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  usuarios$: Observable<Usuario[]>;
  usuarioLogado:Usuario;
  nomeUsuario:string = " ";
  profissaoUsuario:string = " ";
  sexoUsuario:string = " ";
  idadeUsuario:number = 0;
  emailUsuario = " ";

  constructor(
  private router: Router,
  private userService: UsuarioService, 
  private auth: AuthService) { }

  ngOnInit() {

    this.usuarios$ = this.userService.list();
    this.usuarios$.subscribe(val =>
      val.map(user => {
        if (user.email == this.auth.currentUserName) {
          this.usuarioLogado = user;
          this.nomeUsuario = this.usuarioLogado.nome;
          this.profissaoUsuario = this.usuarioLogado.profissao;
          this.sexoUsuario = this.usuarioLogado.sexo;
          this.idadeUsuario = this.usuarioLogado.idade;
          this.emailUsuario = this.usuarioLogado.email;
        }
      }));
  }

  sair() {
    this.auth.singout();
  }

}
