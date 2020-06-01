import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../_services/token-storage.service';
import { Router } from '@angular/router';
import { DesignService } from '../_services/design.service';
import { UserService } from '../_services/user.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  isLoggedIn = false;
  lO = false;
  eE = false;
  eP = false;
  form: any = {};
  username;
  des;
  list;
  numDes;
  di = false;
  di2 = false;
  constructor(private userService:UserService, private tokenStorageService: TokenStorageService, public router: Router, private designService: DesignService) { }

  ngOnInit() {
   this.isLoggedIn= !!this.tokenStorageService.getToken();
   this.username = this.tokenStorageService.getUser().username;
   this.getD(this.username);
  }
  onSubmit(){
    if(this.eE){
      this.userService.changeEma(this.username, this.form.email).subscribe(data => {
        console.log(data);
        this.di = true;
      })
    }else if(this.eP){
        this.userService.changePass(this.username, this.form.password).subscribe(data => {
          console.log(data);
          this.di2 = true;
      })
  }
}
  capture(perso: any){
    this.tokenStorageService.perTemp(perso);
    this.tokenStorageService.perTemp2(this.tokenStorageService.getUser());

  }

  enableEmail(){
    this.di = false;
    this.eP = false
    this.eE = true;
  }
  disableEmail(){
    this.eE = false;
  }
  enablePassword(){
    this.di2 = false;
    this.eE = false
    this.eP = true;
  }
  disablePassword(){
    this.eP = false;
  }

  async getD(name: String){
    return await this.designService.getDesignsByUsername(name).subscribe((datos:any)=>{
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

}
