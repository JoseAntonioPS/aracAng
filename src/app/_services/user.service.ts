import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const API_URL = 'http://localhost:8081/test/';
const API = 'http://localhost:8081/';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  httpOptions = {
    headers: new HttpHeaders({ 
      'Content-Type': 'application/json'})
  };

  constructor(private http: HttpClient) { }

  getPublicContent(): Observable<any> {
    return this.http.get(API_URL + 'all', { responseType: 'text' });
  }

  getUserBoard(): Observable<any> {
    return this.http.get(API_URL + 'user', { responseType: 'text' });
  }

  getModeratorBoard(): Observable<any> {
    return this.http.get(API_URL + 'mod', { responseType: 'text' });
  }

  getAdminBoard(): Observable<any> {
    return this.http.get(API_URL + 'admin', { responseType: 'text' });
  }

  changeEma(uname: String, ema: String){
    return this.http.post(API + "changeEmail?username=" + uname +"&email=" + ema, this.httpOptions);
  }
  changePass(uname: String, pass: String){
    return this.http.post(API + "changePassword?username=" + uname +"&password=" + pass, this.httpOptions);
  }
}