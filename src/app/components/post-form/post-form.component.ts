import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post.service';
import { EventEmitter, Output} from '@angular/core';

import { Post} from '../../models/Post';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {
  // properties
  post: Post;
  @Output() newPost: EventEmitter<Post> = new EventEmitter();

  constructor(private postService: PostService) { }

  ngOnInit() {
  }

  addPost(title, body) {
    if(!title || !body) {
      alert('Please add post.');
    } else {
      // make post request through service
      this.postService.savePost({title, body} as Post).subscribe
      (post => {
        this.newPost.emit(post);
      });
    }
  }

}
