import { Injectable } from '@angular/core';

const NGCONCEPTS = [
       "Component",
        "Routing",
        "HttpClientModule",
        "Pipes",
        "Structural Directives - *ngFor, *ngIf",
        "attribute Directives - [ngClass],[ngStyle]",
        "Singleton Services",
        "Component Services",
        "Component Interaction",
        "Rxjs Observables",
        "CSS - Bootstrap",
        "Parent-Child Communication",
];
const FTELIST = [
        "Handling - if route is not exist - Page Not found page",
        "Filter order by Name",
        "Filter orders List between two dates",
        "Filter by Name + by Dates",
        "Expandable view of table rows"
];

const TECHLIST = [
  "Angular v5",
  "Bootstrap v4",
  "TypeScript v2"
]

@Injectable()
export class HomeDataService {

  constructor() { }
  /**
   * Methods to return Mock data
   */
  getAngularConcepts(): Array<string>{
    return NGCONCEPTS;
  }
  getFeaturesList(): Array<string>{
    return FTELIST;
  }
  getTechnologyList(): Array<string>{
    return TECHLIST;
  }

}
