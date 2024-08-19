import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http:HttpClient) { }
  API_URL:string='http://localhost:2202/api/v1/categories'

  Get_All_Category=():Observable<any>=>{
    return this.http.get(this.API_URL)
  }
}
