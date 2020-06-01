import { Component, OnInit } from '@angular/core';
import { PersonajeService } from '../_services/personaje.service';
import { async } from '@angular/core/testing';

@Component({
  selector: 'app-personaje',
  templateUrl: './personaje.component.html',
  styleUrls: ['./personaje.component.css']
})
export class PersonajeComponent implements OnInit {
  constructor(private personajeService: PersonajeService) { }

  avatar = "assets/Avatar";
  personaje;
  numPersonajes;
  personajeList;
  imagen1;
  imagen2;
  imagen3;
  imagen4;
  imagen5;
  imagen6;
  imagen7;
  imagen8;

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
     this.personajeList.sort((a, b) => b.disen.length - a.disen.length).slice(0, 3);
     this.imagen1 = this.avatar + this.personajeList[0].imagen;
     this.imagen2 = this.avatar + this.personajeList[1].imagen;
     this.imagen3 = this.avatar + this.personajeList[2].imagen;
     this.imagen4 = this.avatar + this.personajeList[3].imagen;
     this.imagen5 = this.avatar + this.personajeList[4].imagen;
     this.imagen6 = this.avatar + this.personajeList[5].imagen;
     this.imagen7 = this.avatar + this.personajeList[6].imagen;
     this.imagen8 = this.avatar + this.personajeList[7].imagen;
     console.log(this.personajeList);
   });

  }
}
