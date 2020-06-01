import { Component, OnInit, Input } from '@angular/core';
import { TokenStorageService } from '../_services/token-storage.service';
import { DesignService } from '../_services/design.service';

@Component({
  selector: 'app-des-inf',
  templateUrl: './des-inf.component.html',
  styleUrls: ['./des-inf.component.css']
})
export class DesInfComponent implements OnInit {

  perTemp;
  perTemp2;
  aux = false;
  ids;

  constructor(private tokenStorageService: TokenStorageService, private designService: DesignService) { }

  ngOnInit() {
    this.perTemp2 = this.tokenStorageService.getPerTemp2();
    this.tokenStorageService.perTemp2("");
    this.perTemp = this.tokenStorageService.getPerTemp();
    this.ids = this.perTemp.id;
    this.tokenStorageService.perTemp("");
    if(this.perTemp2){
      this.aux = true;
    }
  }
}
