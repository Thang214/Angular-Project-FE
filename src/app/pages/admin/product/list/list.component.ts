import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { Product } from '../../../../interface/product-list';
import { RouterLink } from '@angular/router';
import axios from 'axios';
import { ToastrService } from 'ngx-toastr';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ProductListComponent implements OnInit {
  baseURL = 'http://localhost:2202/api/v1/products';
  display: boolean = true;
  products: Product[] = [];
  initialProducts: Product[] = []; // Save the initial list of products
  toastr = inject(ToastrService);

  async onHandleRemove(_id: number) {
    const confirm = window.confirm('Bạn có chắc muốn xóa không?');
    if (confirm) {
      try {
        await axios.delete(`${this.baseURL}/${_id}`);
        const newProducts = this.products.filter(
          (product) => product._id !== _id
        );
        this.products = newProducts;
        this.toastr.success('Xóa thành công');
      } catch (error) {
        this.toastr.error('Xóa thất bại');
      }
    }
  }

  async ngOnInit() {
    try {
      const { data } = await axios.get(this.baseURL);
      this.products = data;
      this.initialProducts = data; // Save the initial list of products
      this.toastr.success('Lấy dữ liệu thành công!');
    } catch (error) {
      this.toastr.error('Lấy dữ liệu thất bại!');
    }
  }

  // Filter
  private _filterValue = '';

  get filterValue(): string {
    return this._filterValue;
  }

  set filterValue(value: string) {
    this._filterValue = value;
    this.currentPage = 1; // Reset the current page
    this.filter();
  }

  filter() {
    // Filter from the initial list of products
    this.products = this.initialProducts.filter((p) =>
      p.title.toLowerCase().includes(this.filterValue.toLowerCase())
    );
  }

  // Pagination
  pageSize = 2; // Number of items per page
  currentPage = 1; // Current page

  get totalPages(): number {
    return Math.ceil(this.initialProducts.length / this.pageSize);
  }

  get paginatedProducts(): Product[] {
    const start = (this.currentPage - 1) * this.pageSize;
    return this.initialProducts.slice(start, start + this.pageSize);
  }

  nextPage(): void {
    this.currentPage = Math.min(this.currentPage + 1, this.totalPages);
  }

  previousPage(): void {
    this.currentPage = Math.max(this.currentPage - 1, 1);
  }
}
