import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class MyserviceService {
  constructor(private http: HttpClient) {}

  getCurrentDate() {
    const d = new Date();
    let fullYear = d.getFullYear();
    return fullYear;
  }

  getPostData() {
    return this.http.get('https://jsonplaceholder.typicode.com/todos/2');
  }
}
