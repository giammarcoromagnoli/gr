import { Component } from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'app-product-list',
  imports: [],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
})
export class ProductListComponent {
  products: Array<Product> = [
    { id: 1, title: 'product 1' },
    { id: 2, title: 'product 2' },
    { id: 3, title: 'product 3' },
    { id: 4, title: 'product 4' },
  ];
}
