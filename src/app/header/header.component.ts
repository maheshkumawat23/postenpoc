import { Component, OnInit } from '@angular/core';
import { HeaderService } from './header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: [HeaderService]
})
export class HeaderComponent implements OnInit {
  public logoSrc : string;
  public menus : Array<any>;
  public dropDownData : Array<string>;

  constructor(public _HS : HeaderService ) {
       this.logoSrc = "../assets/posten_logo.png";
   }

  ngOnInit() {
    this.inintalizeData();
  }
  /**
   * Fullfills component data set menu and dropDownData from headerService
   * @param {void} 
   * returns : void
   */
  inintalizeData() : void {
    this.menus = this._HS.getMenus();
    this.dropDownData = this._HS.getDropDownData();
  }

}
