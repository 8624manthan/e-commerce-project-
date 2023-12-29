import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Category } from './category';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private addCategory="http://localhost:8181/api/category/createcategory";
  private getCategorys="http://localhost:8181/api/category/getAllcategory";
  private getcategoryById="http://localhost:8181/api/category/getcategotyById";
  private editCategory="http://localhost:8181/api/category/updatecategory";
  private delCategory="http://localhost:8181/api/category/deletecategory";

  constructor(private httpClient:HttpClient) { }

  createCategory(category:Category):Observable<Object>
  {
    return this.httpClient.post(`${this.addCategory}`,category);
  }

  getAllCategoryList():Observable<Category[]>
    {
      return this.httpClient.get<Category[]>(`${this.getCategorys}`);
    }
  
    getCategoryById(categoryId:number):Observable<Category>
    {
      return this.httpClient.get<Category>(`${this.getcategoryById}/${categoryId}/${categoryId}`);
    }

    updateCategory(categoryId:number, category:Category):Observable<Object>
    {
      return this.httpClient.put(`${this.editCategory}/${categoryId}`, category);
    }
  
    deleteCategory(categoryId:number):Observable<Object>
    {
      return this.httpClient.delete(`${this.delCategory}/${categoryId}`);
    }
}


