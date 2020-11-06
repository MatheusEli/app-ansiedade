import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  user: Observable<firebase.User>;
  email:string;

  constructor(private authServ: AuthService, private router: Router) { }

  ngOnInit() {
    this.email = this.authServ.currentUserName;
  }

  sair() {
    this.authServ.singout();
  }

}
