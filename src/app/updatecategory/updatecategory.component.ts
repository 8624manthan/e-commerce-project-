import { Component, OnInit } from '@angular/core';
import { Category } from '../category';
import { CategoryService } from '../category.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-updatecategory',
  templateUrl: './updatecategory.component.html',
  styleUrls: ['./updatecategory.component.css']
})
export class UpdatecategoryComponent implements OnInit{

  category:Category=new Category();
  categoryId!:number;

constructor(private categoryService:CategoryService,
  private router: Router,
  private route:ActivatedRoute){}

  ngOnInit(): void {
   this.categoryId=this.route.snapshot.params['categoryId'];
   this.categoryService.getCategoryById(this.categoryId).subscribe(data =>{
   this.category =data;
   },
   error=>console.log(error));
  }


  onSubmit()
  {
this.categoryService.updateCategory(this.categoryId,this.category).subscribe(data=>{
  console.log(data);
  this.goToCategoryList();
},
error=>console.log(error));
  }

  goToCategoryList()
  {
    this.router.navigate(['/get-category']);
  }


}
