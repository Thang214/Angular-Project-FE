import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { IUSER } from '../interface/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiUrl = 'http://localhost:2202/api/v1/auth';
  http = inject(HttpClient);

  register(data: IUSER) {
    return this.http.post(`${this.apiUrl}/signup`, data);
  }
  login(data: IUSER) {
    return this.http.post(`${this.apiUrl}/signin`, data);
  }
}
