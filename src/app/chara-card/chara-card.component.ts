import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../_services/token-storage.service';
import { DesignService } from '../_services/design.service';

@Component({
  selector: 'app-chara-card',
  templateUrl: './chara-card.component.html',
  styleUrls: ['./chara-card.component.css']
})
export class CharaCardComponent implements OnInit {

  card;
  ruta;
  username;
  name;
  up = false;
  di = false; 
  form: any = {};

  constructor(private tokenStorageService: TokenStorageService, private designService: DesignService) { }

  ngOnInit() {
    this.getChara();
    this.ruta = "assets/" + this.card.imagen
    if (this.tokenStorageService.getToken()) {
      this.username = this.tokenStorageService.getUser().username;}
    this.name = this.card.name;
    console.log(this.card);
  }

  onSubmit(){
    this.designService.postDes(this.username, this.name, this.form).subscribe(
      data => {
        console.log(data);
        this.di = true;
      });
  }

getChara(){
  if(!this.card){
    this.card = this.tokenStorageService.getPerTemp();
  }
  this.tokenStorageService.perTemp(""); 
}

  enableUpload(){
    this.up = true;
  }
  disableUpload(){
    this.up = false;
    this.di = false;
  }
  capture(perso: any){
    this.tokenStorageService.perTemp(perso);
  }
}
