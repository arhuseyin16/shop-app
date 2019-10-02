import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/modelss/category.model';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryRepository } from 'src/app/modelss/catogory.repository';

@Component({
  selector: 'app-category-form',
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.css']
})
export class CategoryFormComponent implements OnInit {

  editing: boolean = false;
  categories: Category = new Category();

  constructor(
            private activeRoute: ActivatedRoute,
            private categoryRepository: CategoryRepository,
            private router: Router) {

              this.editing = activeRoute.snapshot.params['mode'] === 'edit';
              if (this.editing) {
                const pId = activeRoute.snapshot.params['id'];
                this.categories = categoryRepository.getCategoriesId(pId);
              }
   }

  ngOnInit() {
  }

  save(form: NgForm) {
    this.categoryRepository.saveCategory(this.categories);
    this.router.navigateByUrl('/admin/main/categories');
  }

}
