import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ServiceFirebase } from '../core/iservicefirebase.service';
import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService extends	ServiceFirebase<Usuario>	{
		constructor(firestore:	AngularFirestore)	{
				super(Usuario,	firestore,	'usuarios');
		}

}
