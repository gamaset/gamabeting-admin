import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';

const API_URL = `${environment.BASE_URL}/api/v1/competitions`;
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root',
})
export class CompetitionService {


  constructor(private httpClient: HttpClient) { }

  listCompetitions() {
    return this.httpClient.get(`${API_URL}`, httpOptions);
  }
  updateStatus(competitionId, status) {
    return this.httpClient.patch(`${API_URL}/${competitionId}`, {status}, httpOptions);
  }

}