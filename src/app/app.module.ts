import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CreateConducteurComponent } from './conducteur/create-conducteur/create-conducteur.component';
import { UpdateConducteurComponent } from './conducteur/update-conducteur/update-conducteur.component';
import { ConducteurListComponent } from './conducteur/conducteur-list/conducteur-list.component';
import { ConducteurDetailsComponent } from './conducteur/conducteur-details/conducteur-details.component';
import { CreateVehiculeComponent } from './vehicule/create-vehicule/create-vehicule.component';
import { UpdateVehiculeComponent } from './vehicule/update-vehicule/update-vehicule.component';
import { VehiculeListComponent } from './vehicule/vehicule-list/vehicule-list.component';
import { VehiculeDetailsComponent } from './vehicule/vehicule-details/vehicule-details.component';
import {FormsModule} from '@angular/forms';
import {AppRoutingModule} from './app.routing.module';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    CreateConducteurComponent,
    UpdateConducteurComponent,
    ConducteurListComponent,
    ConducteurDetailsComponent,
    CreateVehiculeComponent,
    UpdateVehiculeComponent,
    VehiculeListComponent,
    VehiculeDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
