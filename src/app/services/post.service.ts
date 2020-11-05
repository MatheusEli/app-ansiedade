import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ServiceFirebase } from '../core/iservicefirebase.service';
import { Post } from '../models/post';

@Injectable({
  providedIn: 'root'
})
export class PostService extends ServiceFirebase<Post>	{
  constructor(firestore: AngularFirestore) {
    super(Post, firestore, 'posts');
  }
}
