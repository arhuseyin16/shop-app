import { Injectable, OnInit } from '@angular/core';
import { Category } from './category.model';
import { RestService } from './rest.service';

@Injectable()
export class CategoryRepository implements OnInit {
    private categories: Category[] = [];
    constructor(private restService: RestService) {

        this.restService.getCategories().subscribe(category => {
            this.categories = category;
        });
    }

    // tslint:disable-next-line: contextual-lifecycle
    ngOnInit() {

    }

    getCategoriesId(id: number): Category {
        return this.categories.find(c => c.id == id);
    }

    getCategories(): Category[] {
        return this.categories;
    }

    saveCategory(c: Category) {
        if ( c.id == null || c.id === 0) {
            this.restService.addCategory(c).subscribe(p => this.categories.push(p));
        } else {
            this.restService.updateCategory(c)
                    .subscribe(() => {
                        this.categories.splice(this.categories.findIndex(p => p.id === c.id), 1, c);
                    });
        }
    }

    deleteCategory(c: Category) {
        this.restService.deleteCategory(c)
                    .subscribe(() => {
                        this.categories.splice(this.categories.findIndex(p => p.id == c.id), 1);
                    });
    }
}