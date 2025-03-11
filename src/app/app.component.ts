import { Component } from '@angular/core';
import { FeedComponent } from './components/feed/feed.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FeedComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'My Angular App';
}
