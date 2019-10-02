import { Component, OnInit } from '@angular/core';
import { ProductRepository } from 'src/app/modelss/product.repository';
import { Product } from 'src/app/modelss/product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  constructor(private productRepository: ProductRepository) { }

  ngOnInit() {
  }

  gerProducts(): Product[] {
    return this.productRepository.getProducts();
  }

  deleteProduct(p: Product) {
    this.productRepository.deleteProduct(p);
  }

}
