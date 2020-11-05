import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {ConducteurListComponent} from './conducteur/conducteur-list/conducteur-list.component';
import {CreateConducteurComponent} from './conducteur/create-conducteur/create-conducteur.component';
import {UpdateConducteurComponent} from './conducteur/update-conducteur/update-conducteur.component';
import {ConducteurDetailsComponent} from './conducteur/conducteur-details/conducteur-details.component';
import {VehiculeListComponent} from './vehicule/vehicule-list/vehicule-list.component';
import {CreateVehiculeComponent} from './vehicule/create-vehicule/create-vehicule.component';
import {UpdateVehiculeComponent} from './vehicule/update-vehicule/update-vehicule.component';
import {VehiculeDetailsComponent} from './vehicule/vehicule-details/vehicule-details.component';

const routes: Routes = [
  {path: '', redirectTo: 'conducteur', pathMatch: 'full'},
  {path: 'conducteurs', component: ConducteurListComponent},
  {path: 'addconducteur', component: CreateConducteurComponent},
  {path: 'updateconducteur/:id', component: UpdateConducteurComponent},
  {path: 'detailsconducteur/:id', component: ConducteurDetailsComponent},
  {path: 'vehicules', component: VehiculeListComponent},
  {path: 'addvehicule', component: CreateVehiculeComponent},
  {path: 'updatevehicule/:id', component: UpdateVehiculeComponent},
  {path: 'detailsvehicule/:id', component: VehiculeDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
