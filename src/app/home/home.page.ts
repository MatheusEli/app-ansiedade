import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  user: Observable<firebase.User>;
  constructor(private authServ: AuthService, private router: Router) { }

  ngOnInit() {
    this.user = this.authServ.authUser();
  }

  sair() {
    this.authServ.singout();
  }

}
