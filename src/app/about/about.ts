import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class AboutComponent {
  name = 'Nguyen Van A';
  age = 25;
}
