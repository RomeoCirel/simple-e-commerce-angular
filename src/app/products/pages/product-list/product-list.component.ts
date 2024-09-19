import {Component, OnInit} from '@angular/core';
import {ProductsService} from "../../services/products.service";
import {ProductModel, ProductsList} from "../../products.types";
import {NgForOf, NgIf} from "@angular/common";
import {ProductCardComponent} from "../../components/product-card/product-card.component";
import {CartComponent} from "../../../cart/cart/cart.component";
import {CartItem, CartServiceService} from "../../../cart/cart-service.service";
import {FaIconComponent} from "@fortawesome/angular-fontawesome";
import {faCartShopping} from "@fortawesome/free-solid-svg-icons";
import {routes} from "../../../app.routes";
import {provideRouter, Router} from "@angular/router";

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [
    NgIf,
    ProductCardComponent,
    NgForOf,
    CartComponent,
    FaIconComponent
  ],
  templateUrl: './product-list.component.html',
  styles: ``
})
export class ProductListComponent implements OnInit {

  public products: ProductsList = [];

  constructor(
    private productsService: ProductsService,
    private cartService: CartServiceService,
    private router: Router
  ) {}


  ngOnInit() {
    this.products = [...this.productsService.getProducts()];
  }

  addToCart(product: ProductModel) {
    this.cartService.addItem(product);
  }

  goToProductView(id:string ): void {
    this.router.navigate(['/product', id])
  }

}
