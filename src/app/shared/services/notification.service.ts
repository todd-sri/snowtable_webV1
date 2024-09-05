import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  private notificationSubject = new BehaviorSubject<string>('');

  constructor() {}

  showNotification(message: string) {
    this.notificationSubject.next(message);
  }

  getNotification(): Observable<string> {
    return this.notificationSubject.asObservable();
  }
  
}
