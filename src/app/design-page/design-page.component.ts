import { Component, OnInit } from '@angular/core';
import { DesignService } from '../_services/design.service';
import { TokenStorageService } from '../_services/token-storage.service';

@Component({
  selector: 'app-design-page',
  templateUrl: './design-page.component.html',
  styleUrls: ['./design-page.component.css']
})
export class DesignPageComponent implements OnInit {

  constructor(private designService: DesignService, private tokenStorageService: TokenStorageService) { }

  list;
  des;
  numDes;
  perTemp;
  public;
  onlyOne;
  aux;

  ngOnInit() {
    this.character();
    if(this.public){this.getDesigns();}
    else if(this.onlyOne){
      this.aux = this.getDesignsByName(this.perTemp.name);
      this.tokenStorageService.perTemp("");}
  }
  async getDesigns(){
    return await this.designService.getAllDesigns().subscribe((datos:any)=>{
     this.list = datos;
     this.des =  datos;
     this.numDes=Object.entries(this.des).length;
     for(var i=0;i<this.numDes;i++){
      let d:any= this.des[i];
      this.list[i] = d;
    } 
    this.list.sort((a, b) => a.id - b.id).slice(0, 3);
    });
  }

  async getDesignsByName(name: String){
    return await this.designService.getDesignsByPersonaje(name).subscribe((datos:any)=>{
     this.list = datos;
     this.des =  datos;
     this.numDes=Object.entries(this.des).length;
     for(var i=0;i<this.numDes;i++){
      let d:any= this.des[i];
      this.list[i] = d;
    } 
    this.list.sort((a, b) => a.id - b.id).slice(0, 3);
    });
  }

  character(){
    this.perTemp = this.tokenStorageService.getPerTemp();
    if(this.perTemp){
      this.public = false;
      this.onlyOne = true;
    }else{
      this.public = true;
    }

  }

  capture(des:any){
    this.tokenStorageService.perTemp(des);
  }

}
