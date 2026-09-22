import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { products } from '../model/product';
import { CartService } from '../service/cart.service';

@Component({
  selector: 'app-product-list',
  imports: [RouterLink],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
})
export class ProductList {
  protected readonly products = products;

  constructor(protected readonly cart: CartService) {}
}
