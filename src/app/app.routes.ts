import { Routes } from '@angular/router';
import { ProductListComponent } from './products/pages/product-list/product-list.component';
import {ProductViewComponent} from "./products/pages/product-view/product-view.component";

export const routes: Routes = [
  { path: '', component: ProductListComponent },
  {path: 'product/:id', component: ProductViewComponent}
];

