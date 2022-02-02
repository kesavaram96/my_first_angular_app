import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<h3>Hello world<b> Hello angular</b></h3><app-childapp>
  </app-childapp>`,
  styles: [`h3
  {
    color:blue
  }
  `]
})
export class AppComponent {
  title = 'myfirstapp';
}
