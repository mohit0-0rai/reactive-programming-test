import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error',
  template: `
  <div class="jumbotron">
    <h1 class="display-4">Oops!</h1> <br/>
    <h2 class="display-5">404 not found</h2>
  </div>
  `,
  styles: [`
    div {
      width: 44%;
      margin-left: 28%;
    }
  `]
})
export class ErrorComponent {
}
