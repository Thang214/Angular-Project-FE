import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Product } from '../../../interface/product-list';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, FormsModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  products: Product[] = [];
  initialProducts: Product[] = []; 
  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
  // Filter
  private _filterValue = '';

  get filterValue(): string {
    return this._filterValue;
  }

  set filterValue(value: string) {
    this._filterValue = value;
    this.filter();
  }

  filter() {
    // Filter from the initial list of products
    this.products = this.initialProducts.filter((p) =>
      p.title.toLowerCase().includes(this.filterValue.toLowerCase())
    );
  }
}
