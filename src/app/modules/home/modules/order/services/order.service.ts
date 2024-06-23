import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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
  private apiUrl = 'https://api.example.com/orders'; // Replace with your API URL

  constructor(private http: HttpClient) {}

  getOrders(): Observable<Order[]> {
    // return this.http.get<Order[]>(this.apiUrl).pipe(
    //   map((data: any[]) => data.map(order => ({
    //     id: order.id,
    //     tableNumber: order.tableNumber,
    //     items: order.items,
    //     customerName: order.customerName,
    //     customerPhone: order.customerPhone,
    //     status: order.status
    //   })))
    // );
    return of<any>([
      {
        "id": 1,
        "tableNumber": 12,
        "items": [
          {"item": "Burger", "quantity": 2},
          {"item": "Fries", "quantity": 1},
          {"item": "Soda", "quantity": 2},
          {"item": "Burger", "quantity": 2},
          {"item": "Fries", "quantity": 1},
          {"item": "Soda", "quantity": 2},
          {"item": "Burger", "quantity": 2},
          {"item": "Fries", "quantity": 1},
          {"item": "Soda", "quantity": 2}
        ],
        "customerName": "John Doe",
        "customerPhone": "123-456-7890",
        "status": "active"
      },
      {
        "id": 2,
        "tableNumber": 5,
        "items": [
          {"item": "Pizza", "quantity": 1},
          {"item": "Salad", "quantity": 1}
        ],
        "customerName": "Jane Smith",
        "customerPhone": "987-654-3210",
        "status": "active"
      },
      {
        "id": 3,
        "tableNumber": 8,
        "items": [
          {"item": "Steak", "quantity": 2},
          {"item": "Wine", "quantity": 1},
          {"item": "Cheesecake", "quantity": 1}
        ],
        "customerName": "Mike Johnson",
        "customerPhone": "555-123-4567",
        "status": "active"
      },
      {
        "id": 4,
        "tableNumber": 3,
        "items": [
          {"item": "Pasta", "quantity": 1},
          {"item": "Garlic Bread", "quantity": 1},
          {"item": "Coke", "quantity": 2}
        ],
        "customerName": "Emily Davis",
        "customerPhone": "444-321-8765",
        "status": "active"
      },
      {
        "id": 5,
        "tableNumber": 15,
        "items": [
          {"item": "Fish Tacos", "quantity": 3},
          {"item": "Margarita", "quantity": 1}
        ],
        "customerName": "Chris Brown",
        "customerPhone": "222-555-6666",
        "status": "active"
      },
      {
        "id": 6,
        "tableNumber": 122,
        "items": [
          {"item": "Burger", "quantity": 2},
          {"item": "Fries", "quantity": 1},
          {"item": "Soda", "quantity": 2}
        ],
        "customerName": "John Doe",
        "customerPhone": "123-456-7890",
        "status": "active"
      },
      {
        "id": 7,
        "tableNumber": 55,
        "items": [
          {"item": "Pizza", "quantity": 1},
          {"item": "Salad", "quantity": 1}
        ],
        "customerName": "Jane Smith",
        "customerPhone": "987-654-3210",
        "status": "active"
      },
      {
        "id": 8,
        "tableNumber": 88,
        "items": [
          {"item": "Steak", "quantity": 2},
          {"item": "Wine", "quantity": 1},
          {"item": "Cheesecake", "quantity": 1}
        ],
        "customerName": "Mike Johnson",
        "customerPhone": "555-123-4567",
        "status": "active"
      },
      {
        "id": 7,
        "tableNumber": 39,
        "items": [
          {"item": "Pasta", "quantity": 1},
          {"item": "Garlic Bread", "quantity": 1},
          {"item": "Coke", "quantity": 2}
        ],
        "customerName": "Emily Davis",
        "customerPhone": "444-321-8765",
        "status": "active"
      },
      {
        "id": 5,
        "tableNumber": 15,
        "items": [
          {"item": "Fish Tacos", "quantity": 3},
          {"item": "Margarita", "quantity": 1}
        ],
        "customerName": "Chris Brown",
        "customerPhone": "222-555-6666",
        "status": "active"
      }
    ]
    )
  }

  updateOrderStatus(orderId: number, status: string): Observable<any> {
    return this.http.patch(`${this.apiUrl}/${orderId}`, { status });
  }
}
