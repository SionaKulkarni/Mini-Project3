import { ActionReducerMap } from '@ngrx/store';
import { Post, feedReducer } from './feed.reducer';

export interface AppState {
  feed: Post[];
}

export const appReducers: ActionReducerMap<AppState> = {
  feed: feedReducer
};
