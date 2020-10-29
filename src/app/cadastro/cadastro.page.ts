import { Component, OnInit } from '@angular/core';
import { Usuario } from '../usuario/usuario';
import { UsuarioService } from '../usuario/usuario.service';
import { UsuarioDataService } from '../usuario/usuario-data.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {

  usuario: Usuario
  key:string = "";

  constructor( private usuarioService: UsuarioService, private usuarioDataService: UsuarioDataService) { }

  ngOnInit() {

    this.usuario = new Usuario();
  }

  mostra(){
    if(this.key){

    }else{
      this.usuarioService.insert(this.usuario);
    }

    this.usuario = new Usuario();
  }
}
