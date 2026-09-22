import { Routes } from '@angular/router';
import { Home } from './home/home.component';
import { ProductDetails } from './product-details/product-details.component';
import { ProductList } from './product-list/product-list.component';

export const routes: Routes = [
	{ path: '', component: Home },
	{ path: 'products', component: ProductList },
	{ path: 'products/:id', component: ProductDetails },
	{ path: '**', redirectTo: '' },
];
