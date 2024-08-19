import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import axios from 'axios';
import { Product } from '../../interface/product-list';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css',
})
export class ProductDetailComponent {
  product: Product = {} as Product;
  route = inject(ActivatedRoute);
  constructor(private router: Router) {}
  name: string = '';
  image: string = '';
  price: number = 0;
  category: string = '';
  desc: string = '';
  async ngOnInit(_id: number) {
    try {
      const productId = this.route.snapshot.params['id'];
      const { data } = await axios.get(
        `http://localhost:2202/api/v1/products/${productId}`
      );
      this.product = data;
      console.log(data);
      // alert('Lấy thông tin thành công');
    } catch (error: any) {
      console.error(error.message);
      // alert('Lấy thông tin thất bại')
      this.router.navigate(['/not-found']);
    }
  }
}
