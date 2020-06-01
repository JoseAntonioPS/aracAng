import { Component, OnInit } from '@angular/core';
import { PersonajeService } from '../_services/personaje.service';
import { TokenStorageService } from '../_services/token-storage.service';

@Component({
  selector: 'app-chara-page',
  templateUrl: './chara-page.component.html',
  styleUrls: ['./chara-page.component.css']
})
export class CharaPageComponent implements OnInit {
  personajeList;
  personaje;
  numPersonajes;
  lista;

  constructor(private personajeService: PersonajeService, private tokenStorageService: TokenStorageService) { }

  ngOnInit() {
    this.getPer();
  }

  async getPer(){
    return await this.personajeService.getPersonajes().subscribe((datos:any)=>{
     this.personajeList = datos;
      this.personaje =  datos;
      this.numPersonajes=Object.entries(this.personaje).length;
      for(var i=0;i<this.numPersonajes;i++){
       let persona:any= this.personaje[i];
       this.personajeList[i] = persona;
     } 
    });
  }

  capture(perso: any){
    this.tokenStorageService.perTemp(perso);
  }

}
