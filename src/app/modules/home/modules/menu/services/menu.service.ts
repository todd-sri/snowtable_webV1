import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  private apiUrl = 'http://127.0.0.1:5004//api/data'; // Replace with your actual API endpoint

  constructor(private http: HttpClient) {}

  getMenuItems(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}
