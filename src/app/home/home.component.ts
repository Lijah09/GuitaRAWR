import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CartService } from '../service/cart.service';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class Home {
  constructor(protected readonly cart: CartService) {}
}
