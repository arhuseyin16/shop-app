import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/modelss/product.model';
import { ProductRepository } from 'src/app/modelss/product.repository';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  editing: boolean = false;
  product: Product = new Product();
  constructor(private activeRoute: ActivatedRoute,
              private productRepository: ProductRepository,
              private router: Router ) {}

  ngOnInit() {
    this.editing = this.activeRoute.snapshot.params['mode'] === 'edit';
    if (this.editing) {
      const pId = this.activeRoute.snapshot.params['id'];
      this.product = this.productRepository.getProductId(pId);
    }
  }

  save(form: NgForm) {
    this.productRepository.saveProduct(this.product);
    this.router.navigateByUrl('/admin/main/products');
  }

}
