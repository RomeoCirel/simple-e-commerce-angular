import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {ProductsList} from "./products/products.types";
import {ProductsService} from "./products/services/products.service";
import {CartServiceService} from "./cart/cart-service.service";
import {CartComponent} from "./cart/cart/cart.component";
import {NgForOf, NgIf} from "@angular/common";
import {ProductCardComponent} from "./products/components/product-card/product-card.component";
import {faCartShopping} from "@fortawesome/free-solid-svg-icons";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FontAwesomeModule, CartComponent, NgForOf, NgIf, ProductCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'simple-e-commerce-angular';

  public products: ProductsList = [];
  public showCart: boolean = false

  constructor(
    private productsService: ProductsService,
    private cartService: CartServiceService
  ) {}

  public toggleShowCart() {
    this.showCart = !this.showCart;
  }

  protected readonly faCartShopping = faCartShopping;
}
