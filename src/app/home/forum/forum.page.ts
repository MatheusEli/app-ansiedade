import { Extractor } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { ListaPosts } from 'src/app/models/lista-posts';
import { Post } from 'src/app/models/post';
import { Usuario } from 'src/app/models/usuario';
import { AuthService } from 'src/app/services/auth.service';
import { PostService } from 'src/app/services/post.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-forum',
  templateUrl: './forum.page.html',
  styleUrls: ['./forum.page.scss']
})


export class ForumPage implements OnInit {

  ref: AngularFirestoreCollection<Post>;
  posts$: Observable<Post[]>;
  usuarios$: Observable<Usuario[]>;
  form: FormGroup;
  usuarioLogado:Usuario;
  emailUser:string;

  constructor(private userService: UsuarioService, protected firestore: AngularFirestore,
    private postService: PostService, private fb: FormBuilder, private auth: AuthService) {
    this.ref = this.firestore.collection<Post>('posts', ref => ref.orderBy("dataPostagem", "desc").limit(10));
    this.posts$ = this.ref.valueChanges();
    this.emailUser = this.auth.currentUserName;
  }

  ngOnInit() {
    this.configForm();
  }

  configForm() {
    this.form = this.fb.group({
      id: new FormControl(),
      proprietario: this.emailUser,
      proprietario_profissao: "usuário",
      dataPostagem: new Date(),
      conteudo: new FormControl('', Validators.required),
      imagem: "https://topdescontos.com.br/media/users/member-default.jpg"
    })
  }

  postar() {
    
    this.postService.createOrUpdate(this.form.value);
  }

}


/*this.usuarios$ = userService.list();
    this.usuarios$.subscribe(val =>
      val.map(user => {
        if (user.email == this.authServ.currentUserName) {
          this.usuarioLogado = user;
          this.configForm();
          console.log("USUÁRIO: "+this.usuarioLogado.nome+" CONECTADO");
        }
      }));
     */ 
