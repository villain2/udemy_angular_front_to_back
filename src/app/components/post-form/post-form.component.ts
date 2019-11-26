import {EventEmitter, Output, Input, Component, OnInit} from '@angular/core';
import { PostService } from '../../services/post.service';

import { Post} from '../../models/Post';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {
  @Output() newPost: EventEmitter<Post> = new EventEmitter();
  @Input() currentPost: Post;
  @Input() isEdit: boolean;

  constructor(private postService: PostService) { }

  ngOnInit() {
  }

  addPost(title, body) {
    if (!title || !body) {
      alert('Please add post.');
    } else {
      // make post request through service
      this.postService.savePost({title, body} as Post).subscribe
      (post => {
        this.newPost.emit(post);
      });
    }
  }

  updatePost() {
    console.log(123);
  }

}
