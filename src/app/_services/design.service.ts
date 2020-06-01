import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DesignService {

  private API = 'http://localhost:8081/';

  httpOptions = {
    headers: new HttpHeaders({ 
      'Content-Type': 'application/json'})
  };

  constructor(private http: HttpClient) { }

  deleteDes(id){
    return this.http.delete(this.API + "designs/" + id, this.httpOptions);
  }

  getDesignsByUsername(uname: String){
    return this.http.get(this.API + 'getDesignsByUser?username='+ uname, this.httpOptions);
  }

  getDesigns(id){
    return this.http.post(this.API + 'usuarios/' + id + "/disenU", this.httpOptions);
  }

  getAllDesigns(){
    return this.http.post(this.API + 'getDesigns', this.httpOptions);
  }

  getDesignsByPersonaje(pers: String){
    return this.http.get(this.API + "getDesignsByPersonaje?name=" + pers, this.httpOptions);
  }

  postDes(uname: String, nam: String, des){
    return this.http.post(this.API + "postDesign?username=" + uname + "&name=" + nam, {
      name: des.name,
      imagen: des.imagen
    },this.httpOptions);

  }

}
