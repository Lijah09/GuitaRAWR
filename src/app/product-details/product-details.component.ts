import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { products, GuitarProduct } from '../model/product';
import { CartService } from '../service/cart.service';

@Component({
  selector: 'app-product-details',
  imports: [RouterLink],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css',
})
export class ProductDetails {
  protected readonly product: GuitarProduct | undefined;

  constructor(
    route: ActivatedRoute,
    private readonly router: Router,
    protected readonly cart: CartService,
  ) {
    const productId = Number(route.snapshot.paramMap.get('id'));
    this.product = products.find((item) => item.id === productId);
  }

  protected addToCart(): void {
    if (!this.product) {
      return;
    }

    this.cart.add(this.product);
    this.router.navigate(['/cart']);
  }
}
