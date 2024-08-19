import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule, NgIf } from '@angular/common';
import { Product } from '../../../../interface/product-list';
import { ProductService } from '../../../../services/Product';
import { CategoryService } from '../../../../services/category.service';
import { toast } from 'react-toastify';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-edit',
  standalone: true,
  imports: [FormsModule, NgIf, ReactiveFormsModule, CommonModule],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css',
})
export class ProductEditComponent {
  route = inject(ActivatedRoute);
  toggle: boolean = false;

  router = inject(Router);
  productService = inject(ProductService);
  categoryService = inject(CategoryService);
  id = this.route.snapshot.params['id'];
  categories: any[] = [];
  toastr = inject(ToastrService);

  productForm: FormGroup = new FormGroup({
    title: new FormControl('', [Validators.required]),
    image: new FormControl('', [Validators.required]),
    desc: new FormControl('', [Validators.required]),
    category: new FormControl('', [Validators.required]),
    price: new FormControl(0, [Validators.required, Validators.min(0)]), // Add this line
    isShow: new FormControl(false),
  });

  ngOnInit() {
    this.productService
      .getProductById(this.id)
      .subscribe((res: any) => this.productForm.patchValue(res));
    this.categoryService.Get_All_Category().subscribe((data: any[]) => {
      console.log(data);
      this.categories = data;
    });
  }

  onSubmit() {
    if (this.productForm.invalid) return;

    this.productService
      .updateProductById(this.id, this.productForm.value)
      .subscribe(() => {
        this.router.navigate(['/admin/list']);
        this.toastr.success('Cập nhật sản phẩm thành công!');
      });
  }
}
