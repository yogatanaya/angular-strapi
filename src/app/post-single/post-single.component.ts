import { Component, OnInit } from '@angular/core';
import { PostService } from 'services/post.service';

@Component({
  selector: 'app-post-single',
  templateUrl: './post-single.component.html',
  styleUrls: ['./post-single.component.css']
})
export class PostSingleComponent implements OnInit {

  post: any = [];
  postId: number;

  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.postService.getPost(this.postId).subscribe(res => {
      this.post = res;
    })
  }

}
