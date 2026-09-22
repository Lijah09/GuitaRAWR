import { Injectable, computed, signal } from '@angular/core';
import { GuitarProduct } from '../model/product';

export interface CartItem {
  product: GuitarProduct;
  quantity: number;
}

@Injectable({ providedIn: 'root' })
export class CartService {
  private readonly cartItems = signal<CartItem[]>([]);

  readonly items = this.cartItems.asReadonly();
  readonly itemCount = computed(() =>
    this.cartItems().reduce((total, item) => total + item.quantity, 0),
  );
  readonly subtotal = computed(() =>
    this.cartItems().reduce(
      (total, item) => total + this.priceInCents(item.product.price) * item.quantity,
      0,
    ),
  );

  add(product: GuitarProduct): void {
    this.cartItems.update((items) => {
      const existingItem = items.find((item) => item.product.id === product.id);

      if (existingItem) {
        return items.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      }

      return [...items, { product, quantity: 1 }];
    });
  }

  remove(productId: number): void {
    this.cartItems.update((items) =>
      items
        .map((item) =>
          item.product.id === productId
            ? { ...item, quantity: item.quantity - 1 }
            : item,
        )
        .filter((item) => item.quantity > 0),
    );
  }

  clear(): void {
    this.cartItems.set([]);
  }

  formatSubtotal(): string {
    return `$${(this.subtotal() / 100).toLocaleString('en-US', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })}`;
  }

  private priceInCents(price: string): number {
    return Number(price.replace(/[$,]/g, '')) * 100;
  }
}
