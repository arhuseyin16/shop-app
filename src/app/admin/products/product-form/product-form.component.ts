import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/modelss/product.model';
import { ProductRepository } from 'src/app/modelss/product.repository';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  editing: boolean = false;
  product: Product = new Product();
  constructor(private activeRoute: ActivatedRoute, private productRepository: ProductRepository) {
    this.editing = activeRoute.snapshot.params['mode'] === 'edit';
    if (this.editing) {
      const pId = activeRoute.snapshot.params['id'];
      this.product = productRepository.getProductId(pId);
    }
   }

  ngOnInit() {
  }

}
