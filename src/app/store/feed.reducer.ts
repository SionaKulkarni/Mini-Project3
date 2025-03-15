import { createReducer, on } from '@ngrx/store';
import { likePost, commentOnPost } from './feed.actions';

export interface Post {
  id: number;
  content: string;
  likes: number;
  comments: string[];
}

// Initial State
export const initialState: Post[] = [
  { id: 1, content: 'First Post!', likes: 0, comments: [] },
  { id: 2, content: 'Second Post!', likes: 0, comments: [] }
];

export const feedReducer = createReducer(
  initialState,
  on(likePost, (state, { postId }) =>
    state.map(post =>
      post.id === postId ? { ...post, likes: post.likes + 1 } : post
    )
  ),
  on(commentOnPost, (state, { postId, comment }) =>
    state.map(post =>
      post.id === postId
        ? { ...post, comments: [...post.comments, comment] }
        : post
    )
  )
);
