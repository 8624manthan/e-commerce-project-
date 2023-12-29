import { Component, OnInit } from '@angular/core';
import { Category } from '../category';
import { CategoryService } from '../category.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-createcategory',
  templateUrl: './createcategory.component.html',
  styleUrls: ['./createcategory.component.css']
})
export class CreatecategoryComponent implements OnInit{

  category:Category=new Category();

  constructor(private categoryService:CategoryService,
     private router:Router){}
  ngOnInit(): void {
      
  }
  saveCategory(){
    this.categoryService.createCategory(this.category).subscribe(data=>{
      console.log(data);
      this.goToCategoryList();
    })
  }

  goToCategoryList()
  {
    // this.router.navigate(['/get-admin'])
    this.router.navigate(['/home']);
  }

    onSubmit()
    {
      this.saveCategory();
      console.log(this.category)
    }
}

