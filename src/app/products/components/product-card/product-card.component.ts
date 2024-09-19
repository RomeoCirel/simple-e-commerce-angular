import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ProductModel} from "../../products.types";
import {CurrencyPipe} from "@angular/common";
import {faCartPlus, faEye} from "@fortawesome/free-solid-svg-icons";
import {FaIconComponent} from "@fortawesome/angular-fontawesome";

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [
    CurrencyPipe,
    FaIconComponent
  ],
  templateUrl: './product-card.component.html',
  styles: ``
})
export class ProductCardComponent {
  @Input() product!: ProductModel;

  @Output() addToCart: EventEmitter<ProductModel> = new EventEmitter<ProductModel>();
  @Output() goToProductView: EventEmitter<string> = new EventEmitter<string>();

  onAddToCart(product: ProductModel) {
    this.addToCart.emit(product);
  }

  onGoToProductView(productId: string) {
    this.goToProductView.emit(productId);
  }

  protected readonly faCartPlus = faCartPlus;
  protected readonly faEye = faEye;
}
