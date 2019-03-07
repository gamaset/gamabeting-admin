import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';

const API_URL = `${environment.BASE_URL}/api/v1/wallet-balances`;
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root',
})
export class WalletBalanceService {


  constructor(private httpClient: HttpClient) { }

  // listWalletsByAgentId(agentId: number, status) {
  //   return this.httpClient.get(`${API_URL}/api/v1/agents/${agentId}/wallets?status=${status}`, httpOptions);
  // }
  listWallets(status) {
    return this.httpClient.get(`${API_URL}?status=${status}`, httpOptions);
  }
  listByBalanceId(balanceId) {
    return this.httpClient.get(`${API_URL}/${balanceId}/transactions`, httpOptions);
  }

}