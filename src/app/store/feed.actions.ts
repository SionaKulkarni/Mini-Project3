import { createAction, props } from '@ngrx/store';

export const likePost = createAction(
  '[Feed] Like Post',
  props<{ postId: number }>()
);

export const commentOnPost = createAction(
  '[Feed] Comment on Post',
  props<{ postId: number; comment: string }>()
);
