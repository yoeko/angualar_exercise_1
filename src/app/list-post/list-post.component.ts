import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-post',
  templateUrl: './list-post.component.html',
  styleUrls: ['./list-post.component.scss']
})
export class ListPostComponent implements OnInit {

  // postName:string = "Mon premier post";
  // postContent:string = "Mon contenu";

  constructor() { }

  @Input() postName: string;
  @Input() postContent: string;
  @Input() postLoveIts: number;
  @Input() postDate: number;

  @Input() posts;

  ngOnInit() {
  }

}
