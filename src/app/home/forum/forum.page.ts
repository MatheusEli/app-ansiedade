import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Post } from 'src/app/models/post';
import { AuthService } from 'src/app/services/auth.service';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-forum',
  templateUrl: './forum.page.html',
  styleUrls: ['./forum.page.scss'],
})


export class ForumPage implements OnInit {

  posts$:	Observable<Post[]>;
  form: FormGroup;
  email:string;
  
  constructor(private authServ: AuthService, private postService: PostService,
    private fb: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.configForm();
    this.posts$	=	this.postService.list();
    this.email = this.authServ.currentUserName;
  }

  configForm() {
    this.form = this.fb.group({
      id: new FormControl(),
      proprietario: this.authServ.authUser(),
      dataPostagem: new Date(),
      conteudo: new FormControl('', Validators.required),
      imagem: "https://topdescontos.com.br/media/users/member-default.jpg"
    })
  }

  postar(){

    this.postService.createOrUpdate(this.form.value);
  }
}
