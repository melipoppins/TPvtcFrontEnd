import {Component, Input, OnInit, Output} from '@angular/core';
import {Observable} from 'rxjs';
import {Router} from '@angular/router';
import {VehiculeService} from '../vehicule.service';
import {Vehicule} from '../vehicule';

@Component({
  selector: 'app-vehicule-list',
  templateUrl: './vehicule-list.component.html',
  styleUrls: ['./vehicule-list.component.css']
})
export class VehiculeListComponent implements OnInit {
  vehicule: Vehicule;
  vehiculeToUpdate: Vehicule;
  vehiculeId: number;
  isDisabledModif: boolean;
  vehicules: Observable<Vehicule[]>;

  constructor(private vehiculeService: VehiculeService, private router: Router) {
  }

  ngOnInit(): void {
    this.reloadData();
  }

  reloadData(): void {
    this.vehicules = this.vehiculeService.getVehiculesList();
    this.disableModif();
  }

  disableModif(): void {
    this.isDisabledModif = true;
  }
  deleteVehicule(id: number): void {
    if (confirm('Supprimer le véhicule ?')) {
      this.vehiculeService.deleteVehicule(id)
        .subscribe(
          data => {
            console.log(data);
            this.reloadData();
          },
          error => console.log(error));
    }
  }

  vehiculeDetails(id: number): void {
    this.router.navigate(['detailsvehicule', id]);
  }

  updateVehicule(id: number, vehicule: Vehicule): void {
    this.isDisabledModif = false;
    this.vehiculeToUpdate = vehicule;
    this.vehiculeId = id;

  }


}
