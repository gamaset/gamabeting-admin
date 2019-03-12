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
    let url;
    if(status){
      url = `${API_URL}?status=${status}`;
    }else{
      url = `${API_URL}`;
    }
    
    return this.httpClient.get(url, httpOptions);
  }
  listByBalanceId(balanceId) {
    return this.httpClient.get(`${API_URL}/${balanceId}/transactions`, httpOptions);
  }

}