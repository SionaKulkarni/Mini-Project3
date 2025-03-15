import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Post } from '../../store/feed.reducer';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-feed',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent {
  posts$: Observable<Post[]>;

  constructor(private store: Store<{ feed: Post[] }>) {
    this.posts$ = this.store.pipe(select('feed'));
  }

  likePost(postId: number) {
    this.store.dispatch({ type: '[Feed] Like Post', postId });
  }

  commentOnPost(postId: number, comment: string) {
    this.store.dispatch({ type: '[Feed] Comment on Post', postId, comment });
  }
}
