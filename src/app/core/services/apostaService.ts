import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { log } from 'util';
import { Customer } from '../models/Customer';
import { Bet } from '../models/Bet';

const API_URL = 'http://localhost:8080/betwin-admin/api/v1/bets';
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