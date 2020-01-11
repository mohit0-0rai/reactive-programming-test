import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error',
  template: `
  <div>
    <h1>Oops!</h1> <br/>
    <h2>404 not found.</h2>
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
