import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CategoryRepository } from 'src/app/modelss/catogory.repository';
import { Category } from 'src/app/modelss/category.model';

@Component({
  selector: 'category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {

  public selectedCategry: Category = null;
  @Output() category = new EventEmitter<Category>();

  constructor(private categoryRepository: CategoryRepository) { }

  ngOnInit() {
  }

  get categories(): Category[] {
    return this.categoryRepository.getCategories();
  }

  changeCategory(newCategory?: Category) {
    this.selectedCategry = newCategory;
    this.category.emit(newCategory);
  }
}
