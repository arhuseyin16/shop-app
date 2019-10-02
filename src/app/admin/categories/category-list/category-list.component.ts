import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/modelss/category.model';
import { CategoryRepository } from 'src/app/modelss/catogory.repository';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {

  constructor(private categoryRepository: CategoryRepository) { }

  ngOnInit() {
  }

  gerCategories(): Category[] {
    return this.categoryRepository.getCategories();
  }

  deleteCategory(c: Category) {
    this.categoryRepository.deleteCategory(c);
  }
}
