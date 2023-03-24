import { Component } from '@angular/core';

// any "component" in angular creates a reusable html tag in html doc
// selector is a name of that reusable tag in index.html <app-root></app-root>
// to filled this tag with proper html we can create our own html file, or use templateURL to indicate html file needed
// to add our own inline template use 'template'
// styles talk for itself
// important to add prefix to the name of the component, like app-root, cause root may exist in html doc already, we can change prefix in angular.json (hinv)
@Component({
  selector: 'hinv-root',
  templateUrl: './app.component.html',
  // template: `<h1>hello world from inline template</h1>
  //   <p>to make few lines use revers commas</p>`,
  styleUrls: ['./app.component.scss'],
  // styles: [
  //   `
  //     h1 {
  //       color: blue;
  //     }
  //   `,
  // ],
})
export class AppComponent {
  title = 'hotelinventoryapp';

  role = 'Admin';
}
