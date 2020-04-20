import { Post } from './../models/Post.model';
import { PostsService } from './../services/posts.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-post-component',
  templateUrl: './new-post-component.component.html',
  styleUrls: ['./new-post-component.component.scss']
})
export class NewPostComponentComponent implements OnInit {

  postForm: FormGroup;


  constructor(private formBuilder:FormBuilder,
              private postService:PostsService,
              private router:Router) { }

  ngOnInit() {
    this.initForm();
  }

  initForm(){
    this.postForm = this.formBuilder.group({
      title: ['', Validators.required],
      content: ['', Validators.required]
    });
  }

  onSavePost(){
    
    const title = this.postForm.get('title').value;
    const content = this.postForm.get('content').value;
    const loveIts = 0;
    const newPost = new Post(title, content, loveIts, new Date());
    this.postService.createNewPost(newPost);
    this.router.navigate(['posts']);
  }

}
