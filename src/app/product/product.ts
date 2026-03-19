import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-add-product',
  imports: [ReactiveFormsModule],
  templateUrl: './add-product.html',
})
export class AddProduct {
  productForm: FormGroup;

  loading = false;
  error = '';
  success = '';

  constructor(
    private fb: FormBuilder,
    private http: HttpClient
  ) {
    this.productForm = this.fb.group({
      name: ['', Validators.required],
      price: [0, [Validators.required, Validators.min(1)]],
    });
  }

  submitForm() {
    if (this.productForm.invalid) return;

    this.loading = true;
    this.error = '';
    this.success = '';

    this.http.post('http://localhost:3000/products', this.productForm.value)
      .subscribe({
        next: () => {
          this.loading = false;
          this.success = 'Thêm sản phẩm thành công';
          this.productForm.reset();
        },
        error: () => {
          this.loading = false;
          this.error = 'Có lỗi xảy ra';
        },
      });
  }
}