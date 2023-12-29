import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private getUsers="http://localhost:8181/api/user/getAllUsers";
  private addUsers="http://localhost:8181/api/user/createUser";
  private getUseById="http://localhost:8181/api/user/getUserById";
  private editUser="http://localhost:8181/api/user/updateUser";
  private delUser="http://localhost:8181/api/user/deleteUser";

  constructor(private httpClient:HttpClient){ }

  
  createUser(user:User):Observable<Object>
    {
      return this.httpClient.post(`${this.addUsers}`, user);
    }

  getAllUserList():Observable<User[]>
    {
      return this.httpClient.get<User[]>(`${this.getUsers}`);
    }
  
    getUserById(userId:number):Observable<User>
    {
      return this.httpClient.get<User>(`${this.getUseById}/${userId}/${userId}`);
    }

    updateUser(userId:number, user:User):Observable<Object>
    {
      return this.httpClient.put(`${this.editUser}/${userId}`, user);
    }
  
    deleteUser(userId:number):Observable<Object>
    {
      return this.httpClient.delete(`${this.delUser}/${userId}`);
    }
}
