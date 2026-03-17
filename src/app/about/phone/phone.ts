import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-phone',
  imports: [ RouterLink],
  templateUrl: './phone.html',
  styleUrl: './phone.css',
})
export class PhoneComponent {
  phone: string = '0123456789';
}