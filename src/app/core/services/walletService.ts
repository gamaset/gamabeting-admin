import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';

const API_URL = `${environment.BASE_URL}/api/v1/wallets`;
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root',
})
export class WalletService {


  constructor(private httpClient: HttpClient) { }

  patchWalletStatus(walletId, status) {
    return this.httpClient.patch(`${API_URL}/${walletId}`, {status} ,httpOptions);
  }

}