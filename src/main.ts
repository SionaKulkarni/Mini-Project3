import { bootstrapApplication } from '@angular/platform-browser';
import { provideStore } from '@ngrx/store';
import { provideRouter, Routes } from '@angular/router';
import { appReducers } from './app/store/app.state'; //  Now this file exists!
import { AppComponent } from './app/app.component';
import { FeedComponent } from './app/components/feed/feed.component';

const routes: Routes = [
  { path: '', component: FeedComponent },
];

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    provideStore(appReducers) //  Now it works!
  ]
}).catch(err => console.error(err));
