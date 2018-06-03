import { Component, OnInit } from '@angular/core';
/**
 * Parent Container Component for Side Bar Filter and Parcels List
 * contanis <app-side-filter> and <app-parcels> components
 */
@Component({
  selector: 'app-parcel-container',
  templateUrl: './parcel-container.component.html',
  styleUrls: ['./parcel-container.component.css']
})
export class ParcelContainerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
