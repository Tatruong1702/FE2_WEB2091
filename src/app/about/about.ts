import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { JsonPipe } from '@angular/common';
@Component({
  selector: 'app-product-form',
  standalone: true,
  imports: [ReactiveFormsModule, JsonPipe],
  templateUrl: './about.html',
})
export class AboutComponent {

  productForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.productForm = this.fb.group({
      name: ['', Validators.required],
      price: [0, Validators.min(1)],
      category: ['']
    });
  }

  get name() {
    return this.productForm.get('name');
  }

  get price() {
    return this.productForm.get('price');
  }

  submitForm() {
    console.log(this.productForm.value);
  }

}