import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {ProductModel} from "../../products.types";
import {ProductsService} from "../../services/products.service";
import {NgIf} from "@angular/common";
import {ActivatedRoute} from "@angular/router";
import {faCartPlus} from "@fortawesome/free-solid-svg-icons";
import {FaIconComponent} from "@fortawesome/angular-fontawesome";

@Component({
  selector: 'app-product-view',
  standalone: true,
  imports: [
    NgIf,
    FaIconComponent
  ],
  templateUrl: './product-view.component.html',
  styles: ``
})
export class ProductViewComponent implements OnInit, OnChanges {
    id!: string | null;

    constructor(
      private router:ActivatedRoute,
      private productService: ProductsService
    ){}

    private findProductById() {
      if(!this.id) return
      const product = this.productService.getProductById(this.id);
      this.product = product ? {...product} : null;
      console.log(this.product)
    }

    ngOnInit() {
      this.id = this.router.snapshot.paramMap.get('id');
      console.log('init', this.id)
      this.findProductById()
    }

    ngOnChanges(changes:SimpleChanges) {
      if (changes['id'] && changes['id'].previousValue !== changes['id'].currentValue ){
        this.findProductById()
      }
    }

  public product: ProductModel | null = {
    id: '1',
    name: 'Product 1',
    price: 100,
    description: 'Description of product 1',
    image: 'https://via.placeholder.com/150',
    ranking: 1
  };


  protected readonly faCartPlus = faCartPlus;
}
