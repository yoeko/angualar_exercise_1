import { PostsService } from './../services/posts.service';
import { Post } from './../models/Post.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-post-item',
  templateUrl: './list-post-item.component.html',
  styleUrls: ['./list-post-item.component.scss']
})
export class ListPostItemComponent implements OnInit {

  @Input() postName: string;
  @Input() postContent: string;
  @Input() postLoveIts: number;
  @Input() postDate: Date;

  constructor(private postService: PostsService) { }

  ngOnInit() {
  }

  getColor() {
    return 'list-group-item-success';
  }

  onDontLoveIt() {
    this.postLoveIts--;
  }

  onLoveIt() {
    this.postLoveIts++;
  }

  onDeletePost(post: Post){
    this.postService.removePost(post);
  }

}
