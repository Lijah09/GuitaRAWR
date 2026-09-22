import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CartService } from '../service/cart.service';

@Component({
  selector: 'app-cart',
  imports: [RouterLink],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
})
export class Cart {
  constructor(protected readonly cart: CartService) {}

  protected decrease(productId: number): void {
    this.cart.remove(productId);
  }
}
