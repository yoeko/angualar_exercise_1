import { Injectable } from '@angular/core';
import { Post } from './../models/Post.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  posts: Post[] = [];
  postSubject = new Subject<Post[]>();

  constructor() { }

  emitPosts(){
    this.postSubject.next(this.posts);
  }

  loveIt(post: Post){
    post.loveIts++;
    this.emitPosts();
  }

  dontLoveIt(post: Post){
    post.loveIts--;
    this.emitPosts();
  }

  createNewPost(newPost: Post){
    this.posts.push(newPost);
    this.emitPosts();
  }

  removePost(post: Post){
    const postIndexToRemove = this.posts.findIndex(
      (postEl) => {
        if (postEl==post) {
          return true;
        }
      }
    )
    this.posts.splice(postIndexToRemove, 1);
    this.emitPosts();
  }

}
