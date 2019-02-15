import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { log } from 'util';
import { Customer } from '../models/Customer';

const API_URL = 'http://localhost:8080/betwin-admin/api/v1/customers';
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
  
  createCustomer(customer: Customer) {
    return this.httpClient.post(`${API_URL}`, customer, httpOptions);    
  }

}