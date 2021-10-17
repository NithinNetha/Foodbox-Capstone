import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Purchase } from '../model/purchase';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PurchaseService {
  private baseURL="http://localhost:8090/purchase";

  constructor( private httpClient:HttpClient) { }

  getCustomerOrders(email:string):Observable<Purchase[]>{
    return this.httpClient.get<Purchase[]>(`${this.baseURL}/byEmail/${email}`);
  }
}
