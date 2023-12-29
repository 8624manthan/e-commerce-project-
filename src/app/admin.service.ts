import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Admin } from './admin';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private addAdmin="http://localhost:8181/api/admin/createadmin";
  private getadmins="http://localhost:8181/api/admin/getAlladmin";
  private getadmById="http://localhost:8181/api/admin/getadminById";
  // private editadmin="http://localhost:8181/api/admin/updateadmin";
  private deladmin="http://localhost:8181/api/admin/deleteadmin";

  constructor(private httpClient:HttpClient){ }

  
  createAdmin(admin:Admin):Observable<Object>
  {
    return this.httpClient.post(`${this.addAdmin}`, admin);
  }
  getAllAdminList():Observable<Admin[]>
  {
    return this.httpClient.get<Admin[]>(`${this.getadmins}`);
  }

  getadminById(adminId:number):Observable<Admin>
  {
    return this.httpClient.get<Admin>(`${this.getadmById}/${adminId}/${adminId}`);
  }

  // updateUser(userId:number, user:User):Observable<Object>
  // {
  //   return this.httpClient.put(`${this.editUser}/${userId}`, user);
  // }

  deleteAdmin(adminId:number):Observable<Object>
  {
    return this.httpClient.delete(`${this.deladmin}/${adminId}`);
  }

}
