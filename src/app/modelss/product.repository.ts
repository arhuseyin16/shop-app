import { Injectable, OnInit } from '@angular/core';
import { Product } from './product.model';
import { RestService } from './rest.service';
import { Category } from './category.model';

@Injectable()
export class ProductRepository implements OnInit {

    private products: Product[] = [];
    constructor(private restService: RestService) {
        this.restService.getProducts().subscribe(products => {
            this.products = products;
        });
    }

    // tslint:disable-next-line: contextual-lifecycle
    ngOnInit() {
        }

    getProductId(id: number): Product {
        return this.products.find(p => p.id == id);
    }

    getProducts(category: Category = null): Product[] {
        if (category) {
        return this.products.filter(p => p.category === category.name);
        } else {
            return this.products;
        }
    }

    saveProduct(product: Product) {
        if ( product.id == null || product.id === 0) {
            this.restService.addProduct(product).subscribe(p => this.products.push(p));
        } else {
            this.restService.updateProduct(product)
                    .subscribe(() => {
                        this.products.splice(this.products.findIndex(p => p.id === product.id), 1, product);
                    });
        }
    }

    deleteProduct(product: Product) {
        this.restService.deleteProduct(product)
                    .subscribe(() => {
                        this.products.splice(this.products.findIndex(p => p.id == product.id), 1);
                    });
    }
}