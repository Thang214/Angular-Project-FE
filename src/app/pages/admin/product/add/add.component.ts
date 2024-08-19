import { CommonModule, NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Product } from '../../../../interface/product-list';
import { ProductService } from '../../../../services/Product';
import { CategoryService } from '../../../../services/category.service';

@Component({
  selector: 'app-add',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, NgIf],
  templateUrl: './add.component.html',
  styleUrl: './add.component.css',
})
export class ProductAddComponent {
  router = inject(Router);
  toggle: boolean = false;
  // toggle: boolean = false;
  productService = inject(ProductService);
  categoryService = inject(CategoryService);
  formValidate = inject(FormBuilder);
  categories: any[] = [];
  toastr = inject(ToastrService);

  productForm: FormGroup = new FormGroup({
    title: new FormControl('', [Validators.required]),
    image: new FormControl('', [Validators.required]),
    desc: new FormControl('', [Validators.required]),
    category: new FormControl('', [Validators.required]),
    price: new FormControl(0, [Validators.required,Validators.min(0)]), // Add this line
    isShow: new FormControl(false),
  });

  // categoryService: any;
  ngOnInit() {
    this.categoryService.Get_All_Category().subscribe((data: any[]) => {
      console.log(data);
      this.categories = data;
    });
  }
  onSubmit() {
    if (this.productForm.invalid) return;
    this.productService.create(this.productForm.value).subscribe(() => {
      this.router.navigate(['/admin/list']);
      setTimeout(() => {
        this.toastr.success('Thêm sản phẩm thành công!');
      }, 500);
    });
  }
}
