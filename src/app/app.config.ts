import { ApplicationConfig } from '@angular/core';
import { provideStore } from '@ngrx/store';
import { feedReducer } from './store/feed.reducer';

export const appConfig: ApplicationConfig = {
  providers: [provideStore({ feed: feedReducer })]
};
