import { Component, OnInit } from '@angular/core';
import { ProductRepository } from '../modelss/product.repository';
import { CategoryRepository } from '../modelss/catogory.repository';
import { Product } from '../modelss/product.model';
import { Category } from '../modelss/category.model';
import { Cart } from '../modelss/cart.model';
import { Router } from '@angular/router';

@Component({
  selector: 'shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  public selectedCategry: Category = null;
  public productsPerPage = 2;
  public selectedPage = 1;
  public selectedProducts: Product[] = [];

  constructor(
        private productRepository: ProductRepository,
        private categoryRepository: CategoryRepository,
        private cart: Cart,
        private router: Router) { }

  ngOnInit() {
  }

  get products(): Product[] {
    let index = (this.selectedPage - 1) * this.productsPerPage;
    // 0*3 = 0
    // 1*3 = 3
    this.selectedProducts = this.productRepository
                                .getProducts(this.selectedCategry);
    return this.selectedProducts
                .slice(index, index + this.productsPerPage);
                // 0,3
                // 3,3
  }

  get pageNumbers(): number[] {
   return Array(Math.ceil(this.productRepository
                    .getProducts(this.selectedCategry).length / this.productsPerPage))
                    .fill(0)
                    .map((a, index) => index + 1);
  }

  changePage(page: number) {
    this.selectedPage = page;
  }

  changePageSize(size: number) {
    this.productsPerPage = size;
    this.changePage(1);
  }

  getCategory(category: Category) {
    this.selectedCategry = category;
  }
}
