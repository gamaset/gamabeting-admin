import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';

const API_URL = `${environment.BASE_URL}/api/v1/event-types`;
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root',
})
export class EventTypeService {


  constructor(private httpClient: HttpClient) { }

  listEventTypes() {
    return this.httpClient.get(`${API_URL}`, httpOptions);
  }
  updateStatus(eventTypeId, status) {
    return this.httpClient.patch(`${API_URL}/${eventTypeId}`, {status}, httpOptions);
  }

}