import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ServiceFirebase } from '../core/iservicefirebase.service';
import { ListaPosts } from '../models/lista-posts';

@Injectable({
  providedIn: 'root'
})
export class ListaPostsService extends ServiceFirebase<ListaPosts>	{
  constructor(firestore: AngularFirestore) {
    super(ListaPosts, firestore, 'lista-posts');
  }
}
