import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface GuitarProduct {
  id: number;
  name: string;
  type: string;
  price: string;
  image: string;
  label: string;
}

@Component({
  selector: 'app-product-list',
  imports: [RouterLink],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
})
export class ProductList {
  protected readonly products: GuitarProduct[] = [
    {
      id: 1,
      name: 'Les Paul Standard',
      type: 'Electric guitar',
      price: '$2,499',
      image: 'assets/gibsonlespaul.jpg',
      label: 'Best seller',
    },
    {
      id: 2,
      name: 'Player Stratocaster',
      type: 'Electric guitar',
      price: '$899',
      image: 'assets/fenderstrato.jpg',
      label: 'New arrival',
    },
    {
      id: 3,
      name: 'SG Standard',
      type: 'Electric guitar',
      price: '$1,799',
      image: 'assets/gibsonsg.jpg',
      label: 'Limited stock',
    },
  ];
}
