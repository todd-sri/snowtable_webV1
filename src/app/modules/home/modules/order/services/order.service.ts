import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

interface Order {
  id: number;
  tableNumber: number;
  items: { item: string, quantity: number }[];
  customerName: string;
  customerPhone: string;
  status: string; // 'active' or 'inactive'
}

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private apiUrl = 'https://snowtable.in/ordersgetapi/orddetails'; // Replace with your API URL

  constructor(private http: HttpClient) {}

  getOrders(): Observable<any[]> {
    const resUuid = localStorage.getItem('res_uuid');
    if (resUuid) {
      const params = new HttpParams().set('res_uuid', resUuid);
      return this.http.get<any[]>(this.apiUrl, { params });
    } else {
      return of([]);
    }
  }

  updateOrderStatus(orderId: number, status: string): Observable<any> {
    return this.http.patch(`${this.apiUrl}/${orderId}`, { status });
  }
}
