import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-contact',
  imports: [RouterLink],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class ContactComponent {
  description = 'Đây là trang liên hệ';
  email = 'example@example.com';
}
