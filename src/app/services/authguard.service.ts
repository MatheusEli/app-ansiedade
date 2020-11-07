import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { map, catchError, take, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthguardService implements CanActivate {

  constructor(private afAuth: AngularFireAuth, private router: Router){ }

  canActivate(route:	ActivatedRouteSnapshot,	state:	RouterStateSnapshot) : Observable<boolean>{

    return this.afAuth.authState.pipe(
      take(1),
      map(user => !!user), 
      tap(loggedIn => {
        if (!loggedIn) {
          this.router.navigate(['/login']);
        }
      })
    )

  }

}
