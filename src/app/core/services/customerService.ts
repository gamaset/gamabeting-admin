import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CustomerModel } from '../models/CustomerModel';
import { environment } from '../../../environments/environment';

const API_URL = `${environment.BASE_URL}/api/v1/customers`;
const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  
  
  constructor(private httpClient: HttpClient) { }


  listCustomers() {
    return this.httpClient.get(`${API_URL}`, httpOptions);    
  }
  
  createCustomer(customer: CustomerModel) {
    return this.httpClient.post(`${API_URL}`, customer, httpOptions);    
  }

}