import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { Agent } from '../models/Agent';
import { log } from 'util';

const API_URL = 'http://localhost:8080/betwin-admin';
const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root',
})
export class AgentService {
  
  
  constructor(private httpClient: HttpClient) { }


  listAgents() {
    return this.httpClient.get(`${API_URL}/api/v1/agents`, httpOptions);    
  }
  
  createAgent(agent: Agent) {
    return this.httpClient.post(`${API_URL}/api/v1/agents`, agent, httpOptions);    
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError('Something bad happened; please try again later.');
  };

  private extractData(res: Response) {
    console.log('>> extracting data... ');
    
    let body = res;
    if(body){
      return body.json().then(data => {
        console.log('>> data: ', data);
        
        return data;
      })
    }
    return { };
  }
}