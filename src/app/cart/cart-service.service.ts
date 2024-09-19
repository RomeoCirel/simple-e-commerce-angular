import { Injectable } from '@angular/core';
import {PRODUCT_LIST, ProductModel} from "../products/products.types";

export interface CartItem {
  product: ProductModel;
  quantity: number;
}

@Injectable({
  providedIn: 'root'
})
export class CartServiceService {

  public items: CartItem[] = [];

  constructor() {
    this.items = [];
  }

  addItem(product: ProductModel): void {
    const item = this.items.find(item => item.product.id === product.id);
    if (item) {
      item.quantity++;
    } else {
      this.items.push({product, quantity: 1});
    }
  }

  removeItem(id: string): void {
    this.items = [...this.items.filter(item => item.product.id !== id)];
  }

  getItems(): CartItem[] {
    return this.items;
  }

  getTotal(): number {
    return this.items.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
  }

  clearCart(): void {
    this.items = [];
  }

  addQuantity(id: string): void {
    const item = this.items.find(item => item.product.id === id);
    if (item) {
      item.quantity++;
    }
    console.log(item);
    console.log(this.items);
  }

  removeQuantity(id: string): void {
    const item = this.items.find(item => item.product.id === id);
    if (item && item.quantity > 1) {
      item.quantity--;
    }
  }
}
