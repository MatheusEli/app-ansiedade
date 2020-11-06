import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-forum',
  templateUrl: './forum.page.html',
  styleUrls: ['./forum.page.scss'],
})


export class ForumPage implements OnInit {

  user: Observable<firebase.User>;
  form: FormGroup;
  email:string;
  
  constructor(private authServ: AuthService, private postService: PostService,
    private fb: FormBuilder, private router: Router) { }

  ngOnInit():void {
    this.user = this.authServ.authUser();
    this.email = this.authServ.currentUserName;
    this.configForm();
  }

  configForm() {
    this.form = this.fb.group({
      id: new FormControl(),
      proprietario: this.email,
      dataPostagem: new Date(),
      conteudo: new FormControl('', Validators.required)
    })
  }

  postar(){

    this.postService.createOrUpdate(this.form.value);
    this.form.reset();
  }
}
