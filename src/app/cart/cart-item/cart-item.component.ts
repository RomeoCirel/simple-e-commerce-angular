import {Component, EventEmitter, Input, Output} from '@angular/core';
import {CurrencyPipe} from "@angular/common";
import {faClose, faMinus, faPlus, faTrash} from "@fortawesome/free-solid-svg-icons";
import {FaIconComponent} from "@fortawesome/angular-fontawesome";
import {CartItem} from "../cart-service.service";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-cart-item',
  standalone: true,
  imports: [
    CurrencyPipe,
    FaIconComponent,
    FormsModule
  ],
  templateUrl: './cart-item.component.html',
  styles: ``
})
export class CartItemComponent {
  @Input() item: CartItem = {} as CartItem;

  @Output() deleteProduct: EventEmitter<string> = new EventEmitter<string>();
  @Output() addQuantity: EventEmitter<string> = new EventEmitter<string>();
  @Output() removeQuantity: EventEmitter<string> = new EventEmitter<string>();

  addQuantityEvent() {
    this.addQuantity.emit(this.item.product.id);
  }

  removeQuantityEvent() {
    this.removeQuantity.emit(this.item.product.id);
  }

  deleteProductEvent() {
    this.deleteProduct.emit(this.item.product.id);
  }

  protected readonly faClose = faClose;
  protected readonly faMinus = faMinus;
  protected readonly faPlus = faPlus;
}
