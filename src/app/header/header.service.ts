import { Injectable } from '@angular/core';
import { Menu } from '../models/menu';

//Menus Mock Data
const MENUS : Menu[] = [
  { "id": 1, "name":"Home", "link":"/home"},
  { "id": 2, "name":"Track Parcels", "link":"/parcels"}
];

//DropDown Mock Data
const DROPDOWNDATA : Array<string> = [
    "Change of Address",
    "Temporary redirection of Post"
];

@Injectable()
export class HeaderService {

 constructor() {}

 /**
  * @param{void}
  * Returns Menus Mock Data
  */
  getMenus() : Menu[] {
    return MENUS;
  }

/**
 * @param{void}:
 * Returns DropDown Mock Data
 */
  getDropDownData() : Array<string> {
    return DROPDOWNDATA;
  }


}
