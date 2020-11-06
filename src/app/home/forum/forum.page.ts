import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Post } from 'src/app/models/post';
import { AuthService } from 'src/app/services/auth.service';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-forum',
  templateUrl: './forum.page.html',
  styleUrls: ['./forum.page.scss']
})


export class ForumPage implements OnInit {

  ref: AngularFirestoreCollection<Post>;
  posts$:	Observable<Post[]>;
  form: FormGroup;
  email:string;
  
  constructor(protected firestore: AngularFirestore,private authServ: AuthService, 
    private postService: PostService,private fb: FormBuilder) {
      this.ref = this.firestore.collection<Post>('posts', ref => ref.orderBy("dataPostagem", "desc").limit(10));
     }

  ngOnInit() {
    this.configForm();
    this.posts$	=	this.ref.valueChanges();
    this.email = this.authServ.currentUserName;
  }

  configForm() {
    this.form = this.fb.group({
      id: new FormControl(),
      proprietario: "Matheus Eli Ferreira",
      dataPostagem: new Date(),
      conteudo: new FormControl('', Validators.required),
      imagem: "https://topdescontos.com.br/media/users/member-default.jpg"
    })
  }

  postar(){

    this.postService.createOrUpdate(this.form.value);
  }
}
