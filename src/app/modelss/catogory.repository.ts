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
        return this.categories.find(c => c.id === id);
    }

    getCategories(): Category[] {
        return this.categories;
    }
}