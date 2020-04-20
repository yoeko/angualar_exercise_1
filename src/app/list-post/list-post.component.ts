import { PostsService } from './../services/posts.service';
import { Post } from './../models/Post.model';
import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-list-post',
  templateUrl: './list-post.component.html',
  styleUrls: ['./list-post.component.scss']
})
export class ListPostComponent implements OnInit {

  posts: Post[];
  postSubscription: Subscription;
  postLoveIts:number;

  constructor(private postService:PostsService) { }

  ngOnInit() {
    this.postSubscription = this.postService.postSubject.subscribe(
      (posts: Post[]) => {
        this.posts = posts;
      }
    );
    this.postService.emitPosts();
  }

  getColor() {
    return 'list-group-item-success';
  }

  onDontLoveIt(post: Post) {
    this.postService.dontLoveIt(post);
  }

  onLoveIt(post: Post) {
    this.postService.loveIt(post);
  }

  onDeletePost(post: Post){
    this.postService.removePost(post);
  }

  ngOnDestroy(): void {
    this.postSubscription.unsubscribe();    
  }

}
