import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import axios from 'axios';
import { Product } from '../../../interface/product-list';

@Component({
  selector: 'app-postlist',
  standalone: true,
  imports: [NgFor, RouterLink],
  templateUrl: './postlist.component.html',
  styleUrl: './postlist.component.css',
})
export class PostlistComponent {
  baseURL = 'http://localhost:2202/api/v1/products';
  products: Product[] = [];
  async ngOnInit() {
    try {
      const { data } = await axios.get(this.baseURL);
      console.log(data);
      this.products = data;
    } catch (error) {
      console.log(error);
    }
  }
}
