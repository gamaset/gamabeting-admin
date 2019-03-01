import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthLoginRequest } from './AuthLoginRequest';
import { SignUpRequest } from './SignUpRequest';
import { AuthLoginResponse } from './AuthLoginResponse';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
 
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
 

@Injectable({
  providedIn: 'root'
})
export class AuthService {
 
  private loginUrl = `${environment.BASE_URL}/api/v1/auth/signin`;
  private signupUrl = `${environment.BASE_URL}/api/v1/auth/signup`;
 
  constructor(private http: HttpClient) {
  }
 
  // JwtResponse(accessToken,type,username,authorities)
  attemptAuth(credentials: AuthLoginRequest): Observable<AuthLoginResponse> {
    return this.http.post<AuthLoginResponse>(this.loginUrl, credentials, httpOptions);
  }
 
  // SignUpInfo(name,username,email,role,password)
  signUp(info: SignUpRequest): Observable<string> {
    return this.http.post<string>(this.signupUrl, info, httpOptions);
  }
}