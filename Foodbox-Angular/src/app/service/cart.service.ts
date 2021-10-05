import { HttpClient } from '@angular/common/http';
import { Cart } from './../model/cart';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  public cart:Cart;
  public cartItemList:any=[];
  private baseURL = "http://localhost:8090/carts";
  public productList = new BehaviorSubject<any>([]);
  constructor(private httpClient:HttpClient) { }

  addToCart(product:any):Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`,product); 
  }
  
  getCartItemList():Observable<Cart[]>{
    return this.httpClient.get<Cart[]>(`${this.baseURL}`);
  }
}
