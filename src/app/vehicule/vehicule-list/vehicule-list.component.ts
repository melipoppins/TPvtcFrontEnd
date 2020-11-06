import { Component, OnInit } from '@angular/core';
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
  vehicules: Observable<Vehicule[]>;

  constructor(private vehiculeService: VehiculeService, private router: Router) {
  }

  ngOnInit(): void {
    this.reloadData();
  }

  reloadData(): void {
    this.vehicules = this.vehiculeService.getVehiculesList();
  }

  deleteVehicule(id: number): void {
    this.vehiculeService.deleteVehicule(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  vehiculeDetails(id: number): void {
    this.router.navigate(['detailsvehicule', id]);
  }

  updateVehicule(id: number, value: any): void {
    this.router.navigate(['modifiervehicule', id]);

  }

}
