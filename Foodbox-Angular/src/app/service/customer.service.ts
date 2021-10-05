import { Observable } from 'rxjs';
import { Customer } from './../model/customer';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private baseURL="http://localhost:8090/customers";
  constructor(private httpClient:HttpClient) { }

  addCustomer(customer:Customer):Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`,customer);
  }

  customerLogin(loginData:any):Observable<Object>{
    return this.httpClient.post(`${this.baseURL}/${loginData.email}`,loginData);
  }
}
