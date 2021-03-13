import { Component, OnInit } from '@angular/core';
import {CategoriesService} from '../categories.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
  newCategoryName = '';
  categoriesList$ = this.categoriesService.categories$;

  constructor(private categoriesService: CategoriesService) { }

  ngOnInit(): void {
  }

  onAddNewCategory(name: string): void {
    this.categoriesService.newCategory$.next(name);
    this.newCategoryName = '';
  }

  onCategoryClick(categoryID: string): void {
    this.categoriesService.activeCategory$.next(categoryID);
  }

}
