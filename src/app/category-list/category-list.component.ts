import { Component, OnInit } from '@angular/core';
import { Category } from '../category';
import { CategoryService } from '../category.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit{

  category:Category[] |undefined

  constructor(private categoryService:CategoryService,
    private router:Router) {}

    ngOnInit(): void {
        this.getCategoryList();
    }

  private getCategoryList(){
    this.categoryService.getAllCategoryList().subscribe(data =>{
      this.category=data;
    })

  

 
  }
  updateCategory(categoryId:Number)
  {
    this.router.navigate(['update-category',categoryId])
  }

  deleteCategory(categoryId:number)
  {
    this.categoryService.deleteCategory(categoryId).subscribe(data=>{
      console.log(data);
      this.reloadComponent();
    },
    error=>console.log(error));
  }
   reloadComponent(){
    this.router.routeReuseStrategy.shouldReuseRoute=()=>false;
    this.router.onSameUrlNavigation='reload';
    this.router.navigate(['/get-category']);
  }
}
