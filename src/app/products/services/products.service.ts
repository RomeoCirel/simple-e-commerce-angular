import { Injectable } from '@angular/core';
import {PRODUCT_LIST, ProductModel, ProductsList} from "../products.types";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }


  getProducts(): ProductsList {
    return [... PRODUCT_LIST]
  }

  getProductById(id:string): ProductModel | null {
    return PRODUCT_LIST.find(item => item.id === id) ?? null
  }

}
