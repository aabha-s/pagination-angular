import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'paginationApp';
  collection :string[] = [];
  p = 1;
  constructor(){
    for (let i = 1; i <= 50; i++) {
      this.collection.push(`item ${i}`);
    }
  }
}
