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
import {EmpruntDetailsComponent} from './emprunt/emprunt-details/emprunt-details.component';
import {UpdateEmpruntComponent} from './emprunt/update-emprunt/update-emprunt.component';
import {CreateEmpruntComponent} from './emprunt/create-emprunt/create-emprunt.component';
import {EmpruntListComponent} from './emprunt/emprunt-list/emprunt-list.component';

const routes: Routes = [
  {path: '', redirectTo: 'conducteurs', pathMatch: 'full'},
  {path: 'conducteurs', component: ConducteurListComponent},
  {path: 'ajouterconducteur', component: CreateConducteurComponent},
  {path: 'modifierconducteur/:id', component: UpdateConducteurComponent},
  {path: 'detailsconducteur/:id', component: ConducteurDetailsComponent},
  {path: 'vehicules', component: VehiculeListComponent},
  {path: 'ajoutervehicule', component: CreateVehiculeComponent},
  {path: 'modifiervehicule/:id', component: UpdateVehiculeComponent},
  {path: 'detailsvehicule/:id', component: VehiculeDetailsComponent},
  {path: 'emprunt', component: EmpruntListComponent},
  {path: 'ajoutervemprunt', component: CreateEmpruntComponent},
  {path: 'modifieremprunt/:id', component: UpdateEmpruntComponent},
  {path: 'detailsemprunt/:id', component: EmpruntDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
