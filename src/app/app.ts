import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  title = 'my-app'; // ko dung const hay let
  fullName = 'Tạ Văn Trường';
  age: number = 21;

  // method: function
  sayHello() {
    console.log('hello ');
    alert('hello ' + this.fullName);
  }
}
