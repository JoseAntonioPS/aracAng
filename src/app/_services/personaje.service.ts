import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})


export class PersonajeService {

  private getP = 'http://localhost:8081/getPersonajes';

  httpOptions = {
    headers: new HttpHeaders({ 
      'Content-Type': 'application/json'})
  };

  constructor(private http: HttpClient) { }

  getPersonajes(){
    return this.http.get(this.getP, this.httpOptions);
  }
}
