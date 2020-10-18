import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public user = {
    nome:"",
    celular:"",
    email: "",
    senha: ""
  }

  mostra(){
    console.log(this.user);
  }
}
