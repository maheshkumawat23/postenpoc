import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app.routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { ParcelsComponent } from './parcels/parcels.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SideFilterComponent } from './side-filter/side-filter.component';
import { ParcelContainerComponent } from './parcel-container/parcel-container.component';
import { AddParcelComponent } from './add-parcel/add-parcel.component';

import { FilterPipe} from './pipes/filter.pipe';
import { DateFilterPipe } from './pipes/datefilter.pipe';
import { ParcelDataService } from './services/parcel-data.service';
import { TabsContainerComponent } from './tabs-container/tabs-container.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    ParcelsComponent,
    PageNotFoundComponent,
    FilterPipe,
    DateFilterPipe,
    SideFilterComponent,
    ParcelContainerComponent,
    AddParcelComponent,
    TabsContainerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ParcelDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
