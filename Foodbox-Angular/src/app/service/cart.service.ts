import { HttpClient } from '@angular/common/http';
import { Cart } from './../model/cart';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  public cartItemList:any=[]
  public productList = new BehaviorSubject<any>([]);
  public cart:Cart;
  private baseURL = "http://localhost:8090/carts";
  constructor(private httpClient:HttpClient) { }

  getProduct(){
    return this.productList.asObservable();
  }

  addToCart(cart:any):Observable<any>{
    this.cartItemList.push(cart);
    this.productList.next(this.cartItemList);
    this.getTotalPrice(); 
    return this.httpClient.post(`${this.baseURL}`, cart);
  }
  
  getTotalPrice() :number{
    let grandTotal = 0;
    this.cartItemList.map((a:any)=>{
      console.log('getTot a.price '+a.price);
      grandTotal += a.price;
    })
    return grandTotal;
  }

  getCartItemList():Observable<Cart[]>{
    return this.httpClient.get<Cart[]>(`${this.baseURL}`);
  }

  deleteItem(id:any):Observable<Cart>{
    return this.httpClient.delete<Cart>(`${this.baseURL}/${id}`);
  }

  deleteAllCart():Observable<Object>{
    return this.httpClient.delete<Cart[]>(`${this.baseURL}`);
  }

  lessOneCart(id:any,cart:Cart):Observable<Object>{
    return this.httpClient.put<Cart>(`${this.baseURL}/minus/${id}`,cart);
  }
  addOneCart(id:any,cart:Cart):Observable<Object>{
    return this.httpClient.put<Cart>(`${this.baseURL}/add/${id}`,cart);
  }
}
