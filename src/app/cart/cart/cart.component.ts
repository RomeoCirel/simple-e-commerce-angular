import {Component, Input} from '@angular/core';
import {CartItemComponent} from "../cart-item/cart-item.component";
import {CurrencyPipe, NgForOf, NgIf} from "@angular/common";
import {faCartPlus, faShoppingCart, faSpinner, faTrash} from "@fortawesome/free-solid-svg-icons";
import {FaIconComponent} from "@fortawesome/angular-fontawesome";
import {CartServiceService, CartItem} from "../cart-service.service";


@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [
    CartItemComponent,
    NgForOf,
    FaIconComponent,
    CurrencyPipe,
    NgIf
  ],
  templateUrl: './cart.component.html',
  styles: ``
})
export class CartComponent {

  constructor(
    private cartService: CartServiceService
  ) {}

  get items(): CartItem[] {
    return this.cartService.getItems();
  }

  deleteProduct(id: string) {
    this.cartService.removeItem(id);
  }

  addQuantity(id: string) {
    this.cartService.addQuantity(id);
  }

  removeQuantity(id: string) {
    this.cartService.removeQuantity(id);
  }

  get total(): number {
    return this.cartService.getTotal();
  }

  protected readonly faShoppingCart = faShoppingCart;
  protected readonly faTrash = faTrash;

  onClearCart() {
    this.cartService.clearCart();
  }

  protected readonly faCartPlus = faCartPlus;
  protected readonly faSpinner = faSpinner;
}
