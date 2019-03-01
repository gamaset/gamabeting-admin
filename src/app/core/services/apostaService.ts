import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';

const API_URL = `${environment.BASE_URL}/api/v1/bets`;
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root',
})
export class ApostaService {


  constructor(private httpClient: HttpClient) { }

  listarApostas() {
    return this.httpClient.get(`${API_URL}`, httpOptions);
  }

  buscarAposta(betId) {
    return this.httpClient.get(`${API_URL}/${betId}`, httpOptions);
  }

  atualizaStatus(betId, betStatus) {
    return this.httpClient.patch(`${API_URL}/${betId}`, { status: betStatus }, httpOptions);
  }

}