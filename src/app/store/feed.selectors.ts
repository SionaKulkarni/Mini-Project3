import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Post } from './feed.reducer';

export const selectFeedState = createFeatureSelector<Post[]>('feed');

export const selectFeed = createSelector(
  selectFeedState,
  (feed) => feed
);
