import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Order } from './order.model';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http: HttpClient) { }
  readonly baseURL = 'http://localhost:3000/order';
  insertOrder( order: Order) {
    return this.http.post(this.baseURL, order);
  }
  getuserorder(cemail: string) {
    return this.http.get('http://localhost:3000/userorder' + `/${cemail}`);
  }
}
