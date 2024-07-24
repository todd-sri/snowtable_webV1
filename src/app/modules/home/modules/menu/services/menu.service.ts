import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  private apiUrl = 'https://snowtable.in/menuapis/res_menuapi'; // Replace with your actual API endpoint
  private saveAPi = 'https://snowtable.in/menuapis/res_updatemenuapi'
  

  constructor(private http: HttpClient) {}

  getMenuItems(userData: any): Observable<any[]> {
    const resUuid = localStorage.getItem('res_uuid');
    if (resUuid) {
      const params = new HttpParams().set('res_uuid', resUuid);
      return this.http.get<any[]>(this.apiUrl, { params });
    } else {
      return of([]);
    }
  
    
  }
  
  saveMenuItems(items: any) {
    return this.http.post(`${this.saveAPi}`, items);
  }
  
}
