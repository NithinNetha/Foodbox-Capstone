import { Product } from './../model/product';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject,Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private baseURL = "http://localhost:8090/products";
  constructor(private httpClient: HttpClient) { }

  getProductList():Observable<Product[]>{
    return this.httpClient.get<Product[]>(this.baseURL);
  }
}
