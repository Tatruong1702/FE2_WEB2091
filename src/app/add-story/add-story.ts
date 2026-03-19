import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-add-story',
  imports: [ReactiveFormsModule],
  templateUrl: './add-story.html',
})
export class AddStory {
  addForm: FormGroup;

  loading = false;
  error = '';
  success = '';

  constructor(
    private fb: FormBuilder,
    private http: HttpClient
  ) {
    this.addForm = this.fb.group({
      title: ['', Validators.required], // validate
      author: [''],
      views: [0],
    });
  }

  submitForm() {
    if (this.addForm.invalid) return; // chặn submit

    this.loading = true;
    this.error = '';
    this.success = '';

    this.http.post('http://localhost:3000/stories', this.addForm.value)
      .subscribe({
        next: () => {
          this.loading = false;
          this.success = 'Thêm truyện thành công';
          this.addForm.reset();
        },
        error: () => {
          this.loading = false;
          this.error = 'Có lỗi xảy ra';
        },
      });
  }
}